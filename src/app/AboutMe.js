import Image from "next/image";
import React from "react";

export default function AboutMe() {
  const handleClickItalki = () => {
    const italkiUrl =
      "https://www.italki.com/es/affshare?ref=fluentinspanglish";
    window.open(italkiUrl, "_blank");
  };
  const handleClickPreply = () => {
    const preplyUrl = "https://preply.com/en/tutor/200554";
    window.open(preplyUrl, "_blank");
  };
  const styleimg = {
    backgroundColor: "transparent",
  };
  return (
    <React.Fragment>
      <section id="aboutMe" className="mb-32 bg-slate-50">
        <div className="mb-24 text-[#F3F5F5] md:mb-32">a</div>
        <div className="text-center">
          <p className="text-xs  font-semibold lg:text-sm">ACERCA DE MI</p>
        </div>
        <div className="px-14 mb-10 mt-6 md:px-32 md:mt-8 md:mb-20 lg:px-96">
          <h2 className="text-4xl font-medium leading-snug mb-8 text-center md:text-5xl md:mb-20 lg:text-6xl lg:font-normal">
            Maestro de inglés | Tutor certificado
          </h2>
          <div className="flex justify-center md:hidden">
            <Image
              className="rounded shadow-lg"
              src="/pics/profile.svg"
              width={140}
              height={140}
              alt="profile"
            />
          </div>
          <div className=" flex justify-center">
            <Image
              className="hidden md:block rounded shadow-lg"
              src="/pics/profile.svg"
              width={190}
              height={190}
              alt="profile"
            />
          </div>
        </div>
        <div className="text-center px-8 mb-16 md:px-24 lg:px-96">
          <p className="font-extrabold text-lg mb-6 md:text-xl lg:text-2xl">
            ¿Quién soy?
          </p>
          <div>
            <p className="text-[#495057] mb-6 md:text-lg lg:text-xl lg:px-16">
              ¡Hola! Me llamo Oscar y soy originario de Oaxaca. De niño, mi
              familia y yo nos mudamos a los Estados Unidos, donde viví la mayor
              parte de mi vida, pero actualmente vivo de nuevo en México.
              Aprendí a hablar inglés de manera fluida por medio de la escuela y
              el español debido a que lo hablaba en casa.
            </p>
            <p className="text-[#495057] md:text-lg lg:text-xl lg:px-16">
              En 2018, recibí mi certificado para enseñar inglés (TESOL) y
              comencé a dar clases en persona. Poco después, en línea.
            </p>
          </div>
        </div>
        <div className="text-center px-8 md:px-24 lg:px-96">
          <p className="font-extrabold text-lg mb-6 md:text-xl lg:text-2xl">
            ¿Cuál es mi objetivo?
          </p>
          <div>
            <p className="text-[#495057] md:text-lg lg:text-xl lg:px-16">
              Apoyar a los hispanohablantes para que obtengan confianza al
              hablar inglés y puedan desenvolverse mejor. Al crecer, vi de
              primera mano los desafíos que enfrentaron mis padres debido a su
              limitada fluidez en inglés. Gracias a que mi padre se esforzó
              arduamente por mejorar su inglés, pudo crecer su negocio. Ahora,
              quiero ayudar a otros que se encuentren en la misma situación.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-medium leading-snug mt-12 text-center text-[#202F5A] md:mt-20 lg:mt-24 lg:font-normal">
            Encuéntrame en:
          </h2>
          <div className="grid justify-items-center mt-6">
            <button
              className="mt-2 transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl"
              onClick={handleClickItalki}
            >
              <Image
                src="/pics/italki.png"
                width={60}
                height={60}
                alt="preply-logo"
              />
            </button>
            <button
              className="mt-6 transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl"
              onClick={handleClickPreply}
            >
              <Image
                src="/pics/Preply-logo.png"
                width={70}
                height={70}
                alt="preply-logo"
              />
            </button>
          </div>
        </div>
        <div className="mt-20 text-[#F3F5F5]">a</div>
      </section>
    </React.Fragment>
  );
}
