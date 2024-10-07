// src/components/RightSidebar.tsx
import React from 'react';
import { Switch, Button } from 'antd';
import { UserOutlined, SettingOutlined, BulbOutlined, MenuOutlined, ThemeOutlined } from '@ant-design/icons';
import "../index.scss";

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
        width: collapsed ? 60 : 200,
        background: '#001529',
        color: '#fff',
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
        style={{ marginBottom: 16, backgroundColor: '#1890ff', border: 'none' }}
      />

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {/* Profile */}
        <li style={{ marginBottom: 20, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <UserOutlined style={{ marginRight: collapsed ? 0 : 8 }} />
          {!collapsed && <span>Profile</span>}
        </li>

        {/* Preferences */}
        <li style={{ marginBottom: 20, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <SettingOutlined style={{ marginRight: collapsed ? 0 : 8 }} />
          {!collapsed && <span>Preferences</span>}
        </li>

        <li style={{ marginBottom: 20, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <MenuOutlined style={{ marginRight: collapsed ? 0 : 8 }} />
          {!collapsed && <span>Theme</span>}
        </li>

        {/* Theme Switch */}
      {/*   <li style={{ marginBottom: 20, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          {currentTheme === 'light' ? (
            <BulbOutlined style={{ marginRight: collapsed ? 0 : 8 }} />
          ) : (
            <SettingOutlined style={{ marginRight: collapsed ? 0 : 8 }} />
          )}
          {!collapsed && <span>Theme</span>}
          <Switch
            style={{ marginLeft: collapsed ? 0 : 'auto' }}
            checked={currentTheme === 'dark'}
            onChange={toggleTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </li> */}
      </ul>
    </div>
  );
};

export default RightSidebar;
