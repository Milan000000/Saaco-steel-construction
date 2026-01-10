
import React, { useState } from 'react';

interface AuthModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'birnintudu') {
      onSuccess();
    } else {
      setError(true);
      setPassword('');
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-industrial-950/90 backdrop-blur-sm">
      <div className="bg-industrial-900 border border-industrial-800 w-full max-w-md p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fa-solid fa-lock text-2xl"></i>
          </div>
          <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-wider">Staff Access</h2>
          <p className="text-industrial-400 mt-2">Please enter the administrative password</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              autoFocus
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full bg-industrial-800 border-2 rounded-lg px-4 py-3 text-white focus:outline-none transition-all ${
                error ? 'border-red-500 animate-shake' : 'border-industrial-700 focus:border-accent'
              }`}
              placeholder="Enter password..."
            />
            {error && <p className="text-red-500 text-xs mt-2 text-center">Invalid password. Access denied.</p>}
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 rounded-lg border border-industrial-700 text-industrial-300 hover:bg-industrial-800 transition-colors font-bold uppercase text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-accent hover:bg-orange-600 text-white px-4 py-3 rounded-lg transition-all font-bold uppercase text-sm shadow-lg shadow-accent/20"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
