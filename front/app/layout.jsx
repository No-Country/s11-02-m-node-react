import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Index";
import Footer from "./components/Footer/Index";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReciclApp",
  description: "Economía Circular",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center  p-8 mt-8 md:p-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
