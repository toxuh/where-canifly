import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Typography } from 'antd';

import './Sign.scss';

const { Title } = Typography;

const SignUp: React.FC = () => {
  return (
    <div>
      <Title level={3}>Sign up</Title>
      <Form
        name="sign-up"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={(data) => console.log(data)}
        onFinishFailed={(data) => console.log(data)}
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: 'Type username' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Type email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Type password' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <p>
        Already have an account? <Link to="/sign-in">Sign in</Link>.
      </p>
    </div>
  );
};

export default SignUp;
