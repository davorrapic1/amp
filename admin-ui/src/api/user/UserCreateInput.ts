import { LinkCreateNestedManyWithoutUsersInput } from "./LinkCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  links?: LinkCreateNestedManyWithoutUsersInput;
  password: string;
  roles: Array<string>;
  username: string;
};
