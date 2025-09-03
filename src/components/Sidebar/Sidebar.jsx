import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { useCart } from '../../context/CartContext'
import ShoppingCart from '../organisms/ShoppingCart'

const Sidebar = ({ activeMenu = 'Marketplace', onMenuClick }) => {
  const { theme, toggleTheme } = useTheme();
  const { getCartItemCount } = useCart();
  const location = useLocation();
  const [isMobileView, setIsMobileView] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Check if we're in mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 992);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMobileMenuClick = (menuName) => {
    if (isMobileView) {
      setShowSidebar(false);
    }
    if (onMenuClick) {
      onMenuClick(menuName);
    }
  };

  const getActiveClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <>
    <aside className={`sidebar ${showSidebar ? 'show' : ''}`}>
      {/* Mobile close button */}
      {isMobileView && (
        <div className="d-flex justify-content-end m-4">
          <button
            onClick={() => setShowSidebar(false)}
            className="btn p-0 border-0 fs-4"
            aria-label="Button Close"
          >
            <i className="fas fa-close"></i>
          </button>
        </div>
      )}

      {/* Logo section */}
      <div className="logo-brand">
        <img
          src="/assets/images/logo.png"
          alt="Logo Shoso"
          width="52"
          height="50"
        />
        <div>
          <h6 className="title-store">Shoe Store</h6>
          <p className="tagline-store">Comfortable on the feet</p>
        </div>
      </div>

      <hr />

      {/* Navigation menu */}
      <nav className="menu">
        <div className="section-menu">
          <Link 
            to="/" 
            className={`item-menu ${getActiveClass('/')}`}
            onClick={() => handleMobileMenuClick('Marketplace')}
          >
            <svg fill="currentColor" style={{ width: '20px', height: '20px', flexShrink: 0 }}>
              <path d="M6 2.5C3.79086 2.5 2 4.29086 2 6.5V10.5C2 11.6046 2.89543 12.5 4 12.5H5.5C6.32843 12.5 7 11.8284 7 11V10.5C7 9.94772 7.44772 9.5 8 9.5C8.55228 9.5 9 9.94772 9 10.5V10.8333C9 11.7538 9.74619 12.5 10.6667 12.5H12.3333C13.2538 12.5 14 11.7538 14 10.8333V10.5C14 9.94772 14.4477 9.5 15 9.5C15.5523 9.5 16 9.94772 16 10.5V11C16 11.8284 16.6716 12.5 17.5 12.5H19C20.1046 12.5 21 11.6046 21 10.5V6.5C21 4.29086 19.2091 2.5 17 2.5H6ZM3 14.75C3.41421 14.75 3.75 15.0858 3.75 15.5V18.5C3.75 20.2949 5.20507 21.75 7 21.75H16C17.7949 21.75 19.25 20.2949 19.25 18.5V15.5C19.25 15.0858 19.5858 14.75 20 14.75C20.4142 14.75 20.75 15.0858 20.75 15.5V18.5C20.75 21.1234 18.6234 23.25 16 23.25H7C4.37665 23.25 2.25 21.1234 2.25 18.5V15.5C2.25 15.0858 2.58579 14.75 3 14.75ZM9 16.75C9 16.3358 9.33579 16 9.75 16H13.25C13.6642 16 14 16.3358 14 16.75C14 17.1642 13.6642 17.5 13.25 17.5H9.75C9.33579 17.5 9 17.1642 9 16.75Z" />
            </svg>
            <p style={{ flex: 1, margin: '0', marginLeft: '12px' }}>Marketplace</p>
          </Link>

          <Link 
            to="/explore" 
            className={`item-menu ${getActiveClass('/explore')}`}
            onClick={() => handleMobileMenuClick('Explore Product')}
          >
            <svg fill="currentColor" style={{ width: '20px', height: '20px', flexShrink: 0 }}>
              <mask id="path-1-inside-1_1_101" fill="white">
                <path d="M5.9995 2.00305C5.99706 1.99898 5.99116 1.99898 5.98872 2.00305C5.00741 3.63857 3.6386 5.00738 2.00308 5.98869C1.99901 5.99113 1.99901 5.99702 2.00308 5.99946C3.6386 6.98077 5.00741 8.34959 5.98872 9.98511C5.99116 9.98917 5.99706 9.98917 5.9995 9.98511C6.98081 8.34959 8.34962 6.98077 9.98514 5.99946C9.98921 5.99702 9.98921 5.99113 9.98514 5.98869C8.34962 5.00738 6.98081 3.63857 5.9995 2.00305ZM16.6586 2.00677C16.6551 2.00102 16.6468 2.00102 16.6434 2.00677C15.2556 4.31973 13.3198 6.25553 11.0068 7.64331C11.0011 7.64676 11.0011 7.65509 11.0068 7.65854C13.3198 9.04632 15.2556 10.9821 16.6434 13.2951C16.6468 13.3008 16.6551 13.3008 16.6586 13.2951C18.0464 10.9821 19.9822 9.04632 22.2951 7.65854C22.3009 7.65509 22.3009 7.64676 22.2951 7.64331C19.9822 6.25553 18.0464 4.31973 16.6586 2.00677ZM7.65859 11.0068C7.65514 11.001 7.6468 11.001 7.64335 11.0068C6.25557 13.3197 4.31978 15.2555 2.00681 16.6433C2.00106 16.6468 2.00106 16.6551 2.00681 16.6585C4.31978 18.0463 6.25557 19.9821 7.64335 22.2951C7.6468 22.3008 7.65514 22.3008 7.65859 22.2951C9.04637 19.9821 10.9822 18.0463 13.2951 16.6585C13.3009 16.6551 13.3009 16.6468 13.2951 16.6433C10.9822 15.2555 9.04637 13.3197 7.65859 11.0068ZM17.9887 14.003C17.9912 13.999 17.9971 13.999 17.9995 14.003C18.9808 15.6386 20.3496 17.0074 21.9851 17.9887C21.9892 17.9911 21.9892 17.997 21.9851 17.9995C20.3496 18.9808 18.9808 20.3496 17.9995 21.9851C17.9971 21.9892 17.9912 21.9892 17.9887 21.9851C17.0074 20.3496 15.6386 18.9808 14.0031 17.9995C13.999 17.997 13.999 17.9911 14.0031 17.9887C15.6386 17.0074 17.0074 15.6386 17.9887 14.003Z" />
              </mask>
              <path d="M5.98872 2.00305L7.27496 2.77479L7.27498 2.77477L5.98872 2.00305ZM5.9995 2.00305L7.28574 1.23131L7.28572 1.23127L5.9995 2.00305ZM2.00308 5.98869L1.23134 4.70245L1.23129 4.70248L2.00308 5.98869ZM2.00308 5.99946L2.77482 4.71322L2.77479 4.7132L2.00308 5.99946ZM5.98872 9.98511L4.70248 10.7569L4.7025 10.7569L5.98872 9.98511ZM5.9995 9.98511L4.71326 9.21336L4.71324 9.21339L5.9995 9.98511ZM9.98514 5.99946L9.21348 4.71317L9.2134 4.71322L9.98514 5.99946ZM9.98514 5.98869L9.2134 7.27493L9.21342 7.27495L9.98514 5.98869ZM16.6434 2.00677L15.3571 1.23498L15.3571 1.23502L16.6434 2.00677ZM16.6586 2.00677L17.9448 1.23502L17.9448 1.23498L16.6586 2.00677Z" fill="currentColor" mask="url(#path-1-inside-1_1_101)" />
            </svg>
            <p style={{ flex: 1, margin: '0', marginLeft: '12px' }}>Explore Product</p>
          </Link>

          <Link 
            to="/auction" 
            className={`item-menu ${getActiveClass('/auction')}`}
            onClick={() => handleMobileMenuClick('Shoe Auction')}
          >
            <svg fill="none" style={{ width: '20px', height: '20px', flexShrink: 0 }}>
              <path fillRule="evenodd" d="M16.8241 11.5694L16.4129 11.973L20.3615 15.6397C21.8365 17.0093 21.8019 19.3545 20.2871 20.6799C18.9789 21.8246 17.0174 21.7956 15.7436 20.6128L11.5812 16.7478L11.4942 16.8389C9.74973 18.6653 6.84401 18.6987 5.05806 16.9127L3.69311 15.5478C1.93575 13.7904 1.93575 10.9412 3.69311 9.18382L9.09532 3.78161C10.8527 2.02425 13.7019 2.02425 15.4593 3.78161L16.8537 5.17607C18.6226 6.94496 18.6093 9.81698 16.8241 11.5694ZM12.6362 15.6804L15.3413 13.025L19.3409 16.7388C20.1638 17.503 20.1445 18.8115 19.2993 19.5511C18.5694 20.1897 17.475 20.1736 16.7643 19.5136L12.6362 15.6804ZM11.5358 14.6586L11 15.1846L10.4095 15.8028C9.2465 17.0205 7.30935 17.0427 6.11872 15.8521L4.75377 14.4871C3.58219 13.3156 3.58219 11.4161 4.75377 10.2445L10.156 4.84227C11.3276 3.6707 13.227 3.6707 14.3986 4.84227L15.7931 6.23673C16.9723 7.41599 16.9635 9.33067 15.7733 10.4989L11.5358 14.6586ZM2.75 20.6846C2.33579 20.6846 2 21.0203 2 21.4346C2 21.8488 2.33579 22.1846 2.75 22.1846H8.25C8.66421 22.1846 9 21.8488 9 21.4346C9 21.0203 8.66421 20.6846 8.25 20.6846H2.75Z" fill="currentColor" />
            </svg>
            <p style={{ flex: 1, margin: '0', marginLeft: '12px' }}>Shoe Auction</p>
          </Link>
        </div>

        <div className="section-menu">
          <p>My Account</p>
          
          <Link 
            to="/orders" 
            className={`item-menu ${getActiveClass('/orders')}`}
            onClick={() => handleMobileMenuClick('Your Order')}
          >
            <svg fill="none" style={{ width: '20px', height: '20px', flexShrink: 0 }}>
              <path d="M15.4559 6.58621V7.08621H15.9559H17.496C18.3534 7.08621 19.0124 7.67074 19.0966 8.36425L19.0966 8.36425L19.0973 8.36975L20.4776 18.7744C20.7115 20.7152 19.0442 22.5 16.7797 22.5H7.22014C4.95566 22.5 3.28838 20.7152 3.52228 18.7743L4.90258 8.36975L4.90261 8.36975L4.90328 8.36425C4.98747 7.67074 5.64646 7.08621 6.50387 7.08621H8.04397H8.54397V6.58621V5.62069C8.54397 3.93794 10.0487 2.5 11.9999 2.5C13.9512 2.5 15.4559 3.93794 15.4559 5.62069V6.58621ZM14.8735 8.03448V7.53448H14.3735H9.62636H9.12636V8.03448V10.4483C9.12636 10.5313 9.03859 10.6724 8.83516 10.6724C8.63174 10.6724 8.54397 10.5313 8.54397 10.4483V8.03448V7.53448H8.04397H6.50387C6.01844 7.53448 5.54941 7.87337 5.48368 8.40043L4.1033 18.8056L4.10327 18.8056L4.1026 18.8111C3.88702 20.5869 5.3988 22.0517 7.22014 22.0517H16.7797C18.6011 22.0517 20.1129 20.5869 19.8973 18.8111L19.8973 18.8111L19.8966 18.8056L18.5162 8.40048C18.4505 7.87339 17.9815 7.53448 17.496 7.53448H15.9559H15.4559V8.03448V10.4483C15.4559 10.5313 15.3681 10.6724 15.1647 10.6724C14.9613 10.6724 14.8735 10.5313 14.8735 10.4483V8.03448ZM14.3735 7.08621H14.8735V6.58621V5.62069C14.8735 4.104 13.5444 2.94828 11.9999 2.94828C10.4555 2.94828 9.12636 4.104 9.12636 5.62069V6.58621V7.08621H9.62636H14.3735ZM9.33516 16C9.33516 15.917 9.42294 15.7759 9.62636 15.7759H14.3735C14.5769 15.7759 14.6647 15.917 14.6647 16C14.6647 16.083 14.5769 16.2241 14.3735 16.2241H9.62636C9.42293 16.2241 9.33516 16.083 9.33516 16Z" stroke="currentColor" />
            </svg>
            <p style={{ flex: 1, margin: '0', marginLeft: '12px' }}>Your Order</p>
            <div className="circle-notif">
              <p>1</p>
            </div>
          </Link>

          <Link 
            to="/notifications" 
            className={`item-menu ${getActiveClass('/notifications')}`}
            onClick={() => handleMobileMenuClick('Notifications')}
          >
            <svg fill="none" style={{ width: '20px', height: '20px', flexShrink: 0 }}>
              <path d="M5.69331 9.17202C4.80139 5.38137 7.67749 1.75 11.5717 1.75H12.4283C16.3225 1.75 19.1986 5.38137 18.3067 9.17202C18.2441 9.438 18.2734 9.71732 18.3897 9.96454L19.0683 9.6452L18.3897 9.96454L19.9699 13.3225C20.1544 13.7144 20.25 14.1422 20.25 14.5754C20.25 15.7607 19.5509 16.7382 18.5105 16.9941C16.9986 17.3659 14.7669 17.75 12 17.75C9.23306 17.75 7.00142 17.3659 5.48952 16.9941C4.44915 16.7382 3.75 15.7607 3.75 14.5754C3.75 14.1422 3.84563 13.7144 4.03005 13.3225L5.61029 9.96454C5.72663 9.71731 5.75589 9.43799 5.69331 9.17202Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M14.5 21C14.4001 21.156 14.2369 21.3228 13.9972 21.4777C13.758 21.6324 13.4583 21.7647 13.1108 21.8578C12.7639 21.9507 12.3858 22 12 22C11.6142 22 11.2361 21.9507 10.8892 21.8578C10.5417 21.7647 10.242 21.6324 10.0028 21.4777C9.76312 21.3228 9.59994 21.156 9.5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <p style={{ flex: 1, margin: '0', marginLeft: '12px' }}>Notifications</p>
            <div className="circle-notif">
              <p>9</p>
            </div>
          </Link>

          <Link 
            to="/favorites" 
            className={`item-menu ${getActiveClass('/favorites')}`}
            onClick={() => handleMobileMenuClick('Favorites Shoes')}
          >
            <svg fill="none" style={{ width: '20px', height: '20px', flexShrink: 0 }}>
              <mask id="path-1-inside-1_1_75" fill="white">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.0606 6.62561L11.1213 7.68625L12.1819 6.62561C13.6828 5.12479 16.1161 5.1248 17.6169 6.62563C18.8347 7.84339 19.0644 9.67508 18.306 11.1244C17.8725 11.2566 17.4641 11.4942 17.1213 11.837C16.0052 10.721 14.1957 10.721 13.0796 11.837C11.9635 12.9531 11.9635 14.7626 13.0796 15.8787L13.0851 15.8842L13.4393 16.2383L11.1213 18.5563L4.63588 12.0709L4.6345 12.0695L4.62563 12.0606L4.62509 12.0601C3.12479 10.5592 3.12497 8.12628 4.62563 6.62563C6.12646 5.1248 8.55978 5.12479 10.0606 6.62561ZM14.4999 17.299L11.751 20.0479C11.4032 20.3957 10.8394 20.3957 10.4916 20.0479L3.57522 13.1315L3.56497 13.1213C1.47834 11.0347 1.47834 7.65159 3.56497 5.56497C5.65158 3.47835 9.03464 3.47835 11.1213 5.56494C13.2079 3.47834 16.591 3.47835 18.6776 5.56497C20.1781 7.06549 20.5996 9.23648 19.942 11.1136C20.389 11.2435 20.8105 11.4846 21.1629 11.837C22.279 12.9531 22.279 14.7626 21.163 15.8787L17.4581 19.5836C17.2721 19.7696 16.9705 19.7696 16.7845 19.5836L14.4999 17.299Z" />
              </mask>
              <path d="M11.1213 7.68625L10.0606 8.74692L11.1213 9.80756L12.1819 8.74692L11.1213 7.68625ZM10.0606 6.62561L8.99996 7.68628L8.99996 7.68628L10.0606 6.62561Z" fill="currentColor" mask="url(#path-1-inside-1_1_75)" />
            </svg>
            <p style={{ flex: 1, margin: '0', marginLeft: '12px' }}>Favorites Shoes</p>
          </Link>

          {/* Shopping Cart Button */}
          <button 
            className="item-menu"
            onClick={openCart}
            style={{ 
              background: 'none', 
              border: 'none', 
              width: '100%', 
              textAlign: 'left',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '14px 24px',
              fontSize: '14px',
              fontWeight: '500',
              color: 'var(--text-color)'
            }}
          >
            <svg fill="none" style={{ width: '20px', height: '20px', flexShrink: 0 }}>
              <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.4 5.1 16.4H17M17 13V16.4M9 19.5A1.5 1.5 0 1 1 6 19.5A1.5 1.5 0 0 1 9 19.5ZM20 19.5A1.5 1.5 0 1 1 17 19.5A1.5 1.5 0 0 1 20 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p style={{ flex: 1, margin: '0', marginLeft: '12px' }}>Shopping Cart</p>
            {getCartItemCount() > 0 && (
              <div className="circle-notif">
                <p>{getCartItemCount()}</p>
              </div>
            )}
          </button>

          <Link 
            to="/settings" 
            className={`item-menu ${getActiveClass('/settings')}`}
            onClick={() => handleMobileMenuClick('Account Settings')}
          >
            <svg fill="none" style={{ width: '20px', height: '20px', flexShrink: 0 }}>
              <mask id="path-1-inside-1_1_64" fill="white">
                <path d="M16 5.25833C16 4.28723 15.2128 3.5 14.2417 3.5H11.7584C10.7872 3.5 10 4.28723 10 5.25834C10 6.61191 8.53473 7.45789 7.3625 6.7811C6.5215 6.29555 5.44612 6.5837 4.96056 7.4247L3.7189 9.57533C3.23335 10.4163 3.52149 11.4917 4.36249 11.9772C5.53471 12.654 5.53471 14.346 4.36249 15.0228C3.5215 15.5083 3.23335 16.5837 3.7189 17.4247L4.96057 19.5753C5.44612 20.4163 6.5215 20.7045 7.3625 20.2189C8.53472 19.5421 10 20.3881 10 21.7417C10 22.7128 10.7872 23.5 11.7583 23.5H14.2417C15.2128 23.5 16 22.7128 16 21.7417C16 20.3881 17.4653 19.5421 18.6375 20.2189C19.4785 20.7045 20.5539 20.4163 21.0394 19.5753L22.2811 17.4247C22.7667 16.5837 22.4785 15.5083 21.6375 15.0228C20.4653 14.346 20.4653 12.654 21.6375 11.9772C22.4785 11.4917 22.7667 10.4163 22.2811 9.5753L21.0395 7.42468C20.5539 6.58368 19.4785 6.29554 18.6375 6.78109C17.4653 7.45787 16 6.6119 16 5.25833Z" />
              </mask>
              <path d="M22.2811 9.5753L20.9821 10.3253L22.2811 9.5753ZM11.7584 5H14.2417V2H11.7584V5ZM5.01793 10.3253L6.2596 8.1747L3.66153 6.6747L2.41986 8.82533L5.01793 10.3253Z" fill="currentColor" mask="url(#path-1-inside-1_1_64)" />
              <circle cx="13" cy="13.5" r="2.25" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <p style={{ flex: 1, margin: '0', marginLeft: '12px' }}>Account Settings</p>
          </Link>
        </div>
      </nav>

      {/* Footer with theme toggle */}
      <footer>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
          <img src="/assets/icons/ic_mode.svg" alt="Mode Display" style={{ width: '24px', height: '24px' }} />
          <p className="label-mode" style={{ flex: 1, margin: 0 }}>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</p>
          <div>
            <input
              id="checkbox"
              type="checkbox"
              className="toggle-theme"
              aria-label="Toggle Theme"
              checked={theme === 'light'}
              onChange={toggleTheme}
            />
            <label htmlFor="checkbox" className="label-toggle">
              <img
                src="/assets/icons/ic_moon.svg"
                width="50%"
                className="ic-theme"
                alt="Icon Dark"
              />
              <img
                src="/assets/icons/ic_sun.svg"
                width="50%"
                className="ic-theme"
                alt="Icon Light"
              />
            </label>
          </div>
        </div>
        <p style={{ margin: 0, fontSize: '12px' }}>©2025 Shoe Store. All rights reserved.</p>
      </footer>
    </aside>
    
    {/* Shopping Cart Modal */}
    <ShoppingCart isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
};

export default Sidebar;