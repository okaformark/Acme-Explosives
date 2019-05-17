// import axios from 'axios';

// const getTypesForEachCategory = categories => new Promise((resolve, reject) => {
//   axios.get('../db/types.json')
//     .then((response) => {
//       const { types } = response.data;
//       const typesWithCategories = categories.map((category) => {
//         const newCategory = category;
//         console.error(newCategory);
//         const matchingCategory = types.filter(type => type.category === category.id);
//         newCategory.types = matchingCategory;
//         return newCategory;
//       });
//       resolve(typesWithCategories);
//     })
//     .catch(err => reject(err));
// });

// export default { getTypesForEachCategory };
