import React from "react";
import { useSearchParams } from "react-router-dom";

function Watch()
 
{ 
  const[abcd]=useSearchParams()
  console.log(abcd.get("xyz"));
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+abcd.get("xyz")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Watch;
