// Module: yC
// Dependencies: B3, hY, Hp

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yC = v(Z27 => {
  Object.defineProperty(Z27, "__esModule", {
    value: !0
  });
  Z27.validateUnion = Z27.validateArray = Z27.usePattern = Z27.callValidateCode = Z27.schemaProperties = Z27.allSchemaProperties = Z27.noPropertyInData = Z27.propertyInData = Z27.isOwnProperty = Z27.hasPropFunc = Z27.reportMissingProp = Z27.checkMissingProp = Z27.checkReportMissingProp = void 0;
  var dH = __$.B3(),
    CZ6 = __$.hY(),
    _a = __$.Hp(),
    t0Y = __$.hY();
  function e0Y(A, K) {
    let {
      gen: q,
      data: Y,
      it: z
    } = A;
    q.if(RZ6(q, Y, K, z.opts.ownProperties), () => {
      A.setParams({
        missingProperty: dH._`${K}`
      }, !0), A.error();
    });
  }
  Z27.checkReportMissingProp = e0Y;
  function AXY({
    gen: A,
    data: K,
    it: {
      opts: q
    }
  }, Y, z) {
    return (0, dH.or)(...Y.map(w => (0, dH.and)(RZ6(A, K, w, q.ownProperties), dH._`${z} = ${w}`)));
  }
  Z27.checkMissingProp = AXY;
  function KXY(A, K) {
    A.setParams({
      missingProperty: K
    }, !0), A.error();
  }
  Z27.reportMissingProp = KXY;
  function _27(A) {
    return A.scopeValue("func", {
      ref: Object.prototype.hasOwnProperty,
      code: dH._`Object.prototype.hasOwnProperty`
    });
  }
  Z27.hasPropFunc = _27;
  function LZ6(A, K, q) {
    return dH._`${_27(A)}.call(${K}, ${q})`;
  }
  Z27.isOwnProperty = LZ6;
  function qXY(A, K, q, Y) {
    let z = dH._`${K}${(0, dH.getProperty)(q)} !== undefined`;
    return Y ? dH._`${z} && ${LZ6(A, K, q)}` : z;
  }
  Z27.propertyInData = qXY;
  function RZ6(A, K, q, Y) {
    let z = dH._`${K}${(0, dH.getProperty)(q)} === undefined`;
    return Y ? (0, dH.or)(z, (0, dH.not)(LZ6(A, K, q))) : z;
  }
  Z27.noPropertyInData = RZ6;
  function G27(A) {
    return A ? Object.keys(A).filter(K => K !== "__proto__") : [];
  }
  Z27.allSchemaProperties = G27;
  function YXY(A, K) {
    return G27(K).filter(q => !(0, CZ6.alwaysValidSchema)(A, K[q]));
  }
  Z27.schemaProperties = YXY;
  function zXY({
    schemaCode: A,
    data: K,
    it: {
      gen: q,
      topSchemaRef: Y,
      schemaPath: z,
      errorPath: w
    },
    it: H
  }, J, O, X) {
    let $ = X ? dH._`${A}, ${K}, ${Y}${z}` : K,
      _ = [[_a.default.instancePath, (0, dH.strConcat)(_a.default.instancePath, w)], [_a.default.parentData, H.parentData], [_a.default.parentDataProperty, H.parentDataProperty], [_a.default.rootData, _a.default.rootData]];
    if (H.opts.dynamicRef) _.push([_a.default.dynamicAnchors, _a.default.dynamicAnchors]);
    let G = dH._`${$}, ${q.object(..._)}`;
    return O !== dH.nil ? dH._`${J}.call(${O}, ${G})` : dH._`${J}(${G})`;
  }
  Z27.callValidateCode = zXY;
  var wXY = dH._`new RegExp`;
  function HXY({
    gen: A,
    it: {
      opts: K
    }
  }, q) {
    let Y = K.unicodeRegExp ? "u" : "",
      {
        regExp: z
      } = K.code,
      w = z(q, Y);
    return A.scopeValue("pattern", {
      key: w.toString(),
      ref: w,
      code: dH._`${z.code === "new RegExp" ? wXY : (0, t0Y.useFunc)(A, z)}(${q}, ${Y})`
    });
  }
  Z27.usePattern = HXY;
  function JXY(A) {
    let {
        gen: K,
        data: q,
        keyword: Y,
        it: z
      } = A,
      w = K.name("valid");
    if (z.allErrors) {
      let J = K.let("valid", !0);
      return H(() => K.assign(J, !1)), J;
    }
    return K.var(w, !0), H(() => K.break()), w;
    function H(J) {
      let O = K.const("len", dH._`${q}.length`);
      K.forRange("i", 0, O, X => {
        A.subschema({
          keyword: Y,
          dataProp: X,
          dataPropType: CZ6.Type.Num
        }, w), K.if((0, dH.not)(w), J);
      });
    }
  }
  Z27.validateArray = JXY;
  function OXY(A) {
    let {
      gen: K,
      schema: q,
      keyword: Y,
      it: z
    } = A;
    if (!Array.isArray(q)) throw Error("ajv implementation error");
    if (q.some(O => (0, CZ6.alwaysValidSchema)(z, O)) && !z.opts.unevaluated) return;
    let H = K.let("valid", !1),
      J = K.name("_valid");
    K.block(() => q.forEach((O, X) => {
      let $ = A.subschema({
        keyword: Y,
        schemaProp: X,
        compositeRule: !0
      }, J);
      if (K.assign(H, dH._`${H} || ${J}`), !A.mergeValidEvaluated($, J)) K.if((0, dH.not)(H));
    })), A.result(H, () => A.reset(), () => A.error(!0));
  }
  Z27.validateUnion = OXY;
});

// Register to shared state
__$.yC = yC;
