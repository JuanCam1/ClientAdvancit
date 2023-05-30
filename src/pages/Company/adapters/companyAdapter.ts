import { ICompany, ICompanyPet } from '../model';

export const companyAdapter = (companies: ICompanyPet[]): ICompany[] => {
  const data = companies.map((com) => {
    const {
      id_company: idCompany,
      name_company: nameCompany,
      nit_company: nitCompany,
      id_software: idSoftware,
      pascer_company: pascerCompany,
      cufe_company: cufeCompany
    } = com;

    return {
      idCompany,
      nameCompany,
      nitCompany,
      idSoftware,
      pascerCompany,
      cufeCompany
    };
  });
  return data;
};
