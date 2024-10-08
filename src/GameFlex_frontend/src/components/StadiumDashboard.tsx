import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout, Menu, Card, Button, Form, Input, Modal, message, Badge, Dropdown } from 'antd';
import {
  SettingOutlined,
  CalendarOutlined,
  UserAddOutlined,
  UserOutlined,
  HomeOutlined,
  BellOutlined,
  BarChartOutlined,
  EditOutlined,
} from '@ant-design/icons';
import StadiumDisplay from '../components/Stadium3D'; // Import the stadium component

const { Header, Content, Sider } = Layout;

const StadiumDashboard: React.FC = () => {
  const { stadiumId } = useParams<{ stadiumId: string }>();
  const [stadiumName, setStadiumName] = useState('My Awesome Stadium');
  const [isEditing, setIsEditing] = useState(false);
  const [eventForm] = Form.useForm();
  const [events, setEvents] = useState([]);
  const [isEventModalVisible, setIsEventModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [notifications, setNotifications] = useState<number>(5);

  // State for customization
  const [stadiumColor, setStadiumColor] = useState('#ffcc00'); // Example color customization
  const [stadiumSize, setStadiumSize] = useState({ width: 500, height: 300 }); // Example size customization

  useEffect(() => {
    // Fetch stadium details using the stadiumId from API or context
  }, [stadiumId]);

  const handleEditStadiumName = (values: { name: string }) => {
    setStadiumName(values.name);
    setIsEditing(false);
    message.success('Stadium name updated successfully!');
  };

  const handleHostEvent = (values) => {
    setEvents((prevEvents) => [...prevEvents, values]);
    message.success(`Event "${values.eventName}" scheduled for ${values.eventDate}`);
    eventForm.resetFields();
    setIsEventModalVisible(false);
  };

  const handleNotificationClick = () => {
    setNotifications(0); // Reset notifications when clicked
    message.info('All notifications viewed!');
  };

  const eventCategories = [
    { key: 'sports', label: 'Sports Events' },
    { key: 'concerts', label: 'Concerts and Festivals' },
    { key: 'corporate', label: 'Corporate Events' },
    { key: 'community', label: 'Community Events' },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#001529', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ color: '#fff', margin: 0 }}>{stadiumName} Dashboard</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Badge count={notifications} style={{ marginRight: 20 }}>
            <BellOutlined style={{ fontSize: '24px', cursor: 'pointer' }} onClick={handleNotificationClick} />
          </Badge>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="profile">
                  <UserOutlined />
                  Profile
                </Menu.Item>
                <Menu.Item key="settings">
                  <SettingOutlined />
                  Settings
                </Menu.Item>
                <Menu.Item key="logout">
                  <UserAddOutlined />
                  Logout
                </Menu.Item>
              </Menu>
            }
            trigger={['click']}
          >
            <UserOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
          </Dropdown>
        </div>
      </Header>
      <Layout>
        <Sider width={250} style={{ background: '#f0f2f5' }}>
          <Menu mode="inline" defaultSelectedKeys={['home']} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="home" icon={<HomeOutlined />}>
              <Link to="/Dashboard">Home</Link>
            </Menu.Item>
            <Menu.Item key="edit" icon={<EditOutlined />} onClick={() => setIsEditing(true)}>
              Edit Stadium Name
            </Menu.Item>
            <Menu.Item key="hostEvent" icon={<CalendarOutlined />} onClick={() => setIsEventModalVisible(true)}>
              Host Events
            </Menu.Item>
            <Menu.SubMenu key="eventCategories" title="Event Categories" icon={<CalendarOutlined />}>
              {eventCategories.map((category) => (
                <Menu.Item key={category.key} onClick={() => setSelectedCategory(category.key)}>
                  {category.label}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
            <Menu.Item key="statistics" icon={<BarChartOutlined />}>
              Live Statistics
            </Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content>
            {/* Stadium Image Display */}
            <div style={{ marginBottom: '24px', height: '400px', overflow: 'hidden' }}>
              <StadiumDisplay color={stadiumColor} size={stadiumSize} /> {/* Pass props for customization */}
            </div>

            <Card title={stadiumName} style={{ marginBottom: 24 }}>
              {selectedCategory ? <p>Details about {selectedCategory}</p> : <p>Select an event category to manage.</p>}
            </Card>

            {/* Event Modal */}
            <Modal title="Host Event" visible={isEventModalVisible} onCancel={() => setIsEventModalVisible(false)} footer={null}>
              <Form form={eventForm} onFinish={handleHostEvent}>
                <Form.Item label="Event Name" name="eventName" rules={[{ required: true, message: 'Please enter the event name!' }]}>
                  <Input />
                </Form.Item>
                <Form.Item label="Event Date" name="eventDate" rules={[{ required: true, message: 'Please select the event date!' }]}>
                  <Input type="date" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Schedule Event
                  </Button>
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
