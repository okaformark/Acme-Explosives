import categoryData from '../../helpers/Data/categoriesData';
import typeData from '../../helpers/Data/typesData';
import productData from '../../helpers/Data/productsData';
import util from '../../helpers/util';


const domStringBuilder = (buildCards) => {
  // console.error(buildCards);
  let domString = '';
  buildCards.forEach((card) => {
    domString += '<div class  = "col-3>';
    domString += '<div class = "card-body">';
    domString += `<h5>${card.name}</h5>`;
    domString += `<h5>${card.catNames}</h5>`;
    domString += `<h5>${card.typeName}</h5>`;
    domString += `<h5>${card.description}</h5>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('cards', domString);
};

const initCategory = () => {
  categoryData.loadCategories()
    .then(response => typeData.getTypesForEachCategory(response.data.categories))
    .then(response => productData.getProductsForEachType(response))
    .then(response => domStringBuilder(response))
    .catch(err => console.error(err));
};


export default { initCategory };
