// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/utils/mongodb';
import Contact from '@/models/Message';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Connect to the database
    await dbConnect();

    // Check if a contact with this email already exists
    let contact = await Contact.findOne({ email });

    if (contact) {
      // If contact exists, add a new message to their messages array
      contact.messages.push({ content: message });
      contact.name = name; // Update name in case it changed
      contact.updatedAt = new Date();
    } else {
      // If contact doesn't exist, create a new one
      contact = new Contact({
        name,
        email,
        messages: [{ content: message }],
      });
    }

    // Save the contact
    await contact.save();

    // Optional: Send email notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
          subject: `New Contact Form Message from ${name}`,
          text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
          `,
          html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        });
      } catch (emailError) {
        console.error('Error sending email notification:', emailError);
        // We don't return an error response here as the message was still saved
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}