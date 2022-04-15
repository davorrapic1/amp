import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LinkUpdateInput = {
  shortenedUrl?: string;
  url?: string;
  user?: UserWhereUniqueInput | null;
};
