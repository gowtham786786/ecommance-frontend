import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>© {new Date().getFullYear()} EShop. Built with React + Vite.</p>
      </div>
      <div className={styles.socials}>
        <a href="#" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="#" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="#" aria-label="Twitter">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
}
