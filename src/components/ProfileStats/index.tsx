import React from "react";

const ProfileStats = () => {
  return (
    <div className="flex flex-row justify-evenly mt-8">
      <div className="text-center">
        <p className="text-lg font-bold">211</p>
        <p className="text-gray-500">Posts</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-bold">5.2M</p>
        <p className="text-gray-500">Followers</p>
      </div>
      <div className="text-center">
        <p className="text-lg font-bold">200K</p>
        <p className="text-gray-500">Following</p>
      </div>
    </div>
  );
};

export default ProfileStats;
