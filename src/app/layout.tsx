import { Roboto } from "next/font/google";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import "./globals.css";

TimeAgo.addLocale(en);

const roboto = Roboto({ subsets: ["latin"], weight: "700" });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
