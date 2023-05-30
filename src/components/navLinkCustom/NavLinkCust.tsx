import { NavLink } from 'react-router-dom';
import './NavLinkCust.css';

type Props = {
  to: string;
  children: string;
  handleClick: () => void;
};

const NavLinkCust = ({ to, children, handleClick, ...props }: Props) => {
  return (
    <NavLink
      to={to}
      onClick={handleClick}
      className={({ isActive }) => {
        return isActive ? 'is-active nav-links' : 'nav-links';
      }}
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default NavLinkCust;
