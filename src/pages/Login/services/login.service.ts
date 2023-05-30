import { companyApi } from '@/services';
import { loginPetAdapter } from '../adapters';
import { ILogin } from '@/models';

export const loginRequest = async (login: ILogin) => {
  const loginAdapter  =  loginPetAdapter(login);
  return await companyApi.post('/login', loginAdapter);
};


