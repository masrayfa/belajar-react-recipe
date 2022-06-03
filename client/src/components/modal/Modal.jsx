import React, { useContext, useState, useRef } from "react";
import MuiModal from "@mui/material/Modal";
import { XIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { modalState } from "../../atoms/modalAtom";
import { Collapse } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./modal.css";

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);

  const { user } = useContext(AuthContext);

  const [file, setFile] = useState(null);
  const stepsForm = useRef();
  const titleForm = useRef();
  const ingredientsForm = useRef();

  const submithandler = async (e) => {
    console.log(e.target.files[0]);
    console.log(file);
  };

  const uploadHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      title: titleForm.current.value,
      steps: stepsForm.current.value,
      ingredients: ingredientsForm.current.value,
    };
    if (file) {
      const data = new FormData();
      const filename = file.name;
      data.append("file", file);
      data.append("name", filename);
      newPost.img = filename;
      console.log(newPost.img);
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.post("/posts/create", newPost);
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <MuiModal
        open={showModal}
        close={handleClose}
        className="fixed  !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden
         scrollbar-hide outline-none"
      >
        <div className="px-10 mx-auto items-center space-y-4 py-8 bg-cream rounded-md w-[55vw] h-[92vh]">
          <div className="flex justify-between">
            <p className="text-pink text-lg font-bold">Upload Your Recipe</p>
            <button className="rounded-full bg-pink border-none">
              <XIcon className="h-6 w-8 text-white" onClick={handleClose} />
            </button>
          </div>
          <form
            action=""
            className="space-y-4 flex flex-col "
            onSubmit={uploadHandler}
          >
            <div className="flex flex-col text-sm">
              <label htmlFor="">Title</label>
              <input type="text" className="outline-none" ref={titleForm} />
            </div>
            <div className="flex flex-col mb-3 w-full justify-center">
              <label htmlFor="" className="form-label inline-block text-sm">
                Upload Photos
              </label>
              <input
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                className=" form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="flex flex-col text-sm">
              <label htmlFor="">Bahan</label>
              <textarea className="outline-none h-10 resize-none wrapper" ref={ingredientsForm} />
            </div>
            <div className="flex flex-col text-sm">
              <label htmlFor="">Cara Membuat</label>
              <textarea className="outline-none h-40 resize-none wrapper" ref={stepsForm}></textarea>
            </div>
            <button
              className="p-3 bg-[#d63447] w-40 rounded-md h-11 items-center justify-center mx-auto text-white text-md font-bold"
              type="submit"
            >
              Upload
            </button>
          </form>
        </div>
      </MuiModal>
    </div>
  );
};

export default Modal;
