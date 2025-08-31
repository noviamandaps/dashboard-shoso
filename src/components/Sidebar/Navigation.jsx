import React from 'react'
import NavigationItem from './NavigationItem'
import { marketplaceIcon, exploreIcon, auctionIcon, orderIcon, notificationIcon, favoriteIcon, settingsIcon } from './icons'
import { useNavigate } from 'react-router-dom'

const Navigation = ({ activeMenu, onMenuClick }) => {
  const navigate = useNavigate();
  
  const mainMenuItems = [
    {
      name: 'Marketplace',
      icon: marketplaceIcon,
      isActive: activeMenu === 'Marketplace',
      path: '/'
    },
    {
      name: 'Explore Product',
      icon: exploreIcon,
      isActive: activeMenu === 'Explore Product',
      path: '/explore'
    },
    {
      name: 'Shoe Auction',
      icon: auctionIcon,
      isActive: activeMenu === 'Shoe Auction',
      path: '/auction'
    }
  ]

  const accountMenuItems = [
    {
      name: 'Your Order',
      icon: orderIcon,
      isActive: activeMenu === 'Your Order',
      hasNotification: true,
      notificationCount: 1,
      path: '/orders'
    },
    {
      name: 'Notifications',
      icon: notificationIcon,
      isActive: activeMenu === 'Notifications',
      hasNotification: true,
      notificationCount: 9,
      path: '/notifications'
    },
    {
      name: 'Favorites Shoes',
      icon: favoriteIcon,
      isActive: activeMenu === 'Favorites Shoes',
      path: '/favorites'
    },
    {
      name: 'Account Settings',
      icon: settingsIcon,
      isActive: activeMenu === 'Account Settings',
      path: '/settings'
    }
  ]
  
  const handleMenuItemClick = (item) => {
    onMenuClick(item.name);
    navigate(item.path);
  };

  return (
    <nav className="menu flex-fill">
      <div className="section-menu">
        {mainMenuItems.map((item) => (
          <NavigationItem
            key={item.name}
            {...item}
            onClick={() => handleMenuItemClick(item)}
          />
        ))}
      </div>
      
      <div className="section-menu">
        <p className="fs-18 fw-500 mb-2">My Account</p>
        {accountMenuItems.map((item) => (
          <NavigationItem
            key={item.name}
            {...item}
            onClick={() => handleMenuItemClick(item)}
          />
        ))}
      </div>
    </nav>
  )
}

export default Navigation