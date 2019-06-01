import { apiInstance } from '../utils/requestHelper';

class ProductService {

  constructor() {
    this.resource = 'products';
  }
  getAll() {
    return apiInstance.get(this.resource);
  }

  getProductById(id) {
    return apiInstance.get(`${this.resource}/${id}`);
  }
}

export default ProductService;