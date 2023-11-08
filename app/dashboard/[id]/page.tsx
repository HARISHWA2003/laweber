"use client";
import { ReactNode } from "react";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import { auth } from "../../firebase/config";
import heroimg from "../../assets/heroimg.jpg";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { HiRefresh, HiMail } from "react-icons/hi";
import { MdLaptopMac } from "react-icons/md";
import { GrBlockQuote } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import ladyjustice from "../../assets/ladyjustice.png";
import {
  BiArrowBack,
  BiChevronLeft,
  BiChevronRight,
  BiPhone,
} from "react-icons/bi";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { BsFillTelephoneFill } from "react-icons/bs";

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
import Image from "next/image";
import { FiPhone } from "react-icons/fi";

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
  const [wop, setWOP] = useState(true);
  const [pName, setpName] = useState("");
  const [mailid, setMailid] = useState("");
  const [phone, setPhone] = useState("");
  const [Name, setName] = useState("");
  const [practiceArea, setpracticeArea] = useState("");
  const [practiceArea1, setpracticeArea1] = useState("");
  const [practiceArea2, setpracticeArea2] = useState("");
  const [practiceArea3, setpracticeArea3] = useState("");
  const [paDes1, setpaDes1] = useState("");
  const [paDes2, setpaDes2] = useState("");
  const [paDes3, setpaDes3] = useState("");
  const [paDes4, setpaDes4] = useState("");
  const [OSD, setOSD] = useState("");
  const [standOut, setstandOut] = useState("");
  const [represents, setRepresents] = useState("");
  const [values, setValues] = useState("");
  const [aboutUS, setaboutUS] = useState("");
  const [review1, setReview1] = useState("");
  const [review2, setReview2] = useState("");
  const [review3, setReview3] = useState("");
  const [template, setTemplate] = useState("");
  const [template1, setTemplate1] = useState(true);
  const [template2, setTemplate2] = useState(false);
  const [hiurl, setHiURL] = useState(heroimg);
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
      paDes1: paDes1,
      paDes2: paDes2,
      paDes3: paDes3,
      paDes4: paDes4,
      template: template,
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
      setName(data.Name);
      setMailid(data.mailid);
      setPhone(data.phone);
      setpracticeArea(data.practiceArea);
      setpracticeArea1(data.practiceArea1);
      setpracticeArea2(data.practiceArea2);
      setpracticeArea3(data.practiceArea3);
      setpaDes1(data.paDes1);
      setpaDes2(data.paDes2);
      setpaDes3(data.paDes3);
      setpaDes4(data.paDes4);
      setOSD(data.OSD);
      setstandOut(data.standOut);
      setRepresents(data.represents);
      setValues(data.values);
      setReview1(data.review1);
      setReview2(data.review2);
      setReview3(data.review3);
      setaboutUS(data.aboutUS);
      setTemplate(data.template);
      setUserData(data);
    }
    fetchData(user.uid, params.id);
  }, []);
  const Template = async () => {
    if (template == "1") {
      setTemplate("2");
    }
    if (template == "2") {
      setTemplate("1");
    }
  };
  useEffect(() => {
    if (template == "1") {
      setTemplate1(true);
      setTemplate2(false);
    }
    if (template == "2") {
      setTemplate1(false);

      setTemplate2(true);
    }
  }, [template]);

  return (
    <div>
      <div className="h-24 flex justify-end items-center p-4">
        <div
          onClick={() => Template()}
          className="bg-slate-200 hover:brightness-110 cursor-pointer p-3 text-black mr-2 rounded-md"
        >
          <HiRefresh className="h-6 w-6 fill-black" />
        </div>
        <div
          onClick={() => setWOP(!wop)}
          className="px-4 py-3 w-fit bg-slate-200 cursor-pointer rounded-md hover:brightness-110"
        >
          {wop ? (
            <MdLaptopMac className="fill-black h-6 w-6" />
          ) : (
            <HiDevicePhoneMobile className="fill-black h-6 w-6" />
          )}
        </div>
        <div
          onClick={() => router.push("/dashboard")}
          className="bg-[red] cursor-pointer hover:brightness-75 text-center items-center flex text-white font-bold px-4 py-3 rounded-md m-2"
        >
          <BiArrowBack className="h-6 w-6" />
          back
        </div>
      </div>
      <div className="flex flex-row">
        <div className="border w-24 h-[869px]">1</div>
        <div className="w-full h-[869px] flex justify-center items-center">
          {wop ? (
            <div className="mockup-browser w-[1425px] h-[800px] overflow-scroll border bg-base-300">
              <div className="mockup-browser-toolbar">
                <div className="input">
                  https://legis.com/{user.uid}/{pName}
                </div>
              </div>
              <div className="px-4 py-2 bg-transparent">
                {/* {template1 ? <div>template 1</div> : <div></div>}

                  {template2 ? <div>template 2</div> : <div></div>} */}
                {/* website 1 starts here */}
                {template1 ? (
                  <div className="website">
                    <div
                      style={{
                        backgroundImage:
                          'url("https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                      }}
                    >
                      <div className="nav h-16 flex items-center justify-between">
                        <div className="btn btn-ghost text-lg font-serif text-white ml-16">
                          {Name}
                        </div>
                        <div>
                          <a
                            href="#home"
                            className="btn btn-ghost text-xs text-white ml-8"
                          >
                            Home
                          </a>
                          <a className="btn btn-ghost text-xs text-white ml-8">
                            About
                          </a>
                          <a className="btn btn-ghost text-xs text-white ml-8">
                            Testimonials
                          </a>
                          <a className="btn btn-ghost text-xs text-white mr-4 ml-8">
                            Contact
                          </a>
                        </div>
                      </div>
                      <div id={"home"} className="hero flex items-center">
                        <div className="h-[600px] flex items-center">
                          <div className="ml-32 flex flex-col max-w-lg">
                            <div className="text-white text-7xl m-2 font-bold">
                              {Name}
                            </div>
                            <div className="text-white text-2xl m-2">{OSD}</div>
                            <div className="text-white flex flex-row text-xl bg-[#ab8421] w-fit p-4 rounded-md m-2">
                              <BsFillTelephoneFill className="translate-y-1 mx-2" />
                              Free consultation
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id={"practice"} className="bg-[#fafafa] ">
                      <div className="flex flex-col items-center">
                        <div className="text-[#5c4c3a] text-4xl font-serif font-bold text-center p-4">
                          Our Practice Areas
                        </div>
                        <div className="text-[#5c4c3a] font-sans font-light max-w-xl text-center">
                          No matter what your legal needs may be, our team of
                          lawyers has the expertise necessary to provide you
                          with the highest level of service.
                        </div>
                      </div>
                      <div className="h-[550px] flex flex-row justify-between">
                        <div className=" w-2/3 flex flex-col justify-center items-end p-24">
                          <div className="flex flex-col h-full justify-center items-center">
                            <div className="flex text-[#5c4c3a] text-2xl  font-bold w-full flex-col justify-center items-center">
                              {practiceArea}
                            </div>
                            <div className="text-[#5c4c3a] text-xl font-thin">
                              {paDes1}
                            </div>
                          </div>
                          <div className="flex flex-col h-full justify-center items-center">
                            <div className="flex text-[#5c4c3a] text-2xl  font-bold w-full flex-col justify-center items-center">
                              {practiceArea1}
                            </div>
                            <div className="text-[#5c4c3a] text-xl font-thin">
                              {paDes2}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="rounded-lg">
                            <Image
                              src="https://images.unsplash.com/photo-1590099543482-3b3d3083a474?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              width={400}
                              height={1400}
                              alt="lady justice"
                            />
                          </div>
                        </div>
                        <div className=" w-2/3 flex flex-col justify-center items-start p-24">
                          <div className="flex  flex-col h-full justify-center items-center">
                            <div className="flex text-[#5c4c3a] text-2xl  font-bold w-full flex-col justify-center items-center">
                              {practiceArea2}
                            </div>
                            <div className="text-[#5c4c3a] text-xl font-thin">
                              {paDes3}
                            </div>
                          </div>
                          <div className="flex  flex-col h-full justify-center items-center">
                            <div className="flex text-[#5c4c3a] text-2xl  font-bold w-full flex-col justify-center items-center">
                              {practiceArea3}
                            </div>
                            <div className="text-[#5c4c3a] text-xl font-thin">
                              {paDes4}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="about bg-[#fafafa]">
                      <div className="h-16">
                        <div className="text-[#5c4c3a] text-5xl font-bold text-center">
                          Who We Are
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="bg-gradient-to-b from-[#f5f5f5] to-transparent mt-4 mb-4 p-6 text-center  mx-64 text-black">
                          {aboutUS}
                        </div>
                      </div>
                    </div>
                    <div className="contact">
                      <div
                        style={{
                          backgroundImage:
                            'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVpbGRpbmdzfGVufDB8MHwwfHx8MA%3D%3D")',
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                        }}
                      >
                        <div className="h-[600px] flex justify-center items-center">
                          <div className="h-[500px] w-[1000px] bg-[#eeeeee]">
                            <div className="text-[#5c4c3a] text-2xl font-bold font-serif text-center m-4">
                              Contact Us Today
                            </div>
                            <div className="text-[#5c4c3a] font-thin font-serif text-center m-4">
                              If you are in need of legal assistance, don't
                              hesitate to reach out to us.
                            </div>
                            <div className="w-full h-[400px]  border-black flex flex-row">
                              <div className=" border-black w-full flex flex-col justify-center items-center">
                                <div className="text-[#5c4c3a] text-xl font-bold text-center m-4">
                                  Schedule Your Consultation
                                </div>
                                <div>
                                  <HiMail className="fill-black w-20 h-20" />
                                </div>
                                <div className="text-[#5c4c3a] text-xl font-semibold text-center m-4">
                                  Mail us at:
                                </div>
                                <div className="text-[#5c4c3a] text-xl font-semibold text-center">
                                  {mailid}
                                </div>
                              </div>
                              <div className="  w-full flex justify-center items-center">
                                <div className="  w-full flex flex-col justify-center items-center">
                                  <div className="text-[#5c4c3a] text-xl font-bold text-center m-4">
                                    Talk to an expert
                                  </div>
                                  <div>
                                    <BiPhone className="fill-black w-20 h-20" />
                                  </div>
                                  <div className="text-[#5c4c3a] text-xl font-semibold text-center m-4">
                                    Call us at:
                                  </div>
                                  <div className="text-[#5c4c3a] text-xl font-semibold text-center">
                                    +91 {phone}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonals bg-[#fafafa]">
                      <div className="text-[#5c4c3a] text-5xl font-serif p-4 font-bold text-center">
                        Client's Testimonials
                      </div>
                      <div className="text-[#5c4c3a] text-xl text-center">
                        We take pride in helping our clients navigate complex
                        legal matters and achieving successful outcomes
                      </div>
                      <div className="h-[500px] border-black flex flex-row justify-center items-center">
                        <div className="w-[200px] h-[350px] bg-gradient-to-b from-[#f5f5f5] to-transparent m-4 flex flex-col items-center p-4 text-center text-black">
                          <GrBlockQuote className="fill-black h-14 w-14 mb-4" />
                          {review1}
                        </div>
                        <div className="w-[200px] h-[400px] bg-gradient-to-b from-[#f5f5f5] to-transparent m-4 flex flex-col items-center p-4 text-center text-black">
                          <GrBlockQuote className="fill-black h-14 w-14 mb-4" />
                          {review2}
                        </div>
                        <div className="w-[200px] h-[350px] bg-gradient-to-b from-[#f5f5f5] to-transparent m-4 flex flex-col items-center p-4 text-center text-black">
                          <GrBlockQuote className="fill-black h-14 w-14 mb-4" />
                          {review3}
                        </div>
                      </div>
                    </div>
                    <div className="footer bg-[#5c4c3a]">
                      <div className="h-16 flex items-center flex-row justify-between w-full">
                        <div className="text-white text-xl font-semibold ml-24">
                          {Name}
                        </div>
                        <div className="flex flex-row mr-16">
                          <div className="text-white text-xl mx-2">
                            Powered by
                          </div>
                          <div className="text-white underline text-xl">
                            LEGIS
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}

                {/* website 1 ends here */}
                {/* website 2 starts here */}
                {template2 ? (
                  <div className="website2 bg-[#fafafa]">
                    <div className="nav h-16 flex items-center justify-between">
                      <div className="btn btn-ghost text-lg font-serif text-[black] ml-16">
                        {Name}
                      </div>
                      <div>
                        <a
                          href="#home"
                          className="btn btn-ghost text-xs text-black ml-8"
                        >
                          Home
                        </a>
                        <a className="btn btn-ghost text-xs text-black ml-8">
                          About
                        </a>
                        <a className="btn btn-ghost text-xs text-black ml-8">
                          Testimonials
                        </a>
                        <a className="btn btn-ghost text-xs text-black mr-4 ml-8">
                          Contact
                        </a>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundImage:
                          'url("https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGxhd3xlbnwwfDB8MHx8fDA%3D")',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="h-[600px] flex flex-col justify-center items-center">
                        <div className="text-white text-6xl m-4">{Name}</div>
                        <div className="text-white text-3xl max-w-xl text-center m-4">
                          {OSD}
                        </div>
                        <div className="bg-[#f7585a] text-white text-xl rounded-full p-2 px-4 m-4 cursor-pointer hover:brightness-75 transition-all">
                          Make an appointment
                        </div>
                      </div>
                    </div>
                    <div className="about h-[400px] flex flex-row">
                      <div>
                        <Image
                          src="https://images.unsplash.com/photo-1457694716743-eb419114c894?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          width={600}
                          height={600}
                          alt="chess"
                        />
                      </div>
                      <div className="w-fit">
                        <div className="text-black text-6xl m-4">
                          Why choose us?
                        </div>
                        <div className="text-black text-xl m-4 max-w-xl">
                          {aboutUS}
                        </div>
                      </div>
                    </div>
                    <div className="practice bg-[#f2f2f2]">
                      <div className="h-[600px]">
                        <div className="text-6xl text-center m-4 text-black">
                          Our Legal Practice Area
                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 ">
                          <div className=" flex justify-center items-end mx-20 flex-col">
                            <div className="bg-[#ffffff] m-4 h-[220px] w-[250px] rounded-md text-black shadow-lg shadow-black hover:scale-[1.02] transition-all">
                              <div className="text-[#f7585a] text-xl font-bold text-center m-4">
                                {practiceArea}
                              </div>
                              <div className="max-w-[250px] text-center text-black m-4">
                                {paDes1}
                              </div>
                            </div>
                          </div>
                          <div className=" flex justify-center items-start mx-20 flex-col">
                            <div className="bg-[#ffffff] m-4 h-[220px] w-[250px] rounded-md text-black shadow-lg shadow-black hover:scale-[1.02] transition-all">
                              <div className="text-[#f7585a] text-xl font-bold text-center m-4">
                                {practiceArea1}
                              </div>
                              <div className="max-w-[250px] text-center text-black m-4">
                                {paDes2}
                              </div>
                            </div>
                          </div>
                          <div className=" flex justify-center items-end mx-20 flex-col">
                            <div className="bg-[#ffffff] m-4 h-[220px] w-[250px] rounded-md text-black shadow-lg shadow-black hover:scale-[1.02] transition-all">
                              <div className="text-[#f7585a] text-xl font-bold text-center m-4">
                                {practiceArea2}
                              </div>
                              <div className="max-w-[250px] text-center text-black m-4">
                                {paDes3}
                              </div>
                            </div>
                          </div>
                          <div className=" flex justify-center items-start mx-20 flex-col">
                            <div className="bg-[#ffffff] m-4 h-[220px] w-[250px] rounded-md text-black shadow-lg shadow-black hover:scale-[1.02] transition-all">
                              <div className="text-[#f7585a] text-xl font-bold text-center m-4">
                                {practiceArea3}
                              </div>
                              <div className="max-w-[250px] text-center text-black m-4">
                                {paDes4}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonials bg-[#f7585a]">
                      <div className="h-[400px] flex justify-center items-center">
                        <div className="bg-[#f2f2f2] w-[800px] h-[300px] rounded-lg flex flex-col justify-between items-end pt-20 px-16 shadow-lg shadow-black">
                          <div className="carousel w-full ">
                            <div id="item1" className="carousel-item w-full">
                              <div className="text-black text-center text-xl m-4">
                                "{review1}"
                              </div>
                            </div>
                            <div id="item2" className="carousel-item w-full">
                              <div className="text-black text-center text-xl m-4">
                                "{review2}"
                              </div>
                            </div>
                            <div id="item3" className="carousel-item w-full">
                              <div className="text-black text-center text-xl m-4">
                                "{review3}"
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center w-full py-2 gap-2">
                            <a href="#item1" className="btn btn-xs">
                              1
                            </a>
                            <a href="#item2" className="btn btn-xs">
                              2
                            </a>
                            <a href="#item3" className="btn btn-xs">
                              3
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact bg-[#f2f2f2]">
                      <div className="h-[400px] flex flex-row">
                        <div className="border w-2/3 p-4">
                          <div className="text-black text-4xl font-semibold">
                            Free Legal Consultation
                          </div>
                          <div className="flex flex-col">
                            <div>
                              <input
                                type="text"
                                placeholder="enter your name"
                                className="p-2 m-2 w-[200px] bg-[#f2f2f2] border rounded-s border-black"
                              />
                              <input
                                type="text"
                                placeholder="enter your email                 "
                                className="p-2 m-2 bg-[#f2f2f2] w-[383px] border rounded-s border-black"
                              />
                            </div>
                            <div>
                              <input
                                type="text"
                                placeholder="subject of the mail"
                                className="p-2 m-2 w-[600px] bg-[#f2f2f2] border rounded-s border-black"
                              />
                            </div>
                            <div>
                              <input
                                type="text"
                                placeholder="content of the mail"
                                className="p-2 py-14 m-2 w-[600px] bg-[#f2f2f2] border rounded-s border-black"
                              />
                            </div>
                            <div>
                              <div className="bg-[#f7585a] rounded-full text-white w-fit p-4 mx-2 cursor-pointer hover:brightness-75 transition-all">
                                Send Message
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border flex justify-end">
                          <Image
                            src="https://images.unsplash.com/photo-1454923634634-bd1614719a7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            width={600}
                            height={600}
                            alt="chess"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="footer bg-[#f7585a]">
                      <div className="h-16 flex items-center flex-row justify-between w-full">
                        <div className="text-white text-xl font-semibold ml-24">
                          {Name}
                        </div>
                        <div className="flex flex-row mr-16">
                          <div className="text-white text-xl mx-2">
                            Powered by
                          </div>
                          <div className="text-white underline text-xl">
                            LEGIS
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}

                {/* website 2 ends here  */}
              </div>
            </div>
          ) : (
            <div className="mockup-phone">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard phone-2">
                  <div className="bg-slate-500 h-6"></div>
                  <div className="bg-white h-full overflow-scroll pb-8">
                    {template1 ? (
                      <div>
                        <div
                          style={{
                            backgroundImage:
                              'url("https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                            backgroundSize: "cover",
                            // width: "100px",
                          }}
                        >
                          <div className="h-[400px]">
                            <div className="h-16  flex justify-between items-center">
                              <div className="text-xl text-white font-serif ml-10">
                                {Name}
                              </div>
                              <div>
                                <GiHamburgerMenu className="translate-y-1 mr-10 fill-white" />
                              </div>
                            </div>
                            <div className="w-full h-[336px] flex flex-col justify-center items-center">
                              <div className="text-white text-4xl font-bold">
                                {Name}
                              </div>
                              <div className="text-white max-w-xs m-4">
                                {OSD}
                              </div>
                              <div className="flex flex-row text-white bg-[#ab8421] p-2 rounded-sm cursor-pointer hover:brightness-75">
                                <BsFillTelephoneFill className="fill-white translate-y-1 mx-2" />
                                Free consultation
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-2xl text-[#5c4c3a] font-serif font-bold text-center m-2">
                          Our Practice Areas
                        </div>
                        <div className="text-xs max-w-sm text-[#5c4c3a] font-thin text-center m-2">
                          No matter what your legal needs may be, our team of
                          lawyers has the expertise necessary to provide you
                          with the highest level of service.
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <div className="bg-[#ab8421] rounded-md w-[200px] h-[150px] p-2 mb-4">
                            <div className="text-white text-lg font-bold text-center mb-4">
                              {practiceArea}
                            </div>
                            <div className="text-white text-lg max-w-xs text-center">
                              {paDes1}
                            </div>
                          </div>
                          <div className="bg-[#ab8421] rounded-md w-[200px] h-[150px] p-2 mb-4">
                            <div className="text-white text-lg font-bold text-center mb-4">
                              {practiceArea1}
                            </div>
                            <div className="text-white text-lg max-w-xs text-center">
                              {paDes2}
                            </div>
                          </div>
                          <div className="bg-[#ab8421] rounded-md w-[200px] h-[150px] p-2 mb-4">
                            <div className="text-white text-lg font-bold text-center mb-4">
                              {practiceArea2}
                            </div>
                            <div className="text-white text-lg max-w-xs text-center">
                              {paDes3}
                            </div>
                          </div>
                          <div className="bg-[#ab8421] rounded-md w-[200px] h-[150px] p-2">
                            <div className="text-white text-lg font-bold text-center mb-4">
                              {practiceArea3}
                            </div>
                            <div className="text-white text-lg max-w-xs text-center mb-4">
                              {paDes4}
                            </div>
                          </div>
                        </div>
                        <div className="about bg-[#ffffff]">
                          <div className="text-2xl text-[#5c4c3a] font-serif font-bold text-center m-2">
                            Who We Are
                          </div>
                          <div className="w-fit m-4 bg-gradient-to-b from-[#f5f5f5] from-80% to-transparent">
                            <div className="p-2 max-w-sm text-xs text-black text-center bg-gradient from-black from-80% to-transparent m-2">
                              {aboutUS}
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            backgroundImage:
                              'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                            backgroundSize: "cover",
                            // width: "100px",
                          }}
                        >
                          <div className="h-[700px] flex justify-center items-center">
                            <div className="w-[350px] bg-[#eeeeee] h-[600px]">
                              <div className="text-[#5c4c3a] text-center m-2 text-2xl font-serif font-bold">
                                Contact Us Today
                              </div>
                              <div className="text-[#5c4c3a] text-center m-2 max-w-sm text-sm font-serif">
                                If you are in need of legal assistance, don't
                                hesitate to reach out to us.
                              </div>
                              <div className="h-[600px] w-full  flex flex-col border-black">
                                <div className=" border-black w-full flex flex-col justify-center items-center">
                                  <div className="text-[#5c4c3a] text-xl font-bold text-center m-4">
                                    Schedule Your Consultation
                                  </div>
                                  <div>
                                    <HiMail className="fill-black w-20 h-20" />
                                  </div>
                                  <div className="text-[#5c4c3a] text-xl font-semibold text-center m-4">
                                    Mail us at:
                                  </div>
                                  <div className="text-[#5c4c3a] text-xl font-semibold text-center">
                                    {mailid}
                                  </div>
                                </div>
                                <div className="  w-full flex justify-center items-center">
                                  <div className="  w-full flex flex-col justify-center items-center">
                                    <div className="text-[#5c4c3a] text-xl font-bold text-center m-4">
                                      Talk to an expert
                                    </div>
                                    <div>
                                      <BiPhone className="fill-black w-20 h-20" />
                                    </div>
                                    <div className="text-[#5c4c3a] text-xl font-semibold text-center m-4">
                                      Call us at:
                                    </div>
                                    <div className="text-[#5c4c3a] text-xl font-semibold text-center">
                                      +91 {phone}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="reviews bg-[#ffffff]">
                          <div className="text-2xl text-[#5c4c3a] text-center m-2 font-serif font-bold">
                            Client's Testimonials
                          </div>
                          <div className="text-[#5c4c3a] text-xs text-center">
                            We take pride in helping our clients navigate
                            complex legal matters and achieving successful
                            outcomes
                          </div>
                          <div className="h-fit border-black from-80% flex flex-col justify-center items-center">
                            <div className="w-[200px] h-fit bg-gradient-to-b from-[#f5f5f5] to-transparent m-4 flex flex-col items-center p-4 text-center text-black">
                              <GrBlockQuote className="fill-black h-14 w-14 mb-4" />
                              {review1}
                            </div>
                            <div className="w-[200px] h-fit mb-4 from-80% bg-gradient-to-b from-[#f5f5f5] to-transparent m-4 flex flex-col items-center p-4 text-center text-black">
                              <GrBlockQuote className="fill-black h-14 w-14" />
                              {review2}
                            </div>
                            <div className="w-[200px] h-fit mb-4 from-80% bg-gradient-to-b from-[#f5f5f5] to-transparent m-4 flex flex-col items-center p-4 text-center text-black">
                              <GrBlockQuote className="fill-black h-14 w-14" />
                              {review3}
                            </div>
                          </div>
                        </div>
                        <div className="footer bg-[#5c4c3a]">
                          <div className="h-16 flex flex-row justify-between w-full items-center">
                            <div className="text-xl text-white ml-10">
                              {Name}
                            </div>
                            <div className="flex flex-row justify-end w-full">
                              <div className="text-xl text-white">
                                Powered by
                              </div>
                              <div className="text-xl text-white underline ml-2 mr-6">
                                Legis
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )}
                    {template2 ? (
                      <div>
                        <div className="h-[400px]">
                          <div className="h-16  flex justify-between items-center">
                            <div className="text-xl text-black font-serif ml-10">
                              {Name}
                            </div>
                            <div>
                              <GiHamburgerMenu className="translate-y-1 mr-10 fill-black" />
                            </div>
                          </div>
                          <div
                            style={{
                              backgroundImage:
                                'url("https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGxhd3xlbnwwfDB8MHx8fDA%3D")',
                              backgroundSize: "cover",
                              // width: "100px",
                            }}
                          >
                            <div className="w-full h-[336px] flex flex-col justify-center items-center">
                              <div className="text-white text-4xl font-bold">
                                {Name}
                              </div>
                              <div className="text-white text-center max-w-xs m-4">
                                {OSD}
                              </div>
                              <div className="flex flex-row text-white bg-[#f7585a] p-2 rounded-full cursor-pointer hover:brightness-75 ">
                                {/* <BsFillTelephoneFill className="fill-white translate-y-1 mx-2" /> */}
                                Make an appointment
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              backgroundImage:
                                'url("https://images.unsplash.com/photo-1457694716743-eb419114c894?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                              backgroundSize: "cover",
                              // width: "100px",
                            }}
                          >
                            <div className="h-[400px] flex flex-col items-center">
                              <div className="text-black font-bold p-2 text-2xl text-center">
                                Why Choose Us?
                              </div>
                              <div className="bg-white bg-opacity-50 m-2 text-center p-2 rounded-lg text-black">
                                {aboutUS}
                              </div>
                            </div>
                          </div>
                          <div className="practices bg-[#f2f2f2]">
                            <div className="text-2xl text-black text-center font-bold m-2">
                              Our Legal Practice Areas
                            </div>
                            <div className="flex flex-col justify-center items-center">
                              <div className="h-[200px] w-[200px] bg-white m-2 p-2 flex flex-col items-center justify-center shadow-lg shadow-black hover:scale-[1.02] transition-all">
                                <div className="text-[#f7585a] font-bold text-xl">
                                  {practiceArea}
                                </div>
                                <div className="text-black text-center">
                                  {paDes1}
                                </div>
                              </div>
                              <div className="h-[200px] w-[200px] bg-white m-2 p-2 flex flex-col items-center justify-center shadow-lg shadow-black hover:scale-[1.02] transition-all">
                                <div className="text-[#f7585a] font-bold text-xl">
                                  {practiceArea1}
                                </div>
                                <div className="text-black text-center">
                                  {paDes2}
                                </div>
                              </div>
                              <div className="h-[200px] w-[200px] bg-white m-2 p-2 flex flex-col items-center justify-center shadow-lg shadow-black hover:scale-[1.02] transition-all">
                                <div className="text-[#f7585a] font-bold text-xl">
                                  {practiceArea2}
                                </div>
                                <div className="text-black text-center">
                                  {paDes3}
                                </div>
                              </div>
                              <div className="h-[200px] w-[200px] bg-white m-2 p-2 flex flex-col items-center justify-center shadow-lg shadow-black mb-4 hover:scale-[1.02] transition-all">
                                <div className="text-[#f7585a] font-bold text-xl">
                                  {practiceArea3}
                                </div>
                                <div className="text-black text-center">
                                  {paDes4}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="reviews bg-[#f7585a] p-6 flex items-center justify-center">
                            <div className="bg-[#f2f2f2] w-[300px] h-[300px] rounded-lg flex flex-col justify-between items-end pt-10 px-6 shadow-lg shadow-black">
                              <div className="carousel w-full ">
                                <div
                                  id="item1"
                                  className="carousel-item w-full"
                                >
                                  <div className="text-black text-center text-xl m-4">
                                    "{review1}"
                                  </div>
                                </div>
                                <div
                                  id="item2"
                                  className="carousel-item w-full"
                                >
                                  <div className="text-black text-center text-xl m-4">
                                    "{review2}"
                                  </div>
                                </div>
                                <div
                                  id="item3"
                                  className="carousel-item w-full"
                                >
                                  <div className="text-black text-center text-xl m-4">
                                    "{review3}"
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-center w-full py-2 gap-2">
                                <a href="#item1" className="btn btn-xs">
                                  1
                                </a>
                                <a href="#item2" className="btn btn-xs">
                                  2
                                </a>
                                <a href="#item3" className="btn btn-xs">
                                  3
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="contact"
                            style={{
                              backgroundImage:
                                'url("https://images.unsplash.com/photo-1454923634634-bd1614719a7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                              backgroundSize: "cover",

                              // width: "100px",
                            }}
                          >
                            <div className="h-[400px]">
                              <div className="text-2xl text-black text-center font-bold flex flex-col items-center justify-center">
                                <div className="bg-white w-fit m-2 bg-opacity-75 p-2 rounded-lg shadow-lg shadow-black">
                                  Free Legal Consultation
                                </div>
                                <div className="bg-white bg-opacity-75 w-[350px] h-[300px] rounded-lg shadow-lg shadow-black flex flex-col items-center">
                                  <input
                                    type="text"
                                    className="bg-white border border-black rounded-lg m-2 font-thin text-sm w-[300px] p-2"
                                    placeholder="enter name"
                                  />
                                  <input
                                    type="text"
                                    className="bg-white border border-black rounded-lg m-2 font-thin text-sm w-[300px] p-2"
                                    placeholder="enter mail"
                                  />
                                  <input
                                    type="text"
                                    className="bg-white border border-black rounded-lg m-2 font-thin text-sm w-[300px] p-2"
                                    placeholder="subject of the mail"
                                  />
                                  <input
                                    type="text"
                                    className="bg-white border border-black rounded-lg m-2 font-thin text-sm w-[300px] p-2 py-6"
                                    placeholder="content of the mail"
                                  />
                                  <div className="bg-[#f7585a] p-2 m-2 rounded-full text-sm font-semibold px-4 hover:brightness-75 w-fit cursor-pointer">
                                    Send Message
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#f7585a] h-16 flex items-center pb-4">
                            <div className="text-white text-xl ml-10">
                              {Name}
                            </div>
                            <div className="flex justify-end w-full ">
                              <div className="text-white text-xl ml-10">
                                Powered by
                              </div>
                              <div className="text-white text-xl underline ml-2 mr-10">
                                Legis
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className=" w-96 h-[869px]">
          <div className="h-[820px] overflow-scroll pr-4 flex flex-col">
            <div className="text-white text-xl text-center px-2 pt-4 pb-0 flex items-center justify-center">
              Hero
            </div>
            <div className="divider"></div>
            <div className="text-white mx-3">Name:</div>
            <input
              className="p-2 m-2 rounded-md border border-black text-white"
              onChange={(e) => setName(e.target.value)}
              value={Name}
            />
            <div className="text-white mx-3">One sentence description:</div>
            <input
              className="p-2 m-2 rounded-md border border-black text-white"
              onChange={(e) => setOSD(e.target.value)}
              value={OSD}
            />
            <div className="divider"></div>
            <div className="text-white text-xl text-center px-2 pb-0 flex items-center justify-center">
              Practices
            </div>
            <div className="divider"></div>
            <div className="text-white mx-3">Practice:</div>
            <input
              className="p-2 m-2 rounded-md border border-black text-white"
              onChange={(e) => setpracticeArea(e.target.value)}
              value={practiceArea}
            />
            <div className="text-white mx-3">Description 1:</div>
            <input
              className="p-2 m-2 rounded-md border border-black text-white"
              onChange={(e) => setpaDes1(e.target.value)}
              placeholder="write about your practice"
            />
            <div className="text-white mx-3">Sub practice area 1:</div>
            <input
              className="p-2 m-2 rounded-md border border-black text-white"
              onChange={(e) => setpracticeArea1(e.target.value)}
              value={practiceArea1}
            />
            <div className="text-white mx-3">Description 2:</div>
            <input
              className="p-2 m-2 rounded-md border border-black text-white"
              onChange={(e) => setpaDes2(e.target.value)}
              placeholder="write about your practice"
            />
            <div className="text-white mx-3">Sub practice area 2:</div>
            <input
              className="p-2 m-2 rounded-md border border-black text-white"
              onChange={(e) => setpracticeArea2(e.target.value)}
              value={practiceArea2}
            />
            <div className="text-white mx-3">Description 3:</div>
            <input
              className="p-2 m-2 rounded-md border border-black text-white"
              onChange={(e) => setpaDes3(e.target.value)}
              placeholder="write about your practice"
            />
            <div className="text-white mx-3">Sub practice area 3:</div>
            <input
              className="p-2 m-2 rounded-md border border-black text-white"
              onChange={(e) => setpracticeArea3(e.target.value)}
              value={practiceArea3}
            />
            <div className="text-white mx-3">Description 4:</div>
            <input
              className="p-2 m-2 rounded-md border border-black text-white"
              onChange={(e) => setpaDes4(e.target.value)}
              placeholder="write about your practice"
              value={paDes4}
            />
            <div className="divider"></div>

            <div className="text-white text-xl text-center px-2 pb-0 flex items-center justify-center">
              About
            </div>
            <div className="divider"></div>
            <div className="text-white mx-3">About:</div>
            <textarea
              rows={10}
              className="p-2 m-2 resize-y rows-8   rounded-md border border-black text-white"
              onChange={(e) => setaboutUS(e.target.value)}
              value={aboutUS}
            />
            <div className="divider"></div>

            <div className="text-white text-xl text-center px-2 pt-2 pb-0 flex items-center justify-center">
              Reviews
            </div>
            <div className="divider"></div>
            <div className="text-white mx-3">Review 1:</div>
            <input
              className="p-2 m-2 rounded-md border border-black text-white"
              onChange={(e) => setReview1(e.target.value)}
              value={review1}
            />
            <div className="text-white mx-3">Review 2:</div>
            <input
              className="p-2 m-2 rounded-md border border-black text-white"
              onChange={(e) => setReview2(e.target.value)}
              value={review2}
            />
            <div className="text-white mx-3">Review 3:</div>
            <input
              className="p-2 m-2 rounded-md border border-black text-white"
              onChange={(e) => setReview3(e.target.value)}
              value={review3}
            />
          </div>
          <div className="h-12 pr-4 flex flex-row">
            <div className="w-1/2 px-2 h-full">
              <div
                onClick={handleForm}
                className="bg-[#298a87] p-2 text-center hover:brightness-75 cursor-pointer rounded-xl text-white text-xl font-semibold"
              >
                Update
              </div>
            </div>
            <div className="w-1/2 px-2 h-full">
              <div className="bg-[white] p-2 text-center hover:brightness-75 cursor-pointer  rounded-xl text-black text-xl font-semibold">
                Back
              </div>
            </div>
          </div>
          {/* <input
            onChange={(e) => setName(e.target.value)}
            placeholder="write for Name"
            value={Name}
          />
          <button
            onClick={handleForm}
            className="p-2 bg-slate-600 rounded-full ml-4 hover:brightness-50 transition-all"
          >
            Update
          </button> */}
        </div>
      </div>
      {/* <div className="border">
        <details className="dropdown p-4">
          <summary className="m-4 btn bg-[#298a87] text-white">View</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a onClick={() => setWOP(true)}>Web</a>
            </li>
            <li>
              <a onClick={() => setWOP(false)}>Mobile</a>
            </li>
          </ul>
        </details>
      </div>
      {wop ? (
        <div className="mockup-browser border bg-base-300 w-4/5">
          <div className="mockup-browser-toolbar">
            <div className="input">
              https://legis.com/{user.uid}/{pName}
            </div>
          </div>
          <div className="maindiv h-[600px] overflow-scroll">
            <div
              className="hero h-[400px]"
              style={{
                backgroundImage: "url(../../assets/heroimg.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">{Name}</h1>
                  <p className="mb-5">{OSD}</p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <div
                className="hero h-[400px]"
                style={{
                  backgroundImage: "../../assets/heroimg.jpg",
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{Name}</h1>
                    <p className="mb-5">{OSD}</p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}

      {/* <input
        onChange={(e) => setpName(e.target.value)}
        placeholder="write for pName"
      />
      <button
        onClick={handleForm}
        className="p-2 bg-slate-600 rounded-full ml-4 hover:brightness-50 transition-all"
      >
        Update
      </button> */}
    </div>
  );
}
