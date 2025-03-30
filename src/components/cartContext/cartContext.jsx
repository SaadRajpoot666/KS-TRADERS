import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1, price: item.unitPrice * (item.quantity + 1) }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1, unitPrice: product.price }];
      }
    });
  };
  const handleCartCheckout = ()=>{
    setCart([])
  }

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
                price: item.unitPrice * (item.quantity - 1), // Correct price calculation
              }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove item if quantity reaches 0
    );
  };
  const removeItemsFromCart = (itemId)=>{
    setCart(prevCart=>{
     if(itemId === null){
      return []
     }else{
      return prevCart.filter(item=>item.id !==itemId)
     }
    })
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,removeItemsFromCart, handleCartCheckout }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  console.log("useCart context:", context);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
