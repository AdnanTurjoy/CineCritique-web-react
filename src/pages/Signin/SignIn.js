import axios from "axios";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { api } from "../../configs";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { email, password };
    console.log(data);
    axios
      .post(api + "user/signin", data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("userToken", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  };
  return (
    <section className="bg-gray-50">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700  sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900  md:text-2xl">
              Sign In
            </h1>
            {error && (
              <h1
                className=" text-red-400
            "
              >
                {error}
              </h1>
            )}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  for="email"
                  className="mb-2 block text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:ring-primary-600 focus:border-primary-600 text-gray-90 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 sm:text-sm"
                  placeholder="name@demo.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900  sm:text-sm"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="hover:bg-primary-700 focus:ring-primary-300 w-full  rounded-lg
                 bg-gray-900 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
              >
                Sign In
              </button>
              <p className="text-sm font-light text-gray-500">
                need new account{" "}
                <Link
                  to={"/signup"}
                  className="text-primary-600 font-medium hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
