// Module: S6K
// Dependencies: Uz, P6K, Xy6, aM1, sjA, E6K, Dy6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var S6K = v(y6K => {
  Object.defineProperty(y6K, "__esModule", {
    value: !0
  });
  y6K.CoreEventQueue = void 0;
  var TW = __$.Uz(),
    QZ2 = __$.P6K(),
    UZ2 = __$.Xy6(),
    jy6 = __$.aM1(),
    pZ2 = __$.sjA(),
    dZ2 = __$.E6K(),
    sM1 = __$.Dy6(),
    cZ2 = function (A) {
      TW.__extends(K, A);
      function K(q) {
        var Y = A.call(this) || this;
        return Y.criticalTasks = (0, dZ2.createTaskGroup)(), Y.plugins = [], Y.failedInitializations = [], Y.flushing = !1, Y.queue = q, Y.queue.on(UZ2.ON_REMOVE_FROM_FUTURE, function () {
          Y.scheduleFlush(0);
        }), Y;
      }
      return K.prototype.register = function (q, Y, z) {
        return TW.__awaiter(this, void 0, void 0, function () {
          var w = this;
          return TW.__generator(this, function (H) {
            switch (H.label) {
              case 0:
                return [4, Promise.resolve(Y.load(q, z)).then(function () {
                  w.plugins.push(Y);
                }).catch(function (J) {
                  if (Y.type === "destination") {
                    w.failedInitializations.push(Y.name), console.warn(Y.name, J), q.log("warn", "Failed to load destination", {
                      plugin: Y.name,
                      error: J
                    });
                    return;
                  }
                  throw J;
                })];
              case 1:
                return H.sent(), [2];
            }
          });
        });
      }, K.prototype.deregister = function (q, Y, z) {
        return TW.__awaiter(this, void 0, void 0, function () {
          var w;
          return TW.__generator(this, function (H) {
            switch (H.label) {
              case 0:
                if (H.trys.push([0, 3,, 4]), !Y.unload) return [3, 2];
                return [4, Promise.resolve(Y.unload(q, z))];
              case 1:
                H.sent(), H.label = 2;
              case 2:
                return this.plugins = this.plugins.filter(function (J) {
                  return J.name !== Y.name;
                }), [3, 4];
              case 3:
                return w = H.sent(), q.log("warn", "Failed to unload destination", {
                  plugin: Y.name,
                  error: w
                }), [3, 4];
              case 4:
                return [2];
            }
          });
        });
      }, K.prototype.dispatch = function (q) {
        return TW.__awaiter(this, void 0, void 0, function () {
          var Y;
          return TW.__generator(this, function (z) {
            return q.log("debug", "Dispatching"), q.stats.increment("message_dispatched"), this.queue.push(q), Y = this.subscribeToDelivery(q), this.scheduleFlush(0), [2, Y];
          });
        });
      }, K.prototype.subscribeToDelivery = function (q) {
        return TW.__awaiter(this, void 0, void 0, function () {
          var Y = this;
          return TW.__generator(this, function (z) {
            return [2, new Promise(function (w) {
              var H = function (J, O) {
                if (J.isSame(q)) if (Y.off("flush", H), O) w(J);else w(J);
              };
              Y.on("flush", H);
            })];
          });
        });
      }, K.prototype.dispatchSingle = function (q) {
        return TW.__awaiter(this, void 0, void 0, function () {
          var Y = this;
          return TW.__generator(this, function (z) {
            return q.log("debug", "Dispatching"), q.stats.increment("message_dispatched"), this.queue.updateAttempts(q), q.attempts = 1, [2, this.deliver(q).catch(function (w) {
              var H = Y.enqueuRetry(w, q);
              if (!H) return q.setFailedDelivery({
                reason: w
              }), q;
              return Y.subscribeToDelivery(q);
            })];
          });
        });
      }, K.prototype.isEmpty = function () {
        return this.queue.length === 0;
      }, K.prototype.scheduleFlush = function (q) {
        var Y = this;
        if (q === void 0) q = 500;
        if (this.flushing) return;
        this.flushing = !0, setTimeout(function () {
          Y.flush().then(function () {
            setTimeout(function () {
              if (Y.flushing = !1, Y.queue.length) Y.scheduleFlush(0);
            }, 0);
          });
        }, q);
      }, K.prototype.deliver = function (q) {
        return TW.__awaiter(this, void 0, void 0, function () {
          var Y, z, w, H;
          return TW.__generator(this, function (J) {
            switch (J.label) {
              case 0:
                return [4, this.criticalTasks.done()];
              case 1:
                J.sent(), Y = Date.now(), J.label = 2;
              case 2:
                return J.trys.push([2, 4,, 5]), [4, this.flushOne(q)];
              case 3:
                return q = J.sent(), z = Date.now() - Y, this.emit("delivery_success", q), q.stats.gauge("delivered", z), q.log("debug", "Delivered", q.event), [2, q];
              case 4:
                throw w = J.sent(), H = w, q.log("error", "Failed to deliver", H), this.emit("delivery_failure", q, H), q.stats.increment("delivery_failed"), w;
              case 5:
                return [2];
            }
          });
        });
      }, K.prototype.enqueuRetry = function (q, Y) {
        var z = !(q instanceof jy6.ContextCancelation) || q.retry;
        if (!z) return !1;
        return this.queue.pushWithBackoff(Y);
      }, K.prototype.flush = function () {
        return TW.__awaiter(this, void 0, void 0, function () {
          var q, Y, z;
          return TW.__generator(this, function (w) {
            switch (w.label) {
              case 0:
                if (this.queue.length === 0) return [2, []];
                if (q = this.queue.pop(), !q) return [2, []];
                q.attempts = this.queue.getAttempts(q), w.label = 1;
              case 1:
                return w.trys.push([1, 3,, 4]), [4, this.deliver(q)];
              case 2:
                return q = w.sent(), this.emit("flush", q, !0), [3, 4];
              case 3:
                if (Y = w.sent(), z = this.enqueuRetry(Y, q), !z) q.setFailedDelivery({
                  reason: Y
                }), this.emit("flush", q, !1);
                return [2, []];
              case 4:
                return [2, [q]];
            }
          });
        });
      }, K.prototype.isReady = function () {
        return !0;
      }, K.prototype.availableExtensions = function (q) {
        var Y = this.plugins.filter(function (Z) {
            var W, D, j;
            if (Z.type !== "destination" && Z.name !== "Segment.io") return !0;
            var M = void 0;
            return (W = Z.alternativeNames) === null || W === void 0 || W.forEach(function (P) {
              if (q[P] !== void 0) M = q[P];
            }), (j = (D = q[Z.name]) !== null && D !== void 0 ? D : M) !== null && j !== void 0 ? j : (Z.name === "Segment.io" ? !0 : q.All) !== !1;
          }),
          z = (0, QZ2.groupBy)(Y, "type"),
          w = z.before,
          H = w === void 0 ? [] : w,
          J = z.enrichment,
          O = J === void 0 ? [] : J,
          X = z.destination,
          $ = X === void 0 ? [] : X,
          _ = z.after,
          G = _ === void 0 ? [] : _;
        return {
          before: H,
          enrichment: O,
          destinations: $,
          after: G
        };
      }, K.prototype.flushOne = function (q) {
        var Y, z;
        return TW.__awaiter(this, void 0, void 0, function () {
          var w, H, J, O, X, $, W, _, G, Z, W, D, j, M, P;
          return TW.__generator(this, function (f) {
            switch (f.label) {
              case 0:
                if (!this.isReady()) throw Error("Not ready");
                if (q.attempts > 1) this.emit("delivery_retry", q);
                w = this.availableExtensions((Y = q.event.integrations) !== null && Y !== void 0 ? Y : {}), H = w.before, J = w.enrichment, O = 0, X = H, f.label = 1;
              case 1:
                if (!(O < X.length)) return [3, 4];
                return $ = X[O], [4, (0, sM1.ensure)(q, $)];
              case 2:
                if (W = f.sent(), W instanceof jy6.CoreContext) q = W;
                this.emit("message_enriched", q, $), f.label = 3;
              case 3:
                return O++, [3, 1];
              case 4:
                _ = 0, G = J, f.label = 5;
              case 5:
                if (!(_ < G.length)) return [3, 8];
                return Z = G[_], [4, (0, sM1.attempt)(q, Z)];
              case 6:
                if (W = f.sent(), W instanceof jy6.CoreContext) q = W;
                this.emit("message_enriched", q, Z), f.label = 7;
              case 7:
                return _++, [3, 5];
              case 8:
                return D = this.availableExtensions((z = q.event.integrations) !== null && z !== void 0 ? z : {}), j = D.destinations, M = D.after, [4, new Promise(function (N, T) {
                  setTimeout(function () {
                    var C = j.map(function (R) {
                      return (0, sM1.attempt)(q, R);
                    });
                    Promise.all(C).then(N).catch(T);
                  }, 0);
                })];
              case 9:
                return f.sent(), q.stats.increment("message_delivered"), this.emit("message_delivered", q), P = M.map(function (N) {
                  return (0, sM1.attempt)(q, N);
                }), [4, Promise.all(P)];
              case 10:
                return f.sent(), [2, q];
            }
          });
        });
      }, K;
    }(pZ2.Emitter);
  y6K.CoreEventQueue = cZ2;
});

// Register to shared state
__$.S6K = S6K;
