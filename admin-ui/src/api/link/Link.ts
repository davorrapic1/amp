import { User } from "../user/User";

export type Link = {
  createdAt: Date;
  id: string;
  shortenedUrl: string;
  updatedAt: Date;
  url: string;
  user?: User | null;
};
