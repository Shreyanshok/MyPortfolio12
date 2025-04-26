// src/app/api/contact/messages/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/utils/mongodb';
import Contact from '@/models/Message';
import { headers } from 'next/headers';

export async function GET(request) {
  try {
    // For security, you should implement proper authentication
    // This is just a basic example using an API key
    const headersList = headers();
    const apiKey = headersList.get('x-api-key');
    
    if (!apiKey || apiKey !== process.env.NEXT_PUBLIC_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Connect to database
    await dbConnect();

    // Get all contacts with their messages
    const contacts = await Contact.find().sort({ updatedAt: -1 });

    return NextResponse.json({ contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}