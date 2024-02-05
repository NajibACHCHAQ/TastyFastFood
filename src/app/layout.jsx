import {  Roboto } from "next/font/google";
import Header from "./components/layout/Header";

import "./globals.css";
import { Footer } from "./components/layout/Footer";

const roboto = Roboto({ subsets: ["latin"], weight:['100', '300', '400', '500', '700', '900'] });

export const metadata = {
  title: "Fast&Tasty",
  description: "Le Fast-Food qui a du gout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        <main className="max-w-[1140px] mx-auto p-4">
          <Header/>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
