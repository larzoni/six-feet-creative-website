"use client";

import Card from "@/components/Card/Card";
import styles from "./page.module.scss";
import { projects } from "@/app/about/data";
import NavLinks from "@/components/NavLinks/NavLinks";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <NavLinks />
      </div>
      <main className={styles.cards}>
        {projects.map((project, index) => {
          return <Card key={index} {...project} />;
        })}
      </main>
      <div className={styles.imageWrapper}>
        <Image
          src="/about.png"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
