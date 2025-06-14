
"use client";
import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    link: 'https://wa.me/917803919680',
    color: 'bg-green-500',
    hoverColor: 'hover:bg-green-600'
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    link: 'mailto:shreyansh.ok@gmail.com',
    color: 'bg-red-500',
    hoverColor: 'hover:bg-red-600'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    link: 'https://in.linkedin.com/in/shreyansh-mishra-0793a6291?trk=people-guest_people_search-card ',
    color: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://www.instagram.com/shreyansh_.11?igsh=MXExNnpoaTFxMHprNw%3D%3D&utm_source=qr ',
    color: 'bg-pink-600',
    hoverColor: 'hover:bg-pink-700'
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    link: 'https://github.com/Shreyanshok',
    color: 'bg-gray-800',
    hoverColor: 'hover:bg-gray-900'
  }
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-violet-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-violet-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-violet-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-violet-600 dark:hover:bg-violet-700 text-white rounded-md font-medium transition-colors flex justify-center items-center"
      >
        {isSubmitting ? (
          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : 'Send Message'}
      </button>
      
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200 rounded-md">
          Your message has been sent successfully! I&apos;ll get back to you soon.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200 rounded-md">
          {errorMessage}
        </div>
      )}
    </form>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 dark:bg-violet-400 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out to me through any of the channels below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Me</h3>
            <ContactForm />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center p-4 ${social.color} ${social.hoverColor} text-white rounded-lg transition-all duration-300`}
                  >
                    <Icon className="text-2xl mr-3" />
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                );
              })}
            </div>
            
            <div className="mt-10">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Working Hours</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <strong>Monday - Friday:</strong> 8:00 AM - 10:00 PM
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Weekends:</strong> Available for urgent matters
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;