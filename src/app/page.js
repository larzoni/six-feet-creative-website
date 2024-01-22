"use client";

import styles from "@/app/page.module.scss";
import HomepageLogo from "@/components/HomepageLogo/HomepageLogo";
import RegularButton from "@/components/RegularButton/RegularButton";
import Spotlight from "@/components/Spotlight/Spotlight";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/music");
  };

  return (
    <main>
      <div className={styles.homepageLogo}>
        <HomepageLogo />
      </div>
      <div className={styles.container}>
        <Spotlight />
        <div className={styles.buttonContainer}>
          <RegularButton
            label={"music button"}
            onClick={handleClick}
            text={"Check out my music"}
          />
        </div>
      </div>
    </main>
  );
}
