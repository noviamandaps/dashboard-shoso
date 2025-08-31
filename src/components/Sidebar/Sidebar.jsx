import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '../../hooks/useTheme'
import './Sidebar.css'

const Sidebar = ({ activeMenu = 'Marketplace', onMenuClick }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileView, setIsMobileView] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  
  // Check if we're in mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 992);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Close sidebar when clicking a menu item on mobile
  const handleMobileMenuClick = (menuName) => {
    onMenuClick(menuName);
    if (isMobileView) {
      setShowSidebar(false);
    }
  };

  return (
    <>
      {isMobileView && (
        <button 
          className="fixed top-4 left-4 z-50 bg-primary-600 text-white p-2 rounded-md shadow-md"
          onClick={() => setShowSidebar(!showSidebar)}
          aria-label="Toggle Sidebar"
        >
          {showSidebar ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      )}
      <aside className={`sidebar ${isMobileView && showSidebar ? 'show' : ''}`}>
        <div className="logo-brand mt-lg-5">
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
        
        <Navigation activeMenu={activeMenu} onMenuClick={handleMobileMenuClick} />
        
        <footer className="mt-auto p-4">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <p className="text-xs text-neutral-500 mt-4">©2025 Shoe Store. All rights reserved.</p>
        </footer>
      </aside>
    </>
  )
}

export default Sidebar