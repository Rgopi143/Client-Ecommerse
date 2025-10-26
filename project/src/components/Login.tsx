import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { X } from 'lucide-react';

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Login({ isOpen, onClose }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<'buyer' | 'seller'>('buyer');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      login(email, password, selectedRole);
      onClose();
      setEmail('');
      setPassword('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-scale-in">
        <div className="bg-gradient-to-r from-[#2874f0] to-[#1c5ec7] p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold text-white">Login / Sign Up</h2>
          <p className="text-white/90 text-sm mt-1">Get access to your Orders, Wishlist and Recommendations</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2874f0] focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2874f0] focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Your Role
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedRole('buyer')}
                className={`p-4 rounded-xl border-2 transition-all transform hover:scale-105 ${
                  selectedRole === 'buyer'
                    ? 'border-[#2874f0] bg-[#2874f0]/10'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    selectedRole === 'buyer' ? 'bg-[#2874f0]' : 'bg-gray-100'
                  }`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <span className={`font-semibold ${selectedRole === 'buyer' ? 'text-[#2874f0]' : 'text-gray-600'}`}>
                    Buyer
                  </span>
                  <span className="text-xs text-gray-500 text-center">Shop & Purchase</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole('seller')}
                className={`p-4 rounded-xl border-2 transition-all transform hover:scale-105 ${
                  selectedRole === 'seller'
                    ? 'border-[#2874f0] bg-[#2874f0]/10'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    selectedRole === 'seller' ? 'bg-[#2874f0]' : 'bg-gray-100'
                  }`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className={`font-semibold ${selectedRole === 'seller' ? 'text-[#2874f0]' : 'text-gray-600'}`}>
                    Seller
                  </span>
                  <span className="text-xs text-gray-500 text-center">List & Sell</span>
                </div>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#2874f0] to-[#1c5ec7] text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all transform hover:scale-[1.02]"
          >
            Continue
          </button>

          <p className="text-xs text-gray-500 text-center">
            By continuing, you agree to Flipkart's Terms of Use and Privacy Policy
          </p>
        </form>
      </div>
    </div>
  );
}

