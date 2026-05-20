import styles from './DealsPage.module.css';

export default function DealsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div>
          <p className={styles.overline}>Limited time offer</p>
          <h1>Discover today’s hottest deals</h1>
          <p>Premium technology at exclusive prices, hand-picked for fast shipping and high demand.</p>
        </div>
        <div className={styles.card}>
          <h2>Up to 35% off</h2>
          <p>Grab curated deals on laptops, audio, smartphones, and accessories before they sell out.</p>
        </div>
      </section>
    </main>
  );
}
