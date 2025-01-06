import Image from "next/image";
import React from "react";

import { SocialIcon } from "react-social-icons";

export default function Footer() {
  const handleClickItalki = () => {
    const italkiUrl =
      "https://www.italki.com/es/affshare?ref=fluentinspanglish";
    window.open(italkiUrl, "_blank");
  };
  const handleClickPreply = () => {
    const preplyUrl = "https://preply.com/en/tutor/200554";
    window.open(preplyUrl, "_blank");
  };
  const handleClickFB = () => {
    const facebookUrl = "https://www.facebook.com/spanglishoscar";
    window.open(facebookUrl, "_blank");
  };

  return (
    <React.Fragment>
      <footer className="footer footer-center bg-[#0D1B2A] text-[#FFFFFF] p-10">
        <aside>
          <div className="">
            <Image
              src="/pics/logo-dark.svg"
              width={250}
              height={10}
              alt="logo"
            />
          </div>
          <div className=" flex justify-evenly mb-4">
            <button
              className="mr-2 md:hidden transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl"
              onClick={handleClickFB}
            >
              <SocialIcon
                network="facebook"
                style={{ width: 40, height: 40 }}
              />
            </button>
            <button
              className="mr-2 hidden md:block transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl"
              onClick={handleClickFB}
            >
              <SocialIcon
                network="facebook"
                style={{ width: 50, height: 50 }}
              />
            </button>
            <button className="mr-2 md:hidden transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl">
              <SocialIcon
                network="instagram"
                url="https://www.instagram.com/spanglish_oscar"
                style={{ width: 40, height: 40 }}
              />
            </button>
            <button className="mr-2 hidden md:block transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl">
              <SocialIcon
                network="instagram"
                url="https://www.instagram.com/spanglish_oscar"
                style={{ width: 50, height: 50 }}
              />
            </button>
            <button className="md:hidden transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl">
              <SocialIcon
                network="youtube"
                url="https://www.youtube.com/@spanglish_oscar"
                style={{ width: 40, height: 40 }}
              />
            </button>
            <button className="hidden md:block transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl">
              <SocialIcon
                network="youtube"
                url="https://www.youtube.com/@spanglish_oscar"
                style={{ width: 50, height: 50 }}
              />
            </button>
          </div>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <div className="flex justify-evenly mb-2">
                <button
                  className="mr-4 md:hidden transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl"
                  onClick={handleClickItalki}
                >
                  <Image
                    src="/pics/italki.png"
                    width={40}
                    height={40}
                    alt="preply-logo"
                  />
                </button>
                <button
                  className="mr-2 hidden md:block transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl"
                  onClick={handleClickItalki}
                >
                  <Image
                    src="/pics/italki.png"
                    width={50}
                    height={50}
                    alt="preply-logo"
                  />
                </button>
                <button
                  className="mt-2 mr-3 md:hidden transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl"
                  onClick={handleClickPreply}
                >
                  <Image
                    src="/pics/Preply-logo.png"
                    width={70}
                    height={70}
                    alt="preply-logo"
                  />
                </button>
                <button
                  className="mt-2 mr-2 hidden md:block transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl"
                  onClick={handleClickPreply}
                >
                  <Image
                    src="/pics/Preply-logo.png"
                    width={80}
                    height={80}
                    alt="preply-logo"
                  />
                </button>
              </div>
            </div>
          </nav>
          <div className="font-bold mb-2 mt-2">
            <p>
              Términos y condiciones
              <br />
              Política de privacidad
            </p>
          </div>
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </React.Fragment>
  );
}
