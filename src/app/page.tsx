"use client";
import Image from "next/image";
import styles from "./page.module.css";
// Import the functions you need from the SDKs you need
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../utils/firebase";

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
    let unsuscribe: any;
    (async () => {
      unsuscribe = await fetchPost();
    })();
    return () => {
      // unsuscribe();
    };
  }, []);
  return <></>;
}
