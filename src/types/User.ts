export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  role: string;
  isActive: boolean;
}

export interface RegistrationFormData {
  username: string;
  email: string;
  password: string;
  role: string;
}

export interface LoginFormData {
  username: string;
  password: string;
}
