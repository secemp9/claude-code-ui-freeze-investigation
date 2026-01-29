// Module: juA
// Dependencies: hY, yZ6, C27

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var juA = v(I27 => {
  Object.defineProperty(I27, "__esModule", {
    value: !0
  });
  I27.getSchemaRefs = I27.resolveUrl = I27.normalizeId = I27._getFullPath = I27.getFullPath = I27.inlineRef = void 0;
  var gXY = __$.hY(),
    FXY = __$.yZ6(),
    QXY = __$.C27(),
    UXY = new Set(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum", "const"]);
  function pXY(A, K = !0) {
    if (typeof A == "boolean") return !0;
    if (K === !0) return !IZ6(A);
    if (!K) return !1;
    return L27(A) <= K;
  }
  I27.inlineRef = pXY;
  var dXY = new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
  function IZ6(A) {
    for (let K in A) {
      if (dXY.has(K)) return !0;
      let q = A[K];
      if (Array.isArray(q) && q.some(IZ6)) return !0;
      if (typeof q == "object" && IZ6(q)) return !0;
    }
    return !1;
  }
  function L27(A) {
    let K = 0;
    for (let q in A) {
      if (q === "$ref") return 1 / 0;
      if (K++, UXY.has(q)) continue;
      if (typeof A[q] == "object") (0, gXY.eachItem)(A[q], Y => K += L27(Y));
      if (K === 1 / 0) return 1 / 0;
    }
    return K;
  }
  function R27(A, K = "", q) {
    if (q !== !1) K = oGA(K);
    let Y = A.parse(K);
    return y27(A, Y);
  }
  I27.getFullPath = R27;
  function y27(A, K) {
    return A.serialize(K).split("#")[0] + "#";
  }
  I27._getFullPath = y27;
  var cXY = /#\/?$/;
  function oGA(A) {
    return A ? A.replace(cXY, "") : "";
  }
  I27.normalizeId = oGA;
  function lXY(A, K, q) {
    return q = oGA(q), A.resolve(K, q);
  }
  I27.resolveUrl = lXY;
  var iXY = /^[a-z_][-a-z0-9._]*$/i;
  function nXY(A, K) {
    if (typeof A == "boolean") return {};
    let {
        schemaId: q,
        uriResolver: Y
      } = this.opts,
      z = oGA(A[q] || K),
      w = {
        "": z
      },
      H = R27(Y, z, !1),
      J = {},
      O = new Set();
    return QXY(A, {
      allKeys: !0
    }, (_, G, Z, W) => {
      if (W === void 0) return;
      let D = H + G,
        j = w[W];
      if (typeof _[q] == "string") j = M.call(this, _[q]);
      P.call(this, _.$anchor), P.call(this, _.$dynamicAnchor), w[G] = j;
      function M(f) {
        let N = this.opts.uriResolver.resolve;
        if (f = oGA(j ? N(j, f) : f), O.has(f)) throw $(f);
        O.add(f);
        let T = this.refs[f];
        if (typeof T == "string") T = this.refs[T];
        if (typeof T == "object") X(_, T.schema, f);else if (f !== oGA(D)) if (f[0] === "#") X(_, J[f], f), J[f] = _;else this.refs[f] = D;
        return f;
      }
      function P(f) {
        if (typeof f == "string") {
          if (!iXY.test(f)) throw Error(`invalid anchor "${f}"`);
          M.call(this, `#${f}`);
        }
      }
    }), J;
    function X(_, G, Z) {
      if (G !== void 0 && !FXY(_, G)) throw $(Z);
    }
    function $(_) {
      return Error(`reference "${_}" resolves to more than one schema`);
    }
  }
  I27.getSchemaRefs = nXY;
});

// Register to shared state
__$.juA = juA;
