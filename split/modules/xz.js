// Module: xz
// Dependencies: rzA, mN, jTA, MTA, nzA, Hz, DoA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xz = v(X88 => {
  Object.defineProperty(X88, "__esModule", {
    value: !0
  });
  X88.Observable = void 0;
  var zS1 = __$.rzA(),
    $4q = __$.mN(),
    _4q = __$.jTA(),
    G4q = __$.MTA(),
    Z4q = __$.nzA(),
    YS1 = __$.Hz(),
    W4q = __$.DoA(),
    D4q = function () {
      function A(K) {
        if (K) this._subscribe = K;
      }
      return A.prototype.lift = function (K) {
        var q = new A();
        return q.source = this, q.operator = K, q;
      }, A.prototype.subscribe = function (K, q, Y) {
        var z = this,
          w = M4q(K) ? K : new zS1.SafeSubscriber(K, q, Y);
        return W4q.errorContext(function () {
          var H = z,
            J = H.operator,
            O = H.source;
          w.add(J ? J.call(w, O) : O ? z._subscribe(w) : z._trySubscribe(w));
        }), w;
      }, A.prototype._trySubscribe = function (K) {
        try {
          return this._subscribe(K);
        } catch (q) {
          K.error(q);
        }
      }, A.prototype.forEach = function (K, q) {
        var Y = this;
        return q = O88(q), new q(function (z, w) {
          var H = new zS1.SafeSubscriber({
            next: function (J) {
              try {
                K(J);
              } catch (O) {
                w(O), H.unsubscribe();
              }
            },
            error: w,
            complete: z
          });
          Y.subscribe(H);
        });
      }, A.prototype._subscribe = function (K) {
        var q;
        return (q = this.source) === null || q === void 0 ? void 0 : q.subscribe(K);
      }, A.prototype[_4q.observable] = function () {
        return this;
      }, A.prototype.pipe = function () {
        var K = [];
        for (var q = 0; q < arguments.length; q++) K[q] = arguments[q];
        return G4q.pipeFromArray(K)(this);
      }, A.prototype.toPromise = function (K) {
        var q = this;
        return K = O88(K), new K(function (Y, z) {
          var w;
          q.subscribe(function (H) {
            return w = H;
          }, function (H) {
            return z(H);
          }, function () {
            return Y(w);
          });
        });
      }, A.create = function (K) {
        return new A(K);
      }, A;
    }();
  X88.Observable = D4q;
  function O88(A) {
    var K;
    return (K = A !== null && A !== void 0 ? A : Z4q.config.Promise) !== null && K !== void 0 ? K : Promise;
  }
  function j4q(A) {
    return A && YS1.isFunction(A.next) && YS1.isFunction(A.error) && YS1.isFunction(A.complete);
  }
  function M4q(A) {
    return A && A instanceof zS1.Subscriber || j4q(A) && $4q.isSubscription(A);
  }
});

// Register to shared state
__$.xz = xz;
