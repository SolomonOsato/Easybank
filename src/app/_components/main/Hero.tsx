import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../../../public/image-mockups.png";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="grid gap-0 md:gap-8 md:grid-cols-2 pb-8">
      <div className="order-1 md:order-2 bg-mobile md:bg-desktop overflow-y-hidden md:overflow-y-visible md:bg-cover h-[25rem]">
        <Image className="relative -top-[30%] md:top-[20%]" src={HeroImage} alt="mockup" />
      </div>
      <div className="text-center md:text-left text-primary-blue order-2 md:order-1 grid gap-8 md:gap-8 md:place-content-center">
        <h1 className="text-5xl">Next generation digital banking</h1>
        <p className="font-light">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more
        </p>
          <Link
            href={"/"}
            className={buttonVariants({
              size: "lg",
              className: "justify-self-center md:justify-self-start",
            })}
          >
            Request invite
          </Link>
      </div>
    </section>
  );
}
