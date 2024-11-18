import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types/auth';

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check sessionStorage for a saved user
    const storedUser = sessionStorage.getItem('user');
    console.log("storedUser",storedUser)
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username: string, password: string) => {
    // Simple authentication logic - replace with real auth later
    if (username === 'admin' && password === 'password') {
      const loggedInUser = { username, isAuthenticated: true };
      setUser(loggedInUser);
      sessionStorage.setItem('user', JSON.stringify(loggedInUser)); // Save to sessionStorage
      return true;
    } else {
      const storedUser = sessionStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('user'); // Clear user from sessionStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log("context",context)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
