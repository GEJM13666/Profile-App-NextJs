'use client';
import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          backgroundColor: '#f9f9f9',
          padding: '40px 20px 20px',
          textAlign: 'center',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <div style={{ fontSize: '20px', color: '#2c3e50', marginBottom: '25px', fontWeight: 600 }}>
          Connect with me
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=100011315406232"
            target="_blank"
            rel="noreferrer noopener"
            style={{
              padding: '12px 30px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '16px',
              color: '#405DE6',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <span style={{ marginRight: '10px' }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-IN0bXXU1QoLiXjnQYNugN3Qo7UoirMJfC6QHn1g2mQ&s"
                alt="Facebook Icon"
                style={{ width: '32px', height: '32px' }}
              />
            </span>
            Facebook
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ug_mjeg/"
            target="_blank"
            rel="noreferrer noopener"
            style={{
              padding: '12px 30px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '16px',
              color: '#E1306C',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <span style={{ marginRight: '10px' }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc-GBnzJ7EffOVYeMiTET9SDvCgU7WGQqDyFCrXeGQmSxdnrhpBOM9AMGq&s=10"
                alt="Instagram Icon"
                style={{ width: '32px', height: '32px' }}
              />
            </span>
            Instagram
          </a>
        </div>

        {/* Copyright */}
        <div
          style={{
            marginTop: '30px',
            color: '#7f8c8d',
            fontSize: '14px',
            borderTop: '1px solid #ecf0f1',
            paddingTop: '20px',
          }}
        >
          © 2025 Student Profile • Faculty of Science and Digital Innovation
        </div>
      </footer>
    );
  }
}

export default Footer;
