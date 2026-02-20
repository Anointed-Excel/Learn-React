import React, { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext();

export const useOrders = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('shoplocal_orders');
    if (saved) setOrders(JSON.parse(saved));
  }, []);

  const createOrder = (orderData) => {
    const newOrder = {
      id: Date.now().toString(),
      ...orderData,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    const updated = [...orders, newOrder];
    setOrders(updated);
    localStorage.setItem('shoplocal_orders', JSON.stringify(updated));
    return newOrder;
  };

  const updateOrderStatus = (orderId, status) => {
    const updated = orders.map(o => o.id === orderId ? { ...o, status } : o);
    setOrders(updated);
    localStorage.setItem('shoplocal_orders', JSON.stringify(updated));
  };

  const getUserOrders = (userId) => orders.filter(o => o.userId === userId);

  const getVendorOrders = (vendorId) => {
    return orders.filter(order =>
      order.items.some(item => item.vendorId === vendorId)
    );
  };

  return (
    <OrderContext.Provider value={{ orders, createOrder, updateOrderStatus, getUserOrders, getVendorOrders }}>
      {children}
    </OrderContext.Provider>
  );
};