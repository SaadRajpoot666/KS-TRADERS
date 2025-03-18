import "./services.css";
 import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export function Services() {
   
  return (
    <> 
      <h1 className="text-center text-4xl pt-90  component-name">SERVICES</h1>
      <motion.div
      initial={{ opacity: 0, y:150 }} // Starts 50px down
      whileInView={{ opacity: 1, y: 0 }} // Moves up to position
      transition={{ duration: 0.5, ease:"linear" }}
      viewport={{ amount: 0.2 }} // Trigger when 20% is visible
        className={`flex flex-row   gap-5 services-container pt-16  `}
      >
        <div className="  card-container  shadow-2xl rounded-tl-2xl h-[max-content] rounded-br-2xl rounded-tr-4xl rounded-bl-4xl ml-[2%] ">
          <div className="icon p-4 ">
            <img src={"/images/delivery.png"} alt="" className="services-image" />
          </div>
          <div className="content p-4">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              architecto corrupti saepe distinctio, fugiat temporibus, ad
              mollitia nesciunt assumenda, aspernatur magnam quas aliquam!
            </p>
          </div>
        </div>
        <div className="bg-white rounded-tl-2xl shadow-2xl card-container h-[max-content] rounded-br-2xl rounded-tr-4xl rounded-bl-4xl ml-[2%] ">
          <div className="icon p-4 ">
            <img
              src={ '/images/bottle.png'}
              className="h-15 services-image"
              alt=""
            />
          </div>
          <div className="content p-4 mt-6">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              architecto corrupti saepe distinctio, fugiat temporibus, ad
              mollitia nesciunt assumenda, aspernatur magnam quas aliquam!
            </p>
          </div>
        </div>
        <div className="bg-white sm:mr-4 rounded-tl-2xl shadow-2xl h-[max-content] card-container rounded-br-2xl rounded-tr-4xl rounded-bl-4xl ml-[2%] ">
          <div className="icon p-4 ">
            <img src={'/images/price.png'} alt="" className="services-image" />
          </div>
          <div className="content p-4 mt-10">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              architecto corrupti saepe distinctio, fugiat temporibus, ad
              mollitia nesciunt assumenda, aspernatur magnam quas aliquam!
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
