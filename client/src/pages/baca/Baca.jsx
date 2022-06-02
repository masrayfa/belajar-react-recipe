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
import './baca.css'

const Home = (props) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user } = useContext(AuthContext);

  const [showDetail, setShowDetail] = useRecoilState(detailState);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [rowRecipes, setRowRecipes] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(
        "http://localhost:7000/api/posts/feed/all"
      );

      // .then((response) => {
      //   // console.log(response.data[0].tools);
      // });
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
          <div className="font-bowlby text-3xl text-pink font-black">COOKEDGE</div>
          <div className="justify-center space-x-5 items-center">
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
              <div className="bg-pink text-md py-1 px-4 text-white font-semibold">
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
        <div>
          <img src={PF + "disney.jpg"} alt="disney" className="w-full h-80 object-cover absolute"/>
        </div>
        <div className="relative z-10 bg-pink w-52 mx-20 p-3 top-52">
          <p className="text-xl text-white font-bold">Nasi Uduk</p>
          <p className="text-md text-white ">Nama</p>
          <p className="text-sm text-white ">@username</p>
        </div>
        <div className="bg-white relative z-10 top-56 mx-52 border-2">
          <p className="p-6">Bahan :</p>
          <p className="p-6">Cara Membuat :</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
