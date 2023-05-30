import { Loader } from '@/components';
import { useCompanies } from '../../hooks';
import { Table } from '../index';
import styles from './CompanyTable.module.css';

const CompanyTable = () => {
  const { companies } = useCompanies(false);
  return (
    <div className={styles.listCompanies}>
      <h3 className={styles.listTitle}>Empresas</h3>
      <span>Administra tus Empresas</span>

      {companies.length > 0 ? <Table companies={companies} /> : <Loader />}
    </div>
  );
};
export default CompanyTable;
