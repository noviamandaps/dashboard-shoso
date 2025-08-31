# Shoe Marketplace Design System

This project implements a design system for a shoe marketplace using React and Tailwind CSS.

## Components Structure

The project follows Atomic Design principles with the following structure:

### Atoms (Basic building blocks)
- `Button.jsx` - A customizable button component with various variants and sizes
- `Card.jsx` - A versatile container with shadow and rounded corners
- `Badge.jsx` - A small component for displaying notification counts

### Organisms (Complex components)
- `Navbar.jsx` - The main navigation bar with dropdown menus and cart icon
- `ShoppingCart.jsx` - A slide-in cart that displays items and checkout options

### Pages
- `ShoeAuction.jsx` - A page that displays live shoe auctions with countdown timers

### Context
- `CartContext.jsx` - A React context for managing the shopping cart state

## Color Palette

The design system includes a custom color palette with the following colors:
- `primary` - A vibrant blue for main actions and brand elements
- `secondary` - A warm orange for accents and secondary actions
- `neutral` - Grayscale colors for text and backgrounds
- `success` - Green shades for positive notifications
- `danger` - Red shades for errors and warnings

## Usage

### Button Component

```jsx
import Button from './components/atoms/Button';

// Primary button (default)
<Button onClick={handleClick}>Click Me</Button>

// Secondary button
<Button variant="secondary" size="lg">Large Button</Button>

// Other variants
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="success">Success</Button>
```

### Card Component

```jsx
import Card from './components/atoms/Card';

// Basic usage
<Card>
  <h2>Card Title</h2>
  <p>Card content goes here</p>
</Card>

// With custom styling
<Card elevation="lg" padding="lg" rounded="xl" className="my-4">
  <h2>Custom Card</h2>
</Card>

// Product card with "Add to Cart" button
<Card
  product={{
    id: 1,
    name: "Nike Air Force 1",
    price: 120,
    image: "/assets/images/nike_airforce.png",
    color: "White"
  }}
>
  <img src="/assets/images/nike_airforce.png" alt="Nike Air Force 1" />
  <h3>Nike Air Force 1</h3>
  <p>$120</p>
</Card>
```

### Badge Component

```jsx
import Badge from './components/atoms/Badge';

// Basic usage
<Badge count={5} />

// With variants
<Badge count={10} variant="secondary" />
<Badge count={3} variant="danger" />

// With size
<Badge count={99} size="lg" />

// With max value
<Badge count={150} max={99} /> // Displays "99+"
```

### Navbar Component

```jsx
import Navbar from './components/organisms/Navbar';

// The Navbar should be placed inside a Router
<Router>
  <Navbar />
  {/* Rest of your application */}
</Router>
```

### ShoppingCart Component

```jsx
// The ShoppingCart is integrated with Navbar, but can be used independently
import ShoppingCart from './components/organisms/ShoppingCart';

function MyComponent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsCartOpen(true)}>Open Cart</button>
      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
```

### CartContext Provider

```jsx
// Wrap your application with the CartProvider
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      {/* Your application components */}
    </CartProvider>
  );
}
```

### Using the Cart Context

```jsx
// In any component
import { useCart } from './context/CartContext';

function ProductComponent({ product }) {
  const { addItemToCart, getCartItemCount } = useCart();
  
  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={() => addItemToCart(product)}>
        Add to Cart
      </button>
      <p>Items in cart: {getCartItemCount()}</p>
    </div>
  );
}
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. To use the new components, edit src/main.jsx to import NewApp.jsx instead of App.jsx
