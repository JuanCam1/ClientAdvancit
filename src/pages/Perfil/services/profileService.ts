import { ICompany, companyAdapterPet } from '@/pages/Company';
import { companyApi } from '@/services';

export const deleteCompany = async (id_company: string) => {
  return companyApi.delete(`/deleteCompany/${id_company}`);
};

export const editCompany = async (company: ICompany) => {
  const newCompanyAdapterPet = companyAdapterPet(company);
  return companyApi.put(`/updateCompany`, newCompanyAdapterPet);
};
