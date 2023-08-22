import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import "../src/app/globals.css";

TimeAgo.addLocale(en);

export const decorators = [
  (Story) => {
    return <Story />;
  }
];
