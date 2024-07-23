import Image from "next/image";
import LinkButton from "@/components/linkButton";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Banner() {
  return (
    <div className="bg-[#051C2C] ">
      <section className="min-h-[90vh] py-12 flex flex-row justify-between items-center pl-[5%] max-[800px]:flex-col max-[800px]:pr-[5%] max-[800px]:justify-center max-[800px]:gap-0 max-[800px]:min-h-[80vh] ">
        <div>
          <Image
            src="/tuttyMotorsLogo2.png"
            width={400}
            height={100}
            className="max-[800px]:w-60 w-auto"
            priority
            alt="logo"
          />
          <h1 className="text-white text-4xl mt-10 mb-10 max-[800px]:text-3xl">
            Sua Revendedora de <br /> <b>VEÍCULOS SEMINOVOS</b>
          </h1>
          <LinkButton text="Estoque" href="/estoque" />
        </div>
        <Image
          src="/carro1.png"
          quality={100}
          width={1100}
          height={50}
          className="max-[800px]:mr-[-10%] "
          alt="carroBanner"
          priority
        />
      </section>
    </div>
  );
}
