import { companyApi } from '@/services';
import { ICompany, ICompanyPet } from '../model/companyModel';
import { companyAdapterPet } from '../adapters';

export const getCompaniesAll = async (
  url: string,
  controller: AbortController
) => {
  return companyApi.get<ICompanyPet[]>(`/${url}`, {
    signal: controller.signal,
  });
};

export const createCompany = async (url : string, newCompany: ICompany) => {
  const newCompanyAdapter = companyAdapterPet(newCompany);

  return companyApi.post(`/${url}`, newCompanyAdapter);
}
