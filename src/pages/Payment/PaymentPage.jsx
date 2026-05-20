import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { createOrder } from '../../services/orderService';
import styles from './PaymentPage.module.css';

const initialForm = {
  name: '',
  address: '',
  city: '',
  pincode: '',
  phone: '',
  paymentMethod: 'cod',
};

export default function PaymentPage() {
  const { items, cartTotal, clearCart } = useCart();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const shipping = 14.99;
  const tax = Number((cartTotal * 0.08).toFixed(2));
  const total = cartTotal + shipping + tax;

  const validate = () => {
    const currentErrors = {};
    if (!form.name.trim()) currentErrors.name = 'Name is required';
    if (!form.address.trim()) currentErrors.address = 'Address is required';
    if (!form.city.trim()) currentErrors.city = 'City is required';
    if (!form.pincode.trim()) currentErrors.pincode = 'Pincode is required';
    if (!form.phone.trim()) currentErrors.phone = 'Phone is required';
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    try {
      await createOrder({
        items,
        shippingAddress: form,
        paymentMethod: form.paymentMethod,
        subtotal: cartTotal,
        shipping,
        tax,
        total,
        status: 'Pending',
        createdAt: new Date().toISOString(),
      });
      clearCart();
      navigate('/orders');
    } catch (error) {
      setErrors({ submit: 'Unable to place order, please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.formSection}>
        <h1>Shipping & payment</h1>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {['name', 'address', 'city', 'pincode', 'phone'].map((field) => (
            <label key={field} className={styles.field}>
              <span>{field.charAt(0).toUpperCase() + field.slice(1)}</span>
              <input
                name={field}
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              />
              {errors[field] && <span className={styles.errorText}>{errors[field]}</span>}
            </label>
          ))}
          <label className={styles.field}>
            <span>Payment method</span>
            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}
            >
              <option value="cod">Cash on Delivery</option>
              <option value="upi">UPI</option>
              <option value="card">Card</option>
            </select>
          </label>
          {errors.submit && <p className={styles.submitError}>{errors.submit}</p>}
          <button type="submit" disabled={submitting || items.length === 0} className={styles.submitButton}>
            {submitting ? 'Placing order…' : 'Place Order'}
          </button>
        </form>
      </section>

      <aside className={styles.summary}>
        <h2>Order summary</h2>
        <div className={styles.summaryRow}>
          <span>Items</span>
          <strong>{items.length}</strong>
        </div>
        <div className={styles.summaryRow}>
          <span>Subtotal</span>
          <strong>${cartTotal.toFixed(2)}</strong>
        </div>
        <div className={styles.summaryRow}>
          <span>Shipping</span>
          <strong>${shipping.toFixed(2)}</strong>
        </div>
        <div className={styles.summaryRow}>
          <span>Tax</span>
          <strong>${tax.toFixed(2)}</strong>
        </div>
        <div className={styles.summaryTotal}>
          <span>Total</span>
          <strong>${total.toFixed(2)}</strong>
        </div>
      </aside>
    </main>
  );
}
