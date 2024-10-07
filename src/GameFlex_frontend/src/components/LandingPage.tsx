// src/components/LandingPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LandingPage = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  // Handle button click to navigate to the authentication page
  const handleButtonClick = () => {
    navigate('/authentication'); // Navigate to the authentication page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md">
        <h1 className="text-4xl font-bold text-primary mb-4">Welcome to the Sports Metaverse</h1>
        <p className="text-lg text-subtext mb-6">
          Join our vibrant community where you can own stadiums, manage teams, and engage with fans.
        </p>
        <button
          className="bg-jungleGreen text-white font-semibold py-2 px-6 rounded transition duration-300 ease-in-out hover:bg-green-600"
          onClick={handleButtonClick} // Add click handler
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
