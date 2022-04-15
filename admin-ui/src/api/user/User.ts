import { Link } from "../link/Link";
import { Option } from "../option/Option";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  links?: Array<Link>;
  options?: Array<Option>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
