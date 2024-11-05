'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ToastContext } from '../../../../components/ToastProvider';

function ContactPage() {
  const { createToast } = React.useContext(ToastContext);
  const router = useRouter();
  const handleOnSubmit = (event) => {
    event.preventDefault();
    router.push('/exercises/02-flash-messages');
    createToast(
      "Your message was received. We'll get back to you shorly!",
      'success'
    );
  };

  return (
    <main>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor='name'>Name:</label>
        <input id='name' required={true} />

        <label htmlFor='message'>Message:</label>
        <textarea id='message' />

        <button type='submit'>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
