import type { NextPage } from "next";
import Head from "next/head";
import { LandingImage } from "../components/LandingImage";
import { ActionButton } from "../components/ActionButton";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const redirect = () => router.push("/forms/personal");

  return (
    <>
      <Head>
        <title>BNDES Hack</title>
        <meta name="description" content="BNDES hackathon solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-tl from-hack-blue to-hack-blue-dark px-16">
        <div className="container mx-auto flex min-h-screen items-center justify-between bg-gradient-to-tl from-hack-blue to-hack-blue-dark">
          <div>
            <div className="mb-24 text-white">
              <h1 className="mb-6 text-5xl font-bold">APP BNDES</h1>
              <p className="text-neutral-200">LERO LERO</p>
            </div>
            <div className="flex justify-center">
              <ActionButton value="Solicitar crédito" action={redirect} />
            </div>
          </div>

          <div>
            <LandingImage />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
