import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-items-end">
      <div className="flex justify-around px-10 py-6 shadow-md w-full bg-[#051C2C] items-center text-white ">
        <div className="text-[#979797] flex flex-col gap-3 max-[650px]:hidden">
          <Link href="/" className="text-xl">
            Home
          </Link>
          <Link href="/" className="text-xl">
            Sobre
          </Link>
          <Link href="/" className="text-xl">
            Comprar
          </Link>
          <Link href="/" className="text-xl">
            Vender
          </Link>
          <Link href="/" className="text-xl">
            Contato
          </Link>
        </div>
        <div className="text-[#979797] flex flex-col gap-5 max-[650px]:my-5">
          <div className="flex flex-row items-center gap-4 ">
            <Icon
              icon="icon-park-solid:local"
              className="text-3xl text-white max-[650px]:hidden"
            />
            <div>
              <p className="text-base">Endereço</p>
              <p className="text-white mt-[-3px] text-sm">
                Av. Dr. Ismerino Soares de Carvalho,
                <br /> Número 302, Quadra 16A, Lote 17,
                <br /> Setor Aeroporto - Goiânia, Goiás
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 ">
            <Icon
              icon="ic:baseline-phone"
              className="text-3xl text-white max-[650px]:hidden"
            />
            <div>
              <p className="text-base">Telefone</p>
              <p className="text-white mt-[-3px] text-sm">
                +55 62 3877-3970 | +55 62 98340-2969
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 ">
            <Icon
              icon="ic:baseline-email"
              className="text-3xl text-white max-[650px]:hidden"
            />
            <div>
              <p className="text-base">Email</p>
              <p className="text-white mt-[-3px] text-sm">
                comercial@tuttymotors.com.br
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
