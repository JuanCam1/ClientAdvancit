import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IUser } from '@/models';

type State = {
  isAuth: boolean;
  user: IUser;
};

type Actions = {
  setUser: (user: IUser) => void;
  logout: () => void;
};

const INITIAL_VALUE_USER = {
  idUser: '',
  nameUser: '',
  emailUser: '',
  userNameUser: '',
};

export const useCompanyStore = create(
  persist<State & Actions>(
    (set) => ({
      user: INITIAL_VALUE_USER,
      
      isAuth: false,

      setUser: (user: IUser) =>
        set((state) => ({
          user: user,
          isAuth: true,
        })),

      logout: () =>
        set((state) => ({
          isAuth: false,
          user: INITIAL_VALUE_USER,
        })),
    }),
    {
      name: 'auth',
    }
  )
);
