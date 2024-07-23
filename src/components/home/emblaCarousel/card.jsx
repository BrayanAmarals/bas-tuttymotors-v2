import Image from "next/image";
import LinkButton from "@/components/linkButton";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Card(props) {
  return (
    <Link
      className="w-auto embla__slide flex flex-col h-auto shadow-xl cursor-pointer p-0 "
      href={`/estoque/${props.id}`}
    >
      <Image
        src={`${props.src}`}
        width={200}
        height={200}
        className="w-[20rem] h-[10rem] object-cover rounded-t-md"
        quality={100}
        alt="cardImg"
        priority
      />
      <div className="flex flex-row bg-[#051C2C] w-[20rem] ">
        <div className="w-[50%] text-white flex flex-col justify-center bg-[#051C2C] p-4 ">
          <p>{props.marca}</p>
          <p className="font-semibold text-2xl text-ellipsis line-clamp-2">
            {props.model}
          </p>
        </div>
        <div className="w-[50%] flex flex-col gap-2 bg-white p-4 pl-10 direitinha">
          <div className="flex flex-col ">
            <p className="font-light mb-[-6px]">ANO</p>
            <p className="font-medium">{props.year}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-light mb-[-6px]">KM</p>
            <p className="font-medium">{props.km}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-light mb-[-6px]">VALOR</p>
            <p className="font-medium">R${props.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
