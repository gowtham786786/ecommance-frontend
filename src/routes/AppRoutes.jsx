import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import AboutPage from '../pages/About/AboutPage';
import ProductsPage from '../pages/Products/ProductsPage';
import ProductDetailPage from '../pages/ProductDetail/ProductDetailPage';
import CartPage from '../pages/Cart/CartPage';
import PaymentPage from '../pages/Payment/PaymentPage';
import OrdersPage from '../pages/Orders/OrdersPage';
import OrderDetailPage from '../pages/Orders/OrderDetailPage';
import LoginPage from '../pages/Login/LoginPage';
import SignupPage from '../pages/Signup/SignupPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products/:category" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />

      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/payment"
        element={
          <PrivateRoute>
            <PaymentPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <PrivateRoute>
            <OrdersPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/orders/:orderId"
        element={
          <PrivateRoute>
            <OrderDetailPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignupPage />
          </PublicRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
