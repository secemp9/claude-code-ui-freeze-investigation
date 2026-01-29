// Module: Aw7
// Dependencies: B3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Aw7 = v(ez7 => {
  Object.defineProperty(ez7, "__esModule", {
    value: !0
  });
  var CuA = __$.B3(),
    $GY = {
      message({
        keyword: A,
        schemaCode: K
      }) {
        let q = A === "maxProperties" ? "more" : "fewer";
        return CuA.str`must NOT have ${q} than ${K} properties`;
      },
      params: ({
        schemaCode: A
      }) => CuA._`{limit: ${A}}`
    },
    _GY = {
      keyword: ["maxProperties", "minProperties"],
      type: "object",
      schemaType: "number",
      $data: !0,
      error: $GY,
      code(A) {
        let {
            keyword: K,
            data: q,
            schemaCode: Y
          } = A,
          z = K === "maxProperties" ? CuA.operators.GT : CuA.operators.LT;
        A.fail$data(CuA._`Object.keys(${q}).length ${z} ${Y}`);
      }
    };
  ez7.default = _GY;
});

// Register to shared state
__$.Aw7 = Aw7;
