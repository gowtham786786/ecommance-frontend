import styles from './CartItem.module.css';
import { formatCurrency } from '../../utils/formatCurrency';

export default function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <div className={styles.row}>
      <img className={styles.image} src={item.product.image} alt={item.product.name} loading="lazy" />
      <div className={styles.details}>
        <h3>{item.product.name}</h3>
        <p>{formatCurrency(item.product.price)}</p>
      </div>
      <div className={styles.controls}>
        <button type="button" onClick={() => onQuantityChange(item.product.id, item.quantity - 1)} disabled={item.quantity <= 1}>
          -
        </button>
        <span>{item.quantity}</span>
        <button type="button" onClick={() => onQuantityChange(item.product.id, item.quantity + 1)}>
          +
        </button>
      </div>
      <div className={styles.total}>{formatCurrency(item.product.price * item.quantity)}</div>
      <button type="button" className={styles.remove} onClick={() => onRemove(item.product.id)}>
        Remove
      </button>
    </div>
  );
}
