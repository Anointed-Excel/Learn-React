import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useOrders } from '../contexts/OrderContext';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const Checkout = () => {
  const [shippingInfo, setShippingInfo] = useState({ address: '', city: '', zip: '', phone: '' });
  const { cartItems, getTotal, clearCart } = useCart();
  const { createOrder } = useOrders();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      userId: user.id,
      items: cartItems,
      total: getTotal() + 10,
      shippingInfo
    };
    createOrder(order);
    clearCart();
    toast.success('Order placed successfully!');
    navigate('/orders');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-2">Address</label>
          <input
            type="text"
            value={shippingInfo.address}
            onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-2">City</label>
            <input
              type="text"
              value={shippingInfo.city}
              onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-2">ZIP Code</label>
            <input
              type="text"
              value={shippingInfo.zip}
              onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
        </div>
        <div>
          <label className="block font-medium mb-2">Phone</label>
          <input
            type="tel"
            value={shippingInfo.phone}
            onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${getTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>$10.00</span>
          </div>
          <div className="flex justify-between font-bold text-xl">
            <span>Total</span>
            <span>${(getTotal() + 10).toFixed(2)}</span>
          </div>
        </div>
        <button type="submit" className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;