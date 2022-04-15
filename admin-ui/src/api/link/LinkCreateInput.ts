import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LinkCreateInput = {
  shortenedUrl: string;
  url: string;
  user?: UserWhereUniqueInput | null;
};
