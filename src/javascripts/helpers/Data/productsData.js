import axios from 'axios';

const loadProductData = () => axios.get('../db/products.json');

const getProductsForEachType = types => new Promise((resolve, reject) => {
  // console.error(types);
  axios.get('../db/products.json')
    .then((response) => {
      const { products } = response.data;
      // console.error(typeof products);
      const productsWithTypes = products.map((product) => {
        // const newProduct = product;
        const arrayObjects = Object.values(product);
        // console.error(arrayObjects[0]);
        const array = arrayObjects[0];
        // console.error(array);
        const newProduct = array;
        // console.error(arrayObjects);
        const matchingTypes = types.filter(type => type.id === array.type);
        // console.error(matchingTypes);
        const catNames = matchingTypes[0].categoryName;
        const typeName = matchingTypes[0].name;
        newProduct.catNames = catNames;
        newProduct.typeName = typeName;
        // newProduct.product = matchingTypes;
        return newProduct;
      });
      // console.error(productsWithTypes);
      resolve(productsWithTypes);
    })
    .catch(err => reject(err));
});

export default { getProductsForEachType, loadProductData };
