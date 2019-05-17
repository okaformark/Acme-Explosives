// import typeData from './helpers/Data/typesData';
import category from './components/categories/categories';
import 'bootstrap';

import '../styles/main.scss';

const init = () => {
  // typeData.getTypesForEachCategory();
  category.initCategory();
};

init();
