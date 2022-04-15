import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OptionWhereInput = {
  id?: StringFilter;
  mode?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
