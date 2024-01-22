"use client";

import Card from "@/components/Card/Card";
import styles from "./page.module.scss";
import { projects } from "./data";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { ArrowDownIcon } from "@radix-ui/react-icons";

export default function About() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <h2>Scroll down to read</h2>
        <div className={styles.header}>
          <ArrowDownIcon className={styles.arrowDown} />
        </div>
      </div>

      <main ref={container} className={styles.cards}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={i}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </div>
  );
}
