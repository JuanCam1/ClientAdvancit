import { Link } from 'react-router-dom';
import './Button.css';

export function Button() {
  return (
    <Link to='/'>
      <button className='btn'>Salir</button>
    </Link>
  );
}
