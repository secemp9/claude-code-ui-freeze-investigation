// Module: koA
// Dependencies: hR, EoA, RS1, Hz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var koA = v(R78 => {
  Object.defineProperty(R78, "__esModule", {
    value: !0
  });
  R78.observeNotification = R78.Notification = R78.NotificationKind = void 0;
  var Lqq = __$.hR(),
    Rqq = __$.EoA(),
    yqq = __$.RS1(),
    Iqq = __$.Hz(),
    Sqq;
  (function (A) {
    A.NEXT = "N", A.ERROR = "E", A.COMPLETE = "C";
  })(Sqq = R78.NotificationKind || (R78.NotificationKind = {}));
  var hqq = function () {
    function A(K, q, Y) {
      this.kind = K, this.value = q, this.error = Y, this.hasValue = K === "N";
    }
    return A.prototype.observe = function (K) {
      return L78(this, K);
    }, A.prototype.do = function (K, q, Y) {
      var z = this,
        w = z.kind,
        H = z.value,
        J = z.error;
      return w === "N" ? K === null || K === void 0 ? void 0 : K(H) : w === "E" ? q === null || q === void 0 ? void 0 : q(J) : Y === null || Y === void 0 ? void 0 : Y();
    }, A.prototype.accept = function (K, q, Y) {
      var z;
      return Iqq.isFunction((z = K) === null || z === void 0 ? void 0 : z.next) ? this.observe(K) : this.do(K, q, Y);
    }, A.prototype.toObservable = function () {
      var K = this,
        q = K.kind,
        Y = K.value,
        z = K.error,
        w = q === "N" ? Rqq.of(Y) : q === "E" ? yqq.throwError(function () {
          return z;
        }) : q === "C" ? Lqq.EMPTY : 0;
      if (!w) throw TypeError("Unexpected notification kind " + q);
      return w;
    }, A.createNext = function (K) {
      return new A("N", K);
    }, A.createError = function (K) {
      return new A("E", void 0, K);
    }, A.createComplete = function () {
      return A.completeNotification;
    }, A.completeNotification = new A("C"), A;
  }();
  R78.Notification = hqq;
  function L78(A, K) {
    var q,
      Y,
      z,
      w = A,
      H = w.kind,
      J = w.value,
      O = w.error;
    if (typeof H !== "string") throw TypeError('Invalid notification, missing "kind"');
    H === "N" ? (q = K.next) === null || q === void 0 || q.call(K, J) : H === "E" ? (Y = K.error) === null || Y === void 0 || Y.call(K, O) : (z = K.complete) === null || z === void 0 || z.call(K);
  }
  R78.observeNotification = L78;
});

// Register to shared state
__$.koA = koA;
