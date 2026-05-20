import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../../utils/constants';
import ProductGrid from '../../components/product/ProductGrid';
import { formatCurrency } from '../../utils/formatCurrency';
import styles from './HomePage.module.css';

const featuredProducts = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 12499,
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&h=900&fit=crop',
  },
  {
    id: '2',
    name: 'Gaming Laptop',
    price: 107999,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&h=900&fit=crop',
  },
  {
    id: '3',
    name: 'Smartphone Pro',
    price: 74999,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&h=900&fit=crop',
  },
  {
    id: '4',
    name: 'USB 3.0 Drive',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1585386959984-a41552207e46?w=900&h=900&fit=crop',
  },
];

const features = [
  { title: 'Fast Delivery', copy: 'Express shipping across India with live tracking.' },
  { title: 'Secure Checkout', copy: 'Bank-grade encryption and one-click payments.' },
  { title: 'Premium Support', copy: '24/7 expert assistance for every order.' },
];

const testimonials = [
  {
    name: 'Aarav S.',
    role: 'Tech Enthusiast',
    quote: 'EShop feels polished, fast, and extremely reliable. The product range is top-tier.',
  },
  {
    name: 'Nitya R.',
    role: 'Startup Founder',
    quote: 'The shopping experience is premium and effortless. It really feels like a global brand.',
  },
];

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.overline}
          >
            Shop smarter, ship faster
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Modern ecommerce built for convenience and speed.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.copy}
          >
            Discover curated products, secure checkout, and responsive shopping across devices.
          </motion.p>
          <motion.div
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Link to="/products/computers" className={styles.ctaButton}>
              Shop Computers
            </Link>
            <Link to="/products/mobiles" className={styles.secondaryButton}>
              Browse Mobiles
            </Link>
            <Link to="/deals" className={styles.tertiaryButton}>
              Explore Deals
            </Link>
          </motion.div>

          <div className={styles.heroStats}>
            <div>
              <h3>24K+</h3>
              <p>Products curated for professionals</p>
            </div>
            <div>
              <h3>1.5M+</h3>
              <p>Premium orders shipped in India</p>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.glowBall} />
          <motion.div
            className={styles.heroCard}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.heroTag}>Deal of the day</div>
            <h2>Portable SSD 1TB</h2>
            <p>{formatCurrency(9199)}</p>
            <img
              src="https://images.unsplash.com/photo-1566035664249-4b62d67c8349?w=900&h=900&fit=crop"
              alt="Portable SSD 1TB"
              className={styles.heroImage}
            />
          </motion.div>
        </div>
      </section>

      <section className={styles.categorySection}>
        <div className={styles.sectionHeader}>
          <p>Featured categories</p>
          <h2>Shop by collection</h2>
        </div>
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <Link key={category.slug} to={`/products/${category.slug}`} className={styles.categoryCard}>
              <span>{category.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className={styles.sectionHeader}>
          <p>Featured products</p>
          <h2>Top deals and best-sellers selected for you.</h2>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      <section className={styles.infoSection}>
        <div className={styles.flashCard}>
          <span className={styles.flashBadge}>Flash Sale</span>
          <h3>Limited time savings on premium devices</h3>
          <p>Save up to 35% on flagship laptops, audio, and accessories before stock runs out.</p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <h4>{feature.title}</h4>
              <p>{feature.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <div className={styles.sectionHeader}>
          <p>Customer review</p>
          <h2>Trusted by shoppers across India</h2>
        </div>
        <div className={styles.testimonialGrid}>
          {testimonials.map((item) => (
            <motion.blockquote key={item.name} className={styles.testimonialCard} whileHover={{ y: -6 }}>
              <p>“{item.quote}”</p>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
