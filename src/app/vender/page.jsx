import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { array } from "../../../public/carros";
import Card from "@/components/home/emblaCarousel/card";

export default function Vender() {
  return (
    <section className="flex flex-col mx-auto min-h-screen max-w-screen-xl px-6 py-12  md:px-12 md:py-20 lg:px-24 lg:py-0 mt-16 max-[800px]:mt-0 max-[800px]:py-0">
      <h1 className="text-3xl mb-8">VENDA SEU VEÍCULO</h1>
      <div>
        <p>
          Você quer vender seu veículo? Ou pelo menos pensando em vender? Vender
          seu automóvel pode te trazer um excelente retorno financeiro, e nós da
          Tutty Motors podemos te ajudar nesse processo. Além de fazermos uma
          avaliação prévia do carro e fazermos uma proposta para comprar seu
          veículo à vista, também fazemos a venda por &apos;Consignação&apos;.
          Mas afinal, como isso funciona?
          <br />
          <br />
        </p>
        <p>
          A Venda Consignada consiste em você, proprietário do veículo, fazer a
          venda através de nós concessionária. Nós ficamos em posse do veículo e
          temos o objetivo de vendê-lo no preço e prazo estipulado, tudo firmado
          por um Contrato de Consignação.
          <br />
          <br />
        </p>
        <p>
          Em resumo, nós cuidamos de cada detalhe do processo de venda:
          anunciamos o carro, achamos o comprador, negociamos as formas de
          pagamento e organizamos toda parte burocrática da documentação. Ou
          seja, você NÃO precisa se dedicar para vender seu veículo, nós
          organizamos tudo... Basta trazê-lo e assinar o contrato, o resto é com
          a gente!
          <br />
          <br />
        </p>
        <p>
          Para facilitar o processo, preencha o formulário abaixo escolhendo
          qual modalidade de venda você tem preferência e adicione seus dados
          para contato/informações do veículo.
        </p>
      </div>
      <div className="flex flex-row justify-between gap-10 mt-14 max-[800px]:flex-col max-[800px]:gap-14">
        <div className="w-1/2 flex flex-col gap-8 max-[800px]:w-full">
          <h2 className="text-xl ">DADOS PESSOAIS</h2>
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
        </div>
        <div className="w-1/2 flex flex-col gap-8 max-[800px]:w-full">
          <h2 className="text-xl">DADOS DO VEÍCULO</h2>
          <div>
            <p>Marca</p>
            <input
              type="text"
              className="border-b-2 p-2 border-zinc-300 w-full"
              placeholder="Digite seu nome"
            />
          </div>
          <div>
            <p>Modelo</p>
            <input
              type="text"
              className="border-b-2 p-2 border-zinc-300 w-full"
              placeholder="Digite seu email"
            />
          </div>
          <div>
            <p>Ano Fabricação/Ano Modelo</p>
            <input
              type="text"
              className="border-b-2 p-2 border-zinc-300 w-full"
              placeholder="Digite seu telefone"
            />
          </div>
          <div>
            <p>Quilometragem</p>
            <input
              type="text"
              className="border-b-2 p-2 border-zinc-300 w-full"
              placeholder="Digite seu telefone"
            />
          </div>
          <div>
            <p>Detalhes do Veículo</p>
            <textarea
              type="text"
              className="border-b-2 p-2 border-zinc-300 w-full"
              placeholder="Digite seu telefone"
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
