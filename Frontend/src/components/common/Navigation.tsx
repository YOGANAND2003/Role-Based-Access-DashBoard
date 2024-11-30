import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { authService } from '../../services/auth.service';

const Navigation: React.FC = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-indigo-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-white text-2xl font-bold hover:text-indigo-200 transition duration-300">
              RBAC System
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link
                to="/about"
                className="text-white hover:text-indigo-200 transition duration-300"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-indigo-200 transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-white text-sm md:text-base font-semibold">
                  {user.username} ({user.role})
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-indigo-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-900 transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
