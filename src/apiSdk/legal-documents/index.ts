import queryString from 'query-string';
import { LegalDocumentInterface, LegalDocumentGetQueryInterface } from 'interfaces/legal-document';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLegalDocuments = async (
  query?: LegalDocumentGetQueryInterface,
): Promise<PaginatedInterface<LegalDocumentInterface>> => {
  return fetcher('/api/legal-documents', {}, query);
};

export const createLegalDocument = async (legalDocument: LegalDocumentInterface) => {
  return fetcher('/api/legal-documents', { method: 'POST', body: JSON.stringify(legalDocument) });
};

export const updateLegalDocumentById = async (id: string, legalDocument: LegalDocumentInterface) => {
  return fetcher(`/api/legal-documents/${id}`, { method: 'PUT', body: JSON.stringify(legalDocument) });
};

export const getLegalDocumentById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/legal-documents/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteLegalDocumentById = async (id: string) => {
  return fetcher(`/api/legal-documents/${id}`, { method: 'DELETE' });
};
