import React, { useState } from 'react';
import Card from '../components/atoms/Card';
import Badge from '../components/atoms/Badge';

// Sample notifications data
const initialNotifications = [
  {
    id: 1,
    type: 'order',
    title: 'Your order has been shipped',
    description: 'Order #ORD-12345 has been shipped and is on its way to you.',
    time: '2 hours ago',
    read: false
  },
  {
    id: 2,
    type: 'promo',
    title: 'Flash Sale: 30% off on Nike products',
    description: 'Limited time offer for the next 24 hours. Use code NIKE30 at checkout.',
    time: '5 hours ago',
    read: false
  },
  {
    id: 3,
    type: 'auction',
    title: 'You\'ve been outbid',
    description: 'Someone has placed a higher bid on Nike Dunk High. Current bid: $215.00',
    time: '12 hours ago',
    read: false
  },
  {
    id: 4,
    type: 'restock',
    title: 'Product restocked',
    description: 'Adidas Ultraboost in your wishlist is back in stock.',
    time: '1 day ago',
    read: true
  },
  {
    id: 5,
    type: 'review',
    title: 'Review reminder',
    description: 'How was your recent purchase? Please leave a review for Nike Air Force 1.',
    time: '2 days ago',
    read: true
  },
  {
    id: 6,
    type: 'price_drop',
    title: 'Price drop alert',
    description: 'The price of Puma RS-X in your wishlist has dropped by 15%.',
    time: '3 days ago',
    read: true
  },
  {
    id: 7,
    type: 'system',
    title: 'Profile updated',
    description: 'Your account information has been updated successfully.',
    time: '5 days ago',
    read: true
  },
  {
    id: 8,
    type: 'reward',
    title: 'You earned 500 points',
    description: 'Points added for your recent purchase. Current balance: 1,250 points',
    time: '1 week ago',
    read: true
  },
  {
    id: 9,
    type: 'order',
    title: 'Order delivered',
    description: 'Your order #ORD-12344 has been delivered successfully.',
    time: '2 weeks ago',
    read: true
  }
];

const getNotificationIcon = (type) => {
  switch (type) {
    case 'order':
      return (
        <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
      );
    case 'promo':
      return (
        <div className="h-10 w-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
        </div>
      );
    case 'auction':
      return (
        <div className="h-10 w-10 rounded-full bg-danger-100 flex items-center justify-center text-danger-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      );
    case 'restock':
      return (
        <div className="h-10 w-10 rounded-full bg-success-100 flex items-center justify-center text-success-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      );
    default:
      return (
        <div className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>
      );
  }
};

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const markAllAsRead = () => {
    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      read: true
    }));
    setNotifications(updatedNotifications);
  };
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-neutral-900 mb-6">Notifications</h1>
      
      <div className="flex justify-between items-center mb-4">
        <p className="text-neutral-600">
          You have <span className="font-medium">{unreadCount}</span> unread notifications
        </p>
        <button 
          className="text-primary-600 hover:text-primary-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={markAllAsRead}
          disabled={unreadCount === 0}
        >
          Mark all as read
        </button>
      </div>
      
      <Card className="divide-y divide-neutral-100 overflow-hidden">
        {notifications.map(notification => (
          <div 
            key={notification.id}
            className={`flex p-4 ${!notification.read ? 'bg-primary-50' : ''}`}
          >
            {getNotificationIcon(notification.type)}
            
            <div className="ml-4 flex-1">
              <div className="flex justify-between">
                <h3 className={`font-medium ${!notification.read ? 'text-neutral-900' : 'text-neutral-700'}`}>
                  {notification.title}
                </h3>
                <span className="text-sm text-neutral-500">{notification.time}</span>
              </div>
              <p className={`text-sm ${!notification.read ? 'text-neutral-700' : 'text-neutral-500'}`}>
                {notification.description}
              </p>
              
              {!notification.read && (
                <Badge count="New" variant="primary" size="sm" className="mt-2" />
              )}
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default Notifications;
