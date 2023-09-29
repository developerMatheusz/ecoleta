import React from "react";
import Header from "../../components/Header";
import { getSession } from "next-auth/react";

const MapTemplate = async () => {
  const userSession = await getSession();

  return (
    <div>
      <Header
        typeheader="normal"
        searchfieldposition="right"
        userSession={userSession}
      />
    </div>
  );
};

export default MapTemplate;
