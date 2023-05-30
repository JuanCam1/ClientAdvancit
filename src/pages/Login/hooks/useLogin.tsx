import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCompanyStore } from '@/store';
import { loginRequest } from '../services/login.service';
import { swartAlert } from '@/utilities';
import { userAdapter } from '@/adapters/user.adapter';

type ReturnLogin = {
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (evt: FormEvent<HTMLFormElement>) => void;
};

const useLogin = (): ReturnLogin => {
  const [login, setLogin] = useState({
    emailUser: '',
    passwordUser: '',
  });
  const { setUser } = useCompanyStore();
  const navigate = useNavigate();

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (Object.values(login).includes(''))
      return swartAlert('Datos incompletos', 'error');

    loginRequest(login)
      .then((resp) => {
        if (resp.status === 404) {
          return swartAlert('Datos incorrectos', 'error');
        }

        const { user } = resp.data;
        const userLocal = userAdapter(user[0]);
        // console.log('🚀 ~ user:', userLocal.idUser)

        setUser(userLocal);
        navigate('/auth/listCompanies');
      })
      .catch((error) => {
        swartAlert('Datos incorrectos', 'error');
      });
  };

  return {
    handleChange,
    handleSubmit,
  };
};

export default useLogin;
