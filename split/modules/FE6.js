// Module: FE6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var FE6 = v(ZU7 => {
  Object.defineProperty(ZU7, "__esModule", {
    value: !0
  });
  ZU7.CIPHER_SUITES = void 0;
  ZU7.getDefaultRootsData = fK2;
  var VK2 = CA("fs");
  ZU7.CIPHER_SUITES = process.env.GRPC_SSL_CIPHER_SUITES;
  var GU7 = process.env.GRPC_DEFAULT_SSL_ROOTS_FILE_PATH,
    gE6 = null;
  function fK2() {
    if (GU7) {
      if (gE6 === null) gE6 = VK2.readFileSync(GU7);
      return gE6;
    }
    return null;
  }
});

// Register to shared state
__$.FE6 = FE6;
