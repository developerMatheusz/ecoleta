import React from "react";
import Header from "../../components/Header";
import { getUserSession } from "../../hooks/getUserSession";

const HomeTemplate = async () => {
  const userSession = await getUserSession();

  return (
    <div>
      <Header typeheader="normal" userSession={userSession} />
    </div>
  );
};

export default HomeTemplate;
