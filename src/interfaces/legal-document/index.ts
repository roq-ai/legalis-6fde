import { GetQueryInterface } from 'interfaces';

export interface LegalDocumentInterface {
  id?: string;
  title: string;
  content: string;
  type: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface LegalDocumentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  type?: string;
}
