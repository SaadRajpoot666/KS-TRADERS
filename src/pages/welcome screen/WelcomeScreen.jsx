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
    <div className="flex flex-col   jusitfy-center absolute top-[50%] left-[50%] gap-20 translate-x-[-50%] translate-y-[-50%]">
       <img src="/images/ksTradersLogo.png" alt="logo image " className="h-65 welcome-screen-image" />

      <button
        className="relative px-6 py-3 bg-red-600 text-white font-semibold text-lg uppercase rounded-md border border-white shadow-[0_0_20px_#ffffff88] hover:bg-white hover:text-red-600 hover:shadow-[0_0_25px_#ffffffcc] transition duration-300 ease-in-out hover:border-2 hover:border-red-600 "
        onClick={handleClick}
      >
        ENTER SITE
      </button>
    </div>
  );
}
