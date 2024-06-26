import React from "react";
import Image from "next/image";

interface Props {
  username: string;
  photoUrl: string;
  profession: string;
}

export const CardHeader = ({ username, photoUrl, profession }: Props) => {
  return (
    <div className="flex items-center mb-4">
      <Image
        src={photoUrl}
        alt={username}
        className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-primary"
        width={48}
        height={48}
      />
      <div>
        <h5 className="text-md font-bold text-black">{username}</h5>
        <p className="text-gray-600">{profession}</p>
      </div>
    </div>
  );
};
