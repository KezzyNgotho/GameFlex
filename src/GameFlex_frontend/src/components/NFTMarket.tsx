// src/components/NFTMarket.jsx

import React from 'react';

const NFTMarket = () => {
  return (
    <div id="marketplace" className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">NFT Market</h2>
      <div>
        <h3 className="font-bold">NFT Grid</h3>
        <p>Display of available NFTs.</p>
      </div>
      <div>
        <h3 className="font-bold">Filters/Search</h3>
        <p>Options to filter and search through NFTs.</p>
      </div>
      <div>
        <h3 className="font-bold">Sell/Trade</h3>
        <p>Functionality to sell or trade NFTs.</p>
      </div>
    </div>
  );
};

export default NFTMarket;
