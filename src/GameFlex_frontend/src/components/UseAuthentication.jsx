// src/components/UserAuthentication.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserAuthentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Replace this with your authentication logic (e.g., API call)
      const response = await fakeAuthService(email, password);

      if (response.success) {
        // If authentication is successful, navigate to the next page
        navigate('/role-selection'); // Adjust the route as needed
      } else {
        // Handle unsuccessful authentication
        setError(response.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred during login.'); // Handle errors
    }
  };

  // Fake authentication service for demonstration
  const fakeAuthService = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          resolve({ success: true });
        } else {
          resolve({ success: false, message: 'Invalid email or password' });
        }
      }, 1000);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md">
        <h2 className="text-2xl font-bold mb-4">User Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-2 mb-4 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border p-2 mb-4 w-full"
          />
          <button
            type="submit"
            className="bg-jungleGreen text-white font-semibold py-2 px-6 rounded transition duration-300 ease-in-out hover:bg-green-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAuthentication;
