import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ 
  id,
  image, 
  alt, 
  colors, 
  title, 
  price, 
  isFavorited: initialFavorited, 
  isPurchased: initialPurchased 
}) => {
  const navigate = useNavigate()
  const [isFavorited, setIsFavorited] = useState(initialFavorited)
  const [isPurchased, setIsPurchased] = useState(initialPurchased)

  const handleFavorite = () => {
    setIsFavorited(!isFavorited)
  }

  const handleBuy = () => {
    if (id) {
      navigate(`/product/${id}`)
    } else {
      setIsPurchased(!isPurchased)
    }
  }

  return (
    <div className="product-card">
      <img
        src={image}
        alt={alt}
        width="260"
        height="180"
      />
      
      <div className="product-detail pt-3">
        <div>
          <p className="label-detail mb-1">{colors}</p>
          <p className="title-detail">{title}</p>
        </div>
        <button
          className={`btn btn-fav ${isFavorited ? 'active' : ''}`}
          aria-label="Button Favorite"
          onClick={handleFavorite}
        >
          <svg fill="currentColor">
            <path
              d="M11.5909 6.09528L12.1213 6.6256L12.6516 6.09528C14.4453 4.30157 17.3535 4.30157 19.1472 6.0953C20.941 7.88902 20.941 10.7972 19.1473 12.591L12.2207 19.5176C12.1658 19.5725 12.0768 19.5725 12.022 19.5176L5.10555 12.6012L5.10485 12.6005L5.0953 12.591C5.09519 12.5909 5.09508 12.5907 5.09497 12.5906C3.30157 10.7969 3.30168 7.88891 5.0953 6.0953C6.88902 4.30158 9.79721 4.30157 11.5909 6.09528Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
      
      <div className="product-detail pt-4">
        <div>
          <p className="label-detail mb-1">Price:</p>
          <p className="price-detail">{price}</p>
        </div>
        <button
          className={`buy-product button btn-rounded ${isPurchased ? 'active' : ''}`}
          onClick={handleBuy}
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default ProductCard