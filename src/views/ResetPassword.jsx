import { useState } from 'react';
import { supabase } from '../supabase/supabaseClient.js';
import { useNavigate, Link } from 'react-router';

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      setMessage('Error updating password: ' + error.message);
    } else {
      setMessage('Password updated successfully! Redirecting...');
      setTimeout(() => navigate('/login'), 2500);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center z-0"
        style={{
          backgroundImage: 'url("/resetpassword.jpg")',
          backgroundPosition: 'top center',
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Transparent Form */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-xl text-white">
        <h2 className="text-3xl font-bold text-gray-300 text-center mb-2">Reset Password</h2>
        <p className="text-sm text-white/80 text-center mb-6">
          Enter your new password. This page was opened via your password reset email.
        </p>

        {message && (
          <div className="mb-4 text-yellow-500 px-4 py-2 rounded text-sm text-center">
            {message}
          </div>
        )}

        <form onSubmit={handlePasswordUpdate} className="space-y-4">
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-2 border border-white/20 text-white placeholder-white/50 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <button
            type="submit"
            className="w-full mt-2 bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 rounded-md transition-all duration-150 ease-in"
          >
            Update Password
          </button>
        </form>
          <p className="text-center text-sm text-white mt-6">
                  Return to {' '}
                  <Link to="/login" className="text-yellow-300 hover:underline font-medium">
                    Login Page
                  </Link>
                </p>
      </div>
      
    </div>
  );
}
