import { Link } from 'react-router-dom';
import { categories } from '../../utils/constants';
import ProductGrid from '../../components/product/ProductGrid';
import { formatCurrency } from '../../utils/formatCurrency';
import styles from './HomePage.module.css';

const featuredProducts = [
  { id: '1', name: 'Wireless Headphones', price: 149.99, image: 'https://via.placeholder.com/420x300' },
  { id: '2', name: 'Gaming Laptop', price: 1299.99, image: 'https://via.placeholder.com/420x300' },
  { id: '3', name: 'Smartphone Pro', price: 899.99, image: 'https://via.placeholder.com/420x300' },
  { id: '4', name: 'USB 3.0 Drive', price: 29.99, image: 'https://via.placeholder.com/420x300' },
];

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div>
          <p className={styles.overline}>Shop smarter, ship faster</p>
          <h1>Modern ecommerce built for convenience and speed.</h1>
          <p className={styles.copy}>
            Discover curated products, secure checkout, and responsive shopping across devices.
          </p>
          <div className={styles.ctaGroup}>
            <Link to="/products/computers" className={styles.ctaButton}>
              Shop Computers
            </Link>
            <Link to="/products/mobiles" className={styles.secondaryButton}>
              Browse mobiles
            </Link>
          </div>
        </div>
        <div className={styles.heroCard}>
          <span>Deal of the day</span>
          <h2>Portable SSD 1TB</h2>
          <p>{formatCurrency(109.99)}</p>
        </div>
      </section>

      <section className={styles.categories}>
        <h2>Featured categories</h2>
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <Link key={category.slug} to={`/products/${category.slug}`} className={styles.categoryCard}>
              <span>{category.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.sectionHeader}>
          <h2>Featured products</h2>
          <p>Top deals and best-sellers selected for you.</p>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>
    </div>
  );
}
