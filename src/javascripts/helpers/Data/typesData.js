import axios from 'axios';
// import productData from './productsData';

const getTypesForEachCategory = categories => new Promise((resolve, reject) => {
  axios.get('../db/types.json')
    .then((response) => {
      const { types } = response.data;
      const typesWithCategories = categories.map((category) => {
        const newCategory = category;
        const matchingCategory = types.filter(type => type.category === category.id);
        newCategory.types = matchingCategory;
        console.error(newCategory);
        return newCategory;
      });
      resolve(typesWithCategories);
    })
    .catch(err => reject(err));
});
const loadTypeData = () => axios.get('../db/types.json');

export default { getTypesForEachCategory, loadTypeData };
