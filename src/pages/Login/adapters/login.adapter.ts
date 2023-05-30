import { ILogin, ILoginPet } from '@/models';

export const loginAdapter = (login: ILoginPet): ILogin => {
  const  { email_user: emailUser , password_user: passwordUser } = login;
  return {
    emailUser,
    passwordUser
  }
}