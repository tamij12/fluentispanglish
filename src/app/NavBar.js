"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <React.Fragment>
      <div className="navbar min-w-80 h-32 md:h-48 justify-between lg:px-11">
        <Link className="" href="/">
          <Image
            className="md:hidden ml-4"
            src="/pics/logo.svg"
            alt="logo-fluentispanglish"
            width={100}
            height={100}
          />
          <Image
            className="hidden md:block md:ml-6"
            src="/pics/logo.svg"
            alt="logo-fluentispanglish"
            width={150}
            height={150}
          />
        </Link>
        <div className="md:hidden ml-10">
          <details className="dropdown dropdown-end">
            <summary className="btn btn-ghost btn-circle m-1 bg-white border-none">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
            </summary>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  z-[1] mt-3 w-80 p-2 bg-white"
            >
              <li>
                <a className="hover:text-[#EE6771]" href="#inicio">Inicio</a>
              </li>
              <li>
                <a className="hover:text-[#EE6771]">Blog</a>
              </li>
              <li>
                <details open>
                  <summary className="hover:text-[#EE6771]">Para tí</summary>
                  <ul>
                    <li>
                      <a className="hover:text-[#EE6771]">Descargas gratis</a>
                    </li>
                    <li>
                      <a className="hover:text-[#EE6771]">Lecciones</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a className="hover:text-[#EE6771]" href="#aboutMe">Acerca de mí</a>
              </li>
              <li>
                <a className="hover:text-[#EE6771]" href="#testimonials">Testimonios</a>
              </li>
              <li>
                <a className="hover:text-[#EE6771]" href="#benefits">Beneficios</a>
              </li>
              <li>
                <a className="hover:text-[#EE6771]">Quiero clases</a>
              </li>
            </ul>
          </details>
        </div>

        <div className="hidden justify-end md:block md:ml-28">
          <div className="flex justify-evenly">
            <ul className="menu menu-horizontal px-1 text-base">
              <li className="">
                <a className="hover:text-[#EE6771]" href="#inicio">Inicio</a>
              </li>
              <li>
                <a className="hover:text-[#EE6771]">Blog</a>
              </li>
              <li>
                <a className="hover:text-[#EE6771]" href="#aboutMe">Acerca de mí</a>
              </li>
              <li>
                <details>
                  <summary className="hover:text-[#EE6771]">Para tí</summary>
                  <ul className="rounded-none bg-white">
                    <li>
                      <a className="hover:text-[#EE6771]">Lecciones</a>
                    </li>
                    <li>
                      <a className="hover:text-[#EE6771]">Descargas gratis</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a className="hover:text-[#EE6771]" href="#testimonials">Testimonios</a>
              </li>
              <li className="mt-1 md:ml-2">
                <button className="btn btn-sm bg-[#EE6771] border-none text-white">
                  Quiero clases
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
