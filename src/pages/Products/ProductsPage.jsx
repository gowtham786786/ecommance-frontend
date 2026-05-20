import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/productService';
import { useFetch } from '../../hooks/useFetch';
import ProductGrid from '../../components/product/ProductGrid';
import styles from './ProductsPage.module.css';

const sortFunctions = {
  priceAsc: (a, b) => a.price - b.price,
  priceDesc: (a, b) => b.price - a.price,
  nameAsc: (a, b) => a.name.localeCompare(b.name),
};

export default function ProductsPage() {
  const { category } = useParams();
  const [priceFilter, setPriceFilter] = useState(1000);
  const [sortBy, setSortBy] = useState('priceAsc');

  const { data: products = [], loading, error } = useFetch(() => getProducts(category), [category]);

  const filteredProducts = useMemo(() => {
    return [...(products || [])]
      .filter((product) => product.price <= priceFilter)
      .sort(sortFunctions[sortBy] || sortFunctions.priceAsc);
  }, [products, priceFilter, sortBy]);

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <div>
          <p className={styles.overline}>Category</p>
          <h1>{category?.charAt(0).toUpperCase() + category?.slice(1)}</h1>
        </div>
      </div>

      <div className={styles.gridWrapper}>
        <aside className={styles.sidebar}>
          <div className={styles.card}>
            <h2>Filter by price</h2>
            <input
              type="range"
              min="0"
              max="2000"
              value={priceFilter}
              onChange={(e) => setPriceFilter(Number(e.target.value))}
            />
            <p>Up to ${priceFilter}</p>
          </div>
          <div className={styles.card}>
            <h2>Sort</h2>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="nameAsc">Name: A to Z</option>
            </select>
          </div>
        </aside>

        <section className={styles.productArea}>
          {loading && <p>Loading products…</p>}
          {error && <p className={styles.error}>{error}</p>}
          {!loading && !error && filteredProducts.length === 0 && <p>No products found for this category.</p>}
          {!loading && !error && filteredProducts.length > 0 && <ProductGrid products={filteredProducts} />}
        </section>
      </div>
    </main>
  );
}
