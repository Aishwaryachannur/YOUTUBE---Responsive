import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineVideoCall } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { FaRegBell } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { toggleMenu } from "./appSlice";
import { useDispatch } from "react-redux";

function Navbar() {
  const dispatch = useDispatch(); //usedis
  function menuHandler() {
    dispatch(toggleMenu()); //function calling
  }

  return (
    <div className="w-full h-24 bg-white  flex flex-wrap">
      <h1 className="text-2xl flex items-center ml-4 cursor-pointer mb-8 ">
        <GiHamburgerMenu onClick={menuHandler} />
      </h1>
      <img
        className=" h-32 pb-6 ml-3"
        src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7911227/youtube-icon-md.png"
        alt=""
      />
      <input
        className="ml-[300px] w-[500px] rounded-l-full  h-10 mt-7 flex items-center justify-center border-2 border-gray-200 border-solid"
        type="text"
        placeholder=" Search"
      />
      <button className="text-xl bg-slate-100 rounded-r-full flex items-center justify-center  mt-7 w-16 border-gray-300 border-2 h-10 border-solid"><CiSearch /></button>
      <h2 className="text-xl flex items-center pt-5  justify-center rounded-full w-9 ml-4 mt-7  h-10 pb-6 bg-slate-100 ">
        <FaMicrophone />
      </h2>
      <h2 className="text-3xl flex items-center justify-center mt-8 w-9 rounded-full h-10 ml-64 ">
        <MdOutlineVideoCall />
      </h2>
      <h2 className="text-2xl flex items-center w-9 justify-center rounded-full h-10 ml-4 mt-8 ">
        <FaRegBell />
      </h2>
      <h2 className="text-2xl flex items-center w-9 justify-center rounded-full h-10 ml-4 mt-8  ">
        <VscAccount />
      </h2>
    </div>
  );
}

export default Navbar;
