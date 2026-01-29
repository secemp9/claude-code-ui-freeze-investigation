// Module: $w7
// Dependencies: B3, hY, v01

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $w7 = v(Xw7 => {
  Object.defineProperty(Xw7, "__esModule", {
    value: !0
  });
  var lZ6 = __$.B3(),
    CGY = __$.hY(),
    LGY = __$.v01(),
    RGY = {
      message: "must be equal to constant",
      params: ({
        schemaCode: A
      }) => lZ6._`{allowedValue: ${A}}`
    },
    yGY = {
      keyword: "const",
      $data: !0,
      error: RGY,
      code(A) {
        let {
          gen: K,
          data: q,
          $data: Y,
          schemaCode: z,
          schema: w
        } = A;
        if (Y || w && typeof w == "object") A.fail$data(lZ6._`!${(0, CGY.useFunc)(K, LGY.default)}(${q}, ${z})`);else A.fail(lZ6._`${w} !== ${q}`);
      }
    };
  Xw7.default = yGY;
});

// Register to shared state
__$.$w7 = $w7;
