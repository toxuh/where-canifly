import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCategoryAction } from '../../common/app/actions';
import { currentTypeSelector } from '../../common/app/selectors';

type ReturnType = {
  currentType: string;
  handleSelectCategory: (id: string) => void;
};

const useSelectCategory = (): ReturnType => {
  const dispatch = useDispatch();

  const currentType = useSelector(currentTypeSelector);

  const handleSelectCategory = useCallback(
    (id) => dispatch(selectCategoryAction(id)),
    [dispatch],
  );

  return { currentType, handleSelectCategory };
};

export default useSelectCategory;
