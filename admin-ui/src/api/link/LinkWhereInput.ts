import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LinkWhereInput = {
  id?: StringFilter;
  shortenedUrl?: StringFilter;
  url?: StringFilter;
  user?: UserWhereUniqueInput;
};
