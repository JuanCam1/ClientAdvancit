import { useState, useEffect } from 'react';
import { ICompany, useCompanies } from '@/pages/Company';
import { Loader, Modal } from '@/components';
import { Boton, Contenido } from '@/styledComponent';
import styles from './CompanyProfile.module.css';
import useProfile from '../../hooks/useProfile';

const CompanyProfile = () => {
  const [isDelete, setIsDelete] = useState(false);
  const [isDeleteCompanyModal, setIsDeleteCompanyModal] = useState(false);

  useEffect(() => {
    setIsDelete(false);
    setIsDeleteCompanyModal(false);
  }, [isDelete]);

  const toggleIsDelete = (value: boolean) => {
    setIsDelete(value);
  };

  const toggleIsDeleteModal = (value: boolean) => {
    setIsDeleteCompanyModal(value);
  };

  const { companies } = useCompanies(isDelete);
  const [dataModal, setDataModal] = useState<ICompany>();
  // const [isEditCompany, setIsEditCompany] = useState(false);

  const { handleDelete, handleEdit } = useProfile({
    toggleIsDelete,
    toggleIsDeleteModal,
  });
  return (
    <>
      <div className={styles.listCompaniesProf}>
        <h3 className={styles.listTitleProf}>Empresas</h3>
        <span>Administra tus Empresas</span>

        {companies.length > 0 ? (
          <div className={styles.listTableProf}>
            <table>
              <thead>
                <tr>
                  <th scope='col'>Empresa</th>
                  <th scope='col'>Nit</th>
                  <th scope='col'>IdSoftware</th>
                  <th scope='col'>Pascer</th>
                  <th scope='col'>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((comp) => {
                  return (
                    <tr key={comp.idCompany}>
                      <td data-label='Empresa' className={styles.textCap}>
                        {comp.nameCompany}
                      </td>
                      <td data-label='Nit'>{comp.nitCompany}</td>
                      <td data-label='IdSoftware' className={styles.textCap}>
                        {comp.idSoftware}
                      </td>
                      <td data-label='Pascer' className={styles.textCap}>
                        {comp.pascerCompany}
                      </td>
                      <td data-label='Opciones'>
                        <div className={styles.buttonsProf}>
                          <button
                            className={styles.delete}
                            onClick={() => {
                              setDataModal(comp);
                              setIsDeleteCompanyModal(true);
                            }}
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <Loader />
        )}
      </div>

      <Modal
        estado={isDeleteCompanyModal}
        cambiarEstado={setIsDeleteCompanyModal}
        titulo='Eliminar Empresa'
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={'center'}
        width='300'
      >
        <Contenido>
          <h1>{dataModal?.nameCompany}</h1>
          <p>NIT: {dataModal?.nitCompany}</p>
          <p>idSoftware: {dataModal?.idSoftware}</p>
          <Boton
            colorButton='#BB2D3B'
            colorButtonHov='#8b232e'
            onClick={() => handleDelete(dataModal?.idCompany)}
          >
            Eliminar
          </Boton>
          <Boton
            colorButton='#35388d'
            colorButtonHov='#2c2e72'
            onClick={() => setIsDeleteCompanyModal(!isDeleteCompanyModal)}
          >
            Aceptar
          </Boton>
        </Contenido>
      </Modal>
    </>
  );
};

export default CompanyProfile;
