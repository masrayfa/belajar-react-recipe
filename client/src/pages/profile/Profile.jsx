import "./profile.css";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  let params = useParams();
  const { user } = useContext(AuthContext);

  const logOutHandler = () => {
    window.location.reload();
  };

  return (
    <body>
      <div className="flex space-x-none">
        <div className="relative h-full ml-56 my-10">
          <section className="py-20 bg-pink rounded-xl">
            <div className="px-10">
              <div className="mb-10 text-center">
                <h2 className="text-center text-xl text-white font-bold">
                  {user.fullname ? user.fullname : "fullname"}
                </h2>
                <p className="text-white w-1/2 mx-auto">@{user.username ? user.username : "username"}</p>
              </div>
              <div className="grid">
                <div className="space-y-8 text-center">
                  <img
                    className="w-48 h-48 mx-auto object-cover rounded-full"
                    src={PF + "default_user.webp"}
                    alt="woman"
                    loading="lazy"
                  ></img>
                  <button className="w-36 px-2 py-2 rounded-3xl items-center bg-white transition focus:bg-white active:bg-white">
                    <span className="text-black text-md">
                      Upload Photo
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="py-20 w-8/12">
          <h1 className="w-8/12 mx-10 px-8 py-4 rounded-md bg-pink text-lg text-white font-bold">
            EDIT PROFILE
          </h1>
          <section className="w-8/12 mx-10 pl-6 bg-white">
            <form action="" className="pb-6">
              <div className="p-2 grid grid-cols-2 gap-2">
                <span className="pt-5 flex place-items-center space-x-5 align-baseline">
                  Full Name
                </span>
                <span className="pt-5 flex place-items-center space-x-5 align-baseline">
                  Username
                </span>
                <div className="h-8 aspect-[1/10]">
                  <input
                    type="text"
                    placeholder={user.fullname ? user.fullname : "fullname"}
                    className="h-8 pt-0 px-3 bg-pink text-white placeholder-white"
                  />
                </div>
                <div className="h-8 aspect-[1/10]">
                  <input
                    type="text"
                    placeholder={user.username ? user.username : "username"}
                    className="h-8 pt-0 px-3 bg-pink text-white placeholder-white"
                  />
                </div>
                <span className="pt-5 flex place-items-center space-x-5 align-baseline ">
                  Email
                </span>
                <span className="pt-5 flex place-items-center space-x-5 align-baseline">
                  Confirm Email
                </span>
                <div className="h-8 aspect-[1/10]">
                  <input
                    type="email"
                    placeholder={user.email ? user.email : "fullname"}
                    className="h-8 pt-0 px-3 bg-pink text-white placeholder-white"
                  />
                </div>
                <div className="h-8 aspect-[1/10]">
                  <input
                    type="text"
                    placeholder="Your city"
                    className="h-8 pt-0 px-3 bg-pink text-white placeholder-white"
                  />
                </div>
                <span className="pt-5 flex place-items-center space-x-5 align-baseline">
                  Password
                </span>
                <span className="pt-5 flex place-items-center space-x-5 align-baseline">
                  Confirm Password
                </span>
                <div className="h-8 aspect-[1/10]">
                  <input
                    type="password"
                    placeholder="Your password"
                    className="h-8 px-3 bg-pink text-white placeholder-white"
                  />
                </div>
                <div className="h-8 aspect-[1/10]">
                  <input
                    type="password"
                    placeholder="Your password"
                    className="h-8 pt-0 px-3 bg-pink text-white placeholder-white"
                  />
                </div>
                <div></div>
                <div className="flex justify-end">
                  <button className="mt-8 mr-8 w-28 px-2 py-1 rounded-3xl bg-pink transition hover:bg-pink focus:bg-pink active:bg-pink">
                    <span className="font-bold text-white text-md">Save</span>
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>

      <div className="lg:p-12">
        <h1 className="mt-5 mr-3 mx-80 py-4 px-7 rounded-md bg-red-600 text-white">
          EDIT PROFILE
        </h1>
        <section className="mr-3 mx-80 px-3 bg-orange-100">
          <form action="" className="p-y-6">
            <div className="p-2 grid grid-cols-2 gap-2">
              <span className="pt-5 pl-3 flex place-items-center space-x-5 align-baseline">
                Full Name
              </span>
              <span className="pt-5 pl-3 flex place-items-center space-x-5 align-baseline">
                Username
              </span>
              <div className="h-8 aspect-[1/10]">
                <input
                  type="text"
                  placeholder={user.fullname ? user.fullname : "fullname"}
                  className="h-8 pt-0 ml-3 px-3 bg-red-600 text-white placeholder-white"
                />
              </div>
              <div className="h-8 aspect-[1/10]">
                <input
                  type="text"
                  placeholder={user.username ? user.username : "username"}
                  className="h-8 pt-0 ml-3 px-3 bg-red-600 text-white placeholder-white"
                />
              </div>
              <span className="pt-5 pl-3 flex place-items-center space-x-5 align-baseline ">
                Email
              </span>
              <span className="pt-5 pl-3 flex place-items-center space-x-5 align-baseline">
                City
              </span>
              <div className="h-8 aspect-[1/10]">
                <input
                  type="email"
                  placeholder={user.email}
                  className="h-8 pt-0 ml-3 px-3 bg-red-600 text-white placeholder-white"
                />
              </div>
              <div className="h-8 aspect-[1/10]">
                <input
                  type="text"
                  placeholder="Your city"
                  className="h-8 pt-0 ml-3 px-3 bg-red-600 text-white placeholder-white outline-none"
                />
              </div>
              <span className="pt-5 pl-3 flex place-items-center space-x-5 align-baseline">
                Password
              </span>
              <span className="pt-5 pl-3 flex place-items-center space-x-5 align-baseline">
                Confirm Password
              </span>
              <div className="h-8 aspect-[1/10]">
                <input
                  type="password"
                  placeholder="Your password"
                  className="h-8 pt-0 ml-3 px-3 bg-red-600 text-white placeholder-white outline-none"
                />
              </div>
              <div className="h-8 aspect-[1/10]">
                <input
                  type="password"
                  placeholder="Your password"
                  className="h-8 pt-0 ml-3 px-3 bg-red-600 text-white placeholder-white outline-none"
                />
              </div>
              <div></div>
              <div>
                <button className="mt-8 w-28 px-2 py-1 rounded-3xl bg-red-600 transition hover:bg-red-700 focus:bg-red-700 active:bg-red-800">
                  <span className="font-semibold text-white text-lg">Save</span>
                </button>
                <Link to={"/"}>
                  <button className="mt-8 w-28 px-2 py-1 rounded-3xl bg-white transition hover:bg-white focus:bg-white active:bg-white">
                    <span className="font-semibold text-black text-lg">
                      Logout
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </section>
      </div>
    </body>
  );
};

export default Profile;
