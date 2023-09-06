import React from "react";
import Spinner from "@/components/Spinner";

export default function Loading() {
  return (
    <div className="p-2">
      <Spinner bg="white" />
    </div>
  );
}
