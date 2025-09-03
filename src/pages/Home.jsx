import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  const handleViewDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleFavorite = (e) => {
    e.currentTarget.classList.toggle('active');
  };

  const handleBuy = (e) => {
    e.currentTarget.classList.toggle('active');
  };

  const handleFollow = (e) => {
    e.currentTarget.classList.toggle('active');
    const button = e.currentTarget;
    if (button.classList.contains('active')) {
      button.textContent = 'Following';
    } else {
      button.textContent = '+Follow';
    }
  };
  
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
              <p className="title-content" style={{ marginBottom: '8px' }}>Good Morning, Yeager</p>
              <p className="subtitle-content">
                Finish your profile.{' '}
                <a href="#" className="btn-link">Edit now</a>
              </p>
            </div>
          </div>
          <div className="search-wrapper">
            <div className="search-bar" style={{ flex: 1 }}>
              <input
                className="form-control"
                type="text"
                placeholder="Search shoes"
              />
            </div>
            <button
              className="btn-setting"
              aria-label="Button Setting"
            >
              <svg fill="none">
                <mask id="path-1-inside-1_1_44" fill="white">
                  <path d="M14.517 3.75833C14.517 2.78723 13.7297 2 12.7586 2H10.2753C9.30421 2 8.51698 2.78723 8.51698 3.75834C8.51698 5.11191 7.0517 5.95789 5.87947 5.2811C5.03847 4.79555 3.96308 5.0837 3.47753 5.9247L2.23586 8.07533C1.75032 8.91632 2.03846 9.9917 2.87946 10.4772C4.05167 11.154 4.05167 12.846 2.87946 13.5228C2.03846 14.0083 1.75032 15.0837 2.23587 15.9247L3.47754 18.0753C3.96309 18.9163 5.03847 19.2045 5.87947 18.7189C7.05169 18.0421 8.51697 18.8881 8.51697 20.2417C8.51697 21.2128 9.3042 22 10.2753 22H12.7586C13.7297 22 14.517 21.2128 14.517 20.2417C14.517 18.8881 15.9822 18.0421 17.1545 18.7189C17.9955 19.2045 19.0709 18.9163 19.5564 18.0753L20.7981 15.9247C21.2836 15.0837 20.9955 14.0083 20.1545 13.5228C18.9823 12.846 18.9823 11.154 20.1545 10.4772C20.9955 9.99169 21.2836 8.9163 20.7981 8.0753L19.5564 5.92468C19.0709 5.08368 17.9955 4.79554 17.1545 5.28109C15.9823 5.95787 14.517 5.1119 14.517 3.75833Z" />
                </mask>
                <path d="M20.7981 8.0753L19.4991 8.8253L20.7981 8.0753ZM10.2753 3.5H12.7586V0.5H10.2753V3.5ZM3.5349 8.82533L4.77657 6.6747L2.17849 5.1747L0.936826 7.32533L3.5349 8.82533Z" fill="currentColor" mask="url(#path-1-inside-1_1_44)" />
                <circle cx="11.517" cy="12" r="2.25" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </nav>
      </section>

      {/* Product Section */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <h4 className="title-section-content">Exclusive Product From Nike</h4>
          <a href="#" className="btn-link">View All Shoes</a>
        </div>
        <div className="products-grid">
          <div className="product-card">
            <img
              src="/assets/images/nike_red.png"
              alt="Nike Red"
              width="260"
              height="180"
            />
            <div className="product-detail" style={{ paddingTop: '12px' }}>
              <div>
                <p className="label-detail" style={{ marginBottom: '4px' }}>7 Colours</p>
                <p className="title-detail">Nike Red Shoe 77</p>
              </div>
              <button
                className="btn btn-fav active"
                aria-label="Button Favorite"
                onClick={handleFavorite}
              >
                <svg fill="currentColor">
                  <path d="M11.5909 6.09528L12.1213 6.6256L12.6516 6.09528C14.4453 4.30157 17.3535 4.30157 19.1472 6.0953C20.941 7.88902 20.941 10.7972 19.1473 12.591L12.2207 19.5176C12.1658 19.5725 12.0768 19.5725 12.022 19.5176L5.10555 12.6012L5.10485 12.6005L5.0953 12.591C5.09519 12.5909 5.09508 12.5907 5.09497 12.5906C3.30157 10.7969 3.30168 7.88891 5.0953 6.0953C6.88902 4.30158 9.79721 4.30157 11.5909 6.09528Z" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </div>
            <div className="product-detail" style={{ paddingTop: '16px' }}>
              <div>
                <p className="label-detail" style={{ marginBottom: '4px' }}>Price:</p>
                <p className="price-detail">Rp 220.000</p>
              </div>
              <button
                className="buy-product button btn-rounded active"
                onClick={handleBuy}
              >
                Buy Now
              </button>
            </div>
          </div>

          <div className="product-card">
            <img
              src="/assets/images/nike_airforce.png"
              alt="Nike Airforce"
              width="260"
              height="180"
            />
            <div className="product-detail" style={{ paddingTop: '12px' }}>
              <div>
                <p className="label-detail" style={{ marginBottom: '4px' }}>4 Colours</p>
                <p className="title-detail">Nike Airforce uHigh</p>
              </div>
              <button
                className="btn btn-fav"
                aria-label="Button Favorite"
                onClick={handleFavorite}
              >
                <svg fill="currentColor">
                  <path d="M11.5909 6.09528L12.1213 6.6256L12.6516 6.09528C14.4453 4.30157 17.3535 4.30157 19.1472 6.0953C20.941 7.88902 20.941 10.7972 19.1473 12.591L12.2207 19.5176C12.1658 19.5725 12.0768 19.5725 12.022 19.5176L5.10555 12.6012L5.10485 12.6005L5.0953 12.591C5.09519 12.5909 5.09508 12.5907 5.09497 12.5906C3.30157 10.7969 3.30168 7.88891 5.0953 6.0953C6.88902 4.30158 9.79721 4.30157 11.5909 6.09528Z" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </div>
            <div className="product-detail" style={{ paddingTop: '16px' }}>
              <div>
                <p className="label-detail" style={{ marginBottom: '4px' }}>Price:</p>
                <p className="price-detail">Rp 250.000</p>
              </div>
              <button
                className="buy-product button btn-rounded"
                onClick={handleBuy}
              >
                Buy Now
              </button>
            </div>
          </div>

          <div className="product-card">
            <img
              src="/assets/images/nike_kiger.png"
              alt="Nike Kiger"
              width="260"
              height="180"
            />
            <div className="product-detail" style={{ paddingTop: '12px' }}>
              <div>
                <p className="label-detail" style={{ marginBottom: '4px' }}>2 Colours</p>
                <p className="title-detail">Nike Kiger 1 Mid</p>
              </div>
              <button
                className="btn btn-fav"
                aria-label="Button Favorite"
                onClick={handleFavorite}
              >
                <svg fill="currentColor">
                  <path d="M11.5909 6.09528L12.1213 6.6256L12.6516 6.09528C14.4453 4.30157 17.3535 4.30157 19.1472 6.0953C20.941 7.88902 20.941 10.7972 19.1473 12.591L12.2207 19.5176C12.1658 19.5725 12.0768 19.5725 12.022 19.5176L5.10555 12.6012L5.10485 12.6005L5.0953 12.591C5.09519 12.5909 5.09508 12.5907 5.09497 12.5906C3.30157 10.7969 3.30168 7.88891 5.0953 6.0953C6.88902 4.30158 9.79721 4.30157 11.5909 6.09528Z" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </div>
            <div className="product-detail" style={{ paddingTop: '16px' }}>
              <div>
                <p className="label-detail" style={{ marginBottom: '4px' }}>Price:</p>
                <p className="price-detail">Rp 990.000</p>
              </div>
              <button
                className="buy-product button btn-rounded"
                onClick={handleBuy}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
        <h4 className="title-section-content">Best Store In This Month</h4>
        <div className="stores-grid">
          <div className="store-card">
            <img
              src="/assets/images/adidas.png"
              alt="Adidas Store"
              width="410"
              height="100"
            />
            <div className="store-name">
              <div>
                <p className="title-store">
                  Adidas Store
                  <span>
                    <img src="/assets/icons/ic_badge.svg" alt="Icon Badge" />
                  </span>
                </p>
                <p className="username-store">@adidasindonesia</p>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <a href="#" className="btn-link">Visit Store</a>
                <button
                  className="button btn-follow active"
                  onClick={handleFollow}
                  style={{ borderRadius: '50px' }}
                >
                  Following
                </button>
              </div>
            </div>
            <div className="store-detail">
              <div className="section-detail">
                <h6>1.569</h6>
                <p>Total shoes</p>
              </div>
              <div className="vertical-line"></div>
              <div className="section-detail">
                <h6>5.2M</h6>
                <p>Total followers</p>
              </div>
              <div className="vertical-line"></div>
              <div className="section-detail">
                <h6>56</h6>
                <p>Exclusive Shoe</p>
              </div>
            </div>
          </div>

          <div className="store-card">
            <img
              src="/assets/images/puma.png"
              alt="Puma Store"
              width="410"
              height="100"
            />
            <div className="store-name">
              <div>
                <p className="title-store">
                  Puma Store
                  <span>
                    <img src="/assets/icons/ic_badge.svg" alt="Icon Badge" />
                  </span>
                </p>
                <p className="username-store">@pumaid</p>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <a href="#" className="btn-link">Visit Store</a>
                <button
                  className="button btn-follow"
                  onClick={handleFollow}
                  style={{ borderRadius: '50px' }}
                >
                  +Follow
                </button>
              </div>
            </div>
            <div className="store-detail">
              <div className="section-detail">
                <h6>1.362</h6>
                <p>Total shoes</p>
              </div>
              <div className="vertical-line"></div>
              <div className="section-detail">
                <h6>5.7M</h6>
                <p>Total followers</p>
              </div>
              <div className="vertical-line"></div>
              <div className="section-detail">
                <h6>76</h6>
                <p>Exclusive Shoe</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
