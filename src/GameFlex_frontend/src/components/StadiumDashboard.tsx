import React, { useState, useEffect } from 'react'; 
import { useParams, Link } from 'react-router-dom';
import { Layout, Menu, Card, Button, Form, Input, Modal, message, Badge, Dropdown } from 'antd';
import { SettingOutlined, CalendarOutlined, UserAddOutlined, UserOutlined, HomeOutlined, BellOutlined, BarChartOutlined, EditOutlined } from '@ant-design/icons';
import StadiumDisplay from './Stadium3D';

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

  useEffect(() => {
    const loadStadiumDetails = async () => {
      try {
        const data = await fetchStadiumDetails(stadiumId);
        setStadiumName(data.name);
      } catch (error) {
        message.error('Failed to load stadium details. Please try again later.');
      }
    };

    loadStadiumDetails();
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
    setNotifications(0);
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
      <Header style={{ backgroundColor: '#16423C', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ color: '#D8A25E', margin: 0 }}>{stadiumName} Dashboard</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Badge count={notifications} style={{ marginRight: 20 }}>
            <BellOutlined style={{ fontSize: '24px', cursor: 'pointer', color: '#D8A25E' }} onClick={handleNotificationClick} />
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
            <UserOutlined style={{ fontSize: '24px', cursor: 'pointer', color: '#D8A25E' }} />
          </Dropdown>
        </div>
      </Header>
      <Layout>
        <Sider width={250} style={{ background: '#f0f2f5', borderRight: '1px solid #D8A25E' }}>
          <Menu mode="inline" defaultSelectedKeys={['home']} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="home" icon={<HomeOutlined style={{ color: '#D8A25E' }} />} style={{ fontWeight: 'bold' }}>
              <Link to="/Dashboard">Home</Link>
            </Menu.Item>
            <Menu.Item key="edit" icon={<EditOutlined style={{ color: '#D8A25E' }} />} onClick={() => setIsEditing(true)} style={{ fontWeight: 'bold' }}>
              Edit Stadium Name
            </Menu.Item>
            <Menu.Item key="hostEvent" icon={<CalendarOutlined style={{ color: '#D8A25E' }} />} onClick={() => setIsEventModalVisible(true)} style={{ fontWeight: 'bold' }}>
              Host Events
            </Menu.Item>
            <Menu.SubMenu key="eventCategories" title="Event Categories" icon={<CalendarOutlined style={{ color: '#D8A25E' }} />} style={{ fontWeight: 'bold' }}>
              {eventCategories.map((category) => (
                <Menu.Item key={category.key} onClick={() => setSelectedCategory(category.key)} style={{ fontWeight: 'normal' }}>
                  {category.label}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
            <Menu.Item key="statistics" icon={<BarChartOutlined style={{ color: '#D8A25E' }} />} style={{ fontWeight: 'bold' }}>
              Live Statistics
            </Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined style={{ color: '#D8A25E' }} />} style={{ fontWeight: 'bold' }}>
              Settings
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content>
            {/* Stadium Image Display */}
            <div style={{ marginBottom: '24px' }}>
              <StadiumDisplay stadiumId={stadiumId} />
            </div>

            <Card title={stadiumName} style={{ marginBottom: 24, borderColor: '#D8A25E', borderRadius: '10px' }}>
              {selectedCategory ? <p>Details about {selectedCategory}</p> : <p>Select an event category to manage.</p>}
            </Card>

            {/* Event Modal */}
            <Modal title="Host Event" visible={isEventModalVisible} onCancel={() => setIsEventModalVisible(false)} footer={null}>
              <Form form={eventForm} onFinish={handleHostEvent} layout="vertical">
                <Form.Item label="Event Name" name="eventName" rules={[{ required: true, message: 'Please enter the event name' }]}>
                  <Input />
                </Form.Item>
                <Form.Item label="Event Date" name="eventDate" rules={[{ required: true, message: 'Please select the event date' }]}>
                  <Input type="date" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" style={{ backgroundColor: '#D8A25E', borderColor: '#D8A25E' }}>
                    Schedule Event
                  </Button>
                </Form.Item>
              </Form>
            </Modal>

            {/* Edit Stadium Name Modal */}
            <Modal title="Edit Stadium Name" visible={isEditing} onCancel={() => setIsEditing(false)} footer={null}>
              <Form onFinish={handleEditStadiumName} layout="vertical">
                <Form.Item label="Stadium Name" name="name" initialValue={stadiumName} rules={[{ required: true, message: 'Please enter stadium name' }]}>
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" style={{ backgroundColor: '#D8A25E', borderColor: '#D8A25E' }}>
                    Update Name
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
function fetchStadiumDetails(stadiumId: string | undefined) {
  throw new Error('Function not implemented.');
}

