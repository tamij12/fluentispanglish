import React from "react";

import { MdCircle } from "react-icons/md";

export default function Info() {
  return (
    <React.Fragment>
      <section className="text-center bg-[#F3F5F5]">
        <div className="mb-24 text-[#F3F5F5] md:mb-32 lg:mb-48">a</div>
        <div className="flex justify-center">
          <div className="mr-3 md:mt-1">
            <MdCircle />
          </div>
          <p className="text-xs font-semibold md:text-sm">
            CLASES PRIVADAS EN LÍNEA
          </p>
        </div>
        <div className="px-14 mb-10 mt-6 md:px-32 md:mb-16 md:mt-8 lg:px-96">
          <h2 className="mb-5 text-4xl font-bold text-[#202F5A]  leading-normal text-left md:text-center lg:px-16 lg:text-5xl">
            Agenda tu primer clase de inglés en línea.
          </h2>
        </div>
        <button className="btn bg-[#EE6771] border-none text-white font-light text-xs w-48 md:text-base transition duration-75 ease-in-out hover:scale-110 hover:drop-shadow-2xl">
          MÁS INFORMACIÓN
        </button>
        <div className="mt-24 text-[#F3F5F5] md:mt-32 lg:mt-48">a</div>
      </section>
    </React.Fragment>
  );
}
