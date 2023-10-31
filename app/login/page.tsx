"use client";
import React from "react";
import signIn from "../firebase/auth/signIn";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { GoLaw } from "react-icons/go";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/dashboard");
  };
  return (
    <div className="flex flex-col h-full justify-center items-center align-middle">
      <div className="text-7xl text-[white] font-serif justify-center items-center font-semibold tracking-wider m-4 flex flex-row">
        {/* <GoLaw className="m-4" /> */}
        Legis
      </div>
      <form
        onSubmit={handleForm}
        className="flex flex-col h-3/6 w-3/12 bg-[#2c3032] shadow-black justify-start items-start rounded-2xl shadow-xl"
      >
        <div className="text-4xl font-semibold text-white m-4 mt-8">Login</div>
        <div className="text-white m-4 mt-2 text-lg">Your email</div>
        <div className="flex flex-col w-full justify-center items-center">
          <input
            type="email"
            className="bg-white w-11/12 h-10 border-black rounded-md px-4 mx-4 text-black"
            placeholder="   email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="text-white m-4 text-lg">Your password</div>
        <div className="flex flex-col w-full justify-center items-center">
          <input
            type="password"
            className="bg-white w-11/12 h-10 border-black rounded-md px-4 mx-4"
            placeholder="   password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button
            type="submit"
            className="m-4 mt-8 w-10/12 bg-white p-2 rounded-lg text-[#343434] font-semibold text-2xl hover:scale-105 transition-all"
          >
            Login
          </button>
        </div>
        <div className="flex flex-row">
          <div className="mx-6 mt-2 text-white text-lg">
            Dont have an account?
          </div>
          <Link
            href="/signup"
            className="-m-2 mt-2 text-blue-500 text-lg hover:text-blue-600 hover:underline hover:scale-105 hover:cursor-pointer transition-all"
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Page;
