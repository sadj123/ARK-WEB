import React from "react";
import {CardHeader} from "@/components/CardHeader";
import Image from "next/image";

interface Props {
    imageUrl: string;
    title: string;
    username: string;
    photoUrl: string;
    profession: string;
}

export const CardPost = ({imageUrl, title, username, photoUrl, profession}: Props) => {
    return (
        <div className="rounded-md shadow-md p-4 mt-4">
            <CardHeader username={username} photoUrl={photoUrl} profession={profession}/>
            <Image src={imageUrl} alt={title} className="w-full h-28 object-cover" style={{height: '279px'}}
                   width={100} height={100}/>
        </div>
    );
};