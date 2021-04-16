import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AuthProvider } from './auth';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <ToastProvider>{children}</ToastProvider>
      </AuthProvider>
    </>
  );
};

export default AppProvider;
