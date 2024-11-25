import React, { useEffect } from 'react';
import { MapPin, Phone, UtensilsCrossed, Facebook } from 'lucide-react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import MenuItem from './components/MenuItem';
import BanhMenu from './pages/BanhMenu';
import OrderNow from './pages/OrderNow';
import Cart from './pages/Cart';
import CartButton from './components/CartButton';

const menuItems = [
  {
    id: 'banh-mi',
    name: "Bánh Mì",
    description: "Crispy Vietnamese baguette filled with grilled pork, pickled vegetables, and fresh herbs",
    price: 6,
    image: [
      "/custom-images/BanhMi/Banhmi.jpg",
      "/custom-images/BanhMi/Banhmi2.jpg"
    ],
    category: "Bánh Mì",
    isPopularDish: true 
  },
  {
    id: 'banh-cuon',
    name: "Bánh Cuốn",
    description: "Traditional Vietnamese beef noodle soup with rice noodles, tender sliced beef, and aromatic herbs",
    price: 11,
    image: [
      "/custom-images/BanhCuonUot/Banhcuon.jpg"
    ],
    category: "Bánh Cuốn",
    isPopularDish: true
  },
  {
    id: 'banh-uot',
    name: "Bánh Ướt",
    description: "Fresh spring rolls with shrimp, herbs, and rice noodles served with peanut sauce",
    price: 7,
    image: [
      "custom-images/BanhCuonUot/Banhuot.jpg"
    ],
    category: "Bánh Ướt",
    isPopularDish: true,
    isVegetarian: true
  },
  // {
  //   id: 'banh-bot-loc',
  //   name: "Bánh Bột Lọc",
  //   description: "Spicy beef noodle soup from Hue with lemongrass and Vietnamese herbs",
  //   price: 10,
  //   image: [
  //     "custom-images/BanhBotLoc/banhbotloctonghop.jpg",
  //     "custom-images/BanhBotLoc/banhbotloc5.jpg",
  //     "custom-images/BanhBotLoc/banhbotloc2.jpg"
  //   ],
  //   category: "Bánh Bột Lọc",
  //   isPopularDish: true
  // },
  {
    id: 'xoi-bap',
    name: "Xôi Bắp",
    description: "Spicy beef noodle soup from Hue with lemongrass and Vietnamese herbs",
    price: 15,
    image: [
      "/custom-images/XoiBap/Xoibap.jpg",
    ],
    category: "Xôi Bắp",
    isPopularDish: true,
    isVegetarian: true
  }
];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);

  return null;
}

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const contactSection = document.getElementById('contact-section');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  
  // const scrollToContact = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   const contactSection = document.getElementById('contact-section');
  //   contactSection?.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <>
      {/* Hero Section */}
      <div 
        className="h-[60vh] bg-cover bg-center relative mt-16"
        style={{
          backgroundImage: 'url(/custom-images/BanhMi/Banhmi99.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4">Bánh 84st</h1>
          <p className="text-xl">Authentic Vietnamese Cuisine</p>
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Popular Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </div>
      </div>

      {/* Contact and Location Section */}
      <div id="contact-section" className="bg-gray-100 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3">
              <MapPin className="text-[#ff5722]" size={24} />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">84th Street, Tacoma, WA</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#ff5722]" size={24} />
              <div>
                <h3 className="font-semibold">Text Us</h3>
                <p className="text-gray-600">(253) 222-2092</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Facebook className="text-[#ff5722]" size={24} />
              <div>
                <h3 className="font-semibold">Message US</h3>
                <a 
                  href="https://www.facebook.com/mon.be.39" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#ff5722] hover:underline"
                >
                  @Bánh84st
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  const location = useLocation();
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact-section');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      {/* Navigation Bar */}
      <nav className="bg-[#1a1a1a] text-white fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <UtensilsCrossed className="text-[#ff5722]" size={28} />
              <span className="text-xl font-bold">Bánh 84st</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-[#ff5722] transition-colors duration-200">Home</Link>
              <Link to="/banh-menu" className="text-white hover:text-[#ff5722] transition-colors duration-200">Menu</Link>
              <a href="#contact-section" onClick={handleContactClick} className="text-white hover:text-[#ff5722] transition-colors duration-200">Contact</a>
              <CartButton />
            </div>

            {/* Order Now Button */}
            <div>
              <Link 
                to="/order-now"
                className="bg-[#ff5722] text-white px-6 py-2 rounded hover:bg-[#f4511e] transition-colors duration-200 inline-block"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/banh-menu" element={<BanhMenu />} />
        <Route path="/order-now" element={<OrderNow />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;