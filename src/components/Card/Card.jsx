"use client";

import React, { useRef } from "react";
import styles from "@/components/Card/Card.module.scss";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function Card({
  i,
  title,
  description,
  src,
  link,
  color,
  darkcolor,
  progress,
  range,
  targetScale,
}) {
  const container = useRef(null);
  const { isDarkMode } = useTheme();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          scale,
          backgroundColor: isDarkMode ? darkcolor : color,
          top: `calc(5% + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
          </div>

          <div className={styles.imageContainer}>
            <motion.div style={{ scale: imageScale }} className={styles.inner}>
              <Image
                src={`/${src}`}
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
