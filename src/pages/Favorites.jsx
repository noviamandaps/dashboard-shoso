import React, { useState } from 'react';
import Card from '../components/atoms/Card';
import Button from '../components/atoms/Button';

// Sample favorite shoes data
const initialFavoriteShoes = [
  {
    id: 1,
    name: 'Nike Air Force 1',
    price: 119.99,
    image: '/assets/images/nike_airforce.png',
    color: 'White/Blue',
    description: 'Classic design with modern comfort technology',
    inStock: true
  },
  {
    id: 3,
    name: 'Nike Dunk High',
    price: 129.99,
    image: '/assets/images/nike_red.png',
    color: 'Red/White',
    description: 'Retro basketball silhouette with premium materials',
    inStock: true
  },
  {
    id: 4,
    name: 'Adidas Ultraboost',
    price: 179.99,
    image: '/assets/images/adidas.png',
    color: 'Black/White',
    description: 'Responsive cushioning for ultimate comfort',
    inStock: false
  },
  {
    id: 5,
    name: 'Puma RS-X',
    price: 109.99,
    image: '/assets/images/puma.png',
    color: 'Blue/Orange',
    description: 'Bold retro-inspired design with modern features',
    inStock: true
  }
];

const Favorites = () => {
  const [favoriteShoes, setFavoriteShoes] = useState(initialFavoriteShoes);
  
  const removeFromFavorites = (id) => {
    setFavoriteShoes(favoriteShoes.filter(shoe => shoe.id !== id));
  };
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-neutral-900 mb-6">Favorite Shoes</h1>
      
      {favoriteShoes.length === 0 ? (
        <Card className="p-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-neutral-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h2 className="text-xl font-medium text-neutral-700 mb-2">No favorite shoes yet</h2>
          <p className="text-neutral-500 mb-4">Start exploring and add shoes to your favorites!</p>
          <Button variant="primary">
            Explore Shoes
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteShoes.map((shoe) => (
            <Card key={shoe.id} className="overflow-hidden" product={shoe}>
              <div className="relative">
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="w-full h-48 object-cover"
                />
                <button 
                  className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white shadow flex items-center justify-center text-danger-500 hover:text-danger-600 transition-transform hover:scale-110"
                  onClick={() => removeFromFavorites(shoe.id)}
                  aria-label="Remove from favorites"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-neutral-800">{shoe.name}</h3>
                <p className="text-primary-600 font-medium">${shoe.price}</p>
                <p className="text-neutral-500 text-sm mt-1">{shoe.color}</p>
                <p className="text-neutral-600 mt-2">{shoe.description}</p>
                
                {!shoe.inStock ? (
                  <p className="text-danger-600 mt-3 font-medium">Out of Stock</p>
                ) : (
                  <div className="mt-3 flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
