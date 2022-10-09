import type { NextPage } from "next";
import Head from "next/head";
import { LandingImage } from "../components/LandingImage";
import { ActionButton } from "../components/ActionButton";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BNDES Hack</title>
        <meta name="description" content="BNDES hackathon solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-w-screen min-h-screen bg-gradient-to-tl from-hack-blue to-hack-blue-dark">
        <div className="py-32 px-10 text-white">
          <h1 className="text-5xl font-bold">APP BNDES</h1>
          <div>Lero lero</div>
        </div>

        <div className="fixed bottom-8 w-screen">
          <LandingImage />
        </div>
        <div className="fixed bottom-20 flex w-screen justify-center">
          <ActionButton value="Solicitar crédito" />
        </div>
      </main>
    </>
  );
};

export default Home;
