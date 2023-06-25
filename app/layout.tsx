import "./globals.css";
import { Poppins, Nunito } from "next/font/google";
import Providers from "./providers";

const poppins = Poppins({
  weight: ["300", "400", "700"],
  style: ["normal"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: ["300", "400", "700"],
  style: ["normal"],
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hi",
  description: "My personal site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${nunito.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
