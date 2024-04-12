import React from "react";

const ProfileLinks = () => {
  return (
    <div className="flex flex-row justify-between mt-8">
      <a
        href="#"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Home
      </a>
      <a
        href="#"
        className="bg-gray-200 text-gray-500 px-4 py-2 rounded-md hover:bg-gray-300"
      >
        Marketplace
      </a>
      <a
        href="#"
        className="bg-gray-200 text-gray-500 px-4 py-2 rounded-md hover:bg-gray-300"
      >
        Post
      </a>
      <a
        href="#"
        className="bg-gray-200 text-gray-500 px-4 py-2 rounded-md hover:bg-gray-300"
      >
        Social Net
      </a>
      <a
        href="#"
        className="bg-gray-200 text-gray-500 px-4 py-2 rounded-md hover:bg-gray-300"
      >
        Profile
      </a>
    </div>
  );
};

export default ProfileLinks;
