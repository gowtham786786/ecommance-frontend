import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById, getRelatedProducts } from '../../services/productService';
import { useCart } from '../../hooks/useCart';
import { useFetch } from '../../hooks/useFetch';
import styles from './ProductDetailPage.module.css';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const { data: product, loading, error } = useFetch(() => getProductById(id), [id]);
  const { data: relatedProducts = [] } = useFetch(
    () => (product ? getRelatedProducts(product.category) : Promise.resolve([])),
    [product?.category]
  );

  const isOutOfStock = product?.stock === 0;

  const handleAdd = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  const related = useMemo(
    () => relatedProducts.filter((item) => item.id !== product?.id).slice(0, 4),
    [relatedProducts, product]
  );

  return (
    <main className={styles.page}>
      {loading && <p>Loading product...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {product && (
        <div className={styles.container}>
          <div className={styles.preview}>
            <img src={product.image} alt={product.name} loading="lazy" />
          </div>
          <div className={styles.details}>
            <h1>{product.name}</h1>
            <p className={styles.price}>${product.price.toFixed(2)}</p>
            <p>{product.description}</p>
            <p className={styles.status}>Status: {isOutOfStock ? 'Out of stock' : 'In stock'}</p>
            <div className={styles.actions}>
              <label>
                Quantity
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </label>
              <button type="button" disabled={isOutOfStock} onClick={handleAdd}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
      {related.length > 0 && (
        <section className={styles.related}>
          <h2>Related products</h2>
          <div className={styles.relatedGrid}>
            {related.map((item) => (
              <article key={item.id} className={styles.relatedItem}>
                <img src={item.image} alt={item.name} loading="lazy" />
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
