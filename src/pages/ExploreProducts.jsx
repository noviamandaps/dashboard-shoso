import React, { useState } from 'react';
import Card from '../components/atoms/Card';
import Button from '../components/atoms/Button';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Nike Air Force 1',
    price: 119.99,
    image: '/assets/images/nike_airforce.png',
    color: 'White/Blue',
    description: 'Classic design with modern comfort technology',
    tags: ['Casual', 'Lifestyle']
  },
  {
    id: 2,
    name: 'Nike Terra Kiger 7',
    price: 139.99,
    image: '/assets/images/nike_kiger.png',
    color: 'Green/Black',
    description: 'Perfect for trail running and outdoor activities',
    tags: ['Running', 'Outdoor']
  },
  {
    id: 3,
    name: 'Nike Dunk High',
    price: 129.99,
    image: '/assets/images/nike_red.png',
    color: 'Red/White',
    description: 'Retro basketball silhouette with premium materials',
    tags: ['Basketball', 'Lifestyle']
  },
  {
    id: 4,
    name: 'Adidas Ultraboost',
    price: 179.99,
    image: '/assets/images/adidas.png',
    color: 'Black/White',
    description: 'Responsive cushioning for ultimate comfort',
    tags: ['Running', 'Performance']
  },
  {
    id: 5,
    name: 'Puma RS-X',
    price: 109.99,
    image: '/assets/images/puma.png',
    color: 'Blue/Orange',
    description: 'Bold retro-inspired design with modern features',
    tags: ['Casual', 'Lifestyle']
  },
  {
    id: 6,
    name: 'Nike Air Max 270',
    price: 149.99,
    image: '/assets/images/nike_airforce.png',
    color: 'Black/Red',
    description: 'Visible Air unit for all-day comfort',
    tags: ['Lifestyle', 'Running']
  },
];

const categories = ['All', 'Running', 'Basketball', 'Lifestyle', 'Outdoor', 'Performance', 'Casual'];

const ExploreProducts = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('recommended');

  // Filter products based on active category
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.tags.includes(activeCategory));

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0; // Default: recommended order
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-neutral-900 mb-6">Explore Products</h1>
      
      {/* Category Filters */}
      <div className="mb-8 mt-4 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Sorting and Results Count */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div className="flex items-center">
            <p className="text-neutral-600 mr-4">
                Showing <span className="font-medium">{sortedProducts.length}</span> results
            </p>
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="sort" className="text-sm text-neutral-600 mr-2">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-neutral-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="recommended">Recommended</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
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
              <div className="mt-3 flex flex-wrap gap-1">
                {product.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="inline-block bg-neutral-100 text-neutral-600 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Load More Button */}
      <div className="mt-8 text-center">
        <Button variant="outline" size="lg">
          Load More Products
        </Button>
      </div>
    </div>
  );
};

export default ExploreProducts;
