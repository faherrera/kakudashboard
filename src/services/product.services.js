import { apiInstance } from '../utils/requestHelper';

class ProductService {

  constructor() {
    this.resource = 'products';
    this.getAll = this.getAll.bind(this);
  }

  getAll() {
    console.log('LLmando geAll', this.resource);
    return apiInstance.get(this.resource);
  }

  getProductById(id) {
    return apiInstance.get(`${this.resource}/${id}`);
  }
}

export default ProductService;