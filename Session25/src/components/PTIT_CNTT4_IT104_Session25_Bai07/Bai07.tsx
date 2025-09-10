import React from "react";
import CustomLink from "./CustomLink";
import Home2 from "./Home2";
import NotFound2 from "./NotFound1";

export default function Bai7() {
   
  const currentUrl = window.location.href;

  const isHomePage = currentUrl === "http://localhost:5173/home-page";
  return (
    <div>
        <CustomLink></CustomLink>
   
      {isHomePage ? <Home2></Home2> : <NotFound2></NotFound2>}
    </div>
  );
}