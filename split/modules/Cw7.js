// Module: Cw7
// Dependencies: B3, hY, yC, nZ6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Cw7 = v(kw7 => {
  Object.defineProperty(kw7, "__esModule", {
    value: !0
  });
  var Ew7 = __$.B3(),
    YZY = __$.hY(),
    zZY = __$.yC(),
    wZY = __$.nZ6(),
    HZY = {
      message: ({
        params: {
          len: A
        }
      }) => Ew7.str`must NOT have more than ${A} items`,
      params: ({
        params: {
          len: A
        }
      }) => Ew7._`{limit: ${A}}`
    },
    JZY = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      error: HZY,
      code(A) {
        let {
            schema: K,
            parentSchema: q,
            it: Y
          } = A,
          {
            prefixItems: z
          } = q;
        if (Y.items = !0, (0, YZY.alwaysValidSchema)(Y, K)) return;
        if (z) (0, wZY.validateAdditionalItems)(A, z);else A.ok((0, zZY.validateArray)(A));
      }
    };
  kw7.default = JZY;
});

// Register to shared state
__$.Cw7 = Cw7;
