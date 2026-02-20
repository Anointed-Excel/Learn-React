import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // ADD useNavigate
import { FiShoppingCart, FiUser, FiLogOut, FiHeart, FiGrid, FiHome, FiPackage, FiBarChart2 } from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { getItemCount } = useCart();
  const location = useLocation();
  const navigate = useNavigate(); // ADD THIS

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to landing page
  };

  return (
    <nav style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(5, 150, 105, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px',
        gap: '3rem'
      }}>
        {/* LEFT: Logo */}
        <Link to="/home" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.875rem',
          textDecoration: 'none',
          transition: 'transform 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{
            width: '48px',
            height: '48px',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            boxShadow: '0 8px 24px rgba(5, 150, 105, 0.35)',
            transform: 'rotate(-8deg)'
          }}>
            🛍️
          </div>
          <div>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em',
              lineHeight: '1'
            }}>
              ShopLocal
            </div>
            <div style={{
              fontSize: '0.625rem',
              color: '#666',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: '700',
              marginTop: '0.15rem'
            }}>
              Premium Marketplace
            </div>
          </div>
        </Link>

        {/* CENTER: Navigation Links */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          justifyContent: 'center'
        }}>
          <Link
            to="/home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.75rem 1.25rem',
              borderRadius: '0.875rem',
              textDecoration: 'none',
              color: isActive('/home') ? '#059669' : '#666',
              background: isActive('/home') ? 'rgba(5, 150, 105, 0.08)' : 'transparent',
              fontWeight: isActive('/home') ? '700' : '600',
              fontSize: '0.9375rem',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              if (!isActive('/home')) {
                e.currentTarget.style.background = 'rgba(5, 150, 105, 0.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive('/home')) {
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            <FiHome size={18} />
            <span>Home</span>
          </Link>

          <Link
            to="/products"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.75rem 1.25rem',
              borderRadius: '0.875rem',
              textDecoration: 'none',
              color: isActive('/products') ? '#059669' : '#666',
              background: isActive('/products') ? 'rgba(5, 150, 105, 0.08)' : 'transparent',
              fontWeight: isActive('/products') ? '700' : '600',
              fontSize: '0.9375rem',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              if (!isActive('/products')) {
                e.currentTarget.style.background = 'rgba(5, 150, 105, 0.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive('/products')) {
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            <FiGrid size={18} />
            <span>Products</span>
          </Link>

          {user?.role === 'vendor' && (
            <Link
              to="/dashboard"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.75rem 1.25rem',
                borderRadius: '0.875rem',
                textDecoration: 'none',
                color: isActive('/dashboard') ? '#059669' : '#666',
                background: isActive('/dashboard') ? 'rgba(5, 150, 105, 0.08)' : 'transparent',
                fontWeight: isActive('/dashboard') ? '700' : '600',
                fontSize: '0.9375rem',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (!isActive('/dashboard')) {
                  e.currentTarget.style.background = 'rgba(5, 150, 105, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive('/dashboard')) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              <FiBarChart2 size={18} />
              <span>Dashboard</span>
            </Link>
          )}

          <Link
            to="/orders"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.75rem 1.25rem',
              borderRadius: '0.875rem',
              textDecoration: 'none',
              color: isActive('/orders') ? '#059669' : '#666',
              background: isActive('/orders') ? 'rgba(5, 150, 105, 0.08)' : 'transparent',
              fontWeight: isActive('/orders') ? '700' : '600',
              fontSize: '0.9375rem',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              if (!isActive('/orders')) {
                e.currentTarget.style.background = 'rgba(5, 150, 105, 0.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive('/orders')) {
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            <FiPackage size={18} />
            <span>Orders</span>
          </Link>
        </div>

        {/* RIGHT: User Actions */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          {/* Wishlist */}
          <Link
            to="/wishlist"
            style={{
              position: 'relative',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '0.875rem',
              background: 'rgba(5, 150, 105, 0.05)',
              color: '#059669',
              textDecoration: 'none',
              transition: 'all 0.2s',
              border: '1px solid rgba(5, 150, 105, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(5, 150, 105, 0.1)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(5, 150, 105, 0.05)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <FiHeart size={20} />
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            style={{
              position: 'relative',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '0.875rem',
              background: 'rgba(5, 150, 105, 0.05)',
              color: '#059669',
              textDecoration: 'none',
              transition: 'all 0.2s',
              border: '1px solid rgba(5, 150, 105, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(5, 150, 105, 0.1)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(5, 150, 105, 0.05)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <FiShoppingCart size={20} />
            {getItemCount() > 0 && (
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                color: 'white',
                fontSize: '0.75rem',
                fontWeight: '800',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid white',
                boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)'
              }}>
                {getItemCount()}
              </span>
            )}
          </Link>

          {/* Divider */}
          <div style={{
            width: '1px',
            height: '32px',
            background: 'rgba(5, 150, 105, 0.15)',
            margin: '0 0.5rem'
          }}></div>

          {/* Profile */}
          <Link
            to="/profile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.625rem 1rem',
              borderRadius: '0.875rem',
              background: 'rgba(5, 150, 105, 0.05)',
              textDecoration: 'none',
              transition: 'all 0.2s',
              border: '1px solid rgba(5, 150, 105, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(5, 150, 105, 0.1)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(5, 150, 105, 0.05)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '800',
              fontSize: '0.875rem',
              boxShadow: '0 4px 12px rgba(5, 150, 105, 0.3)'
            }}>
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div style={{lineHeight: '1.3'}}>
              <div style={{fontSize: '0.875rem', fontWeight: '700', color: '#111'}}>
                {user?.name}
              </div>
              <div style={{fontSize: '0.75rem', color: '#666', textTransform: 'capitalize'}}>
                {user?.role}
              </div>
            </div>
          </Link>

          {/* Logout - UPDATED */}
          <button
            onClick={handleLogout}
            title="Logout"
            style={{
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '0.875rem',
              background: 'rgba(239, 68, 68, 0.05)',
              color: '#ef4444',
              border: '1px solid rgba(239, 68, 68, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.05)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <FiLogOut size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;