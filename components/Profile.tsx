import Image from 'next/image';
import React, { Component } from 'react';

export class Profile extends Component {
  render() {
    return (
      <div className="flex justify-center items-center mb-10">
        <div className="border-4 border-blue-900 rounded"> {/* เพิ่ม rounded ให้ดูสวยขึ้น */}
          <Image
            src="/guneang.jpg"
            alt="Profile"
            width={180}
            height={180}
            className="block"
          />
        </div>
      </div>
    );
  }
}

export default Profile;
