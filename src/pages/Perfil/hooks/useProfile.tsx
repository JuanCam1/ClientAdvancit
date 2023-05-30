import { ICompany } from '@/pages/Company';
import { deleteCompany } from '../services/profileService';
import { swartAlert } from '@/utilities';


type PropsUseProfile = {
  toggleIsDelete: (value: boolean) => void,
  toggleIsDeleteModal: (value: boolean) => void,
}
const useProfile = ({toggleIsDelete,toggleIsDeleteModal}: PropsUseProfile) => {
 
  const handleDelete = async (id_company: string = '0') => {
    deleteCompany(id_company)
      .then((res) => {

        if (res.status === 500) throw Error('no delete');

        toggleIsDeleteModal(false);
        swartAlert('Empresa eliminada', 'success');
        toggleIsDelete(true);
      })
      .catch((err) => {
        swartAlert('Empresa no eliminada', 'error');
        toggleIsDeleteModal(true);
        toggleIsDelete(false);
      });
  };
  const handleEdit = (company: ICompany) => {};
  return {
    handleDelete,
    handleEdit,
  };
};

export default useProfile;
