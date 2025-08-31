import React from 'react'

const NavigationItem = ({ 
  name, 
  icon, 
  isActive, 
  hasNotification, 
  notificationCount, 
  onClick 
}) => {
  return (
    <a 
      href="#" 
      className={`item-menu ${isActive ? 'active' : ''}`}
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      {icon}
      <p className="flex-fill">{name}</p>
      {hasNotification && (
        <div className="circle-notif rounded-circle">
          <p>{notificationCount}</p>
        </div>
      )}
    </a>
  )
}

export default NavigationItem