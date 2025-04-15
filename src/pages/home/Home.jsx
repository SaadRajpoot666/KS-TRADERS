import { useState, useEffect } from "react";
import { Header } from "../../components/header/header.jsx";
import { NavBar } from "../../components/Navbar/NavBar.jsx";
import { Products } from "../../components/ProductsCard/Products.jsx";
import { Services } from "../../components/Services/Services.jsx";
import { WelcomeScreen } from "../welcome screen/WelcomeScreen.jsx";
export function Home() {
  const [entered, setEntered] = useState(false);
  useEffect(()=>{
    const hasPlayed = sessionStorage.getItem("WelcomeAudioPlayed")
    if(hasPlayed){
      setEntered(true)
    }
  })


  return (
    <>
      {!entered ? (
        <WelcomeScreen onEnter={()=>setEntered(true)} />
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
