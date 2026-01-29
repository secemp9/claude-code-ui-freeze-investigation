// Module: az7
// Dependencies: B3, hY, rz7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var az7 = v(oz7 => {
  Object.defineProperty(oz7, "__esModule", {
    value: !0
  });
  var _qA = __$.B3(),
    KGY = __$.hY(),
    qGY = __$.rz7(),
    YGY = {
      message({
        keyword: A,
        schemaCode: K
      }) {
        let q = A === "maxLength" ? "more" : "fewer";
        return _qA.str`must NOT have ${q} than ${K} characters`;
      },
      params: ({
        schemaCode: A
      }) => _qA._`{limit: ${A}}`
    },
    zGY = {
      keyword: ["maxLength", "minLength"],
      type: "string",
      schemaType: "number",
      $data: !0,
      error: YGY,
      code(A) {
        let {
            keyword: K,
            data: q,
            schemaCode: Y,
            it: z
          } = A,
          w = K === "maxLength" ? _qA.operators.GT : _qA.operators.LT,
          H = z.opts.unicode === !1 ? _qA._`${q}.length` : _qA._`${(0, KGY.useFunc)(A.gen, qGY.default)}(${q})`;
        A.fail$data(_qA._`${H} ${w} ${Y}`);
      }
    };
  oz7.default = zGY;
});

// Register to shared state
__$.az7 = az7;
