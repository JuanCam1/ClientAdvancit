import { useState } from 'react';
import NavLinkCust from '../navLinkCustom/NavLinkCust';
import './Navbar.css';
import { useCompanyStore } from '@/store';

function Navbar() {
  const { logout } = useCompanyStore();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const logoutApp = () => {
    logout();
    setClick(false);
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-logo' onClick={closeMobileMenu}>
          Advancit
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLinkCust to='listCompanies' handleClick={closeMobileMenu}>
              Empresas
            </NavLinkCust>
          </li>

          <li className='nav-item'>
            <NavLinkCust to='addCompany' handleClick={closeMobileMenu}>
              Agregar Empresa
            </NavLinkCust>
          </li>
          <li className='nav-item'>
            <NavLinkCust to='profile' handleClick={closeMobileMenu}>
              Perfil
            </NavLinkCust>
          </li>
          <li className='nav-item'>
            <NavLinkCust to='/' handleClick={logoutApp}>
              Salir
            </NavLinkCust>
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;
