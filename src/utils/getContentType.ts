import isURL from "validator/lib/isURL";

import { TypeContent } from "../home/types";

export const getContentType = (content: string): TypeContent => {
  if (CSS.supports("color", content)) return "color";
  if (isURL(content)) return "link";
  return "text";
};
