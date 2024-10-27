'use client';
import React from 'react';

export const SoundContext = React.createContext({});

export const SoundProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  const value = { soundEnabled, setSoundEnabled };

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
};
