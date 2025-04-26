"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // To redirect after successful login

export default function AdminLoginPage() {
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Debugging log to check the environment key and entered key
    // console.log('Entered API Key:', apiKey);
    //  console.log('Stored API Key:', process.env.NEXT_PUBLIC_KEY);


    if (apiKey === process.env.NEXT_PUBLIC_KEY) {
      // Set admin_key cookie and redirect to dashboard if the key is correct
      document.cookie = `admin_key = ${apiKey}; path=/admin; max-age=3600`; // expires in 1 hour
      router.push('/admin'); // Redirect to admin dashboard after successful login
    } else {
      setError('Invalid API key. Please try again.');
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Admin Login</h1>
      
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
          Login
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
    </div>
  );
}
