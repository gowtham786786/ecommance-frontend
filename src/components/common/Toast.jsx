import { useEffect, useState } from 'react';
import styles from './Toast.module.css';

export default function Toast({ message, type = 'success', duration = 3500 }) {
  const [visible, setVisible] = useState(Boolean(message));

  useEffect(() => {
    if (!message) return;
    setVisible(true);
    const timer = window.setTimeout(() => setVisible(false), duration);
    return () => window.clearTimeout(timer);
  }, [message, duration]);

  if (!message || !visible) return null;

  return (
    <div className={`${styles.toast} ${styles[type]}`} role="status" aria-live="polite">
      {message}
    </div>
  );
}
