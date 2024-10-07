// src/components/MyStadiumPanel.tsx

import React, { useState, useEffect } from 'react';
import { Card, Input, Button, Form, Statistic, Modal, message, List } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const MyStadiumPanel: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [stadiums, setStadiums] = useState([
    { id: 1, name: 'Stadium One', capacity: 50000 },
    { id: 2, name: 'Stadium Two', capacity: 60000 },
    { id: 3, name: 'Stadium Three', capacity: 70000 },
  ]);
  const [selectedStadium, setSelectedStadium] = useState<number | null>(null);

  const handleStadiumClick = (stadiumId: number) => {
    setSelectedStadium(stadiumId);
    navigate(`/stadium/${stadiumId}`); // Navigate to the stadium dashboard
  };

  return (
    <div style={{ padding: '16px', backgroundColor: '#f0f2f5', borderRadius: '8px' }}>
      <h2>My Stadiums</h2>
      <List
        bordered
        dataSource={stadiums}
        renderItem={(stadium) => (
          <List.Item onClick={() => handleStadiumClick(stadium.id)} style={{ cursor: 'pointer' }}>
            <h3>{stadium.name}</h3>
            <p>Capacity: {stadium.capacity}</p>
          </List.Item>
        )}
      />
      <StadiumStats />
      <Customize />
      <HostEvents />
    </div>
  );
};

// 1. StadiumStats Component
const StadiumStats: React.FC = () => {
  const [stats, setStats] = useState({
    capacity: 50000,
    eventsHosted: 35,
    revenue: 1200000,
  });

  useEffect(() => {
    // Fetch real data from an API if available
  }, []);

  return (
    <Card title="Stadium Stats" style={{ marginBottom: '16px' }}>
      <Statistic title="Capacity" value={stats.capacity} />
      <Statistic title="Events Hosted" value={stats.eventsHosted} style={{ marginTop: '16px' }} />
      <Statistic title="Total Revenue" value={`$${stats.revenue}`} style={{ marginTop: '16px' }} />
    </Card>
  );
};

// 2. Customize Component
const Customize: React.FC = () => {
  const [stadiumName, setStadiumName] = useState('My Awesome Stadium');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (values: { name: string }) => {
    setStadiumName(values.name);
    setIsEditing(false);
    message.success('Stadium name updated successfully!');
  };

  return (
    <Card title="Customize" style={{ marginBottom: '16px' }}>
      <h3>Stadium Name: {stadiumName}</h3>
      <Button type="primary" onClick={() => setIsEditing(true)}>Edit Stadium Name</Button>
      <Modal
        title="Edit Stadium Name"
        visible={isEditing}
        onCancel={() => setIsEditing(false)}
        footer={null}
      >
        <Form onFinish={handleSave}>
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
    </Card>
  );
};

// 3. HostEvents Component
const HostEvents: React.FC = () => {
  const [form] = Form.useForm();

  const handleHostEvent = (values: { eventName: string; date: string }) => {
    console.log('Event hosted:', values);
    message.success(`Event "${values.eventName}" scheduled for ${values.date}`);
    form.resetFields();
  };

  return (
    <Card title="Host Events">
      <Form form={form} onFinish={handleHostEvent}>
        <Form.Item
          label="Event Name"
          name="eventName"
          rules={[{ required: true, message: 'Please enter the event name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: 'Please enter the event date' }]}
        >
          <Input type="date" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Host Event</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default MyStadiumPanel;
