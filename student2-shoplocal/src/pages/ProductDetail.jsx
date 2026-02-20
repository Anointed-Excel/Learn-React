import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext';
import { useCart } from '../contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById } = useProducts();
  const { addToCart } = useCart();
  const product = getProductById(id);

  if (!product) return <div className="container mx-auto px-4 py-8">Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="mb-4 text-emerald-600 hover:underline">← Back</button>
      <div className="grid md:grid-cols-2 gap-8">
        <img src={product.images[0]} alt={product.name} className="w-full rounded-lg" />
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl text-emerald-600 font-bold mb-4">${product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="mb-4">
            <span className="font-semibold">Category:</span> {product.category}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Vendor:</span> {product.vendorName}
          </div>
          <div className="mb-6">
            <span className="font-semibold">In Stock:</span> {product.stock} units
          </div>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg text-lg hover:bg-emerald-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;