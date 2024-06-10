import React from 'react';
import { useKeydown } from '../../hooks/useKeydown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  // Dismiss all toasts on Escape keypress
  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);
  useKeydown('Escape', handleEscape);

  const createToast = React.useCallback((message, variant) => {
    setToasts((currentToasts) => [
      ...currentToasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ]);
  }, []);

  const dismissToast = React.useCallback((toastId) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== toastId)
    );
  }, []);

  const toastValue = React.useMemo(
    () => ({
      toasts,
      createToast,
      dismissToast,
    }),
    [toasts, createToast, dismissToast]
  );

  return (
    <ToastContext.Provider value={toastValue}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
