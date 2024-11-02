import React from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const MainLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Function to get current tab name
  const getTabName = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/patients':
        return 'Patients';
      case '/connectivity':
        return 'Connectivity Summary';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simplified Header */}
      <header className="bg-white border-b">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left side - Current Tab Name */}
            <h1 className="text-xl font-semibold text-gray-700">
              {getTabName()}
            </h1>

            {/* Right side - Doctor Name and Logout */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Doctor Surname</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-red-600 hover:text-red-800"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r">
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <nav className="flex flex-col py-4">
            <Link 
              to="/dashboard" 
              className={`px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                location.pathname === '/dashboard' ? 'bg-gray-100 font-medium' : ''
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/patients" 
              className={`px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                location.pathname === '/patients' ? 'bg-gray-100 font-medium' : ''
              }`}
            >
              Patients
            </Link>
            <Link 
              to="/connectivity" 
              className={`px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                location.pathname === '/connectivity' ? 'bg-gray-100 font-medium' : ''
              }`}
            >
              Connectivity Summary
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="ml-64">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;