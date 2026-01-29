// Module: V27
// Dependencies: B3, Hp, yC, WuA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var V27 = v(M27 => {
  Object.defineProperty(M27, "__esModule", {
    value: !0
  });
  M27.validateKeywordUsage = M27.validSchemaType = M27.funcKeywordCode = M27.macroKeywordCode = void 0;
  var FM = __$.B3(),
    XqA = __$.Hp(),
    NXY = __$.yC(),
    TXY = __$.WuA();
  function vXY(A, K) {
    let {
        gen: q,
        keyword: Y,
        schema: z,
        parentSchema: w,
        it: H
      } = A,
      J = K.macro.call(H.self, z, w, H),
      O = j27(q, Y, J);
    if (H.opts.validateSchema !== !1) H.self.validateSchema(J, !0);
    let X = q.name("valid");
    A.subschema({
      schema: J,
      schemaPath: FM.nil,
      errSchemaPath: `${H.errSchemaPath}/${Y}`,
      topSchemaRef: O,
      compositeRule: !0
    }, X), A.pass(X, () => A.error(!0));
  }
  M27.macroKeywordCode = vXY;
  function EXY(A, K) {
    var q;
    let {
      gen: Y,
      keyword: z,
      schema: w,
      parentSchema: H,
      $data: J,
      it: O
    } = A;
    CXY(O, K);
    let X = !J && K.compile ? K.compile.call(O.self, w, H, O) : K.validate,
      $ = j27(Y, z, X),
      _ = Y.let("valid");
    A.block$data(_, G), A.ok((q = K.valid) !== null && q !== void 0 ? q : _);
    function G() {
      if (K.errors === !1) {
        if (D(), K.modifying) D27(A);
        j(() => A.error());
      } else {
        let M = K.async ? Z() : W();
        if (K.modifying) D27(A);
        j(() => kXY(A, M));
      }
    }
    function Z() {
      let M = Y.let("ruleErrs", null);
      return Y.try(() => D(FM._`await `), P => Y.assign(_, !1).if(FM._`${P} instanceof ${O.ValidationError}`, () => Y.assign(M, FM._`${P}.errors`), () => Y.throw(P))), M;
    }
    function W() {
      let M = FM._`${$}.errors`;
      return Y.assign(M, null), D(FM.nil), M;
    }
    function D(M = K.async ? FM._`await ` : FM.nil) {
      let P = O.opts.passContext ? XqA.default.this : XqA.default.self,
        f = !("compile" in K && !J || K.schema === !1);
      Y.assign(_, FM._`${M}${(0, NXY.callValidateCode)(A, $, P, f)}`, K.modifying);
    }
    function j(M) {
      var P;
      Y.if((0, FM.not)((P = K.valid) !== null && P !== void 0 ? P : _), M);
    }
  }
  M27.funcKeywordCode = EXY;
  function D27(A) {
    let {
      gen: K,
      data: q,
      it: Y
    } = A;
    K.if(Y.parentData, () => K.assign(q, FM._`${Y.parentData}[${Y.parentDataProperty}]`));
  }
  function kXY(A, K) {
    let {
      gen: q
    } = A;
    q.if(FM._`Array.isArray(${K})`, () => {
      q.assign(XqA.default.vErrors, FM._`${XqA.default.vErrors} === null ? ${K} : ${XqA.default.vErrors}.concat(${K})`).assign(XqA.default.errors, FM._`${XqA.default.vErrors}.length`), (0, TXY.extendErrors)(A);
    }, () => A.error());
  }
  function CXY({
    schemaEnv: A
  }, K) {
    if (K.async && !A.$async) throw Error("async keyword in sync schema");
  }
  function j27(A, K, q) {
    if (q === void 0) throw Error(`keyword "${K}" failed to compile`);
    return A.scopeValue("keyword", typeof q == "function" ? {
      ref: q
    } : {
      ref: q,
      code: (0, FM.stringify)(q)
    });
  }
  function LXY(A, K, q = !1) {
    return !K.length || K.some(Y => Y === "array" ? Array.isArray(A) : Y === "object" ? A && typeof A == "object" && !Array.isArray(A) : typeof A == Y || q && typeof A > "u");
  }
  M27.validSchemaType = LXY;
  function RXY({
    schema: A,
    opts: K,
    self: q,
    errSchemaPath: Y
  }, z, w) {
    if (Array.isArray(z.keyword) ? !z.keyword.includes(w) : z.keyword !== w) throw Error("ajv implementation error");
    let H = z.dependencies;
    if (H === null || H === void 0 ? void 0 : H.some(J => !Object.prototype.hasOwnProperty.call(A, J))) throw Error(`parent schema must have dependencies of ${w}: ${H.join(",")}`);
    if (z.validateSchema) {
      if (!z.validateSchema(A[w])) {
        let O = `keyword "${w}" value is invalid at path "${Y}": ` + q.errorsText(z.validateSchema.errors);
        if (K.validateSchema === "log") q.logger.error(O);else throw Error(O);
      }
    }
  }
  M27.validateKeywordUsage = RXY;
});

// Register to shared state
__$.V27 = V27;
