/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect } from "react";
import MapTemplate from "../../templates/Map";
import MapComponent from "../../components/Map";
import { getSetupLeaflet } from "../../hooks/getSetupLeaflet";

export default async function Map() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      getSetupLeaflet();
    }
  }, []);

  return (
    <div>
      <MapTemplate />
      <MapComponent />
    </div>
  );
}
