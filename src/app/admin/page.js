// src/app/admin/page.js
"use client";
import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiKey, setApiKey] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/contact/messages', {
        headers: {
          'x-api-key': apiKey
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
      
      const data = await response.json();
      setContacts(data.contacts);
      setAuthenticated(true);
    } catch (err) {
      setError(err.message);
      setAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchContacts();
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      {!authenticated ? (
        <form onSubmit={handleSubmit} className="mb-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">API Key</label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <button 
            type="submit" 
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Authenticate
          </button>
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </form>
      ) : (
        <>
          <button 
            onClick={fetchContacts}
            className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Refresh Messages
          </button>
          
          {loading ? (
            <p>Loading contacts...</p>
          ) : contacts.length === 0 ? (
            <p>No messages found.</p>
          ) : (
            <div className="grid gap-6">
              {contacts.map((contact) => (
                <div key={contact._id} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{contact.name}</h2>
                    <a href={`mailto:${contact.email}`} className="text-blue-600">{contact.email}</a>
                  </div>
                  <div className="space-y-4">
                    {contact.messages.map((msg, idx) => (
                      <div key={idx} className="p-4 bg-white dark:bg-gray-700 rounded-md">
                        <p className="text-gray-700 dark:text-gray-300">{msg.content}</p>
                        <p className="text-sm text-gray-500 mt-2">
                          {new Date(msg.timestamp).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    First contact: {new Date(contact.createdAt).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Last updated: {new Date(contact.updatedAt).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}