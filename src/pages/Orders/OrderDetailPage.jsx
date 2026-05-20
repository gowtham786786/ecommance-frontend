import { useParams } from 'react-router-dom';
import { getOrderById } from '../../services/orderService';
import { useFetch } from '../../hooks/useFetch';
import styles from './OrderDetailPage.module.css';

export default function OrderDetailPage() {
  const { orderId } = useParams();
  const { data: order, loading, error } = useFetch(() => getOrderById(orderId), [orderId]);

  if (loading) return <main className={styles.page}><p>Loading order…</p></main>;
  if (error) return <main className={styles.page}><p>{error}</p></main>;
  if (!order) return <main className={styles.page}><p>Order not found.</p></main>;

  return (
    <main className={styles.page}>
      <h1>Order #{order.id}</h1>
      <p>Status: {order.status}</p>
      <section className={styles.section}>
        <h2>Shipping address</h2>
        <address>{order.shippingAddress?.address}</address>
      </section>
      <section className={styles.section}>
        <h2>Items</h2>
        <ul className={styles.items}>
          {order.items.map((item) => (
            <li key={item.product.id}>
              {item.product.name} × {item.quantity}
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Payment method</h2>
        <p>{order.paymentMethod}</p>
      </section>
    </main>
  );
}
