import api from './api';

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface User {
  id?: number | string;
  username: string;
  email: string;
}

export const userService = {
  register: async (payload: RegisterPayload) => {
    const res = await api.post('/users', payload);
    return res.data as User;
  },
  login: async (email: string, password: string) => {
    const res = await api.get<User[]>('/users', { params: { email, password } });
    return res.data?.[0] ?? null;
  },
  checkEmailExists: async (email: string) => {
    const res = await api.get<User[]>('/users', { params: { email } });
    return (res.data || []).length > 0;
  }
};
