// Module: qj6
// Dependencies: m3, bY, VBA, uC

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qj6 = v((v4H, Kj6) => {
  var ua = __$.m3();
  __$.bY();
  __$.VBA();
  __$.uC();
  (function () {
    if (ua.prime) {
      Kj6.exports = ua.prime;
      return;
    }
    var A = Kj6.exports = ua.prime = ua.prime || {},
      K = ua.jsbn.BigInteger,
      q = [6, 4, 2, 4, 2, 4, 6, 2],
      Y = new K(null);
    Y.fromInt(30);
    var z = function (_, G) {
      return _ | G;
    };
    A.generateProbablePrime = function (_, G, Z) {
      if (typeof G === "function") Z = G, G = {};
      G = G || {};
      var W = G.algorithm || "PRIMEINC";
      if (typeof W === "string") W = {
        name: W
      };
      W.options = W.options || {};
      var D = G.prng || ua.random,
        j = {
          nextBytes: function (M) {
            var P = D.getBytesSync(M.length);
            for (var f = 0; f < M.length; ++f) M[f] = P.charCodeAt(f);
          }
        };
      if (W.name === "PRIMEINC") return w(_, j, W.options, Z);
      throw Error("Invalid prime generation algorithm: " + W.name);
    };
    function w(_, G, Z, W) {
      if ("workers" in Z) return O(_, G, Z, W);
      return H(_, G, Z, W);
    }
    function H(_, G, Z, W) {
      var D = X(_, G),
        j = 0,
        M = $(D.bitLength());
      if ("millerRabinTests" in Z) M = Z.millerRabinTests;
      var P = 10;
      if ("maxBlockTime" in Z) P = Z.maxBlockTime;
      J(D, _, G, j, M, P, W);
    }
    function J(_, G, Z, W, D, j, M) {
      var P = +new Date();
      do {
        if (_.bitLength() > G) _ = X(G, Z);
        if (_.isProbablePrime(D)) return M(null, _);
        _.dAddOffset(q[W++ % 8], 0);
      } while (j < 0 || +new Date() - P < j);
      ua.util.setImmediate(function () {
        J(_, G, Z, W, D, j, M);
      });
    }
    function O(_, G, Z, W) {
      if (typeof Worker > "u") return H(_, G, Z, W);
      var D = X(_, G),
        j = Z.workers,
        M = Z.workLoad || 100,
        P = M * 30 / 8,
        f = Z.workerScript || "forge/prime.worker.js";
      if (j === -1) return ua.util.estimateCores(function (T, C) {
        if (T) C = 2;
        j = C - 1, N();
      });
      N();
      function N() {
        j = Math.max(1, j);
        var T = [];
        for (var C = 0; C < j; ++C) T[C] = new Worker(f);
        var R = j;
        for (var C = 0; C < j; ++C) T[C].addEventListener("message", y);
        var x = !1;
        function y(B) {
          if (x) return;
          --R;
          var b = B.data;
          if (b.found) {
            for (var F = 0; F < T.length; ++F) T[F].terminate();
            return x = !0, W(null, new K(b.prime, 16));
          }
          if (D.bitLength() > _) D = X(_, G);
          var Q = D.toString(16);
          B.target.postMessage({
            hex: Q,
            workLoad: M
          }), D.dAddOffset(P, 0);
        }
      }
    }
    function X(_, G) {
      var Z = new K(_, G),
        W = _ - 1;
      if (!Z.testBit(W)) Z.bitwiseTo(K.ONE.shiftLeft(W), z, Z);
      return Z.dAddOffset(31 - Z.mod(Y).byteValue(), 0), Z;
    }
    function $(_) {
      if (_ <= 100) return 27;
      if (_ <= 150) return 18;
      if (_ <= 200) return 15;
      if (_ <= 250) return 12;
      if (_ <= 300) return 9;
      if (_ <= 350) return 8;
      if (_ <= 400) return 7;
      if (_ <= 500) return 6;
      if (_ <= 600) return 5;
      if (_ <= 800) return 4;
      if (_ <= 1250) return 3;
      return 2;
    }
  })();
});

// Register to shared state
__$.qj6 = qj6;
