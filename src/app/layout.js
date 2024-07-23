import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobileNav";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Tutty Motors",
  description: "Sua Revendedora de VEÍCULOS SEMINOVOS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header></Header>
        <MobileNav></MobileNav>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
