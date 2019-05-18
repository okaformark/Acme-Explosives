import categoryData from '../../helpers/Data/categoriesData';
import typeData from '../../helpers/Data/typesData';
import productData from '../../helpers/Data/productsData';
import util from '../../helpers/util';


const domStringBuilder = (buildCards) => {
  // console.error(buildCards);
  let domString = '';
  buildCards.forEach((card) => {
    domString += '<div class="card-group col-3">';
    domString += '<div class="card border-primary mb-3 mt-2 p-2 text-center ">';
    domString += `<h5 class = "card-title">Product Name: <p class = "card-text">${card.name}</p></h5>`;
    domString += `<h5 class = "card-title">Category Name: <p class = "card-text">${card.catNames}</p></h5>`;
    domString += `<h5 class = "card-title">Type Name:  <p class = "card-text">${card.typeName}</p></h5>`;
    domString += `<h5 class = "card-title">Description: <p class = "card-text">${card.description}</p></h5>`;
    domString += '</div>';
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
