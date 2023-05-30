import { IUser, IUserPet } from '@/models';

export const userAdapter = (user: IUserPet): IUser => {
  const {
    id_user: idUser,
    name_user: nameUser,
    email_user: emailUser,
  } = user;
  return {
    idUser,
    nameUser,
    emailUser,
  };
};
