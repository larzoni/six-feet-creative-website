import { Inter } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeToggleBtn from "@/components/ThemeToggleBtn/ThemeToggleBtn";
import { Navbar } from "@/components/Navbar/Navbar";
import NavLinks from "@/components/NavLinks/NavLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Six Feet Creative",
  description: "Music producer | Songwriter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
