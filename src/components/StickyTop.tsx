import { useRouter } from "next/router";

type StickyTopProps = {
  children: JSX.Element;
};

export const StickyTop = ({ children }: StickyTopProps) => {
  const router = useRouter();
  const goHome = () => router.push("/");

  return (
    <div className="fixed top-0 flex w-full flex-col bg-white">
      <div className="flex h-16 items-center justify-between rounded-b-full bg-hack-blue-dark px-24">
        <div
          className="cursor-pointer text-2xl font-bold text-white"
          onClick={goHome}
        >
          avalizo
        </div>
        <div className="h-10 w-10 rounded-full bg-white"></div>
      </div>
      <div className="mx-auto mt-16 mb-8 flex w-[720px] flex-col justify-center">
        {children}
      </div>
      <div className="mx-12 flex items-center justify-between">
        <div className="h-1 w-full rounded-full bg-hack-blue-dark" />
      </div>
    </div>
  );
};
