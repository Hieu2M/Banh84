import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import App from './App.tsx';
import './index.css';

// Handle stored route on page load
const path = window.localStorage.getItem('path');
if (path) {
    window.localStorage.removeItem('path');
    window.history.replaceState(null, '', path);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  </StrictMode>
);