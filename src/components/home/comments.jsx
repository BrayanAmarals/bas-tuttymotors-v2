import Image from "next/image";
import { Icon } from "@iconify/react";
import LinkButton from "@/components/linkButton";

export default function Comments() {
  return (
    <section className="flex items-center flex-col bg-[#E5E7E8] mt-14 pb-14 max-[800px]:mt-10">
      <div className=" mb-10 flex flex-row justify-around bg-[#051C2C] text-white py-5 w-full max-[800px]:px-5 max-[800px]:justify-start">
        <div>
          <p className="text-xl font-semibold ">Saiba mais sobre nós!</p>
          <p>Conheça todos os nossos serviços!</p>
        </div>
        <LinkButton text="Sobre" href="/sobre" />
      </div>
      <div className=" grid grid-cols-2 gap-10 justify-around max-[800px]:grid-cols-1 max-[450px]:px-5">
        <Image src="/comentario1.png" width={400} height={400} alt="comment1" />
        <Image src="/comentario2.png" width={400} height={400} alt="comment2" />
        <Image src="/comentario3.png" width={400} height={400} alt="comment3" />
        <Image src="/comentario4.png" width={400} height={400} alt="comment4" />
      </div>
    </section>
  );
}
