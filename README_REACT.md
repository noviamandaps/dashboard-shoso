# ShoSo Marketplace Dashboard - React Version

This project has been converted from a static HTML/CSS/JS dashboard to a fully functional React application.

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation & Running

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Sidebar/
│   │   ├── Sidebar.jsx          # Main sidebar component
│   │   ├── Navigation.jsx       # Navigation menu component
│   │   ├── NavigationItem.jsx   # Individual navigation item
│   │   ├── ThemeToggle.jsx      # Theme toggle component
│   │   ├── icons.jsx            # SVG icons as React components
│   │   └── Sidebar.css          # Sidebar styles
│   ├── Dashboard/
│   │   ├── Dashboard.jsx        # Main dashboard container
│   │   ├── Header.jsx           # Dashboard header
│   │   ├── ProductSection.jsx   # Products section
│   │   ├── StoreSection.jsx     # Stores section
│   │   └── Dashboard.css        # Dashboard styles
│   ├── ProductCard/
│   │   ├── ProductCard.jsx      # Individual product card
│   │   └── ProductCard.css      # Product card styles
│   └── StoreCard/
│       ├── StoreCard.jsx        # Individual store card
│       └── StoreCard.css        # Store card styles
├── hooks/
│   └── useTheme.js              # Custom hook for theme management
├── App.jsx                      # Main App component
├── App.css                      # App styles
├── main.jsx                     # React entry point
└── index.css                    # Global styles
```

## 🎯 Converted Features

### ✅ Completed Components

1. **Sidebar Component**
   - ✅ Logo and branding
   - ✅ Navigation menu with active states
   - ✅ My Account section
   - ✅ Notification badges
   - ✅ Theme toggle (Light/Dark mode)
   - ✅ Responsive mobile menu

2. **Dashboard Header**
   - ✅ User profile section
   - ✅ Search bar
   - ✅ Settings button
   - ✅ Mobile hamburger menu

3. **Product Cards**
   - ✅ Product images and details
   - ✅ Interactive favorite button
   - ✅ Interactive buy button
   - ✅ State management for user interactions

4. **Store Cards**
   - ✅ Store information display
   - ✅ Interactive follow/unfollow button
   - ✅ Store statistics
   - ✅ Visit store links

5. **Theme System**
   - ✅ Light/Dark mode toggle
   - ✅ LocalStorage persistence
   - ✅ CSS class-based theming

### 🔧 Interactive Features

- **Menu Navigation**: Click different menu items to see active states
- **Favorite Products**: Toggle heart icon on product cards
- **Buy Products**: Toggle buy button states
- **Follow Stores**: Follow/unfollow store accounts
- **Theme Toggle**: Switch between light and dark modes
- **Responsive Design**: Works on mobile and desktop

## 🎨 Styling

The project maintains the original CSS structure:
- Original CSS files are preserved in the `css/` directory
- React components import the corresponding CSS files
- Bootstrap classes are maintained for layout
- Custom CSS variables for theming

## 🔄 State Management

- **Local Component State**: Used for interactive elements (favorites, buy buttons, follow buttons)
- **Theme State**: Managed via custom hook with localStorage persistence
- **Menu State**: Managed in Sidebar component for active menu tracking

## 🛠️ Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is fully responsive:
- Desktop: Full sidebar layout
- Tablet: Collapsible sidebar
- Mobile: Off-canvas sidebar menu

## 🎯 Future Enhancements

- Add routing with React Router
- Implement API integration
- Add search functionality
- Add shopping cart feature
- Add user authentication
- Add more product filtering options

## 🐛 Known Issues

- None currently identified

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Original HTML version**: Available in `index_original.html`
**React version**: This current implementation

The React version maintains all the visual design and functionality of the original HTML version while adding proper component structure, state management, and modern React patterns.