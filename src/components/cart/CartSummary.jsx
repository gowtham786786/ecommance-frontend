import styles from './CartSummary.module.css';
import { formatCurrency } from '../../utils/formatCurrency';

export default function CartSummary({ subtotal, shipping, tax }) {
  const total = subtotal + shipping + tax;

  return (
    <aside className={styles.summary}>
      <h2>Order Summary</h2>
      <div className={styles.row}>
        <span>Subtotal</span>
        <strong>{formatCurrency(subtotal)}</strong>
      </div>
      <div className={styles.row}>
        <span>Shipping</span>
        <strong>{formatCurrency(shipping)}</strong>
      </div>
      <div className={styles.row}>
        <span>Tax</span>
        <strong>{formatCurrency(tax)}</strong>
      </div>
      <div className={styles.totalRow}>
        <span>Total</span>
        <strong>{formatCurrency(total)}</strong>
      </div>
    </aside>
  );
}
