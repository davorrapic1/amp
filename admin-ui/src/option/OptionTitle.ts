import { Option as TOption } from "../api/option/Option";

export const OPTION_TITLE_FIELD = "mode";

export const OptionTitle = (record: TOption): string => {
  return record.mode || record.id;
};
