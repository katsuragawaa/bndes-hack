import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { StickyTop } from "../../components/StickyTop";
import { FormEvent, RefObject, useRef } from "react";

const Documents: NextPage = () => {
  const router = useRouter();

  const cpfRef = useRef<HTMLDivElement>(null);
  const rgRef = useRef<HTMLDivElement>(null);
  const cnpjRef = useRef<HTMLDivElement>(null);

  const scrollInto = (ref: RefObject<HTMLDivElement>) => {
    if (!ref.current) {
      return;
    }

    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/analysis");
  };

  return (
    <>
      <Head>
        <title>avalizo | Documentos</title>
        <meta name="description" content="avalizo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StickyTop>
        <>
          <h1 className="text-3xl font-bold">Documentos</h1>
          <p className="mt-2 text-neutral-600">
            Já está acabando! Só falta seus documentos.
          </p>
        </>
      </StickyTop>

      <main className="container mx-auto mt-56 flex min-h-screen flex-col items-center">
        <form className="my-16 w-[720px]" onSubmit={submit}>
          <div>
            <div className="scroll-mt-72 text-neutral-600" ref={cpfRef}>
              1. CPF
            </div>
            <input
              className="mt-4 w-64 gap-4 rounded-xl border border-neutral-600 py-2 px-4 transition-all duration-300 ease-out focus:w-full"
              type="text"
              placeholder="000.000.000-00"
              onFocus={() => scrollInto(cpfRef)}
            />

            <div className="mt-24 scroll-mt-72 text-neutral-600" ref={rgRef}>
              2. RG
            </div>
            <input
              className="mt-4 w-64 gap-4 rounded-xl border border-neutral-600 py-2 px-4 transition-all duration-300 ease-out focus:w-full"
              type="text"
              placeholder="00.000.000-0"
              onFocus={() => scrollInto(rgRef)}
            />

            <div className="mt-24 scroll-mt-72 text-neutral-600" ref={cnpjRef}>
              3. CNPJ
            </div>
            <input
              className="mt-4 w-64 gap-4 rounded-xl border border-neutral-600 py-2 px-4 transition-all duration-300 ease-out focus:w-full"
              type="text"
              placeholder="00/0000.0000.0000-00"
              onFocus={() => scrollInto(cnpjRef)}
            />
          </div>

          <input
            className="mt-24 mb-[calc(100vh-450px)] h-10 w-48 cursor-pointer rounded-full bg-hack-green font-bold text-white"
            type="submit"
            value="Pronto!"
          />
        </form>
      </main>
    </>
  );
};

export default Documents;
