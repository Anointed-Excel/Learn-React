import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
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
          <div style={{fontSize: '6rem', marginBottom: '1rem'}}>🛒</div>
          <h2 style={{fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#111'}}>
            Your cart is empty
          </h2>
          <p style={{fontSize: '1.125rem', color: '#666', marginBottom: '2rem'}}>
            Add some amazing products to get started!
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
            Continue Shopping
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
        <h1 style={{fontSize: '3rem', fontWeight: '800', marginBottom: '3rem', color: '#111'}}>
          Shopping Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
        </h1>
        
        <div className="grid" style={{gridTemplateColumns: '2fr 1fr', gap: '2rem'}}>
          {/* Cart Items */}
          <div>
            {cartItems.map(item => (
              <div key={item.id} className="glass-card" style={{
                marginBottom: '1.5rem',
                padding: '2rem',
                borderRadius: '1.5rem',
                display: 'flex',
                gap: '2rem',
                alignItems: 'center'
              }}>
                <img 
                  src={item.images[0]} 
                  alt={item.name}
                  style={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'cover',
                    borderRadius: '1rem'
                  }}
                />
                <div style={{flex: 1}}>
                  <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#111'}}>
                    {item.name}
                  </h3>
                  <p style={{color: '#666', marginBottom: '0.75rem'}}>{item.category}</p>
                  <p style={{fontSize: '1.5rem', fontWeight: '800', color: '#059669'}}>
                    ${item.price}
                  </p>
                </div>
                
                {/* Quantity Controls */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: 'rgba(5, 150, 105, 0.05)',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.75rem'
                }}>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '0.5rem',
                      border: 'none',
                      background: item.quantity <= 1 ? '#e5e7eb' : '#059669',
                      color: 'white',
                      cursor: item.quantity <= 1 ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <FiMinus />
                  </button>
                  <span style={{fontSize: '1.125rem', fontWeight: '700', minWidth: '30px', textAlign: 'center'}}>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '0.5rem',
                      border: 'none',
                      background: '#059669',
                      color: 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <FiPlus />
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '0.75rem',
                    border: 'none',
                    background: 'rgba(239, 68, 68, 0.1)',
                    color: '#ef4444',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem'
                  }}
                >
                  <FiTrash2 />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <div className="glass-card" style={{
              padding: '2.5rem',
              borderRadius: '1.5rem',
              position: 'sticky',
              top: '6rem'
            }}>
              <h3 style={{fontSize: '1.75rem', fontWeight: '800', marginBottom: '2rem', color: '#111'}}>
                Order Summary
              </h3>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.0625rem'}}>
                  <span style={{color: '#666'}}>Subtotal</span>
                  <span style={{fontWeight: '600'}}>${getTotal().toFixed(2)}</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.0625rem'}}>
                  <span style={{color: '#666'}}>Shipping</span>
                  <span style={{fontWeight: '600', color: '#10b981'}}>Free</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.0625rem'}}>
                  <span style={{color: '#666'}}>Tax (10%)</span>
                  <span style={{fontWeight: '600'}}>${(getTotal() * 0.1).toFixed(2)}</span>
                </div>
                
                <div style={{
                  borderTop: '2px solid rgba(5, 150, 105, 0.1)',
                  paddingTop: '1.25rem',
                  marginTop: '0.5rem'
                }}>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span style={{fontSize: '1.25rem', fontWeight: '800', color: '#111'}}>Total</span>
                    <span style={{fontSize: '1.75rem', fontWeight: '800', color: '#059669'}}>
                      ${(getTotal() * 1.1).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: 'white',
                  padding: '1.25rem',
                  borderRadius: '1rem',
                  fontSize: '1.0625rem',
                  fontWeight: '800',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(5, 150, 105, 0.3)',
                  marginBottom: '1rem'
                }}
              >
                Proceed to Checkout →
              </button>

              <Link
                to="/products"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  color: '#059669',
                  fontWeight: '700',
                  textDecoration: 'none',
                  padding: '0.75rem'
                }}
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;