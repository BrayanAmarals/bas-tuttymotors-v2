import Image from "next/image";
import { Icon } from "@iconify/react";
import LinkButton from "@/components/linkButton";
import Banner from "@/components/home/banner";
import Carousel from "@/components/home/carousel";
import Comments from "@/components/home/comments";

export default function Home() {
  return (
    <main className="bg-[#f9f9f9]">
      <Banner></Banner>
      <Carousel></Carousel>
      <Comments></Comments>
    </main>
  );
}
