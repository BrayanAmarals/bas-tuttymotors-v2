import Image from "next/image";
import { Icon } from "@iconify/react";
import LinkButton from "@/components/linkButton";
import Banner from "@/components/home/banner";
import EmblaCarousel from "./emblaCarousel/emblaCarousel";
import "./emblaCarousel/embla.css";
import "./emblaCarousel/base.css";
import "./emblaCarousel/sandbox.css";
import { array } from "../../../public/carros";

const OPTIONS = { align: "start" };
const SLIDE_COUNT = 6;
const SLIDES = array;

export default function Carousel() {
  return (
    <section>
      <div className="mt-14 mb-10 flex flex-row justify-around bg-[#051C2C] text-white py-5 max-[800px]:px-5 max-[800px]:justify-start max-[800px]:mb-10">
        <div>
          <p className="text-xl font-semibold">
            Encontre o veículo perfeito para o seu estilo de vida!
          </p>
          <p>Veja o nosso estoque completo.</p>
        </div>
        <LinkButton text="Estoque" href="/estoque" />
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
}
