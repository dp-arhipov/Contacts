export interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
}
export interface User {
  id: number;
  name: string;
  login: string;
}

export interface AuthData {
  login: string;
  password: string;
}
