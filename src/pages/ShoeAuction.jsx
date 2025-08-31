import React, { useState, useEffect } from 'react';
import Card from '../components/atoms/Card';
import Button from '../components/atoms/Button';

// Sample data for auctions
const sampleAuctions = [
  {
    id: 1,
    name: 'Nike Air Force 1',
    image: '/assets/images/nike_airforce.png',
    currentBid: 179.99,
    endTime: new Date(Date.now() + 2 * 60 * 60 * 1000 + 15 * 60 * 1000 + 30 * 1000), // 2h 15m 30s from now
  },
  {
    id: 2,
    name: 'Nike Terra Kiger 7',
    image: '/assets/images/nike_kiger.png',
    currentBid: 139.99,
    endTime: new Date(Date.now() + 5 * 60 * 60 * 1000), // 5h from now
  },
  {
    id: 3,
    name: 'Nike Dunk High',
    image: '/assets/images/nike_red.png',
    currentBid: 199.99,
    endTime: new Date(Date.now() + 30 * 60 * 1000), // 30m from now
  },
];

const ShoeAuction = () => {
  const [auctions, setAuctions] = useState(sampleAuctions);
  const [timeLeft, setTimeLeft] = useState({});

  // Calculate time remaining for each auction
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const newTimeLeft = {};
      
      auctions.forEach(auction => {
        const difference = auction.endTime - now;
        
        if (difference > 0) {
          const hours = Math.floor(difference / (1000 * 60 * 60));
          const minutes = Math.floor((difference / (1000 * 60)) % 60);
          const seconds = Math.floor((difference / 1000) % 60);
          
          newTimeLeft[auction.id] = `${hours}h ${minutes}m ${seconds}s`;
        } else {
          newTimeLeft[auction.id] = 'Ended';
        }
      });
      
      setTimeLeft(newTimeLeft);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [auctions]);

  // Handle placing a bid
  const handlePlaceBid = (auctionId) => {
    setAuctions(prevAuctions => 
      prevAuctions.map(auction => {
        if (auction.id === auctionId) {
          // Increase bid by random amount between $5-15
          const bidIncrease = 5 + Math.random() * 10;
          return {
            ...auction,
            currentBid: parseFloat((auction.currentBid + bidIncrease).toFixed(2)),
          };
        }
        return auction;
      })
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-neutral-900 mb-8">Live Shoe Auctions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {auctions.map((auction) => (
          <Card key={auction.id} className="overflow-hidden flex flex-col">
            {/* Product Image */}
            <div className="w-full h-60 bg-neutral-100 flex items-center justify-center overflow-hidden">
              <img 
                src={auction.image} 
                alt={auction.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div className="p-4 flex-grow flex flex-col">
              <h2 className="text-xl font-semibold text-neutral-900 mb-2">{auction.name}</h2>
              
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-neutral-500">Current Bid</p>
                  <p className="text-xl font-bold text-primary-700">${auction.currentBid}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Ends in</p>
                  <p className="text-md font-medium text-secondary-700">{timeLeft[auction.id]}</p>
                </div>
              </div>
              
              <div className="mt-auto">
                <Button 
                  variant="primary" 
                  className="w-full"
                  onClick={() => handlePlaceBid(auction.id)}
                  disabled={timeLeft[auction.id] === 'Ended'}
                >
                  Place Bid
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShoeAuction;
