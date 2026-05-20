import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const { cartCount } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link to="/" className={styles.logo}>
          EShop
        </Link>
      </div>
      <nav className={styles.navLinks}>
        <NavLink to="/products/computers">Computers</NavLink>
        <NavLink to="/products/mobiles">Mobiles</NavLink>
        <NavLink to="/products/laptops">Laptops</NavLink>
        <NavLink to="/products/pendrives">Pendrives</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <div className={styles.actions}>
        <Link to="/cart" className={styles.cartButton} aria-label="View cart">
          <FaShoppingCart />
          {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
        </Link>
        {isAuthenticated ? (
          <button type="button" onClick={logout} className={styles.authButton}>
            <FaUserCircle /> {user?.name || 'Logout'}
          </button>
        ) : (
          <Link to="/login" className={styles.authButton}>
            <FaUserCircle /> Login
          </Link>
        )}
      </div>
    </header>
  );
}
