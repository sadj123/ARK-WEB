"use client";
// Import the functions you need from the SDKs you need
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../utils/firebase";
import { redirect } from "next/navigation";
import Image from "next/image";
import SplashImage from "../images/splash.png";
export default function Home() {
  const [users, setUsers] = useState<any[]>([]);
  // Initialize Firebase
  const fetchPost = async () => {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsers(newData);
    });
    return unsubscribe;
  };
  useEffect(() => {
    // let unsuscribe: any;
    // (async () => {
    //   unsuscribe = await fetchPost();
    // })();
    // return () => {
    //   // unsuscribe();
    // };
    redirect("/home");
  }, []);
  return (
    <main className="h-screen bg-bone bg-slate-500 text-3xl font-bold underline">
      <div className="flex justify-center bg-bone">
        <Image src={SplashImage} alt="Home" className="h-screen w-auto" />
      </div>
    </main>
  );
}
