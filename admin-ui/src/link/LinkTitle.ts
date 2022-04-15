import { Link as TLink } from "../api/link/Link";

export const LINK_TITLE_FIELD = "shortenedUrl";

export const LinkTitle = (record: TLink): string => {
  return record.shortenedUrl || record.id;
};
