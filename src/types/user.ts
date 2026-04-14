export type User = {
  name: string;
  email: string;
  _id: string;
  description: string;
};

export type RegisterForm = Pick<User, "name" | "email"> & {
  password: string;
  password_confirmation: string;
};

export type LoginForm = Pick<User, "email"> & {
  password: string;
};
