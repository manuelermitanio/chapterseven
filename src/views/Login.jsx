import { useState } from 'react';
import { supabase } from '../supabase/supabaseClient.js';
import { Link, useNavigate } from 'react-router';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setMessage("Please enter valid credentials");
    } else {
      navigate('/');
    }
  };

  const handleGuestLogin = async () => {
  let guest_id = localStorage.getItem('guest_id');
  if (!guest_id) {
    guest_id = crypto.randomUUID();
    localStorage.setItem('guest_id', guest_id);
  }

  const user_agent = navigator.userAgent;
  const location = 'unknown';

  await supabase.from('guest_sessions').insert([
    {
      guest_id,
      user_agent,
      location,
      action: 'guest_login',
    },
  ]);

  const { error } = await supabase.auth.signInWithPassword({
    email: 'guest@chapterseven.dev',
    password: 'guestpassword123',
  });

  if (error) {
    console.error(error.message);
    setMessage('Guest login failed: ' + error.message);
  } else {
    navigate('/');
  }
};

const handlePasswordReset = async () => {
  if (!email){
    setMessage("Please enter your email to reset password.");
    return;
  }
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://localhost:5173/resetpassword', // Update link when deployed to production
  });

  if ( error ){
    setMessage(error.message);
  } else {
    setMessage('Password reset email sent. Please check your inbox.');
  }
};

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center z-0"
        style={{
          backgroundImage: 'url("/login.png")',
          backgroundPosition: 'top center',
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Transparent Form */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-gray-300 text-center mb-2">Welcome Back</h2>
        <p className="text-sm text-white/80 text-center mb-6">
          Let's continue your ChapterSeven journey.
        </p>

        {message && (
          <div className="mb-4 text-yellow-500 px-4 py-2 rounded text-sm">
            {message}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-2">
          <div className="relative">
            <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 w-full px-4 py-2 border border-gray-400 text-white placeholder-white/50 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:border-0 focus:ring-yellow-400"
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
              className="pl-10 w-full px-4 py-2 border border-gray-400 text-white placeholder-white/50 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:border-0 focus:ring-yellow-400"
              required
            />
            
          </div>
        
          <button type='button' onClick={handlePasswordReset} className="text-yellow-300 hover:underline font-medium hover:cursor-pointer">
           Forgot Password?
          </button>
       
          

          <button
            type="submit"
            className="w-full mt-6 bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 rounded-md transition-all duration-150 ease-in"
          >
            Log In
          </button>
          
          <button
            onClick={handleGuestLogin}
            type="submit"
            className="w-full bg-gray-500 hover:bg-gray-700 text-white font-medium py-2 rounded-md transition-all duration-150 ease-in"
          >
            Log In as Guest User
          </button>
          
        </form>

        <p className="text-center text-sm text-white mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="text-yellow-300 hover:underline font-medium">
            Signup now
          </Link>
        </p>
       
      </div>
    </div>
  );
}
