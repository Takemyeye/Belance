'use client';

import Cookies from 'js-cookie';
import { useState } from 'react';
import  Header from '../components/header'
import { useUser } from '../context/UserContext';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // context
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
        Cookies.set('token', data.token, { expires: 1 });
        setUser(data.user);
      }
    } catch (error) {
      console.log("error:", error);
    }
  }

  return ( 
    <div className='register'>
      <Header showPanel={false} />
    </div>
  );
}
