// Module: ow7
// Dependencies: hY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ow7 = v(rw7 => {
  Object.defineProperty(rw7, "__esModule", {
    value: !0
  });
  var IZY = __$.hY(),
    SZY = {
      keyword: "not",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      code(A) {
        let {
          gen: K,
          schema: q,
          it: Y
        } = A;
        if ((0, IZY.alwaysValidSchema)(Y, q)) {
          A.fail();
          return;
        }
        let z = K.name("valid");
        A.subschema({
          keyword: "not",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, z), A.failResult(z, () => A.reset(), () => A.error());
      },
      error: {
        message: "must NOT be valid"
      }
    };
  rw7.default = SZY;
});

// Register to shared state
__$.ow7 = ow7;
