import * as prismic from "@prismicio/client";

import { PRISMIC_ACCESS_TOKEN, PRISMIC_REPOSITORY } from "../config";

export const prismicClient = prismic.createClient(PRISMIC_REPOSITORY, {
  accessToken: PRISMIC_ACCESS_TOKEN,
  routes: [],
});
