import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { login as loginService, register as registerService } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('auth_user');
    return stored ? JSON.parse(stored) : null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isAuthenticated = Boolean(user?.token);

  useEffect(() => {
    if (user) {
      localStorage.setItem('auth_user', JSON.stringify(user));
      localStorage.setItem('auth_token', user.token);
    } else {
      localStorage.removeItem('auth_user');
      localStorage.removeItem('auth_token');
    }
  }, [user]);

  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const response = await loginService(credentials);
      setUser(response.data.user);
      return response.data.user;
    } catch (err) {
      setError(err?.response?.data?.message || 'Unable to login.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const response = await registerService(payload);
      setUser(response.data.user);
      return response.data.user;
    } catch (err) {
      setError(err?.response?.data?.message || 'Unable to register.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => setUser(null);

  const value = useMemo(
    () => ({ user, isAuthenticated, login, logout, register, loading, error }),
    [user, isAuthenticated, loading, error]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
