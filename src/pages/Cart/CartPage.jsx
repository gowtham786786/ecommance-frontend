import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import CartItem from '../../components/cart/CartItem';
import CartSummary from '../../components/cart/CartSummary';
import EmptyCart from '../../components/cart/EmptyCart';
import styles from './CartPage.module.css';

export default function CartPage() {
  const { items, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const shipping = items.length > 0 ? 14.99 : 0;
  const tax = Number((cartTotal * 0.08).toFixed(2));

  if (!items.length) {
    return <EmptyCart />;
  }

  return (
    <main className={styles.page}>
      <div className={styles.left}>
        {items.map((item) => (
          <CartItem
            key={item.product.id}
            item={item}
            onQuantityChange={updateQuantity}
            onRemove={removeFromCart}
          />
        ))}
        <button type="button" className={styles.clearButton} onClick={clearCart}>
          Clear cart
        </button>
      </div>
      <CartSummary subtotal={cartTotal} shipping={shipping} tax={tax} />
      <button type="button" className={styles.checkoutButton} onClick={() => navigate('/payment')}>
        Proceed to checkout
      </button>
    </main>
  );
}
