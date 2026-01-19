import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Agency — Creative Digital Studio",
  description: "We craft exceptional digital experiences that push boundaries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
