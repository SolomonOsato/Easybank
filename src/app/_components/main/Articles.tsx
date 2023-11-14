import Image from "next/image";
import Link from "next/link";

export default function Articles() {
  const ArticlesList = [
    {
      image: "/image-currency.jpg",
      author: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      description:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      image: "/image-restaurant.jpg",
      author: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      description:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      image: "/image-plane.jpg",
      author: "Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      description:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
      image: "/image-confetti.jpg",
      author: "Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      description:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    },
  ];

  return (
    <section>
      <h2 className="text-4xl">Latest Articles</h2>
      <div className="grid gap-8 lg:gap-4 py-8 lg:grid-cols-4 ">
        {ArticlesList.map((article, index) => (
          <section className="rounded-lg shadow overflow-hidden" key={index}>
            <Image
              className="w-full"
              src={article.image}
              alt={article.title}
              width={533}
              height={400}
            />
            <div className="grid gap-4 p-8">
              <span className="font-light text-sm">By {article.author}</span>
              <h3 className="text-3xl">
                <Link
                  href={"/"}
                  className="hover:text-emerald-400 active:text-emerald-400 cursor-pointer"
                >
                  {article.title}
                </Link>
              </h3>
              <p className="font-light">{article.description}</p>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
