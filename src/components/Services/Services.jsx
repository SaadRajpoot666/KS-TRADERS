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
      transition={{ duration: 0.2, ease:"linear" }}
        className={`flex flex-row   gap-5 services-container pt-16  `}
      > 
      
      <div className="bg-white hover:cursor-pointer rounded-tl-2xl shadow-2xl card-container h-[max-content] rounded-br-2xl rounded-tr-4xl rounded-bl-4xl ml-[2%] "> 
          <div className="content  p-4 mt-6">
            <h1 className="mb-22 text-[1.3rem] capitalize hover:border-b-2 w-[max-content] duration-300 ">   🚚 Free Delivery
   
            </h1>
            <p className="mb-6">
            Enjoy hassle-free shopping with our fast and free delivery service! No hidden charges—just shop, relax, and let us bring your order right to your doorstep.


Let me know if you need any tweaks! 😊
             </p>
          </div>
        </div>
        <div className="bg-white hover:cursor-pointer rounded-tl-2xl shadow-2xl card-container h-[max-content] rounded-br-2xl rounded-tr-4xl  rounded-bl-4xl ml-[2%] "> 
          <div className="content  p-4 mt-6 ">
            <h1 className="mb-22 text-[1.3rem] capitalize hover:border-b-2 w-[max-content] duration-300 ">  💧 Mineral Water
            </h1>
            <p>
            Stay refreshed with our pure and high-quality mineral water. Sourced from the finest springs, it’s packed with essential minerals to keep you hydrated and healthy every day.

Let me know if you need any adjustments! 😊
            </p>
          </div>
        </div>
        <div className="bg-white hover:cursor-pointer sm:mr-4 rounded-tl-2xl shadow-2xl h-[max-content] card-container rounded-br-2xl rounded-tr-4xl rounded-bl-4xl ml-[2%] ">
          <div className="content p-4  mt-10">
            <h1 className="text-[1.3rem] mb-18   capitalize hover:border-b-2 w-[max-content] duration-300 ">               💰 Retail Price
            </h1>
            <p className="mb-6 ">
            Get the best quality products at unbeatable retail prices! We offer fair and affordable rates, ensuring you get great value for your money without compromising on quality. Shop smart and save more with us!
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
