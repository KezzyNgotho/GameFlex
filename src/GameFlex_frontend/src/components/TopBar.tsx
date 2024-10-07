// TopBar.tsx
import React from 'react';
import { Button } from 'antd';
import { BellOutlined, SettingOutlined, FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import logo from "../assets/logo.png";

interface TopBarProps {
  isFullScreen: boolean;
  toggleFullScreen: () => void;
  toggleRightSidebar: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ isFullScreen, toggleFullScreen, toggleRightSidebar }) => {
  return (
    <div
      style={{
        padding: '0 24px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px', // Increase the height for a more prominent top bar
        borderBottom: '2px solid #000',
        width: '100%',
        position: 'fixed',
        zIndex: 1000,
        top: 0,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Add a shadow for a raised effect
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ width: 40, height: 40, marginRight: 12 }} /> {/* Increased logo size */}
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>GameFlex</h1> {/* Larger font size */}
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button type="text" icon={<BellOutlined />} style={{ fontSize: '20px', marginRight: 20 }} />
        <Button
          type="text"
          icon={<SettingOutlined />}
          style={{ fontSize: '20px' }}
          onClick={toggleRightSidebar}
        />
        <Button
          type="text"
          icon={isFullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
          style={{ fontSize: '20px', marginLeft: 20 }}
          onClick={toggleFullScreen}
        />
      </div>
    </div>
  );
};

export default TopBar;
