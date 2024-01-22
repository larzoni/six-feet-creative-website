import MusicNav from "@/components/MusicNav/MusicNav";
import styles from "./page.module.scss";

export default function PagesLayout({ children }) {
  return (
    <main>
      <section className={styles.container}>
        <h3>Music</h3>
        <MusicNav />

        {children}
      </section>
    </main>
  );
}
