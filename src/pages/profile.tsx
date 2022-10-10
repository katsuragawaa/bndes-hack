import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { IoArrowForward } from "react-icons/io5";

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>avalizo | Em construção</title>
        <meta name="description" content="avalizo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Sidebar />

      <main className="container mt-16 ml-52 flex min-h-screen flex-col items-center">
        <div className="flex justify-between gap-20 p-20">
          <div className="flex flex-1 flex-col gap-4 rounded-xl border-2 border-purple-100 p-20 shadow-lg">
            <h1 className="text-7xl font-bold text-hack-purple">Parabens!</h1>
            <p className="text-2xl">Seu crédito foi aprovado</p>
            <p className="flex items-center gap-2">
              Veja os detalhes <IoArrowForward />
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-1 flex-col items-end gap-4 rounded-xl border-2 border-purple-100 p-12 shadow-lg">
              <p className="text-2xl font-bold text-hack-purple">
                Revisar meu cadastro
              </p>
              <p className="flex items-center gap-2">
                Editar <IoArrowForward />
              </p>
            </div>
            <div className="flex flex-1 flex-col items-end gap-4 rounded-xl border-2 border-purple-100 p-12 shadow-lg">
              <p className="text-2xl font-bold text-hack-purple">
                Como organizar minhas finanças
              </p>
              <p className="flex items-center gap-2">
                Mais informações <IoArrowForward />
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
