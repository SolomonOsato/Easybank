import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const public_Sans = Public_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EasyBank | Home",
  description: "A virtual financial institution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${public_Sans.className} text-lg`}>{children}</body>
    </html>
  );
}
