// Module: zM7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zM7 = v((IzH, YM7) => {
  var qM7 = CA("child_process"),
    ej7 = qM7.spawn,
    HyY = qM7.exec;
  YM7.exports = function (A, K, q) {
    if (typeof K === "function" && q === void 0) q = K, K = void 0;
    if (A = parseInt(A), Number.isNaN(A)) if (q) return q(Error("pid must be a number"));else throw Error("pid must be a number");
    var Y = {},
      z = {};
    switch (Y[A] = [], z[A] = 1, process.platform) {
      case "win32":
        HyY("taskkill /pid " + A + " /T /F", q);
        break;
      case "darwin":
        OP6(A, Y, z, function (w) {
          return ej7("pgrep", ["-P", w]);
        }, function () {
          AM7(Y, K, q);
        });
        break;
      default:
        OP6(A, Y, z, function (w) {
          return ej7("ps", ["-o", "pid", "--no-headers", "--ppid", w]);
        }, function () {
          AM7(Y, K, q);
        });
        break;
    }
  };
  function AM7(A, K, q) {
    var Y = {};
    try {
      Object.keys(A).forEach(function (z) {
        if (A[z].forEach(function (w) {
          if (!Y[w]) KM7(w, K), Y[w] = 1;
        }), !Y[z]) KM7(z, K), Y[z] = 1;
      });
    } catch (z) {
      if (q) return q(z);else throw z;
    }
    if (q) return q();
  }
  function KM7(A, K) {
    try {
      process.kill(parseInt(A, 10), K);
    } catch (q) {
      if (q.code !== "ESRCH") throw q;
    }
  }
  function OP6(A, K, q, Y, z) {
    var w = Y(A),
      H = "";
    w.stdout.on("data", function (X) {
      var X = X.toString("ascii");
      H += X;
    });
    var J = function (O) {
      if (delete q[A], O != 0) {
        if (Object.keys(q).length == 0) z();
        return;
      }
      H.match(/\d+/g).forEach(function (X) {
        X = parseInt(X, 10), K[A].push(X), K[X] = [], q[X] = 1, OP6(X, K, q, Y, z);
      });
    };
    w.on("close", J);
  }
});

// Register to shared state
__$.zM7 = zM7;
