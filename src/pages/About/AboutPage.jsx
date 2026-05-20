import styles from './AboutPage.module.css';

const team = [
  { name: 'Priya Sharma', role: 'Founder & CEO' },
  { name: 'Arjun Patel', role: 'Head of Product' },
  { name: 'Neha Gupta', role: 'Design Lead' },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div>
          <p className={styles.overline}>Our mission</p>
          <h1>Building a better shopping experience for every user.</h1>
          <p>
            EShop is designed to be fast, intuitive, and responsive. We focus on strong UI, reliable checkout, and helpful product discovery.
          </p>
        </div>
      </section>

      <section className={styles.story}>
        <h2>Brand story</h2>
        <p>
          We started with a simple idea: ecommerce should be delightful on every device. From search to checkout, our frontend is optimized for conversion and trust.
        </p>
      </section>

      <section className={styles.team}>
        <h2>Meet the team</h2>
        <div className={styles.cards}>
          {team.map((member) => (
            <article key={member.name} className={styles.card}>
              <div className={styles.avatar}>{member.name.charAt(0)}</div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
