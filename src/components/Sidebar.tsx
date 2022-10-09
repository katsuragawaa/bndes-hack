import { useRouter } from "next/router";

export const Sidebar = () => {
  const router = useRouter();
  const current = router.pathname;

  return (
    <div className="fixed left-0 flex h-full w-52 flex-col gap-4 bg-hack-purple z-0">
      <div className="ml-8 mt-28 flex items-center justify-between">
        <div className="text-white">Perfil</div>
        {current.includes("profile") && (
          <div className="h-full w-1 rounded-full bg-hack-green" />
        )}
      </div>
      <div className="ml-8 flex items-center justify-between">
        <div className="text-white">Documentos</div>
        {current.includes("documents") && (
          <div className="h-full w-1 rounded-full bg-hack-green" />
        )}
      </div>
      <div className="ml-8 flex items-center justify-between">
        <div className="text-white">Atendimentos</div>
        {current.includes("services") && (
          <div className="h-full w-1 rounded-full bg-hack-green" />
        )}
      </div>
    </div>
  );
};
