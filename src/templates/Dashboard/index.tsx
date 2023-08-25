"use client";

import { useSession } from "next-auth/react";

const DashboardTemplate = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      Usuário autenticado como <strong>{session?.user?.email}</strong>
    </div>
  );
};

export default DashboardTemplate;
