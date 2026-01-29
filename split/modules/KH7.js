// Module: KH7
// Dependencies: hY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KH7 = v(AH7 => {
  Object.defineProperty(AH7, "__esModule", {
    value: !0
  });
  var QZY = __$.hY(),
    UZY = {
      keyword: "allOf",
      schemaType: "array",
      code(A) {
        let {
          gen: K,
          schema: q,
          it: Y
        } = A;
        if (!Array.isArray(q)) throw Error("ajv implementation error");
        let z = K.name("valid");
        q.forEach((w, H) => {
          if ((0, QZY.alwaysValidSchema)(Y, w)) return;
          let J = A.subschema({
            keyword: "allOf",
            schemaProp: H
          }, z);
          A.ok(z), A.mergeEvaluated(J);
        });
      }
    };
  AH7.default = UZY;
});

// Register to shared state
__$.KH7 = KH7;
