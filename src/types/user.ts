export interface UserAddress {
  address: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface UserCompany {
  name: string;
  title: string;
  department: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  image: string;
  address: UserAddress;
  company: UserCompany;
}


export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
