import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Badge from '../atoms/Badge';
import ShoppingCart from './ShoppingCart';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { getCartItemCount } = useCart();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Toggle dropdown
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-primary-700 font-bold text-xl">
              Marketplace
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="/explore" 
                className="text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Explore Product
              </Link>
              <Link 
                to="/auction" 
                className="text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Shoe Auction
              </Link>
            </div>
          </div>
          
          {/* Cart, Account Dropdown and Mobile Menu Button */}
          <div className="flex items-center">
            {/* Cart Icon */}
            <button
              className="p-2 text-neutral-700 hover:text-primary-600 relative"
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {getCartItemCount() > 0 && (
                <span className="absolute -top-1 -right-1">
                  <Badge count={getCartItemCount()} size="sm" />
                </span>
              )}
            </button>
            
            {/* Account Dropdown */}
            <div className="ml-3 relative" ref={dropdownRef}>
              <div>
                <button
                  type="button"
                  className="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={toggleDropdown}
                >
                  <span className="text-neutral-700 hover:text-primary-600 font-medium">My Account</span>
                  <svg 
                    className={`ml-1 h-5 w-5 text-neutral-500 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div 
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <Link 
                    to="/orders" 
                    className="flex justify-between px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 w-full text-left"
                    role="menuitem"
                  >
                    Your Order
                    <Badge count={1} size="sm" />
                  </Link>
                  <Link 
                    to="/notifications" 
                    className="flex justify-between px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 w-full text-left"
                    role="menuitem"
                  >
                    Notifications
                    <Badge count={9} size="sm" />
                  </Link>
                  <Link 
                    to="/favorites" 
                    className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                    role="menuitem"
                  >
                    Favorites Shoes
                  </Link>
                  <Link 
                    to="/settings" 
                    className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                    role="menuitem"
                  >
                    Account Settings
                  </Link>
                </div>
              )}
            </div>
            
            {/* Mobile menu button */}
            <div className="ml-4 flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                {!isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Shopping Cart */}
      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/explore" 
              className="block text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore Product
            </Link>
            <Link 
              to="/auction" 
              className="block text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Shoe Auction
            </Link>
            <hr className="my-2 border-neutral-200" />
            <Link 
              to="/orders" 
              className="flex justify-between px-3 py-2 text-base text-neutral-700 hover:bg-neutral-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Your Order
              <Badge count={1} size="sm" />
            </Link>
            <Link 
              to="/notifications" 
              className="flex justify-between px-3 py-2 text-base text-neutral-700 hover:bg-neutral-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Notifications
              <Badge count={9} size="sm" />
            </Link>
            <Link 
              to="/favorites" 
              className="block text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Favorites Shoes
            </Link>
            <Link 
              to="/settings" 
              className="block text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Account Settings
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
