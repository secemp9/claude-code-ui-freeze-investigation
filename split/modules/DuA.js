// Module: DuA
// Dependencies: NZ6, TZ6, WuA, B3, hY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DuA = v(w27 => {
  Object.defineProperty(w27, "__esModule", {
    value: !0
  });
  w27.reportTypeError = w27.checkDataTypes = w27.checkDataType = w27.coerceAndCheckDataType = w27.getJSONTypes = w27.getSchemaTypes = w27.DataType = void 0;
  var x0Y = __$.NZ6(),
    u0Y = __$.TZ6(),
    B0Y = __$.WuA(),
    E3 = __$.B3(),
    q27 = __$.hY(),
    nGA;
  (function (A) {
    A[A.Correct = 0] = "Correct", A[A.Wrong = 1] = "Wrong";
  })(nGA || (w27.DataType = nGA = {}));
  function m0Y(A) {
    let K = Y27(A.type);
    if (K.includes("null")) {
      if (A.nullable === !1) throw Error("type: null contradicts nullable: false");
    } else {
      if (!K.length && A.nullable !== void 0) throw Error('"nullable" cannot be used without "type"');
      if (A.nullable === !0) K.push("null");
    }
    return K;
  }
  w27.getSchemaTypes = m0Y;
  function Y27(A) {
    let K = Array.isArray(A) ? A : A ? [A] : [];
    if (K.every(x0Y.isJSONType)) return K;
    throw Error("type must be JSONType or JSONType[]: " + K.join(","));
  }
  w27.getJSONTypes = Y27;
  function g0Y(A, K) {
    let {
        gen: q,
        data: Y,
        opts: z
      } = A,
      w = F0Y(K, z.coerceTypes),
      H = K.length > 0 && !(w.length === 0 && K.length === 1 && (0, u0Y.schemaHasRulesForType)(A, K[0]));
    if (H) {
      let J = EZ6(K, Y, z.strictNumbers, nGA.Wrong);
      q.if(J, () => {
        if (w.length) Q0Y(A, K, w);else kZ6(A);
      });
    }
    return H;
  }
  w27.coerceAndCheckDataType = g0Y;
  var z27 = new Set(["string", "number", "integer", "boolean", "null"]);
  function F0Y(A, K) {
    return K ? A.filter(q => z27.has(q) || K === "array" && q === "array") : [];
  }
  function Q0Y(A, K, q) {
    let {
        gen: Y,
        data: z,
        opts: w
      } = A,
      H = Y.let("dataType", E3._`typeof ${z}`),
      J = Y.let("coerced", E3._`undefined`);
    if (w.coerceTypes === "array") Y.if(E3._`${H} == 'object' && Array.isArray(${z}) && ${z}.length == 1`, () => Y.assign(z, E3._`${z}[0]`).assign(H, E3._`typeof ${z}`).if(EZ6(K, z, w.strictNumbers), () => Y.assign(J, z)));
    Y.if(E3._`${J} !== undefined`);
    for (let X of q) if (z27.has(X) || X === "array" && w.coerceTypes === "array") O(X);
    Y.else(), kZ6(A), Y.endIf(), Y.if(E3._`${J} !== undefined`, () => {
      Y.assign(z, J), U0Y(A, J);
    });
    function O(X) {
      switch (X) {
        case "string":
          Y.elseIf(E3._`${H} == "number" || ${H} == "boolean"`).assign(J, E3._`"" + ${z}`).elseIf(E3._`${z} === null`).assign(J, E3._`""`);
          return;
        case "number":
          Y.elseIf(E3._`${H} == "boolean" || ${z} === null
              || (${H} == "string" && ${z} && ${z} == +${z})`).assign(J, E3._`+${z}`);
          return;
        case "integer":
          Y.elseIf(E3._`${H} === "boolean" || ${z} === null
              || (${H} === "string" && ${z} && ${z} == +${z} && !(${z} % 1))`).assign(J, E3._`+${z}`);
          return;
        case "boolean":
          Y.elseIf(E3._`${z} === "false" || ${z} === 0 || ${z} === null`).assign(J, !1).elseIf(E3._`${z} === "true" || ${z} === 1`).assign(J, !0);
          return;
        case "null":
          Y.elseIf(E3._`${z} === "" || ${z} === 0 || ${z} === false`), Y.assign(J, null);
          return;
        case "array":
          Y.elseIf(E3._`${H} === "string" || ${H} === "number"
              || ${H} === "boolean" || ${z} === null`).assign(J, E3._`[${z}]`);
      }
    }
  }
  function U0Y({
    gen: A,
    parentData: K,
    parentDataProperty: q
  }, Y) {
    A.if(E3._`${K} !== undefined`, () => A.assign(E3._`${K}[${q}]`, Y));
  }
  function vZ6(A, K, q, Y = nGA.Correct) {
    let z = Y === nGA.Correct ? E3.operators.EQ : E3.operators.NEQ,
      w;
    switch (A) {
      case "null":
        return E3._`${K} ${z} null`;
      case "array":
        w = E3._`Array.isArray(${K})`;
        break;
      case "object":
        w = E3._`${K} && typeof ${K} == "object" && !Array.isArray(${K})`;
        break;
      case "integer":
        w = H(E3._`!(${K} % 1) && !isNaN(${K})`);
        break;
      case "number":
        w = H();
        break;
      default:
        return E3._`typeof ${K} ${z} ${A}`;
    }
    return Y === nGA.Correct ? w : (0, E3.not)(w);
    function H(J = E3.nil) {
      return (0, E3.and)(E3._`typeof ${K} == "number"`, J, q ? E3._`isFinite(${K})` : E3.nil);
    }
  }
  w27.checkDataType = vZ6;
  function EZ6(A, K, q, Y) {
    if (A.length === 1) return vZ6(A[0], K, q, Y);
    let z,
      w = (0, q27.toHash)(A);
    if (w.array && w.object) {
      let H = E3._`typeof ${K} != "object"`;
      z = w.null ? H : E3._`!${K} || ${H}`, delete w.null, delete w.array, delete w.object;
    } else z = E3.nil;
    if (w.number) delete w.integer;
    for (let H in w) z = (0, E3.and)(z, vZ6(H, K, q, Y));
    return z;
  }
  w27.checkDataTypes = EZ6;
  var p0Y = {
    message: ({
      schema: A
    }) => `must be ${A}`,
    params: ({
      schema: A,
      schemaValue: K
    }) => typeof A == "string" ? E3._`{type: ${A}}` : E3._`{type: ${K}}`
  };
  function kZ6(A) {
    let K = d0Y(A);
    (0, B0Y.reportError)(K, p0Y);
  }
  w27.reportTypeError = kZ6;
  function d0Y(A) {
    let {
        gen: K,
        data: q,
        schema: Y
      } = A,
      z = (0, q27.schemaRefOrVal)(A, Y, "type");
    return {
      gen: K,
      keyword: "type",
      data: q,
      schema: Y.type,
      schemaCode: z,
      schemaValue: z,
      parentSchema: Y,
      params: {},
      it: A
    };
  }
});

// Register to shared state
__$.DuA = DuA;
