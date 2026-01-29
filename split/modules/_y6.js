// Module: _y6
// Dependencies: Uz

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _y6 = v(J6K => {
  Object.defineProperty(J6K, "__esModule", {
    value: !0
  });
  J6K.CoreLogger = void 0;
  var oM1 = __$.Uz(),
    vZ2 = function () {
      function A() {
        this._logs = [];
      }
      return A.prototype.log = function (K, q, Y) {
        var z = new Date();
        this._logs.push({
          level: K,
          message: q,
          time: z,
          extras: Y
        });
      }, Object.defineProperty(A.prototype, "logs", {
        get: function () {
          return this._logs;
        },
        enumerable: !1,
        configurable: !0
      }), A.prototype.flush = function () {
        if (this.logs.length > 1) {
          var K = this._logs.reduce(function (q, Y) {
            var z,
              w,
              H,
              J = oM1.__assign(oM1.__assign({}, Y), {
                json: JSON.stringify(Y.extras, null, " "),
                extras: Y.extras
              });
            delete J.time;
            var O = (H = (w = Y.time) === null || w === void 0 ? void 0 : w.toISOString()) !== null && H !== void 0 ? H : "";
            if (q[O]) O = "".concat(O, "-").concat(Math.random());
            return oM1.__assign(oM1.__assign({}, q), (z = {}, z[O] = J, z));
          }, {});
          if (console.table) console.table(K);else console.log(K);
        } else this.logs.forEach(function (q) {
          var {
            level: Y,
            message: z,
            extras: w
          } = q;
          if (Y === "info" || Y === "debug") console.log(z, w !== null && w !== void 0 ? w : "");else console[Y](z, w !== null && w !== void 0 ? w : "");
        });
        this._logs = [];
      }, A;
    }();
  J6K.CoreLogger = vZ2;
});

// Register to shared state
__$._y6 = _y6;
