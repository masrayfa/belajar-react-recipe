import React, { useContext, useEffect, useState, useRef } from "react";
import { Posts } from "../../dummyData";
import { FiSearch } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useRecoilState, atom, useRecoilValue } from "recoil";
import { detailState } from "../../atoms/detailAtom";
import axios from "axios";
import { modalState } from "../../atoms/modalAtom";
import Modal from "../../components/modal/Modal";
import { CircularProgress } from "@mui/material";
import "./home.css";
import { useParams } from "react-router-dom";

const Home = (props) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user } = useContext(AuthContext);
  let params = useParams();

  const [showDetail, setShowDetail] = useRecoilState(detailState);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [rowRecipes, setRowRecipes] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(
        "http://localhost:7000/api/posts/feed/all"
      );

      console.log("Row Recipes: " + rowRecipes);
      setRowRecipes(response.data);
      console.log(response.data);
    };

    fetchAPI();
  }, []);

  const categoriesIcon = 4;

  return (
    <div className="bg-cream h-screen w-screen overflow-visible">
      <header className="flex justify-between items-center py-3 px-20 border-b-2 bg-white">
        <Link to="/">
          <div className="font-bowlby text-3xl text-pink font-black">
            COOKEDGE
          </div>
        </Link>
        <div className="justify-center space-x-5 items-center flex">
          {user ? (
            <button
              className="text-md py-1 px-4 font-semibold"
              onClick={() => {
                return setShowModal(true);
              }}
            >
              Add Recipe
            </button>
          ) : null}

          {user ? (
            <button className="text-md py-1 px-4 font-semibold rounded-full border-2 border-pink">
              Log Out
            </button>
          ) : (
            <Link to="/register">
              <button className="text-md py-1 px-4 font-semibold rounded-full border-2 border-pink">
                Sign Up
              </button>
            </Link>
          )}

          {user ? (
            <div className="bg-pink text-md py-1 px-4 text-white font-semibold rounded-full">
              {user.username}
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-pink text-md py-1 px-4 text-white font-semibold rounded-full border-2 border-pink">
                Log In
              </button>
            </Link>
          )}
        </div>
      </header>

      <main>
        <div className="bg-pink my-10 rounded-lg flex w-[40vw] mx-auto h-14">
          <form className="flex ml-6 items-center ">
            <FiSearch className="text-white"></FiSearch>
            <input
              className="text-white bg-transparent focus:outline-none placeholder:text-white ml-8 "
              type="text"
              placeholder="Search"
            />
          </form>
        </div>

        <p className="flex justify-center text-md">Categories</p>
        <div className="flex mx-auto justify-center mt-2 mb-10">
          <div className="flex-col mr-11 items-center text-sm">
            <div className="bg-white object-cover rounded-full p-1 m-1">
              <img src={PF + "indonesia-flag.png"}></img>
            </div>
            <p>Indonesia</p>
          </div>
          <div className="flex-col mr-11 flex items-center text-sm">
            <div className="bg-white object-cover rounded-full p-1 m-1">
              <img src={PF + "usa-flag.png"}></img>
            </div>
            <p>Western</p>
          </div>
          <div className="flex-col mr-11 items-center flex text-sm">
            <div className="bg-white object-cover rounded-full p-1 m-1">
              <img src={PF + "china-flag.png"}></img>
            </div>
            <p>China</p>
          </div>
          <div className="flex-col items-center flex text-sm">
            <div className="bg-white object-cover rounded-full p-1 m-1">
              <img src={PF + "korea-flag.png"}></img>
            </div>
            <p>Korean</p>
          </div>
        </div>

        <div className="bg-cream">
          <div className="bg-white rounded-lg mx-20 mb-10">
            <div className="px-5 py-3">
              <p>Top Picks</p>

              <div className="wrapper">
                <div className="py-2 flex justify-between">
                  {rowRecipes ? (
                    rowRecipes.map((result, index) => {
                      return (
                        <div key={result._id} className="">
                          <Link to={"/baca/" + result._id}>
                            <button>
                              <img
                                src={
                                  result.img
                                    ? PF + result.img
                                    : PF + "default_food_img.webp"
                                }
                                alt="disney"
                                className="w-44 h-44 object-cover rounded-md mr-5"
                              />
                            </button>
                          </Link>
                          <p className="text-md font-medium max-w-md ">
                            {result.title}
                          </p>
                          <p className="textEllipsis text-sm">
                            by @{result.userId}
                          </p>
                        </div>
                      );
                    })
                  ) : (
                    <CircularProgress />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg mx-20 mb-10">
            <div className="px-5 py-3">
              <p>Our recommendations</p>

              <div className="wrapper">
                <div className="py-2 flex justify-between">
                  {rowRecipes ? (
                    rowRecipes.map((result, index) => {
                      return (
                        <div key={result._id} className="">
                          <Link to={"/baca/" + result._id}>
                            <button>
                              <img
                                src={
                                  result.img
                                    ? PF + result.img
                                    : PF + "default_food_img.webp"
                                }
                                alt="disney"
                                className="w-44 h-44 object-cover rounded-md mr-5"
                              />
                            </button>
                          </Link>
                          <p className="text-md font-medium max-w-md ">
                            {result.title}
                          </p>
                          <p className="textEllipsis text-sm">
                            by @{result.userId}
                          </p>
                        </div>
                      );
                    })
                  ) : (
                    <CircularProgress />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg mx-20 mb-10">
            <div className="px-5 py-3">
              <p>Beginer recipe</p>

              <div className="wrapper">
                <div className="py-2 flex justify-between">
                  {rowRecipes ? (
                    rowRecipes.map((result, index) => {
                      return (
                        <div key={result._id} className="">
                          <Link to={"/baca/" + result._id}>
                            <button>
                              <img
                                src={
                                  result.img
                                    ? PF + result.img
                                    : PF + "default_food_img.webp"
                                }
                                alt="disney"
                                className="w-44 h-44 object-cover rounded-md mr-5"
                              />
                            </button>
                          </Link>
                          <p className="text-md font-medium max-w-md ">
                            {result.title}
                          </p>
                          <p className="textEllipsis text-sm">
                            by @{result.userId}
                          </p>
                        </div>
                      );
                    })
                  ) : (
                    <CircularProgress />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal />
      </main>
    </div>
  );
};

export default Home;
