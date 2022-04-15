import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OptionCreateInput = {
  mode?: string | null;
  user?: UserWhereUniqueInput | null;
};
