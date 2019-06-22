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
    domString += `<img src = "${card.imageUrl}">`;
    domString += '<div class="overlay">';
    domString += `<h5><B>Product Name:</B></h5><p class = "card-text">${card.name}</p>`;
    domString += `<h5><B>Category Name:</B></h5><p class = "card-text">${card.catNames}</p>`;
    domString += `<h5><B>Type Name:</B></h5><p class = "card-text">${card.typeName}</p>`;
    domString += `<h5><B>Description:</B></h5><p class = "card-text">${card.description}</p>`;
    domString += '</div>';
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
