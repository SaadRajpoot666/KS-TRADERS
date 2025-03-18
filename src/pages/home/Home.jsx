import { useState, useEffect } from "react";
import { Header } from "../../components/header/header.jsx";
import { NavBar } from "../../components/Navbar/NavBar.jsx";
import { Products } from "../../components/ProductsCard/Products.jsx";
import { Services } from "../../components/Services/Services.jsx";
import { L20 } from "react-isloading";

export function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Loader will run for 5 seconds

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <>
      {loading ? (
        <L20
          style={{
            height: "100px",
            width: "100px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ) : (
        <div className="container">
          <NavBar />
          <Header />
          <Services />
          <Products />
          {/* <FooterNav /> */}
        </div>
      )}{" "}
    </>
  );
}
