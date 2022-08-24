import apiClient from './client';

const fetchProduct = limit => apiClient.get(`/items?limit=${limit}`);

export default { fetchProduct };
