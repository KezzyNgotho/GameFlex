// src/components/Sidebar.tsx
import React from 'react';
import { Menu, Layout } from 'antd';
import {
  DesktopOutlined,
  TeamOutlined,
  CalendarOutlined,
  ShopOutlined,
  BarChartOutlined,
  PlusOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean;
  onCollapse: () => void;
  setActiveComponent: (component: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onCollapse, setActiveComponent }) => {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      style={{
        height: 'calc(100vh - 64px)',
        position: 'fixed',
        top: '59px',
        left: 0,
        backgroundColor: '#16423C',
      }}
    >
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        style={{
          backgroundColor: '#16423C',
          color: '#D8A25E',
          fontWeight: 'bold',
          border: 'none', // Remove default menu border
        }}
      >
        {[
          { key: '1', icon: <DesktopOutlined />, label: 'My Stadium' },
          { key: '2', icon: <TeamOutlined />, label: 'Manage Team' },
          { key: '3', icon: <CalendarOutlined />, label: 'Upcoming Events' },
          { key: '4', icon: <ShopOutlined />, label: 'NFT Market' },
          { key: '5', icon: <BarChartOutlined />, label: 'Revenue Tracker' },
          { key: '6', icon: <PlusOutlined />, label: 'Create Team' },
        ].map(({ key, icon, label }) => (
          <Menu.Item
            key={key}
            icon={React.cloneElement(icon, { style: { color: '#D8A25E', fontSize: '16px' } })} // Decreased icon size
            onClick={() => setActiveComponent(label.replace(' ', ''))}
            style={{
              padding: '15px 20px',
              transition: 'background-color 0.3s, color 0.3s', // Smooth transition for hover
              fontSize: '14px', // Reduced font size for a sharper look
              color: '#D8A25E',
            }}
            className="menu-item hover:bg-[#D8A25E] hover:text-[#16423C]" // Hover effects
          >
            {label}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
