// Module: mw7
// Dependencies: B3, hY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mw7 = v(Bw7 => {
  Object.defineProperty(Bw7, "__esModule", {
    value: !0
  });
  var uw7 = __$.B3(),
    MZY = __$.hY(),
    PZY = {
      message: "property name must be valid",
      params: ({
        params: A
      }) => uw7._`{propertyName: ${A.propertyName}}`
    },
    VZY = {
      keyword: "propertyNames",
      type: "object",
      schemaType: ["object", "boolean"],
      error: PZY,
      code(A) {
        let {
          gen: K,
          schema: q,
          data: Y,
          it: z
        } = A;
        if ((0, MZY.alwaysValidSchema)(z, q)) return;
        let w = K.name("valid");
        K.forIn("key", Y, H => {
          A.setParams({
            propertyName: H
          }), A.subschema({
            keyword: "propertyNames",
            data: H,
            dataTypes: ["string"],
            propertyName: H,
            compositeRule: !0
          }, w), K.if((0, uw7.not)(w), () => {
            if (A.error(!0), !z.allErrors) K.break();
          });
        }), A.ok(w);
      }
    };
  Bw7.default = VZY;
});

// Register to shared state
__$.mw7 = mw7;
