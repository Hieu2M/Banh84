import React from 'react';
import { useCart } from '../context/CartContext';
import ImageCarousel from './ImageCarousel';
import { useNavigate } from 'react-router-dom';

interface MenuItemProps {
  id?: string;
  name: string;
  description: string;
  price: number;
  image: string | string[];
  spicyLevel?: number;
  isVegetarian?: boolean;
  category?: string;
  isPopularDish?: boolean;
}

export default function MenuItem({ id = '', name, description, price, image, spicyLevel = 0, isVegetarian = false, category, isPopularDish = false }: MenuItemProps) {
  const { dispatch } = useCart();
  const navigate = useNavigate();
  const images = Array.isArray(image) ? image : [image];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: id || name.toLowerCase().replace(/\s+/g, '-'),
        name,
        price,
        quantity: 1
      }
    });
  };

  const handleClick = () => {
    if (isPopularDish && category) {
      navigate('banh-menu', { state: { scrollTo: category }});
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] ${isPopularDish ? 'cursor-pointer' : ''}`}
    onClick={handleClick}
    >
      <ImageCarousel images={images} name={name} />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <span className="text-green-600 font-medium">${price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {spicyLevel > 0 && (
              <div className="flex">
                {[...Array(spicyLevel)].map((_, i) => (
                  <span key={i} className="text-red-500">🌶️</span>
                ))}
              </div>
            )}
            {isVegetarian && (
              <span className="text-green-600 text-sm">🌱 Vegetarian</span>
            )}
          </div>
          <button 
            onClick={handleAddToCart}
            className="bg-red-500 text-white px-4 py-1 rounded-full text-sm hover:bg-red-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}