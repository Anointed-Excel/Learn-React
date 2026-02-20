import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useOrders } from '../contexts/OrderContext';
import { Link } from 'react-router-dom';

const Orders = () => {
  const { user } = useAuth();
  const { getUserOrders } = useOrders();
  const orders = getUserOrders(user.id);

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return '#f59e0b';
      case 'shipped': return '#3b82f6';
      case 'delivered': return '#10b981';
      default: return '#666';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'pending': return '⏳';
      case 'shipped': return '🚚';
      case 'delivered': return '✅';
      default: return '📦';
    }
  };

  if (orders.length === 0) {
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
          <div style={{fontSize: '6rem', marginBottom: '1rem'}}>📦</div>
          <h2 style={{fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#111'}}>
            No orders yet
          </h2>
          <p style={{fontSize: '1.125rem', color: '#666', marginBottom: '2rem'}}>
            Start shopping to see your orders here!
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
            Start Shopping
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
      <div className="container" style={{maxWidth: '1000px'}}>
        {/* Header */}
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <h1 style={{fontSize: '3.5rem', fontWeight: '900', color: '#111', marginBottom: '0.5rem'}}>
            My Orders
          </h1>
          <p style={{fontSize: '1.125rem', color: '#666'}}>
            Track and manage your {orders.length} {orders.length === 1 ? 'order' : 'orders'}
          </p>
        </div>

        {/* Orders List */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          {orders.map(order => (
            <div
              key={order.id}
              className="glass-card"
              style={{
                borderRadius: '2rem',
                padding: '2.5rem',
                transition: 'all 0.3s'
              }}
            >
              {/* Order Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '2rem',
                paddingBottom: '1.5rem',
                borderBottom: '2px solid rgba(5, 150, 105, 0.1)'
              }}>
                <div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem'}}>
                    <h3 style={{fontSize: '1.5rem', fontWeight: '800', color: '#111'}}>
                      Order #{order.id}
                    </h3>
                    <span style={{
                      background: `${getStatusColor(order.status)}15`,
                      color: getStatusColor(order.status),
                      padding: '0.5rem 1.25rem',
                      borderRadius: '2rem',
                      fontSize: '0.875rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      {getStatusIcon(order.status)} {order.status}
                    </span>
                  </div>
                  <p style={{color: '#666', fontSize: '1rem'}}>
                    Placed on {new Date(order.createdAt).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div style={{textAlign: 'right'}}>
                  <p style={{fontSize: '0.875rem', color: '#666', marginBottom: '0.25rem'}}>Total Amount</p>
                  <p style={{fontSize: '2.25rem', fontWeight: '900', color: '#059669'}}>
                    ${order.total.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Order Items */}
              <div style={{marginBottom: '1.5rem'}}>
                <h4 style={{fontSize: '1.125rem', fontWeight: '700', color: '#111', marginBottom: '1.25rem'}}>
                  Items ({order.items.length})
                </h4>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                  {order.items.map(item => (
                    <div key={item.id} style={{
                      display: 'flex',
                      gap: '1.5rem',
                      padding: '1.25rem',
                      background: 'rgba(5, 150, 105, 0.03)',
                      borderRadius: '1.25rem',
                      border: '1px solid rgba(5, 150, 105, 0.08)'
                    }}>
                      <img
                        src={item.images?.[0] || 'https://via.placeholder.com/100'}
                        alt={item.name}
                        style={{
                          width: '80px',
                          height: '80px',
                          objectFit: 'cover',
                          borderRadius: '0.875rem'
                        }}
                      />
                      <div style={{flex: 1}}>
                        <h5 style={{fontSize: '1.0625rem', fontWeight: '700', color: '#111', marginBottom: '0.5rem'}}>
                          {item.name}
                        </h5>
                        <p style={{color: '#666', fontSize: '0.9375rem'}}>
                          Quantity: {item.quantity} × ${item.price}
                        </p>
                      </div>
                      <div style={{textAlign: 'right'}}>
                        <p style={{fontSize: '1.375rem', fontWeight: '800', color: '#059669'}}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Info */}
              {order.shippingInfo && (
                <div style={{
                  background: 'rgba(16, 185, 129, 0.05)',
                  padding: '1.5rem',
                  borderRadius: '1.25rem',
                  border: '1px solid rgba(16, 185, 129, 0.1)'
                }}>
                  <h4 style={{fontSize: '1.0625rem', fontWeight: '700', color: '#111', marginBottom: '1rem'}}>
                    📍 Shipping Address
                  </h4>
                  <p style={{color: '#666', lineHeight: '1.6'}}>
                    {order.shippingInfo.address}<br/>
                    {order.shippingInfo.city}, {order.shippingInfo.zip}<br/>
                    Phone: {order.shippingInfo.phone}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;