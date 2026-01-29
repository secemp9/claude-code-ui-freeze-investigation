// Module: Ky7
// Dependencies: hs, wL, wS

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ky7 = v((jDH, Ay7) => {
  var CrY = CA("fs"),
    {
      ono: tN6
    } = __$.hs(),
    eR7 = __$.wL(),
    {
      ResolverError: eN6
    } = __$.wS();
  Ay7.exports = {
    order: 100,
    canRead(A) {
      return eR7.isFileSystemPath(A.url);
    },
    read(A) {
      return new Promise((K, q) => {
        let Y;
        try {
          Y = eR7.toFileSystemPath(A.url);
        } catch (z) {
          q(new eN6(tN6.uri(z, `Malformed URI: ${A.url}`), A.url));
        }
        try {
          CrY.readFile(Y, (z, w) => {
            if (z) q(new eN6(tN6(z, `Error opening file "${Y}"`), Y));else K(w);
          });
        } catch (z) {
          q(new eN6(tN6(z, `Error opening file "${Y}"`), Y));
        }
      });
    }
  };
});

// Register to shared state
__$.Ky7 = Ky7;
