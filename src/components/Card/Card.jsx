import React from "react";
import styles from "@/components/Card/Card.module.scss";
import Image from "next/image";

export default function Card({ title, description, src, link, color }) {
  return (
    <div className={styles.cardContainer}>
      <div style={{ backgroundColor: color }} className={styles.card}>
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.inner}>
              <Image
                src={`/${src}`}
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
