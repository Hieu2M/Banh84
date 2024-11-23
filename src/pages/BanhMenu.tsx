import React, { useEffect, useRef } from 'react';
import MenuItem from '../components/MenuItem';
import { useLocation } from 'react-router-dom';

const banhItems = [
  // Banh Mi Section
  {
    name: "Bánh Mì Thịt Xíu",
    description: "Classic Vietnamese sandwich with cold cuts, pâté, pickled vegetables, and fresh herbs",
    price: 6.00,
    image: [
      "/custom-images/banh-mi-thit-nguoi.jpg",
      "https://images.unsplash.com/photo-1633512412960-3d32721c4d13?auto=format&fit=crop&q=80&w=2048",
      "https://images.unsplash.com/photo-1600454309261-3dc9b7e7fa4f?auto=format&fit=crop&q=80&w=2048"
    ],
    category: "Bánh Mì"
  },
  {
    name: "Bánh Mì Xíu Mại",
    description: "Grilled lemongrass chicken with crispy vegetables and spicy mayo",
    price: 6.00,
    image: [
      "https://images.unsplash.com/photo-1600454309261-3dc9b7e7fa4f?auto=format&fit=crop&q=80&w=2048",
      "https://images.unsplash.com/photo-1633512412960-3d32721c4d13?auto=format&fit=crop&q=80&w=2048"
    ],
    category: "Bánh Mì"
  },
  {
    name: "Bánh Mì Chả Cá",
    description: "Vegetarian sandwich with tofu, mushrooms, and fresh vegetables",
    price: 6.00,
    image: [
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=2048",
      "https://images.unsplash.com/photo-1600454309261-3dc9b7e7fa4f?auto=format&fit=crop&q=80&w=2048"
    ],
    category: "Bánh Mì",
    isVegetarian: true
  },
  {
    name: "Bánh Mì Thập Cẩm",
    description: "Vietnamese meatball sandwich with tomato sauce",
    price: 6.00,
    image: [
      "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=2048",
      "https://images.unsplash.com/photo-1633512412960-3d32721c4d13?auto=format&fit=crop&q=80&w=2048"
    ],
    category: "Bánh Mì"
  },
  {
    name: "Bánh Mì Thịt Nướng",
    description: "Crispy roasted pork belly sandwich with cucumber and pickled carrots",
    price: 6.00,
    image: [
      "https://images.unsplash.com/photo-1597715469889-dd75fe4a1765?auto=format&fit=crop&q=80&w=2048",
      "https://images.unsplash.com/photo-1633512412960-3d32721c4d13?auto=format&fit=crop&q=80&w=2048"
    ],
    category: "Bánh Mì"
  },
  // Banh Cuon Section
  {
    name: "Bánh Cuốn - LB",
    description: "Steamed rice rolls filled with minced pork and wood ear mushrooms",
    price: 11,
    image: [
      "/custom-images/BanhCuonUot/Banhcuon.jpg"
    ],
    category: "Bánh Cuốn"
  },
  {
    name: "Bánh Cuốn - Khay (5 LBs)",
    description: "Steamed rice rolls filled with minced pork and wood ear mushrooms",
    price: 50,
    image: [
      "/custom-images/BanhCuonUot/Banhcuon.jpg"
    ],
    category: "Bánh Cuốn"
  },
  
  // Banh Uot Section
  {
    name: "Bánh Ướt - 1 LB",
    description: "Wet rice paper rolls served with Vietnamese ham and bean sprouts",
    price: 6,
    image: [
      "/custom-images/BanhCuonUot/Banhuot.jpg",
    ],
    category: "Bánh Ướt"
  },
  {
    name: "Bánh Ướt - Khay (5 LBs)",
    description: "Wet rice paper rolls served with Vietnamese ham and bean sprouts",
    price: 30,
    image: [
      "/custom-images/BanhCuonUot/Banhuot.jpg",
    ],
    category: "Bánh Ướt"
  },
  
  // Banh Bot Loc Section
  {
    name: "Bánh Bột Lọc",
    description: "Wet rice paper rolls served with Vietnamese ham and bean sprouts",
    price: 10.99,
    image: [
      "/custom-images/BanhCuonUot/Banhuot.jpg",
    ],
    category: "Bánh Bột Lọc"
  },
  {
    name: "Bánh Bột Lọc Man",
    description: "Wet rice paper rolls served with Vietnamese ham and bean sprouts",
    price: 10.99,
    image: [
      "/custom-images/BanhCuonUot/Banhuot.jpg",
    ],
    category: "Bánh Bột Lọc"
  }
];

export default function BanhMenu() {
  const location = useLocation();
  const categoryRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const { state } = location;
    if (state?.scrollTo) {
      const element = categoryRefs.current[state.scrollTo];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Menu</h1>
        
        {/* Banh Mi Section */}
        <section ref={el => categoryRefs.current['Bánh Mì'] = el} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-[#ff5722]">Bánh Mì</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {banhItems
              .filter(item => item.category === "Bánh Mì")
              .map((item, index) => (
                <MenuItem key={`banh-mi-${index}`} {...item} />
              ))}
          </div>
        </section>

        {/* Banh Cuon Section */}
        <section ref={el => categoryRefs.current['Bánh Cuốn'] = el} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-[#ff5722]">Bánh Cuốn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {banhItems
              .filter(item => item.category === "Bánh Cuốn")
              .map((item, index) => (
                <MenuItem key={`banh-cuon-${index}`} {...item} />
              ))}
          </div>
        </section>

        {/* Banh Uot Section */}
        <section ref={el => categoryRefs.current['Bánh Ướt'] = el} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-[#ff5722]">Bánh Ướt</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {banhItems
              .filter(item => item.category === "Bánh Ướt")
              .map((item, index) => (
                <MenuItem key={`banh-uot-${index}`} {...item} />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}