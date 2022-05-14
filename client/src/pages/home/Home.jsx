import React from "react";
import { Posts } from "../../dummyData";
import { FiSearch } from "react-icons/fi";

const Home = (props) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const categoriesIcon = 4;
  return (
    <div>
      <header>
        <h1 className="text-[#e78ea9] text-4xl font-black m-7">Cookedge</h1>
      </header>
      <main>
        <div className="bg-[#e78ea9] rounded-lg flex w-[45vw] mx-auto h-14">
          <form className="flex ml-6 items-center">
            <FiSearch className="text-white"></FiSearch>
            <input
              className="text-white bg-transparent focus:outline-none placeholder:text-white ml-8"
              type="text"
              placeholder="Search"
            />
          </form>
        </div>
        <p className=" flex justify-center items-center my-6 text-center font-normal text-lg">
          Categories
        </p>
      </main>
    </div>
  );
};

export default Home;
