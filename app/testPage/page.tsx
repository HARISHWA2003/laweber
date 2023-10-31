"use client";
// this is a test page
import React, { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { getFirestore, collection, getDocs } from "firebase/firestore";

async function fetchDatafromFirestore(str) {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, str));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.id);
  });
  return data;
}
// eslint-disable-next-line @next/next/no-async-client-component
function Page() {
  const { user } = useAuthContext();
  const router = useRouter();
  React.useEffect(() => {
    if (user == null) {
      router.push("/");
    }
  }, [router, user]);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function fetchData(str) {
      const data = await fetchDatafromFirestore(str);
      setUserData(data);
    }
    fetchData(user.uid);
  }, []);

  return (
    <div className="bg-[#1e2122] h-screen">
      <div>hello</div>
      {userData.map((user) => (
        <div>{user}</div>
      ))}
    </div>
  );
}
export default Page;
