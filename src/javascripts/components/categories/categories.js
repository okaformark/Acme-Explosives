import categoryData from '../../helpers/Data/categoriesData';
// import typeData from '../../helpers/Data/typesData';

const initCategory = () => {
  categoryData.loadCategories()
    .then((response) => {
      const results = response.data.categories;
      console.error(results);
      // typeData.getTypesForEachCategory(results);
    })
    .catch(err => console.error(err));
};

export default { initCategory };
