import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function LinkButton(props) {
  return (
    <a
      className="flex flex-row items-center justify-center bg-[#568194] w-[10rem] h-[3rem] rounded-md text-white gap-3 max-[800px]:hidden max-[800px]:mx-2"
      href={props.href}
    >
      {props.text}
      <Icon icon="weui:arrow-outlined" className="text-white" />
    </a>
  );
}
