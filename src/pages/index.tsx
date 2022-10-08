import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BNDES Hack</title>
        <meta name="description" content="BNDES hackathon solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-center text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          <span className="text-purple-300">BNDES</span> Hackathon
        </h1>
        <p className="mt-6 text-gray-700">15k ta no bolso</p>
      </main>
    </>
  );
};

export default Home;
