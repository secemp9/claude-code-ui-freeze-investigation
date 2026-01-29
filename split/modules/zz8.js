// Module: zz8
// Dependencies: qz8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zz8 = v(uWq => {
  var xWq = __$.qz8();
  uWq.operation = function (A) {
    var K = uWq.timeouts(A);
    return new xWq(K, {
      forever: A && A.forever,
      unref: A && A.unref,
      maxRetryTime: A && A.maxRetryTime
    });
  };
  uWq.timeouts = function (A) {
    if (A instanceof Array) return [].concat(A);
    var K = {
      retries: 10,
      factor: 2,
      minTimeout: 1000,
      maxTimeout: 1 / 0,
      randomize: !1
    };
    for (var q in A) K[q] = A[q];
    if (K.minTimeout > K.maxTimeout) throw Error("minTimeout is greater than maxTimeout");
    var Y = [];
    for (var z = 0; z < K.retries; z++) Y.push(this.createTimeout(z, K));
    if (A && A.forever && !Y.length) Y.push(this.createTimeout(z, K));
    return Y.sort(function (w, H) {
      return w - H;
    }), Y;
  };
  uWq.createTimeout = function (A, K) {
    var q = K.randomize ? Math.random() + 1 : 1,
      Y = Math.round(q * K.minTimeout * Math.pow(K.factor, A));
    return Y = Math.min(Y, K.maxTimeout), Y;
  };
  uWq.wrap = function (A, K, q) {
    if (K instanceof Array) q = K, K = null;
    if (!q) {
      q = [];
      for (var Y in A) if (typeof A[Y] === "function") q.push(Y);
    }
    for (var z = 0; z < q.length; z++) {
      var w = q[z],
        H = A[w];
      A[w] = function (O) {
        var X = uWq.operation(K),
          $ = Array.prototype.slice.call(arguments, 1),
          _ = $.pop();
        $.push(function (G) {
          if (X.retry(G)) return;
          if (G) arguments[0] = X.mainError();
          _.apply(this, arguments);
        }), X.attempt(function () {
          O.apply(A, $);
        });
      }.bind(A, H), A[w].options = K;
    }
  };
});

// Register to shared state
__$.zz8 = zz8;
