import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three-stdlib';
import { AuthClient } from '@dfinity/auth-client'; // Import DFINITY Auth Client
import Sidebar from '../components/Sidebar'; // Import the Sidebar component

// Sound effects hook
const useSound = (url: string | undefined) => {
  const [audio] = useState(new Audio(url));

  const playSound = () => {
    audio.currentTime = 0; // Reset to the beginning
    audio.play();
  };

  return playSound;
};

// Stadium Model Loader
const StadiumModel = ({ onClick }) => {
  const fbx = useLoader(FBXLoader, '/karachistadium.fbx');

  // Event handler for click events
  const handleClick = (event: { stopPropagation: () => void; }) => {
    event.stopPropagation(); // Prevent the click from bubbling up
    const intersectedObject = fbx.children[0]; // Assume you're interested in the first child
    if (intersectedObject) {
      onClick(intersectedObject.name); // Trigger the onClick function
    }
  };

  return <primitive object={fbx} scale={0.01} onClick={handleClick} />;
};

// Main Dashboard Component
const Dashboard = () => {
  const [role, setRole] = useState(''); // User role state
  const [info, setInfo] = useState('');
  const playSound = useSound('/music.mp3'); // Sound for interactions
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Internet Identity Authentication
  const connectToInternetIdentity = async () => {
    const authClient = await AuthClient.create();
    authClient.login({
      identityProvider: 'https://identity.ic0.app', // ICP Identity Provider
      onSuccess: (identity) => {
        setIsAuthenticated(true);
        console.log('User authenticated:', identity);
      },
      onError: (error) => {
        console.error('Authentication error:', error);
      },
    });
  };

  const handleObjectClick = (name: any) => {
    playSound(); // Play sound on click
    setInfo(`You clicked on: ${name}`);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
 {/*      <Sidebar /> */}

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gradient-to-r from-blue-800 to-blue-400">
        <h1 className="text-white text-5xl font-extrabold mb-6 drop-shadow-md">User Dashboard</h1>
        
        {/* Role Selection */}
        <div className="role-selection mb-4">
          <button onClick={() => setRole('stadium_owner')} className="role-btn">Stadium Owner</button>
          <button onClick={() => setRole('team_manager')} className="role-btn">Team Manager</button>
          <button onClick={() => setRole('participant')} className="role-btn">Participant</button>
        </div>

        {/* Canvas for 3D Model */}
        <div className="canvas-wrapper w-full h-96 rounded-lg shadow-2xl overflow-hidden mb-4 border border-gray-600">
          <Canvas className="w-full h-full" shadows>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <StadiumModel onClick={handleObjectClick} />
            <OrbitControls enableZoom={true} />
          </Canvas>
        </div>

        {/* Stats and Leaderboards Section */}
        <div className="stats-leaderboards mb-4">
          <h2 className="text-white text-2xl font-bold">Real-time Stats</h2>
          {/* Integrate your stats and leaderboard display here */}
        </div>

        {/* NFT Marketplace */}
        <div className="nft-marketplace mb-4">
          <h2 className="text-white text-2xl font-bold">NFT Marketplace</h2>
          {/* Integrate your NFT marketplace component here */}
        </div>

        {/* Event Management */}
        <div className="event-management mb-4">
          <h2 className="text-white text-2xl font-bold">Event Management</h2>
          {/* Integrate your event management component here */}
        </div>

        {/* User Info Popup */}
        {info && (
          <div className="info-popup bg-gray-800 text-white p-4 rounded shadow-lg mt-2">
            <p>{info}</p>
          </div>
        )}

        {/* Wallet Connection Button */}
        <button 
          onClick={connectToInternetIdentity} 
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded mt-4 shadow-lg transition-transform duration-200 transform hover:scale-105"
        >
          {isAuthenticated ? 'Connected' : 'Connect with Internet Identity'}
        </button>
      </div>
    </div>
  );
};

// Main Stadium3D Component
export default function Stadium3D() {
  return <Dashboard />;
}
