import { useFetch } from '../../hooks/useFetch';
import { getOrders } from '../../services/orderService';
import OrderCard from '../../components/order/OrderCard';
import styles from './OrdersPage.module.css';

export default function OrdersPage() {
  const { data: orders = [], loading, error } = useFetch(getOrders, []);

  return (
    <main className={styles.page}>
      <h1>Your orders</h1>
      {loading && <p>Loading orders…</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && !orders.length && <p>You have not placed any orders yet.</p>}
      <div className={styles.list}>
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </main>
  );
}
