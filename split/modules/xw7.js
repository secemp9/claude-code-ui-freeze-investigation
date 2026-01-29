// Module: xw7
// Dependencies: B3, hY, yC

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xw7 = v(Sw7 => {
  Object.defineProperty(Sw7, "__esModule", {
    value: !0
  });
  Sw7.validateSchemaDeps = Sw7.validatePropertyDeps = Sw7.error = void 0;
  var oZ6 = __$.B3(),
    GZY = __$.hY(),
    SuA = __$.yC();
  Sw7.error = {
    message: ({
      params: {
        property: A,
        depsCount: K,
        deps: q
      }
    }) => {
      let Y = K === 1 ? "property" : "properties";
      return oZ6.str`must have ${Y} ${q} when property ${A} is present`;
    },
    params: ({
      params: {
        property: A,
        depsCount: K,
        deps: q,
        missingProperty: Y
      }
    }) => oZ6._`{property: ${A},
    missingProperty: ${Y},
    depsCount: ${K},
    deps: ${q}}`
  };
  var ZZY = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: Sw7.error,
    code(A) {
      let [K, q] = WZY(A);
      yw7(A, K), Iw7(A, q);
    }
  };
  function WZY({
    schema: A
  }) {
    let K = {},
      q = {};
    for (let Y in A) {
      if (Y === "__proto__") continue;
      let z = Array.isArray(A[Y]) ? K : q;
      z[Y] = A[Y];
    }
    return [K, q];
  }
  function yw7(A, K = A.schema) {
    let {
      gen: q,
      data: Y,
      it: z
    } = A;
    if (Object.keys(K).length === 0) return;
    let w = q.let("missing");
    for (let H in K) {
      let J = K[H];
      if (J.length === 0) continue;
      let O = (0, SuA.propertyInData)(q, Y, H, z.opts.ownProperties);
      if (A.setParams({
        property: H,
        depsCount: J.length,
        deps: J.join(", ")
      }), z.allErrors) q.if(O, () => {
        for (let X of J) (0, SuA.checkReportMissingProp)(A, X);
      });else q.if(oZ6._`${O} && (${(0, SuA.checkMissingProp)(A, J, w)})`), (0, SuA.reportMissingProp)(A, w), q.else();
    }
  }
  Sw7.validatePropertyDeps = yw7;
  function Iw7(A, K = A.schema) {
    let {
        gen: q,
        data: Y,
        keyword: z,
        it: w
      } = A,
      H = q.name("valid");
    for (let J in K) {
      if ((0, GZY.alwaysValidSchema)(w, K[J])) continue;
      q.if((0, SuA.propertyInData)(q, Y, J, w.opts.ownProperties), () => {
        let O = A.subschema({
          keyword: z,
          schemaProp: J
        }, H);
        A.mergeValidEvaluated(O, H);
      }, () => q.var(H, !0)), A.ok(H);
    }
  }
  Sw7.validateSchemaDeps = Iw7;
  Sw7.default = ZZY;
});

// Register to shared state
__$.xw7 = xw7;
