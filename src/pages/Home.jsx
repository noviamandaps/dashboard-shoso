import React from 'react';
import Card from '../components/atoms/Card';
import Button from '../components/atoms/Button';
import { useNavigate } from 'react-router-dom';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Nike Air Force 1',
    price: 119.99,
    image: '/assets/images/nike_airforce.png',
    color: 'White/Blue',
    description: 'Classic design with modern comfort technology',
  },
  {
    id: 2,
    name: 'Nike Terra Kiger 7',
    price: 139.99,
    image: '/assets/images/nike_kiger.png',
    color: 'Green/Black',
    description: 'Perfect for trail running and outdoor activities',
  },
  {
    id: 3,
    name: 'Nike Dunk High',
    price: 129.99,
    image: '/assets/images/nike_red.png',
    color: 'Red/White',
    description: 'Retro basketball silhouette with premium materials',
  },
  {
    id: 4,
    name: 'Adidas Ultraboost',
    price: 179.99,
    image: '/assets/images/adidas.png',
    color: 'Black/White',
    description: 'Responsive cushioning for ultimate comfort',
  },
  {
    id: 5,
    name: 'Puma RS-X',
    price: 109.99,
    image: '/assets/images/puma.png',
    color: 'Blue/Orange',
    description: 'Bold retro-inspired design with modern features',
  },
];

const Home = () => {
  const navigate = useNavigate();
  
  const handleViewDetails = (productId) => {
    navigate(`/product/${productId}`);
  };
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-neutral-900 mb-6">Shoe Marketplace</h1>
      <p className="text-neutral-600 mb-8">Discover the perfect shoes for your style and comfort</p>
      
      <div className="bg-primary-600 text-white rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-bold mb-2">Summer Collection 2025</h2>
        <p className="mb-4">Explore our newest arrivals with up to 30% discount</p>
        <button className="bg-white text-primary-600 font-medium py-2 px-4 rounded-md hover:bg-primary-50">
          Shop Now
        </button>
      </div>
      
      <h2 className="text-2xl font-bold text-neutral-800 mb-4">Featured Products</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 3).map((product) => (
          <Card key={product.id} className="overflow-hidden" product={product}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-800">{product.name}</h3>
              <p className="text-primary-600 font-medium">${product.price}</p>
              <p className="text-neutral-500 text-sm mt-1">{product.color}</p>
              <p className="text-neutral-600 mt-2">{product.description}</p>
              <Button 
                variant="outline" 
                className="mt-4 w-full"
                onClick={() => handleViewDetails(product.id)}
              >
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-800 mb-4">Popular Brands</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 py-4">
          <img src="/assets/images/nike_logo.png" alt="Nike" className="h-12 opacity-80 hover:opacity-100" />
          <img src="/assets/images/adidas_logo.png" alt="Adidas" className="h-10 opacity-80 hover:opacity-100" />
          <img src="/assets/images/puma_logo.png" alt="Puma" className="h-10 opacity-80 hover:opacity-100" />
        </div>
      </div>
    </div>
  );
};

export default Home;
