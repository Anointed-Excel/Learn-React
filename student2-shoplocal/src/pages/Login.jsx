import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(email, password);
      toast.success('Login successful!');
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(40px)',
          borderRadius: '2rem',
          padding: '3rem',
          maxWidth: '480px',
          width: '100%',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          position: 'relative'
        }}
      >
        <h2
          style={{
            fontSize: '2.25rem',
            fontWeight: '800',
            marginBottom: '0.5rem',
            color: '#059669'
          }}
        >
          Welcome Back
        </h2>

        <p
          style={{
            color: '#666',
            marginBottom: '2.5rem',
            fontSize: '1.0625rem'
          }}
        >
          Log in to continue shopping
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '1.125rem 1.5rem',
              borderRadius: '1rem',
              border: '2px solid rgba(5, 150, 105, 0.15)',
              fontSize: '1rem',
              background: 'rgba(255, 255, 255, 0.9)'
            }}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '1.125rem 1.5rem',
              borderRadius: '1rem',
              border: '2px solid rgba(5, 150, 105, 0.15)',
              fontSize: '1rem',
              background: 'rgba(255, 255, 255, 0.9)'
            }}
            required
          />

          <button
            type="submit"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: 'white',
              padding: '1.25rem',
              borderRadius: '1rem',
              fontSize: '1.0625rem',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(5, 150, 105, 0.3)'
            }}
          >
            Log In
          </button>
        </form>

        <p style={{ marginTop: '2rem', textAlign: 'center' }}>
          Don’t have an account?{' '}
          <Link
            to="/signup"
            style={{ color: '#059669', fontWeight: '600', textDecoration: 'none' }}
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
