import styles from "./page.module.scss";

export default function PagesLayout({ children }) {
  return (
    <section>
      <div className={styles.container}>{children}</div>
    </section>
  );
}
