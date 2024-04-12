

import React from "react";
import { IoLogoTiktok } from "react-icons/io5";


const ProfileHeader = () => {
  return (
    <div className="mt-8 rounded-md p-4 text-center">
      <img
        src="https://i.pravatar.cc/150?u=fake@pravatar.com"
        alt="Michael Carter"
        className="w-48 h-48 rounded-full mb-4 mx-auto border-4 border-orange-500"
      />
      <h2 className="text-3xl font-bold">Michael Carter</h2>
      <p className="text-gray-500">
        Hey, Spreading smiles and good vibes one video at a time.
        Join the fun!
      </p>
      <div className="flex-column mt-4">
        <IoLogoTiktok className="text-3xl text-red-500 mx-auto" />
        <span className="text-gray-500 mx-auto">TikToker</span>
      </div>
    </div>
  );
};

export default ProfileHeader;