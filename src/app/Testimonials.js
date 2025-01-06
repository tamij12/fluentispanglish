import Link from "next/link";
import React from "react";

export default function Testimonials() {
  return (
    <React.Fragment>
      <section className="mb-24" id="testimonials">
        <div className="text-center ">
          <p className="text-xs font-semibold mb-12 lg:text-sm">TESTIMONIOS</p>
          <div className="rating rating-sm md:rating-md">
            <input
              type="radio"
              name="rating-9"
              className="rating-hidden bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2 bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2 bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2 bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2 bg-yellow-400"
            />
            <input
              type="radio"
              name="rating-9"
              className="mask mask-star-2 bg-yellow-400"
              defaultChecked
            />
          </div>
        </div>
        <div className="mb-8 md:mb-11">
          <h2 className="text-4xl font-medium leading-snug  text-center">
            La Experiencia Importa
          </h2>
        </div>

        <div className="md:flex md:justify-center">
          <div className="grid justify-items-center text-center mb-8 md:mr-8 md:h-96">
            <div className="bg-slate-50 w-64 mb-6 rounded md:w-72 lg:w-96">
              <p className="px-8 py-8 text-[#495057CF] lg:text-lg">
                "I had a great class with Oscar, He has a great accent! Our
                first class we discussed about somethings regarding to bussiness
                english who is one of my goals to improvements. I really urge
                you to have a class with him."
              </p>
              <div>
                <div className="avatar flex justify-start px-16 mb-8 md:mt-6 md:px-14 lg:mt-10">
                  <div className="avatar placeholder w-12 rounded-full md:w-16 lg:w-12 ">
                    <div className="bg-slate-400 w-12 rounded-full">
                      <a
                        className="text-white"
                        href="https://preply.com/en/tutor/200554#:~:text=I%20had%20a%20great%20class%20with%20Oscar%2C%20He%20has%20a%20great%20accent!%20Our%20first%20class%20we%20discussed%20about%20somethings%20regarding%20to%20bussiness%20english%20who%20is%20one%20of%20my%20goals%20to%20improvements.%20I%20really%20urge%20you%20to%20have%20a%20class%20with%20him."
                      >
                        V
                      </a>
                    </div>
                  </div>
                  <p className="m-2 text-xs font-bold md:text-sm md:ml-8 lg:ml-4 lg:mt-4 lg:px-2">
                    Victor{" "}
                    <span className="text-[#EE6771] text-xs font-light md:ml-2 md:text-sm md:font-normal">
                      Brazil
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid justify-items-center text-center md:h-96">
            <div className="bg-slate-50 w-64 mb-6 rounded md:w-72 lg:w-96">
              <p className="px-8 py-8 text-[#495057CF] lg:text-lg">
                "Oscar is a great teacher! He is knowledgeable and is very
                patient. He also answers my questions very clearly! I highly
                recommend Oscar as a Tutor."
              </p>

              <div>
                <div className="avatar flex justify-start px-14 mb-8 md:mt-24 lg:px-12 lg:mt-24">
                  <div className="avatar placeholder w-12 rounded-full md:w-16 lg:w-12 ">
                    <div className="bg-slate-400 w-12 rounded-full">
                      <a
                        className="text-white"
                        href="https://preply.com/en/tutor/200554#:~:text=Oscar%20is%20a%20great%20teacher!%20He%20is%20knowledgeable%20and%20is%20very%20patient.%20He%20also%20answers%20my%20questions%20very%20clearly!%20I%20highly%20recommend%20Oscar%20as%20a%20Tutor."
                      >
                        SA
                      </a>
                    </div>
                  </div>
                  <p className="m-2 text-xs font-bold md:text-sm lg:ml-8 lg:px-2 lg:mt-3">
                    Salomon{" "}
                    <span className="text-[#EE6771] text-xs font-light  md:ml-2 md:text-sm md:font-normal">
                      Mexico
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 text-center mt-11">
          <p className="text-sm leading-snug mb-2 text-[#495057CF] md:text-base">
            ¿Quieres ver todas mis reseñas?
          </p>
          <Link
            href="https://preply.com/en/tutor/200554"
            className="text-[#EE6771] font-bold md:text-lg hover:text-[#212529]"
          >
            Ver más testimonios{" "}
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
}
