import React, { useState, useEffect } from 'react';
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function ChaiLanding() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="chai-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@300;400;500&family=Cinzel:wght@400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
        }

        .chai-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a0f0a 0%, #2d1810 50%, #1a0f0a 100%);
          position: relative;
          overflow: hidden;
          font-family: 'Cormorant Garamond', serif;
        }

        /* Animated background elements */
        .chai-container::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(218, 165, 32, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(139, 69, 19, 0.06) 0%, transparent 50%);
          animation: floatBackground 30s ease-in-out infinite;
        }

        @keyframes floatBackground {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(5%, 5%) rotate(5deg); }
        }

        /* Decorative patterns */
        .pattern-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(218, 165, 32, 0.015) 2px, rgba(218, 165, 32, 0.015) 4px),
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(218, 165, 32, 0.015) 2px, rgba(218, 165, 32, 0.015) 4px);
          pointer-events: none;
        }

        /* Main content wrapper */
        .content-wrapper {
          position: relative;
          z-index: 2;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        /* Ornamental borders */
        .ornamental-border {
          position: absolute;
          pointer-events: none;
        }

        .corner-top-left {
          top: 2rem;
          left: 2rem;
          width: 120px;
          height: 120px;
          border-top: 2px solid rgba(218, 165, 32, 0.3);
          border-left: 2px solid rgba(218, 165, 32, 0.3);
          animation: fadeInCorner 1s ease-out;
        }

        .corner-bottom-right {
          bottom: 2rem;
          right: 2rem;
          width: 120px;
          height: 120px;
          border-bottom: 2px solid rgba(218, 165, 32, 0.3);
          border-right: 2px solid rgba(218, 165, 32, 0.3);
          animation: fadeInCorner 1s ease-out 0.2s backwards;
        }

        @keyframes fadeInCorner {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Logo section */
        .logo-container {
          margin-bottom: 3rem;
          animation: fadeInDown 1s ease-out;
        }

        .logo-placeholder {
          width: 180px;
          height: 180px;
          background: radial-gradient(circle, rgba(218, 165, 32, 0.15), transparent);
          border: 3px solid #DAA520;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 
            0 0 30px rgba(218, 165, 32, 0.3),
            inset 0 0 30px rgba(218, 165, 32, 0.1);
          transition: transform 0.6s ease;
        }

        .logo-placeholder:hover {
          transform: scale(1.05) rotate(5deg);
        }

        .logo-text {
          font-family: 'Cinzel', serif;
          font-size: 3rem;
          color: #DAA520;
          font-weight: 600;
          text-shadow: 0 0 20px rgba(218, 165, 32, 0.5);
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Main content */
        .main-content {
          text-align: center;
          max-width: 700px;
          animation: fadeInUp 1s ease-out 0.3s backwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tagline {
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #DAA520 0%, #FFD700 50%, #DAA520 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.5rem;
          letter-spacing: 2px;
          line-height: 1.2;
          text-shadow: 0 4px 20px rgba(218, 165, 32, 0.3);
          position: relative;
        }

        .tagline::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #DAA520, transparent);
        }

        .description {
          font-size: 1.25rem;
          color: #E8D5B7;
          line-height: 1.8;
          margin-bottom: 1rem;
          font-weight: 300;
          letter-spacing: 0.5px;
        }

        .royal-subtitle {
          font-size: 1rem;
          color: #C9A961;
          font-style: italic;
          margin-bottom: 3rem;
          opacity: 0.9;
        }

        /* Launching Soon Badge */
        .launching-badge {
          display: inline-block;
          margin-bottom: 3rem;
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, rgba(218, 165, 32, 0.2), rgba(218, 165, 32, 0.1));
          border: 2px solid #DAA520;
          border-radius: 50px;
          position: relative;
          overflow: hidden;
          animation: pulse 3s ease-in-out infinite;
        }

        .launching-badge::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 215, 0, 0.1), transparent);
          animation: shine 3s linear infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(218, 165, 32, 0.3); }
          50% { box-shadow: 0 0 40px rgba(218, 165, 32, 0.6); }
        }

        .launching-text {
          font-family: 'Cinzel', serif;
          font-size: 1.1rem;
          color: #FFD700;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
        }

        /* Email signup form */
        .email-signup {
          margin-bottom: 3rem;
          animation: fadeInUp 1s ease-out 0.6s backwards;
        }

        .email-form {
          display: flex;
          gap: 1rem;
          max-width: 500px;
          margin: 0 auto;
          flex-wrap: wrap;
          justify-content: center;
        }

        .email-input {
          flex: 1;
          min-width: 250px;
          padding: 1rem 1.5rem;
          background: rgba(26, 15, 10, 0.6);
          border: 2px solid rgba(218, 165, 32, 0.4);
          border-radius: 50px;
          color: #E8D5B7;
          font-size: 1rem;
          font-family: 'Cormorant Garamond', serif;
          transition: all 0.3s ease;
          outline: none;
        }

        .email-input::placeholder {
          color: rgba(232, 213, 183, 0.5);
        }

        .email-input:focus {
          border-color: #DAA520;
          background: rgba(26, 15, 10, 0.8);
          box-shadow: 0 0 20px rgba(218, 165, 32, 0.2);
        }

        .submit-button {
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, #DAA520, #B8860B);
          border: none;
          border-radius: 50px;
          color: #1a0f0a;
          font-family: 'Cinzel', serif;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(218, 165, 32, 0.3);
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(218, 165, 32, 0.5);
          background: linear-gradient(135deg, #FFD700, #DAA520);
        }

        .submit-button:active {
          transform: translateY(0);
        }

        .success-message {
          margin-top: 1rem;
          color: #DAA520;
          font-size: 1rem;
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Social icons */
        .social-links {
          display: flex;
          gap: 2rem;
          justify-content: center;
          animation: fadeInUp 1s ease-out 0.9s backwards;
        }

        .social-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(218, 165, 32, 0.1);
          border: 2px solid rgba(218, 165, 32, 0.3);
          border-radius: 50%;
          color: #DAA520;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-icon:hover {
          background: rgba(218, 165, 32, 0.2);
          border-color: #DAA520;
          transform: translateY(-5px) rotate(5deg);
          box-shadow: 0 10px 20px rgba(218, 165, 32, 0.3);
        }

        /* Floating chai leaves decoration */
        .chai-leaf {
          position: absolute;
          opacity: 0.15;
          animation: floatLeaf 20s ease-in-out infinite;
          pointer-events: none;
        }

        .chai-leaf:nth-child(1) {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
          font-size: 3rem;
        }

        .chai-leaf:nth-child(2) {
          top: 70%;
          right: 15%;
          animation-delay: 5s;
          font-size: 2.5rem;
        }

        .chai-leaf:nth-child(3) {
          bottom: 20%;
          left: 20%;
          animation-delay: 10s;
          font-size: 2rem;
        }

        @keyframes floatLeaf {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(10deg);
          }
          50% {
            transform: translateY(0) rotate(-5deg);
          }
          75% {
            transform: translateY(20px) rotate(5deg);
          }
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .corner-top-left,
          .corner-bottom-right {
            width: 80px;
            height: 80px;
          }

          .corner-top-left {
            top: 1rem;
            left: 1rem;
          }

          .corner-bottom-right {
            bottom: 1rem;
            right: 1rem;
          }

          .logo-placeholder {
            width: 140px;
            height: 140px;
          }

          .logo-text {
            font-size: 2.2rem;
          }

          .tagline {
            font-size: 2.2rem;
            letter-spacing: 1px;
          }

          .description {
            font-size: 1.1rem;
          }

          .launching-badge {
            padding: 0.8rem 2rem;
          }

          .launching-text {
            font-size: 0.9rem;
            letter-spacing: 2px;
          }

          .email-form {
            flex-direction: column;
            gap: 0.8rem;
          }

          .email-input {
            min-width: 100%;
          }

          .submit-button {
            width: 100%;
          }

          .social-icon {
            width: 45px;
            height: 45px;
          }

          .chai-leaf {
            font-size: 2rem !important;
          }
        }

        @media (max-width: 480px) {
          .content-wrapper {
            padding: 1.5rem;
          }

          .tagline {
            font-size: 1.8rem;
          }

          .description {
            font-size: 1rem;
          }

          .royal-subtitle {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="pattern-overlay"></div>
      
      {/* Decorative corners */}
      <div className="ornamental-border corner-top-left"></div>
      <div className="ornamental-border corner-bottom-right"></div>

      {/* Floating decorative elements */}
      <div className="chai-leaf" style={{ color: '#DAA520' }}>🍃</div>
      <div className="chai-leaf" style={{ color: '#C9A961' }}>🍃</div>
      <div className="chai-leaf" style={{ color: '#B8860B' }}>🍃</div>

      <div className="content-wrapper">
        {/* Logo */}
        <div className="logo-container">
          <div className="logo-placeholder">
            <div className="logo-text">☕</div>
          </div>
        </div>

        {/* Main content */}
        <div className="main-content">
          <h1 className="tagline">Brew the Royal Tradition</h1>
          
          <p className="description">
            Experience the authentic taste of premium instant chai tea, crafted with the timeless recipes of royal Indian households. A symphony of aromatic spices meets unparalleled convenience.
          </p>
          
          <p className="royal-subtitle">
            Where heritage meets every cup
          </p>

          {/* Launching Soon Badge */}
          <div className="launching-badge">
            <span className="launching-text">Launching Soon</span>
          </div>

          {/* Email Signup */}
          <div className="email-signup">
            <form className="email-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="email-input"
                placeholder="Enter your royal email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="submit-button">
                Notify Me
              </button>
            </form>
            {submitted && (
              <div className="success-message">
                ✨ Thank you! You'll be the first to know when we launch.
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Instagram">
              <Instagram size={22} />
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              <Facebook size={22} />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}