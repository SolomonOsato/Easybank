import Container from "@/components/utils/Container";
import Image from "next/image";
import Logo from "@/components/utils/Logo";
import Nav from "./Nav";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky z-50 top-0 md:static bg-white">
      <Container>
        <header className="flex justify-between h-20 items-center">
          <Logo />
          <Nav />
          <Link
            href={"/"}
            className={buttonVariants({
              size: "sm",
              className: "px-4 hidden md:flex",
            })}
          >
            Request invite
          </Link>
        </header>
      </Container>
    </div>
  );
}
