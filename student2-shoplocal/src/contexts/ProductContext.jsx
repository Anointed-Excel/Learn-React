import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('shoplocal_products');
    if (saved) {
      setProducts(JSON.parse(saved));
    } else {
      // STUNNING DEMO PRODUCTS
   const demoProducts = [
  // SHOES
  {
    id: '1',
    name: 'Nike Air Max 270',
    description: 'Premium running shoes with Air cushioning technology for ultimate comfort',
    price: 159.99,
    category: 'Shoes',
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800'],
    vendorId: 'demo-vendor',
    vendorName: 'Sneaker Palace',
    stock: 45,
    rating: 4.8
  },
  {
    id: '2',
    name: 'Adidas Ultraboost 22',
    description: 'Energy-returning running shoes with responsive cushioning',
    price: 189.99,
    category: 'Shoes',
    images: ['https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800'],
    vendorId: 'demo-vendor',
    vendorName: 'Sneaker Palace',
    stock: 32,
    rating: 4.9
  },
  {
    id: '3',
    name: 'Classic White Sneakers',
    description: 'Minimalist white sneakers perfect for any outfit',
    price: 79.99,
    category: 'Shoes',
    images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800'],
    vendorId: 'demo-vendor',
    vendorName: 'Urban Footwear',
    stock: 67,
    rating: 4.5
  },
  {
    id: '4',
    name: 'Jordan Retro High',
    description: 'Iconic basketball shoes with legendary style and comfort',
    price: 219.99,
    category: 'Shoes',
    images: ['https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800'],
    vendorId: 'demo-vendor',
    vendorName: 'Sneaker Palace',
    stock: 23,
    rating: 5.0
  },
  {
    id: '5',
    name: 'Running Performance Pro',
    description: 'Professional running shoes with advanced grip technology',
    price: 139.99,
    category: 'Shoes',
    images: ['https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800'],
    vendorId: 'demo-vendor',
    vendorName: 'Sport Elite',
    stock: 41,
    rating: 4.7
  },
  
  // BAGS
  {
    id: '6',
    name: 'Leather Crossbody Bag',
    description: 'Genuine leather crossbody with adjustable strap',
    price: 89.99,
    category: 'Bags',
    images: ['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800'],
    vendorId: 'demo-vendor',
    vendorName: 'Luxury Bags Co',
    stock: 28,
    rating: 4.9
  },
  {
    id: '7',
    name: 'Designer Tote Bag',
    description: 'Spacious designer tote perfect for everyday use',
    price: 129.99,
    category: 'Bags',
    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800'],
    vendorId: 'demo-vendor',
    vendorName: 'Luxury Bags Co',
    stock: 18,
    rating: 4.6
  },
  {
    id: '8',
    name: 'Vintage Backpack',
    description: 'Stylish vintage backpack with laptop compartment',
    price: 99.99,
    category: 'Bags',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800'],
    vendorId: 'demo-vendor',
    vendorName: 'Travel Essentials',
    stock: 41,
    rating: 4.8
  },
  {
    id: '9',
    name: 'Mini Shoulder Bag',
    description: 'Compact shoulder bag perfect for nights out',
    price: 69.99,
    category: 'Bags',
    images: ['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800'],
    vendorId: 'demo-vendor',
    vendorName: 'Luxury Bags Co',
    stock: 55,
    rating: 4.4
  },
  {
    id: '10',
    name: 'Business Briefcase',
    description: 'Professional leather briefcase for work',
    price: 179.99,
    category: 'Bags',
    images: ['https://images.unsplash.com/photo-1590739225279-e381c0bc8e4f?w=800'],
    vendorId: 'demo-vendor',
    vendorName: 'Executive Style',
    stock: 15,
    rating: 4.9
  },
  
  // ACCESSORIES
  {
    id: '11',
    name: 'Premium Sunglasses',
    description: 'UV protection sunglasses with polarized lenses',
    price: 149.99,
    category: 'Accessories',
    images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800'],
    vendorId: 'demo-vendor',
    vendorName: 'Style Accessories',
    stock: 62,
    rating: 4.7
  },
  {
    id: '12',
    name: 'Leather Watch',
    description: 'Classic leather strap watch with quartz movement',
    price: 199.99,
    category: 'Accessories',
    images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800'],
    vendorId: 'demo-vendor',
    vendorName: 'Timepiece Luxury',
    stock: 33,
    rating: 5.0
  },
  {
    id: '13',
    name: 'Designer Belt',
    description: 'Premium leather belt with signature buckle',
    price: 79.99,
    category: 'Accessories',
    images: ['https://images.unsplash.com/photo-1624222247344-550fb60583bb?w=800'],
    vendorId: 'demo-vendor',
    vendorName: 'Fashion Forward',
    stock: 48,
    rating: 4.6
  },
  {
    id: '14',
    name: 'Luxury Wallet',
    description: 'Genuine leather bifold wallet with RFID protection',
    price: 59.99,
    category: 'Accessories',
    images: ['https://images.unsplash.com/photo-1627123424574-724758594e93?w=800'],
    vendorId: 'demo-vendor',
    vendorName: 'Leather Goods',
    stock: 71,
    rating: 4.8
  },
  {
    id: '15',
    name: 'Silk Scarf',
    description: 'Pure silk scarf with elegant pattern design',
    price: 89.99,
    category: 'Accessories',
    images: ['https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800'],
    vendorId: 'demo-vendor',
    vendorName: 'Silk Boutique',
    stock: 37,
    rating: 4.9
  },
  {
    id: '16',
    name: 'Baseball Cap',
    description: 'Classic cotton baseball cap with adjustable strap',
    price: 34.99,
    category: 'Accessories',
    images: ['https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800'],
    vendorId: 'demo-vendor',
    vendorName: 'Street Style',
    stock: 89,
    rating: 4.3
  }
];

      setProducts(demoProducts);
      localStorage.setItem('shoplocal_products', JSON.stringify(demoProducts));
    }
  }, []);

  const addProduct = (product) => {
    const newProduct = {
      id: Date.now().toString(),
      ...product,
      createdAt: new Date().toISOString(),
      rating: 0,
      reviews: []
    };
    const updated = [...products, newProduct];
    setProducts(updated);
    localStorage.setItem('shoplocal_products', JSON.stringify(updated));
    return newProduct;
  };

  const updateProduct = (id, updates) => {
    const updated = products.map(p => p.id === id ? { ...p, ...updates } : p);
    setProducts(updated);
    localStorage.setItem('shoplocal_products', JSON.stringify(updated));
  };

  const deleteProduct = (id) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    localStorage.setItem('shoplocal_products', JSON.stringify(updated));
  };

  const getProductById = (id) => products.find(p => p.id === id);

  const getProductsByVendor = (vendorId) => products.filter(p => p.vendorId === vendorId);

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, getProductById, getProductsByVendor }}>
      {children}
    </ProductContext.Provider>
  );
};