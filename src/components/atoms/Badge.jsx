import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({
  count,
  variant = 'primary',
  size = 'md',
  className = '',
  max = 99,
  showZero = false,
  ...props
}) => {
  // Don't display badge if count is 0 and showZero is false
  if (count === 0 && !showZero) {
    return null;
  }

  const displayCount = count > max ? `${max}+` : count;

  const variantClasses = {
    primary: 'bg-primary-600 text-white',
    secondary: 'bg-secondary-500 text-white',
    success: 'bg-success-500 text-white',
    danger: 'bg-danger-500 text-white',
    neutral: 'bg-neutral-500 text-white',
  };

  const sizeClasses = {
    sm: 'h-4 min-w-4 text-xs',
    md: 'h-5 min-w-5 text-xs',
    lg: 'h-6 min-w-6 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full px-1.5 font-medium ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {displayCount}
    </span>
  );
};

Badge.propTypes = {
  count: PropTypes.number.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'neutral']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  max: PropTypes.number,
  showZero: PropTypes.bool,
};

export default Badge;
