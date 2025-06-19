'use client';
import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className="bg-gray-50 pt-10 px-5 text-center font-sans">
        <div className="text-xl text-[#2c3e50] mb-6 font-semibold">
          Connect with me
        </div>

        <div className="flex justify-center flex-wrap gap-6">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=100011315406232"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-[#405DE6] no-underline"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-IN0bXXU1QoLiXjnQYNugN3Qo7UoirMJfC6QHn1g2mQ&s"
              alt="Facebook Icon"
              className="w-8 h-8 mr-2"
            />
            Facebook
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ug_mjeg/"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-[#E1306C] no-underline"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc-GBnzJ7EffOVYeMiTET9SDvCgU7WGQqDyFCrXeGQmSxdnrhpBOM9AMGq&s=10"
              alt="Instagram Icon"
              className="w-8 h-8 mr-2"
            />
            Instagram
          </a>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-5 text-gray-500 text-sm">
          © 2025 Student Profile • Faculty of Science and Digital Innovation
        </div>
      </footer>
    );
  }
}

export default Footer;
