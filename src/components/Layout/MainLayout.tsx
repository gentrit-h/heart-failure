import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const MainLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link to="/dashboard" className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
                Dashboard
              </Link>
              <Link to="/patients" className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
                Patients
              </Link>
              <Link to="/connectivity" className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
                Connectivity Summary
              </Link>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-red-600 hover:text-red-800"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;