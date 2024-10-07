// src/components/StadiumDashboard.tsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout, Menu, Card, Button, Form, Input, Modal, message } from 'antd';
import {
  SettingOutlined,
  CalendarOutlined,
  InfoCircleOutlined,
  UserAddOutlined,
  ExpandOutlined,
  ToolOutlined,
  TeamOutlined,
  SkinOutlined
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

const StadiumDashboard: React.FC = () => {
  const { stadiumId } = useParams<{ stadiumId: string }>();
  const [stadiumName, setStadiumName] = useState('My Awesome Stadium');
  const [isEditing, setIsEditing] = useState(false);
  const [eventForm] = Form.useForm();
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    // Fetch stadium details using the stadiumId from API or context
    // Example: fetchStadiumDetails(stadiumId).then(data => setStadiumName(data.name));
  }, [stadiumId]);

  const handleEditStadiumName = (values: { name: string }) => {
    setStadiumName(values.name);
    setIsEditing(false);
    message.success('Stadium name updated successfully!');
  };

  const handleHostEvent = (values: { eventName: string; eventDate: string }) => {
    console.log('Event hosted:', values);
    message.success(`Event "${values.eventName}" scheduled for ${values.eventDate}`);
    eventForm.resetFields();
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    const stadiumArea = document.getElementById('virtual-stadium');
    if (stadiumArea) {
      if (!isFullScreen) {
        if (stadiumArea.requestFullscreen) {
          stadiumArea.requestFullscreen();
        } else if (stadiumArea.requestFullscreen) {
          stadiumArea.requestFullscreen();
        } else if (stadiumArea.requestFullscreen) {
          stadiumArea.requestFullscreen();
        } else if (stadiumArea.requestFullscreen) {
          stadiumArea.requestFullscreen();
        }
      } else {
        document.exitFullscreen();
      }
    }
  };

  const eventCategories = [
    { key: 'sports', label: 'Sports Events', description: 'Football matches, basketball games, athletics, and other sports competitions.' },
    { key: 'concerts', label: 'Concerts and Festivals', description: 'Live music performances, cultural events, and festivals.' },
    { key: 'corporate', label: 'Corporate Events', description: 'Company meetings, product launches, and corporate gatherings.' },
    { key: 'community', label: 'Community Events', description: 'Local events, fairs, and charity functions.' },
  ];

  const managementOptions = [
    { key: 'maintenance', label: 'Maintenance', description: 'Regular maintenance of facilities, seating, and amenities.' },
    { key: 'staff', label: 'Staff Management', description: 'Hiring and scheduling staff for events, including security, ushers, and concessions.' },
  ];

  const customizationOptions = [
    { key: 'branding', label: 'Naming and Branding', description: 'Customizing the stadium\'s name and branding for events or sponsors.' },
    { key: 'interior', label: 'Interior Design', description: 'Configuring seating arrangements and decor for specific events.' },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#001529', color: '#fff' }}>
        <h1 style={{ color: '#fff', margin: 0 }}>Stadium Dashboard</h1>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#f0f2f5' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<InfoCircleOutlined />}>
              <Link to="#">Stadium Info</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<SettingOutlined />} onClick={() => setIsEditing(true)}>
              Edit Stadium Name
            </Menu.Item>
            <Menu.Item key="3" icon={<CalendarOutlined />}>
              <Link to="#">Host Events</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UserAddOutlined />}>
              <Link to="#">Manage Users</Link>
            </Menu.Item>
            <Menu.SubMenu key="eventCategories" title="Event Categories" icon={<CalendarOutlined />}>
              {eventCategories.map(category => (
                <Menu.Item key={category.key}>
                  <Link to="#">{category.label}</Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
            <Menu.SubMenu key="stadiumManagement" title="Stadium Management" icon={<ToolOutlined />}>
              {managementOptions.map(option => (
                <Menu.Item key={option.key}>
                  <Link to="#">{option.label}</Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
            <Menu.SubMenu key="customizationOptions" title="Customization Options" icon={<SkinOutlined />}>
              {customizationOptions.map(option => (
                <Menu.Item key={option.key}>
                  <Link to="#">{option.label}</Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
            <Menu.Item key="8" icon={<ExpandOutlined />} onClick={toggleFullScreen}>
              {isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#fff',
              borderRadius: '8px',
            }}
          >
            <h2>{stadiumName}</h2>

            <Card title="Virtual Stadium" style={{ marginBottom: '16px' }}>
              <div id="virtual-stadium" style={{
                width: isFullScreen ? '100%' : '100%',
                height: isFullScreen ? '100vh' : '300px',
                backgroundColor: '#e6e6e6',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '8px',
                position: 'relative'
              }}>
                <h3 style={{ textAlign: 'center' }}>Virtual Stadium (Interactive Area)</h3>
                <Button style={{ position: 'absolute', bottom: '10px' }} onClick={() => message.info("Customize your stadium here!")}>Customize Stadium</Button>
              </div>
            </Card>

            <Modal
              title="Edit Stadium Name"
              visible={isEditing}
              onCancel={() => setIsEditing(false)}
              footer={null}
            >
              <Form onFinish={handleEditStadiumName}>
                <Form.Item
                  label="Stadium Name"
                  name="name"
                  initialValue={stadiumName}
                  rules={[{ required: true, message: 'Please enter a stadium name' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">Save</Button>
                </Form.Item>
              </Form>
            </Modal>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default StadiumDashboard;
