import {routes} from '../../constants';
import { Screen } from '../../types/common';
import ForgotPassword from './forgot-password';
import Lobby from './lobby';
import Login from './login';
import Register from './register';
import SendOtp from './sendOtp';

export const authScreen: Screen[] = [
  {
    name: routes.SIGN_IN,
    component: Login,
  },
  {
    name: routes.CREATE_ACCOUNT,
    component: Register,
  },
  {
    name: routes.SEND_OTP,
    component: SendOtp,
  },
  {
    name: routes.LOBBY,
    component: Lobby,
  },
  {
    name: routes.FORGOT_PASSWORD,
    component: ForgotPassword,
  },
  
  
];

