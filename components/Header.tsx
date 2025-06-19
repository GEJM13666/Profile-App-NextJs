import React, { Component } from 'react';

interface HeaderProps {}

interface HeaderState {}

export class Header extends Component<HeaderProps, HeaderState> {
  render() {
    return (
      <div
        style={{
          maxWidth: '800px',
          margin: '20px auto',
          background: 'rgba(255,255,255,.95)',
          border: '1px solid rgba(255,255,255,.2)',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <div
          style={{
            background: '#1e3c72',
            padding: '50px 40px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontFamily: "'Times New Roman', serif",
              fontSize: '42px',
              color: '#ffffff',
              margin: '0 0 10px 0',
              fontWeight: 700,
            }}
          >
            Student Profile
          </h1>
          <div
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,.9)',
              fontWeight: 300,
            }}
          >
            Faculty of Science and Digital Innovation
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
