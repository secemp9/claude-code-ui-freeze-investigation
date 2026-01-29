// Module: mY4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mY4 = v((c6w, BY4) => {
  var {
      Transform: Id3
    } = CA("node:stream"),
    {
      Console: Sd3
    } = CA("node:console"),
    hd3 = process.versions.icu ? "✅" : "Y ",
    bd3 = process.versions.icu ? "❌" : "N ";
  BY4.exports = class {
    constructor({
      disableColors: K
    } = {}) {
      this.transform = new Id3({
        transform(q, Y, z) {
          z(null, q);
        }
      }), this.logger = new Sd3({
        stdout: this.transform,
        inspectOptions: {
          colors: !K && !0
        }
      });
    }
    format(K) {
      let q = K.map(({
        method: Y,
        path: z,
        data: {
          statusCode: w
        },
        persist: H,
        times: J,
        timesInvoked: O,
        origin: X
      }) => ({
        Method: Y,
        Origin: X,
        Path: z,
        "Status code": w,
        Persistent: H ? hd3 : bd3,
        Invocations: O,
        Remaining: H ? 1 / 0 : J - O
      }));
      return this.logger.table(q), this.transform.read().toString();
    }
  };
});

// Register to shared state
__$.mY4 = mY4;
