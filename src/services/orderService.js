import api from './api';

export const createOrder = async (orderPayload) => {
  return api.post('/orders', orderPayload);
};

export const getOrders = async () => {
  return api.get('/orders');
};

export const getOrderById = async (orderId) => {
  return api.get(`/orders/${orderId}`);
};
