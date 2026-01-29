// Module: aM1
// Dependencies: $y6, tR6, _y6, Zy6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aM1 = v(Z6K => {
  Object.defineProperty(Z6K, "__esModule", {
    value: !0
  });
  Z6K.CoreContext = Z6K.ContextCancelation = void 0;
  var LZ2 = __$.$y6(),
    RZ2 = __$.tR6(),
    yZ2 = __$._y6(),
    IZ2 = __$.Zy6(),
    G6K = function () {
      function A(K) {
        var q, Y, z;
        this.retry = (q = K.retry) !== null && q !== void 0 ? q : !0, this.type = (Y = K.type) !== null && Y !== void 0 ? Y : "plugin Error", this.reason = (z = K.reason) !== null && z !== void 0 ? z : "";
      }
      return A;
    }();
  Z6K.ContextCancelation = G6K;
  var SZ2 = function () {
    function A(K, q, Y, z) {
      if (q === void 0) q = (0, LZ2.v4)();
      if (Y === void 0) Y = new IZ2.NullStats();
      if (z === void 0) z = new yZ2.CoreLogger();
      this.attempts = 0, this.event = K, this._id = q, this.logger = z, this.stats = Y;
    }
    return A.system = function () {}, A.prototype.isSame = function (K) {
      return K.id === this.id;
    }, A.prototype.cancel = function (K) {
      if (K) throw K;
      throw new G6K({
        reason: "Context Cancel"
      });
    }, A.prototype.log = function (K, q, Y) {
      this.logger.log(K, q, Y);
    }, Object.defineProperty(A.prototype, "id", {
      get: function () {
        return this._id;
      },
      enumerable: !1,
      configurable: !0
    }), A.prototype.updateEvent = function (K, q) {
      var Y;
      if (K.split(".")[0] === "integrations") {
        var z = K.split(".")[1];
        if (((Y = this.event.integrations) === null || Y === void 0 ? void 0 : Y[z]) === !1) return this.event;
      }
      return (0, RZ2.dset)(this.event, K, q), this.event;
    }, A.prototype.failedDelivery = function () {
      return this._failedDelivery;
    }, A.prototype.setFailedDelivery = function (K) {
      this._failedDelivery = K;
    }, A.prototype.logs = function () {
      return this.logger.logs;
    }, A.prototype.flush = function () {
      this.logger.flush(), this.stats.flush();
    }, A.prototype.toJSON = function () {
      return {
        id: this._id,
        event: this.event,
        logs: this.logger.logs,
        metrics: this.stats.metrics
      };
    }, A;
  }();
  Z6K.CoreContext = SZ2;
});

// Register to shared state
__$.aM1 = aM1;
