// Module: mD1
// Dependencies: eE6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mD1 = v(mp7 => {
  Object.defineProperty(mp7, "__esModule", {
    value: !0
  });
  mp7.makeClientConstructor = Bp7;
  mp7.loadPackageDefinition = Q52;
  var tgA = __$.eE6(),
    m52 = {
      unary: tgA.Client.prototype.makeUnaryRequest,
      server_stream: tgA.Client.prototype.makeServerStreamRequest,
      client_stream: tgA.Client.prototype.makeClientStreamRequest,
      bidi: tgA.Client.prototype.makeBidiStreamRequest
    };
  function Kk6(A) {
    return ["__proto__", "prototype", "constructor"].includes(A);
  }
  function Bp7(A, K, q) {
    if (!q) q = {};
    class Y extends tgA.Client {}
    return Object.keys(A).forEach(z => {
      if (Kk6(z)) return;
      let w = A[z],
        H;
      if (typeof z === "string" && z.charAt(0) === "$") throw Error("Method names cannot start with $");
      if (w.requestStream) {
        if (w.responseStream) H = "bidi";else H = "client_stream";
      } else if (w.responseStream) H = "server_stream";else H = "unary";
      let {
          requestSerialize: J,
          responseDeserialize: O
        } = w,
        X = g52(m52[H], w.path, J, O);
      if (Y.prototype[z] = X, Object.assign(Y.prototype[z], w), w.originalName && !Kk6(w.originalName)) Y.prototype[w.originalName] = Y.prototype[z];
    }), Y.service = A, Y.serviceName = K, Y;
  }
  function g52(A, K, q, Y) {
    return function (...z) {
      return A.call(this, K, q, Y, ...z);
    };
  }
  function F52(A) {
    return "format" in A;
  }
  function Q52(A) {
    let K = {};
    for (let q in A) if (Object.prototype.hasOwnProperty.call(A, q)) {
      let Y = A[q],
        z = q.split(".");
      if (z.some(J => Kk6(J))) continue;
      let w = z[z.length - 1],
        H = K;
      for (let J of z.slice(0, -1)) {
        if (!H[J]) H[J] = {};
        H = H[J];
      }
      if (F52(Y)) H[w] = Y;else H[w] = Bp7(Y, w, {});
    }
    return K;
  }
});

// Register to shared state
__$.mD1 = mD1;
