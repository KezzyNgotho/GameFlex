import React, { useState } from 'react';
import basketball from "../assets/basketball.jpg";
import football from "../assets/football.jpg";
import baseball from "../assets/baseball.jpg";
import "../index.scss";
import { FaStar } from 'react-icons/fa';

interface StadiumData {
  id: string;
  name: string;
  type: string;
  logoUrl: string;
  description: string;
  rating: number;
  priceType: 'free' | 'premium';
}

const stadiums: StadiumData[] = [
  {
    id: '1',
    name: 'Football Stadium',
    type: 'football',
    logoUrl: football,
    description: 'A modern football stadium with a seating capacity of 50,000.',
    rating: 4.5,
    priceType: 'premium',
  },
  {
    id: '2',
    name: 'Basketball Arena',
    type: 'basketball',
    logoUrl: basketball,
    description: 'An indoor basketball arena with state-of-the-art facilities.',
    rating: 4.7,
    priceType: 'free',
  },
  {
    id: '3',
    name: 'Baseball Field',
    type: 'baseball',
    logoUrl: baseball,
    description: 'An expansive baseball field designed for major league games.',
    rating: 4.3,
    priceType: 'premium',
  },
];

interface StadiumDisplayProps {
  color: string;
}

const StadiumDisplay: React.FC<StadiumDisplayProps> = ({ color }) => {
  const [selectedStadiumType, setSelectedStadiumType] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStadiumType(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredStadiums = stadiums.filter(
    (stadium) =>
      (!selectedStadiumType || stadium.type === selectedStadiumType) &&
      stadium.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center' }}>
        <input
          type="text"
          placeholder="Search stadiums..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            padding: '10px',
            borderRadius: '4px',
            border: '2px solid #D8A25E',
            backgroundColor: '#fff',
            color: '#16423C',
            width: '250px',
          }}
        />
        <select
          onChange={handleSelectChange}
          style={{
            padding: '10px',
            borderRadius: '4px',
            border: '2px solid #D8A25E',
            backgroundColor: '#fff',
            color: '#16423C',
            width: '200px',
          }}
        >
          <option value="">All Stadiums</option>
          <option value="football">Football</option>
          <option value="basketball">Basketball</option>
          <option value="baseball">Baseball</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {filteredStadiums.map((stadium) => (
          <div
            key={stadium.id}
            style={{
              backgroundColor: color,
              borderRadius: '12px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
              border: `3px solid #D8A25E`,
              position: 'relative',
            }}
          >
            <img
              src={stadium.logoUrl}
              alt={`${stadium.name} Logo`}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '15px', backgroundColor: '#16423C', color: '#D8A25E' }}>
              <h3 style={{ fontSize: '20px', margin: '0 0 10px', fontWeight: 'bold' }}>{stadium.name}</h3>
              <p style={{ fontSize: '14px', margin: '0 0 10px', color: '#D8A25E' }}>{stadium.description}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px' }}>
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar
                    key={index}
                    color={index < Math.round(stadium.rating) ? '#D8A25E' : '#ccc'}
                  />
                ))}
                <span style={{ fontSize: '14px' }}>{stadium.rating.toFixed(1)}</span>
              </div>
              <span
                style={{
                  display: 'inline-block',
                  padding: '5px 10px',
                  backgroundColor: stadium.priceType === 'premium' ? '#D8A25E' : '#16423C',
                  color: stadium.priceType === 'premium' ? '#16423C' : '#D8A25E',
                  borderRadius: '5px',
                  marginBottom: '10px',
                  fontWeight: 'bold',
                }}
              >
                {stadium.priceType === 'premium' ? 'Premium' : 'Free'}
              </span>
              <button
                onClick={() => (window.location.href = `/stadium/${stadium.id}`)}
                style={{
                  padding: '10px 15px',
                  backgroundColor: '#D8A25E',
                  color: '#16423C',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'background-color 0.2s',
                  marginTop: '10px',
                  width: '100%',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#C08E4D';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#D8A25E';
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StadiumDisplay;
