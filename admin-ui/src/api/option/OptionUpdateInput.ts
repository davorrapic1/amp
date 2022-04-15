import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OptionUpdateInput = {
  mode?: string | null;
  user?: UserWhereUniqueInput | null;
};
