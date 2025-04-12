import { useState } from "react";
import axios from "axios";
import { useCart } from "../../components/cartContext/cartContext";
import "./checkout.css"
export const Checkout = () => {
  const { cart ,handleCartCheckout} = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [shop, setShop] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!/^[A-Z][a-zA-Z\s]*$/.test(name)) {
      newErrors.name = " Name must start with an uppercase letter!";
    }
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      newErrors.email = " Email must be a valid Gmail address!";
    }
    if (!/^03\d{9}$/.test(number)) {
      newErrors.number = " Phone number must be a valid 11-digit Pakistani number (03XXXXXXXXX)!";
    }
    if (shop.trim() === "") {
      newErrors.shop = " Shop name is required!";
    }
    if (location.trim() === "") {
      newErrors.location = " Location is required!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; //  Form is valid if there are no errors
  };

  const handleCheckout = async () => {
    if (!validateForm()) return; //  Stop if validation fails
    const totalPrice = cart.reduce(
      (total, item) => total + item.unitPrice * item.quantity,
      0
    );

    
    try {
      const response = await axios.post("https://ks-traders-backend.vercel.app/checkout", {
        name,
        email,
        number,
        shop,
        items: cart,
        totalPrice,
        location,
      });
      
      console.log(response);
      alert("🎉 Order placed successfully!");
      
      //  Clear form after successful order
      handleCartCheckout()
      setName("");
      setEmail("");
      setNumber("");
      setShop("");
      setLocation("");
      setErrors({}); // Clear errors
    } catch (error) {
      console.error("Checkout error:", error);
      alert("  Error processing order");
    }
  };

  return (
    <div className="p-5 ">
      <h1 className="text-center text-4xl mt-5">Checkout</h1>
      <div className="flex flex-col mt-14  items-center">
        <form
          className="w-80 flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            handleCheckout();
          }}
        >
          <div className="bg-white shadow-2xl mt-3 input-container ">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              className="  p-2 border-0 rounded input-field w-full "
            />
            <span className="underline"></span>

          </div>
            {errors.name && <p className="error mt-0 pt-0 ">{errors.name}</p>}

          <div  className="input-container bg-white shadow-2xl mt-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email (must be Gmail)"
              className=" input-field border p-2 rounded w-full"
            />
            <span className="underline"></span>

          </div>
            {errors.email && <p className="error">{errors.email}</p>}

          <div  className="bg-white input-container shadow-2xl mt-3">
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Phone (03XXXXXXXXX)"
              className="border p-2 input-field rounded w-full"
            />
            <span className="underline"></span>

          </div>
            {errors.number && <p className="error">{errors.number}</p>}

          <div  className="bg-white shadow-2xl input-container mt-3">
            <input
              type="text"
              value={shop}
              onChange={(e) => setShop(e.target.value)}
              placeholder="Enter Your Shop Name"
              className="border p-2 rounded input-field w-full"
            />
            <span className="underline"></span>

          </div>
            {errors.shop && <p className="error">{errors.shop}</p>}

          <div  className="bg-white input-container shadow-2xl mt-3">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="HOUSE/STREET/AREA/CITY"
              className="border p-2 rounded input-field w-full"
            />
            <span className="underline"></span>
          </div>
            {errors.location && <p className="error">{errors.location}</p>}

          <button
            type="submit"
            className="bg-black  mb-20 text-white p-2  rounded hover:bg-gray-800"
          >
            Place Order
          </button>
        </form>
      </div>
      <p className="text-red-600 mb-24  capitalize"><strong className="text-xl">Note:</strong>if it shows error processing data then try again. to submit this error is because of the network error that occurs while parsing data</p>
    </div>
  );
};
