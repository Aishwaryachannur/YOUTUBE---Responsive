import React from "react";
import { useSelector } from "react-redux";

import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaYoutubeSquare } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";

function Slidebar() {
  const isMenuOpen = useSelector((stores) => stores.app.isMenuOpen); //hook
  console.log(isMenuOpen);
  return isMenuOpen ? (
    <div className="">
      <div>
        <h1 className="ml-5">
          <MdHomeFilled />{" "}
        </h1>
        <p className="ml-2">Home</p>{" "}
      </div>
      <div className="mt-10">
        <h2 className="ml-5">
          <SiYoutubeshorts />{" "}
        </h2>
        <p>Shorts</p>
      </div>
<div className="mt-10">
<h1 className="ml-5">
        <MdOutlineSubscriptions />{" "}
      </h1>
      <p>Subcription</p>

</div>
      <div className="mt-10">
      <h1 className="ml-5">
        <FaYoutubeSquare /> <p>You</p>{" "}
      </h1>
      </div>
      
    </div>
  ) : (
    <div className="bg-white w-[100px] h-[85vh]">
      <div className="hover:bg-slate-200 flex justify-items-center h-10 flex-1  w-24">
      <h1 className="flex flex-wrap ">
        <MdHomeFilled />
        <p className="pl-5">Home</p>{" "}
      </h1>
      </div>

     <div className="hover:bg-slate-200 h-10 flex-1 justify-center  mt-8 w-24">
     <h2 className="flex flex-wrap">
        <SiYoutubeshorts />
        <p className="pl-5">Shorts</p>
      </h2>
     </div>
       
<div className="hover:bg-slate-200 h-10 mt-8 w-24">
<h1 className="flex flex-wrap">
        <MdOutlineSubscriptions />
        <p >Subcription</p>
      </h1>
</div>
     
     <div className="hover:bg-slate-200 mt-8 h-10 w-24">
     <h1 className="flex flex-wrap">
        <FaYoutubeSquare /> 
        <p className="pl-5">You</p>
      </h1>
     </div>
      
      <div className="hover:bg-slate-200 mt-8 h-10 flex-1 justify-center w-24">
      <h1 className="flex flex-wrap">
        <MdHistory />
        <p className="pl-5">History</p>{" "}
      </h1>
      </div>
      <div className="hover:bg-slate-200 h-10 flex-1 justify-center mt-8 w-28">
      <h1 className="flex flex-wrap">
        <MdOutlineWatchLater />
        <p className="pl">Watch later</p>
      </h1>
      </div>
     <div className=" h-10 flex-1 justify-center hover:bg-slate-200 mt-8 w-24">
     <h1 className="flex flex-wrap ">
        <BiLike />
        <p className="pl-5">Liked</p>
      </h1>
     </div>
    </div>
  );
}

export default Slidebar;
