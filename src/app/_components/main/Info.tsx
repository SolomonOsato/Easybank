import Image from "next/image";

export default function Info() {
  const InfoDetails = [
    {
      logo: "/icon-online.svg",
      heading: "Online Banking",
      content:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      logo: "/icon-budgeting.svg",
      heading: "Simple Budgeting",
      content:
        "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    },
    {
      logo: "/icon-onboarding.svg",
      heading: "Fast Onboarding",
      content:
        " We don’t do branches. Open your account in minutes online and start taking control of your finances right away. ",
    },
    {
      logo: "/icon-api.svg",
      heading: "Open API ",
      content:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];
  return (
    <section className="grid gap-8 text-center lg:text-left">
      <h2 className="text-4xl">Why choose Easybank?</h2>
      <p className="font-light max-w-[60ch]">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div className="grid gap-8 lg:gap-4 py-8 lg:grid-cols-4">
        {InfoDetails.map((detail, index) => (
          <section className="grid gap-8" key={index}>
            <Image
              src={detail.logo}
              alt={detail.heading}
              width={72}
              height={72}
              className="rounded-full justify-self-center lg:justify-self-start"
            />
            <h3 className="text-3xl">{detail.heading}</h3>
            <p className="font-light">{detail.content}</p>
          </section>
        ))}
      </div>
    </section>
  );
}
