// Sidebar.tsx
import React from 'react';
import { Menu, Layout } from 'antd';
import { DesktopOutlined, TeamOutlined, CalendarOutlined, ShopOutlined, BarChartOutlined, PlusOutlined } from '@ant-design/icons';

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
      style={{ height: 'calc(100vh - 64px)', position: 'fixed', top: '59px', left: 0 }}
    >
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<DesktopOutlined />} onClick={() => setActiveComponent('MyStadium')}>
          My Stadium
        </Menu.Item>
        <Menu.Item key="2" icon={<TeamOutlined />} onClick={() => setActiveComponent('ManageTeam')}>
          Manage Team
        </Menu.Item>
        <Menu.Item key="3" icon={<CalendarOutlined />} onClick={() => setActiveComponent('UpcomingEvents')}>
          Upcoming Events
        </Menu.Item>
        <Menu.Item key="4" icon={<ShopOutlined />} onClick={() => setActiveComponent('NFTMarket')}>
          NFT Market
        </Menu.Item>
        <Menu.Item key="5" icon={<BarChartOutlined />} onClick={() => setActiveComponent('RevenueTracker')}>
          Revenue Tracker
        </Menu.Item>
        <Menu.Item key="6" icon={<PlusOutlined />} onClick={() => setActiveComponent('CreateTeam')}>
          Create Team
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
