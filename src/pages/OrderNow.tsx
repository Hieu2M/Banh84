import React from 'react';
import { Phone, MessageCircle, Facebook } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function OrderNow() {
  const { state } = useCart();
  
  const orderSummary = state.items.map(item => 
    `${item.quantity}x ${item.name}`
  ).join('\n');
  
  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  const messageTemplate = `Xin Chào! Tôi muốn đặt món:\n\n${orderSummary}\n\nTotal: $${total.toFixed(2)}`;
  const encodedMessage = encodeURIComponent(messageTemplate);

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-12">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Place Your Order</h1>
        <h2 align="center">(thông tin trong giỏ hàng sẽ được kèm theo khi chọn 1 trong 2 hình thức nhắn tin bên dưới)</h2>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          {state.items.length > 0 && (
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Your Order Summary:</h3>
              {state.items.map((item) => (
                <div key={item.id} className="flex justify-between py-1">
                  <span>{item.quantity}x {item.name}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="mt-2 pt-2 border-t border-gray-200">
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-6">
            {/* Text Message Contact */}
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="bg-[#ff5722] p-3 rounded-full">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Text Us</h3>
                <p className="text-gray-600 mb-2">Nhắn số này để order</p>
                <a 
                  href={`sms:+12532222092?body=${encodedMessage}`}
                  className="text-[#ff5722] font-medium hover:underline"
                >
                  (253) 222-2092
                </a>
              </div>
            </div>

            {/* Messenger Contact */}
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="bg-[#0084ff] p-3 rounded-full">
                <MessageCircle className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Facebook Messenger</h3>
                <p className="text-gray-600 mb-2">Nhắn Facebook này để order</p>
                <a 
                  href={`https://m.me/TrangTestSo1?text=${encodedMessage}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-[#0084ff] text-white px-4 py-2 rounded-md hover:bg-[#0074e4] transition-colors"
                >
                  Message Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}