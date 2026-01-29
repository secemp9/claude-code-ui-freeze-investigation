// Module: dz7
// Dependencies: B3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var dz7 = v(pz7 => {
  Object.defineProperty(pz7, "__esModule", {
    value: !0
  });
  var f01 = __$.B3(),
    Za = f01.operators,
    N01 = {
      maximum: {
        okStr: "<=",
        ok: Za.LTE,
        fail: Za.GT
      },
      minimum: {
        okStr: ">=",
        ok: Za.GTE,
        fail: Za.LT
      },
      exclusiveMaximum: {
        okStr: "<",
        ok: Za.LT,
        fail: Za.GTE
      },
      exclusiveMinimum: {
        okStr: ">",
        ok: Za.GT,
        fail: Za.LTE
      }
    },
    r_Y = {
      message: ({
        keyword: A,
        schemaCode: K
      }) => f01.str`must be ${N01[A].okStr} ${K}`,
      params: ({
        keyword: A,
        schemaCode: K
      }) => f01._`{comparison: ${N01[A].okStr}, limit: ${K}}`
    },
    o_Y = {
      keyword: Object.keys(N01),
      type: "number",
      schemaType: "number",
      $data: !0,
      error: r_Y,
      code(A) {
        let {
          keyword: K,
          data: q,
          schemaCode: Y
        } = A;
        A.fail$data(f01._`${q} ${N01[K].fail} ${Y} || isNaN(${q})`);
      }
    };
  pz7.default = o_Y;
});

// Register to shared state
__$.dz7 = dz7;
