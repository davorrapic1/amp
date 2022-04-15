import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LinkListRelationFilter } from "../link/LinkListRelationFilter";
import { OptionListRelationFilter } from "../option/OptionListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  links?: LinkListRelationFilter;
  options?: OptionListRelationFilter;
  username?: StringFilter;
};
