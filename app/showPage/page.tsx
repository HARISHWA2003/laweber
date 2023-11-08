"use client";
import Image from "next/image";
import React, { useState } from "react";
import ladyjustice from "../assets/ladyjustice.png";
import { GiHamburgerMenu } from "react-icons/gi";
import about from "../assets/about.jpg";
import { VscDebugBreakpointData } from "react-icons/vsc";
const page = () => {
  return (
    <div>
      <div className="navbar md:min-w-full h-24 bg-gradient-to-b from-amber-100 to-amber-50 justify-between">
        <div className="btn btn-ghost font-serif text-black text-xl">Legis</div>
        <div className="drawer flex justify-end sm:hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-ghost"
            >
              <GiHamburgerMenu className="fill-black" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-white font-mono">
              {/* Sidebar content here */}
              <li>
                <a href="#about" className="text-xl">
                  about
                </a>
              </li>
              <li>
                <a href="#practice" className="text-xl">
                  practices
                </a>
              </li>
              <li>
                <a href="#contact" className="text-xl">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-0 sm:w-fit">
          <a
            href="#about"
            className="btn btn-ghost font-mono text-black text-sm sm:text-lg mx-0 sm:mx-4"
          >
            about
          </a>
          <a
            href="#practice"
            className="btn btn-ghost font-mono text-black text-sm sm:text-lg mx-0 sm:mx-4"
          >
            practices
          </a>
          <a
            href="#contact"
            className="btn btn-ghost font-mono text-black text-sm sm:text-lg mx-0 sm:mx-4"
          >
            contact
          </a>
        </div>
      </div>
      <div className="h-full bg-amber-50">
        <div className="flex flex-row justify-between items-center h-[600px]">
          <div className="w-full justify-center flex flex-col items-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-black">
              HARISHWA
            </h1>
            <p className="py-6 text-black font-serif text-lg sm:text-2xl">
              I am the best lawyer
            </p>
            <button className="btn bg-[#4A0404] font-bold border-0 w-36 text-white">
              contact now
            </button>
          </div>
          <div className="w-0 sm:w-full flex items-center justify-center">
            <Image
              src={ladyjustice}
              height={600}
              alt="Picture of the loading"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div
        id="practice"
        className="h-fit bg-slate-950 border-t-4 border-[#4A0404]"
      >
        <div className="text-amber-100 underline text-xl sm:text-5xl font-bold font-mono p-4 sm:p-10">
          PRACTICES:
        </div>
        <div className="text-white text-xl p-4 flex flex-row sm:p-10">
          <VscDebugBreakpointData className="fill-amber-100 translate-y-1 mr-2" />
          Practice1
        </div>
        <div className="text-white text-xl p-4 flex flex-row sm:p-10">
          <VscDebugBreakpointData className="fill-amber-100 translate-y-1 mr-2" />
          Practice1
        </div>
        <div className="text-white text-xl p-4 flex flex-row sm:p-10">
          <VscDebugBreakpointData className="fill-amber-100 translate-y-1 mr-2" />
          Practice1
        </div>
        <div className="text-white text-xl p-4 flex flex-row sm:p-10">
          <VscDebugBreakpointData className="fill-amber-100 translate-y-1 mr-2" />
          Practice1
        </div>
      </div>
      <div
        id="about"
        className="bg-amber-50 p-10 justify-center items-center flex flex-col"
      >
        <div className="text-black text-2xl font-bold sm:text-6xl mb-4">
          ABOUT
        </div>
        <div className="sm:text-3xl sm:p-10 text-center">
          <p>
            At our law firm, what sets us apart is our unwavering commitment to
            hard work. We believe in going the extra mile and putting in the
            extra effort to achieve the best results for our clients.
          </p>
          <p>
            We're best represented by one word: "Gritty." We fearlessly tackle
            even the toughest legal challenges, rolling up our sleeves to ensure
            our clients receive the dedicated representation they deserve.
          </p>
          <p>
            Our core values are built on a foundation of loyalty and trust.
            Loyalty to our clients, standing with them throughout their legal
            journey, and trust in our expertise to navigate complex legal
            matters effectively.
          </p>
          <p>
            With a remarkable win rate of approximately 96%, our track record
            speaks volumes about our expertise. We've earned a reputation as the
            best in the country, and we take pride in consistently delivering
            exceptional results.
          </p>
        </div>
      </div>
      <div id="review" className="bg-slate-950 p-10">
        <div className="text-5xl text-white font-mono underline mb-4">
          REVIEWS:
        </div>
        <div className="hidden sm:h-full sm:flex flex-row justify-between">
          <div className="bg-white opacity-85 p-4 rounded-md max-w-lg hover:scale-105 transition-all">
            <div className="text-black text-lg font-mono mb-4 font-semibold underline">
              Review 1:
            </div>
            <div className="text-black">
              very good lawyer
              ksdklasnnslkfnaknfklsndkasndnalfklasanlnkfnkajfkojfklhaskfh
              hdjkfsk dfjkoskjfkshfhdjkgghokgjkadngkdnja
            </div>
          </div>
          <div className="bg-white opacity-85 p-4 rounded-md max-w-lg hover:scale-105 transition-all">
            <div className="text-black text-lg font-mono mb-4 font-semibold underline">
              Review 2:
            </div>
            <div className="text-black">
              very good lawyer
              ksdklasnnslkfnaknfklsndkasndnalfklasanlnkfnkajfkojfklhaskfh
              hdjkfsk dfjkoskjfkshfhdjkgghokgjkadngkdnja
            </div>
          </div>
          <div className="bg-white opacity-85 p-4 rounded-md max-w-lg hover:scale-105 transition-all">
            <div className="text-black text-lg font-mono mb-4 font-semibold underline">
              Review 3:
            </div>
            <div className="text-black">
              very good lawyer
              ksdklasnnslkfnaknfklsndkasndnalfklasanlnkfnkajfkojfklhaskfh
              hdjkfsk dfjkoskjfkshfhdjkgghokgjkadngkdnja
            </div>
          </div>
        </div>
        <div className=" sm:hidden flex flex-col justify-between">
          <div className="bg-white mb-4 opacity-85 p-4 rounded-md max-w-lg hover:scale-105 transition-all">
            <div className="text-black text-lg font-mono mb-4 font-semibold underline">
              Review 1:
            </div>
            <div className="text-black">
              very good lawyer
              ksdklasnnslkfnaknfklsndkasndnalfklasanlnkfnkajfkojfklhaskfh
              hdjkfsk dfjkoskjfkshfhdjkgghokgjkadngkdnja
            </div>
          </div>
          <div className="bg-white mb-4 opacity-85 p-4 rounded-md max-w-lg hover:scale-105 transition-all">
            <div className="text-black text-lg font-mono mb-4 font-semibold underline">
              Review 2:
            </div>
            <div className="text-black">
              very good lawyer
              ksdklasnnslkfnaknfklsndkasndnalfklasanlnkfnkajfkojfklhaskfh
              hdjkfsk dfjkoskjfkshfhdjkgghokgjkadngkdnja
            </div>
          </div>
          <div className="bg-white mb-4 opacity-85 p-4 rounded-md max-w-lg hover:scale-105 transition-all">
            <div className="text-black text-lg font-mono mb-4 font-semibold underline">
              Review 3:
            </div>
            <div className="text-black">
              very good lawyer
              ksdklasnnslkfnaknfklsndkasndnalfklasanlnkfnkajfkojfklhaskfh
              hdjkfsk dfjkoskjfkshfhdjkgghokgjkadngkdnja
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="">
        contact page
        <form action="https://api.web3forms.com/submit" method="POST" id="form">
          <fieldset>
            <legend>Contact Form</legend>
            <input
              type="hidden"
              name="access_key"
              value="2ffeab53-ff42-4623-a724-241d6ac3e60b"
            />
            <input
              type="hidden"
              name="subject"
              value="New Submission from Web3Forms"
            />
            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            />
            <input
              type="checkbox"
              name="botcheck"
              id=""
              // style="display: none"
            />
            <div>
              <label>Full Name</label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                required
              />
              <br />
              <br />
            </div>
            <div>
              <label>Email Address</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@company.com"
                required
              />
              <br />
              <br />
            </div>
            <div>
              <label>Phone Number</label>
              <br />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+1 (555) 1234-567"
                required
              />
              <br />
              <br />
            </div>
            <div>
              <label>Your Message</label>
              <br />
              <textarea
                // rows="5"
                name="message"
                id="message"
                placeholder="Your Message"
                required
              ></textarea>
              <br />
              <br />
            </div>

            <button type="submit">Send Message</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default page;
