import { ICompany, ICompanyPet } from '../model';

export const companyAdapterPet = (company: ICompany): ICompanyPet => {
  const {
    idCompany: id_company,
    nameCompany: name_company,
    nitCompany: nit_company,
    idSoftware: id_software,
    pascerCompany: pascer_company,
    cufeCompany: cufe_company,
  } = company;

  return {
    id_company,
    name_company,
    nit_company,
    id_software,
    pascer_company,
    cufe_company,
  };
};
