import type { NextPage } from "next";

import Head from "next/head";
import { FormEvent, RefObject, useRef, useState } from "react";
import moment from "moment";

import { IoAddOutline } from "react-icons/io5";
import { StickyTop } from "../../components/StickyTop";
import { set } from "zod";

export async function getStaticProps() {
  moment.locale("pt-br");
  const today = moment();
  return {
    props: {
      month: today.format("MMMM"),
      lastMonth: today.subtract(1, "month").format("MMMM"),
      lastLastMonth: today.subtract(2, "month").format("MMMM"),
    },
  };
}

const Inventory = ({ scroll }: { scroll: () => void }) => {
  return (
    <div className="mt-4 flex gap-6 pb-2">
      <div className="flex flex-col gap-4">
        <input
          className="w-64 rounded-xl border border-neutral-600 py-2 px-4"
          type="text"
          placeholder="Farinha de 10kg"
          onFocus={scroll}
        />
      </div>
      <div className="flex flex-col gap-4">
        <input
          className="w-48 rounded-xl border border-neutral-600 py-2 px-4"
          type="text"
          placeholder="10 sacos"
          onFocus={scroll}
        />
      </div>
    </div>
  );
};

const BestSale = ({ scroll }: { scroll: () => void }) => (
  <>
    <div className="flex gap-8">
      <div className="flex flex-col gap-4">
        Valor de compra
        <input
          className="w-64 rounded-xl border border-neutral-600 py-2 px-4"
          type="text"
          placeholder="2000"
          onFocus={scroll}
        />
      </div>
      <div className="flex flex-col gap-4">
        Valor de venda
        <input
          className="w-64 rounded-xl border border-neutral-600 py-2 px-4"
          type="text"
          placeholder="1500"
          onFocus={scroll}
        />
      </div>
    </div>
    <div className="flex gap-8">
      <div className="flex flex-col gap-4">
        Quantidade vendida
        <input
          className="w-64 rounded-xl border border-neutral-600 py-2 px-4"
          type="text"
          placeholder="800"
          onFocus={scroll}
        />
      </div>
      <div className="mb-4 flex flex-col gap-4">
        Estoque
        <input
          className="w-64 rounded-xl border border-neutral-600 py-2 px-4"
          type="text"
          placeholder="800"
          onFocus={scroll}
        />
      </div>
    </div>
  </>
);

const Business: NextPage<Record<string, string>> = ({
  month,
  lastMonth,
  lastLastMonth,
}) => {
  const typeRef = useRef<HTMLDivElement>(null);
  const inventoryRef = useRef<HTMLDivElement>(null);
  const investRef = useRef<HTMLDivElement>(null);
  const remunerationRef = useRef<HTMLDivElement>(null);
  const placeRef = useRef<HTMLDivElement>(null);
  const saleRef = useRef<HTMLDivElement>(null);
  const bestRef = useRef<HTMLDivElement>(null);

  const scrollInto = (ref: RefObject<HTMLDivElement>) => {
    if (!ref.current) {
      return;
    }

    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const [showProduct, setShowProduct] = useState(false);
  const showProductQuestion = () => setShowProduct(true);

  const [showIncome, setShowIncome] = useState(false);
  const showIncomeQuestion = () => {
    setShowIncome(true);
    scrollInto(remunerationRef);
  };

  const [showComercial, setShowComercial] = useState(false);
  const showComercialQuestion = () => {
    setShowComercial(true);
    setShowTime(false);
    scrollInto(placeRef);
  };

  const [showTime, setShowTime] = useState(false);
  const showTimeQuestion = () => {
    setShowTime(true);
    setShowComercial(false);
    scrollInto(placeRef);
  };

  const [inventories, setInventories] = useState<JSX.Element[]>([
    <Inventory key={1} scroll={() => scrollInto(inventoryRef)} />,
  ]);

  const addInventory = () => {
    if (inventories.length >= 3) {
      return;
    }
    setInventories((prev) => [
      ...prev,
      <Inventory key={prev.length} scroll={() => scrollInto(inventoryRef)} />,
    ]);
  };

  const [bestSales, setBestSales] = useState<JSX.Element[]>([
    <BestSale key={1} scroll={() => scrollInto(bestRef)} />,
  ]);

  const addBestSale = () => {
    if (bestSales.length >= 3) {
      return;
    }

    setBestSales((prev) => [
      ...prev,
      <BestSale key={prev.length} scroll={() => scrollInto(bestRef)} />,
    ]);
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>avalizo | Informações do negócio</title>
        <meta name="description" content="avalizo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StickyTop>
        <>
          <h1 className="text-3xl font-bold">Seu negócio</h1>
          <p className="mt-2 text-neutral-600">
            Agora preciso saber sobre o seu empreendimento!
          </p>
        </>
      </StickyTop>

      <main className="container mx-auto mt-56 flex min-h-screen flex-col items-center">
        <form className="my-16 w-[720px]" onSubmit={submit}>
          <div className="scroll-mt-72 text-neutral-600" ref={typeRef}>
            1. Tipo do empreendimento
          </div>
          <div className="mt-4 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              O seu negócio oferece:
              <div className="flex gap-12 text-center text-white">
                <div
                  className="w-48 cursor-pointer rounded-full bg-hack-blue-dark py-2"
                  onClick={showProductQuestion}
                >
                  Produtos
                </div>
                <div className="w-48 cursor-pointer rounded-full bg-hack-blue-dark py-2">
                  Serviços
                </div>
              </div>
            </div>
            {showProduct && (
              <div className="flex flex-col gap-4">
                Qual é o produto?
                <input
                  className="w-64 rounded-xl border border-neutral-600 py-2 px-4 transition-all duration-300 ease-out focus:w-full"
                  type="text"
                  placeholder="Bolos e doces"
                  onFocus={() => scrollInto(typeRef)}
                />
              </div>
            )}
          </div>

          <div
            className="mt-24 scroll-mt-72 text-neutral-600"
            ref={inventoryRef}
          >
            2. Estoque
          </div>
          <div className="mt-4 flex flex-col gap-6">
            {inventories.map((i) => i)}
            <div
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-neutral-600"
              onClick={addInventory}
            >
              <IoAddOutline className="text-xl" />
            </div>
            <div className="flex flex-col gap-4">
              Caso tenha documento com informações de estoque, anexe à seguir
              <input
                className="w-64 rounded-full bg-hack-blue-dark px-8 py-2 text-sm text-white"
                type="file"
                onFocus={() => scrollInto(inventoryRef)}
              />
            </div>
          </div>

          <div className="mt-24 scroll-mt-72 text-neutral-600" ref={investRef}>
            3. Investimentos
          </div>
          <div className="mt-4 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              Quanto você precisou investir no últimos 3 meses?
              <div className="flex gap-8">
                <div className="flex flex-col gap-4 capitalize">
                  {month}
                  <input
                    className="w-48 rounded-xl border border-neutral-600 py-2 px-4"
                    type="text"
                    placeholder="2000"
                    onFocus={() => scrollInto(investRef)}
                  />
                </div>
                <div className="flex flex-col gap-4 capitalize">
                  {lastMonth}
                  <input
                    className="w-48 rounded-xl border border-neutral-600 py-2 px-4"
                    type="text"
                    placeholder="1500"
                    onFocus={() => scrollInto(investRef)}
                  />
                </div>
                <div className="flex flex-col gap-4 capitalize">
                  {lastLastMonth}
                  <input
                    className="w-48 rounded-xl border border-neutral-600 py-2 px-4"
                    type="text"
                    placeholder="800"
                    onFocus={() => scrollInto(investRef)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-24 scroll-mt-72 text-neutral-600"
            ref={remunerationRef}
          >
            4. Remuneração
          </div>
          <div className="mt-4 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              O seu empreendimento é sua renda principal?
              <div className="flex gap-12 text-center text-white">
                <div className="w-full cursor-pointer rounded-full bg-hack-blue-dark py-2">
                  Sim, é a minha única fonte de renda
                </div>
                <div
                  className="w-full cursor-pointer rounded-full bg-hack-blue-dark py-2"
                  onClick={showIncomeQuestion}
                >
                  Não, possuo outras fontes de rendas
                </div>
              </div>
            </div>
            {showIncome && (
              <div className="flex flex-col gap-4">
                Qual são suas outras rendas?
                <input
                  className="w-64 rounded-xl border border-neutral-600 py-2 px-4 transition-all duration-300 ease-out focus:w-full"
                  type="text"
                  placeholder="Aluguel de imóvel, 1000 reais"
                  onFocus={() => scrollInto(remunerationRef)}
                />
              </div>
            )}
          </div>

          <div className="mt-24 scroll-mt-72 text-neutral-600" ref={placeRef}>
            5. Estabelecimento
          </div>
          <div className="mt-4 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              Onde funciona seu empreendimento?
              <div className="flex gap-12 text-center text-white">
                <div
                  className="w-full cursor-pointer rounded-full bg-hack-blue-dark py-2"
                  onClick={showTimeQuestion}
                >
                  Na minha residência
                </div>
                <div
                  className="w-full cursor-pointer rounded-full bg-hack-blue-dark py-2"
                  onClick={showTimeQuestion}
                >
                  Na rua
                </div>
                <div
                  className="w-full cursor-pointer rounded-full bg-hack-blue-dark py-2"
                  onClick={showComercialQuestion}
                >
                  Em um ponto comercial
                </div>
              </div>
            </div>
            {showComercial && (
              <div className="flex flex-col gap-4">
                O ponto comercial é
                <div className="flex gap-12 text-center text-white">
                  <div
                    className="w-full cursor-pointer rounded-full bg-hack-blue-dark py-2"
                    onClick={showTimeQuestion}
                  >
                    Eu alugo o local
                  </div>
                  <div className="w-full cursor-pointer rounded-full bg-hack-blue-dark py-2">
                    O local é minha propriedade
                  </div>
                </div>
              </div>
            )}
            {showTime && (
              <div className="flex flex-col gap-4">
                Espera estabelecer um ponto comercial em até quanto tempo?
                <input
                  className="w-64 rounded-xl border border-neutral-600 py-2 px-4 transition-all duration-300 ease-out focus:w-full"
                  type="text"
                  placeholder="Em até 3 meses"
                  onFocus={() => scrollInto(placeRef)}
                />
              </div>
            )}
          </div>

          <div className="mt-24 scroll-mt-72 text-neutral-600" ref={saleRef}>
            6. Vendas
          </div>
          <div className="mt-4 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              Como foram os últimos 3 meses?
              <div className="flex gap-8">
                <div className="flex flex-col gap-4 capitalize">
                  {month}
                  <input
                    className="w-48 rounded-xl border border-neutral-600 py-2 px-4"
                    type="text"
                    placeholder="2000"
                    onFocus={() => scrollInto(saleRef)}
                  />
                </div>
                <div className="flex flex-col gap-4 capitalize">
                  {lastMonth}
                  <input
                    className="w-48 rounded-xl border border-neutral-600 py-2 px-4"
                    type="text"
                    placeholder="1500"
                    onFocus={() => scrollInto(saleRef)}
                  />
                </div>
                <div className="flex flex-col gap-4 capitalize">
                  {lastLastMonth}
                  <input
                    className="w-48 rounded-xl border border-neutral-600 py-2 px-4"
                    type="text"
                    placeholder="800"
                    onFocus={() => scrollInto(saleRef)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              As vendas foram principalmente
              <div className="flex gap-12 text-center text-white">
                <div className="w-48 cursor-pointer rounded-full bg-hack-blue-dark py-2">
                  À vista
                </div>
                <div className="w-48 cursor-pointer rounded-full bg-hack-blue-dark py-2">
                  Parcelado
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              Em um mês bom, quanto o seu negócio fatura?
              <input
                className="w-64 rounded-xl border border-neutral-600 py-2 px-4 transition-all duration-300 ease-out focus:w-full"
                type="text"
                placeholder="4000"
                onFocus={() => scrollInto(saleRef)}
              />
            </div>
            <div className="flex flex-col gap-4">
              Em média espera faturar quanto por mês?
              <input
                className="w-64 rounded-xl border border-neutral-600 py-2 px-4 transition-all duration-300 ease-out focus:w-full"
                type="text"
                placeholder="3000"
                onFocus={() => scrollInto(saleRef)}
              />
            </div>
            <div className="flex flex-col gap-4">
              E quando é um mês ruim?
              <input
                className="w-64 rounded-xl border border-neutral-600 py-2 px-4 transition-all duration-300 ease-out focus:w-full"
                type="text"
                placeholder="2000"
                onFocus={() => scrollInto(saleRef)}
              />
            </div>
            <div className="flex scroll-mt-72 flex-col gap-4" ref={bestRef}>
              Quais são os campeões de venda?
              {bestSales.map((i) => i)}
              <div
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-neutral-600"
                onClick={addBestSale}
              >
                <IoAddOutline className="text-xl" />
              </div>
            </div>
          </div>

          <input
            className="mt-24 mb-[calc(100vh-450px)] h-10 w-32 cursor-pointer rounded-full bg-hack-green font-bold text-white"
            type="submit"
            value="Avançar"
          />
        </form>
      </main>
    </>
  );
};

export default Business;
