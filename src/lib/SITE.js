import fBinMd from './fBinMd.js';

import {
  unpack
} from '@3-/msgpack';

import bintxt from '@3-/bintxt';

import pair from '@3-/pair';

const SITE = unpack((await fBinMd('site')));

SITE.lang = pair(bintxt(SITE.lang));

export default SITE;
