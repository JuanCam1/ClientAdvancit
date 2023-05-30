import { FormEvent } from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { createCompany } from '../../services';
import { randomId, swartAlert } from '@/utilities';
import useForm from '@/hooks/useForm';
import styles from './AddCompany.module.css';

const AddCompany = () => {
  const INITIAL_STATE = {
    idCompany: randomId('-1'),
    nameCompany: '',
    nitCompany: '',
    idSoftware: '',
    pascerCompany: '',
    cufeCompany: '',
  };

  const { data: company, handleChange, handleReset } = useForm(INITIAL_STATE);

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (Object.values(company).includes(''))
      swartAlert('Datos incompletos', 'error');

    const info = await createCompany('createCompany', company);
    const { data } = info;

    if (data.message === 'correct' && info.status === 201) {
      swartAlert('Empresa agregada', 'success');
      handleReset(true);
    }

    if (info.status === 500 || info.status === 404) {
      swartAlert('Empresa no se ha agregado', 'error');
    }
  };

  return (
    <section className={styles.containerAdd}>
      <div>
        <div className={styles.addLogo}>
          <h2>Agregar Empresa</h2>
        </div>

        <div className={styles.addForm}>
          <form autoComplete='off' onSubmit={handleSubmit}>
            <div>
              <BsPencilSquare />
              <input
                type='text'
                name='nameCompany'
                placeholder='Empresa'
                value={company.nameCompany}
                onChange={handleChange}
                />
            </div>
            <div>
              <BsPencilSquare />
              <input
                type='text'
                name='nitCompany'
                placeholder='Nit'
                value={company.nitCompany}
                onChange={handleChange}
                />
            </div>
            <div>
              <BsPencilSquare />
              <input
                type='text'
                name='idSoftware'
                placeholder='id Software'
                value={company.idSoftware}
                onChange={handleChange}
                />
            </div>
            <div>
              <BsPencilSquare />
              <input
                type='text'
                name='pascerCompany'
                placeholder='Pascer'
                value={company.pascerCompany}
                onChange={handleChange}
              />
            </div>
            <div>
              <BsPencilSquare />
              <input
                type='text'
                name='cufeCompany'
                placeholder='Cufe'
                value={company.cufeCompany}
                onChange={handleChange}
              />
            </div>
            <div className={styles.addButton}>
              <button>
                Agregar Empresa
                <div className={styles.arrowWrapper}>
                  <div className={styles.arrow}></div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddCompany;
