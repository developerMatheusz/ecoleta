import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import NextAuthSessionProvider from "./providers/NextAuthSessionProvider";
import "./globals.css";

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
      </head>
      <body>
        <NextAuthSessionProvider>
          <div>{children}</div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
