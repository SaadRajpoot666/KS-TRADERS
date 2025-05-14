import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa"; // Solid plus
import { FaMinus } from "react-icons/fa"; // Solid minus

import { useCart } from "../../components/cartContext/cartContext";
import { SlickCards } from "../../components/Slick/Slick";
import { useFetch } from "../../assets/JavaScript Files/CustomHooks";
import "./productPage.css";

import { L20 } from "react-isloading";
import { FaCheckCircle } from "react-icons/fa";
import { currencyFormatter } from "../../assets/JavaScript Files/currecyFormater";

export function ProductsPage() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [quantityError, setQuantityError] = useState("");
  // Success message state
  const [showSuccess, setShowSuccess] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  // Fetch products
  const [setUrl, data, loading, error] = useFetch({
    URL: "https://opaque-flat-carol.glitch.me/products",
  });

  // Update products when data is available
  useEffect(() => {
    console.log("Fetched data:", data); // Debugging
    if (data) {
      setProducts(data);
    } else {
      console.log("API data structure mismatch:", data); // Debugging
    }
  }, [data]);

  // Handle add to cart action
  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedProduct(item.name);
    setShowSuccess(true);

    // Hide message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setAddedProduct(null);
    }, 3000);
  };

  setTimeout(() => {
    setQuantityError("");
  }, 2000);

  return (
    <div className="bg-white product-page-container relative">
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
          <L20 style={{ height: "100px", width: "100px" }} />
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-2xl flex flex-col items-center">
          Error: {error}
        </p>
      )}
      {quantityError && (
        <p className="text-red-500 text-2xl flex flex-col items-center">
          Error: {quantityError}
        </p>
      )}
      {/* Success Message */}
      {showSuccess && (
        <div className="relative    w-[100%] h-[max-content] bg-green-500 text-white px-6 py-2 rounded-md flex justify-center shadow-lg">
          <FaCheckCircle className="mr-2" size={20} />
          <span>{addedProduct} added to cart successfully!</span>
        </div>
      )}

      {/* Products Display */}
      {!loading && !error && products.length > 0 ? (
        <SlickCards ClassName="h-96">
          {products.map((item) => {
            // Ensure correct image path
            const imagePath = item.url.trim().startsWith("/")
              ? item.url.trim()
              : `/images/${item.url.trim()}`;

            return (
              <div
                key={item.id}
                className="bg-white md:w-96 page-container md:mt-36 md:pl-8 md:pr-8"
              >
                <div className="product-image-container md:flex md:float-left">
                  <img
                    src={imagePath}
                    alt={item.name}
                    className="h-77 product-card-image"
                  />
                </div>
                <div className="product-content-container md:flex md:flex-col md:mt-8">
                  <h1 className="text-2xl shaded-borders font-serif">
                    {item.name}
                  </h1>
                  <p className="content-paragraph md:w-3xl xl:w-3xl md:mt-3">
                    {item.content}
                  </p>
                </div>
                <div className="w-full flex md:block justify-center">
                  <div className="quantity-container flex flex-row bg-gray-400 w-max py-4 rounded-md">
                    <button
                      className="increment pr-6 "
                      onClick={(e) => {
                        setQuantity((prev) => prev + 1);
                      }}
                    >
                      {" "}
                      <FaPlus />{" "}
                    </button>
                    <p className="text-md">{quantity}</p>
                    <button
                      className="pl-6 decrement"
                      onClick={() => {
                        if (quantity <= 1) {
                          setQuantityError(
                            "The Quantity cannot be less than 1"
                          );
                          return;
                        }
                        setQuantityError("");
                        setQuantity(quantity - 1);
                      }}
                    >
                      <FaMinus />
                    </button>
                  </div>
                </div>
                <div className="add-to-cart-container">
                  <button
                    className="add-to-cart-btn pt-[5px] pb-[5px] pl-[10px] pr-[10px] bg-black text-white rounded-[5px] mt-3 hover:bg-gray-600 duration-300 flex justify-center"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart | {currencyFormatter(item.price)}
                  </button>
                </div>
              </div>
            );
          })}
        </SlickCards>
      ) : (
        <p className="text-2xl flex flex-col items-center">
          No products found.
        </p>
      )}
    </div>
  );
}
