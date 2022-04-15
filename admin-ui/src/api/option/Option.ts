import { User } from "../user/User";

export type Option = {
  createdAt: Date;
  id: string;
  mode: string | null;
  updatedAt: Date;
  user?: User | null;
};
