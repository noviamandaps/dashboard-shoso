import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { useCart } from '../../context/CartContext';

const Card = ({ 
  children, 
  className = '', 
  elevation = 'md',
  padding = 'md',
  rounded = 'md',
  product = null, // Pass product data if this is a product card
  ...props 
}) => {
  const { addItemToCart } = useCart();
  
  const handleAddToCart = () => {
    if (product) {
      addItemToCart(product);
    }
  };
  const elevationClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };

  const paddingClasses = {
    none: 'p-0',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8'
  };

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full'
  };

  return (
    <div 
      className={`bg-white ${elevationClasses[elevation]} ${paddingClasses[padding]} ${roundedClasses[rounded]} ${className}`} 
      {...props}
    >
      {children}
      
      {product && (
        <div className="mt-4 pt-4 border-t border-neutral-200">
          <Button
            variant="primary"
            size="md"
            className="w-full"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  elevation: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', 'full']),
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    color: PropTypes.string,
  }),
};

export default Card;
