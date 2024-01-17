"use client";
import Image from "next/image";
import styles from "@/app/page.module.scss";
import { Navbar } from "@/components/Navbar/Navbar";
import HomepageLogo from "@/components/HomepageLogo/HomepageLogo";
import useMousePosition from "@/utils/useMousePosition";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 300 : 0;

  return (
    <div>
      <Navbar />

      <main className={styles.container}>
        <div className={styles.content}>
          <HomepageLogo className={styles.homepageLogo} />

          <div className={styles.main}>
            <motion.div
              className={styles.mask}
              animate={{
                WebkitMaskPosition: `${x - size / 2}px ${y - size * 1.5}px`,
                WebkitMaskSize: `${size}px`,
              }}
              transition={{ type: "tween", ease: "backOut", duration: 0.8 }}
            >
              <p
                className={styles.paragraph}
                onMouseEnter={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
              >
                A songwriter and producer - with skills that haven't been
                replaced by AI (yet) - making good stuff if the paycheck is
                equally good.
              </p>
            </motion.div>
            <div className={styles.body}>
              <p className={styles.paragraph}>
                Hello, My name is Helena. I'm a{" "}
                <span>six feet tall and creative </span>creator - with passion
                for writing and producing both pop- and production music.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/background.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </main>
    </div>
  );
}
