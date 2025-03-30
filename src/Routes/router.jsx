import { createBrowserRouter,   } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { ProductsPage } from "../pages/ProductsPage/ProductsPage";
import { NavBar } from "../components/Navbar/NavBar";
 import { Cart } from "../components/cart/cart";
import { Contact } from "../pages/contact/Contact";
import {Checkout} from "../pages/checkout/checkout"

export const router = createBrowserRouter([
  {path:"/*", element : <h1 className="text-6xl text-red-800 " style={{
    position:"absolute",
    top:"50%",
    left:"50%",
    translate:"-50% -50%"
  }
  }> 404 NOT FOUND</h1>},
  { path: "/", element: <Home /> },
  {
    path: "/products",
    element: <ProductLayout />,
    
  },

  { path: "/cart", element: <CartLayout /> },
  { path: "/contact", element: <ContactLayout /> },
  {path:"/checkout" , element:<CheckoutLayout  />}
]);
function CheckoutLayout(){
  return <> 
  <NavBar  />
<Checkout  />
  </>
}
function ProductLayout() {
  return (
    <>
      <NavBar />
      <ProductsPage />
    </>
  );
}
function CartLayout() {
  return (
    <>
      <NavBar />
      <Cart />
    </>
  );
}

function ContactLayout() {
  return (
    <>
      <NavBar />
      <Contact />
    </>
  );
}
