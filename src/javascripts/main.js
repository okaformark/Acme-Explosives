import category from './components/categories/categories';
import type from './components/types/types';
import 'bootstrap';

import '../styles/main.scss';

const init = () => {
  category.initCategory();
  type.initTypeData();
};

init();
