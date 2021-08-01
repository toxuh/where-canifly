import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useRequest } from '@umijs/hooks';
import { toast } from 'react-toastify';

import { saveTokens } from '../../utils/tokens';

import { signInAction } from '../../common/app/actions';

import { signIn as signInRequest, signUp as signUpRequest } from '../../api';
import type { SignInDTO, SignInType, SignUpDTO, SignUpType } from '../../api';

type ReturnType = {
  signIn: (data: SignInType) => void;
  signUp: (data: SignUpType) => void;
};

const useSign = (): ReturnType => {
  const dispatch = useDispatch();

  const { run: handleSignIn } = useRequest<SignInDTO>(signInRequest, {
    manual: true,
  });
  const { run: handleSignUp } = useRequest<SignUpDTO>(signUpRequest, {
    manual: true,
  });

  const signIn = useCallback(
    async (data) => {
      const response = await handleSignIn(data);

      if (response.access_token) {
        saveTokens(response.access_token);
        dispatch(signInAction(true));
      } else {
        toast.error('Sign in error');
      }
    },
    [dispatch],
  );
  const signUp = useCallback(async (data) => {
    const response = await handleSignUp(data);

    if (response) {
      console.log(response);
    } else {
      toast.error('Sign in error');
    }
  }, []);

  return {
    signIn,
    signUp,
  };
};

export default useSign;
