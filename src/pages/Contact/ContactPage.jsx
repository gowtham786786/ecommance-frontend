import styles from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div>
          <p className={styles.overline}>Get in touch</p>
          <h1>Contact EShop support</h1>
          <p>We’re here to help with premium shopping, product recommendations, and order support.</p>
        </div>
        <div className={styles.card}>
          <h2>Reach out anytime</h2>
          <p>Email us at <a href="mailto:hello@eshop.in">hello@eshop.in</a> or call <strong>+91 98765 43210</strong>.</p>
          <div className={styles.row}>
            <span>Customer care</span>
            <span>24/7 live support</span>
          </div>
        </div>
      </section>
    </main>
  );
}
