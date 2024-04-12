"use client";
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
  return (
    <main className=" bg-slate-500 text-3xl font-bold underline">
      <h1 className="text-center">Users</h1>
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-red-400 p-4">
            <h2>{user.name}</h2>
            <p>{user.occupation}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
