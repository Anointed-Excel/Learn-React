import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext';
import { useCart } from '../contexts/CartContext';

const ProductsPage = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const categories = ['all', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'all' || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '3rem 0'
    }}>
      <div className="container">
        {/* Header */}
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '900',
            color: '#111',
            marginBottom: '1rem',
            letterSpacing: '-0.03em'
          }}>
            All Products
          </h1>
          <p style={{fontSize: '1.25rem', color: '#666'}}>
            Discover our complete collection of {products.length} premium items
          </p>
        </div>

        {/* Filters */}
        <div className="glass-card" style={{
          padding: '2rem',
          borderRadius: '1.5rem',
          marginBottom: '3rem',
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: '1',
              minWidth: '300px',
              padding: '1rem 1.5rem',
              borderRadius: '1rem',
              border: '2px solid rgba(5, 150, 105, 0.15)',
              fontSize: '1rem',
              background: 'rgba(255, 255, 255, 0.9)'
            }}
          />
          <div style={{display: 'flex', gap: '0.75rem', flexWrap: 'wrap'}}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                style={{
                  padding: '0.875rem 1.75rem',
                  borderRadius: '2rem',
                  border: 'none',
                  background: category === cat 
                    ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' 
                    : 'rgba(255, 255, 255, 0.7)',
                  color: category === cat ? 'white' : '#666',
                  fontWeight: '700',
                  fontSize: '0.9375rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  textTransform: 'capitalize',
                  boxShadow: category === cat ? '0 8px 20px rgba(5, 150, 105, 0.25)' : 'none'
                }}
              >
                {cat === 'all' ? `All (${products.length})` : `${cat} (${products.filter(p => p.category === cat).length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div style={{marginBottom: '2rem'}}>
          <p style={{fontSize: '1.125rem', color: '#666', fontWeight: '600'}}>
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {filteredProducts.map(product => (
            <div
              key={product.id}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                borderRadius: '1.75rem',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.4s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(5, 150, 105, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
              }}
            >
              <Link to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '125%',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
                }}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  
                  {/* Category Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(16, 185, 129, 0.95)',
                    color: 'white',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '2rem',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {product.category}
                  </div>

                  {/* Stock Badge */}
                  {product.stock < 20 && (
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(239, 68, 68, 0.95)',
                      color: 'white',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '2rem',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Low Stock
                    </div>
                  )}
                </div>
              </Link>
              
              <div style={{padding: '1.75rem'}}>
                <Link to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: '#111',
                    marginBottom: '0.5rem',
                    lineHeight: '1.4'
                  }}>
                    {product.name}
                  </h3>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: '#666',
                    marginBottom: '1rem',
                    lineHeight: '1.5',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {product.description}
                  </p>
                </Link>

                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem'}}>
                  <span style={{color: '#f59e0b', fontSize: '1rem'}}>⭐</span>
                  <span style={{fontWeight: '700', fontSize: '0.9375rem', color: '#111'}}>{product.rating}</span>
                  <span style={{color: '#999', fontSize: '0.875rem'}}>• {product.stock} left</span>
                </div>

                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem'}}>
                  <p style={{
                    fontSize: '1.75rem',
                    fontWeight: '800',
                    color: '#059669'
                  }}>
                    ${product.price}
                  </p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    style={{
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '0.875rem 1.5rem',
                      borderRadius: '0.875rem',
                      fontWeight: '700',
                      fontSize: '0.9375rem',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 15px rgba(5, 150, 105, 0.25)'
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div style={{textAlign: 'center', padding: '6rem 0'}}>
            <div style={{fontSize: '5rem', marginBottom: '1.5rem'}}>🔍</div>
            <h3 style={{fontSize: '2rem', fontWeight: '800', color: '#111', marginBottom: '1rem'}}>
              No products found
            </h3>
            <p style={{fontSize: '1.125rem', color: '#666', marginBottom: '2rem'}}>
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearch('');
                setCategory('all');
              }}
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '1rem',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.0625rem'
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;