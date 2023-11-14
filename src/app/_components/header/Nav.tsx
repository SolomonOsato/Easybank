"use client";

import Link from "next/link";
import MenuOpen from "../../../../public/icon-hamburger.svg";
import MenuClose from "../../../../public/icon-close.svg";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const NavLinks = ["Home", "About", "Contact", "Blog", "Careers"];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav>
      {!isOpen ? (
        <Image
          className="lg:hidden"
          onClick={() => setIsOpen(true)}
          src={MenuOpen}
          alt="menu"
        />
      ) : (
        <Image
          className="lg:hidden"
          onClick={() => setIsOpen(false)}
          src={MenuClose}
          alt="menu"
        />
      )}
      <ul className={`lg:hidden grid items-start justify-center py-8 fixed top-20 right-0 bottom-0 left-0 bg-primary-blue/30 transition-transform z-50 ${isOpen ? "translate-y-0" : "-translate-y-[100vh]"}`}>
        <div className="bg-white w-[90vw] grid items-start gap-2 rounded-xl text-center font-bold">
          {NavLinks.map((link) => (
            <li className="p-4" key={link}>
              <Link className="p-0 text-emerald-950" onClick={() => setIsOpen(false)} href={"/"}>
                {link}
              </Link>
            </li>
          ))}
        </div>
      </ul>
      <ul className="hidden lg:flex lg:gap-2">
        {NavLinks.map((link) => (
          <li key={link}>
            <Link className="p-4 cursor-pointer hover:border-b-emerald-400 active:border-b-emerald-400 hover:border-b-[4px] active:border-b-[4px]" href={"/"}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
