import axios from 'axios';

const loadProductData = () => axios.get('../db/products.json');

export default { loadProductData };
