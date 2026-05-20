import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import styles from './SignupPage.module.css';
import { validateEmail, validatePassword, validateConfirmPassword, validateRequired } from '../../utils/validators';

export default function SignupPage() {
  const { register } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  const validate = () => {
    const nextErrors = {};
    if (!validateRequired(form.name)) nextErrors.name = 'Name is required';
    if (!validateEmail(form.email)) nextErrors.email = 'Valid email required';
    if (!validatePassword(form.password)) nextErrors.password = 'Password must be at least 6 characters';
    if (!validateConfirmPassword(form.password, form.confirmPassword)) nextErrors.confirmPassword = 'Passwords do not match';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setServerError('');

    try {
      await register({ name: form.name, email: form.email, password: form.password });
      navigate('/');
    } catch (error) {
      setServerError(error?.response?.data?.message || 'Unable to sign up.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit} noValidate>
          <label className={styles.field}>
            <span>Name</span>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              name="name"
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </label>
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
          <label className={styles.field}>
            <span>Confirm password</span>
            <input
              value={form.confirmPassword}
              onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
              type="password"
              name="confirmPassword"
            />
            {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
          </label>
          {serverError && <p className={styles.serverError}>{serverError}</p>}
          <button type="submit" disabled={submitting} className={styles.submitButton}>
            {submitting ? 'Creating account…' : 'Sign up'}
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </section>
    </main>
  );
}
