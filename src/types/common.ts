import {FunctionComponent} from 'react';
import {routes} from '../constants';

export interface PayloadHttpList<T> {
  code?: number;
  message?: string;
  data?: T[];
}

export type ToastType = {
  text2: string;
};

export type uuid = {
  uuid: string;
};

export type Timestamp = {
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
};

export type Screen = {
  name: routes;
  component: FunctionComponent<any>;
};

export type image = uuid & {
  url: string;
};

export type Pagination = {
  page: number;
  pageSize: number;
  totalPage: number;
  totalRecord: number;
};

export type BaseResponse<T> = {
  statusCode: number;
  responseTimestamp: Date;
  errorMessage: string;
  data: T;
};

export type BaseResponseList<T> = {
  statusCode: number;
  responseTimestamp: Date;
  errorMessage: string;
  data: T[];
};
export type Avatar = uuid &
  Timestamp & {
    public_id: string;
    url: string;
    secure_url: string;
  };

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  VIP = 'VIP',
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'famale',
}

export type Onboard = {
  id: string;
  title: string;
  subtitle: string;
  image: any;
};

interface PayloadHttp {
  code: number;
  message: string;
  data?: any | undefined;
}

export class Http {
  code: number;
  message: string;
  constructor({code, message}: PayloadHttp) {
    this.code = code;
    this.message = message;
  }
}
