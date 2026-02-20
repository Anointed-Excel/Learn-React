import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Profile = () => {
  const { user, updateProfile, logout } = useAuth();
  const [formData, setFormData] = useState({ name: user.name, email: user.email });
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setIsEditing(false);
    toast.success('Profile updated!');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
        padding: '4rem 1.5rem',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div style={{ width: '100%', maxWidth: '850px' }}>

        {/* MAIN CARD */}
        <div
          style={{
            background: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(25px)',
            borderRadius: '2rem',
            padding: '3rem',
            border: '1px solid rgba(16,185,129,0.2)',
            boxShadow: '0 25px 60px rgba(16,185,129,0.15)',
            marginBottom: '2rem'
          }}
        >
          {/* Avatar */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div
              style={{
                width: '110px',
                height: '110px',
                margin: '0 auto 1.5rem',
                borderRadius: '50%',
                background: 'linear-gradient(135deg,#10b981,#059669)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: 'white',
                boxShadow: '0 15px 35px rgba(16,185,129,0.4)'
              }}
            >
              {user.role === 'vendor' ? '🏪' : '👤'}
            </div>

            <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#065f46' }}>
              {user.name}
            </h1>

            <p style={{ color: '#047857', marginTop: '0.5rem' }}>
              {user.email}
            </p>

            <div
              style={{
                marginTop: '1rem',
                display: 'inline-block',
                padding: '0.5rem 1.2rem',
                borderRadius: '2rem',
                fontSize: '0.8rem',
                fontWeight: '700',
                background: 'rgba(16,185,129,0.15)',
                color: '#059669',
                border: '1px solid rgba(16,185,129,0.3)',
                textTransform: 'uppercase'
              }}
            >
              {user.role}
            </div>
          </div>

          {/* EDIT SECTION */}
          {isEditing ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full Name"
                style={inputStyle}
                required
              />

              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email"
                style={inputStyle}
                required
              />

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button type="submit" style={primaryBtn}>
                  Save Changes
                </button>

                <button type="button" onClick={() => setIsEditing(false)} style={secondaryBtn}>
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <button onClick={() => setIsEditing(true)} style={primaryBtn}>
                ✏️ Edit Profile
              </button>
            </div>
          )}
        </div>

        {/* ACTION CARD */}
        <div
          style={{
            background: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(25px)',
            borderRadius: '2rem',
            padding: '2rem',
            border: '1px solid rgba(16,185,129,0.2)',
            boxShadow: '0 20px 50px rgba(16,185,129,0.1)'
          }}
        >
          <Link to="/" style={linkBtn}>
            ← Back to Home
          </Link>

          <button onClick={logout} style={dangerBtn}>
            🚪 Log Out
          </button>
        </div>

      </div>
    </div>
  );
};

/* ----------- STYLES ----------- */

const inputStyle = {
  padding: '1rem',
  borderRadius: '1rem',
  border: '1px solid rgba(16,185,129,0.3)',
  background: 'white',
  fontSize: '1rem'
};

const primaryBtn = {
  flex: 1,
  padding: '1rem',
  borderRadius: '1rem',
  background: 'linear-gradient(135deg,#10b981,#059669)',
  color: 'white',
  fontWeight: '700',
  border: 'none',
  cursor: 'pointer'
};

const secondaryBtn = {
  flex: 1,
  padding: '1rem',
  borderRadius: '1rem',
  background: '#f3f4f6',
  color: '#065f46',
  border: '1px solid rgba(16,185,129,0.3)',
  cursor: 'pointer'
};

const linkBtn = {
  display: 'block',
  textAlign: 'center',
  padding: '1rem',
  marginBottom: '1rem',
  borderRadius: '1rem',
  background: 'rgba(16,185,129,0.1)',
  color: '#059669',
  textDecoration: 'none',
  fontWeight: '600',
  border: '1px solid rgba(16,185,129,0.3)'
};

const dangerBtn = {
  width: '100%',
  padding: '1rem',
  borderRadius: '1rem',
  background: 'rgba(239,68,68,0.1)',
  color: '#ef4444',
  border: '1px solid rgba(239,68,68,0.3)',
  fontWeight: '700',
  cursor: 'pointer'
};

export default Profile;
