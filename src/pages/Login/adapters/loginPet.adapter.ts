import { ILogin, ILoginPet } from '@/models';

export const loginPetAdapter = (login: ILogin): ILoginPet => {
  const  { emailUser:email_user , passwordUser:password_user } = login;
  return {
    email_user,
    password_user
  }
}