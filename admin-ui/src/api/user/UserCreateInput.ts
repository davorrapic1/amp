import { LinkCreateNestedManyWithoutUsersInput } from "./LinkCreateNestedManyWithoutUsersInput";
import { OptionCreateNestedManyWithoutUsersInput } from "./OptionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  links?: LinkCreateNestedManyWithoutUsersInput;
  options?: OptionCreateNestedManyWithoutUsersInput;
  password: string;
  roles: Array<string>;
  username: string;
};
