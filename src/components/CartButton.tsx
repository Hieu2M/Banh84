import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartButton() {
  const { state } = useCart();
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart" className="relative">
      <ShoppingCart className="text-white hover:text-[#ff5722] transition-colors duration-200" size={24} />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#ff5722] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
}