import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingBag, UserCircle, Heart, Menu } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const { cartCount } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.brandArea}>
        <Link to="/" className={styles.logo}>
          EShop
        </Link>
        <div className={styles.badgeLabel}>Premium tech shopping</div>
      </div>

      <div className={styles.navSection}>
        <nav className={styles.navLinks}>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Home
          </NavLink>
          <NavLink to="/products/computers" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Computers
          </NavLink>
          <NavLink to="/products/mobiles" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Mobiles
          </NavLink>
          <NavLink to="/products/laptops" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Laptops
          </NavLink>
          <NavLink to="/products/pendrives" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Pendrives
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Contact
          </NavLink>
        </nav>
        <div className={styles.searchWrapper}>
          <Search className={styles.searchIcon} />
          <input type="search" placeholder="Search EShop products" aria-label="Search products" />
        </div>
      </div>

      <div className={styles.actions}>
        <Link to="/deals" className={styles.linkButton}>
          Deals
        </Link>
        <Link to="/cart" className={styles.cartButton} aria-label="View cart">
          <ShoppingBag />
          {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
        </Link>
        {isAuthenticated ? (
          <button type="button" onClick={logout} className={styles.authButton}>
            <UserCircle /> {user?.name || 'Logout'}
          </button>
        ) : (
          <Link to="/login" className={styles.authButton}>
            <UserCircle /> Login
          </Link>
        )}
      </div>
    </header>
  );
}
