import React from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../../context/CartContext';

const ShoppingCart = ({ isOpen, onClose }) => {
  const { items, total, removeItemFromCart, updateItemQuantity, clearCart, getCartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      zIndex: 9999,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      {/* Cart Panel */}
      <div style={{ 
        backgroundColor: 'var(--white)',
        borderRadius: '16px',
        maxWidth: '500px',
        width: '100%',
        maxHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}>
        {/* Header */}
        <div style={{ 
          padding: '24px',
          borderBottom: '1px solid var(--grayish)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <h4 style={{ margin: 0, color: 'var(--navy)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <i className="fa-solid fa-shopping-cart" style={{ fontSize: '20px' }}></i>
            Your Cart
          </h4>
          <button 
            onClick={onClose}
            style={{ 
              background: 'none',
              border: 'none',
              fontSize: '24px',
              color: 'var(--gray)',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = 'var(--light-gray)'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            aria-label="Close Cart"
          >
            <i className="fa-solid fa-times"></i>
          </button>
        </div>

        {/* Cart Content */}
        <div style={{ 
          flex: 1,
          overflowY: 'auto',
          padding: items.length === 0 ? '40px 24px' : '24px'
        }}>
          {items.length === 0 ? (
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: '16px'
            }}>
              <i className="fa-solid fa-shopping-cart" style={{ 
                fontSize: '48px', 
                color: 'var(--gray)',
                marginBottom: '8px'
              }}></i>
              <p style={{ color: 'var(--gray)', margin: 0 }}>Your cart is empty</p>
              <button 
                className="button btn-rounded active"
                style={{ borderRadius: '25px' }}
                onClick={onClose}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {items.map((item) => (
                <div key={item.id} style={{ 
                  display: 'flex',
                  gap: '16px',
                  padding: '16px',
                  backgroundColor: 'var(--light-gray)',
                  borderRadius: '12px',
                  border: '1px solid var(--grayish)'
                }}>
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ 
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      backgroundColor: 'var(--white)'
                    }}
                  />

                  {/* Product Details */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h6 style={{ margin: '0 0 4px 0', color: 'var(--navy)' }}>{item.name}</h6>
                      <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: 'var(--gray)' }}>
                        {item.color || 'Default Color'}
                      </p>
                      <p style={{ margin: 0, fontWeight: '600', color: 'var(--navy)' }}>
                        Rp {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                    
                    {/* Quantity and Remove */}
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: '12px'
                    }}>
                      <div style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid var(--grayish)',
                        borderRadius: '8px',
                        backgroundColor: 'var(--white)'
                      }}>
                        <button
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                          style={{ 
                            background: 'none',
                            border: 'none',
                            padding: '8px 12px',
                            cursor: 'pointer',
                            color: 'var(--navy)',
                            fontSize: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <span style={{ 
                          padding: '8px 16px',
                          color: 'var(--navy)',
                          fontWeight: '500',
                          minWidth: '40px',
                          textAlign: 'center'
                        }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                          style={{ 
                            background: 'none',
                            border: 'none',
                            padding: '8px 12px',
                            cursor: 'pointer',
                            color: 'var(--navy)',
                            fontSize: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeItemFromCart(item.id)}
                        style={{ 
                          background: 'none',
                          border: 'none',
                          color: 'var(--red)',
                          cursor: 'pointer',
                          padding: '8px',
                          borderRadius: '8px',
                          fontSize: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(220, 38, 38, 0.1)'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        <i className="fa-solid fa-trash"></i>
                        <span style={{ fontSize: '14px' }}>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{ 
            padding: '24px',
            borderTop: '1px solid var(--grayish)',
            backgroundColor: 'var(--light-gray)'
          }}>
            <div style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px'
            }}>
              <span style={{ fontSize: '18px', fontWeight: '600', color: 'var(--navy)' }}>
                Total
              </span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: 'var(--navy)' }}>
                Rp {Math.round(total).toLocaleString()}
              </span>
            </div>
            <p style={{ 
              margin: '0 0 16px 0',
              fontSize: '14px',
              color: 'var(--gray)',
              textAlign: 'center'
            }}>
              Shipping and taxes calculated at checkout
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                className="button btn-rounded"
                style={{ borderRadius: '25px', flex: 1 }}
                onClick={clearCart}
              >
                <i className="fa-solid fa-trash" style={{ marginRight: '8px' }}></i>
                Clear Cart
              </button>
              <button 
                className="button btn-rounded active"
                style={{ borderRadius: '25px', flex: 1 }}
                onClick={() => {
                  alert('Proceeding to checkout...');
                  onClose();
                }}
              >
                <i className="fa-solid fa-credit-card" style={{ marginRight: '8px' }}></i>
                Checkout
              </button>
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
