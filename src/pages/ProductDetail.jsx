import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button';
import Card from '../components/atoms/Card';
import Badge from '../components/atoms/Badge';

// Sample products data (in a real app, this would come from an API or context)
const products = [
  {
    id: '1',
    name: 'Nike Air Force 1',
    price: 119.99,
    image: '/assets/images/nike_airforce.png',
    color: 'White/Blue',
    description: 'Classic design with modern comfort technology',
    brand: 'Nike',
    rating: 4.8,
    reviewCount: 245,
    inStock: true,
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    details: [
      'Premium leather upper for a clean look',
      'Foam midsole for lightweight cushioning',
      'Rubber outsole for traction and durability',
      'Perforations on the toe for ventilation',
      'Padding at the collar for comfort'
    ],
    relatedProducts: [3, 4]
  },
  {
    id: '3',
    name: 'Nike Dunk High',
    price: 129.99,
    image: '/assets/images/nike_red.png',
    color: 'Red/White',
    description: 'Retro basketball silhouette with premium materials',
    brand: 'Nike',
    rating: 4.6,
    reviewCount: 178,
    inStock: true,
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    details: [
      'High-top basketball design',
      'Leather and synthetic upper',
      'Padded collar for comfort',
      'Perforated toe box for breathability',
      'Rubber outsole for traction'
    ],
    relatedProducts: [1, 5]
  },
  {
    id: '4',
    name: 'Adidas Ultraboost',
    price: 179.99,
    image: '/assets/images/adidas.png',
    color: 'Black/White',
    description: 'Responsive cushioning for ultimate comfort',
    brand: 'Adidas',
    rating: 4.9,
    reviewCount: 320,
    inStock: true,
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5],
    details: [
      'Primeknit upper for lightweight comfort and adaptive support',
      'Boost midsole for responsive cushioning',
      'Continental™ Rubber outsole for extraordinary traction',
      'Sock-like fit for adaptive support and comfort',
      'Weight: 10.9 oz'
    ],
    relatedProducts: [5, 1]
  },
  {
    id: '5',
    name: 'Puma RS-X',
    price: 109.99,
    image: '/assets/images/puma.png',
    color: 'Blue/Orange',
    description: 'Bold retro-inspired design with modern features',
    brand: 'Puma',
    rating: 4.5,
    reviewCount: 156,
    inStock: true,
    sizes: [7, 8, 9, 10, 11, 12],
    details: [
      'Mesh and textile upper with suede and leather overlays',
      'Running System (RS) technology in the midsole',
      'Bulky, chunky silhouette inspired by 80s design',
      'TPU piece in the heel for added support',
      'Rubber outsole for traction'
    ],
    relatedProducts: [4, 3]
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id) || products[0]; // Fallback to first product if not found
  
  const [selectedSize, setSelectedSize] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const relatedProducts = product.relatedProducts
    ? product.relatedProducts.map(id => products.find(p => p.id === id.toString()))
    : [];
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    
    // In a real app, this would add to a cart context or make an API call
    alert(`Added ${product.name} size ${selectedSize} to cart`);
  };
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  
  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    
    // In a real app, this would add to cart and redirect to checkout
    alert(`Proceeding to checkout with ${product.name} size ${selectedSize}`);
  };
  
  return (
    <div>
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center text-primary-600 hover:text-primary-700 font-medium mb-4"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Products
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="bg-neutral-50 rounded-xl p-8 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-w-full max-h-96 object-contain"
          />
        </div>
        
        {/* Product Info */}
        <div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900 mb-1">{product.name}</h1>
              <p className="text-neutral-600 mb-2">{product.brand}</p>
            </div>
            <button 
              onClick={toggleFavorite}
              className={`h-10 w-10 rounded-full flex items-center justify-center ${isFavorite ? 'text-danger-500 bg-danger-50' : 'text-neutral-400 bg-neutral-50 hover:text-neutral-600'}`}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              {isFavorite ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              )}
            </button>
          </div>
          
          <div className="flex items-center mt-2 mb-4">
            <div className="flex text-yellow-400 mr-2">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={i < Math.floor(product.rating) ? "currentColor" : "none"} stroke="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-neutral-600">
              <span className="font-medium">{product.rating}</span> ({product.reviewCount} reviews)
            </p>
          </div>
          
          <p className="text-2xl font-bold text-primary-600 mb-4">${product.price.toFixed(2)}</p>
          
          <p className="text-neutral-700 mb-6">{product.description}</p>
          
          {product.inStock ? (
            <Badge count="In Stock" variant="success" className="mb-6" />
          ) : (
            <Badge count="Out of Stock" variant="danger" className="mb-6" />
          )}
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Select Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-10 min-w-[40px] px-3 rounded-md font-medium ${
                    selectedSize === size 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button 
              variant="primary" 
              className="flex-1" 
              onClick={handleAddToCart} 
              disabled={!product.inStock}
            >
              Add to Cart
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={handleBuyNow}
              disabled={!product.inStock}
            >
              Buy Now
            </Button>
          </div>
          
          <div className="border-t border-neutral-200 pt-6">
            <h3 className="text-lg font-medium mb-3">Product Details</h3>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map(relatedProduct => (
            relatedProduct && (
              <Card key={relatedProduct.id} className="overflow-hidden" product={relatedProduct}>
                <div className="relative">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-neutral-800">{relatedProduct.name}</h3>
                  <p className="text-primary-600 font-medium">${relatedProduct.price.toFixed(2)}</p>
                  
                  <div className="mt-3 flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => navigate(`/product/${relatedProduct.id}`)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
