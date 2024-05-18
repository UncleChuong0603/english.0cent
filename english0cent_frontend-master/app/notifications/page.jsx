'use client';

import React, { useState } from 'react';

const notifications_sample = [
  {
    title: 'Advanced React Techniques',
    content: 'Learn advanced patterns and techniques for building complex React applications. This course covers hooks, context API, performance optimization, and more to help you take your React skills to the next level.'
  },
  {
    title: 'Mastering CSS Grid and Flexbox',
    content: 'Discover the power of CSS Grid and Flexbox for creating responsive and flexible web layouts. This course includes practical examples and projects to help you master these essential CSS modules.'
  },
  {
    title: 'JavaScript ES6 and Beyond',
    content: 'Stay up-to-date with the latest features of JavaScript. This course covers ES6 and newer versions, including arrow functions, async/await, destructuring, modules, and more. Enhance your coding efficiency and readability.'
  },
  {
    title: 'Full-Stack Development with Node.js',
    content: 'Become a full-stack developer by learning how to build server-side applications with Node.js. This course covers Express, MongoDB, RESTful APIs, authentication, and deployment, providing a comprehensive full-stack development experience.'
  },
  {
    title: 'Introduction to TypeScript',
    content: 'TypeScript is a powerful tool for writing robust and maintainable JavaScript code. This course introduces TypeScript fundamentals, including types, interfaces, classes, and generics, helping you write better code with fewer bugs.'
  },
  {
    title: 'Building Mobile Apps with React Native',
    content: 'Create cross-platform mobile applications using React Native. This course covers the basics of React Native, including component creation, navigation, state management, and connecting to APIs, enabling you to build high-quality mobile apps.'
  },
  {
    title: 'Data Visualization with D3.js',
    content: 'Learn how to create dynamic and interactive data visualizations using D3.js. This course covers the fundamentals of D3, including scales, axes, shapes, and transitions, to help you present data in a visually engaging way.'
  },
  {
    title: 'Web Security Fundamentals',
    content: 'Understand the basics of web security to protect your applications from common threats. This course covers topics such as HTTPS, CORS, OWASP Top 10, authentication, and secure coding practices, ensuring your web applications are secure.'
  },
  {
    title: 'GraphQL for Modern Web APIs',
    content: 'Learn how to build and consume GraphQL APIs for more efficient data fetching. This course covers the basics of GraphQL, setting up a GraphQL server, querying and mutating data, and integrating GraphQL with front-end applications.'
  },
  {
    title: 'DevOps Essentials with Docker and Kubernetes',
    content: 'Get started with DevOps by learning about containerization and orchestration using Docker and Kubernetes. This course covers the fundamentals of Docker, creating and managing containers, Kubernetes architecture, and deploying applications in a Kubernetes cluster.'
  }
];


const Page = () => {
  const [notifications, setNotifications] = useState(notifications_sample);

  const handleMarkAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  const handleRemoveNotification = (index) => {
    setNotifications(notifications.filter((_, i) => i !== index));
  };

  return (
    <section className='flex-col px-10 py-10 space-y-10 text-justify'>
      <div className='flex-end w-full space-x-10'>
        <div
          className='w-1/4 bg-black rounded-3xl px-3 py-3 text-white text-center cursor-pointer'
          onClick={handleMarkAsRead}
        >
          Mark as read
        </div>
        <div
          className='w-1/4 bg-black rounded-3xl px-3 py-3 text-white text-center cursor-pointer'
          onClick={handleClearNotifications}
        >
          Clear the read notifications
        </div>
      </div>
      {notifications.length > 0 ? (
        notifications.map((notification, index) => (
          <div
            key={index}
            className={`relative flex bg-white rounded-3xl px-10 py-10 space-y-10 ${notification.read ? 'opacity-50' : ''}`}
          >
            <button
              className='w-auto absolute top-5 right-10 text-2xl font-bold'
              onClick={() => handleRemoveNotification(index)}
            >
            X
            </button>
            <div className='flex-col space-y-10'>
              <div className='w-full head_text'>{notification.title}</div>
              <div className='w-full h-auto flex'>{notification.content}</div>
            </div>
          </div>
        ))
      ) : (
        <div className='flex-center w-full h-full px-10 py-10 bg-white rounded-3xl text-2xl font-bold'>
          There are no new notifications
        </div>
      )}
    </section>
  );
};

export default Page;