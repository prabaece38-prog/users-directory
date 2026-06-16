// Shape of a single user as returned by https://dummyjson.com/users
// Only the fields the UI actually uses are typed in detail;
// extra API fields are allowed via the index signature so the
// app doesn't break if dummyjson adds more fields later.

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

// Raw shape of the GET /users response
export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
