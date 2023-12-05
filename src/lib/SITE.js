import fMdJson from "./fMdJson.js";

import pair from "@3-/pair";

const SITE = await fMdJson("site");

SITE.lang = pair(SITE.lang.split(";"));

export default SITE;
