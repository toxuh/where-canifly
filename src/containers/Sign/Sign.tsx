import React from 'react';
import { ToastContainer } from 'react-toastify';

import './Sign.scss';

type Props = {
  children?: React.ReactNode;
};

const Sign: React.FC<Props> = ({ children }) => {
  return (
    <div className="Sign">
      {children}
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
    </div>
  );
};

export default Sign;
