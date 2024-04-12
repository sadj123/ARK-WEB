import React from "react";
import Image from "next/image";


const ProfileHeader = () => {
    return (
        <div className="rounded-md p-8 text-center">
            <Image
                src="/user.png"
                alt="Michael Carter"
                className="w-48 h-48 rounded-full mb-4 mx-auto border-4 border-orange-500 object-cover"
                width={100}
                height={100}
            />
            <h2 className="text-3xl font-bold">Michael Carter</h2>
            <p className="text-gray-500">
                Hey, Spreading smiles and good vibes one video at a time.
                Join the fun!
            </p>
            <div className="flex-column mt-4">
                <span className="text-gray-200 mx-auto">TikToker</span>
            </div>
        </div>
    );
};

export default ProfileHeader;
