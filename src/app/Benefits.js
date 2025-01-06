import Image from "next/image";
import React from "react";

import { FaRegDotCircle } from "react-icons/fa";

export default function Benefits() {
  const handleClickItalki = () => {
    const italkiUrl =
      "https://www.italki.com/es/affshare?ref=fluentinspanglish";
    window.open(italkiUrl, "_blank");
  };
  const handleClickPreply = () => {
    const preplyUrl = "https://preply.com/en/tutor/200554";
    window.open(preplyUrl, "_blank");
  };
  return (
    <React.Fragment>
      <section className="bg-[#F3F5F5]" id="benefits">
        <div className="mb-20 text-[#F3F5F5] lg:mb-32">a</div>
        <div className="lg:flex lg:justify-center">
          <div className="px-12 mb-10">
            <span className="mb-5 text-xl font-bold text-[#202F5A]  text-left md:text-3xl lg:text-4xl">
              Beneficios de aprender inglés en línea.
            </span>
            <div className="">
              <div className="mt-6 md:hidden">
                <Image
                  src="/pics/photo-benefits.jpeg"
                  width={250}
                  height={100}
                  alt="photo"
                />
              </div>
              <div className="mt-6 hidden md:block md:mt-11 lg:hidden">
                <Image
                  src="/pics/photo-benefits.jpeg"
                  width={400}
                  height={150}
                  alt="photo"
                />
              </div>

              <div className="hidden lg:block lg:mt-16">
                <ul className="lg:mt-2">
                  <li className="flex mb-4">
                    <div className="mt-1 mr-2 md:mt-2 lg:mt-2">
                      <FaRegDotCircle />
                    </div>
                    <span className="text-[#1B263B] text-sm font-semibold md:text-lg lg:text-xl">
                      Recibirás enfoque personalizado.
                    </span>
                  </li>
                  <li className="flex mb-4">
                    <div className="mt-1 mr-2 md:mt-2 lg:mt-2">
                      <FaRegDotCircle />
                    </div>
                    <span className="text-[#1B263B] text-sm font-semibold md:text-lg lg:text-xl">
                      Tendrás mayor Flexibilidad y Comodidad.
                    </span>
                  </li>
                  <li className="flex mb-4">
                    <div className="mt-1 mr-2 md:mt-2 lg:mt-2">
                      <FaRegDotCircle />
                    </div>
                    <span className="text-[#1B263B] text-sm font-semibold md:text-lg lg:text-xl">
                      Enfoque Práctico en Gramática y Conversación.
                    </span>
                  </li>
                  <li className="flex mb-4">
                    <div className="mt-1 mr-2 md:mt-2 lg:mt-2">
                      <FaRegDotCircle />
                    </div>
                    <span className="text-[#1B263B] text-sm font-semibold md:text-lg lg:text-xl">
                      Apoyo Continuo y Retroalimentación Constructiva.
                    </span>
                  </li>
                  <li className="flex mb-4">
                    <div className="mt-1 mr-2 md:mt-2 lg:mt-2">
                      <FaRegDotCircle />
                    </div>
                    <span className="text-[#1B263B] text-sm font-semibold md:text-lg lg:text-xl">
                      Ambiente de Aprendizaje Cómodo.
                    </span>
                  </li>
                </ul>

                <div className="grid justify-items-center md:flex">
                  <button
                    className="btn bg-[#EE6771] border-none text-white font-light text-xs w-40 mt-8 mb-2 md:text-base md:w-48 lg:text-base lg:w-52 transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl"
                    onClick={handleClickItalki}
                  >
                    EMPIEZA CON ITALKI
                  </button>
                  <button
                    className="btn bg-[#EE6771] border-none text-white font-light text-xs w-40 mt-2 md:mt-8 md:text-base md:w-48 md:ml-4 lg:text-base lg:w-52 transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl"
                    onClick={handleClickPreply}
                  >
                    EMPIEZA CON PREPLY
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-8 md:px-11 md:mb-11 lg:hidden">
            <ul className="">
              <li className="flex mb-4">
                <div className="mt-1 mr-2 md:mt-2">
                  <FaRegDotCircle />
                </div>
                <span className="text-[#1B263B] text-sm font-semibold md:text-lg">
                  Recibirás enfoque personalizado.
                </span>
              </li>
              <li className="flex mb-4">
                <div className="mt-1 mr-2 md:mt-2">
                  <FaRegDotCircle />
                </div>
                <span className="text-[#1B263B] text-sm font-semibold md:text-lg">
                  Tendrás mayor Flexibilidad y Comodidad.
                </span>
              </li>
              <li className="flex mb-4">
                <div className="mt-1 mr-2 md:mt-2">
                  <FaRegDotCircle />
                </div>
                <span className="text-[#1B263B] text-sm font-semibold md:text-lg">
                  Enfoque Práctico en Gramática y Conversación.
                </span>
              </li>
              <li className="flex mb-4">
                <div className="mt-1 mr-2 md:mt-2">
                  <FaRegDotCircle />
                </div>
                <span className="text-[#1B263B] text-sm font-semibold md:text-lg">
                  Apoyo Continuo y Retroalimentación Constructiva.
                </span>
              </li>
              <li className="flex mb-4">
                <div className="mt-1 mr-2 md:mt-2">
                  <FaRegDotCircle />
                </div>
                <span className="text-[#1B263B] text-sm font-semibold md:text-lg">
                  Ambiente de Aprendizaje Cómodo.
                </span>
              </li>
            </ul>

            <div className="grid justify-items-center md:flex">
              <button
                className="btn bg-[#EE6771] border-none text-white font-light text-xs w-40 mt-8 mb-2 md:text-base md:w-48 transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl"
                onClick={handleClickItalki}
              >
                EMPIEZA CON ITALKI
              </button>
              <button
                className="btn bg-[#EE6771] border-none text-white font-light text-xs w-40 mt-2 md:mt-8 md:text-base md:w-48 md:ml-4 transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl"
                onClick={handleClickPreply}
              >
                EMPIEZA CON PREPLY
              </button>
            </div>
          </div>

          <div className="hidden lg:block ">
            <Image
              src="/pics/photo-benefits.jpeg"
              width={500}
              height={200}
              alt="photo"
            />
          </div>
        </div>

        <div className="mt-20 text-[#F3F5F5] lg:mt-32">a</div>
      </section>
    </React.Fragment>
  );
}
