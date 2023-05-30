import { Route, Routes } from 'react-router-dom'
import { Navbar } from '@/components'
import { AddCompany, CompanyTable } from '@/pages/Company'
import { Profile } from '@/pages/Perfil'
import styles from './styleRoute.module.css';
const DashboardRoute = () => {

  return (
    <>
      <Navbar />
      <div className={styles.containerRoute}>
        <Routes>
          <Route path='listCompanies' element={<CompanyTable />} />
          <Route path='addCompany' element={<AddCompany />} />
          <Route path='profile' element={<Profile />} />
        </Routes>
      </div>
    </>
  )
}

export default DashboardRoute