import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('shoplocal_cart');
    if (saved) setCartItems(JSON.parse(saved));
  }, []);

  const addToCart = (product, quantity = 1) => {
    const existing = cartItems.find(item => item.id === product.id);
    let updated;
    
    if (existing) {
      updated = cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updated = [...cartItems, { ...product, quantity }];
    }
    
    setCartItems(updated);
    localStorage.setItem('shoplocal_cart', JSON.stringify(updated));
    toast.success('Added to cart!');
  };

  const removeFromCart = (productId) => {
    const updated = cartItems.filter(item => item.id !== productId);
    setCartItems(updated);
    localStorage.setItem('shoplocal_cart', JSON.stringify(updated));
    toast.info('Removed from cart');
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    const updated = cartItems.map(item =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCartItems(updated);
    localStorage.setItem('shoplocal_cart', JSON.stringify(updated));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('shoplocal_cart');
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getTotal, getItemCount }}>
      {children}
    </CartContext.Provider>
  );
};