import Image from 'next/image';
import React, { Component } from 'react';

export class Profile extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '40px',
        }}
      >
        <Image
          src="/guneang.jpg"   // path จาก public folder
          alt="Profile"
          width={180}
          height={180}
          style={{ border: '5px solid #2a5298' }}
        />
      </div>
    );
  }
}

export default Profile;
