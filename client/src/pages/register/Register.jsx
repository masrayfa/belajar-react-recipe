import axios from "axios";
import React, { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const username = useRef();
  const fullname = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value != password.current.value) {
      passwordAgain.current.setCustomValidity("Password don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        fullname: fullname.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        console.log("user has been created");
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log(user);
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-brown">
      <div className="w-full space-y-8">
        <div>
          <h1 className="font-bowlby text-4xl text-pink">
            Cookedge
          </h1>
          <h2 className="mt-10 text-center text-md text-black font-bold">
            Sign up to your account
          </h2>
        </div>
        <div className="w- full flex justify-center">
        <form action="#" className="space-y-2" onSubmit={handleClick}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-d shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Fullname
              </label>
              <input
                type="text"
                autoComplete="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-200 focus:border-red-200 focus:z-10 sm:text-sm"
                placeholder="Fullname"
                ref={fullname}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Username
              </label>
              <input
                type="text"
                autoComplete="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-red-200 focus:border-red-200 focus:z-10 sm:text-sm"
                placeholder="Username"
                ref={username}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email-address"
                name="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-red-200 focus:border-red-200 focus:z-10 sm:text-sm"
                placeholder="Email address"
                ref={email}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-red-200 focus:border-red-200 focus:z-10 sm:text-sm"
                placeholder="Password"
                minLength={6}
                ref={password}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password Again
              </label>
              <input
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-200 focus:border-red-200 focus:z-10 sm:text-sm"
                placeholder="Password Again"
                minLength={6}
                ref={passwordAgain}
              />
            </div>
            <div className="flex items-center justify-between text-sm space-x-10">
              <div className="mt-8 flex items-center text-sm">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm mt-8">
                <a
                  href="#"
                  className="text-sm text-pink hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Create new account
            </button>
            <Link to="/login">
              <div className=" transition justify-center mt-2 items-center mx-auto flex cursor-pointer hover:underline">
                <span className="text-sm transition text-pink text-center items-center justify-center ">
                  Log in
                </span>
              </div>
            </Link>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
