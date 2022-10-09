import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  const goHome = () => router.push("/");

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col">
      <div className="flex h-16 items-center justify-between rounded-b-full bg-hack-blue-dark px-24">
        <div
          className="cursor-pointer text-2xl font-bold text-white"
          onClick={goHome}
        >
          avalizo
        </div>
        <div className="h-10 w-10 rounded-full bg-white"></div>
      </div>
    </div>
  );
};
