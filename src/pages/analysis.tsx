import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ActionButton } from "../components/ActionButton";
import { StickyTop } from "../components/StickyTop";

const Analysis: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>avalizo | Análise</title>
        <meta name="description" content="avalizo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StickyTop>
        <>
          <h1 className="text-3xl font-bold">Acabou!</h1>
          <p className="mt-2 text-neutral-600">
            Agora, vamos analisar seus dados.
          </p>
        </>
      </StickyTop>
      <main className="container mx-auto mt-56 flex min-h-screen flex-col items-center">
        <div className="my-24 w-[720px] text-xl font-light">
          Assim que chegarmos em uma conclusão vamos te enviar uma mensagem,
          fique de olho no e-mail e número de celular que nos forneceu no
          início.
        </div>

        <ActionButton
          value="Ir para o meu perfil"
          action={() => router.push("/profile")}
        />
      </main>
    </>
  );
};

export default Analysis;
