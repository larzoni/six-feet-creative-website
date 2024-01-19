import styles from "./page.module.scss";

export default function PagesLayout({ children }) {
  return (
    <section>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
