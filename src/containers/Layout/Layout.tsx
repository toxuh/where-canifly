import React from 'react';
import { Layout as AntLayout } from 'antd';
import { ToastContainer } from 'react-toastify';

const { Content } = AntLayout;

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <AntLayout style={{ minHeight: '100vh' }}>
    <Content>{children}</Content>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      rtl={false}
      hideProgressBar
      newestOnTop
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </AntLayout>
);

export default Layout;
