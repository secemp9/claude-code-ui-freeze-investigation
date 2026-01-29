// Module: Sh6
// Dependencies: P0

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Sh6 = v((gtH, U3K) => {
  var Ih6 = __$.P0();
  U3K.exports = Q3K;
  function Q3K(A, K) {
    this._getString = A, this._setString = K, this._length = 0, this._lastStringValue = "", this._update();
  }
  Object.defineProperties(Q3K.prototype, {
    length: {
      get: function () {
        return this._length;
      }
    },
    item: {
      value: function (A) {
        var K = xMA(this);
        if (A < 0 || A >= K.length) return null;
        return K[A];
      }
    },
    contains: {
      value: function (A) {
        A = String(A);
        var K = xMA(this);
        return K.indexOf(A) > -1;
      }
    },
    add: {
      value: function () {
        var A = xMA(this);
        for (var K = 0, q = arguments.length; K < q; K++) {
          var Y = VUA(arguments[K]);
          if (A.indexOf(Y) < 0) A.push(Y);
        }
        this._update(A);
      }
    },
    remove: {
      value: function () {
        var A = xMA(this);
        for (var K = 0, q = arguments.length; K < q; K++) {
          var Y = VUA(arguments[K]),
            z = A.indexOf(Y);
          if (z > -1) A.splice(z, 1);
        }
        this._update(A);
      }
    },
    toggle: {
      value: function (K, q) {
        if (K = VUA(K), this.contains(K)) {
          if (q === void 0 || q === !1) return this.remove(K), !1;
          return !0;
        } else {
          if (q === void 0 || q === !0) return this.add(K), !0;
          return !1;
        }
      }
    },
    replace: {
      value: function (K, q) {
        if (String(q) === "") Ih6.SyntaxError();
        K = VUA(K), q = VUA(q);
        var Y = xMA(this),
          z = Y.indexOf(K);
        if (z < 0) return !1;
        var w = Y.indexOf(q);
        if (w < 0) Y[z] = q;else if (z < w) Y[z] = q, Y.splice(w, 1);else Y.splice(z, 1);
        return this._update(Y), !0;
      }
    },
    toString: {
      value: function () {
        return this._getString();
      }
    },
    value: {
      get: function () {
        return this._getString();
      },
      set: function (A) {
        this._setString(A), this._update();
      }
    },
    _update: {
      value: function (A) {
        if (A) F3K(this, A), this._setString(A.join(" ").trim());else F3K(this, xMA(this));
        this._lastStringValue = this._getString();
      }
    }
  });
  function F3K(A, K) {
    var q = A._length,
      Y;
    A._length = K.length;
    for (Y = 0; Y < K.length; Y++) A[Y] = K[Y];
    for (; Y < q; Y++) A[Y] = void 0;
  }
  function VUA(A) {
    if (A = String(A), A === "") Ih6.SyntaxError();
    if (/[ \t\r\n\f]/.test(A)) Ih6.InvalidCharacterError();
    return A;
  }
  function bN2(A) {
    var K = A._length,
      q = Array(K);
    for (var Y = 0; Y < K; Y++) q[Y] = A[Y];
    return q;
  }
  function xMA(A) {
    var K = A._getString();
    if (K === A._lastStringValue) return bN2(A);
    var q = K.replace(/(^[ \t\r\n\f]+)|([ \t\r\n\f]+$)/g, "");
    if (q === "") return [];else {
      var Y = Object.create(null);
      return q.split(/[ \t\r\n\f]+/g).filter(function (z) {
        var w = "$" + z;
        if (Y[w]) return !1;
        return Y[w] = !0, !0;
      });
    }
  }
});

// Register to shared state
__$.Sh6 = Sh6;
