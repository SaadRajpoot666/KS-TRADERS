import { useState, useEffect } from "react";
import "./product.css";
import img1 from "/images/5l.png";
import img2 from "/images/1.5litre.png";
import img3 from "/images/0.5l.png";

import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { SlickCards } from "../Slick/Slick";

export function Products() {
   
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "linear" }}
      viewport={{ amount: 0.1 }}
      className="mt-70 slick-slider-container  mb-26"
      data-product-cards
    >
      <SlickCards>
        <div className="inline-block  bg-white product-container">
          <div className="image-container sm:flex sm:float-start pt-4 pb-2 ">
            <img src={img1} alt="5 litre" className="product-image h-[60vh]" />
          </div>
          <div className="content-container  flex-col sm:mt-[10%]">
            <h1 className="text-2xl">Nestlé 5-Litre</h1>
            <p className="sm:w-[90%] ">
              Stay refreshed and hydrated with Nestlé 5-Litre Water Bottle, a
              perfect solution for homes, offices, and outdoor gatherings.
            </p>
          </div>
          <button className="sm:mt-[5%]  shop-now-btn ">
            <NavLink to="/products">SHOP NOW</NavLink>
          </button>
        </div>
        <div className="inline-block px-2 bg-white product-container">
          <div className=" image-container sm:flex sm:float-start pt-4 pb-2">
            <img
              src={img2}
              alt="0.5 litre"
              className="h-[60vh] product-image"
            />
          </div>
          <div className="content-container  flex-col sm:mt-[10%]">
            <h1 className="sm:text-2xl">Nestlé 1.5-Litre</h1>
            <p className="sm:w-[90%]">
              Stay refreshed wherever you go with the Nestlé 1.5-Litre Water
              Bottle, the perfect companion for daily hydration.
            </p>
          </div>
          <button className="sm:mt-[5%]  shop-now-btn ">
            <NavLink to="/products">SHOP NOW</NavLink>
          </button>
        </div>
        <div className="inline-block px-2 bg-white product-container">
          <div className="image-container sm:flex sm:float-start pt-4 pb-2">
            <img src={img3} alt="1.5litre" className="product-image h-[60vh]" />
          </div>
          <div className="content-container  flex-col sm:mt-[10%]">
            <h1 className="sm:text-2xl">Nestlé 0.5-Litre</h1>
            <p className="sm:w-[90%]">
              Quench your thirst on the go with the Nestlé 0.5-Litre Water
              Bottle, a compact and convenient hydration solution for your busy
              lifestyle.
            </p>
          </div>
          <button className="sm:mt-[5%]  shop-now-btn ">
            <NavLink to="/products">SHOP NOW</NavLink>
          </button>
        </div>
        
      </SlickCards>
    </motion.div>
  );
}
