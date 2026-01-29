// Module: Xb6
// Dependencies: yh6, BV1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Xb6 = v((HeH, qYK) => {
  var AYK = __$.yh6(),
    PT2 = __$.BV1().isApiWritable;
  qYK.exports = function (A, K, q, Y) {
    var z = A.ctor;
    if (z) {
      var w = A.props || {};
      if (A.attributes) for (var H in A.attributes) {
        var J = A.attributes[H];
        if (typeof J !== "object" || Array.isArray(J)) J = {
          type: J
        };
        if (!J.name) J.name = H.toLowerCase();
        w[H] = AYK.property(J);
      }
      if (w.constructor = {
        value: z,
        writable: PT2
      }, z.prototype = Object.create((A.superclass || K).prototype, w), A.events) fT2(z, A.events);
      q[A.name] = z;
    } else z = K;
    return (A.tags || A.tag && [A.tag] || []).forEach(function (O) {
      Y[O] = z;
    }), z;
  };
  function KYK(A, K, q, Y) {
    this.body = A, this.document = K, this.form = q, this.element = Y;
  }
  KYK.prototype.build = function () {
    return () => {};
  };
  function VT2(A, K, q, Y) {
    var z = A.ownerDocument || Object.create(null),
      w = A.form || Object.create(null);
    A[K] = new KYK(Y, z, w, A).build();
  }
  function fT2(A, K) {
    var q = A.prototype;
    K.forEach(function (Y) {
      Object.defineProperty(q, "on" + Y, {
        get: function () {
          return this._getEventHandler(Y);
        },
        set: function (z) {
          this._setEventHandler(Y, z);
        }
      }), AYK.registerChangeHandler(A, "on" + Y, VT2);
    });
  }
});

// Register to shared state
__$.Xb6 = Xb6;
