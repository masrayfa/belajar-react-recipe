import React from "react";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <body>
      <div class="xl:container h-screen m-auto flex">
        <div class="relative h-full ml-auto">
          <section class="py-20 bg-red-600 ml-3 mr-3 mt-5 max-w-xs rounded-xl">
            <div class="container max-w-xs px-6">
              <div class="mb-16 text-center">
                <h2 class="mb-4 text-center text-xl text-white font-bold md:text-4xl">
                  Ujang Marujang
                </h2>
                <p class="text-white lg:w-8/12 lg:mx-auto">@Ujang</p>
              </div>
              <div class="grid ">
                <div class="space-y-4 text-center">
                  <img
                    class="w-64 h-64 mx-auto object-cover rounded-full md:w-40 md:h-40 lg:w-64 lg:h-64"
                    src={PF + "default_user.webp"}
                    alt="woman"
                    loading="lazy"
                    width="640"
                    height="805"
                  ></img>
                  <button class="w-36 px-2 py- rounded-3xl items-center bg-white transition hover:bg-white focus:bg-white active:bg-white">
                    <span class="font-medium text-black text-lg">
                      Upload Photo
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="lg:p-12">
          <h1 class="mt-5 mr-3 mx-80 py-4 px-7 rounded-md bg-red-600 text-white">
            EDIT PROFILE
          </h1>
          <section class="mr-3 mx-80 px-3 bg-orange-100">
            <form action="" class="p-y-6">
              <div class="p-2 grid grid-cols-2 gap-2">
                <span class="pt-5 pl-3 flex place-items-center space-x-5 align-baseline">
                  Full Name
                </span>
                <span class="pt-5 pl-3 flex place-items-center space-x-5 align-baseline">
                  Username
                </span>
                <div class="h-8 aspect-[1/10]">
                  <input
                    type="text"
                    placeholder="Your name"
                    class="h-8 pt-0 ml-3 px-3 bg-red-600 text-white placeholder-white"
                  />
                </div>
                <div class="h-8 aspect-[1/10]">
                  <input
                    type="text"
                    placeholder="Your username"
                    class="h-8 pt-0 ml-3 px-3 bg-red-600 text-white placeholder-white"
                  />
                </div>
                <span class="pt-5 pl-3 flex place-items-center space-x-5 align-baseline ">
                  Email
                </span>
                <span class="pt-5 pl-3 flex place-items-center space-x-5 align-baseline">
                  City
                </span>
                <div class="h-8 aspect-[1/10]">
                  <input
                    type="email"
                    placeholder="Your email"
                    class="h-8 pt-0 ml-3 px-3 bg-red-600 text-white placeholder-white"
                  />
                </div>
                <div class="h-8 aspect-[1/10]">
                  <input
                    type="text"
                    placeholder="Your city"
                    class="h-8 pt-0 ml-3 px-3 bg-red-600 text-white placeholder-white"
                  />
                </div>
                <span class="pt-5 pl-3 flex place-items-center space-x-5 align-baseline">
                  Password
                </span>
                <span class="pt-5 pl-3 flex place-items-center space-x-5 align-baseline">
                  Confirm Password
                </span>
                <div class="h-8 aspect-[1/10]">
                  <input
                    type="password"
                    placeholder="Your password"
                    class="h-8 pt-0 ml-3 px-3 bg-red-600 text-white placeholder-white"
                  />
                </div>
                <div class="h-8 aspect-[1/10]">
                  <input
                    type="password"
                    placeholder="Your password"
                    class="h-8 pt-0 ml-3 px-3 bg-red-600 text-white placeholder-white"
                  />
                </div>
                <div></div>
                <div>
                  <button class="mt-8 w-28 px-2 py-1 rounded-3xl bg-red-600 transition hover:bg-red-700 focus:bg-red-700 active:bg-red-800">
                    <span class="font-semibold text-white text-lg">Save</span>
                  </button>
                  <button class="mt-8 w-28 px-2 py-1 rounded-3xl bg-white transition hover:bg-white focus:bg-white active:bg-white">
                    <span class="font-semibold text-black text-lg">Logout</span>
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </body>
  );
};

export default Profile;
