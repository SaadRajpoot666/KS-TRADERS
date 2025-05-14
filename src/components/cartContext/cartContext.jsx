 import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
                price: item.unitPrice * (item.quantity + quantity),
              }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            ...product,
            quantity,
            unitPrice: product.price,
            price: product.price * quantity,
          },
        ];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
                price: item.unitPrice * (item.quantity - 1),
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItemsFromCart = (itemId) => {
    setCart((prevCart) => {
      if (itemId === null) {
        return [];
      } else {
        return prevCart.filter((item) => item.id !== itemId);
      }
    });
  };

  const handleCartCheckout = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeItemsFromCart, handleCartCheckout }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
