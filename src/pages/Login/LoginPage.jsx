import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import styles from './LoginPage.module.css';
import { validateEmail, validatePassword } from '../../utils/validators';

export default function LoginPage() {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const validate = () => {
    const nextErrors = {};
    if (!validateEmail(form.email)) nextErrors.email = 'Valid email required';
    if (!validatePassword(form.password)) nextErrors.password = 'Password must be at least 6 characters';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setServerError('');

    try {
      await login({ email: form.email, password: form.password });
      navigate(from, { replace: true });
    } catch (error) {
      setServerError(error?.response?.data?.message || 'Unable to login.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} noValidate>
          <label className={styles.field}>
            <span>Email</span>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              name="email"
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </label>
          <label className={styles.field}>
            <span>Password</span>
            <input
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="password"
              name="password"
            />
            {errors.password && <span className={styles.error}>{errors.password}</span>}
          </label>
          {serverError && <p className={styles.serverError}>{serverError}</p>}
          <button type="submit" disabled={submitting} className={styles.submitButton}>
            {submitting ? 'Logging in…' : 'Login'}
          </button>
        </form>
        <p>
          New here? <Link to="/signup">Create an account</Link>
        </p>
      </section>
    </main>
  );
}
