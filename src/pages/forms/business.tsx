import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent, RefObject, useRef, useState } from "react";
import moment from "moment";

import { IoAddOutline } from "react-icons/io5";
import { StickyTop } from "../../components/StickyTop";

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

const BestSale = ({ index, scroll }: { index: number; scroll: () => void }) => (
  <>
    <div className="flex flex-col gap-4">
      {index} Nome do produto
      <input
        className="w-64 rounded-xl border border-neutral-600 py-2 px-4 transition-all duration-300 ease-out focus:w-full"
        type="text"
        placeholder="Brigadeiros"
        onFocus={scroll}
      />
    </div>
    <div className="flex gap-8">
      <div className="flex flex-col gap-4">
        Valor de compra
        <input
          className="w-64 rounded-xl border border-neutral-600 py-2 px-4"
          type="text"
          placeholder="2000"
        />
      </div>
      <div className="flex flex-col gap-4">
        Valor de venda
        <input
          className="w-64 rounded-xl border border-neutral-600 py-2 px-4"
          type="text"
          placeholder="1500"
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
        />
      </div>
      <div className="mb-4 flex flex-col gap-4">
        Estoque
        <input
          className="w-64 rounded-xl border border-neutral-600 py-2 px-4"
          type="text"
          placeholder="800"
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
  const router = useRouter();

  const typeRef = useRef<HTMLDivElement>(null);
  const inventoryRef = useRef<HTMLDivElement>(null);
  const investRef = useRef<HTMLDivElement>(null);
  const remunerationRef = useRef<HTMLDivElement>(null);
  const placeRef = useRef<HTMLDivElement>(null);
  const saleRef = useRef<HTMLDivElement>(null);
  const bestRef = useRef<HTMLDivElement>(null);
  const financeRef = useRef<HTMLDivElement>(null);
  const personalRef = useRef<HTMLDivElement>(null);
  const businessRef = useRef<HTMLDivElement>(null);

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
      <Inventory
        key={prev.length + 1}
        scroll={() => scrollInto(inventoryRef)}
      />,
    ]);
  };

  const [bestSales, setBestSales] = useState<JSX.Element[]>([
    <BestSale key={1} index={1} scroll={() => scrollInto(bestRef)} />,
  ]);

  const addBestSale = () => {
    if (bestSales.length >= 3) {
      return;
    }

    setBestSales((prev) => [
      ...prev,
      <BestSale
        key={prev.length + 1}
        index={prev.length + 1}
        scroll={() => scrollInto(bestRef)}
      />,
    ]);
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/forms/documents")
  };

  return (
    <>
      <Head>
        <title>avalizo | Informa????es do neg??cio</title>
        <meta name="description" content="avalizo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StickyTop>
        <>
          <h1 className="text-3xl font-bold">Seu neg??cio</h1>
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
              O seu neg??cio oferece:
              <div className="flex gap-12 text-center text-white">
                <div
                  className="w-48 cursor-pointer rounded-full bg-hack-blue-dark py-2"
                  onClick={showProductQuestion}
                >
                  Produtos
                </div>
                <div className="w-48 cursor-pointer rounded-full bg-hack-blue-dark py-2">
                  Servi??os
                </div>
              </div>
            </div>
            {showProduct && (
              <div className="flex flex-col gap-4">
                Qual ?? o produto?
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
              Caso tenha documento com informa????es de estoque, anexe ?? seguir
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
              Quanto voc?? precisou investir no ??ltimos 3 meses?
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
            4. Remunera????o
          </div>
          <div className="mt-4 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              O seu empreendimento ?? sua renda principal?
              <div className="flex gap-12 text-center text-white">
                <div className="w-full cursor-pointer rounded-full bg-hack-blue-dark py-2">
                  Sim, ?? a minha ??nica fonte de renda
                </div>
                <div
                  className="w-full cursor-pointer rounded-full bg-hack-blue-dark py-2"
                  onClick={showIncomeQuestion}
                >
                  N??o, possuo outras fontes de rendas
                </div>
              </div>
            </div>
            {showIncome && (
              <div className="flex flex-col gap-4">
                Qual s??o suas outras rendas?
                <input
                  className="w-64 rounded-xl border border-neutral-600 py-2 px-4 transition-all duration-300 ease-out focus:w-full"
                  type="text"
                  placeholder="Aluguel de im??vel, 1000 reais"
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
                  Na minha resid??ncia
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
                O ponto comercial ??
                <div className="flex gap-12 text-center text-white">
                  <div
                    className="w-full cursor-pointer rounded-full bg-hack-blue-dark py-2"
                    onClick={showTimeQuestion}
                  >
                    Eu alugo o local
                  </div>
                  <div className="w-full cursor-pointer rounded-full bg-hack-blue-dark py-2">
                    O local ?? minha propriedade
                  </div>
                </div>
              </div>
            )}
            {showTime && (
              <div className="flex flex-col gap-4">
                Espera estabelecer um ponto comercial em at?? quanto tempo?
                <input
                  className="w-64 rounded-xl border border-neutral-600 py-2 px-4 transition-all duration-300 ease-out focus:w-full"
                  type="text"
                  placeholder="Em at?? 3 meses"
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
              Como foram os ??ltimos 3 meses?
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
                  ?? vista
                </div>
                <div className="w-48 cursor-pointer rounded-full bg-hack-blue-dark py-2">
                  Parcelado
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              Em um m??s bom, quanto o seu neg??cio fatura?
              <input
                className="w-64 rounded-xl border border-neutral-600 py-2 px-4 transition-all duration-300 ease-out focus:w-full"
                type="text"
                placeholder="4000"
                onFocus={() => scrollInto(saleRef)}
              />
            </div>
            <div className="flex flex-col gap-4">
              Em m??dia espera faturar quanto por m??s?
              <input
                className="w-64 rounded-xl border border-neutral-600 py-2 px-4 transition-all duration-300 ease-out focus:w-full"
                type="text"
                placeholder="3000"
                onFocus={() => scrollInto(saleRef)}
              />
            </div>
            <div className="flex flex-col gap-4">
              E quando ?? um m??s ruim?
              <input
                className="w-64 rounded-xl border border-neutral-600 py-2 px-4 transition-all duration-300 ease-out focus:w-full"
                type="text"
                placeholder="2000"
                onFocus={() => scrollInto(saleRef)}
              />
            </div>
            <div className="flex scroll-mt-72 flex-col gap-4" ref={bestRef}>
              Quais s??o os campe??es de venda?
              {bestSales.map((i) => i)}
              <div
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-neutral-600"
                onClick={addBestSale}
              >
                <IoAddOutline className="text-xl" />
              </div>
            </div>
          </div>

          <div className="mt-24 scroll-mt-72 text-neutral-600" ref={financeRef}>
            7. Sa??de financeira
          </div>
          <div className="mt-4 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              J?? pegou dinheiro emprestado?
              <div className="flex gap-12 text-center text-white">
                <div className="w-64 cursor-pointer rounded-full bg-hack-blue-dark py-2">
                  Sim, j?? precisei de cr??dito
                </div>
                <div className="w-64 cursor-pointer rounded-full bg-hack-blue-dark py-2">
                  N??o, essa ?? a primeira vez
                </div>
              </div>
              <div className="flex flex-col gap-4">
                Quando foi utilizado o cr??dito?
                <input
                  className="w-48 rounded-xl border border-neutral-600 py-2 px-4"
                  type="date"
                  onFocus={() => scrollInto(financeRef)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              Qual foi o valor?
              <input
                className="w-48 rounded-xl border border-neutral-600 py-2 px-4"
                type="text"
                placeholder="2000"
                onFocus={() => scrollInto(financeRef)}
              />
            </div>
            <div className="flex flex-col gap-4">
              As finan??as da sua casa e do seu neg??cio s??o separadas?
              <div className="flex gap-12 text-center text-white">
                <div className="w-full cursor-pointer rounded-full bg-hack-blue-dark py-2">
                  Sim, tudo ?? separado
                </div>
                <div className="w-full cursor-pointer rounded-full bg-hack-blue-dark py-2">
                  N??o, pago minhas contas com o caixa
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-24 scroll-mt-72 text-neutral-600"
            ref={personalRef}
          >
            8. Contas pessoais
          </div>
          <div className="mt-4 flex flex-col gap-6">
            <div className="flex gap-12">
              <div className="flex flex-1 items-center gap-4">
                <div className="flex-4">Alimenta????o</div>
                <input
                  className="w-full flex-1 rounded-xl border border-neutral-600 py-2 px-4"
                  type="text"
                  placeholder="2000"
                  onFocus={() => scrollInto(personalRef)}
                />
              </div>
              <div className="flex flex-1 items-center gap-4">
                <div className="flex-4">Aluguel da casa</div>
                <input
                  className="w-full flex-1 rounded-xl border border-neutral-600 py-2 px-4"
                  type="text"
                  placeholder="2000"
                  onFocus={() => scrollInto(personalRef)}
                />
              </div>
            </div>
            <div className="flex gap-12">
              <div className="flex flex-1 items-center gap-4">
                <div className="flex-4">Vestu??rio</div>
                <input
                  className="w-full flex-1 rounded-xl border border-neutral-600 py-2 px-4"
                  type="text"
                  placeholder="2000"
                  onFocus={() => scrollInto(personalRef)}
                />
              </div>
              <div className="flex flex-1 items-center gap-4">
                <div className="flex-4">Educa????o</div>
                <input
                  className="w-full flex-1 rounded-xl border border-neutral-600 py-2 px-4"
                  type="text"
                  placeholder="2000"
                  onFocus={() => scrollInto(personalRef)}
                />
              </div>
            </div>
            <div className="flex gap-12">
              <div className="flex flex-1 items-center gap-4">
                <div className="flex-4">Contas (??gua, luz)</div>
                <input
                  className="w-full flex-1 rounded-xl border border-neutral-600 py-2 px-4"
                  type="text"
                  placeholder="2000"
                  onFocus={() => scrollInto(personalRef)}
                />
              </div>
              <div className="flex flex-1 items-center gap-4">
                <div className="flex-4">Parcelas de compras</div>
                <input
                  className="w-full flex-1 rounded-xl border border-neutral-600 py-2 px-4"
                  type="text"
                  placeholder="2000"
                  onFocus={() => scrollInto(personalRef)}
                />
              </div>
            </div>
            <div className="flex gap-12">
              <div className="flex flex-1 items-center gap-4">
                <div className="flex-4">Renda familiar</div>
                <input
                  className="w-full flex-1 rounded-xl border border-neutral-600 py-2 px-4"
                  type="text"
                  placeholder="2000"
                  onFocus={() => scrollInto(personalRef)}
                />
              </div>
              <div className="flex flex-1 items-center gap-4">
                <div className="flex-4">Poupan??a</div>
                <input
                  className="w-full flex-1 rounded-xl border border-neutral-600 py-2 px-4"
                  type="text"
                  placeholder="2000"
                  onFocus={() => scrollInto(personalRef)}
                />
              </div>
            </div>
          </div>

          <div
            className="mt-24 scroll-mt-72 text-neutral-600"
            ref={businessRef}
          >
            9. Contas empresariais
          </div>
          <div className="mt-4 flex flex-col gap-6">
            <div className="flex gap-12">
              <div className="flex flex-1 items-center gap-4">
                <div className="flex-4">Opera????o</div>
                <input
                  className="w-full flex-1 rounded-xl border border-neutral-600 py-2 px-4"
                  type="text"
                  placeholder="2000"
                  onFocus={() => scrollInto(businessRef)}
                />
              </div>
              <div className="flex flex-1 items-center gap-4">
                <div className="flex-4">Aluguel comercial</div>
                <input
                  className="w-full flex-1 rounded-xl border border-neutral-600 py-2 px-4"
                  type="text"
                  placeholder="2000"
                  onFocus={() => scrollInto(businessRef)}
                />
              </div>
            </div>
            <div className="flex gap-12">
              <div className="flex flex-1 items-center gap-4">
                <div className="flex-4">M??quinas/equipamentos</div>
                <input
                  className="w-full flex-1 rounded-xl border border-neutral-600 py-2 px-4"
                  type="text"
                  placeholder="2000"
                  onFocus={() => scrollInto(businessRef)}
                />
              </div>
              <div className="flex flex-1 items-center gap-4">
                <div className="flex-4">Fornecedores</div>
                <input
                  className="w-full flex-1 rounded-xl border border-neutral-600 py-2 px-4"
                  type="text"
                  placeholder="2000"
                  onFocus={() => scrollInto(businessRef)}
                />
              </div>
            </div>
            <div className="flex gap-12">
              <div className="flex flex-1 items-center gap-4">
                <div className="flex-4">Contas a pagar</div>
                <input
                  className="w-full flex-1 rounded-xl border border-neutral-600 py-2 px-4"
                  type="text"
                  placeholder="2000"
                  onFocus={() => scrollInto(businessRef)}
                />
              </div>
              <div className="flex flex-1 items-center gap-4">
                <div className="flex-4">Contas a receber</div>
                <input
                  className="w-full flex-1 rounded-xl border border-neutral-600 py-2 px-4"
                  type="text"
                  placeholder="2000"
                  onFocus={() => scrollInto(businessRef)}
                />
              </div>
            </div>
            <div className="flex gap-12">
              <div className="flex flex-1 items-center gap-4">
                <div className="flex-4">Valore em caixa</div>
                <input
                  className="w-full flex-1 rounded-xl border border-neutral-600 py-2 px-4"
                  type="text"
                  placeholder="2000"
                  onFocus={() => scrollInto(businessRef)}
                />
              </div>
              <div className="flex flex-1 items-center gap-4">
                <div className="flex-4">Produtos em estoque</div>
                <input
                  className="w-full flex-1 rounded-xl border border-neutral-600 py-2 px-4"
                  type="text"
                  placeholder="2000"
                  onFocus={() => scrollInto(businessRef)}
                />
              </div>
            </div>
          </div>

          <div className="mt-24">Tudo certo? Se sim, s?? clicar no bot??o!</div>

          <input
            className="mt-8 mb-[calc(100vh-450px)] h-10 w-48 cursor-pointer rounded-full bg-hack-green font-bold text-white"
            type="submit"
            value="Pr??ximo passo!"
          />
        </form>
      </main>
    </>
  );
};

export default Business;
