import React from 'react';

// Sample orders data
const orders = [
  {
    id: 'ORD-12345',
    date: 'July 20, 2025',
    status: 'Processing',
    total: 490000,
    items: [
      {
        id: 1,
        name: 'Nike Air Force 1',
        price: 250000,
        quantity: 1,
        image: '/assets/images/nike_airforce.png',
      },
      {
        id: 3,
        name: 'Nike Red Shoe 77',
        price: 240000,
        quantity: 1,
        image: '/assets/images/nike_red.png',
      }
    ]
  },
  {
    id: 'ORD-12344',
    date: 'July 15, 2025',
    status: 'Delivered',
    total: 320000,
    items: [
      {
        id: 4,
        name: 'Adidas Ultraboost',
        price: 320000,
        quantity: 1,
        image: '/assets/images/adidas.png',
      }
    ]
  },
  {
    id: 'ORD-12343',
    date: 'July 5, 2025',
    status: 'Delivered',
    total: 280000,
    items: [
      {
        id: 5,
        name: 'Puma RS-X',
        price: 280000,
        quantity: 1,
        image: '/assets/images/puma.png',
      }
    ]
  },
  {
    id: 'ORD-12342',
    date: 'June 28, 2025',
    status: 'Shipped',
    total: 990000,
    items: [
      {
        id: 2,
        name: 'Nike Kiger 1 Mid',
        price: 990000,
        quantity: 1,
        image: '/assets/images/nike_kiger.png',
      }
    ]
  }
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Processing':
      return 'var(--orange)';
    case 'Shipped':
      return 'var(--blue)';
    case 'Delivered':
      return 'var(--green)';
    case 'Cancelled':
      return 'var(--red)';
    default:
      return 'var(--gray)';
  }
};

const Orders = () => {
  return (
    <>
      {/* Navigation Header */}
      <section>
        <button
          aria-controls="sidebar"
          aria-label="Button Hamburger"
          className="sidebarOffcanvas mb-5 btn p-0 border-0 d-flex d-lg-none"
          style={{ background: 'none', border: 'none', fontSize: '24px', color: 'var(--navy)' }}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <nav className="nav-content">
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <img
              src="/assets/images/photo.webp"
              alt="Photo Profile"
              className="photo-profile"
            />
            <div>
              <p className="title-content" style={{ marginBottom: '8px' }}>Your Orders</p>
              <p className="subtitle-content">
                Track and manage your shoe orders
              </p>
            </div>
          </div>
        </nav>
      </section>

      {/* Orders Grid */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4 className="title-section-content">Recent Orders</h4>
          <a href="#" className="btn-link">View All Orders</a>
        </div>
        
        <div className="row" style={{ margin: '0 -12px' }}>
          {orders.map(order => (
            <div key={order.id} className="col-12 col-md-6" style={{ padding: '0 12px', marginBottom: '24px' }}>
              <div style={{ 
                backgroundColor: 'var(--white)', 
                borderRadius: '16px', 
                border: '1px solid var(--grayish)',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                {/* Order Header */}
                <div style={{ 
                  padding: '20px',
                  borderBottom: '1px solid var(--grayish)',
                  backgroundColor: 'var(--light-gray)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                    <div>
                      <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: 'var(--navy)' }}>
                        Order #{order.id}
                      </p>
                      <p style={{ margin: '0', fontSize: '14px', color: 'var(--gray)' }}>
                        {order.date}
                      </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ 
                        backgroundColor: getStatusColor(order.status),
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '500'
                      }}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Order Items */}
                <div style={{ padding: '20px' }}>
                  {order.items.map((item, index) => (
                    <div key={item.id} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '16px',
                      marginBottom: index < order.items.length - 1 ? '16px' : '0',
                      paddingBottom: index < order.items.length - 1 ? '16px' : '0',
                      borderBottom: index < order.items.length - 1 ? '1px solid var(--grayish)' : 'none'
                    }}>
                      <img 
                        src={item.image} 
                        alt={item.name}
                        style={{ 
                          width: '64px',
                          height: '64px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          backgroundColor: 'var(--light-gray)'
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <p style={{ margin: '0 0 4px 0', fontWeight: '500', color: 'var(--navy)' }}>
                          {item.name}
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '14px', color: 'var(--gray)' }}>
                            Qty: {item.quantity}
                          </span>
                          <span style={{ fontWeight: '600', color: 'var(--navy)' }}>
                            Rp {item.price.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Total */}
                  <div style={{ 
                    marginTop: '20px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--grayish)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontWeight: '600', color: 'var(--navy)' }}>Total</span>
                    <span style={{ fontWeight: '700', fontSize: '18px', color: 'var(--navy)' }}>
                      Rp {order.total.toLocaleString()}
                    </span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div style={{ 
                  padding: '20px',
                  borderTop: '1px solid var(--grayish)',
                  backgroundColor: 'var(--light-gray)'
                }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <button className="button btn-rounded" style={{ borderRadius: '25px', fontSize: '14px' }}>
                      <i className="fa-solid fa-truck" style={{ marginRight: '8px' }}></i>
                      Track Order
                    </button>
                    <button className="button btn-rounded" style={{ borderRadius: '25px', fontSize: '14px' }}>
                      <i className="fa-solid fa-undo" style={{ marginRight: '8px' }}></i>
                      Return
                    </button>
                    <button className="button btn-rounded active" style={{ borderRadius: '25px', fontSize: '14px' }}>
                      <i className="fa-solid fa-shopping-cart" style={{ marginRight: '8px' }}></i>
                      Buy Again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Orders;
