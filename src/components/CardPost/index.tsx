import React from "react";
import {CardHeader} from "@/components/CardHeader";
import Image from "next/image";

interface Props {
    imageUrl: string;
    title: string;
    description: string;
    username: string;
    photoUrl: string;
    profession: string;
}

export const CardPost = ({imageUrl, title, description, username, photoUrl, profession}: Props) => {
    return (
        <div className="bg-white rounded-md shadow-md p-4">
            <CardHeader username={username} photoUrl={photoUrl} profession={profession}/>
            <Image src={imageUrl} alt={title} className="w-full h-28 object-cover mb-4" style={{height: '279px'}}/>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};