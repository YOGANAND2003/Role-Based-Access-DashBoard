export interface User {
  username: string;
  email: string;
  role: 'user' | 'moderator' | 'admin';
  isActive?: boolean;
}

export interface AuthResponse {
  token: string;
  user: User;
  message: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  username: string;
  role?: string;
}