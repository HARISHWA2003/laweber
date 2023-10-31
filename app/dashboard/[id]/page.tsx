"use client";
import { ReactNode } from "react";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import { auth } from "../../firebase/config";
import {
  query,
  where,
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import addData from "@/app/firebase/firestore/addData";

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

export default function Page({
  params,
}: {
  params: {
    id: ReactNode;
    slug: string;
  };
}) {
  const { user } = useAuthContext();
  const router = useRouter();
  const [pName, setpName] = useState("");
  const [mailid, setMailid] = useState("");
  const [phone, setPhone] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [bio, setBio] = useState("");

  const handleForm = async () => {
    const data = {
      pName: pName,
      mailid: mailid,
      phone: phone,
      fName: fName,
      lName: lName,
      bio: bio,
    };
    const { result, error } = await addData(user.uid, pName, data);

    if (error) {
      return console.log(error);
    } else {
      alert("succesfully added");
      router.push("/dashboard");
    }
  };

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
      setpName(data.pName);
      setfName(data.fName);
      setlName(data.lName);
      setMailid(data.mailid);
      setPhone(data.phone);
      setBio(data.bio);
      setUserData(data);
    }
    fetchData(user.uid, params.id);
  }, []);
  return (
    <div>
      <h1>My Page</h1>
      <h2>{params.id}</h2>
      <div>{pName}</div>
      <div>{fName}</div>
      <div>{lName}</div>
      <div>{mailid}</div>
      <div>{phone}</div>
      <div>{bio}</div>
      <input
        onChange={(e) => setfName(e.target.value)}
        placeholder="write for fname"
      />
      <button
        onClick={handleForm}
        className="p-2 bg-slate-600 rounded-full ml-4 hover:brightness-50 transition-all"
      >
        Update
      </button>
    </div>
  );
}
