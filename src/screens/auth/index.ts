import {routes} from '../../constants';
import { Screen } from '../../types/common';
import Login from './login';
import Register from './register';

export const authScreen: Screen[] = [
  {
    name: routes.SIGN_IN,
    component: Login,
  },
  {
    name: routes.CREATE_ACCOUNT,
    component: Register,
  },
  
];

