import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const Landing = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', role: 'customer' });
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      login(loginData.email, loginData.password);
      toast.success('Welcome back!');
      navigate('/home');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    try {
      signup(signupData);
      toast.success('Account created!');
      navigate('/home');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f766e 0%, #059669 50%, #10b981 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        background: 'rgba(16, 185, 129, 0.3)',
        borderRadius: '50%',
        top: '-200px',
        left: '-150px',
        filter: 'blur(100px)',
        animation: 'float 25s infinite ease-in-out'
      }}></div>
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        background: 'rgba(5, 150, 105, 0.3)',
        borderRadius: '50%',
        bottom: '-150px',
        right: '-100px',
        filter: 'blur(100px)',
        animation: 'float 20s infinite ease-in-out reverse'
      }}></div>

      {/* Glass Navbar */}
    <nav style={{
  background: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(20px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
  padding: '1.5rem 0',
  position: 'sticky',
  top: 0,
  zIndex: 100
}}>
  <div className="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
    {/* Logo on LEFT */}
    <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
      <div style={{
        width: '45px',
        height: '45px',
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        boxShadow: '0 8px 20px rgba(5, 150, 105, 0.4)',
        transform: 'rotate(-5deg)'
      }}>
        🛍️
      </div>
      <div>
        <h1 style={{
          fontSize: '1.75rem',
          fontWeight: '800',
          color: 'white',
          letterSpacing: '-0.03em',
          lineHeight: '1',
          marginBottom: '0.15rem'
        }}>
          ShopLocal
        </h1>
        <p style={{
          fontSize: '0.625rem',
          color: 'rgba(255, 255, 255, 0.7)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontWeight: '600'
        }}>
          Premium Marketplace
        </p>
      </div>
    </div>
    
    {/* Buttons on RIGHT */}
    <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
      <button 
        onClick={() => setShowLogin(true)}
        style={{
          color: 'white',
          padding: '0.875rem 2rem',
          borderRadius: '0.875rem',
          fontWeight: '600',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1.5px solid rgba(255, 255, 255, 0.2)',
          cursor: 'pointer',
          transition: 'all 0.3s',
          fontSize: '0.9375rem'
        }}
      >
        Login
      </button>
      <button 
        onClick={() => setShowSignup(true)}
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          color: '#059669',
          padding: '0.875rem 2rem',
          borderRadius: '0.875rem',
          fontWeight: '700',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s',
          fontSize: '0.9375rem',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
        }}
      >
        Sign Up
      </button>
    </div>
  </div>
</nav>

      {/* Hero Content */}
      <div className="container" style={{
        paddingTop: '10rem',
        paddingBottom: '8rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          {/* Badge */}
          <div style={{
            display: 'inline-block',
            background: 'rgba(16, 185, 129, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            padding: '0.65rem 1.75rem',
            borderRadius: '2rem',
            color: 'rgba(255, 255, 255, 0.95)',
            fontSize: '0.875rem',
            fontWeight: '700',
            marginBottom: '2.5rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}>
            ⚡ Trusted by 10,000+ Shoppers
          </div>

          {/* Main Headline */}
          <h1 style={{
            fontSize: '5.5rem',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.85) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.1',
            marginBottom: '1.75rem',
            letterSpacing: '-0.04em'
          }}>
            Discover Premium<br/>Local Products
          </h1>

          {/* Subheadline */}
          <p style={{
            fontSize: '1.375rem',
            color: 'rgba(255, 255, 255, 0.85)',
            marginBottom: '3.5rem',
            lineHeight: '1.7',
            fontWeight: '400'
          }}>
            Shop curated shoes, bags, and accessories from trusted vendors.<br/>
            Quality guaranteed. Free shipping on orders over $100.
          </p>

          {/* CTA Buttons */}
          <div style={{display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <button 
              onClick={() => setShowSignup(true)}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                color: '#059669',
                padding: '1.375rem 3.5rem',
                borderRadius: '1.125rem',
                fontSize: '1.125rem',
                fontWeight: '800',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
                transition: 'all 0.3s'
              }}
            >
              Start Shopping →
            </button>
            <button 
              onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255, 255, 255, 0.25)',
                color: 'rgba(255, 255, 255, 0.95)',
                padding: '1.375rem 3.5rem',
                borderRadius: '1.125rem',
                fontSize: '1.125rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              Explore Features
            </button>
          </div>
        </div>

        {/* Feature Cards - Glassmorphism */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginTop: '10rem'
        }}>
          {[
            { icon: '🎨', title: 'Premium Quality', desc: 'Curated products from verified local vendors' },
            { icon: '⚡', title: 'Fast Delivery', desc: 'Same-day shipping available in select areas' },
            { icon: '🔒', title: 'Secure Checkout', desc: 'Encrypted payments with buyer protection' },
          ].map((feature, i) => (
            <div key={i} style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              borderRadius: '1.75rem',
              padding: '3rem 2.5rem',
              textAlign: 'center',
              transition: 'all 0.4s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            }}
            >
              <div style={{fontSize: '3.5rem', marginBottom: '1.25rem'}}>{feature.icon}</div>
              <h3 style={{
                fontSize: '1.375rem',
                fontWeight: '700',
                color: 'white',
                marginBottom: '0.75rem'
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.75)',
                fontSize: '1.0625rem',
                lineHeight: '1.6'
              }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* LOGIN MODAL */}
      {showLogin && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '2rem'
        }} onClick={() => setShowLogin(false)}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(40px)',
            borderRadius: '2rem',
            padding: '3rem',
            maxWidth: '480px',
            width: '100%',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            position: 'relative'
          }} onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowLogin(false)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(0, 0, 0, 0.05)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                fontSize: '1.25rem',
                color: '#666'
              }}
            >
              ×
            </button>
            
            <h2 style={{fontSize: '2.25rem', fontWeight: '800', marginBottom: '0.5rem', color: '#059669'}}>
              Welcome Back
            </h2>
            <p style={{color: '#666', marginBottom: '2.5rem', fontSize: '1.0625rem'}}>
              Log in to continue shopping
            </p>

            <form onSubmit={handleLogin} style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <input
                type="email"
                placeholder="Email address"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                style={{
                  padding: '1.125rem 1.5rem',
                  borderRadius: '1rem',
                  border: '2px solid rgba(5, 150, 105, 0.15)',
                  fontSize: '1rem',
                  background: 'rgba(255, 255, 255, 0.8)'
                }}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                style={{
                  padding: '1.125rem 1.5rem',
                  borderRadius: '1rem',
                  border: '2px solid rgba(5, 150, 105, 0.15)',
                  fontSize: '1rem',
                  background: 'rgba(255, 255, 255, 0.8)'
                }}
                required
              />
              <button type="submit" style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                padding: '1.25rem',
                borderRadius: '1rem',
                fontSize: '1.0625rem',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(5, 150, 105, 0.3)'
              }}>
                Log In
              </button>
            </form>

            <p style={{textAlign: 'center', marginTop: '2rem', color: '#666'}}>
              Don't have an account?{' '}
              <button 
                onClick={() => {setShowLogin(false); setShowSignup(true);}}
                style={{color: '#059669', fontWeight: '700', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline'}}
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      )}

      {/* SIGNUP MODAL */}
      {showSignup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '2rem'
        }} onClick={() => setShowSignup(false)}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(40px)',
            borderRadius: '2rem',
            padding: '3rem',
            maxWidth: '480px',
            width: '100%',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            position: 'relative'
          }} onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowSignup(false)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(0, 0, 0, 0.05)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                fontSize: '1.25rem',
                color: '#666'
              }}
            >
              ×
            </button>
            
            <h2 style={{fontSize: '2.25rem', fontWeight: '800', marginBottom: '0.5rem', color: '#059669'}}>
              Get Started
            </h2>
            <p style={{color: '#666', marginBottom: '2.5rem', fontSize: '1.0625rem'}}>
              Create your free account
            </p>

            <form onSubmit={handleSignup} style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <input
                type="text"
                placeholder="Full name"
                value={signupData.name}
                onChange={(e) => setSignupData({...signupData, name: e.target.value})}
                style={{
                  padding: '1.125rem 1.5rem',
                  borderRadius: '1rem',
                  border: '2px solid rgba(5, 150, 105, 0.15)',
                  fontSize: '1rem',
                  background: 'rgba(255, 255, 255, 0.8)'
                }}
                required
              />
              <input
                type="email"
                placeholder="Email address"
                value={signupData.email}
                onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                style={{
                  padding: '1.125rem 1.5rem',
                  borderRadius: '1rem',
                  border: '2px solid rgba(5, 150, 105, 0.15)',
                  fontSize: '1rem',
                  background: 'rgba(255, 255, 255, 0.8)'
                }}
                required
              />
              <input
                type="password"
                placeholder="Create password"
                value={signupData.password}
                onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                style={{
                  padding: '1.125rem 1.5rem',
                  borderRadius: '1rem',
                  border: '2px solid rgba(5, 150, 105, 0.15)',
                  fontSize: '1rem',
                  background: 'rgba(255, 255, 255, 0.8)'
                }}
                required
              />
              <select
                value={signupData.role}
                onChange={(e) => setSignupData({...signupData, role: e.target.value})}
                style={{
                  padding: '1.125rem 1.5rem',
                  borderRadius: '1rem',
                  border: '2px solid rgba(5, 150, 105, 0.15)',
                  fontSize: '1rem',
                  background: 'rgba(255, 255, 255, 0.8)'
                }}
              >
                <option value="customer">I'm a Customer</option>
                <option value="vendor">I'm a Vendor</option>
              </select>
              <button type="submit" style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                padding: '1.25rem',
                borderRadius: '1rem',
                fontSize: '1.0625rem',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(5, 150, 105, 0.3)'
              }}>
                Create Account
              </button>
            </form>

            <p style={{textAlign: 'center', marginTop: '2rem', color: '#666'}}>
              Already have an account?{' '}
              <button 
                onClick={() => {setShowSignup(false); setShowLogin(true);}}
                style={{color: '#059669', fontWeight: '700', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline'}}
              >
                Log in
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
      `}</style>
    </div>
  );
};

export default Landing;