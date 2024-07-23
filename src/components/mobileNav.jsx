"use client";

import React, { useState } from "react";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full flex items-end z-50 min-[800px]:hidden">
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-end cursor-pointer h-16 relative z-50 w-full mr-5"
      >
        <span
          className={`bg-black block transition-transform duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        isOpen
                          ? "rotate-45 translate-y-1.5"
                          : "-translate-y-0.5"
                      }`}
        />
        <span
          className={`bg-black block transition-opacity duration-300 ease-out 
                      h-0.5 w-6 rounded-sm my-0.5 ${
                        isOpen ? "opacity-0" : "opacity-100"
                      }`}
        />
        <span
          className={`bg-black block transition-transform duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        isOpen
                          ? "-rotate-45 -translate-y-1.5"
                          : "translate-y-0.5"
                      }`}
        />
      </button>

      <div
        className={`fixed inset-0 bg-slate-50 flex flex-col justify-center items-center transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 ease-in-out z-40`}
      >
        <ul className="text-center space-y-6">
          <Link href="/" className="text-[#2C2B2B]">
            <li
              className="w-full text-center border-b py-6"
              onClick={() => setIsOpen(false)}
            >
              Home
            </li>
          </Link>
          <Link href="/sobre" className="text-[#2C2B2B]">
            <li
              className="w-full text-center border-b py-6"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </li>
          </Link>
          <Link href="/estoque" className="text-[#2C2B2B]">
            <li
              className="w-full text-center border-b py-6"
              onClick={() => setIsOpen(false)}
            >
              Estoque
            </li>
          </Link>
          <Link href="/vender" className="text-[#2C2B2B]">
            <li
              className="w-full text-center border-b py-6"
              onClick={() => setIsOpen(false)}
            >
              Vender
            </li>
          </Link>
          <Link href="/contato" className="text-[#2C2B2B]">
            <li
              className="w-full text-center border-b py-6"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
