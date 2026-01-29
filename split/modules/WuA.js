// Module: WuA
// Dependencies: B3, hY, Hp

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var WuA = v(cY7 => {
  Object.defineProperty(cY7, "__esModule", {
    value: !0
  });
  cY7.extendErrors = cY7.resetErrorsCount = cY7.reportExtraError = cY7.reportError = cY7.keyword$DataError = cY7.keywordError = void 0;
  var DY = __$.B3(),
    J01 = __$.hY(),
    gM = __$.Hp();
  cY7.keywordError = {
    message: ({
      keyword: A
    }) => DY.str`must pass "${A}" keyword validation`
  };
  cY7.keyword$DataError = {
    message: ({
      keyword: A,
      schemaType: K
    }) => K ? DY.str`"${A}" keyword must be ${K} ($data)` : DY.str`"${A}" keyword is invalid ($data)`
  };
  function J0Y(A, K = cY7.keywordError, q, Y) {
    let {
        it: z
      } = A,
      {
        gen: w,
        compositeRule: H,
        allErrors: J
      } = z,
      O = dY7(A, K, q);
    if (Y !== null && Y !== void 0 ? Y : H || J) UY7(w, O);else pY7(z, DY._`[${O}]`);
  }
  cY7.reportError = J0Y;
  function O0Y(A, K = cY7.keywordError, q) {
    let {
        it: Y
      } = A,
      {
        gen: z,
        compositeRule: w,
        allErrors: H
      } = Y,
      J = dY7(A, K, q);
    if (UY7(z, J), !(w || H)) pY7(Y, gM.default.vErrors);
  }
  cY7.reportExtraError = O0Y;
  function X0Y(A, K) {
    A.assign(gM.default.errors, K), A.if(DY._`${gM.default.vErrors} !== null`, () => A.if(K, () => A.assign(DY._`${gM.default.vErrors}.length`, K), () => A.assign(gM.default.vErrors, null)));
  }
  cY7.resetErrorsCount = X0Y;
  function $0Y({
    gen: A,
    keyword: K,
    schemaValue: q,
    data: Y,
    errsCount: z,
    it: w
  }) {
    if (z === void 0) throw Error("ajv implementation error");
    let H = A.name("err");
    A.forRange("i", z, gM.default.errors, J => {
      if (A.const(H, DY._`${gM.default.vErrors}[${J}]`), A.if(DY._`${H}.instancePath === undefined`, () => A.assign(DY._`${H}.instancePath`, (0, DY.strConcat)(gM.default.instancePath, w.errorPath))), A.assign(DY._`${H}.schemaPath`, DY.str`${w.errSchemaPath}/${K}`), w.opts.verbose) A.assign(DY._`${H}.schema`, q), A.assign(DY._`${H}.data`, Y);
    });
  }
  cY7.extendErrors = $0Y;
  function UY7(A, K) {
    let q = A.const("err", K);
    A.if(DY._`${gM.default.vErrors} === null`, () => A.assign(gM.default.vErrors, DY._`[${q}]`), DY._`${gM.default.vErrors}.push(${q})`), A.code(DY._`${gM.default.errors}++`);
  }
  function pY7(A, K) {
    let {
      gen: q,
      validateName: Y,
      schemaEnv: z
    } = A;
    if (z.$async) q.throw(DY._`new ${A.ValidationError}(${K})`);else q.assign(DY._`${Y}.errors`, K), q.return(!1);
  }
  var OqA = {
    keyword: new DY.Name("keyword"),
    schemaPath: new DY.Name("schemaPath"),
    params: new DY.Name("params"),
    propertyName: new DY.Name("propertyName"),
    message: new DY.Name("message"),
    schema: new DY.Name("schema"),
    parentSchema: new DY.Name("parentSchema")
  };
  function dY7(A, K, q) {
    let {
      createErrors: Y
    } = A.it;
    if (Y === !1) return DY._`{}`;
    return _0Y(A, K, q);
  }
  function _0Y(A, K, q = {}) {
    let {
        gen: Y,
        it: z
      } = A,
      w = [G0Y(z, q), Z0Y(A, q)];
    return W0Y(A, K, w), Y.object(...w);
  }
  function G0Y({
    errorPath: A
  }, {
    instancePath: K
  }) {
    let q = K ? DY.str`${A}${(0, J01.getErrorPath)(K, J01.Type.Str)}` : A;
    return [gM.default.instancePath, (0, DY.strConcat)(gM.default.instancePath, q)];
  }
  function Z0Y({
    keyword: A,
    it: {
      errSchemaPath: K
    }
  }, {
    schemaPath: q,
    parentSchema: Y
  }) {
    let z = Y ? K : DY.str`${K}/${A}`;
    if (q) z = DY.str`${z}${(0, J01.getErrorPath)(q, J01.Type.Str)}`;
    return [OqA.schemaPath, z];
  }
  function W0Y(A, {
    params: K,
    message: q
  }, Y) {
    let {
        keyword: z,
        data: w,
        schemaValue: H,
        it: J
      } = A,
      {
        opts: O,
        propertyName: X,
        topSchemaRef: $,
        schemaPath: _
      } = J;
    if (Y.push([OqA.keyword, z], [OqA.params, typeof K == "function" ? K(A) : K || DY._`{}`]), O.messages) Y.push([OqA.message, typeof q == "function" ? q(A) : q]);
    if (O.verbose) Y.push([OqA.schema, H], [OqA.parentSchema, DY._`${$}${_}`], [gM.default.data, w]);
    if (X) Y.push([OqA.propertyName, X]);
  }
});

// Register to shared state
__$.WuA = WuA;
