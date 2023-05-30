import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import {useLogin} from '../hooks';
import logo from '../../../assets/logo.png';
import styles from './Login.module.css';

const Login = () => {
  const { handleChange,handleSubmit } = useLogin();
  return (
    <section className={styles.containerLogin}>
      <div>
        <div className={styles.loginLogo}>
          <div>
            <div className={styles.containerImg}>
              <img src={logo} alt='logo empresa' />
            </div>
          </div>
        </div>
        
        <div className={styles.loginForm}>
          <form autoComplete='off' onSubmit={handleSubmit}>
            <div>
              <FaUser />
              <input type='email' name='emailUser' placeholder='Email' onChange={handleChange} />
            </div>
            <div>
              <RiLockPasswordFill />
              <input type='password' name='passwordUser' placeholder='Password' onChange={handleChange}/>
            </div>
            <div className={styles.loginButton}>
              <button type='submit' >
                Iniciar Sesión
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

export default Login;
