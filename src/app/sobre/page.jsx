import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Sobre() {
  return (
    <section className="flex flex-col  lg:justify-between lg:gap-4 mx-auto min-h-screen max-w-screen-xl px-6 py-12  md:px-12 md:py-0 lg:px-24 lg:py-0 max-[800px]:py-0">
      <div className="flex flex-row items-center mt-20 gap-16 max-[800px]:items-start max-[800px]:flex-col max-[800px]:mt-4 ">
        <Image
          src="/fachada.png"
          width={350}
          height={350}
          className=" lg:w-1/3 max-[800px]:self-center"
          alt="fachada"
        />
        <div className=" lg:w-2/3 flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-3xl">MISSÃO</p>
            <p>
              Transformar e democratizar o processo de compra e venda de carros
              seminovos através de uma relação sincera, simples e de qualidade
              com nosso cliente.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-3xl">VISÃO</p>
            <p>
              Nos tornar a principal concessionária de seminovos de toda a
              região metropolitana de Goiânia até 2023, através de carros com
              procedência/qualidade e inovação no mundo digital automotivo.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-14 max-[800px]:items-start max-[800px]:flex-col">
        <div className=" lg:w-1/2 flex flex-col gap-3">
          <p className="text-3xl">VALORES</p>
          <ul className="flex flex-col gap-2">
            <li className="flex flex-row gap-3 items-center">
              <div className="w-8 h-[2px] bg-[#e3e3e3]"></div>Só é bom para a
              gente, se for bom para o cliente;
            </li>
            <li className="flex flex-row gap-3 items-center">
              <div className="w-8 h-[2px] bg-[#e3e3e3]"></div>Fanáticos pelo
              mundo Digital;
            </li>
            <li className="flex flex-row gap-3 items-center">
              <div className="w-8 h-[2px] bg-[#e3e3e3]"></div>Apaixonados pela
              inovação no segmento automotivo;
            </li>
            <li className="flex flex-row gap-3 items-center">
              <div className="w-8 h-[2px] bg-[#e3e3e3]"></div>Coragem e
              Superação no dia a dia;
            </li>
            <li className="flex flex-row gap-3 items-center">
              <div className="w-8 h-[2px] bg-[#e3e3e3]"></div>Ética e Respeito
              às Pessoas;
            </li>
            <li className="flex flex-row gap-3 items-center">
              <div className="w-8 h-[2px] bg-[#e3e3e3]"></div>Transparência e
              Bom Senso na Negociação;
            </li>
            <li className="flex flex-row gap-3 items-center">
              <div className="w-8 h-[2px] bg-[#e3e3e3]"></div>Ambiente Limpo e
              Organizado.
            </li>
          </ul>
        </div>
        <Image
          src="/carro3.png"
          width={500}
          height={500}
          className=" lg:w-1/2 max-[800px]:mt-10"
          alt="carro1"
        />
      </div>
      <div className="flex flex-col mt-14">
        <div>
          <p className="text-3xl mb-3">SERVIÇOS</p>
          <div className="grid grid-cols-2 gap-8 max-[800px]:grid-cols-1">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-xl">Venda</p>
                <div className="w-10 h-[2px] bg-[#e3e3e3]"></div>
              </div>
              <p className="font-light">
                Venha conhecer o nosso showroom! Temos várias opções de marcas e
                modelos em nosso estoque. Entregamos o seu veículo em todo o
                Brasil.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-xl">Compra</p>
                <div className="w-10 h-[2px] bg-[#e3e3e3]"></div>
              </div>
              <p className="font-light">
                Compramos o seu veículo à vista mediante a avaliação prévia.
                Entre na aba Vender e preencha seus dados para entrarmos em
                contato!
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-xl">Consignação</p>
                <div className="w-10 h-[2px] bg-[#e3e3e3]"></div>
              </div>
              <p className="font-light">
                Está querendo vender seu carro? Cuidamos de todo o processo para
                a exposição e venda em nosso showroom. Preencha os dados na aba
                Vender para entrarmos em contato!
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-xl">Financiamento</p>
                <div className="w-10 h-[2px] bg-[#e3e3e3]"></div>
              </div>
              <p className="font-light">
                Trabalhamos com as melhores taxas do mercado para que o
                financiamento do seu veículo tenha as menores e melhores
                parcelas. Envie uma mensagem para uma fazer simulaçao!
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-xl">Seguro</p>
                <div className="w-10 h-[2px] bg-[#e3e3e3]"></div>
              </div>
              <p className="font-light">
                Curta seu carro novo com segurança! Temos parceiros que irão te
                ajudar nesta etapa. Entre em contato para te direciornarmos!
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-xl">Despachante</p>
                <div className="w-10 h-[2px] bg-[#e3e3e3]"></div>
              </div>
              <p className="font-light">
                Não se preocupe com toda a burocracia de transferência e
                documentações extras. Nos procure pelo whatsapp e todos esses
                trâmites irão se resolver de forma rápida e segura.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-xl">Consultoria</p>
                <div className="w-10 h-[2px] bg-[#e3e3e3]"></div>
              </div>
              <p className="font-light">
                Está em dúvida sobre qual carro comprar? Mande uma mensagem que
                iremos te ajudar a escolher o modelo ideal para o seu estilo de
                vida!
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <p className="text-xl">Atendimento Online</p>
                <div className="w-10 h-[2px] bg-[#e3e3e3]"></div>
              </div>
              <p className="font-light">
                Prezamos pelo nosso atendimento online: tire todas as suas
                dúvidas sobre os nossos serviços e estoque através do nosso
                whatsapp e de nossas redes sociais.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-10 pb-14">
          <Image
            src="/carro4.png"
            width={500}
            height={500}
            className="self-center"
            alt="carro2"
          />
        </div>
      </div>
    </section>
  );
}
