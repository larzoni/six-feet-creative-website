"use client";

import Image from "next/image";
import styles from "@/app/page.module.scss";
import HomepageLogo from "@/components/HomepageLogo/HomepageLogo";
import Spotlight from "@/components/Spotlight/Spotlight";
import { Navbar } from "@/components/Navbar/Navbar";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <div>
      <Navbar />

      <main className={styles.container}>
        <div className={styles.content}>
          <HomepageLogo className={styles.homepageLogo} />

          <Spotlight />
        </div>

        <div
          className={`${styles.imageWrapper} ${isDarkMode ? styles.dark : ""}`}
        >
          <Image
            src="/background.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            priority
            sizes="20"
          />
        </div>
      </main>
    </div>
  );
}
