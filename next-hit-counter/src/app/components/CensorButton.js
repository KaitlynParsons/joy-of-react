'use client';
import React, { useState } from 'react';
import '../styles.css';

export const CensorButton = ({ children }) => {
  const [isCensored, setIsCensored] = useState(true);

  const handleOnClick = () => {
    setIsCensored(!isCensored);
  };

  return (
    <button className={isCensored ? 'censored' : ''} onClick={handleOnClick}>
      {children}
    </button>
  );
};
