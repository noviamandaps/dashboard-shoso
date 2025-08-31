import React, { useState } from 'react'
import './StoreCard.css'

const StoreCard = ({ 
  image, 
  alt, 
  logo, 
  logoAlt, 
  name, 
  username, 
  isFollowing: initialFollowing, 
  stats 
}) => {
  const [isFollowing, setIsFollowing] = useState(initialFollowing)

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <div className="store-card">
      <img
        src={image}
        alt={alt}
        width="410"
        height="100"
      />
      
      <div className="store-logo-wrapper">
        <div className="store-logo-circle">
          <img
            src={logo}
            alt={logoAlt}
            className="store-logo"
          />
        </div>
      </div>
      
      <div className="store-name">
        <div>
          <p className="title-store">
            {name}
            <span>
              <img src="./assets/icons/ic_badge.svg" alt="Icon Badge" />
            </span>
          </p>
          <p className="username-store">{username}</p>
        </div>
        <div className="d-flex gap-3 align-items-center">
          <a href="#" className="btn-link">Visit Store</a>
          <button
            className={`button btn-follow rounded-pill ${isFollowing ? 'active' : ''}`}
            onClick={handleFollow}
          >
            {isFollowing ? 'Following' : '+Follow'}
          </button>
        </div>
      </div>
      
      <div className="store-detail">
        <div className="section-detail">
          <h6>{stats.totalShoes}</h6>
          <p>Total shoes</p>
        </div>
        <div className="vertical-line"></div>
        <div className="section-detail">
          <h6>{stats.totalFollowers}</h6>
          <p>Total followers</p>
        </div>
        <div className="vertical-line"></div>
        <div className="section-detail">
          <h6>{stats.exclusiveShoes}</h6>
          <p>Exclusive Shoe</p>
        </div>
      </div>
    </div>
  )
}

export default StoreCard