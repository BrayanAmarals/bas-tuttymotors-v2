"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { array } from "../../../public/carros";
import Card2 from "@/components/home/emblaCarousel/card2";
import getProducts from "@/api/products";

import { useState, useEffect } from "react";
import { get } from "firebase/database";

export default function Sobre() {
  const [produtos, setProdutos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getProducts(setProdutos);
  }, []);

  return (
    <section className="flex flex-col  lg:gap-4 mx-auto max-w-screen-xl px-6 py-12 max-[800px]:mt-0 mb-24 max-[800px]:py-0">
      <input
        type="text"
        placeholder="Buscar modelo"
        className="bg-[#f0f0f0] p-3 px-8 rounded-md mb-6"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></input>
      <div className="grid grid-cols-4 max-[1200px]:grid-cols-3 max-[750px]:grid-cols-2 max-[580px]:grid-cols-1 gap-10">
        {produtos
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.year.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((card) => {
            return (
              <Card2
                key={card.id}
                id={card.id}
                src={card.src}
                marca={card.marca}
                model={card.model}
                year={card.year}
                km={card.km}
                price={card.price}
              ></Card2>
            );
          })}
      </div>
    </section>
  );
}
