import axios from 'axios';
// import productData from './productsData';

const getTypesForEachCategory = categories => new Promise((resolve, reject) => {
  axios.get('../db/types.json')
    .then((response) => {
      const { types } = response.data;
      const typesWithCategories = types.map((type) => {
        const newType = type;
        // console.error(typeof newType);
        const matchingCategory = categories.filter(category => category.id === type.category);
        newType.categoryName = matchingCategory[0].name;
        return newType;
      });
      resolve(typesWithCategories);
    })
    .catch(err => reject(err));
});
const loadTypeData = () => axios.get('../db/types.json');

export default { getTypesForEachCategory, loadTypeData };
