import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the Context - this is like creating a "storage box"
const AuthContext = createContext();

// Custom hook to use this context easily in other components
// Instead of importing useContext and AuthContext everywhere,
// we just import useAuth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

// AuthProvider component - wraps your whole app
// Provides authentication data to all child components
export const AuthProvider = ({ children }) => {
  
  // STATE: Current logged-in user (null if not logged in)
  const [user, setUser] = useState(null);
  
  // STATE: List of all registered users (stored in localStorage)
  const [users, setUsers] = useState([]);
  
  // STATE: Loading state while checking localStorage
  const [loading, setLoading] = useState(true);

  // EFFECT: Load saved data from localStorage when app starts
  useEffect(() => {
    // Get saved users from localStorage
    const savedUsers = localStorage.getItem('shoplocal_users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers)); // Convert JSON string to array
    }

    // Get current logged-in user from localStorage
    const savedUser = localStorage.getItem('shoplocal_current_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser)); // Convert JSON string to object
    }

    setLoading(false); // Done loading
  }, []); // Empty array means run only once when component mounts

  // FUNCTION: Sign up a new user
  const signup = (userData) => {
    // userData = { name, email, password, role }
    // role can be 'vendor' or 'customer'

    // Check if email already exists
    const existingUser = users.find(u => u.email === userData.email);
    if (existingUser) {
      throw new Error('Email already registered');
    }

    // Create new user object with unique ID
    const newUser = {
      id: Date.now().toString(), // Simple ID using timestamp
      ...userData,
      createdAt: new Date().toISOString()
    };

    // Add to users array
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    // Save to localStorage
    localStorage.setItem('shoplocal_users', JSON.stringify(updatedUsers));

    // Auto-login after signup
    setUser(newUser);
    localStorage.setItem('shoplocal_current_user', JSON.stringify(newUser));

    return newUser;
  };

  // FUNCTION: Login existing user
  const login = (email, password) => {
    // Find user by email
    const foundUser = users.find(u => u.email === email);

    // Check if user exists
    if (!foundUser) {
      throw new Error('User not found');
    }

    // Check password (in real app, this would be hashed!)
    if (foundUser.password !== password) {
      throw new Error('Incorrect password');
    }

    // Set as current user
    setUser(foundUser);
    localStorage.setItem('shoplocal_current_user', JSON.stringify(foundUser));

    return foundUser;
  };

  // FUNCTION: Logout current user
  const logout = () => {
    setUser(null);
    localStorage.removeItem('shoplocal_current_user');
  };

  // FUNCTION: Update user profile
  const updateProfile = (updates) => {
    // updates = { name, email, avatar, etc. }
    
    const updatedUser = { ...user, ...updates };

    // Update in users array
    const updatedUsers = users.map(u => 
      u.id === user.id ? updatedUser : u
    );

    setUsers(updatedUsers);
    setUser(updatedUser);

    // Save to localStorage
    localStorage.setItem('shoplocal_users', JSON.stringify(updatedUsers));
    localStorage.setItem('shoplocal_current_user', JSON.stringify(updatedUser));
  };

  // FUNCTION: Check if user is a vendor
  const isVendor = () => {
    return user?.role === 'vendor';
  };

  // FUNCTION: Check if user is a customer
  const isCustomer = () => {
    return user?.role === 'customer';
  };

  // VALUE: All data and functions we want to share
  const value = {
    user,          // Current logged-in user
    users,         // All registered users
    loading,       // Is data still loading?
    signup,        // Function to sign up
    login,         // Function to login
    logout,        // Function to logout
    updateProfile, // Function to update user info
    isVendor,      // Check if vendor
    isCustomer,    // Check if customer
    isAuthenticated: !!user, // Boolean: is someone logged in?
  };

  // Don't render children until we've loaded localStorage data
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  // Provide the context value to all children
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};