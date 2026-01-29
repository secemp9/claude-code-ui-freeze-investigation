// Module: oY7
// Dependencies: WuA, B3, Hp

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oY7 = v(nY7 => {
  Object.defineProperty(nY7, "__esModule", {
    value: !0
  });
  nY7.boolOrEmptySchema = nY7.topBoolOrEmptySchema = void 0;
  var V0Y = __$.WuA(),
    f0Y = __$.B3(),
    N0Y = __$.Hp(),
    T0Y = {
      message: "boolean schema is false"
    };
  function v0Y(A) {
    let {
      gen: K,
      schema: q,
      validateName: Y
    } = A;
    if (q === !1) iY7(A, !1);else if (typeof q == "object" && q.$async === !0) K.return(N0Y.default.data);else K.assign(f0Y._`${Y}.errors`, null), K.return(!0);
  }
  nY7.topBoolOrEmptySchema = v0Y;
  function E0Y(A, K) {
    let {
      gen: q,
      schema: Y
    } = A;
    if (Y === !1) q.var(K, !1), iY7(A);else q.var(K, !0);
  }
  nY7.boolOrEmptySchema = E0Y;
  function iY7(A, K) {
    let {
        gen: q,
        data: Y
      } = A,
      z = {
        gen: q,
        keyword: "false schema",
        data: Y,
        schema: !1,
        schemaCode: !1,
        schemaValue: !1,
        params: {},
        it: A
      };
    (0, V0Y.reportError)(z, T0Y, void 0, K);
  }
});

// Register to shared state
__$.oY7 = oY7;
