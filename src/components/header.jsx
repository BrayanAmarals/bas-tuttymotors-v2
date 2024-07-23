import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import MobileNav from "./mobileNav";

export default function Header() {
  return (
    <nav className="flex justify-around px-10 py-6 shadow-md  w-full bg-white items-center max-[800px]:px-0 max-[800px]:hidden">
      <Image src="/tuttyMotorsLogo.png" width={100} height={100} />
      <div className="flex flex-row gap-10 ">
        <Link href="/" className="text-[#2C2B2B]">
          Home
        </Link>
        <Link href="/sobre" className="text-[#2C2B2B]">
          Sobre
        </Link>
        <Link href="/estoque" className="text-[#2C2B2B]">
          Estoque
        </Link>
        <Link href="/vender" className="text-[#2C2B2B]">
          Vender
        </Link>
        <Link href="/contato" className="text-[#2C2B2B]">
          Contato
        </Link>
      </div>

      <div className="flex flex-row gap-5 max-[800px]:hidden">
        <a href="">
          <Icon icon="mdi:instagram" className="text-2xl text-[#2C2B2B]" />
        </a>
        <a href="">
          <Icon
            icon="ic:baseline-whatsapp"
            className="text-2xl text-[#2C2B2B]"
          />
        </a>
      </div>
    </nav>
  );
}
