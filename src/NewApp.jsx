import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/organisms/Navbar';
import Home from './pages/Home';
import ExploreProducts from './pages/ExploreProducts';
import ShoeAuction from './pages/ShoeAuction';
import Orders from './pages/Orders';
import Notifications from './pages/Notifications';
import Favorites from './pages/Favorites';
import Settings from './pages/Settings';
import ProductDetail from './pages/ProductDetail';
import Sidebar from './components/Sidebar/Sidebar';
import { useTheme } from './hooks/useTheme';
import './App.css';
import './layout.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeMenu, setActiveMenu] = React.useState('Marketplace');
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 992);

  // Update isMobile state when window resizes
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle menu click to set active menu and redirect
  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    // Navigation will be handled by Links in the Sidebar
  };

  return (
    <CartProvider>
      <Router>
        <div className={`app ${theme}`}>
          <Sidebar theme={theme} toggleTheme={toggleTheme} activeMenu={activeMenu} onMenuClick={handleMenuClick} />
          <div className="content">
            <Navbar />
            <div className="container mx-auto">
              <main className="px-4 py-6">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/explore" element={<ExploreProducts />} />
                  <Route path="/auction" element={<ShoeAuction />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
