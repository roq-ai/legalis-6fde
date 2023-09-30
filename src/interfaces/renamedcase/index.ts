import { GetQueryInterface } from 'interfaces';

export interface RenamedcaseInterface {
  id?: string;
  name: string;
  description?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface RenamedcaseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
}
