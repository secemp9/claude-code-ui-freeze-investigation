// Module: pkA
// Dependencies: S9, $c1, k4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pkA = k(() => {
  (function (A) {
    A.assertEqual = z => {};
    function K(z) {}
    A.assertIs = K;
    function q(z) {
      throw Error();
    }
    A.assertNever = q, A.arrayToEnum = z => {
      let w = {};
      for (let H of z) w[H] = H;
      return w;
    }, A.getValidEnumValues = z => {
      let w = A.objectKeys(z).filter(J => typeof z[z[J]] !== "number"),
        H = {};
      for (let J of w) H[J] = z[J];
      return A.objectValues(H);
    }, A.objectValues = z => {
      return A.objectKeys(z).map(function (w) {
        return z[w];
      });
    }, A.objectKeys = typeof Object.keys === "function" ? z => Object.keys(z) : z => {
      let w = [];
      for (let H in z) if (Object.prototype.hasOwnProperty.call(z, H)) w.push(H);
      return w;
    }, A.find = (z, w) => {
      for (let H of z) if (w(H)) return H;
      return;
    }, A.isInteger = typeof Number.isInteger === "function" ? z => Number.isInteger(z) : z => typeof z === "number" && Number.isFinite(z) && Math.floor(z) === z;
    function Y(z, w = " | ") {
      return z.map(H => typeof H === "string" ? `'${H}'` : H).join(w);
    }
    A.joinValues = Y, A.jsonStringifyReplacer = (z, w) => {
      if (typeof w === "bigint") return w.toString();
      return w;
    };
  })(__$.S9 || (__$.S9 = {}));
  (function (A) {
    A.mergeShapes = (K, q) => {
      return {
        ...K,
        ...q
      };
    };
  })(__$.$c1 || (__$.$c1 = {}));
  __$.k4 = __$.S9.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
});

// Register to shared state
__$.pkA = pkA;
