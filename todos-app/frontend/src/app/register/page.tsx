'use client';

import Cookies from 'js-cookie';
import { useState } from 'react';
import { useUser } from '../context/UserContext';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const { setUser } = useUser();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        Cookies.set('token', data.token);
        setMessage('user created');
        setUser(data.user);
      }
    } catch (error) {
      setMessage('Network error');
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10">
      <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Name:</span>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Email:</span>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">password:</span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-4 text-center text-red-600">{message}</p>}
    </div>
  );
}
