import { envClient } from "./client";
import { envServer } from "./server";

export const env = {
  client: envClient,
  server: envServer,
};

export type Env = typeof env;
