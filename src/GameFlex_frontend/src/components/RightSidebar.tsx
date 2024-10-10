// src/components/RightSidebar.tsx
import React from 'react';
import { Switch, Button } from 'antd';
import { UserOutlined, SettingOutlined, BulbOutlined, MenuOutlined, InfoCircleOutlined, LogoutOutlined } from '@ant-design/icons';
import '../index.scss';

interface RightSidebarProps {
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
  collapsed: boolean;
  onCollapse: () => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ toggleTheme, currentTheme, collapsed, onCollapse }) => {
  return (
    <div
      style={{
        width: collapsed ? 50 : 150, // Reduced widths
        background: '#16423C', // Updated background color to match theme
        color: '#D8A25E', // Updated text color
        padding: '16px',
        position: 'fixed',
        right: 0,
        top: 0,
        bottom: 0,
        transition: 'width 0.3s',
      }}
    >
      {/* Collapse/Expand Button */}
      <Button
        type="primary"
        shape="circle"
        icon={<MenuOutlined />}
        onClick={onCollapse}
        style={{ marginBottom: 16, backgroundColor: '#D8A25E', border: 'none' }} // Updated button color
      />

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {/* Profile */}
        <li style={{ marginBottom: 20, display: 'flex', alignItems: 'center', cursor: 'pointer', transition: 'background 0.2s' }} 
            onMouseEnter={e => e.currentTarget.style.background = '#D8A25E'} 
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
          <UserOutlined style={{ marginRight: collapsed ? 0 : 8, color: '#D8A25E' }} />
          {!collapsed && <span>Profile</span>}
        </li>

        {/* Preferences */}
        <li style={{ marginBottom: 20, display: 'flex', alignItems: 'center', cursor: 'pointer', transition: 'background 0.2s' }} 
            onMouseEnter={e => e.currentTarget.style.background = '#D8A25E'} 
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
          <SettingOutlined style={{ marginRight: collapsed ? 0 : 8, color: '#D8A25E' }} />
          {!collapsed && <span>Preferences</span>}
        </li>

        {/* Theme Switch */}
        <li style={{ marginBottom: 20, display: 'flex', alignItems: 'center', cursor: 'pointer', transition: 'background 0.2s' }} 
            onMouseEnter={e => e.currentTarget.style.background = '#D8A25E'} 
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
          <BulbOutlined style={{ marginRight: collapsed ? 0 : 8, color: '#D8A25E' }} />
          {!collapsed && <span>Theme</span>}
          <Switch
            style={{ marginLeft: collapsed ? 0 : 'auto' }}
            checked={currentTheme === 'dark'}
            onChange={toggleTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </li>

        {/* Help */}
        <li style={{ marginBottom: 20, display: 'flex', alignItems: 'center', cursor: 'pointer', transition: 'background 0.2s' }} 
            onMouseEnter={e => e.currentTarget.style.background = '#D8A25E'} 
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
          <InfoCircleOutlined style={{ marginRight: collapsed ? 0 : 8, color: '#D8A25E' }} />
          {!collapsed && <span>Help</span>}
        </li>

        {/* Logout */}
        <li style={{ marginBottom: 20, display: 'flex', alignItems: 'center', cursor: 'pointer', transition: 'background 0.2s' }} 
            onMouseEnter={e => e.currentTarget.style.background = '#D8A25E'} 
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
          <LogoutOutlined style={{ marginRight: collapsed ? 0 : 8, color: '#D8A25E' }} />
          {!collapsed && <span>Logout</span>}
        </li>
      </ul>
    </div>
  );
};

export default RightSidebar;
