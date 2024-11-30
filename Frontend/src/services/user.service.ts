import api from './api';
import { User } from '../types/auth';

export const userService = {
  async getAllUsers(): Promise<User[]> {
    const response = await api.get('/users/all-users');
    return response.data.users;
  },

  async changeUserRole(userId: string, newRole: string): Promise<User> {
    const response = await api.put('/users/change-role', { userId, newRole });
    return response.data.user;
  },

  async toggleAccountStatus(userId: string): Promise<User> {
    const response = await api.put('/users/toggle-status', { userId });
    return response.data.user;
  },

  async getDashboard() {
    const response = await api.get('/users/dashboard');
    return response.data;
  },
};