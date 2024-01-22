import { ThemeProvider } from "@/context/ThemeContext";
import { Inter } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/Footer/Footer";
import VideoBackground from "@/components/VideoBackground/VideoBackground";
import styles from "./page.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import NavbarMobile from "@/components/NavbarMobile/NavbarMobile";

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
          <div className={styles.layoutContainer}>
            <VideoBackground />
            <NavbarMobile />
            <Navbar />
            <Footer />
            <div className={styles.children}>{children}</div>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
