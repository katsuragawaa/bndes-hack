import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

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
    </>
  );
};

export default Profile;
