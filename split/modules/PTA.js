// Module: PTA
// Dependencies: xz, mN, MoA, _K, $7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var PTA = v(ozA => {
  var L4q = ozA && ozA.__extends || function () {
    var A = function (K, q) {
      return A = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (Y, z) {
        Y.__proto__ = z;
      } || function (Y, z) {
        for (var w in z) if (Object.prototype.hasOwnProperty.call(z, w)) Y[w] = z[w];
      }, A(K, q);
    };
    return function (K, q) {
      if (typeof q !== "function" && q !== null) throw TypeError("Class extends value " + String(q) + " is not a constructor or null");
      A(K, q);
      function Y() {
        this.constructor = K;
      }
      K.prototype = q === null ? Object.create(q) : (Y.prototype = q.prototype, new Y());
    };
  }();
  Object.defineProperty(ozA, "__esModule", {
    value: !0
  });
  ozA.ConnectableObservable = void 0;
  var R4q = __$.xz(),
    M88 = __$.mN(),
    y4q = __$.MoA(),
    I4q = __$._K(),
    S4q = __$.$7(),
    h4q = function (A) {
      L4q(K, A);
      function K(q, Y) {
        var z = A.call(this) || this;
        if (z.source = q, z.subjectFactory = Y, z._subject = null, z._refCount = 0, z._connection = null, S4q.hasLift(q)) z.lift = q.lift;
        return z;
      }
      return K.prototype._subscribe = function (q) {
        return this.getSubject().subscribe(q);
      }, K.prototype.getSubject = function () {
        var q = this._subject;
        if (!q || q.isStopped) this._subject = this.subjectFactory();
        return this._subject;
      }, K.prototype._teardown = function () {
        this._refCount = 0;
        var q = this._connection;
        this._subject = this._connection = null, q === null || q === void 0 || q.unsubscribe();
      }, K.prototype.connect = function () {
        var q = this,
          Y = this._connection;
        if (!Y) {
          Y = this._connection = new M88.Subscription();
          var z = this.getSubject();
          if (Y.add(this.source.subscribe(I4q.createOperatorSubscriber(z, void 0, function () {
            q._teardown(), z.complete();
          }, function (w) {
            q._teardown(), z.error(w);
          }, function () {
            return q._teardown();
          }))), Y.closed) this._connection = null, Y = M88.Subscription.EMPTY;
        }
        return Y;
      }, K.prototype.refCount = function () {
        return y4q.refCount()(this);
      }, K;
    }(R4q.Observable);
  ozA.ConnectableObservable = h4q;
});

// Register to shared state
__$.PTA = PTA;
