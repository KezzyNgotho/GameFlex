// Stadium3D.tsx
import React from 'react';

interface StadiumDisplayProps {
  stadiumId: string;
}

const StadiumDisplay: React.FC<StadiumDisplayProps> = ({ stadiumId }) => {
  const stadiumLinks = {
    '1': {
      src: "https://sketchfab.com/models/5aa0ad43eab740959b0d0d96ec20523b/embed",
      title: "VR Basketball Court",
      creator: "Leandro Nicolas",
      creatorUrl: "https://sketchfab.com/LeandroN?utm_medium=embed&utm_campaign=share-popup&utm_content=5aa0ad43eab740959b0d0d96ec20523b",
    },
    '2': {
      src: "https://sketchfab.com/models/c9db2a1cf6a4451c9599a7cb168dbdcb/embed",
      title: "VR Tennis Stadium",
      creator: "Leandro Nicolas",
      creatorUrl: "https://sketchfab.com/LeandroN?utm_medium=embed&utm_campaign=share-popup&utm_content=c9db2a1cf6a4451c9599a7cb168dbdcb",
    },
    '3': {
      src: "https://sketchfab.com/models/5650f1739a5a4b5a9b27f9bf45278182/embed",
      title: "VR American Football Stadium",
      creator: "Leandro Nicolas",
      creatorUrl: "https://sketchfab.com/LeandroN?utm_medium=embed&utm_campaign=share-popup&utm_content=5650f1739a5a4b5a9b27f9bf45278182",
    },
    // Add more stadiums here as needed
  };

  const selectedStadium = stadiumLinks[stadiumId] || stadiumLinks['1']; // Default to the basketball court if ID is not found

  return (
    <div className="sketchfab-embed-wrapper" style={{ height: '400px', overflow: 'hidden' }}>
      <iframe
        title={selectedStadium.title}
        frameBorder="0"
        allowFullScreen
        webkitAllowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src={selectedStadium.src}
        style={{ width: '100%', height: '100%' }}
      />
      <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
        <a
          href={selectedStadium.src}
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          {selectedStadium.title}
        </a> by 
        <a
          href={selectedStadium.creatorUrl}
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          {selectedStadium.creator}
        </a> on 
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=5650f1739a5a4b5a9b27f9bf45278182"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
};

export default StadiumDisplay;
