// Module: pw7
// Dependencies: VuA, yC, hY, aZ6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pw7 = v(Uw7 => {
  Object.defineProperty(Uw7, "__esModule", {
    value: !0
  });
  var kZY = __$.VuA(),
    Fw7 = __$.yC(),
    sZ6 = __$.hY(),
    Qw7 = __$.aZ6(),
    CZY = {
      keyword: "properties",
      type: "object",
      schemaType: "object",
      code(A) {
        let {
          gen: K,
          schema: q,
          parentSchema: Y,
          data: z,
          it: w
        } = A;
        if (w.opts.removeAdditional === "all" && Y.additionalProperties === void 0) Qw7.default.code(new kZY.KeywordCxt(w, Qw7.default, "additionalProperties"));
        let H = (0, Fw7.allSchemaProperties)(q);
        for (let _ of H) w.definedProperties.add(_);
        if (w.opts.unevaluated && H.length && w.props !== !0) w.props = sZ6.mergeEvaluated.props(K, (0, sZ6.toHash)(H), w.props);
        let J = H.filter(_ => !(0, sZ6.alwaysValidSchema)(w, q[_]));
        if (J.length === 0) return;
        let O = K.name("valid");
        for (let _ of J) {
          if (X(_)) $(_);else {
            if (K.if((0, Fw7.propertyInData)(K, z, _, w.opts.ownProperties)), $(_), !w.allErrors) K.else().var(O, !0);
            K.endIf();
          }
          A.it.definedProperties.add(_), A.ok(O);
        }
        function X(_) {
          return w.opts.useDefaults && !w.compositeRule && q[_].default !== void 0;
        }
        function $(_) {
          A.subschema({
            keyword: "properties",
            schemaProp: _,
            dataProp: _
          }, O);
        }
      }
    };
  Uw7.default = CZY;
});

// Register to shared state
__$.pw7 = pw7;
