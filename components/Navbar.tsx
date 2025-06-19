import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#003366', // Deep university blue
          padding: '10px 30px',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        {/* University Logo / Name */}
        <div
          style={{
            color: '#fff',
            fontWeight: '700',
            fontSize: '24px',
            letterSpacing: '1px',
          }}
        >
          652021073
        </div>

        {/* Navigation Links */}
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: '25px',
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <a
              href="#home"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px',
                padding: '8px 12px',
                borderRadius: '4px',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#002244')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px',
                padding: '8px 12px',
                borderRadius: '4px',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#002244')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px',
                padding: '8px 12px',
                borderRadius: '4px',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#002244')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
