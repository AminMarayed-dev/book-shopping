import { api } from "./config.api";

type User = {
  id: number;
  username: string;
  email: string;
  password: number | string;
};

export async function postUsers(user:User) {
  const response = await api.post<User>("/users", user);
  return response.data;
}
