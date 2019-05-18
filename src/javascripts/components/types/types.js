import productData from '../../helpers/Data/productsData';
import typeData from '../../helpers/Data/typesData';

const initTypeData = () => {
  typeData.loadTypeData()
    .then((response) => {
      const result2 = response.data.types;
      console.error(response.data);
      productData.getProductsForEachType(result2);
      // console.error(result2);
    })
    .catch(err => console.error(err));
};

export default { initTypeData };
