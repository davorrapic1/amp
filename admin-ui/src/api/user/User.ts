import { Link } from "../link/Link";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  links?: Array<Link>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
