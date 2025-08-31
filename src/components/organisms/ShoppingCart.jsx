import React from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../../context/CartContext';
import Button from '../atoms/Button';

const ShoppingCart = ({ isOpen, onClose }) => {
  const { items, total, removeItemFromCart, updateItemQuantity, clearCart, getCartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      ></div>
      
      {/* Cart Panel */}
      <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="px-4 py-6 border-b border-neutral-200 flex items-center justify-between">
          <h2 className="text-lg font-medium text-neutral-900">Your Cart</h2>
          <button 
            className="text-neutral-500 hover:text-neutral-700"
            onClick={onClose}
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-neutral-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-neutral-500">Your cart is empty</p>
              <Button 
                variant="primary" 
                size="sm" 
                className="mt-4" 
                onClick={onClose}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-neutral-200">
              {items.map((item) => (
                <li key={item.id} className="py-4 flex">
                  {/* Product Image */}
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-neutral-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-neutral-900">
                        <h3>{item.name}</h3>
                        <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-neutral-500">{item.color}</p>
                    </div>
                    
                    {/* Quantity and Remove */}
                    <div className="flex items-center justify-between text-sm mt-auto">
                      <div className="flex items-center border border-neutral-300 rounded-md">
                        <button
                          className="px-3 py-1 text-neutral-600 hover:bg-neutral-100"
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-neutral-800">{item.quantity}</span>
                        <button
                          className="px-3 py-1 text-neutral-600 hover:bg-neutral-100"
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className="text-primary-600 hover:text-primary-800"
                        onClick={() => removeItemFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-neutral-200 p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-base font-medium text-neutral-900">Subtotal</span>
              <span className="font-semibold text-lg">${getCartTotal()}</span>
            </div>
            <p className="text-sm text-neutral-500">Shipping and taxes calculated at checkout.</p>
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
              <Button 
                variant="primary" 
                className="w-full"
                onClick={() => alert('Proceeding to checkout')}
              >
                Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

ShoppingCart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ShoppingCart;
