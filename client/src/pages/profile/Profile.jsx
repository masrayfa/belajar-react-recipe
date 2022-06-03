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
    <div className="xl:container h-screen m-auto flex">
      <div className="relative h-full ml-auto">
        <section className="py-20 bg-red-600 ml-3 mr-3 mt-5 max-w-xs rounded-xl">
          <div className="container max-w-xs px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-center text-xl text-white font-bold md:text-4xl">
                {user.fullname}
              </h2>
              <p className="text-white lg:w-8/12 lg:mx-auto">
                @{user.username}
              </p>
            </div>
            <div className="grid ">
              <div className="space-y-4 text-center">
                <img
                  className="w-64 h-64 mx-auto object-cover rounded-full md:w-40 md:h-40 lg:w-64 lg:h-64"
                  src={PF + "default_user.webp"}
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                ></img>
                <button className="w-36 px-2 py- rounded-3xl items-center bg-white transition hover:bg-white focus:bg-white active:bg-white">
                  <span className="font-medium text-black text-lg">
                    Upload Photo
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
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
                  placeholder={user.fullname}
                  className="h-8 pt-0 ml-3 px-3 bg-red-600 text-white placeholder-white"
                />
              </div>
              <div className="h-8 aspect-[1/10]">
                <input
                  type="text"
                  placeholder={user.username}
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
    </div>
  );
};

export default Profile;
