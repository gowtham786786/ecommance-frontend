import { Facebook, Instagram, Twitter, Mail, ArrowRight } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div>
          <h2>EShop</h2>
          <p>Premium tech shopping with a luxury digital experience, built for India.</p>
        </div>
        <div className={styles.linkGroups}>
          <div>
            <h3>Explore</h3>
            <a href="/products/computers">Computers</a>
            <a href="/products/mobiles">Mobiles</a>
            <a href="/products/laptops">Laptops</a>
          </div>
          <div>
            <h3>Company</h3>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/deals">Deals</a>
          </div>
          <div>
            <h3>Stay connected</h3>
            <a href="mailto:hello@eshop.in">hello@eshop.in</a>
            <a href="/newsletter">Newsletter</a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} EShop. Built for premium modern technology shopping.</p>
        <div className={styles.socials}>
          <a href="#" aria-label="Instagram">
            <Instagram />
          </a>
          <a href="#" aria-label="Facebook">
            <Facebook />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter />
          </a>
          <a href="mailto:hello@eshop.in" aria-label="Email">
            <Mail />
          </a>
          <a href="/newsletter" aria-label="Newsletter">
            <ArrowRight />
          </a>
        </div>
      </div>
    </footer>
  );
}
