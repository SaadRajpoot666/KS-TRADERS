 import "./nav.css";
import { FaHome, FaShoppingCart, FaBox, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { CiSun } from "react-icons/ci";
import { GoMoon } from "react-icons/go";
import { useEffect, useState } from "react";
import { useCart } from "../cartContext/cartContext";

export function NavBar({ Class }) {
  const [theme, setTheme] = useState("light");
  const { cart } = useCart();
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const nav = document.querySelector(".bottom-nav");

  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    nav.classList.add("dark");
  };

  return (
    <>
      <header
        className={`relative sm:pl-10 fadded-borders bg-white dark:bg-zinc-900 sm:pr-10 pt-[1%] pb-[1%] w-full ${Class} navbar-header`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "linear" }}
          viewport={{ amount: 0.1 }}
        >
          <h1 className="inline company-logo dark:text-white sm:text-2xl text-gray-800">
            KS TRADERS
          </h1>
          <nav className="flex float-right">
            <ul className="navbar flex sm:text-lg sm:px-4 sm:gap-10 flex-row text-[#ae040f]">
              <li className="home border-b-2 border-b-white invisible md:visible hover:border-b-red-600 transition-all hover:duration-500">
                <NavLink to="/">HOME</NavLink>
              </li>
              <li className="border-b-2 invisible md:visible border-b-white hover:border-b-red-600 transition-all hover:duration-500 product">
                <NavLink to={"/products"}>PRODUCTS</NavLink>
              </li>

              <li className="border-b-2 invisible md:visible border-b-white hover:border-b-red-600 transition-all hover:duration-500 contact">
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
              <li className="relative">
                <NavLink
                  to={"/cart"}
                  className="cart-image-container invisible md:visible text-rose-800 w-8 h-8"
                >
                  <FaShoppingCart />
                  {totalQuantity > 0 && (
                    <span className="absolute -top-2 -right-2 bg-rose-800 text-white text-xs w-3 h-3 flex items-center justify-center rounded-full">
                      {totalQuantity}
                    </span>
                  )}
                </NavLink>
              </li>
              <div>
                <button
                  className="absolute top-3 left-[80%] md:left-[95%]"
                  onClick={toggle}
                >
                  {theme === "light" ? <GoMoon /> : <CiSun />}
                </button>
              </div>
            </ul>
          </nav>
        </motion.div>

        {/* Mobile Navbar */}
        <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white bottom-nav text-rose-800 shadow-lg">
          <div className="flex justify-around py-3">
            {/* Home */}
            <NavLink to="/" className="flex flex-col items-center">
              <FaHome className="text-xl" />
              <span className="text-xs">Home</span>
            </NavLink>

            {/* Cart */}
            <NavLink to="/cart" className="flex flex-col items-center">
              <FaShoppingCart className="text-xl" />
              <span className="text-xs">Cart</span>
            </NavLink>

            {/* Products */}
            <NavLink to="/products" className="flex flex-col items-center">
              <FaBox className="text-xl" />
              <span className="text-xs">Products</span>
            </NavLink>

            {/* Contact */}
            <NavLink to="/contact" className="flex flex-col items-center">
              <FaEnvelope className="text-xl" />
              <span className="text-xs">Contact</span>
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}
