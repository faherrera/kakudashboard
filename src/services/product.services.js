import { apiInstance } from '../utils/requestHelper';

class ProductService {

  constructor() {
    this.resource = 'products';
    this.getAll = this.getAll.bind(this);
    this.getProductById = this.getProductById.bind(this);
  }

  getAll() {
    return apiInstance.get(this.resource);
  }

  getProductById(id) {
    return apiInstance.get(`${this.resource}/${id}`);
  }
}

export default ProductService;