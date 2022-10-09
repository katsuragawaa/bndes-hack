import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { StickyTop } from "../../components/StickyTop";
import { FormEvent, RefObject, useRef } from "react";

const Personal: NextPage = () => {
  const router = useRouter();

  const aboutRef = useRef<HTMLDivElement>(null);
  const birthdayRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollInto = (ref: RefObject<HTMLDivElement>) => {
    if (!ref.current) {
      return;
    }

    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/forms/business");
  };

  return (
    <>
      <Head>
        <title>avalizo | Informações pessoais</title>
        <meta name="description" content="avalizo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StickyTop>
        <>
          <h1 className="text-3xl font-bold">Informações Pessoais</h1>
          <p className="mt-2 text-neutral-600">
            Vamos começar falando sobre você! Precisamos de algumas informações.
          </p>
        </>
      </StickyTop>

      <main className="container mx-auto mt-56 flex min-h-screen flex-col items-center">
        <form className="my-16 w-[720px]" onSubmit={submit}>
          <div className="scroll-mt-72 text-neutral-600" ref={aboutRef}>
            1. Sobre você
          </div>
          <div className="mt-4 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              Qual é seu nome? Adicione qualquer nome do meio que tenha.
              <input
                className="w-64 rounded-xl border border-neutral-600 py-2 px-4 transition-all duration-300 ease-out focus:w-full"
                type="text"
                placeholder="Digite seu nome"
                onFocus={() => scrollInto(aboutRef)}
              />
            </div>
            <div className="flex flex-col gap-4">
              E seu sobrenome?
              <input
                className="w-64 gap-4 rounded-xl border border-neutral-600 py-2 px-4 transition-all duration-300 ease-out focus:w-full"
                type="text"
                placeholder="Digite seu sobrenome"
                onFocus={() => scrollInto(aboutRef)}
              />
            </div>
          </div>

          <div
            className="mt-16 scroll-mt-72 text-neutral-600"
            ref={birthdayRef}
          >
            2. Data de nascimento
          </div>
          <div className="mt-4 flex gap-6">
            <div className="flex flex-col gap-4">
              <input
                className="w-24 rounded-xl border border-neutral-600 py-2 px-4"
                type="number"
                min="1"
                max="31"
                placeholder="Dia"
                onFocus={() => scrollInto(birthdayRef)}
              />
            </div>
            <div className="flex flex-col gap-4">
              <input
                className="w-24 rounded-xl border border-neutral-600 py-2 px-4"
                type="number"
                min="1"
                max="12"
                placeholder="Mês"
                onFocus={() => scrollInto(birthdayRef)}
              />
            </div>
            <div className="flex flex-col gap-4">
              <input
                className="w-48 rounded-xl border border-neutral-600 py-2 px-4"
                type="number"
                min="1900"
                max="2022"
                placeholder="Ano"
                onFocus={() => scrollInto(birthdayRef)}
              />
            </div>
          </div>

          <div className="mt-16 scroll-mt-72 text-neutral-600" ref={contactRef}>
            3. Contato
          </div>
          <div className="mt-4 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              Por qual telefone podemos entrar em contato?
              <input
                className="w-64 rounded-xl border border-neutral-600 py-2 px-4"
                type="text"
                placeholder="(DDD) 99999-9999"
                onFocus={() => scrollInto(contactRef)}
              />
            </div>
            <div className="flex flex-col gap-4">
              Enviaremos mais informações por e-mail, qual é o seu?
              <input
                className="w-64 rounded-xl border border-neutral-600 py-2 px-4 transition-all duration-300 ease-out focus:w-full"
                type="text"
                placeholder="seu-email@mail.com"
                onFocus={() => scrollInto(contactRef)}
              />
            </div>
          </div>

          <input
            className="mt-16 mb-[calc(100vh-450px)] h-10 w-32 cursor-pointer rounded-full bg-hack-green font-bold text-white"
            type="submit"
            value="Avançar"
          />
        </form>
      </main>
    </>
  );
};

export default Personal;
