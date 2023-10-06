import React from "react";
import ToasterContext from "../context/ToasterContext";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import NextAuthSessionProvider from "./providers/NextAuthSessionProvider";
import "./globals.css";
import "leaflet/dist/leaflet.css";

TimeAgo.addLocale(en);

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="stylesheet"
          href="https://cdngovbr-ds.estaleiro.serpro.gov.br/design-system/fonts/rawline/css/rawline.css"
        />
        <link
          rel="stylesheet"
          href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="leaflet.zoomhome.css" />
        <script src="leaflet.zoomhome.min.js"></script>
      </head>
      <body>
        <NextAuthSessionProvider>
          <ToasterContext />
          <div>{children}</div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
