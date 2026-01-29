// Module: zw7
// Dependencies: B3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zw7 = v(Yw7 => {
  Object.defineProperty(Yw7, "__esModule", {
    value: !0
  });
  var yuA = __$.B3(),
    MGY = {
      message({
        keyword: A,
        schemaCode: K
      }) {
        let q = A === "maxItems" ? "more" : "fewer";
        return yuA.str`must NOT have ${q} than ${K} items`;
      },
      params: ({
        schemaCode: A
      }) => yuA._`{limit: ${A}}`
    },
    PGY = {
      keyword: ["maxItems", "minItems"],
      type: "array",
      schemaType: "number",
      $data: !0,
      error: MGY,
      code(A) {
        let {
            keyword: K,
            data: q,
            schemaCode: Y
          } = A,
          z = K === "maxItems" ? yuA.operators.GT : yuA.operators.LT;
        A.fail$data(yuA._`${q}.length ${z} ${Y}`);
      }
    };
  Yw7.default = PGY;
});

// Register to shared state
__$.zw7 = zw7;
