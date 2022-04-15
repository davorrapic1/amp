import { LinkUpdateManyWithoutUsersInput } from "./LinkUpdateManyWithoutUsersInput";
import { OptionUpdateManyWithoutUsersInput } from "./OptionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  links?: LinkUpdateManyWithoutUsersInput;
  options?: OptionUpdateManyWithoutUsersInput;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
