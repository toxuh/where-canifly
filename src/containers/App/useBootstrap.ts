import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signInAction } from '../../common/app/actions';
import { isLoggedSelector } from '../../common/app/selectors';

import { checkLsAccessToken } from '../../utils/tokens';

type ReturnType = {
  isLogged: boolean;
};

const useBootstrap = (): ReturnType => {
  const dispatch = useDispatch();

  const isLogged = useSelector(isLoggedSelector);

  const checkToken = useCallback(() => {
    dispatch(signInAction(checkLsAccessToken()));
  }, [dispatch]);

  useEffect(() => checkToken(), []);

  return {
    isLogged,
  };
};

export default useBootstrap;
