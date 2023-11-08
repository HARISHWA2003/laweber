"use client";
import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { signOut, getAuth } from "firebase/auth";
import { auth } from "../firebase/config";
import { BsCheckLg } from "react-icons/bs";
import { BiArrowBack, BiChevronLeft, BiChevronRight } from "react-icons/bi";
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
  const [pg, setPG] = useState(0);
  const [done, setDone] = useState(false);

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
  const pgProcessUP = () => {
    setPG(pg + 1);
  };
  const pgProcessDown = () => {
    setPG(pg - 1);
  };

  const getGPTRes = async (
    stndout: string,
    val: string,
    rep: string,
    abt: string
  ) => {
    fetch("/api/callGPT", {
      method: "POST",
      body: JSON.stringify({
        standOut: stndout,
        values: val,
        representation: rep,
        about: abt,
      }),
    }).then((res) => {
      res.json().then((val) => {
        console.log("value:", val["message"]);
        setaboutUS(val["message"]);
        setPG(pg + 1);
        setDone(true);
      });
    });
  };
  // getGPTRes(
  //   "loyalty",
  //   "best lawyers",
  //   "grittines",
  //   "we have a good success rate"
  // );
  // const updateGPTres = (
  //   stndout: string,
  //   val: string,
  //   rep: string,
  //   abt: string
  // ) => {
  //   console.log("data", getGPTRes(stndout, val, rep, abt));
  //   setPG(pg + 1);
  // };
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
      <div className="flex flex-col justify-center items-center p-8">
        <div className=" p-2 m-4 w-full flex flex-col">
          <div className="m-2 text-white text-xl font-semibold">Progress:</div>
          <progress
            className="progress progress-success h-4 w-full"
            value={pg}
            max="15"
          ></progress>
        </div>
        <div className="h-[600px] w-[600px] carousel mt-10 shadow-lg shadow-black rounded-xl">
          <div
            id="1"
            className="carousel-item relative w-full flex flex-col justify-between"
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="rounded-md shadow-lg shadow-black bg-[#2c3032] w-4/5">
                <div className="pName text-white m-4 font-semibold text-xl">
                  Project Name:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 ml-4 mb-4 border-black border rounded-md w-96 text-white"
                  placeholder="project name cannot contain space"
                  name="pName"
                  onChange={(e) => setpName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="h-24 flex justify-end items-center">
              <a
                href="#2"
                onClick={pgProcessUP}
                className="btn bg-[#298a87] text-white mr-4 text-xl"
              >
                next <BiChevronRight className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div
            id="2"
            className="carousel-item relative w-full flex flex-col justify-between"
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="rounded-md shadow-lg shadow-black bg-[#2c3032] w-4/5">
                <div className="pName text-white m-4 font-semibold text-xl">
                  Name:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 ml-4 mb-4 border-black border rounded-md w-96 text-white"
                  placeholder="Your name/Firm name"
                  name="pName"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="h-24 flex justify-between items-center px-4">
              <a
                href="#1"
                onClick={pgProcessDown}
                className="btn bg-[red] text-white text-xl"
              >
                <BiChevronLeft className="h-8 w-8" /> Back
              </a>
              <a
                href="#3"
                onClick={pgProcessUP}
                className="btn bg-[#298a87] text-white text-xl"
              >
                next <BiChevronRight className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div
            id="3"
            className="carousel-item relative w-full flex flex-col justify-between"
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="rounded-md shadow-lg shadow-black bg-[#2c3032] w-4/5">
                <div className="pName text-white m-4 font-semibold text-xl">
                  Mail ID:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 ml-4 mb-4 border-black border rounded-md w-96 text-white"
                  placeholder="Enter your email address"
                  name="pName"
                  onChange={(e) => setMailid(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="h-24 flex justify-between items-center px-4">
              <a
                href="#2"
                onClick={pgProcessDown}
                className="btn bg-[red] text-white text-xl"
              >
                <BiChevronLeft className="h-8 w-8" /> Back
              </a>
              <a
                href="#4"
                onClick={pgProcessUP}
                className="btn bg-[#298a87] text-white text-xl"
              >
                next <BiChevronRight className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div
            id="4"
            className="carousel-item relative w-full flex flex-col justify-between"
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="rounded-md shadow-lg shadow-black bg-[#2c3032] w-4/5">
                <div className="pName text-white m-4 font-semibold text-xl">
                  Phone number:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 ml-4 mb-4 border-black border rounded-md w-96 text-white"
                  placeholder="Phone number"
                  name="pName"
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="h-24 flex justify-between items-center px-4">
              <a
                href="#3"
                onClick={pgProcessDown}
                className="btn bg-[red] text-white text-xl"
              >
                <BiChevronLeft className="h-8 w-8" /> Back
              </a>
              <a
                href="#5"
                onClick={pgProcessUP}
                className="btn bg-[#298a87] text-white text-xl"
              >
                next <BiChevronRight className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div
            id="5"
            className="carousel-item relative w-full flex flex-col justify-between"
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="rounded-md shadow-lg shadow-black bg-[#2c3032] w-4/5">
                <div className="pName text-white m-4 font-semibold text-xl">
                  Practice Area:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 ml-4 mb-4 border-black border rounded-md w-96 text-white"
                  placeholder="Practice area"
                  name="pName"
                  onChange={(e) => setpracticeArea(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="h-24 flex justify-between items-center px-4">
              <a
                href="#4"
                onClick={pgProcessDown}
                className="btn bg-[red] text-white text-xl"
              >
                <BiChevronLeft className="h-8 w-8" /> Back
              </a>
              <a
                href="#6"
                onClick={pgProcessUP}
                className="btn bg-[#298a87] text-white text-xl"
              >
                next <BiChevronRight className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div
            id="6"
            className="carousel-item relative w-full flex flex-col justify-between"
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="rounded-md shadow-lg shadow-black bg-[#2c3032] w-4/5">
                <div className="pName text-white m-4 font-semibold text-xl">
                  Sub practice area 1:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 ml-4 mb-4 border-black border rounded-md w-96 text-white"
                  placeholder="Sub practice area 1"
                  name="pName"
                  onChange={(e) => setpracticeArea1(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="h-24 flex justify-between items-center px-4">
              <a
                href="#5"
                onClick={pgProcessDown}
                className="btn bg-[red] text-white text-xl"
              >
                <BiChevronLeft className="h-8 w-8" /> Back
              </a>
              <a
                href="#7"
                onClick={pgProcessUP}
                className="btn bg-[#298a87] text-white text-xl"
              >
                next <BiChevronRight className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div
            id="7"
            className="carousel-item relative overflow-hidden w-full flex flex-col justify-between"
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="rounded-md shadow-lg shadow-black bg-[#2c3032] w-4/5">
                <div className="pName text-white m-4 font-semibold text-xl">
                  Sub practice area 2:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 ml-4 mb-4 border-black border rounded-md w-96 text-white"
                  placeholder="Sub practice area 2"
                  name="pName"
                  onChange={(e) => setpracticeArea2(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="h-24 flex justify-between items-center px-4">
              <a
                href="#6"
                onClick={pgProcessDown}
                className="btn bg-[red] text-white text-xl"
              >
                <BiChevronLeft className="h-8 w-8" /> Back
              </a>
              <a
                href="#8"
                onClick={pgProcessUP}
                className="btn bg-[#298a87] text-white text-xl"
              >
                next <BiChevronRight className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div
            id="8"
            className="carousel-item relative w-full flex flex-col justify-between"
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="rounded-md shadow-lg shadow-black bg-[#2c3032] w-4/5">
                <div className="pName text-white m-4 font-semibold text-xl">
                  Sub practice area 3:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 ml-4 mb-4 border-black border rounded-md w-96 text-white"
                  placeholder="Sub practice area 2"
                  name="pName"
                  onChange={(e) => setpracticeArea3(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="h-24 flex justify-between items-center px-4">
              <a
                href="#7"
                onClick={pgProcessDown}
                className="btn bg-[red] text-white text-xl"
              >
                <BiChevronLeft className="h-8 w-8" /> Back
              </a>
              <a
                href="#9"
                onClick={pgProcessUP}
                className="btn bg-[#298a87] text-white text-xl"
              >
                next <BiChevronRight className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div
            id="9"
            className="carousel-item relative w-full flex flex-col justify-between"
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="rounded-md shadow-lg shadow-black bg-[#2c3032] w-4/5">
                <div className="pName text-white m-4 font-semibold text-xl">
                  One sentence description:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 ml-4 mb-4 border-black border rounded-md w-96 text-white"
                  placeholder="One sentence description"
                  name="pName"
                  onChange={(e) => setOSD(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="h-24 flex justify-between items-center px-4">
              <a
                href="#8"
                onClick={pgProcessDown}
                className="btn bg-[red] text-white text-xl"
              >
                <BiChevronLeft className="h-8 w-8" /> Back
              </a>
              <a
                href="#10"
                onClick={pgProcessUP}
                className="btn bg-[#298a87] text-white text-xl"
              >
                next <BiChevronRight className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div
            id="10"
            className="carousel-item relative w-full flex flex-col justify-between"
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="rounded-md shadow-lg shadow-black bg-[#2c3032] w-4/5">
                <div className="pName text-white m-4 font-semibold text-xl">
                  How does your law firm stand out:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 ml-4 mb-4 border-black border rounded-md w-96 text-white"
                  placeholder="Enter your answer"
                  name="pName"
                  onChange={(e) => setstandOut(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="h-24 flex justify-between items-center px-4">
              <a
                href="#9"
                onClick={pgProcessDown}
                className="btn bg-[red] text-white text-xl"
              >
                <BiChevronLeft className="h-8 w-8" /> Back
              </a>
              <a
                href="#11"
                onClick={pgProcessUP}
                className="btn bg-[#298a87] text-white text-xl"
              >
                next <BiChevronRight className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div
            id="11"
            className="carousel-item relative w-full flex flex-col justify-between"
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="rounded-md shadow-lg shadow-black bg-[#2c3032] w-4/5">
                <div className="pName text-white m-4 font-semibold text-xl">
                  What statements best represent your law firm:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 ml-4 mb-4 border-black border rounded-md w-96 text-white"
                  placeholder="Enter your answer"
                  name="pName"
                  onChange={(e) => setRepresents(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="h-24 flex justify-between items-center px-4">
              <a
                href="#10"
                onClick={pgProcessDown}
                className="btn bg-[red] text-white text-xl"
              >
                <BiChevronLeft className="h-8 w-8" /> Back
              </a>
              <a
                href="#12"
                onClick={pgProcessUP}
                className="btn bg-[#298a87] text-white text-xl"
              >
                next <BiChevronRight className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div
            id="12"
            className="carousel-item relative w-full flex flex-col justify-between"
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="rounded-md shadow-lg shadow-black bg-[#2c3032] w-4/5">
                <div className="pName text-white m-4 font-semibold text-xl">
                  What values are most important at your law firm:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 ml-4 mb-4 border-black border rounded-md w-96 text-white"
                  placeholder="Enter your answer"
                  name="pName"
                  onChange={(e) => setValues(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="h-24 flex justify-between items-center px-4">
              <a
                href="#11"
                onClick={pgProcessDown}
                className="btn bg-[red] text-white text-xl"
              >
                <BiChevronLeft className="h-8 w-8" /> Back
              </a>
              <a
                href="#13"
                onClick={pgProcessUP}
                className="btn bg-[#298a87] text-white text-xl"
              >
                next <BiChevronRight className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div
            id="13"
            className="carousel-item relative w-full flex flex-col justify-between"
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="rounded-md shadow-lg shadow-black bg-[#2c3032] w-4/5">
                <div className="pName text-white m-4 font-semibold text-xl">
                  Write a bit about you/your firm:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 ml-4 mb-4 border-black border rounded-md w-96 text-white"
                  placeholder="Enter your answer"
                  name="pName"
                  onChange={(e) => setaboutUS(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="h-24 flex justify-between items-center px-4">
              <a
                href="#12"
                onClick={pgProcessDown}
                className="btn bg-[red] text-white text-xl"
              >
                <BiChevronLeft className="h-8 w-8" /> Back
              </a>
              <a
                href="#14"
                onClick={pgProcessUP}
                className="btn bg-[#298a87] text-white text-xl"
              >
                next <BiChevronRight className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div
            id="14"
            className="carousel-item relative w-full flex flex-col justify-between"
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="rounded-md shadow-lg shadow-black bg-[#2c3032] w-4/5">
                <div className="pName text-white m-4 font-semibold text-xl">
                  A review by a client:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 ml-4 mb-4 border-black border rounded-md w-96 text-white"
                  placeholder="Review 1"
                  name="pName"
                  onChange={(e) => setReview1(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="h-24 flex justify-between items-center px-4">
              <a
                href="#13"
                onClick={pgProcessDown}
                className="btn bg-[red] text-white text-xl"
              >
                <BiChevronLeft className="h-8 w-8" /> Back
              </a>
              <a
                href="#15"
                onClick={() => {
                  getGPTRes(
                    { standOut },
                    { values },
                    { represents },
                    { aboutUS }
                  );
                }}
                className="btn bg-[#298a87] text-white text-xl"
              >
                next <BiChevronRight className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div
            id="15"
            className="carousel-item relative w-full flex flex-col justify-between"
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="rounded-md shadow-lg shadow-black bg-[#2c3032] w-4/5">
                <div className="pName text-white m-4 font-semibold text-xl">
                  A review by a client:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 ml-4 mb-4 border-black border rounded-md w-96 text-white"
                  placeholder="Review 2"
                  name="pName"
                  onChange={(e) => setReview2(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="h-24 flex justify-between items-center px-4">
              <a
                href="#14"
                onClick={pgProcessDown}
                className="btn bg-[red] text-white text-xl"
              >
                <BiChevronLeft className="h-8 w-8" /> Back
              </a>
              <a
                href="#16"
                onClick={pgProcessUP}
                className="btn bg-[#298a87] text-white text-xl"
              >
                next <BiChevronRight className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div
            id="16"
            className="carousel-item relative w-full flex flex-col justify-between"
          >
            <div className="h-full w-full flex justify-center items-center">
              <div className="rounded-md shadow-lg shadow-black bg-[#2c3032] w-4/5">
                <div className="pName text-white m-4 font-semibold text-xl">
                  A review by a client:
                </div>
                <input
                  type="email"
                  className="p-4 px-4 ml-4 mb-4 border-black border rounded-md w-96 text-white"
                  placeholder="Review 3"
                  name="pName"
                  onChange={(e) => setReview3(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="h-24 flex justify-between items-center px-4">
              <a
                href="#15"
                onClick={pgProcessDown}
                className="btn bg-[red] text-white text-xl"
              >
                <BiChevronLeft className="h-8 w-8" /> Back
              </a>
              {done ? (
                <a
                  href="#16"
                  onClick={handleForm}
                  className="btn bg-[#298a87] text-white text-xl"
                >
                  finish <BsCheckLg className="h-8 w-8" />
                </a>
              ) : (
                <a
                  href="#16"
                  onClick={handleForm}
                  className="btn bg-[#298a87] btn-disabled text-white text-xl"
                >
                  finish <BsCheckLg className="h-8 w-8" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
