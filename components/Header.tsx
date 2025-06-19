import React, { Component } from 'react';

interface HeaderProps {}

interface HeaderState {}

export class Header extends Component<HeaderProps, HeaderState> {
  render() {
    return (
      <div className="max-w-3xl mx-auto my-5 bg-white bg-opacity-95 border border-white border-opacity-20 font-sans">
        <div className="bg-[#1e3c72] py-12 px-10 text-center">
          <h1 className="font-serif text-4xl text-white mb-2 font-bold">
            Student Profile
          </h1>
          <div className="text-lg text-white text-opacity-90 font-light">
            Faculty of Science and Digital Innovation
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
