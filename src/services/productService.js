import api from './api';

export const getProducts = async (category = '') => {
  return api.get(`/products/${category}`).then((res) => res.data);
};

export const getProductById = async (productId) => {
  return api.get(`/products/${productId}`).then((res) => res.data);
};

export const getRelatedProducts = async (category) => {
  return api.get(`/products/category/${category}`).then((res) => res.data);
};
