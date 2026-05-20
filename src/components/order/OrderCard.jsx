import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
import styles from './OrderCard.module.css';

export default function OrderCard({ order }) {
  return (
    <article className={styles.card}>
      <div>
        <h3>Order #{order.id}</h3>
        <p>{new Date(order.createdAt).toLocaleDateString()}</p>
      </div>
      <div>
        <p>{order.items.length} items</p>
        <p>{formatCurrency(order.total)}</p>
      </div>
      <div>
        <span className={styles.status}>{order.status}</span>
        <Link to={`/orders/${order.id}`} className={styles.link}>
          View Details
        </Link>
      </div>
    </article>
  );
}
