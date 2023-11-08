"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import ppp from "../app/assets/ppp.jpg";
import ppp2 from "../app/assets/ppp2.jpg";
import ppp3 from "../app/assets/ppp3.jpg";
import ppp4 from "../app/assets/ppp4.jpg";
export default function Home() {
  return (
    <main>
      <div className="h-20 w-full flex justify-between">
        <div className="flex items-center">
          <div className="text-white font-serif text-4xl font-bold px-10 btn btn-ghost hover:-rotate-3">
            Legis
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-white font-mono text-xl px-4 btn btn-ghost ">
            Docs
          </div>
          <div className="text-white font-mono text-xl px-4 btn btn-ghost">
            Contact Us
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-5 p-5 gap-4 z-10">
        <div className="flex flex-col h-96 col-span-3 rounded-lg z-10">
          <div className=" h-4/5">
            <div className="text-white font-serif leading-relaxed text-6xl p-4 font-bold">
              Elevate Your Legal Practice with Stunning Websites
            </div>
            <div className="text-white font-serif text-2xl ml-4 p-4 font-bold">
              Web Design Tailored for Attorneys, by Attorneys
            </div>
          </div>
          <div className="flex h-1/5 align-middle items-center">
            <Link
              href="/login"
              className="btn-lg text-2xl font-semibold text-white tracking-wide bg-[#298a87] hover:shadow-md hover:shadow-black flex w-1/5 font-mono justify-center items-center rounded-3xl ml-10 hover:scale-105 hover:font-bold transition-all"
            >
              Login
              <FiArrowRight className="ml-2 h-7 w-7 hover:scale-105 transition-all" />
            </Link>
          </div>
        </div>
        <div className="col-span-2 ">
          <Image
            src={ppp4}
            // height={400}
            alt="Picture of the loading"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 p-5 gap-10 z-10">
        <div className="shadow-black shadow-md  rounded-lg z-10 hover:shadow-lg hover:shadow-black hover:scale-[1.03] transition h-[350px] w-[600px] flex justify-center items-center font-bold text-5xl text-slate-600">
          <Image
            src={ppp}
            width={600}
            height={350}
            alt="Picture of the loading"
            className="rounded-lg"
          />
        </div>
        <div className="shadow-black h-[350px] w-[600px] shadow-md rounded-lg z-10 hover:shadow-lg hover:shadow-black hover:scale-[1.03] transition flex justify-center items-center font-bold text-5xl text-slate-600">
          <Image
            src={ppp3}
            width={600}
            height={350}
            alt="Picture of the loading"
            className="rounded-lg"
          />
        </div>
        <div className="shadow-black h-[350px] w-[600px]  shadow-md rounded-lg z-10 hover:shadow-lg hover:shadow-black hover:scale-[1.03] transition flex justify-center items-center font-bold text-5xl text-slate-600">
          <Image
            src={ppp2}
            width={600}
            height={350}
            alt="Picture of the loading"
            className="rounded-lg"
          />
        </div>
      </div>
      {/* <div className="absolute flex w-full justify-center">
        <h1 className="text-[12rem] bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-transparent opacity-60 select-none">
          LAWYER | ATTORNEY
        </h1>
      </div> */}
    </main>
  );
}
