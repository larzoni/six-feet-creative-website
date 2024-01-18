import { ThemeProvider } from "@/context/ThemeContext";
import { Inter } from "next/font/google";
import "./globals.scss";
import NavLinks from "@/components/NavLinks/NavLinks";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Six Feet Creative",
  description: "Music producer | Songwriter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <NavLinks />
          <Footer />
          <div>{children}</div>
        </body>
      </ThemeProvider>
    </html>
  );
}
