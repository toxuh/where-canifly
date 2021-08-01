import { signIn, signUp } from './auth';
import type {
  SignInDTO,
  SignInType,
  SignUpDTO,
  SignUpType,
} from './auth/types';

export type { SignInDTO, SignInType, SignUpDTO, SignUpType };

export { signIn, signUp };
