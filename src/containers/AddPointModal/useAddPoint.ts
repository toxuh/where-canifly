import { useSelector } from 'react-redux';

import { categoriesSelector } from '../../common/app/selectors';

import type { Category } from '../../api';

type ReturnType = {
  categories: Category[];
};

const useAddPoint = (): ReturnType => {
  const categories = useSelector(categoriesSelector);

  return {
    categories,
  };
};

export default useAddPoint;
