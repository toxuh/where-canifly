import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Typography } from 'antd';

import useSign from './useSign';
import './Sign.scss';

const { Title } = Typography;

const SignIn: React.FC = () => {
  const { signIn } = useSign();

  return (
    <div>
      <Title level={3}>Sign in</Title>
      <Form
        name="sign-in"
        initialValues={{ remember: false }}
        onFinish={signIn}
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
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Type password' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <p>
        Not registered yet? <Link to="/sign-up">Sign up</Link>.
      </p>
    </div>
  );
};

export default SignIn;
