"use client";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { signOut, getAuth } from "firebase/auth";
import { auth } from "../firebase/config";
import { BiSearchAlt } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import { BsArrowUpRight } from "react-icons/bs";
import delData from "../firebase/firestore/delData";

import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import GotoPage from "../components/gotoPage";

// import signOut from "../firebase/auth/signOut";
async function fetchDatafromFirestore(str) {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, str));
  const data = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    data.push(doc.id);
  });
  return data;
}

function Page() {
  const { user } = useAuthContext();
  const [mail, setMail] = useState("");
  const [uid, setUid] = useState("");
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const newSite = () => {
    setLoading(true);
    router.push("/newSite");
  };
  const handleLogout = () => {
    signOut(auth);
  };
  React.useEffect(() => {
    if (user == null) {
      router.push("/");
    } else {
      const mail = setMail(user.email);
      const uid = setUid(user.uid);
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
  const deletedata = (uid, coll) => {
    delData(uid, coll);
    router.refresh();
  };
  return (
    <div className="bg-[#1e2122] h-fit">
      <nav className="h-24 p-8 px-14 flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="text-[#48514f] font-semibold text-xs">DASHBOARD</div>
          <div className="text-white font-semibold text-2xl">My sites</div>
        </div>
        <div
          onClick={handleLogout}
          className="text-white font-medium text-xl truncate w-64 hover:w-auto hover:underline cursor-pointer transition-all"
        >
          welcome {mail}
        </div>
      </nav>
      <div className="h-16 flex flex-row justify-between items-center align-middle px-12">
        <BiSearchAlt className="absolute mr-2 w-10" />
        <input
          type="search"
          className="p-2 px-8 rounded-md w-96"
          id="exampleSearch"
          placeholder="Search"
        />
        <div className="bg-[#298a87] p-2 rounded-md flex flex-row items-center cursor-pointer hover:brightness-75 transition-all">
          {/* <HiPlus className="fill-white" /> */}
          {isLoading ? (
            <span className="loading loading-dots loading-md"></span>
          ) : (
            <HiPlus className="fill-white" />
          )}
          <div onClick={newSite} className="px-2 font-medium text-white">
            New Site
          </div>
        </div>
      </div>
      <div className="courses grid grid-cols-3 justify-center place-items-center gap-4">
        {userData.map((value) => (
          // eslint-disable-next-line react/jsx-key
          <div className="bg-[#2c3032] cursor-pointer hover:scale-105 shadow-lg rounded-lg my-4 transition-all w-11/12 h-[400px] p-4">
            <div className="text-6xl text-white">{value}</div>
            <div className="divider"></div>
            <div className="text-white text-2xl p-4 font-mono font-bold h-64 flex flex-col justify-end items-start">
              <div className="btn btn-ghost text-2xl m-2">Preview</div>
              <div
                onClick={() => router.push("/" + "dashboard" + "/" + value)}
                className="btn btn-ghost text-2xl m-2"
              >
                Edit <FaEdit className="ml-4" />
              </div>
              <div
                onClick={() => deletedata(user.uid, value)}
                className="btn btn-error text-2xl text-white m-2"
              >
                Delete <AiFillDelete className="ml-4 fill-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
