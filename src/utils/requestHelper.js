import axios from 'axios';

const PRINCIPAL_BASE_URL = "http://localhost:3001/";
const apiInstance = axios.create({
  baseURL: PRINCIPAL_BASE_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export {
  PRINCIPAL_BASE_URL,
  apiInstance
}
