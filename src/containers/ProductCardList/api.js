import { apiInstance } from './../../utils/requestHelper';

export function getProducts() {
  const baseURL = 'http://localhost:3001/products';
  return apiInstance({
    baseURL,
    method: 'get',
  }).then(({ data }) => data.result)
    .catch(err => err);
}