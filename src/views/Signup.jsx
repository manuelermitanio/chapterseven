import { useState } from 'react';
import { supabase } from '../supabase/supabaseClient.js';
import { Link, useNavigate } from 'react-router';
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineLockClosed,
} from 'react-icons/hi';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setMessage(error.message);
      return;
    }

    const user = data.user;

    if (user && user.confirmed_at) {
      const { error: dbError } = await supabase.from('users').insert([
        { id: user.id, email: user.email, username },
      ]);

      if (dbError) {
        setMessage(`Signup succeeded but DB insert failed: ${dbError.message}`);
      } else {
        setMessage('Signup complete! Account confirmed.');
        navigate('/login');
      }
    } else {
      setMessage('Signup complete! Check your email to confirm your account before logging in.');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center z-0"
        style={{
          backgroundImage: 'url("/signup.jpg")',
          backgroundPosition: 'top center',
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Transparent Form */}
      <div className="relative z-10 w-full max-w-md  p-8 shadow-2xl rounded-xl">
        <h2 className="text-3xl font-bold text-gray-300 text-center mb-2">Join ChapterSeven</h2>
        <p className="text-sm text-white/80 text-center mb-6">
          Discover your story, connect with readers, and share your ideas.
        </p>

        {message && (
          <div className="mb-4 bg-gray-900 text-red-300 px-4 py-2 rounded text-sm">
            {message}
          </div>
        )}

        <div className="space-y-4">
          <div className="relative">
            <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 w-full px-4 py-2 border border-gray-400 text-white placeholder-white/50 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:border-0 focus:ring-red-400"
              required
            />
          </div>

          <div className="relative">
            <HiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="pl-10 w-full px-4 py-2 border border-gray-400 text-white placeholder-white/50 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:border-0 focus:ring-red-400"
              required
            />
          </div>

          <div className="relative">
            <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 w-full px-4 py-2 border border-gray-400 text-white placeholder-white/50 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:border-0 focus:ring-red-400"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          onClick={handleSignup}
          className="w-full mt-6 bg-red-800 hover:bg-red-700 text-white font-medium py-2 rounded-md transition-all duration-150 ease-in"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-white mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-red-600 hover:underline font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
