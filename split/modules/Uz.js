// Module: Uz
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Uz = v((gsz, f61) => {
  var vm8, Em8, km8, Cm8, Lm8, Rm8, ym8, Im8, Sm8, hm8, bm8, xm8, um8, P61, Ki1, Bm8, mm8, gm8, sJA, Fm8, Qm8, Um8, pm8, dm8, cm8, lm8, im8, nm8, V61, rm8, om8, am8;
  (function (A) {
    var K = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) define("tslib", ["exports"], function (Y) {
      A(q(K, q(Y)));
    });else if (typeof f61 === "object" && typeof gsz === "object") A(q(K, q(gsz)));else A(q(K));
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
    } instanceof Array && function (w, H) {
      w.__proto__ = H;
    } || function (w, H) {
      for (var J in H) if (Object.prototype.hasOwnProperty.call(H, J)) w[J] = H[J];
    };
    vm8 = function (w, H) {
      if (typeof H !== "function" && H !== null) throw TypeError("Class extends value " + String(H) + " is not a constructor or null");
      K(w, H);
      function J() {
        this.constructor = w;
      }
      w.prototype = H === null ? Object.create(H) : (J.prototype = H.prototype, new J());
    }, Em8 = Object.assign || function (w) {
      for (var H, J = 1, O = arguments.length; J < O; J++) {
        H = arguments[J];
        for (var X in H) if (Object.prototype.hasOwnProperty.call(H, X)) w[X] = H[X];
      }
      return w;
    }, km8 = function (w, H) {
      var J = {};
      for (var O in w) if (Object.prototype.hasOwnProperty.call(w, O) && H.indexOf(O) < 0) J[O] = w[O];
      if (w != null && typeof Object.getOwnPropertySymbols === "function") {
        for (var X = 0, O = Object.getOwnPropertySymbols(w); X < O.length; X++) if (H.indexOf(O[X]) < 0 && Object.prototype.propertyIsEnumerable.call(w, O[X])) J[O[X]] = w[O[X]];
      }
      return J;
    }, Cm8 = function (w, H, J, O) {
      var X = arguments.length,
        $ = X < 3 ? H : O === null ? O = Object.getOwnPropertyDescriptor(H, J) : O,
        _;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") $ = Reflect.decorate(w, H, J, O);else for (var G = w.length - 1; G >= 0; G--) if (_ = w[G]) $ = (X < 3 ? _($) : X > 3 ? _(H, J, $) : _(H, J)) || $;
      return X > 3 && $ && Object.defineProperty(H, J, $), $;
    }, Lm8 = function (w, H) {
      return function (J, O) {
        H(J, O, w);
      };
    }, Rm8 = function (w, H, J, O, X, $) {
      function _(C) {
        if (C !== void 0 && typeof C !== "function") throw TypeError("Function expected");
        return C;
      }
      var G = O.kind,
        Z = G === "getter" ? "get" : G === "setter" ? "set" : "value",
        W = !H && w ? O.static ? w : w.prototype : null,
        D = H || (W ? Object.getOwnPropertyDescriptor(W, O.name) : {}),
        j,
        M = !1;
      for (var P = J.length - 1; P >= 0; P--) {
        var f = {};
        for (var N in O) f[N] = N === "access" ? {} : O[N];
        for (var N in O.access) f.access[N] = O.access[N];
        f.addInitializer = function (C) {
          if (M) throw TypeError("Cannot add initializers after decoration has completed");
          $.push(_(C || null));
        };
        var T = (0, J[P])(G === "accessor" ? {
          get: D.get,
          set: D.set
        } : D[Z], f);
        if (G === "accessor") {
          if (T === void 0) continue;
          if (T === null || typeof T !== "object") throw TypeError("Object expected");
          if (j = _(T.get)) D.get = j;
          if (j = _(T.set)) D.set = j;
          if (j = _(T.init)) X.unshift(j);
        } else if (j = _(T)) if (G === "field") X.unshift(j);else D[Z] = j;
      }
      if (W) Object.defineProperty(W, O.name, D);
      M = !0;
    }, ym8 = function (w, H, J) {
      var O = arguments.length > 2;
      for (var X = 0; X < H.length; X++) J = O ? H[X].call(w, J) : H[X].call(w);
      return O ? J : void 0;
    }, Im8 = function (w) {
      return typeof w === "symbol" ? w : "".concat(w);
    }, Sm8 = function (w, H, J) {
      if (typeof H === "symbol") H = H.description ? "[".concat(H.description, "]") : "";
      return Object.defineProperty(w, "name", {
        configurable: !0,
        value: J ? "".concat(J, " ", H) : H
      });
    }, hm8 = function (w, H) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(w, H);
    }, bm8 = function (w, H, J, O) {
      function X($) {
        return $ instanceof J ? $ : new J(function (_) {
          _($);
        });
      }
      return new (J || (J = Promise))(function ($, _) {
        function G(D) {
          try {
            W(O.next(D));
          } catch (j) {
            _(j);
          }
        }
        function Z(D) {
          try {
            W(O.throw(D));
          } catch (j) {
            _(j);
          }
        }
        function W(D) {
          D.done ? $(D.value) : X(D.value).then(G, Z);
        }
        W((O = O.apply(w, H || [])).next());
      });
    }, xm8 = function (w, H) {
      var J = {
          label: 0,
          sent: function () {
            if ($[0] & 1) throw $[1];
            return $[1];
          },
          trys: [],
          ops: []
        },
        O,
        X,
        $,
        _ = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
      return _.next = G(0), _.throw = G(1), _.return = G(2), typeof Symbol === "function" && (_[Symbol.iterator] = function () {
        return this;
      }), _;
      function G(W) {
        return function (D) {
          return Z([W, D]);
        };
      }
      function Z(W) {
        if (O) throw TypeError("Generator is already executing.");
        while (_ && (_ = 0, W[0] && (J = 0)), J) try {
          if (O = 1, X && ($ = W[0] & 2 ? X.return : W[0] ? X.throw || (($ = X.return) && $.call(X), 0) : X.next) && !($ = $.call(X, W[1])).done) return $;
          if (X = 0, $) W = [W[0] & 2, $.value];
          switch (W[0]) {
            case 0:
            case 1:
              $ = W;
              break;
            case 4:
              return J.label++, {
                value: W[1],
                done: !1
              };
            case 5:
              J.label++, X = W[1], W = [0];
              continue;
            case 7:
              W = J.ops.pop(), J.trys.pop();
              continue;
            default:
              if (($ = J.trys, !($ = $.length > 0 && $[$.length - 1])) && (W[0] === 6 || W[0] === 2)) {
                J = 0;
                continue;
              }
              if (W[0] === 3 && (!$ || W[1] > $[0] && W[1] < $[3])) {
                J.label = W[1];
                break;
              }
              if (W[0] === 6 && J.label < $[1]) {
                J.label = $[1], $ = W;
                break;
              }
              if ($ && J.label < $[2]) {
                J.label = $[2], J.ops.push(W);
                break;
              }
              if ($[2]) J.ops.pop();
              J.trys.pop();
              continue;
          }
          W = H.call(w, J);
        } catch (D) {
          W = [6, D], X = 0;
        } finally {
          O = $ = 0;
        }
        if (W[0] & 5) throw W[1];
        return {
          value: W[0] ? W[1] : void 0,
          done: !0
        };
      }
    }, um8 = function (w, H) {
      for (var J in w) if (J !== "default" && !Object.prototype.hasOwnProperty.call(H, J)) V61(H, w, J);
    }, V61 = Object.create ? function (w, H, J, O) {
      if (O === void 0) O = J;
      var X = Object.getOwnPropertyDescriptor(H, J);
      if (!X || ("get" in X ? !H.__esModule : X.writable || X.configurable)) X = {
        enumerable: !0,
        get: function () {
          return H[J];
        }
      };
      Object.defineProperty(w, O, X);
    } : function (w, H, J, O) {
      if (O === void 0) O = J;
      w[O] = H[J];
    }, P61 = function (w) {
      var H = typeof Symbol === "function" && Symbol.iterator,
        J = H && w[H],
        O = 0;
      if (J) return J.call(w);
      if (w && typeof w.length === "number") return {
        next: function () {
          if (w && O >= w.length) w = void 0;
          return {
            value: w && w[O++],
            done: !w
          };
        }
      };
      throw TypeError(H ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, Ki1 = function (w, H) {
      var J = typeof Symbol === "function" && w[Symbol.iterator];
      if (!J) return w;
      var O = J.call(w),
        X,
        $ = [],
        _;
      try {
        while ((H === void 0 || H-- > 0) && !(X = O.next()).done) $.push(X.value);
      } catch (G) {
        _ = {
          error: G
        };
      } finally {
        try {
          if (X && !X.done && (J = O.return)) J.call(O);
        } finally {
          if (_) throw _.error;
        }
      }
      return $;
    }, Bm8 = function () {
      for (var w = [], H = 0; H < arguments.length; H++) w = w.concat(Ki1(arguments[H]));
      return w;
    }, mm8 = function () {
      for (var w = 0, H = 0, J = arguments.length; H < J; H++) w += arguments[H].length;
      for (var O = Array(w), X = 0, H = 0; H < J; H++) for (var $ = arguments[H], _ = 0, G = $.length; _ < G; _++, X++) O[X] = $[_];
      return O;
    }, gm8 = function (w, H, J) {
      if (J || arguments.length === 2) {
        for (var O = 0, X = H.length, $; O < X; O++) if ($ || !(O in H)) {
          if (!$) $ = Array.prototype.slice.call(H, 0, O);
          $[O] = H[O];
        }
      }
      return w.concat($ || Array.prototype.slice.call(H));
    }, sJA = function (w) {
      return this instanceof sJA ? (this.v = w, this) : new sJA(w);
    }, Fm8 = function (w, H, J) {
      if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
      var O = J.apply(w, H || []),
        X,
        $ = [];
      return X = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), G("next"), G("throw"), G("return", _), X[Symbol.asyncIterator] = function () {
        return this;
      }, X;
      function _(P) {
        return function (f) {
          return Promise.resolve(f).then(P, j);
        };
      }
      function G(P, f) {
        if (O[P]) {
          if (X[P] = function (N) {
            return new Promise(function (T, C) {
              $.push([P, N, T, C]) > 1 || Z(P, N);
            });
          }, f) X[P] = f(X[P]);
        }
      }
      function Z(P, f) {
        try {
          W(O[P](f));
        } catch (N) {
          M($[0][3], N);
        }
      }
      function W(P) {
        P.value instanceof sJA ? Promise.resolve(P.value.v).then(D, j) : M($[0][2], P);
      }
      function D(P) {
        Z("next", P);
      }
      function j(P) {
        Z("throw", P);
      }
      function M(P, f) {
        if (P(f), $.shift(), $.length) Z($[0][0], $[0][1]);
      }
    }, Qm8 = function (w) {
      var H, J;
      return H = {}, O("next"), O("throw", function (X) {
        throw X;
      }), O("return"), H[Symbol.iterator] = function () {
        return this;
      }, H;
      function O(X, $) {
        H[X] = w[X] ? function (_) {
          return (J = !J) ? {
            value: sJA(w[X](_)),
            done: !1
          } : $ ? $(_) : _;
        } : $;
      }
    }, Um8 = function (w) {
      if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
      var H = w[Symbol.asyncIterator],
        J;
      return H ? H.call(w) : (w = typeof P61 === "function" ? P61(w) : w[Symbol.iterator](), J = {}, O("next"), O("throw"), O("return"), J[Symbol.asyncIterator] = function () {
        return this;
      }, J);
      function O($) {
        J[$] = w[$] && function (_) {
          return new Promise(function (G, Z) {
            _ = w[$](_), X(G, Z, _.done, _.value);
          });
        };
      }
      function X($, _, G, Z) {
        Promise.resolve(Z).then(function (W) {
          $({
            value: W,
            done: G
          });
        }, _);
      }
    }, pm8 = function (w, H) {
      if (Object.defineProperty) Object.defineProperty(w, "raw", {
        value: H
      });else w.raw = H;
      return w;
    };
    var q = Object.create ? function (w, H) {
        Object.defineProperty(w, "default", {
          enumerable: !0,
          value: H
        });
      } : function (w, H) {
        w.default = H;
      },
      Y = function (w) {
        return Y = Object.getOwnPropertyNames || function (H) {
          var J = [];
          for (var O in H) if (Object.prototype.hasOwnProperty.call(H, O)) J[J.length] = O;
          return J;
        }, Y(w);
      };
    dm8 = function (w) {
      if (w && w.__esModule) return w;
      var H = {};
      if (w != null) {
        for (var J = Y(w), O = 0; O < J.length; O++) if (J[O] !== "default") V61(H, w, J[O]);
      }
      return q(H, w), H;
    }, cm8 = function (w) {
      return w && w.__esModule ? w : {
        default: w
      };
    }, lm8 = function (w, H, J, O) {
      if (J === "a" && !O) throw TypeError("Private accessor was defined without a getter");
      if (typeof H === "function" ? w !== H || !O : !H.has(w)) throw TypeError("Cannot read private member from an object whose class did not declare it");
      return J === "m" ? O : J === "a" ? O.call(w) : O ? O.value : H.get(w);
    }, im8 = function (w, H, J, O, X) {
      if (O === "m") throw TypeError("Private method is not writable");
      if (O === "a" && !X) throw TypeError("Private accessor was defined without a setter");
      if (typeof H === "function" ? w !== H || !X : !H.has(w)) throw TypeError("Cannot write private member to an object whose class did not declare it");
      return O === "a" ? X.call(w, J) : X ? X.value = J : H.set(w, J), J;
    }, nm8 = function (w, H) {
      if (H === null || typeof H !== "object" && typeof H !== "function") throw TypeError("Cannot use 'in' operator on non-object");
      return typeof w === "function" ? H === w : w.has(H);
    }, rm8 = function (w, H, J) {
      if (H !== null && H !== void 0) {
        if (typeof H !== "object" && typeof H !== "function") throw TypeError("Object expected.");
        var O, X;
        if (J) {
          if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
          O = H[Symbol.asyncDispose];
        }
        if (O === void 0) {
          if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
          if (O = H[Symbol.dispose], J) X = O;
        }
        if (typeof O !== "function") throw TypeError("Object not disposable.");
        if (X) O = function () {
          try {
            X.call(this);
          } catch ($) {
            return Promise.reject($);
          }
        };
        w.stack.push({
          value: H,
          dispose: O,
          async: J
        });
      } else if (J) w.stack.push({
        async: !0
      });
      return H;
    };
    var z = typeof SuppressedError === "function" ? SuppressedError : function (w, H, J) {
      var O = Error(J);
      return O.name = "SuppressedError", O.error = w, O.suppressed = H, O;
    };
    om8 = function (w) {
      function H($) {
        w.error = w.hasError ? new z($, w.error, "An error was suppressed during disposal.") : $, w.hasError = !0;
      }
      var J,
        O = 0;
      function X() {
        while (J = w.stack.pop()) try {
          if (!J.async && O === 1) return O = 0, w.stack.push(J), Promise.resolve().then(X);
          if (J.dispose) {
            var $ = J.dispose.call(J.value);
            if (J.async) return O |= 2, Promise.resolve($).then(X, function (_) {
              return H(_), X();
            });
          } else O |= 1;
        } catch (_) {
          H(_);
        }
        if (O === 1) return w.hasError ? Promise.reject(w.error) : Promise.resolve();
        if (w.hasError) throw w.error;
      }
      return X();
    }, am8 = function (w, H) {
      if (typeof w === "string" && /^\.\.?\//.test(w)) return w.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (J, O, X, $, _) {
        return O ? H ? ".jsx" : ".js" : X && (!$ || !_) ? J : X + $ + "." + _.toLowerCase() + "js";
      });
      return w;
    }, A("__extends", vm8), A("__assign", Em8), A("__rest", km8), A("__decorate", Cm8), A("__param", Lm8), A("__esDecorate", Rm8), A("__runInitializers", ym8), A("__propKey", Im8), A("__setFunctionName", Sm8), A("__metadata", hm8), A("__awaiter", bm8), A("__generator", xm8), A("__exportStar", um8), A("__createBinding", V61), A("__values", P61), A("__read", Ki1), A("__spread", Bm8), A("__spreadArrays", mm8), A("__spreadArray", gm8), A("__await", sJA), A("__asyncGenerator", Fm8), A("__asyncDelegator", Qm8), A("__asyncValues", Um8), A("__makeTemplateObject", pm8), A("__importStar", dm8), A("__importDefault", cm8), A("__classPrivateFieldGet", lm8), A("__classPrivateFieldSet", im8), A("__classPrivateFieldIn", nm8), A("__addDisposableResource", rm8), A("__disposeResources", om8), A("__rewriteRelativeImportExtension", am8);
  });
});

// Register to shared state
__$.Uz = Uz;
