import React from "react";
import "./welcomescreen.css";
export function WelcomeScreen({ onEnter }) {
  const handleClick = () => {
    const hasPlayed = sessionStorage.getItem("WelcomeAudioPlayed");

    if (!hasPlayed) {
      const audio = new Audio("/audio/welcome.mp3");
      audio
        .play()
        .then(() => {
          sessionStorage.setItem("WelcomeAudioPlayed", "true");
          onEnter(); // move to the main site
        })
        .catch((err) => {
          console.log("AutoPlay is Blocked", err);
          onEnter(); // even if it fails, move forward
        });
    } else {
      onEnter(); // if already played, skip sound
    }
  };

  return (
    <div className="flex flex-col  gap-8  absolute top-[50%] left-[50%] translate-[-50%]  ">
      <h1 className=" welcome-txt md:text-2xl text-xs  text-center w-96 relative px-6 py-3 bg-purple-900 text-gray-950 font-semibold rounded-md overflow-hidden border border-y-gray-950 shadow-[0_0_15px_#a855f7] transition duration-300 linear   ">
        WELCOME TO <br/> KS TRADERS
      </h1>
      <button
        className="relative px-6 py-3 bg-black text-green-400 font-semibold text-lg uppercase rounded-md overflow-hidden border border-green-400 shadow-[0_0_15px_#22c55e] hover:shadow-[0_0_25px_#22c55e] transition duration-300 ease-in-out hover:text-black active:text-black active:bg-green-400 hover:bg-green-400"
        onClick={handleClick}
      >
        ENTER SITE
      </button>
    </div>
  );
}
