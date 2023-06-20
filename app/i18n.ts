import { cache } from "react";
import { setupI18n } from "./setupI18n";

export const getI18n = cache(async () => {
  return setupI18n({
    hello: "world",
  });
});
