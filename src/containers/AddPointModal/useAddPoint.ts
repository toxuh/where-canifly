import { useSelector } from 'react-redux';

import { typesSelector } from '../../common/app/selectors';

import type { Category } from '../../api';

type ReturnType = {
  types: Category[];
};

const useAddPoint = (): ReturnType => {
  const types = useSelector(typesSelector);

  return {
    types,
  };
};

export default useAddPoint;
