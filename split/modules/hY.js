// Module: hY
// Dependencies: B3, GuA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hY = v(gY7 => {
  Object.defineProperty(gY7, "__esModule", {
    value: !0
  });
  gY7.checkStrictMode = gY7.getErrorPath = gY7.Type = gY7.useFunc = gY7.setEvaluated = gY7.evaluatedPropsToName = gY7.mergeEvaluated = gY7.eachItem = gY7.unescapeJsonPointer = gY7.escapeJsonPointer = gY7.escapeFragment = gY7.unescapeFragment = gY7.schemaRefOrVal = gY7.schemaHasRulesButRef = gY7.schemaHasRules = gY7.checkUnknownRules = gY7.alwaysValidSchema = gY7.toHash = void 0;
  var fw = __$.B3(),
    hOY = __$.GuA();
  function bOY(A) {
    let K = {};
    for (let q of A) K[q] = !0;
    return K;
  }
  gY7.toHash = bOY;
  function xOY(A, K) {
    if (typeof K == "boolean") return K;
    if (Object.keys(K).length === 0) return !0;
    return bY7(A, K), !xY7(K, A.self.RULES.all);
  }
  gY7.alwaysValidSchema = xOY;
  function bY7(A, K = A.schema) {
    let {
      opts: q,
      self: Y
    } = A;
    if (!q.strictSchema) return;
    if (typeof K === "boolean") return;
    let z = Y.RULES.keywords;
    for (let w in K) if (!z[w]) mY7(A, `unknown keyword: "${w}"`);
  }
  gY7.checkUnknownRules = bY7;
  function xY7(A, K) {
    if (typeof A == "boolean") return !A;
    for (let q in A) if (K[q]) return !0;
    return !1;
  }
  gY7.schemaHasRules = xY7;
  function uOY(A, K) {
    if (typeof A == "boolean") return !A;
    for (let q in A) if (q !== "$ref" && K.all[q]) return !0;
    return !1;
  }
  gY7.schemaHasRulesButRef = uOY;
  function BOY({
    topSchemaRef: A,
    schemaPath: K
  }, q, Y, z) {
    if (!z) {
      if (typeof q == "number" || typeof q == "boolean") return q;
      if (typeof q == "string") return fw._`${q}`;
    }
    return fw._`${A}${K}${(0, fw.getProperty)(Y)}`;
  }
  gY7.schemaRefOrVal = BOY;
  function mOY(A) {
    return uY7(decodeURIComponent(A));
  }
  gY7.unescapeFragment = mOY;
  function gOY(A) {
    return encodeURIComponent(PZ6(A));
  }
  gY7.escapeFragment = gOY;
  function PZ6(A) {
    if (typeof A == "number") return `${A}`;
    return A.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  gY7.escapeJsonPointer = PZ6;
  function uY7(A) {
    return A.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  gY7.unescapeJsonPointer = uY7;
  function FOY(A, K) {
    if (Array.isArray(A)) for (let q of A) K(q);else K(A);
  }
  gY7.eachItem = FOY;
  function SY7({
    mergeNames: A,
    mergeToName: K,
    mergeValues: q,
    resultToName: Y
  }) {
    return (z, w, H, J) => {
      let O = H === void 0 ? w : H instanceof fw.Name ? (w instanceof fw.Name ? A(z, w, H) : K(z, w, H), H) : w instanceof fw.Name ? (K(z, H, w), w) : q(w, H);
      return J === fw.Name && !(O instanceof fw.Name) ? Y(z, O) : O;
    };
  }
  gY7.mergeEvaluated = {
    props: SY7({
      mergeNames: (A, K, q) => A.if(fw._`${q} !== true && ${K} !== undefined`, () => {
        A.if(fw._`${K} === true`, () => A.assign(q, !0), () => A.assign(q, fw._`${q} || {}`).code(fw._`Object.assign(${q}, ${K})`));
      }),
      mergeToName: (A, K, q) => A.if(fw._`${q} !== true`, () => {
        if (K === !0) A.assign(q, !0);else A.assign(q, fw._`${q} || {}`), VZ6(A, q, K);
      }),
      mergeValues: (A, K) => A === !0 ? !0 : {
        ...A,
        ...K
      },
      resultToName: BY7
    }),
    items: SY7({
      mergeNames: (A, K, q) => A.if(fw._`${q} !== true && ${K} !== undefined`, () => A.assign(q, fw._`${K} === true ? true : ${q} > ${K} ? ${q} : ${K}`)),
      mergeToName: (A, K, q) => A.if(fw._`${q} !== true`, () => A.assign(q, K === !0 ? !0 : fw._`${q} > ${K} ? ${q} : ${K}`)),
      mergeValues: (A, K) => A === !0 ? !0 : Math.max(A, K),
      resultToName: (A, K) => A.var("items", K)
    })
  };
  function BY7(A, K) {
    if (K === !0) return A.var("props", !0);
    let q = A.var("props", fw._`{}`);
    if (K !== void 0) VZ6(A, q, K);
    return q;
  }
  gY7.evaluatedPropsToName = BY7;
  function VZ6(A, K, q) {
    Object.keys(q).forEach(Y => A.assign(fw._`${K}${(0, fw.getProperty)(Y)}`, !0));
  }
  gY7.setEvaluated = VZ6;
  var hY7 = {};
  function QOY(A, K) {
    return A.scopeValue("func", {
      ref: K,
      code: hY7[K.code] || (hY7[K.code] = new hOY._Code(K.code))
    });
  }
  gY7.useFunc = QOY;
  var MZ6;
  (function (A) {
    A[A.Num = 0] = "Num", A[A.Str = 1] = "Str";
  })(MZ6 || (gY7.Type = MZ6 = {}));
  function UOY(A, K, q) {
    if (A instanceof fw.Name) {
      let Y = K === MZ6.Num;
      return q ? Y ? fw._`"[" + ${A} + "]"` : fw._`"['" + ${A} + "']"` : Y ? fw._`"/" + ${A}` : fw._`"/" + ${A}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return q ? (0, fw.getProperty)(A).toString() : "/" + PZ6(A);
  }
  gY7.getErrorPath = UOY;
  function mY7(A, K, q = A.opts.strictSchema) {
    if (!q) return;
    if (K = `strict mode: ${K}`, q === !0) throw Error(K);
    A.self.logger.warn(K);
  }
  gY7.checkStrictMode = mY7;
});

// Register to shared state
__$.hY = hY;
