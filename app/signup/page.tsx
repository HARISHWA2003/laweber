"use client";
import React from "react";
import signUp from "../firebase/auth/signUp";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GoLaw } from "react-icons/go";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/dashboard");
  };
  return (
    <div className="flex flex-col h-full justify-center items-center align-middle">
      <div className="text-7xl text-[#343434] items-center font-semibold tracking-wider m-4 flex flex-row">
        <GoLaw className="m-4" />
        LaWeber
      </div>
      <form
        onSubmit={handleForm}
        className="flex flex-col h-3/6 w-3/12 bg-[#343434] justify-start items-start rounded-md shadow-xl"
      >
        <div className="text-4xl font-semibold text-white m-4 mt-10">
          Sign Up
        </div>
        <div className="text-white m-4 mt-2 text-lg">Your email</div>
        <div className="flex flex-col w-full justify-center items-center">
          <input
            type="text"
            className="bg-white w-11/12 h-10 border-black rounded-md px-4 mx-4 text-black"
            placeholder="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="text-white m-4 text-lg">Your password</div>
        <div className="flex flex-col w-full justify-center items-center">
          <input
            type="password"
            className="bg-white w-11/12 h-10 border-black rounded-md px-4 mx-4"
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button
            type="submit"
            className="m-4 mt-8 w-10/12 bg-amber-50 p-2 rounded-lg text-[#343434] font-semibold text-2xl hover:scale-105 transition-all"
          >
            Sign Up
          </button>
        </div>
        <div className="flex flex-row">
          <div className="mx-6 mt-2 text-white text-lg">
            Already have an account?
          </div>
          <Link
            href="/login"
            className="-m-2 mt-2 text-blue-500 text-lg hover:text-blue-600 hover:underline hover:scale-105 hover:cursor-pointer transition-all"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Page;
