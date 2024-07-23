import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { array } from "../../../public/carros";
import Card from "@/components/home/emblaCarousel/card";

export default function Sobre() {
  return (
    <section className="flex flex-row  mx-auto max-w-screen-xl px-6 py-12  mt-16 max-[800px]:mt-0 max-[800px]:py-0">
      <div className="flex flex-row gap-14 max-[800px]:flex-col">
        <div className="flex flex-col  gap-8 w-1/2 max-[800px]:w-full">
          <h1 className="text-3xl ">ENTRE EM CONTATO</h1>
          <div className="flex flex-col">
            <p className="text-xl mb-3">NOSSO ENDEREÇO</p>
            <p>
              Av. Dr. Ismerino Soares de Carvalho, Número 302, Quadra 16A, Lote
              17, Setor Aeroporto - Goiânia, Goiás
            </p>
          </div>
          <div>
            <p className="text-xl mb-3">FALE CONOSCO</p>
            <p>(62) 3877 - 3970</p>
            <p>(62) 98340 - 2969</p>
          </div>
          <div>
            <p className="text-xl mb-3">NOSSO EMAIL</p>
            <p>comercial@tuttymotors.com.br</p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-8 max-[800px]:w-full">
          <h2 className="text-3xl">ENVIAR UMA MENSAGEM</h2>
          <div>
            <p>Nome</p>
            <input
              type="text"
              className="border-b-2 p-2 border-zinc-300 w-full"
              placeholder="Digite seu nome"
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="text"
              className="border-b-2 p-2 border-zinc-300 w-full"
              placeholder="Digite seu email"
            />
          </div>
          <div>
            <p>Telefone</p>
            <input
              type="text"
              className="border-b-2 p-2 border-zinc-300 w-full"
              placeholder="Digite seu telefone"
            />
          </div>
          <div>
            <p>Mensagem</p>
            <textarea
              type="text"
              className="border-b-2 p-2 border-zinc-300 w-full"
              placeholder="Digite sua mensagem"
            />
          </div>
          <button className="bg-[#e9e9ed] shadow-xl mb-10 p-4 rounded-sm">
            ENVIAR WHATSAPP
          </button>
        </div>
      </div>
    </section>
  );
}
