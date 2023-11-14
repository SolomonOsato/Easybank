"use client";

import Container from "@/components/utils/Container";
import { Logo } from "../utils";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Footer() {
  const Socials = [
    "/icon-facebook.svg",
    "/icon-youtube.svg",
    "/icon-twitter.svg",
    "/icon-pinterest.svg",
    "/icon-instagram.svg",
  ];
  const Footerslinks = [
    "About Us",
    "Contact",
    "Blog",
    "Careers",
    "Support",
    "Privacy Policy",
  ];
  return (
    <footer className="bg-primary-blue text-neutral-lblue py-16">
      <Container className="grid gap-8 lg:grid-cols-3">
        <div className="grid gap-4 justify-center lg:justify-start items-baseline">
          <Logo fill="white" />
          <div className="flex gap-2">
            {Socials.map((social, index) => (
              <Link key={index} href={"/"}>
                <Image
                  src={social}
                  alt={social.split("/")[1]}
                  width={21}
                  height={19}
                />
              </Link>
            ))}
          </div>
        </div>
        <ul className="text-center items-baseline lg:text-left grid gap-2 lg:gap-4 lg:grid-cols-2">
          {Footerslinks.map((link) => (
            <li key={link}>
              <Link href={"/"}>{link}</Link>
            </li>
          ))}
        </ul>
        <div className="grid justify-center lg:justify-end gap-8 text-center lg:text-right">
          <Link
            href={"/"}
            className={buttonVariants({
              size: "sm",
              className: "px-4 w-fit justify-self-center lg:justify-self-end",
            })}
          >
            Request invite
          </Link>
          <p>&copy; Easybank. All rights reserved</p>
        </div>
      </Container>
    </footer>
  );
}
