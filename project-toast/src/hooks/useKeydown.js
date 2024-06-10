import React from 'react';

export const useKeydown = (key, callback) => {
  React.useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === key) {
        callback(event);
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [key, callback]);
};
