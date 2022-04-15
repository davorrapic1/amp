import { SortOrder } from "../../util/SortOrder";

export type LinkOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  shortenedUrl?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  userId?: SortOrder;
};
