"use client";
// this is a test page
import React, { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

let datarr1 = ["#cbdfae", "#98a9db", "#b759d5"];

async function fetchDatafromFirestore(id: string, nm: string) {
  const db = getFirestore();
  const docRef = doc(db, id, nm);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}
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
    async function fetchData(id: string, nm: string) {
      const data = await fetchDatafromFirestore(id, nm);
      console.log("data", data);
      setUserData(data);
    }
    fetchData(user.uid, "hello");
  }, []);

  return (
    <div className="w-full h-full bg-[#1e2122] p-4">
      <div>{userData["pName"]}</div>
      <div>{userData["fName"]}</div>
      <div>{userData["lName"]}</div>
      <div>{userData["phone"]}</div>
    </div>
  );
}

export default Page;
