import type { NextPage } from "next";
import Head from "next/head";
import { StickyTop } from "../components/StickyTop";

const Construction: NextPage = () => {
  return (
    <>
      <Head>
        <title>BNDES Hack | Em construção</title>
        <meta name="description" content="BNDES hackathon solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StickyTop>
        <>
          <h1 className="text-3xl font-bold">Em construção</h1>
          <p className="mt-2 text-neutral-600">Volte mais tarde!</p>
        </>
      </StickyTop>
    </>
  );
};

export default Construction;
