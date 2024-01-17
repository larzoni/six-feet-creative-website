import React from "react";
import styles from "@/components/Spotlight/Spotlight.module.scss";

const Spotlight = () => {
  console.log("hello");
  return (
    <div className={styles.main}>
      <div className={styles.mask}>
        <p className={styles.paragraph}>
          A songwriter and producer - with skills that haven't been replaced by
          AI (yet) - making good stuff if the paycheck is equally good.
        </p>
        <div className={styles.body}>
          <p className={styles.paragraph}>
            Hello, I'm Helena! I'm a
            <span className={styles.highlight}>six feet tall and creative</span>
            creator - with passion for writing and producing both pop- and
            production music.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
