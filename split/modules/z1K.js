// Module: z1K
// Dependencies: rB, UR6, iR6, eAK, lM1, q1K, DX, JQA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var z1K = v((Y1K, Ct) => {
  (function () {
    var A, K, q, Y, z, w, H, J, O;
    ({
      assign: J,
      isFunction: O
    } = __$.rB()), q = __$.UR6(), Y = __$.iR6(), z = __$.eAK(), H = __$.lM1(), w = __$.q1K(), A = __$.DX(), K = __$.JQA(), Y1K.create = function (X, $, _, G) {
      var Z, W;
      if (X == null) throw Error("Root element needs a name.");
      if (G = J({}, $, _, G), Z = new Y(G), W = Z.element(X), !G.headless) {
        if (Z.declaration(G), G.pubID != null || G.sysID != null) Z.dtd(G);
      }
      return W;
    }, Y1K.begin = function (X, $, _) {
      if (O(X)) [$, _] = [X, $], X = {};
      if ($) return new z(X, $, _);else return new Y(X);
    }, Y1K.stringWriter = function (X) {
      return new H(X);
    }, Y1K.streamWriter = function (X, $) {
      return new w(X, $);
    }, Y1K.implementation = new q(), Y1K.nodeType = A, Y1K.writerState = K;
  }).call(Y1K);
});

// Register to shared state
__$.z1K = z1K;
