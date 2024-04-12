import React from "react";
import Image from "next/image";

interface Props {
    username: string;
    photoUrl: string;
    profession: string;
}

export const CardHeader = ({username, photoUrl, profession}: Props) => {
    return (
        <div className="flex items-center mb-4">
            <Image
                src={photoUrl}
                alt={username}
                className="w-12 h-12 rounded-full mr-4 object-cover border-4 border-orange-500"
            />
            <div>
                <h5 className="text-md font-bold text-black">{username}</h5>
                <p className="text-gray-600">{profession}</p>
            </div>
        </div>
    );
};