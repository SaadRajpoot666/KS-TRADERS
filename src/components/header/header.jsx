import { Slick } from "../Slick/Slick";
import img1 from "/images/5l.png";
import img2 from "/images/1.5litre.png";
import img3 from "/images/0.5l.png";
import "./header.css";
import "../../assets/styles/style.css"
import React from "react";

export function Header() {
  const images = [img1, img2, img3];


  return (
    <>
      <h1  className="mt-[7%] best-selling best-sellings mb-[3%] flex justify-center  text-2xl font-serif font-bold   ">
        BEST SELLINGS
      </h1>
  
      <Slick  >
        {images.map((el, i) => (
          <div
            key={i}
            className="image-slider relative   flex items-center justify-center sm:pl-[12%] sm:pr-[12%]"
          >
            <div className="carasoul-heading flex mr-0 flex-col p-5 absolute bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] w-[50%] h-[100%]  ">
              <h1 className="text-3xl   text-[#292929]">
                {" "}
                🌊 Nestlé Pure Life – Pure, Refreshing, Hydrating! 💧
              </h1>
              <p className="text-[#ae040f] ">
                Experience the crisp and refreshing taste of Nestlé Pure Life,
                purified through a rigorous 13-step quality process to ensure
                clean, safe, and healthy hydration for you and your family. Stay
                refreshed, stay pure! ✨
              </p>
            </div>

            <div className=" bg-white flex sm:p-4  ml-0 image-container sm:float-right">
              <img src={el} className=" h-80" alt="" />
            </div>
          </div>
        ))}
      </Slick>
      
 
 </>
  );
}
