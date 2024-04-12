"use client";
import React from "react";
import Image from "next/image";
import HomeImage from "../../images/home.png";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen flex justify-center bg-bone">
      <Image
        onClick={() => {
          router.push("/home/createOffer");
        }}
        src={HomeImage}
        alt="Home"
        className="h-screen w-auto"
      />
    </div>
  );
}
