import React from 'react';
import { Button, Input, Dropdown, Menu } from 'antd';
import { 
  BellOutlined, 
  SettingOutlined, 
  FullscreenOutlined, 
  FullscreenExitOutlined,
  UserOutlined,
} from '@ant-design/icons';
import logo from "../assets/gameflex.png";

interface TopBarProps {
  isFullScreen: boolean;
  toggleFullScreen: () => void;
  toggleRightSidebar: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ isFullScreen, toggleFullScreen, toggleRightSidebar }) => {
  // Menu for user profile dropdown
  const userMenu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  return (
    <div
      style={{
        padding: '0 24px',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px', // Height of the top bar
        borderBottom: '2px solid #D8A25E', // Softer border color
        width: '100%',
        position: 'fixed',
        zIndex: 1000,
        top: 0,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Shadow for depth
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ width: 40, height: 40, marginRight: 12 }} />
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#333' }}>GameFlex</h1>
      </div>

      <Input.Search
        placeholder="Search..."
        style={{ width: 300, marginRight: 20 }}
      />

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          type="text"
          icon={<BellOutlined style={{ fontSize: '20px', color: '#333' }} />}
          style={{ marginRight: 20, borderRadius: '4px', padding: 0 }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#D8A25E')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
        />
        <Button
          type="text"
          icon={<SettingOutlined style={{ fontSize: '20px', color: '#333' }} />}
          style={{ marginRight: 20, borderRadius: '4px', padding: 0 }}
          onClick={toggleRightSidebar}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#D8A25E')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
        />
        <Button
          type="text"
          icon={isFullScreen ? <FullscreenExitOutlined style={{ fontSize: '20px', color: '#333' }} /> : <FullscreenOutlined style={{ fontSize: '20px', color: '#333' }} />}
          style={{ borderRadius: '4px', padding: 0 }}
          onClick={toggleFullScreen}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#D8A25E')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
        />
        <Dropdown overlay={userMenu} trigger={['click']}>
          <Button
            type="text"
            icon={<UserOutlined style={{ fontSize: '20px', color: '#333' }} />}
            style={{ borderRadius: '4px', padding: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#D8A25E')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
          />
        </Dropdown>
      </div>
    </div>
  );
};

export default TopBar;
