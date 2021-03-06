import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRequest } from '@umijs/hooks';

import { getCategories } from '../../api';
import type { Category } from '../../api';

import { setCategoriesAction, signInAction } from '../../common/app/actions';
import { isLoggedSelector, typesSelector } from '../../common/app/selectors';

import { checkLsAccessToken } from '../../utils/tokens';

type ReturnType = {
  isLogged: boolean;
  types: Category[];
};

const useBootstrap = (): ReturnType => {
  const dispatch = useDispatch();

  const isLogged = useSelector(isLoggedSelector);
  const types = useSelector(typesSelector);

  const { run: handleFetchCategories } = useRequest<Category[]>(getCategories, {
    manual: true,
  });

  const fetchCategories = useCallback(async () => {
    const data = await handleFetchCategories();

    if (data.length) {
      dispatch(setCategoriesAction(data));
    }
  }, [dispatch]);

  const checkToken = useCallback(() => {
    dispatch(signInAction(checkLsAccessToken()));
  }, [dispatch]);

  useEffect(() => checkToken(), []);

  useEffect(() => {
    if (!types.length && isLogged) {
      fetchCategories();
    }
  }, [types, isLogged]);

  return {
    isLogged,
    types,
  };
};

export default useBootstrap;
