import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useProducts } from '../contexts/ProductContext';
import { useOrders } from '../contexts/OrderContext';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
  const { user } = useAuth();
  const { addProduct, getProductsByVendor, deleteProduct } = useProducts();
  const { getVendorOrders } = useOrders();

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600']
  });

  const myProducts = getProductsByVendor(user.id);
  const myOrders = getVendorOrders(user.id);

  const revenue = myOrders.reduce((sum, o) => sum + o.total, 0).toFixed(2);

  const salesData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 4500 },
  ];

  const handleAddProduct = (e) => {
    e.preventDefault();
    addProduct({
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      vendorId: user.id,
      vendorName: user.name
    });

    toast.success('Product added!');
    setShowForm(false);
  };

  return (
    <div className="flex min-h-screen text-white">

      {/* SIDEBAR */}
      <div className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-8">Vendor Panel</h2>
        <div className="space-y-4 text-gray-300">
          <p className="hover:text-emerald-400 cursor-pointer transition">Dashboard</p>
          <p className="hover:text-emerald-400 cursor-pointer transition">Products</p>
          <p className="hover:text-emerald-400 cursor-pointer transition">Orders</p>
          <p className="hover:text-emerald-400 cursor-pointer transition">Analytics</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-10">
          Welcome back, {user.name}
        </h1>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <StatCard title="Products" value={myProducts.length} />
          <StatCard title="Orders" value={myOrders.length} />
          <StatCard title="Revenue" value={`$${revenue}`} />
        </div>

        {/* SALES CHART */}
        <div className="glass backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6">Sales Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid stroke="#333" strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Bar dataKey="sales" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* PRODUCTS SECTION */}
        <div className="glass backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">My Products</h2>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-emerald-500 text-black px-6 py-2 rounded-xl font-semibold hover:bg-emerald-400 transition"
            >
              {showForm ? 'Cancel' : 'Add Product'}
            </button>
          </div>

          {showForm && (
            <form onSubmit={handleAddProduct} className="space-y-4 mb-8">
              <input
                type="text"
                placeholder="Product Name"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20"
                required
              />
              <textarea
                placeholder="Description"
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20"
                required
              />
              <div className="grid grid-cols-3 gap-4">
                <input type="number" placeholder="Price"
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="p-3 rounded-xl bg-white/10 border border-white/20" required />
                <input type="text" placeholder="Category"
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="p-3 rounded-xl bg-white/10 border border-white/20" required />
                <input type="number" placeholder="Stock"
                  onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  className="p-3 rounded-xl bg-white/10 border border-white/20" required />
              </div>
              <button className="w-full bg-emerald-500 text-black py-3 rounded-xl font-semibold hover:bg-emerald-400 transition">
                Save Product
              </button>
            </form>
          )}

          <div className="space-y-6">
            {myProducts.map(product => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between bg-white/5 border border-white/10 p-4 rounded-2xl"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-emerald-400 font-bold">${product.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    deleteProduct(product.id);
                    toast.success('Product deleted');
                  }}
                  className="text-red-400 hover:text-red-500 transition"
                >
                  Delete
                </button>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="glass backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-xl"
  >
    <p className="text-gray-400 mb-2">{title}</p>
    <h3 className="text-3xl font-bold">{value}</h3>
  </motion.div>
);

export default Dashboard;
