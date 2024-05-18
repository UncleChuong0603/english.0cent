'use client';

import React, { useState } from 'react';

const EmailSubscribe = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true); // State to track email validation

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && isValidEmail) { // Check if email is not empty and valid
      try {
        // Save email data to JSON file locally
        const emailData = { email };
        const jsonData = JSON.stringify(emailData);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'email_subscribe.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        // handle successful subscription
        alert('Subscription successful!');
        setEmail(''); // clear the input field
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    } else {
      alert('Please enter a valid email address.');
    }
  };

  // Function to validate email using regex
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Function to handle email input change
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsValidEmail(validateEmail(emailValue)); // Validate email and update state
  };

  return (
    <section className='flex-col bg-white rounded-3xl space-y-10 px-10 py-10'>
      <div className='head_text'>Subscribe for Email 0 cent</div>
      <form className='flex space-x-10' onSubmit={handleSubmit}>
        <div className='w-full h-16 bg-white border-2 border-black rounded-3xl px-10 py-10 flex-between'>
          <input
            type='email'
            className={`w-3/4 h-12 border-none outline-none ${isValidEmail ? '' : 'border-red-500'}`} // Add red border for invalid email
            placeholder='Type here to join Team 0 cent'
            value={email}
            onChange={handleEmailChange} // Change to handleEmailChange function
          />
          <button
            type='submit'
            className='relative w-1/4 h-12 bg-black text-white rounded-3xl flex-center transform transition duration-500 hover:scale-105'
          >
            Let me in
          </button>
        </div>
      </form>
    </section>
  );
};

export default EmailSubscribe;