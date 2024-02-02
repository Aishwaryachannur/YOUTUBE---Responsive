import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Slidebar from "../Layout/Slidebar";
import { HiOutlineDotsVertical } from "react-icons/hi";

function Video() {

  const [vd, setVd] = useState([]);
  useEffect(()=>{ getData(); },[] ) //passing 2 values , 1 is getData function and 1 is empty array

  async function getData(){
    const aish= await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyCBXtKnmTjMPov89M0uM51BabN1si3Nmbk&maxResults=50")
    const amrutha = await aish.json()
    setVd(amrutha.items) 

  };
  
  return  <div>
{/* <div>
  <Navbar/>
</div> */}
 
 <div className="flex ">
  <Slidebar/>
 <div className="flex flex-wrap gap-6 rounded-xl ml-0">
    
    {
     
        console.log(vd)
    }
    {
        vd.map((utub)=>{
            return(
                <div className="border-spacing-3  ">
                    <Link to= {"/watch?xyz="+utub.id} > 
                    <img src={utub.snippet.thumbnails.medium.url} alt="" className="rounded-2xl ml-5" />

                    </Link>


                    <div className="flex flex-wrap">
                    <h1 className="w-52 ml-5">
                       {utub.snippet.title } 
                    </h1>
                    <h1 className="mt-2 ml-20 text-xl"><HiOutlineDotsVertical /></h1>
                    </div>
                   
                </div>
            )
        }
        )
    }
  </div>;
 </div>
  </div>
}


export default Video;
