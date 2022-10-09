import type { NextPage } from "next";
import Head from "next/head";
import { LandingImage } from "../components/LandingImage";
import { ActionButton } from "../components/ActionButton";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const redirect = () => router.push("/forms/personal");
  const goHome = () => router.push("/");
  const underConstruction = () => router.push("/construction");

  return (
    <>
      <Head>
        <title>avalizo</title>
        <meta name="description" content="avalizo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center">
        <div className="absolute flex h-28 w-full items-center justify-center bg-gradient-to-tl from-hack-blue to-hack-blue-dark" />

        <div className="z-10">
          <div className="flex h-28 w-full items-center justify-between">
            <div
              className="cursor-pointer text-4xl font-bold text-white"
              onClick={goHome}
            >
              avalizo
            </div>
            <ActionButton value="Acompanhar pedido" action={underConstruction} />
          </div>

          <div className="flex h-[calc(100vh-112px)] flex-col items-center justify-center">
            <div className="flex gap-20">
              <div className="flex w-3/5 flex-col justify-between">
                <p className="text-4xl">
                  Faça o <span className="font-bold">acompanhamento</span> da
                  sua solicitação de forma{" "}
                  <span className="font-bold">simples</span> e{" "}
                  <span className="font-bold">rápida</span>.
                </p>
                <ActionButton value="Solicitar crédito" action={redirect} />
              </div>

              <div className="w-2/6">
                <LandingImage />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
