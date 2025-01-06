import React from "react";

import { SocialIcon } from "react-social-icons";
import { useRouter } from "next/navigation";
import { Flip, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";

export default function Hero() {
  const router = useRouter();
  const handleClickFB = () => {
    const facebookUrl = "https://www.facebook.com/spanglishoscar";
    window.open(facebookUrl, "_blank");
  };

  const handleClickWA = () => {
    const waUrl = "https://wa.me/send?phone=525659100753";
    window.open(waUrl, "_blank");
  };

  const handleClickForm = () => {
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScxK93DoC07fH9D-o86NwMboXOaL8G6p4LDC-0zZqEhnET_Sw/viewform#";
    window.open(formUrl, "_blank");
  };

  return (
    <React.Fragment>
      <div
        id="hero"
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/pics/background.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-neutral-content text-center">
          <JackInTheBox>
          <div className="max-w-md text-[#1B263B] lg:max-w-5xl lg:mt-16">
            <h1 className="mb-6 text-2xl font-black md:text-4xl md:mb-16 lg:text-6xl">
              NUEVOS CURSOS COMENZANDO EL 6 de Enero, 2025
            </h1>
            <div className="mb-6 flex px-6 justify-evenly">
              <button onClick={handleClickFB} className="md:hidden transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl">
                <SocialIcon
                  network="facebook"
                  style={{ width: 40, height: 40 }}
                />
              </button>
              <button className="md:hidden transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl">
                <SocialIcon
                  network="instagram"
                  url="https://www.instagram.com/spanglish_oscar"
                  style={{ width: 40, height: 40 }}
                />
              </button>
              <button className="md:hidden transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl">
                <SocialIcon
                  network="youtube"
                  url="https://www.youtube.com/@spanglish_oscar"
                  style={{ width: 40, height: 40 }}
                />
              </button>
              <button onClick={handleClickWA} className="md:hidden transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl">
                <SocialIcon
                  network="whatsapp"
                  style={{ width: 40, height: 40 }}
                />
              </button>
              <button
                className="md:hidden transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl"
                onClick={() =>
                  (window.location = "mailto:info@fluentinspanglish.com")
                }
              >
                <SocialIcon network="email" style={{ width: 40, height: 40 }} />
              </button>

              <div className="hidden md:block md:flex ">
                <button onClick={handleClickFB} className="mr-2 transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl">
                  <SocialIcon
                    network="facebook"
                    style={{ width: 50, height: 50 }}
                  />
                </button>
                <button className="mr-2 transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl">
                  <SocialIcon
                    network="instagram"
                    url="https://www.instagram.com/spanglish_oscar"
                    style={{ width: 50, height: 50 }}
                  />
                </button>
                <button className="mr-2 transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl">
                  <SocialIcon
                    network="youtube"
                    url="https://www.youtube.com/@spanglish_oscar"
                    style={{ width: 50, height: 50 }}
                  />
                </button>
                <button onClick={handleClickWA} className="mr-2 transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl">
                  <SocialIcon
                    network="whatsapp"
                    style={{ width: 50, height: 50 }}
                  />
                </button>
                <button
                  className=" transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl"
                  onClick={() =>
                    (window.location = "mailto:info@fluentinspanglish.com")
                  }
                >
                  <SocialIcon
                    network="email"
                    style={{ width: 50, height: 50 }}
                  />
                </button>
              </div>
            </div>
            <button
              onClick={handleClickForm}
              className="btn bg-[#EE6771] border-none text-white font-light text-xs md:text-base w-48 mt-12 md:mt-6 transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl"
            >
              QUIERO INSCRIBIRME
            </button>
          </div>
          </JackInTheBox>
          
        </div>
      </div>
    </React.Fragment>
  );
}
