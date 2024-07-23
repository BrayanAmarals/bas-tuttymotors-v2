"use client";

import getProduct from "@/api/product";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Product({ params }) {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    if (params.id) {
      getProduct(params.id, setProduto);
    }
  }, [params.id]);

  if (!produto) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex flex-col  lg:justify-between lg:gap-4 mx-auto  max-w-screen-xl px-6 py-12  md:px-12 md:py-20 lg:px-24 lg:py-0 mb-16 max-[800px]:py-0">
      <div className="flex flex-row items-center mt-20 gap-16 max-[800px]:items-start max-[800px]:flex-col max-[800px]:mt-4 ">
        <Image
          src={`${produto.src}`}
          width={350}
          height={350}
          className=" lg:w-1/2 max-[800px]:self-center"
          alt="productImg"
          priority
        />
        <div className=" lg:w-1/2 flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-3xl font-semibold">{produto.marca}</p>
            <p className="text-3xl">{produto.model}</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3 items-center">
              <div className="w-2 h-2 rounded-full bg-slate-400"></div>
              <p>Ano de fabricação: </p>
              <p>{produto.year}</p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="w-2 h-2 rounded-full bg-slate-400"></div>
              <p>Km's rodados: </p>
              <p>{produto.km}</p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="w-2 h-2 rounded-full bg-slate-400"></div>
              <div className="flex flex-row gap-3 items-end">
                <p className="text-xl font-medium">Valor: </p>
                <p className="text-xl font-medium">R${produto.price},00</p>
              </div>
            </div>
          </div>
          <a
            className="flex flex-row gap-3 items-center bg-[#e9e9ed] shadow-xl mb-10 p-4 rounded-sm w-[15rem] justify-center"
            href={`https://wa.me/5562983402969?text=Ol%C3%A1%2C%20vi%20o%20carro%20${produto.marca}%20-%20${produto.model}%20no%20seu%20site%20e%20tenho%20interesse%20em%20mais%20detalhes.`}
          >
            <Icon icon="ic:baseline-whatsapp" className="text-3xl" />
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
}
