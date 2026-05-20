import { Link } from 'react-router-dom';
import styles from './EmptyCart.module.css';

export default function EmptyCart() {
  return (
    <div className={styles.empty}> 
      <h2>Your cart is empty</h2>
      <p>Browse products and add items to continue.</p>
      <Link to="/products/computers" className={styles.button}>
        Shop Now
      </Link>
    </div>
  );
}
