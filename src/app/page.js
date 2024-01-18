"use client";
import Image from "next/image";
import styles from "@/app/page.module.scss";
import HomepageLogo from "@/components/HomepageLogo/HomepageLogo";
import Spotlight from "@/components/Spotlight/Spotlight";
import NavLinks from "@/components/NavLinks/NavLinks";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className={styles.container}>
        <div className={styles.content}>
          <HomepageLogo className={styles.homepageLogo} />
          <NavLinks />
          <Spotlight />
          <Footer />
        </div>

        <div className={styles.imageWrapper}>
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
