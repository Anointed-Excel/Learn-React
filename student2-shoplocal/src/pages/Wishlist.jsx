import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../contexts/CartContext';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const saved = localStorage.getItem('shoplocal_wishlist');
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter(item => item.id !== id);
    setWishlist(updated);
    localStorage.setItem('shoplocal_wishlist', JSON.stringify(updated));
  };

  const moveToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  if (wishlist.length === 0) {
    return (
      <div style={{
        minHeight: 'calc(100vh - 4rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        padding: '3rem'
      }}>
        <div style={{textAlign: 'center'}}>
          <div style={{fontSize: '6rem', marginBottom: '1rem'}}>❤️</div>
          <h2 style={{fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#111'}}>
            Your wishlist is empty
          </h2>
          <p style={{fontSize: '1.125rem', color: '#666', marginBottom: '2rem'}}>
            Save your favorite products for later!
          </p>
          <Link 
            to="/products"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '1rem',
              fontWeight: '700',
              textDecoration: 'none',
              fontSize: '1.0625rem'
            }}
          >
            Discover Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: 'calc(100vh - 4rem)',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '3rem 0'
    }}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <h1 style={{fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem', color: '#111'}}>
            My Wishlist ❤️
          </h1>
          <p style={{fontSize: '1.125rem', color: '#666'}}>
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {wishlist.map(item => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                borderRadius: '1.75rem',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              {/* Remove Button */}
              <button
                onClick={() => removeFromWishlist(item.id)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  zIndex: 10,
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: 'none',
                  background: 'rgba(239, 68, 68, 0.95)',
                  color: 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.125rem',
                  boxShadow: '0 4px 15px rgba(239, 68, 68, 0.3)'
                }}
              >
                <FiTrash2 />
              </button>

              <Link to={`/product/${item.id}`} style={{textDecoration: 'none'}}>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '125%',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
                }}>
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </Link>

              <div style={{padding: '1.75rem'}}>
                <p style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  color: '#059669',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem'
                }}>
                  {item.category}
                </p>
                <Link to={`/product/${item.id}`} style={{textDecoration: 'none'}}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#111',
                    marginBottom: '0.75rem'
                  }}>
                    {item.name}
                  </h3>
                </Link>
                <p style={{
                  fontSize: '1.75rem',
                  fontWeight: '800',
                  color: '#059669',
                  marginBottom: '1.25rem'
                }}>
                  ${item.price}
                </p>

                <button
                  onClick={() => moveToCart(item)}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '1rem',
                    borderRadius: '0.875rem',
                    fontWeight: '700',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <FiShoppingCart /> Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;