// Module: wH7
// Dependencies: B3, hY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wH7 = v(zH7 => {
  Object.defineProperty(zH7, "__esModule", {
    value: !0
  });
  var I01 = __$.B3(),
    YH7 = __$.hY(),
    dZY = {
      message: ({
        params: A
      }) => I01.str`must match "${A.ifClause}" schema`,
      params: ({
        params: A
      }) => I01._`{failingKeyword: ${A.ifClause}}`
    },
    cZY = {
      keyword: "if",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      error: dZY,
      code(A) {
        let {
          gen: K,
          parentSchema: q,
          it: Y
        } = A;
        if (q.then === void 0 && q.else === void 0) (0, YH7.checkStrictMode)(Y, '"if" without "then" and "else" is ignored');
        let z = qH7(Y, "then"),
          w = qH7(Y, "else");
        if (!z && !w) return;
        let H = K.let("valid", !0),
          J = K.name("_valid");
        if (O(), A.reset(), z && w) {
          let $ = K.let("ifClause");
          A.setParams({
            ifClause: $
          }), K.if(J, X("then", $), X("else", $));
        } else if (z) K.if(J, X("then"));else K.if((0, I01.not)(J), X("else"));
        A.pass(H, () => A.error(!0));
        function O() {
          let $ = A.subschema({
            keyword: "if",
            compositeRule: !0,
            createErrors: !1,
            allErrors: !1
          }, J);
          A.mergeEvaluated($);
        }
        function X($, _) {
          return () => {
            let G = A.subschema({
              keyword: $
            }, J);
            if (K.assign(H, J), A.mergeValidEvaluated(G, H), _) K.assign(_, I01._`${$}`);else A.setParams({
              ifClause: $
            });
          };
        }
      }
    };
  function qH7(A, K) {
    let q = A.schema[K];
    return q !== void 0 && !(0, YH7.alwaysValidSchema)(A, q);
  }
  zH7.default = cZY;
});

// Register to shared state
__$.wH7 = wH7;
