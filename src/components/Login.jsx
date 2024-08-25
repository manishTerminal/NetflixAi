import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <div>
        <Header />
        <div className="relative h-full">
          <img
            className="h-screen w-screen "
            src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg"
          />
        </div>

        <form className="absolute py-6 bg-opacity-80 bg-black text-white w-4/5 sm:w-4/5 lg:w-1/3 top-36 mx-auto left-0 right-0 rounded-xl flex justify-center items-center z-20">
          <div className="w-4/5">
            <h2 className="py-4 mt-4 mb-2 font-bold text-3xl">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h2>
            {!isSignInForm && (
              <input
                className="p-4 my-2 w-full rounded-md bg-black bg-opacity-60 border border-gray-200 "
                type="text"
                placeholder="Full name"
              />
            )}
            <input
              className="p-4 my-2 w-full rounded-md bg-black bg-opacity-60 border border-gray-200 "
              type="text"
              placeholder="Email or mobile number"
            />
            <br />
            <input
              className="p-4 my-2 w-full rounded-md bg-black bg-opacity-60 border border-gray-200"
              type="password"
              placeholder="Password"
            />
            <br />
            <button className="p-2 my-6 w-full bg-[#E50914] rounded-md font-medium">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4 mb-10">
              {isSignInForm ? "New to Netflix? " : "Already Registered? "}
              <span
                onClick={handleForm}
                className="font-semibold cursor-pointer"
              >
                {isSignInForm ? "Sign up now" : "Sign In now"}
              </span>
            </p>
          </div>
        </form>
      </div>
      <footer className="h-72 bg-black flex text-white justify-center items-end">
        <p className="mb-4">Build with 💌 by Manish </p>
      </footer>
    </>
  );
}

export default Login;
