import React from "react";
import { CardHeader } from "@/components/CardHeader";
import Image from "next/image";

interface Props {
  imageUrl: string;
  title: string;
  username: string;
  photoUrl: string;
  profession: string;
}

export const CardPost = ({
  imageUrl,
  title,
  username,
  photoUrl,
  profession,
}: Props) => {
  return (
    <div className="bg-card rounded-md shadow-md my-4 mx-2 p-4">
      <CardHeader
        username={username}
        photoUrl={photoUrl}
        profession={profession}
      />
      <Image
        src={imageUrl}
        alt={title}
        className="w-full rounded-lg h-48 object-cover"
        width={100}
        height={100}
      />
    </div>
  );
};
