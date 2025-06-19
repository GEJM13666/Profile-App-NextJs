import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <nav className="flex justify-between items-center bg-[#003366] px-8 py-2 font-sans">
        {/* University Logo / Name */}
        <div className="text-white font-extrabold text-2xl tracking-wider">
          652021073
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 list-none m-0 p-0">
          {['Home', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white font-semibold text-base px-3 py-2 rounded transition-colors duration-300 hover:bg-[#002244] no-underline"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
