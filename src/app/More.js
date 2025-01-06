import React from "react";
import { JackInTheBox } from "react-awesome-reveal";

import { IconContext } from "react-icons";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function More() {
  const handleClickFB = () => {
    const facebookUrl = "https://www.facebook.com/spanglishoscar";
    window.open(facebookUrl, "_blank");
  };
  const handleClickYt = () => {
    const youtubeUrl = "https://www.youtube.com/@spanglish_oscar";
    window.open(youtubeUrl, "_blank");
  };
  const handleClickIG = () => {
    const igUrl = "https://www.instagram.com/spanglish_oscar";
    window.open(igUrl, "_blank");
  };

  return (
    <React.Fragment>
      <IconContext.Provider value={{ className: "responsive-icon" }}>
        <section>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: "url(/pics/bg-ipad.jpeg)",
            }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-[#FFFFFF] text-center">
              <JackInTheBox>
              <div className="max-w-md">
                <h2 className="mb-4 text-4xl md:text-5xl md:mb-11 lg:text-6xl">
                  ¿Quieres saber más de mi?
                </h2>
                <div className="mb-6 flex px-16 justify-evenly md:mb-11">
                  <div
                    onClick={handleClickFB}
                    className="btn btn-ghost btn-circle"
                  >
                    <FaFacebookF />
                  </div>
                  <div
                    onClick={handleClickIG}
                    className="btn btn-ghost btn-circle"
                  >
                    <FaInstagram />
                  </div>
                  <div
                    onClick={handleClickYt}
                    className="btn btn-ghost btn-circle"
                  >
                    <FaYoutube />
                  </div>
                </div>
                <p className="mb-5 text-[#D5DEE8] md:text-xl lg:text-2xl italic">
                  ¡Sígueme en redes sociales!
                </p>
              </div>
              </JackInTheBox>
              
            </div>
          </div>
        </section>
      </IconContext.Provider>
    </React.Fragment>
  );
}
