import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <article className={styles.card}>
      <Link to={`/product/${product.id}`} className={styles.link}>
        <img className={styles.image} src={product.image} alt={product.name} loading="lazy" />
        <div className={styles.body}>
          <h3>{product.name}</h3>
          <p>{formatCurrency(product.price)}</p>
        </div>
      </Link>
    </article>
  );
}
