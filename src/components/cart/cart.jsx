import { useState } from "react";
import { useCart } from "../cartContext/cartContext";
import "./cart.css";
import { FaCheckCircle } from "react-icons/fa";
 
import { currencyFormatter } from "../../assets/JavaScript Files/currecyFormater";
import { Link } from "react-router-dom";
export function Cart() {
  const { cart, removeFromCart, removeItemsFromCart } = useCart();
  console.log(cart);
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity * item.unitPrice, 0);
  };

  const [showSuccess, setShowSuccess] = useState(false);
  const [isShowSuccess, setIsShowSuccess] = useState(false);
  const [removeItem, setRemoveItem] = useState(null);
  const [isRemoveItem, setIsRemoveItem] = useState(null);
  const handleRemoveFromCart = (item, name) => {
    removeFromCart(item);

    setShowSuccess(true);
    setRemoveItem(name);

    setTimeout(() => {
      setShowSuccess(false);
      setRemoveItem(null);
    }, 3000);
  };
  const handleRemoveItemsFromCart = (item, name) => {
    removeItemsFromCart(item);
    setIsShowSuccess(true);
    setIsRemoveItem(name);

    setTimeout(() => {
      setIsShowSuccess(false);
      setIsRemoveItem(null);
    }, 3000);
  };
  return (
    <>
      <h1 className="text-3xl  cart-items capitalize text-center mt-[10px] ">
        {" "}
CART ITEMS
      </h1>
      {showSuccess && (
        <div className="fixed top-10 left-1/2 transform w-[100%] -translate-x-1/2 bg-red-500 text-white px-6 py-2 rounded-md flex justify-center shadow-lg">
          <FaCheckCircle className="mr-2" size={20} />
          <span className="capitalize">
            {removeItem} removed from cart successfully!
          </span>
        </div>
      )}
      {isShowSuccess && (
        <div className="fixed top-10 left-1/2 w-[100%] -translate-x-1/2 bg-red-500 text-white px-6 py-2 rounded-md flex justify-center shadow-lg ">
          <FaCheckCircle className="mr-2" size={20} />
          <span className="capitalize">
            all the items of {isRemoveItem} removed from cart !
          </span>
        </div>
      )}
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="mt-16 md:flex md:flex-row cart-item-container md:rounded-tr-2xl md:rounded-br-2xl md:flex-wrap md:ml-2 h-[max-content] bg-gray-50 md:w-[40%] "
          >
            <img
              src={item.url}
              className="md:w-46 md:flex cart-image md:rounded-tl-2xl md:rounded-bl-2xl "
              alt={item.name}
            />
            <div className="md:ml-6  cart-content-container  ">
              <h3 className="text-xl mb-2  ">{item.name}</h3>
              <p className="text-xl pt-[2rem] ">
               {currencyFormatter (item.price) } {""} x<span>{item.quantity}</span>
              </p>
          <div className="remove-btns">

              <button
                onClick={() => handleRemoveFromCart(item.id, item.name)}
                className="mt-[2rem] pt-[5px] pr-[10px] pb-[5px] pl-[10px] bg-black rounded-[5px] text-white text-[15px] hover:bg-gray-300 hover:text-black duration-300 "
                >
                Remove x1
              </button>
            <button className="pt-[5px] pr-[15px] pb-[5px] pl-[10px]  bg-black rounded-[5px] text-white text-[15px] hover:bg-gray-300  md:ml-3 hover:text-black duration-300"
              onClick={() => handleRemoveItemsFromCart(item.id, item.name)}
              >
              Remove all
            </button>
              </div>
            </div>
          </div>
        ))
      )} 
      <div className="total-amount-container capitalize  flex justify-center relative  md:mb-6 flex-row border-2 hover:border-red-800 hover:text-black pt-2 pb-2  mt-[15%] hover:bg-white  bg-red-800   border-white  text-white">
       Total price   |{""}{""} {currencyFormatter (getTotalQuantity())} 

      </div>
      <Link to="/checkout">
      <button className="capitalize    mb-20  font-bold  w-[100%] bg-white  border-4 pt-3  pb-3 border-red-800 text-red-800 ">CheckOut | {currencyFormatter (getTotalQuantity())}</button>
      </Link>
    </>
  );
}
