// Dashboard.tsx
import React, { useState } from 'react';
import { Layout, Divider } from 'antd';
import Sidebar from './Sidebar';
import MyStadium from './MyStadium';
import ManageTeam from './ManageTeam';
import NFTMarket from './NFTMarket';
import UpcomingEvents from './UpcomingEvents';
import RevenueTracker from './RevenueTracker';
import CreateTeam from './CreateTeam';
import RightSidebar from './RightSidebar';
import TopBar from './TopBar';
import "../index.scss";

const { Content } = Layout;

const Dashboard: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>('MyStadium');
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [rightCollapsed, setRightCollapsed] = useState<boolean>(true);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'MyStadium':
        return <MyStadium />;
      case 'ManageTeam':
        return <ManageTeam />;
      case 'UpcomingEvents':
        return <UpcomingEvents />;
      case 'NFTMarket':
        return <NFTMarket />;
      case 'RevenueTracker':
        return <RevenueTracker />;
      case 'CreateTeam':
        return <CreateTeam />;
      default:
        return <MyStadium />;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar */}
      <TopBar
        isFullScreen={isFullScreen}
        toggleFullScreen={toggleFullScreen}
        toggleRightSidebar={() => setRightCollapsed(!rightCollapsed)}
      />

      {/* Divider to separate Top Bar */}
      <Divider style={{ margin: 0, backgroundColor: '#ddd' }} />

      <Layout style={{ marginTop: '2px', flex: 1 }}>
        {/* Sidebar */}
        <Sidebar
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
          setActiveComponent={setActiveComponent}
        />

        <Layout style={{ marginLeft: collapsed ? 80 : 200, marginRight: rightCollapsed ? 60 : 250, flex: 1 }}>
          <Content style={{ padding: '16px', marginTop: '16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {renderComponent()}
            </div>
          </Content>
        </Layout>

        {!rightCollapsed && (
          <RightSidebar
            collapsed={rightCollapsed}
            onCollapse={() => setRightCollapsed(true)}
            style={{ height: 'calc(100vh - 66px)', position: 'fixed', top: '314px', right: 0 }}
          />
        )}
      </Layout>
    </Layout>
  );
};

export default Dashboard;
