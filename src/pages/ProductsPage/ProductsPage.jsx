 import { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaCheckCircle } from "react-icons/fa";
import { useCart } from "../../components/cartContext/cartContext";
import { SlickCards } from "../../components/Slick/Slick";
import { useFetch } from "../../assets/JavaScript Files/CustomHooks";
import { L20 } from "react-isloading";
import { currencyFormatter } from "../../assets/JavaScript Files/currecyFormater";
import "./productPage.css";

export function ProductsPage() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [quantityError, setQuantityError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  const [setUrl, data, loading, error] = useFetch({
    URL: "https://opaque-flat-carol.glitch.me/products",
  });

  useEffect(() => {
    if (data) setProducts(data);
  }, [data]);

  useEffect(() => {
    const timer = setTimeout(() => setQuantityError(""), 2000);
    return () => clearTimeout(timer);
  }, [quantityError]);

  const handleAddToCart = (item) => {
    addToCart(item, quantity);
    setAddedProduct(item.name);
    setShowSuccess(true);
    setQuantity(1); // Reset after adding

    setTimeout(() => {
      setShowSuccess(false);
      setAddedProduct(null);
    }, 3000);
  };

  return (
    <div className="bg-white product-page-container relative">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
          <L20 style={{ height: "100px", width: "100px" }} />
        </div>
      )}

      {error && (
        <p className="text-red-500 text-2xl flex flex-col items-center">Error: {error}</p>
      )}
      {quantityError && (
        <p className="text-red-500 text-2xl flex flex-col items-center">Error: {quantityError}</p>
      )}
      {showSuccess && (
        <div className="w-full bg-green-500 text-white px-6 py-2 rounded-md flex justify-center shadow-lg">
          <FaCheckCircle className="mr-2" size={20} />
          <span>{addedProduct} added to cart successfully!</span>
        </div>
      )}

      {!loading && !error && products.length > 0 ? (
        <SlickCards ClassName="h-96">
          {products.map((item) => {
            const imagePath = item.url.trim().startsWith("/")
              ? item.url.trim()
              : `/images/${item.url.trim()}`;

            return (
              <div key={item.id} className="bg-white md:w-96 page-container md:mt-36 md:px-8">
                <div className="product-image-container md:flex md:float-left">
                  <img src={imagePath} alt={item.name} className="h-77 product-card-image" />
                </div>
                <div className="product-content-container md:flex md:flex-col md:mt-8">
                  <h1 className="text-2xl shaded-borders font-serif">{item.name}</h1>
                  <p className="content-paragraph md:w-3xl xl:w-3xl md:mt-3">{item.content}</p>
                </div>

                <div className="w-full flex md:block justify-center">
                  <div className="quantity-container flex flex-row bg-gray-400 w-max py-4 rounded-md">
                    <button
                      className="increment pr-6"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      <FaPlus />
                    </button>
                    <p className="text-md">{quantity}</p>
                    <button
                      className="pl-6 decrement"
                      onClick={() => {
                        if (quantity <= 1) {
                          setQuantityError("The Quantity cannot be less than 1");
                        } else {
                          setQuantity((prev) => prev - 1);
                        }
                      }}
                    >
                      <FaMinus />
                    </button>
                  </div>
                </div>

                <div className="add-to-cart-container">
                  <button
                    className="add-to-cart-btn pt-[5px] pb-[5px] px-[10px] bg-black text-white rounded-[5px] mt-3 hover:bg-gray-600 duration-300 flex justify-center"
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
        <p className="text-2xl flex flex-col items-center">No products found.</p>
      )}
    </div>
  );
}
