import React from 'react';
import Card from '../components/atoms/Card';
import Badge from '../components/atoms/Badge';
import Button from '../components/atoms/Button';

// Sample orders data
const orders = [
  {
    id: 'ORD-12345',
    date: 'July 20, 2025',
    status: 'Processing',
    total: 259.98,
    items: [
      {
        id: 1,
        name: 'Nike Air Force 1',
        price: 119.99,
        quantity: 1,
        image: '/assets/images/nike_airforce.png',
      },
      {
        id: 3,
        name: 'Nike Dunk High',
        price: 139.99,
        quantity: 1,
        image: '/assets/images/nike_red.png',
      }
    ]
  },
  {
    id: 'ORD-12344',
    date: 'July 15, 2025',
    status: 'Delivered',
    total: 179.99,
    items: [
      {
        id: 4,
        name: 'Adidas Ultraboost',
        price: 179.99,
        quantity: 1,
        image: '/assets/images/adidas.png',
      }
    ]
  },
  {
    id: 'ORD-12343',
    date: 'July 5, 2025',
    status: 'Delivered',
    total: 109.99,
    items: [
      {
        id: 5,
        name: 'Puma RS-X',
        price: 109.99,
        quantity: 1,
        image: '/assets/images/puma.png',
      }
    ]
  }
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'Processing':
      return <Badge count={status} variant="primary" className="px-3" />;
    case 'Shipped':
      return <Badge count={status} variant="secondary" className="px-3" />;
    case 'Delivered':
      return <Badge count={status} variant="success" className="px-3" />;
    case 'Cancelled':
      return <Badge count={status} variant="danger" className="px-3" />;
    default:
      return <Badge count={status} variant="neutral" className="px-3" />;
  }
};

const Orders = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-neutral-900 mb-6">Your Orders</h1>
      
      {orders.map(order => (
        <Card key={order.id} className="mb-8 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200" padding="none">
          <div className="border-b border-neutral-200 bg-neutral-50 px-4 py-3 flex flex-wrap justify-between items-center">
            <div>
              <p className="font-medium">Order #{order.id}</p>
              <p className="text-sm text-neutral-500">Placed on {order.date}</p>
            </div>
            <div className="flex items-center space-x-3 mt-2 sm:mt-0">
              {getStatusBadge(order.status)}
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
          </div>
          
          <div className="px-4 py-3">
            {order.items.map(item => (
              <div key={item.id} className="flex items-center py-3 border-b border-neutral-100 last:border-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4">
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="text-sm text-neutral-500">
                    <span>Qty: {item.quantity}</span>
                    <span className="ml-4">${item.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-neutral-200">
              <p className="font-medium">Total</p>
              <p className="font-bold text-lg">${order.total.toFixed(2)}</p>
            </div>
          </div>
          
          <div className="bg-neutral-50 px-4 py-3 border-t border-neutral-200">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                Track Order
              </Button>
              <Button variant="outline" size="sm">
                Return Items
              </Button>
              <Button variant="outline" size="sm">
                Get Help
              </Button>
              <Button variant="primary" size="sm">
                Buy Again
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Orders;
