import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, Lock, User, ArrowLeft } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { loginAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (await loginAdmin(id, password)) {
      navigate('/blog/admin');
    } else {
      setError('Invalid ID or Password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7] px-6 font-sans">
      <div className="w-full max-w-sm">

        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-[#1d1d1f] rounded-[22px] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-gray-200">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#1d1d1f] mb-2">Admin Access</h1>
          <p className="text-gray-500 text-sm">Sign in to manage content.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full px-4 py-4 bg-white border border-gray-200 rounded-t-xl text-[17px] focus:outline-none focus:z-10 relative focus:border-[#0071E3] placeholder-gray-400"
              placeholder="Admin ID"
              autoFocus
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-4 bg-white border border-gray-200 rounded-b-xl text-[17px] focus:outline-none focus:z-10 relative focus:border-[#0071E3] placeholder-gray-400 -mt-[1px]"
              placeholder="Password"
            />
          </div>

          {error && (
            <div className="text-[#FF3B30] text-sm font-medium text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-4 bg-[#0071E3] text-white text-[17px] font-semibold rounded-xl hover:bg-[#0077ED] transition-colors mt-6 shadow-sm"
          >
            Sign In
          </button>
        </form>

        <button
          onClick={() => navigate('/')}
          className="w-full mt-8 text-[#0071E3] text-sm font-medium hover:underline flex items-center justify-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

      </div>
    </div>
  );
};

export default AdminLogin;