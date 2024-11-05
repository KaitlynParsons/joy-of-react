import React from 'react';
import ToastProvider from '../../../components/ToastProvider';
import ToastShelf from '../../../components/ToastShelf';
import './styles.css';

function FlashMsgLayout({ children }) {
  return (
    <html lang='en'>
      <ToastProvider>
        <body>{children}</body>
        <ToastShelf />
      </ToastProvider>
    </html>
  );
}

export default FlashMsgLayout;
