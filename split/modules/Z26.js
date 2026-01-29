// Module: Z26
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Z26 = v((NPw, w21) => {
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  var au4, su4, tu4, eu4, AB4, KB4, qB4, YB4, zB4, z21, G26, wB4, HB4, U$A, JB4, OB4, XB4, $B4, _B4, GB4, ZB4, WB4, DB4;
  (function (A) {
    var K = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) define("tslib", ["exports"], function (Y) {
      A(q(K, q(Y)));
    });else if (typeof w21 === "object" && typeof NPw === "object") A(q(K, q(NPw)));else A(q(K));
    function q(Y, z) {
      if (Y !== K) if (typeof Object.create === "function") Object.defineProperty(Y, "__esModule", {
        value: !0
      });else Y.__esModule = !0;
      return function (w, H) {
        return Y[w] = z ? z(w, H) : H;
      };
    }
  })(function (A) {
    var K = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (q, Y) {
      q.__proto__ = Y;
    } || function (q, Y) {
      for (var z in Y) if (Y.hasOwnProperty(z)) q[z] = Y[z];
    };
    au4 = function (q, Y) {
      K(q, Y);
      function z() {
        this.constructor = q;
      }
      q.prototype = Y === null ? Object.create(Y) : (z.prototype = Y.prototype, new z());
    }, su4 = Object.assign || function (q) {
      for (var Y, z = 1, w = arguments.length; z < w; z++) {
        Y = arguments[z];
        for (var H in Y) if (Object.prototype.hasOwnProperty.call(Y, H)) q[H] = Y[H];
      }
      return q;
    }, tu4 = function (q, Y) {
      var z = {};
      for (var w in q) if (Object.prototype.hasOwnProperty.call(q, w) && Y.indexOf(w) < 0) z[w] = q[w];
      if (q != null && typeof Object.getOwnPropertySymbols === "function") {
        for (var H = 0, w = Object.getOwnPropertySymbols(q); H < w.length; H++) if (Y.indexOf(w[H]) < 0 && Object.prototype.propertyIsEnumerable.call(q, w[H])) z[w[H]] = q[w[H]];
      }
      return z;
    }, eu4 = function (q, Y, z, w) {
      var H = arguments.length,
        J = H < 3 ? Y : w === null ? w = Object.getOwnPropertyDescriptor(Y, z) : w,
        O;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") J = Reflect.decorate(q, Y, z, w);else for (var X = q.length - 1; X >= 0; X--) if (O = q[X]) J = (H < 3 ? O(J) : H > 3 ? O(Y, z, J) : O(Y, z)) || J;
      return H > 3 && J && Object.defineProperty(Y, z, J), J;
    }, AB4 = function (q, Y) {
      return function (z, w) {
        Y(z, w, q);
      };
    }, KB4 = function (q, Y) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(q, Y);
    }, qB4 = function (q, Y, z, w) {
      function H(J) {
        return J instanceof z ? J : new z(function (O) {
          O(J);
        });
      }
      return new (z || (z = Promise))(function (J, O) {
        function X(G) {
          try {
            _(w.next(G));
          } catch (Z) {
            O(Z);
          }
        }
        function $(G) {
          try {
            _(w.throw(G));
          } catch (Z) {
            O(Z);
          }
        }
        function _(G) {
          G.done ? J(G.value) : H(G.value).then(X, $);
        }
        _((w = w.apply(q, Y || [])).next());
      });
    }, YB4 = function (q, Y) {
      var z = {
          label: 0,
          sent: function () {
            if (J[0] & 1) throw J[1];
            return J[1];
          },
          trys: [],
          ops: []
        },
        w,
        H,
        J,
        O;
      return O = {
        next: X(0),
        throw: X(1),
        return: X(2)
      }, typeof Symbol === "function" && (O[Symbol.iterator] = function () {
        return this;
      }), O;
      function X(_) {
        return function (G) {
          return $([_, G]);
        };
      }
      function $(_) {
        if (w) throw TypeError("Generator is already executing.");
        while (z) try {
          if (w = 1, H && (J = _[0] & 2 ? H.return : _[0] ? H.throw || ((J = H.return) && J.call(H), 0) : H.next) && !(J = J.call(H, _[1])).done) return J;
          if (H = 0, J) _ = [_[0] & 2, J.value];
          switch (_[0]) {
            case 0:
            case 1:
              J = _;
              break;
            case 4:
              return z.label++, {
                value: _[1],
                done: !1
              };
            case 5:
              z.label++, H = _[1], _ = [0];
              continue;
            case 7:
              _ = z.ops.pop(), z.trys.pop();
              continue;
            default:
              if ((J = z.trys, !(J = J.length > 0 && J[J.length - 1])) && (_[0] === 6 || _[0] === 2)) {
                z = 0;
                continue;
              }
              if (_[0] === 3 && (!J || _[1] > J[0] && _[1] < J[3])) {
                z.label = _[1];
                break;
              }
              if (_[0] === 6 && z.label < J[1]) {
                z.label = J[1], J = _;
                break;
              }
              if (J && z.label < J[2]) {
                z.label = J[2], z.ops.push(_);
                break;
              }
              if (J[2]) z.ops.pop();
              z.trys.pop();
              continue;
          }
          _ = Y.call(q, z);
        } catch (G) {
          _ = [6, G], H = 0;
        } finally {
          w = J = 0;
        }
        if (_[0] & 5) throw _[1];
        return {
          value: _[0] ? _[1] : void 0,
          done: !0
        };
      }
    }, DB4 = function (q, Y, z, w) {
      if (w === void 0) w = z;
      q[w] = Y[z];
    }, zB4 = function (q, Y) {
      for (var z in q) if (z !== "default" && !Y.hasOwnProperty(z)) Y[z] = q[z];
    }, z21 = function (q) {
      var Y = typeof Symbol === "function" && Symbol.iterator,
        z = Y && q[Y],
        w = 0;
      if (z) return z.call(q);
      if (q && typeof q.length === "number") return {
        next: function () {
          if (q && w >= q.length) q = void 0;
          return {
            value: q && q[w++],
            done: !q
          };
        }
      };
      throw TypeError(Y ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, G26 = function (q, Y) {
      var z = typeof Symbol === "function" && q[Symbol.iterator];
      if (!z) return q;
      var w = z.call(q),
        H,
        J = [],
        O;
      try {
        while ((Y === void 0 || Y-- > 0) && !(H = w.next()).done) J.push(H.value);
      } catch (X) {
        O = {
          error: X
        };
      } finally {
        try {
          if (H && !H.done && (z = w.return)) z.call(w);
        } finally {
          if (O) throw O.error;
        }
      }
      return J;
    }, wB4 = function () {
      for (var q = [], Y = 0; Y < arguments.length; Y++) q = q.concat(G26(arguments[Y]));
      return q;
    }, HB4 = function () {
      for (var q = 0, Y = 0, z = arguments.length; Y < z; Y++) q += arguments[Y].length;
      for (var w = Array(q), H = 0, Y = 0; Y < z; Y++) for (var J = arguments[Y], O = 0, X = J.length; O < X; O++, H++) w[H] = J[O];
      return w;
    }, U$A = function (q) {
      return this instanceof U$A ? (this.v = q, this) : new U$A(q);
    }, JB4 = function (q, Y, z) {
      if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
      var w = z.apply(q, Y || []),
        H,
        J = [];
      return H = {}, O("next"), O("throw"), O("return"), H[Symbol.asyncIterator] = function () {
        return this;
      }, H;
      function O(W) {
        if (w[W]) H[W] = function (D) {
          return new Promise(function (j, M) {
            J.push([W, D, j, M]) > 1 || X(W, D);
          });
        };
      }
      function X(W, D) {
        try {
          $(w[W](D));
        } catch (j) {
          Z(J[0][3], j);
        }
      }
      function $(W) {
        W.value instanceof U$A ? Promise.resolve(W.value.v).then(_, G) : Z(J[0][2], W);
      }
      function _(W) {
        X("next", W);
      }
      function G(W) {
        X("throw", W);
      }
      function Z(W, D) {
        if (W(D), J.shift(), J.length) X(J[0][0], J[0][1]);
      }
    }, OB4 = function (q) {
      var Y, z;
      return Y = {}, w("next"), w("throw", function (H) {
        throw H;
      }), w("return"), Y[Symbol.iterator] = function () {
        return this;
      }, Y;
      function w(H, J) {
        Y[H] = q[H] ? function (O) {
          return (z = !z) ? {
            value: U$A(q[H](O)),
            done: H === "return"
          } : J ? J(O) : O;
        } : J;
      }
    }, XB4 = function (q) {
      if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
      var Y = q[Symbol.asyncIterator],
        z;
      return Y ? Y.call(q) : (q = typeof z21 === "function" ? z21(q) : q[Symbol.iterator](), z = {}, w("next"), w("throw"), w("return"), z[Symbol.asyncIterator] = function () {
        return this;
      }, z);
      function w(J) {
        z[J] = q[J] && function (O) {
          return new Promise(function (X, $) {
            O = q[J](O), H(X, $, O.done, O.value);
          });
        };
      }
      function H(J, O, X, $) {
        Promise.resolve($).then(function (_) {
          J({
            value: _,
            done: X
          });
        }, O);
      }
    }, $B4 = function (q, Y) {
      if (Object.defineProperty) Object.defineProperty(q, "raw", {
        value: Y
      });else q.raw = Y;
      return q;
    }, _B4 = function (q) {
      if (q && q.__esModule) return q;
      var Y = {};
      if (q != null) {
        for (var z in q) if (Object.hasOwnProperty.call(q, z)) Y[z] = q[z];
      }
      return Y.default = q, Y;
    }, GB4 = function (q) {
      return q && q.__esModule ? q : {
        default: q
      };
    }, ZB4 = function (q, Y) {
      if (!Y.has(q)) throw TypeError("attempted to get private field on non-instance");
      return Y.get(q);
    }, WB4 = function (q, Y, z) {
      if (!Y.has(q)) throw TypeError("attempted to set private field on non-instance");
      return Y.set(q, z), z;
    }, A("__extends", au4), A("__assign", su4), A("__rest", tu4), A("__decorate", eu4), A("__param", AB4), A("__metadata", KB4), A("__awaiter", qB4), A("__generator", YB4), A("__exportStar", zB4), A("__createBinding", DB4), A("__values", z21), A("__read", G26), A("__spread", wB4), A("__spreadArrays", HB4), A("__await", U$A), A("__asyncGenerator", JB4), A("__asyncDelegator", OB4), A("__asyncValues", XB4), A("__makeTemplateObject", $B4), A("__importStar", _B4), A("__importDefault", GB4), A("__classPrivateFieldGet", ZB4), A("__classPrivateFieldSet", WB4);
  });
});

// Register to shared state
__$.Z26 = Z26;
