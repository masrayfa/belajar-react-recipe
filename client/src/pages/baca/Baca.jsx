import React, { useContext, useEffect, useState, useRef } from "react";
import { Posts } from "../../dummyData";
import { FiSearch } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";
import { Link, useParams } from "react-router-dom";
import { useRecoilState, atom, useRecoilValue } from "recoil";
import { detailState } from "../../atoms/detailAtom";
import axios from "axios";
import { modalState } from "../../atoms/modalAtom";
import Modal from "../../components/modal/Modal";
import { CircularProgress } from "@mui/material";
import "./baca.css";

const Home = (props) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user } = useContext(AuthContext);
  let params = useParams();

  const [showDetail, setShowDetail] = useRecoilState(detailState);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [rowRecipes, setRowRecipes] = useState(null);
  const [recipeDetail, setRecipeDetail] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(
        `http://localhost:7000/api/posts/feed/${params.id}`
      );

      // .then((response) => {
      //   // console.log(response.data[0].tools);
      // });
      // console.log("Row Recipes: " + rowRecipes);
      // setRowRecipes(response.data);
      setRecipeDetail(response.data);
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
      {recipeDetail ? (
        <main>
          <div>
            <img
              src={
                recipeDetail.img
                  ? PF + recipeDetail.img
                  : PF + "default_food_img.webp"
              }
              alt="disney"
              className="w-full h-80 object-cover absolute"
            />
          </div>
          <div className="relative z-10 bg-pink w-52 mx-20 p-3 top-52">
            <p className="text-xl text-white font-bold">{recipeDetail.title}</p>
            <p className="textEllipsis text-md text-white ">
              {recipeDetail.userId}
            </p>
            <p className="textEllipsis text-sm text-white ">
              @{recipeDetail.userId}
            </p>
          </div>
          <div className="bg-white relative z-10 top-56 mx-52 border-2">
            <p className="p-6">Bahan : {recipeDetail.ingredients}</p>
            <p className="p-6">Cara Membuat : {recipeDetail.steps}</p>
          </div>
        </main>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Home;
