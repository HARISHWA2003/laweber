"use client";
import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { signOut, getAuth } from "firebase/auth";
import { auth } from "../firebase/config";
import { BsCheckLg } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import addData from "../firebase/firestore/addData";
function Page() {
  const { user } = useAuthContext();
  const [pName, setpName] = useState("");
  const [mailid, setMailid] = useState("");
  const [phone, setPhone] = useState("");
  const [Name, setName] = useState("");
  const [practiceArea, setpracticeArea] = useState("");
  const [practiceArea1, setpracticeArea1] = useState("");
  const [practiceArea2, setpracticeArea2] = useState("");
  const [practiceArea3, setpracticeArea3] = useState("");
  const [OSD, setOSD] = useState("");
  const [standOut, setstandOut] = useState("");
  const [represents, setRepresents] = useState("");
  const [values, setValues] = useState("");
  const [aboutUS, setaboutUS] = useState("");
  const [review1, setReview1] = useState("");
  const [review2, setReview2] = useState("");
  const [review3, setReview3] = useState("");

  const handleForm = async () => {
    const data = {
      pName: pName,
      mailid: mailid,
      phone: phone,
      Name: Name,
      practiceArea: practiceArea,
      practiceArea1: practiceArea1,
      practiceArea2: practiceArea2,
      practiceArea3: practiceArea3,
      OSD: OSD,
      standOut: standOut,
      represents: represents,
      values: values,
      aboutUS: aboutUS,
      review1: review1,
      review2: review2,
      review3: review3,
    };
    const { result, error } = await addData(user.uid, pName, data);
    if (error) {
      return console.log(error);
    } else {
      alert("succesfully added");
      router.push("/dashboard");
    }
  };
  const router = useRouter();
  React.useEffect(() => {
    if (user == null) {
      router.push("/");
    }
  }, [user]);
  return (
    <div className="w-full h-full bg-[#1e2122] p-4">
      <div className="pName flex flex-row justify-between items-center p-4">
        <div className="text-[white] font-semibold text-2xl">New Site</div>
        {/* <div className="text-[white] font-semibold text-2xl">{uuid}</div> */}
        <div
          onClick={() => router.push("/dashboard")}
          className="bg-[red] p-2 rounded-md flex flex-row items-center cursor-pointer hover:brightness-75 transition-all"
        >
          <BiArrowBack className="fill-white" />
          <div className="px-2 font-medium text-white">Back </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex-1">
          <div className="form p-4 m-2">
            <div className="flex flex-row">
              <div>
                <div className="pName text-[#48514f] mb-2 font-semibold text-xl">
                  Project Name:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 rounded-md w-96 text-white"
                  placeholder="project name cannot contain space"
                  name="pName"
                  onChange={(e) => setpName(e.target.value)}
                ></input>
              </div>
              <div className="ml-4">
                <div className="pName text-[#48514f] mb-2 font-semibold text-xl">
                  Name:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 rounded-md w-96 text-white"
                  placeholder="Name"
                  name="pName"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="pName text-[#48514f] mb-2 font-semibold text-xl">
              Practice Area:
            </div>
            <input
              type="email"
              className="p-4 px-4 rounded-md w-96 text-white"
              placeholder="Practice Area"
              name="pName"
              onChange={(e) => setpracticeArea(e.target.value)}
            ></input>
            <div className="flex flex-row">
              <div>
                <div className="pName text-[#48514f] mb-2 font-semibold text-xl">
                  Sub practice area 1:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 rounded-md w-96 text-white"
                  placeholder="Sub practice Area 1"
                  name="pName"
                  onChange={(e) => setpracticeArea1(e.target.value)}
                ></input>
              </div>
              <div className="ml-4">
                <div className="pName text-[#48514f] mb-2 font-semibold text-xl">
                  Sub practice area 2:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 rounded-md w-96 text-white"
                  placeholder="Sub practice Area 2"
                  name="pName"
                  onChange={(e) => setpracticeArea2(e.target.value)}
                ></input>
              </div>
              <div className="ml-4">
                <div className="pName text-[#48514f] mb-2 font-semibold text-xl">
                  Sub practice area 3:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 rounded-md w-96 text-white"
                  placeholder="Sub practice Area 3"
                  name="pName"
                  onChange={(e) => setpracticeArea3(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="pName text-[#48514f] mb-2 font-semibold text-xl">
              One sentence description:
            </div>
            <input
              type="email"
              className="p-4 px-4 rounded-md w-96 text-white"
              placeholder="One sentence description"
              name="pName"
              onChange={(e) => setOSD(e.target.value)}
            ></input>
            <div className="flex flex-row">
              <div>
                <div className="pName text-[#48514f] mb-2 font-semibold text-xl">
                  How do you/firm stand out:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 rounded-md w-96 text-white"
                  placeholder="How does your law firm stand out"
                  name="pName"
                  onChange={(e) => setstandOut(e.target.value)}
                ></input>
              </div>
              <div className="ml-4">
                <div className="pName text-[#48514f] mb-2 font-semibold text-xl">
                  What best represents you/firm:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 rounded-md w-96 text-white"
                  placeholder="What best represents you/firm"
                  name="pName"
                  onChange={(e) => setRepresents(e.target.value)}
                ></input>
              </div>
              <div className="ml-4">
                <div className="pName text-[#48514f] mb-2 font-semibold text-xl">
                  What values are most important for you/firm:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 rounded-md w-96 text-white"
                  placeholder="Values"
                  name="pName"
                  onChange={(e) => setValues(e.target.value)}
                ></input>
              </div>
            </div>
            {/* need to add one div which holds about us section */}
            <div className="pName text-[#48514f] mb-2 font-semibold text-xl">
              About you:
            </div>
            <input
              type="email"
              className="p-4 px-4 rounded-md w-3/5 h-24 text-white"
              placeholder="Tell us the strength of you firm, experience levels and what you bring to the table"
              name="pName"
              onChange={(e) => setaboutUS(e.target.value)}
            ></input>
            <div className="flex flex-row">
              <div>
                <div className="pName text-[#48514f] mb-2 font-semibold text-xl">
                  Review 1:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 rounded-md w-96 text-white"
                  placeholder="Review 1"
                  name="pName"
                  onChange={(e) => setReview1(e.target.value)}
                ></input>
              </div>
              <div className="ml-4">
                <div className="pName text-[#48514f] mb-2 font-semibold text-xl">
                  Review 2:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 rounded-md w-96 text-white"
                  placeholder="Review 2"
                  name="pName"
                  onChange={(e) => setReview2(e.target.value)}
                ></input>
              </div>
              <div className="ml-4">
                <div className="pName text-[#48514f] mb-2 font-semibold text-xl">
                  Review 3:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 rounded-md w-96 text-white"
                  placeholder="Review 3"
                  name="pName"
                  onChange={(e) => setReview3(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="w-[800px] flex items-center justify-center p-4">
              <div
                onClick={handleForm}
                className="bg-[#298a87] p-2 rounded-md w-[600px] h-[60px] flex flex-row items-center cursor-pointer hover:brightness-75 transition-all justify-center"
              >
                <BsCheckLg className="fill-white" />
                <div className="px-2 font-medium text-white text-xl">
                  Create
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex-1 rounded-lg bg-[#2b2a33]"></div> */}
      </div>
    </div>
  );
}

export default Page;
