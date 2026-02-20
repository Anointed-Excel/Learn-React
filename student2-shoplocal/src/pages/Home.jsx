import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../contexts/ProductContext';
import { useCart } from '../contexts/CartContext';

const Home = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 8);
  const categories = ['Shoes', 'Bags', 'Accessories'];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          top: '-100px',
          right: '-50px',
          filter: 'blur(80px)'
        }}></div>
        
        <div className="container" style={{textAlign: 'center', position: 'relative', zIndex: 10}}>
          <h1 style={{
            fontSize: '4.5rem',
            fontWeight: '900',
            color: 'white',
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em'
          }}>
            Welcome Back! 🎉
          </h1>
          <p style={{
            fontSize: '1.5rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '2.5rem',
            maxWidth: '700px',
            margin: '0 auto 2.5rem'
          }}>
            Discover our latest collection of premium shoes, bags, and accessories
          </p>
          <Link 
            to="/products"
            style={{
              display: 'inline-block',
              background: 'white',
              color: '#059669',
              padding: '1.25rem 3.5rem',
              borderRadius: '1.125rem',
              fontSize: '1.125rem',
              fontWeight: '800',
              textDecoration: 'none',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)'
            }}
          >
            Shop All Products →
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className="container" style={{padding: '4rem 0'}}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          textAlign: 'center',
          marginBottom: '3rem',
          color: '#111'
        }}>
          Shop by Category
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {categories.map((category, i) => (
  <Link
    key={i}
    to={`/products?category=${category}`}
    style={{
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(20px)',
      padding: '3rem 2rem',
      borderRadius: '1.75rem',
      textAlign: 'center',
      textDecoration: 'none',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-10px)';
      e.currentTarget.style.boxShadow = '0 20px 60px rgba(5, 150, 105, 0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
    }}
  >
    {/* REMOVE EMOJI, ADD GRADIENT CIRCLE */}
    <div style={{
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem',
      fontSize: '2rem',
      color: 'white',
      fontWeight: '800',
      boxShadow: '0 10px 30px rgba(5, 150, 105, 0.3)'
    }}>
      {category.slice(0, 2).toUpperCase()}
    </div>
    <h3 style={{fontSize: '1.75rem', fontWeight: '800', color: '#111', marginBottom: '0.5rem'}}>
      {category}
    </h3>
    <p style={{color: '#666', fontSize: '1.0625rem'}}>
      {products.filter(p => p.category === category).length} products
    </p>
  </Link>
))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="container" style={{padding: '2rem 0 6rem'}}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          textAlign: 'center',
          marginBottom: '3rem',
          color: '#111'
        }}>
          Featured Products
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {featuredProducts.map(product => (
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
                </div>
              </Link>
              
              <div style={{padding: '1.75rem'}}>
                <Link to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: '#111',
                    marginBottom: '0.75rem'
                  }}>
                    {product.name}
                  </h3>
                </Link>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
                  <span style={{color: '#f59e0b'}}>⭐</span>
                  <span style={{fontWeight: '600', fontSize: '0.9375rem'}}>{product.rating}</span>
                  <span style={{color: '#999', fontSize: '0.875rem'}}>({product.stock} in stock)</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
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
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0.75rem',
                      fontWeight: '700',
                      fontSize: '0.9375rem',
                      cursor: 'pointer'
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{textAlign: 'center', marginTop: '4rem'}}>
          <Link
            to="/products"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: 'white',
              padding: '1.25rem 3rem',
              borderRadius: '1rem',
              fontSize: '1.0625rem',
              fontWeight: '800',
              textDecoration: 'none',
              boxShadow: '0 15px 40px rgba(5, 150, 105, 0.25)'
            }}
          >
            View All {products.length} Products →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;