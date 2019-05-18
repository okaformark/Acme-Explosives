import axios from 'axios';

const loadProductData = () => axios.get('../db/products.json');

const getProductsForEachType = types => new Promise((resolve, reject) => {
  console.error(typeof types);
  axios.get('../db/products.json')
    .then((response) => {
      const { products } = response.data;
      console.error(typeof products);
      const productsWithTypes = types.map((type) => {
        const newType = type;
        const arrayObjects = Object.values(products[0]);
        // console.error(arrayObjects);
        const matchingTypes = arrayObjects.filter(product => product.type === type.id);
        // console.error(matchingTypes);
        newType.product = matchingTypes;
        console.error(newType);
        return newType;
      });
      resolve(productsWithTypes);
    })
    .catch(err => reject(err));
});

export default { getProductsForEachType, loadProductData };
