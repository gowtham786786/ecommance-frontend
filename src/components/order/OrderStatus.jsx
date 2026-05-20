import styles from './OrderStatus.module.css';
import { orderStatus } from '../../utils/constants';

export default function OrderStatus({ status }) {
  return (
    <div className={styles.timeline} aria-label="Order status timeline">
      {orderStatus.map((step) => (
        <div key={step} className={`${styles.step} ${status === step ? styles.active : ''}`}>
          <span>{step}</span>
        </div>
      ))}
    </div>
  );
}
