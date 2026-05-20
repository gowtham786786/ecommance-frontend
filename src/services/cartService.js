import api from './api';

export const syncCart = async (cartItems) => {
  return api.post('/cart/sync', { items: cartItems });
};

export const getCart = async () => {
  return api.get('/cart').then((res) => res.data);
};

export const clearCart = async () => {
  return api.delete('/cart').then((res) => res.data);
};

export const removeCartItem = async (productId) => {
  return api.delete(`/cart/${productId}`).then((res) => res.data);
};

