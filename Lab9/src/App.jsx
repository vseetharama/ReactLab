import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

function App() {
  const linkStyle = ({ isActive }) => ({
    margin: '10px',
    textDecoration: 'none',
    color: isActive ? 'blue' : 'black',
    fontWeight: isActive ? 'bold' : 'normal'
  });

  return (
    <div>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          padding: '10px',
          backgroundColor: '#f0f0f0'
        }}
      >
        <NavLink to="/" style={linkStyle} end>
          Home
        </NavLink>
        <NavLink to="/about" style={linkStyle}>
          About
        </NavLink>
        <NavLink to="/contact" style={linkStyle}>
          Contact
        </NavLink>
      </nav>

      <div style={{ padding: '20px', textAlign: 'center' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;