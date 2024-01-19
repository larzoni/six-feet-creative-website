import styles from "./page.module.scss";

export default function PagesLayout({ children }) {
  return (
    <main className={styles.container}>
      <video
        src={"/bgcover.mp4"}
        autoPlay
        loop
        controls={false}
        className={styles.video}
        muted
      />
      <section className={styles.content}>{children}</section>
    </main>
  );
}
