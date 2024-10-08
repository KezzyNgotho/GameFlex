// SketchfabEmbed.tsx

import React from 'react';

const SketchfabEmbed: React.FC = () => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="Glow Stadium 2"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/ba2d411ca53a4468877fdfe01c1e6a48/embed"
        style={{ width: '100%', height: '500px' }} // Adjust width and height as needed
      ></iframe>
      <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
        <a
          href="https://sketchfab.com/3d-models/glow-stadium-2-ba2d411ca53a4468877fdfe01c1e6a48?utm_medium=embed&utm_campaign=share-popup&utm_content=ba2d411ca53a4468877fdfe01c1e6a48"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Glow Stadium 2
        </a>{' '}
        by{' '}
        <a
          href="https://sketchfab.com/djkorg?utm_medium=embed&utm_campaign=share-popup&utm_content=ba2d411ca53a4468877fdfe01c1e6a48"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          djkorg
        </a>{' '}
        on{' '}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=ba2d411ca53a4468877fdfe01c1e6a48"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
};

export default SketchfabEmbed;
