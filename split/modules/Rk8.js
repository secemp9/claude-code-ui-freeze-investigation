// Module: Rk8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Rk8 = v((Lk8, im1) => {
  /*!
  localForage -- Offline Storage, Improved
  Version 1.10.0
  https://localforage.github.io/localForage
  (c) 2013-2017 Mozilla, Apache License 2.0
  */
  (function (A) {
    if (typeof Lk8 === "object" && typeof im1 < "u") im1.exports = A();else if (typeof define === "function" && define.amd) define([], A);else {
      var K;
      if (typeof window < "u") K = window;else if (typeof global < "u") K = global;else if (typeof self < "u") K = self;else K = this;
      K.localforage = A();
    }
  })(function () {
    var A, K, q;
    return function Y(z, w, H) {
      function J($, _) {
        if (!w[$]) {
          if (!z[$]) {
            var G = CA;
            if (!_ && G) return G($, !0);
            if (O) return O($, !0);
            var Z = Error("Cannot find module '" + $ + "'");
            throw Z.code = "MODULE_NOT_FOUND", Z;
          }
          var W = w[$] = {
            exports: {}
          };
          z[$][0].call(W.exports, function (D) {
            var j = z[$][1][D];
            return J(j ? j : D);
          }, W, W.exports, Y, z, w, H);
        }
        return w[$].exports;
      }
      var O = CA;
      for (var X = 0; X < H.length; X++) J(H[X]);
      return J;
    }({
      1: [function (Y, z, w) {
        (function (H) {
          var J = H.MutationObserver || H.WebKitMutationObserver,
            O;
          if (J) {
            var X = 0,
              $ = new J(D),
              _ = H.document.createTextNode("");
            $.observe(_, {
              characterData: !0
            }), O = function () {
              _.data = X = ++X % 2;
            };
          } else if (!H.setImmediate && typeof H.MessageChannel < "u") {
            var G = new H.MessageChannel();
            G.port1.onmessage = D, O = function () {
              G.port2.postMessage(0);
            };
          } else if ("document" in H && "onreadystatechange" in H.document.createElement("script")) O = function () {
            var M = H.document.createElement("script");
            M.onreadystatechange = function () {
              D(), M.onreadystatechange = null, M.parentNode.removeChild(M), M = null;
            }, H.document.documentElement.appendChild(M);
          };else O = function () {
            setTimeout(D, 0);
          };
          var Z,
            W = [];
          function D() {
            Z = !0;
            var M,
              P,
              f = W.length;
            while (f) {
              P = W, W = [], M = -1;
              while (++M < f) P[M]();
              f = W.length;
            }
            Z = !1;
          }
          z.exports = j;
          function j(M) {
            if (W.push(M) === 1 && !Z) O();
          }
        }).call(this, typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}],
      2: [function (Y, z, w) {
        var H = Y(1);
        function J() {}
        var O = {},
          X = ["REJECTED"],
          $ = ["FULFILLED"],
          _ = ["PENDING"];
        z.exports = G;
        function G(C) {
          if (typeof C !== "function") throw TypeError("resolver must be a function");
          if (this.state = _, this.queue = [], this.outcome = void 0, C !== J) j(this, C);
        }
        G.prototype.catch = function (C) {
          return this.then(null, C);
        }, G.prototype.then = function (C, R) {
          if (typeof C !== "function" && this.state === $ || typeof R !== "function" && this.state === X) return this;
          var x = new this.constructor(J);
          if (this.state !== _) {
            var y = this.state === $ ? C : R;
            W(x, y, this.outcome);
          } else this.queue.push(new Z(x, C, R));
          return x;
        };
        function Z(C, R, x) {
          if (this.promise = C, typeof R === "function") this.onFulfilled = R, this.callFulfilled = this.otherCallFulfilled;
          if (typeof x === "function") this.onRejected = x, this.callRejected = this.otherCallRejected;
        }
        Z.prototype.callFulfilled = function (C) {
          O.resolve(this.promise, C);
        }, Z.prototype.otherCallFulfilled = function (C) {
          W(this.promise, this.onFulfilled, C);
        }, Z.prototype.callRejected = function (C) {
          O.reject(this.promise, C);
        }, Z.prototype.otherCallRejected = function (C) {
          W(this.promise, this.onRejected, C);
        };
        function W(C, R, x) {
          H(function () {
            var y;
            try {
              y = R(x);
            } catch (B) {
              return O.reject(C, B);
            }
            if (y === C) O.reject(C, TypeError("Cannot resolve promise with itself"));else O.resolve(C, y);
          });
        }
        O.resolve = function (C, R) {
          var x = M(D, R);
          if (x.status === "error") return O.reject(C, x.value);
          var y = x.value;
          if (y) j(C, y);else {
            C.state = $, C.outcome = R;
            var B = -1,
              b = C.queue.length;
            while (++B < b) C.queue[B].callFulfilled(R);
          }
          return C;
        }, O.reject = function (C, R) {
          C.state = X, C.outcome = R;
          var x = -1,
            y = C.queue.length;
          while (++x < y) C.queue[x].callRejected(R);
          return C;
        };
        function D(C) {
          var R = C && C.then;
          if (C && (typeof C === "object" || typeof C === "function") && typeof R === "function") return function () {
            R.apply(C, arguments);
          };
        }
        function j(C, R) {
          var x = !1;
          function y(Q) {
            if (x) return;
            x = !0, O.reject(C, Q);
          }
          function B(Q) {
            if (x) return;
            x = !0, O.resolve(C, Q);
          }
          function b() {
            R(B, y);
          }
          var F = M(b);
          if (F.status === "error") y(F.value);
        }
        function M(C, R) {
          var x = {};
          try {
            x.value = C(R), x.status = "success";
          } catch (y) {
            x.status = "error", x.value = y;
          }
          return x;
        }
        G.resolve = P;
        function P(C) {
          if (C instanceof this) return C;
          return O.resolve(new this(J), C);
        }
        G.reject = f;
        function f(C) {
          var R = new this(J);
          return O.reject(R, C);
        }
        G.all = N;
        function N(C) {
          var R = this;
          if (Object.prototype.toString.call(C) !== "[object Array]") return this.reject(TypeError("must be an array"));
          var x = C.length,
            y = !1;
          if (!x) return this.resolve([]);
          var B = Array(x),
            b = 0,
            F = -1,
            Q = new this(J);
          while (++F < x) u(C[F], F);
          return Q;
          function u(d, r) {
            R.resolve(d).then(c, function (YA) {
              if (!y) y = !0, O.reject(Q, YA);
            });
            function c(YA) {
              if (B[r] = YA, ++b === x && !y) y = !0, O.resolve(Q, B);
            }
          }
        }
        G.race = T;
        function T(C) {
          var R = this;
          if (Object.prototype.toString.call(C) !== "[object Array]") return this.reject(TypeError("must be an array"));
          var x = C.length,
            y = !1;
          if (!x) return this.resolve([]);
          var B = -1,
            b = new this(J);
          while (++B < x) F(C[B]);
          return b;
          function F(Q) {
            R.resolve(Q).then(function (u) {
              if (!y) y = !0, O.resolve(b, u);
            }, function (u) {
              if (!y) y = !0, O.reject(b, u);
            });
          }
        }
      }, {
        "1": 1
      }],
      3: [function (Y, z, w) {
        (function (H) {
          if (typeof H.Promise !== "function") H.Promise = Y(2);
        }).call(this, typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {
        "2": 2
      }],
      4: [function (Y, z, w) {
        var H = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (q1) {
          return typeof q1;
        } : function (q1) {
          return q1 && typeof Symbol === "function" && q1.constructor === Symbol && q1 !== Symbol.prototype ? "symbol" : typeof q1;
        };
        function J(q1, NA) {
          if (!(q1 instanceof NA)) throw TypeError("Cannot call a class as a function");
        }
        function O() {
          try {
            if (typeof indexedDB < "u") return indexedDB;
            if (typeof webkitIndexedDB < "u") return webkitIndexedDB;
            if (typeof mozIndexedDB < "u") return mozIndexedDB;
            if (typeof OIndexedDB < "u") return OIndexedDB;
            if (typeof msIndexedDB < "u") return msIndexedDB;
          } catch (q1) {
            return;
          }
        }
        var X = O();
        function $() {
          try {
            if (!X || !X.open) return !1;
            var q1 = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
              NA = typeof fetch === "function" && fetch.toString().indexOf("[native code") !== -1;
            return (!q1 || NA) && typeof indexedDB < "u" && typeof IDBKeyRange < "u";
          } catch (ZA) {
            return !1;
          }
        }
        function _(q1, NA) {
          q1 = q1 || [], NA = NA || {};
          try {
            return new Blob(q1, NA);
          } catch (dA) {
            if (dA.name !== "TypeError") throw dA;
            var ZA = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder,
              gA = new ZA();
            for (var pA = 0; pA < q1.length; pA += 1) gA.append(q1[pA]);
            return gA.getBlob(NA.type);
          }
        }
        if (typeof Promise > "u") Y(3);
        var G = Promise;
        function Z(q1, NA) {
          if (NA) q1.then(function (ZA) {
            NA(null, ZA);
          }, function (ZA) {
            NA(ZA);
          });
        }
        function W(q1, NA, ZA) {
          if (typeof NA === "function") q1.then(NA);
          if (typeof ZA === "function") q1.catch(ZA);
        }
        function D(q1) {
          if (typeof q1 !== "string") console.warn(q1 + " used as a key, but it is not a string."), q1 = String(q1);
          return q1;
        }
        function j() {
          if (arguments.length && typeof arguments[arguments.length - 1] === "function") return arguments[arguments.length - 1];
        }
        var M = "local-forage-detect-blob-support",
          P = void 0,
          f = {},
          N = Object.prototype.toString,
          T = "readonly",
          C = "readwrite";
        function R(q1) {
          var NA = q1.length,
            ZA = new ArrayBuffer(NA),
            gA = new Uint8Array(ZA);
          for (var pA = 0; pA < NA; pA++) gA[pA] = q1.charCodeAt(pA);
          return ZA;
        }
        function x(q1) {
          return new G(function (NA) {
            var ZA = q1.transaction(M, C),
              gA = _([""]);
            ZA.objectStore(M).put(gA, "key"), ZA.onabort = function (pA) {
              pA.preventDefault(), pA.stopPropagation(), NA(!1);
            }, ZA.oncomplete = function () {
              var pA = navigator.userAgent.match(/Chrome\/(\d+)/),
                dA = navigator.userAgent.match(/Edge\//);
              NA(dA || !pA || parseInt(pA[1], 10) >= 43);
            };
          }).catch(function () {
            return !1;
          });
        }
        function y(q1) {
          if (typeof P === "boolean") return G.resolve(P);
          return x(q1).then(function (NA) {
            return P = NA, P;
          });
        }
        function B(q1) {
          var NA = f[q1.name],
            ZA = {};
          if (ZA.promise = new G(function (gA, pA) {
            ZA.resolve = gA, ZA.reject = pA;
          }), NA.deferredOperations.push(ZA), !NA.dbReady) NA.dbReady = ZA.promise;else NA.dbReady = NA.dbReady.then(function () {
            return ZA.promise;
          });
        }
        function b(q1) {
          var NA = f[q1.name],
            ZA = NA.deferredOperations.pop();
          if (ZA) return ZA.resolve(), ZA.promise;
        }
        function F(q1, NA) {
          var ZA = f[q1.name],
            gA = ZA.deferredOperations.pop();
          if (gA) return gA.reject(NA), gA.promise;
        }
        function Q(q1, NA) {
          return new G(function (ZA, gA) {
            if (f[q1.name] = f[q1.name] || a(), q1.db) if (NA) B(q1), q1.db.close();else return ZA(q1.db);
            var pA = [q1.name];
            if (NA) pA.push(q1.version);
            var dA = X.open.apply(X, pA);
            if (NA) dA.onupgradeneeded = function (G1) {
              var R1 = dA.result;
              try {
                if (R1.createObjectStore(q1.storeName), G1.oldVersion <= 1) R1.createObjectStore(M);
              } catch (u1) {
                if (u1.name === "ConstraintError") console.warn('The database "' + q1.name + '" has been upgraded from version ' + G1.oldVersion + " to version " + G1.newVersion + ', but the storage "' + q1.storeName + '" already exists.');else throw u1;
              }
            };
            dA.onerror = function (G1) {
              G1.preventDefault(), gA(dA.error);
            }, dA.onsuccess = function () {
              var G1 = dA.result;
              G1.onversionchange = function (R1) {
                R1.target.close();
              }, ZA(G1), b(q1);
            };
          });
        }
        function u(q1) {
          return Q(q1, !1);
        }
        function d(q1) {
          return Q(q1, !0);
        }
        function r(q1, NA) {
          if (!q1.db) return !0;
          var ZA = !q1.db.objectStoreNames.contains(q1.storeName),
            gA = q1.version < q1.db.version,
            pA = q1.version > q1.db.version;
          if (gA) {
            if (q1.version !== NA) console.warn('The database "' + q1.name + `" can't be downgraded from version ` + q1.db.version + " to version " + q1.version + ".");
            q1.version = q1.db.version;
          }
          if (pA || ZA) {
            if (ZA) {
              var dA = q1.db.version + 1;
              if (dA > q1.version) q1.version = dA;
            }
            return !0;
          }
          return !1;
        }
        function c(q1) {
          return new G(function (NA, ZA) {
            var gA = new FileReader();
            gA.onerror = ZA, gA.onloadend = function (pA) {
              var dA = btoa(pA.target.result || "");
              NA({
                __local_forage_encoded_blob: !0,
                data: dA,
                type: q1.type
              });
            }, gA.readAsBinaryString(q1);
          });
        }
        function YA(q1) {
          var NA = R(atob(q1.data));
          return _([NA], {
            type: q1.type
          });
        }
        function e(q1) {
          return q1 && q1.__local_forage_encoded_blob;
        }
        function qA(q1) {
          var NA = this,
            ZA = NA._initReady().then(function () {
              var gA = f[NA._dbInfo.name];
              if (gA && gA.dbReady) return gA.dbReady;
            });
          return W(ZA, q1, q1), ZA;
        }
        function HA(q1) {
          B(q1);
          var NA = f[q1.name],
            ZA = NA.forages;
          for (var gA = 0; gA < ZA.length; gA++) {
            var pA = ZA[gA];
            if (pA._dbInfo.db) pA._dbInfo.db.close(), pA._dbInfo.db = null;
          }
          return q1.db = null, u(q1).then(function (dA) {
            if (q1.db = dA, r(q1)) return d(q1);
            return dA;
          }).then(function (dA) {
            q1.db = NA.db = dA;
            for (var G1 = 0; G1 < ZA.length; G1++) ZA[G1]._dbInfo.db = dA;
          }).catch(function (dA) {
            throw F(q1, dA), dA;
          });
        }
        function _A(q1, NA, ZA, gA) {
          if (gA === void 0) gA = 1;
          try {
            var pA = q1.db.transaction(q1.storeName, NA);
            ZA(null, pA);
          } catch (dA) {
            if (gA > 0 && (!q1.db || dA.name === "InvalidStateError" || dA.name === "NotFoundError")) return G.resolve().then(function () {
              if (!q1.db || dA.name === "NotFoundError" && !q1.db.objectStoreNames.contains(q1.storeName) && q1.version <= q1.db.version) {
                if (q1.db) q1.version = q1.db.version + 1;
                return d(q1);
              }
            }).then(function () {
              return HA(q1).then(function () {
                _A(q1, NA, ZA, gA - 1);
              });
            }).catch(ZA);
            ZA(dA);
          }
        }
        function a() {
          return {
            forages: [],
            db: null,
            dbReady: null,
            deferredOperations: []
          };
        }
        function JA(q1) {
          var NA = this,
            ZA = {
              db: null
            };
          if (q1) for (var gA in q1) ZA[gA] = q1[gA];
          var pA = f[ZA.name];
          if (!pA) pA = a(), f[ZA.name] = pA;
          if (pA.forages.push(NA), !NA._initReady) NA._initReady = NA.ready, NA.ready = qA;
          var dA = [];
          function G1() {
            return G.resolve();
          }
          for (var R1 = 0; R1 < pA.forages.length; R1++) {
            var u1 = pA.forages[R1];
            if (u1 !== NA) dA.push(u1._initReady().catch(G1));
          }
          var s1 = pA.forages.slice(0);
          return G.all(dA).then(function () {
            return ZA.db = pA.db, u(ZA);
          }).then(function (E1) {
            if (ZA.db = E1, r(ZA, NA._defaultConfig.version)) return d(ZA);
            return E1;
          }).then(function (E1) {
            ZA.db = pA.db = E1, NA._dbInfo = ZA;
            for (var Z6 = 0; Z6 < s1.length; Z6++) {
              var Z8 = s1[Z6];
              if (Z8 !== NA) Z8._dbInfo.db = ZA.db, Z8._dbInfo.version = ZA.version;
            }
          });
        }
        function jA(q1, NA) {
          var ZA = this;
          q1 = D(q1);
          var gA = new G(function (pA, dA) {
            ZA.ready().then(function () {
              _A(ZA._dbInfo, T, function (G1, R1) {
                if (G1) return dA(G1);
                try {
                  var u1 = R1.objectStore(ZA._dbInfo.storeName),
                    s1 = u1.get(q1);
                  s1.onsuccess = function () {
                    var E1 = s1.result;
                    if (E1 === void 0) E1 = null;
                    if (e(E1)) E1 = YA(E1);
                    pA(E1);
                  }, s1.onerror = function () {
                    dA(s1.error);
                  };
                } catch (E1) {
                  dA(E1);
                }
              });
            }).catch(dA);
          });
          return Z(gA, NA), gA;
        }
        function MA(q1, NA) {
          var ZA = this,
            gA = new G(function (pA, dA) {
              ZA.ready().then(function () {
                _A(ZA._dbInfo, T, function (G1, R1) {
                  if (G1) return dA(G1);
                  try {
                    var u1 = R1.objectStore(ZA._dbInfo.storeName),
                      s1 = u1.openCursor(),
                      E1 = 1;
                    s1.onsuccess = function () {
                      var Z6 = s1.result;
                      if (Z6) {
                        var Z8 = Z6.value;
                        if (e(Z8)) Z8 = YA(Z8);
                        var j4 = q1(Z8, Z6.key, E1++);
                        if (j4 !== void 0) pA(j4);else Z6.continue();
                      } else pA();
                    }, s1.onerror = function () {
                      dA(s1.error);
                    };
                  } catch (Z6) {
                    dA(Z6);
                  }
                });
              }).catch(dA);
            });
          return Z(gA, NA), gA;
        }
        function hA(q1, NA, ZA) {
          var gA = this;
          q1 = D(q1);
          var pA = new G(function (dA, G1) {
            var R1;
            gA.ready().then(function () {
              if (R1 = gA._dbInfo, N.call(NA) === "[object Blob]") return y(R1.db).then(function (u1) {
                if (u1) return NA;
                return c(NA);
              });
              return NA;
            }).then(function (u1) {
              _A(gA._dbInfo, C, function (s1, E1) {
                if (s1) return G1(s1);
                try {
                  var Z6 = E1.objectStore(gA._dbInfo.storeName);
                  if (u1 === null) u1 = void 0;
                  var Z8 = Z6.put(u1, q1);
                  E1.oncomplete = function () {
                    if (u1 === void 0) u1 = null;
                    dA(u1);
                  }, E1.onabort = E1.onerror = function () {
                    var j4 = Z8.error ? Z8.error : Z8.transaction.error;
                    G1(j4);
                  };
                } catch (j4) {
                  G1(j4);
                }
              });
            }).catch(G1);
          });
          return Z(pA, ZA), pA;
        }
        function yA(q1, NA) {
          var ZA = this;
          q1 = D(q1);
          var gA = new G(function (pA, dA) {
            ZA.ready().then(function () {
              _A(ZA._dbInfo, C, function (G1, R1) {
                if (G1) return dA(G1);
                try {
                  var u1 = R1.objectStore(ZA._dbInfo.storeName),
                    s1 = u1.delete(q1);
                  R1.oncomplete = function () {
                    pA();
                  }, R1.onerror = function () {
                    dA(s1.error);
                  }, R1.onabort = function () {
                    var E1 = s1.error ? s1.error : s1.transaction.error;
                    dA(E1);
                  };
                } catch (E1) {
                  dA(E1);
                }
              });
            }).catch(dA);
          });
          return Z(gA, NA), gA;
        }
        function AA(q1) {
          var NA = this,
            ZA = new G(function (gA, pA) {
              NA.ready().then(function () {
                _A(NA._dbInfo, C, function (dA, G1) {
                  if (dA) return pA(dA);
                  try {
                    var R1 = G1.objectStore(NA._dbInfo.storeName),
                      u1 = R1.clear();
                    G1.oncomplete = function () {
                      gA();
                    }, G1.onabort = G1.onerror = function () {
                      var s1 = u1.error ? u1.error : u1.transaction.error;
                      pA(s1);
                    };
                  } catch (s1) {
                    pA(s1);
                  }
                });
              }).catch(pA);
            });
          return Z(ZA, q1), ZA;
        }
        function wA(q1) {
          var NA = this,
            ZA = new G(function (gA, pA) {
              NA.ready().then(function () {
                _A(NA._dbInfo, T, function (dA, G1) {
                  if (dA) return pA(dA);
                  try {
                    var R1 = G1.objectStore(NA._dbInfo.storeName),
                      u1 = R1.count();
                    u1.onsuccess = function () {
                      gA(u1.result);
                    }, u1.onerror = function () {
                      pA(u1.error);
                    };
                  } catch (s1) {
                    pA(s1);
                  }
                });
              }).catch(pA);
            });
          return Z(ZA, q1), ZA;
        }
        function GA(q1, NA) {
          var ZA = this,
            gA = new G(function (pA, dA) {
              if (q1 < 0) {
                pA(null);
                return;
              }
              ZA.ready().then(function () {
                _A(ZA._dbInfo, T, function (G1, R1) {
                  if (G1) return dA(G1);
                  try {
                    var u1 = R1.objectStore(ZA._dbInfo.storeName),
                      s1 = !1,
                      E1 = u1.openKeyCursor();
                    E1.onsuccess = function () {
                      var Z6 = E1.result;
                      if (!Z6) {
                        pA(null);
                        return;
                      }
                      if (q1 === 0) pA(Z6.key);else if (!s1) s1 = !0, Z6.advance(q1);else pA(Z6.key);
                    }, E1.onerror = function () {
                      dA(E1.error);
                    };
                  } catch (Z6) {
                    dA(Z6);
                  }
                });
              }).catch(dA);
            });
          return Z(gA, NA), gA;
        }
        function OA(q1) {
          var NA = this,
            ZA = new G(function (gA, pA) {
              NA.ready().then(function () {
                _A(NA._dbInfo, T, function (dA, G1) {
                  if (dA) return pA(dA);
                  try {
                    var R1 = G1.objectStore(NA._dbInfo.storeName),
                      u1 = R1.openKeyCursor(),
                      s1 = [];
                    u1.onsuccess = function () {
                      var E1 = u1.result;
                      if (!E1) {
                        gA(s1);
                        return;
                      }
                      s1.push(E1.key), E1.continue();
                    }, u1.onerror = function () {
                      pA(u1.error);
                    };
                  } catch (E1) {
                    pA(E1);
                  }
                });
              }).catch(pA);
            });
          return Z(ZA, q1), ZA;
        }
        function t(q1, NA) {
          NA = j.apply(this, arguments);
          var ZA = this.config();
          if (q1 = typeof q1 !== "function" && q1 || {}, !q1.name) q1.name = q1.name || ZA.name, q1.storeName = q1.storeName || ZA.storeName;
          var gA = this,
            pA;
          if (!q1.name) pA = G.reject("Invalid arguments");else {
            var dA = q1.name === ZA.name && gA._dbInfo.db,
              G1 = dA ? G.resolve(gA._dbInfo.db) : u(q1).then(function (R1) {
                var u1 = f[q1.name],
                  s1 = u1.forages;
                u1.db = R1;
                for (var E1 = 0; E1 < s1.length; E1++) s1[E1]._dbInfo.db = R1;
                return R1;
              });
            if (!q1.storeName) pA = G1.then(function (R1) {
              B(q1);
              var u1 = f[q1.name],
                s1 = u1.forages;
              R1.close();
              for (var E1 = 0; E1 < s1.length; E1++) {
                var Z6 = s1[E1];
                Z6._dbInfo.db = null;
              }
              var Z8 = new G(function (j4, d4) {
                var r4 = X.deleteDatabase(q1.name);
                r4.onerror = function () {
                  var U7 = r4.result;
                  if (U7) U7.close();
                  d4(r4.error);
                }, r4.onblocked = function () {
                  console.warn('dropInstance blocked for database "' + q1.name + '" until all open connections are closed');
                }, r4.onsuccess = function () {
                  var U7 = r4.result;
                  if (U7) U7.close();
                  j4(U7);
                };
              });
              return Z8.then(function (j4) {
                u1.db = j4;
                for (var d4 = 0; d4 < s1.length; d4++) {
                  var r4 = s1[d4];
                  b(r4._dbInfo);
                }
              }).catch(function (j4) {
                throw (F(q1, j4) || G.resolve()).catch(function () {}), j4;
              });
            });else pA = G1.then(function (R1) {
              if (!R1.objectStoreNames.contains(q1.storeName)) return;
              var u1 = R1.version + 1;
              B(q1);
              var s1 = f[q1.name],
                E1 = s1.forages;
              R1.close();
              for (var Z6 = 0; Z6 < E1.length; Z6++) {
                var Z8 = E1[Z6];
                Z8._dbInfo.db = null, Z8._dbInfo.version = u1;
              }
              var j4 = new G(function (d4, r4) {
                var U7 = X.open(q1.name, u1);
                U7.onerror = function (Fq) {
                  var z2 = U7.result;
                  z2.close(), r4(Fq);
                }, U7.onupgradeneeded = function () {
                  var Fq = U7.result;
                  Fq.deleteObjectStore(q1.storeName);
                }, U7.onsuccess = function () {
                  var Fq = U7.result;
                  Fq.close(), d4(Fq);
                };
              });
              return j4.then(function (d4) {
                s1.db = d4;
                for (var r4 = 0; r4 < E1.length; r4++) {
                  var U7 = E1[r4];
                  U7._dbInfo.db = d4, b(U7._dbInfo);
                }
              }).catch(function (d4) {
                throw (F(q1, d4) || G.resolve()).catch(function () {}), d4;
              });
            });
          }
          return Z(pA, NA), pA;
        }
        var XA = {
          _driver: "asyncStorage",
          _initStorage: JA,
          _support: $(),
          iterate: MA,
          getItem: jA,
          setItem: hA,
          removeItem: yA,
          clear: AA,
          length: wA,
          key: GA,
          keys: OA,
          dropInstance: t
        };
        function VA() {
          return typeof openDatabase === "function";
        }
        var vA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          RA = "~~local_forage_type~",
          fA = /^~~local_forage_type~([^~]+)~/,
          LA = "__lfsc__:",
          SA = LA.length,
          xA = "arbf",
          iA = "blob",
          lA = "si08",
          v1 = "ui08",
          I1 = "uic8",
          Q1 = "si16",
          B1 = "si32",
          C6 = "ur16",
          w1 = "ui32",
          $1 = "fl32",
          N1 = "fl64",
          A6 = SA + xA.length,
          c1 = Object.prototype.toString;
        function w6(q1) {
          var NA = q1.length * 0.75,
            ZA = q1.length,
            gA,
            pA = 0,
            dA,
            G1,
            R1,
            u1;
          if (q1[q1.length - 1] === "=") {
            if (NA--, q1[q1.length - 2] === "=") NA--;
          }
          var s1 = new ArrayBuffer(NA),
            E1 = new Uint8Array(s1);
          for (gA = 0; gA < ZA; gA += 4) dA = vA.indexOf(q1[gA]), G1 = vA.indexOf(q1[gA + 1]), R1 = vA.indexOf(q1[gA + 2]), u1 = vA.indexOf(q1[gA + 3]), E1[pA++] = dA << 2 | G1 >> 4, E1[pA++] = (G1 & 15) << 4 | R1 >> 2, E1[pA++] = (R1 & 3) << 6 | u1 & 63;
          return s1;
        }
        function DA(q1) {
          var NA = new Uint8Array(q1),
            ZA = "",
            gA;
          for (gA = 0; gA < NA.length; gA += 3) ZA += vA[NA[gA] >> 2], ZA += vA[(NA[gA] & 3) << 4 | NA[gA + 1] >> 4], ZA += vA[(NA[gA + 1] & 15) << 2 | NA[gA + 2] >> 6], ZA += vA[NA[gA + 2] & 63];
          if (NA.length % 3 === 2) ZA = ZA.substring(0, ZA.length - 1) + "=";else if (NA.length % 3 === 1) ZA = ZA.substring(0, ZA.length - 2) + "==";
          return ZA;
        }
        function EA(q1, NA) {
          var ZA = "";
          if (q1) ZA = c1.call(q1);
          if (q1 && (ZA === "[object ArrayBuffer]" || q1.buffer && c1.call(q1.buffer) === "[object ArrayBuffer]")) {
            var gA,
              pA = LA;
            if (q1 instanceof ArrayBuffer) gA = q1, pA += xA;else if (gA = q1.buffer, ZA === "[object Int8Array]") pA += lA;else if (ZA === "[object Uint8Array]") pA += v1;else if (ZA === "[object Uint8ClampedArray]") pA += I1;else if (ZA === "[object Int16Array]") pA += Q1;else if (ZA === "[object Uint16Array]") pA += C6;else if (ZA === "[object Int32Array]") pA += B1;else if (ZA === "[object Uint32Array]") pA += w1;else if (ZA === "[object Float32Array]") pA += $1;else if (ZA === "[object Float64Array]") pA += N1;else NA(Error("Failed to get type for BinaryArray"));
            NA(pA + DA(gA));
          } else if (ZA === "[object Blob]") {
            var dA = new FileReader();
            dA.onload = function () {
              var G1 = RA + q1.type + "~" + DA(this.result);
              NA(LA + iA + G1);
            }, dA.readAsArrayBuffer(q1);
          } else try {
            NA(JSON.stringify(q1));
          } catch (G1) {
            console.error("Couldn't convert value into a JSON string: ", q1), NA(null, G1);
          }
        }
        function rA(q1) {
          if (q1.substring(0, SA) !== LA) return JSON.parse(q1);
          var NA = q1.substring(A6),
            ZA = q1.substring(SA, A6),
            gA;
          if (ZA === iA && fA.test(NA)) {
            var pA = NA.match(fA);
            gA = pA[1], NA = NA.substring(pA[0].length);
          }
          var dA = w6(NA);
          switch (ZA) {
            case xA:
              return dA;
            case iA:
              return _([dA], {
                type: gA
              });
            case lA:
              return new Int8Array(dA);
            case v1:
              return new Uint8Array(dA);
            case I1:
              return new Uint8ClampedArray(dA);
            case Q1:
              return new Int16Array(dA);
            case C6:
              return new Uint16Array(dA);
            case B1:
              return new Int32Array(dA);
            case w1:
              return new Uint32Array(dA);
            case $1:
              return new Float32Array(dA);
            case N1:
              return new Float64Array(dA);
            default:
              throw Error("Unkown type: " + ZA);
          }
        }
        var J1 = {
          serialize: EA,
          deserialize: rA,
          stringToBuffer: w6,
          bufferToString: DA
        };
        function aA(q1, NA, ZA, gA) {
          q1.executeSql("CREATE TABLE IF NOT EXISTS " + NA.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], ZA, gA);
        }
        function z1(q1) {
          var NA = this,
            ZA = {
              db: null
            };
          if (q1) for (var gA in q1) ZA[gA] = typeof q1[gA] !== "string" ? q1[gA].toString() : q1[gA];
          var pA = new G(function (dA, G1) {
            try {
              ZA.db = openDatabase(ZA.name, String(ZA.version), ZA.description, ZA.size);
            } catch (R1) {
              return G1(R1);
            }
            ZA.db.transaction(function (R1) {
              aA(R1, ZA, function () {
                NA._dbInfo = ZA, dA();
              }, function (u1, s1) {
                G1(s1);
              });
            }, G1);
          });
          return ZA.serializer = J1, pA;
        }
        function f1(q1, NA, ZA, gA, pA, dA) {
          q1.executeSql(ZA, gA, pA, function (G1, R1) {
            if (R1.code === R1.SYNTAX_ERR) G1.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [NA.storeName], function (u1, s1) {
              if (!s1.rows.length) aA(u1, NA, function () {
                u1.executeSql(ZA, gA, pA, dA);
              }, dA);else dA(u1, R1);
            }, dA);else dA(G1, R1);
          }, dA);
        }
        function T1(q1, NA) {
          var ZA = this;
          q1 = D(q1);
          var gA = new G(function (pA, dA) {
            ZA.ready().then(function () {
              var G1 = ZA._dbInfo;
              G1.db.transaction(function (R1) {
                f1(R1, G1, "SELECT * FROM " + G1.storeName + " WHERE key = ? LIMIT 1", [q1], function (u1, s1) {
                  var E1 = s1.rows.length ? s1.rows.item(0).value : null;
                  if (E1) E1 = G1.serializer.deserialize(E1);
                  pA(E1);
                }, function (u1, s1) {
                  dA(s1);
                });
              });
            }).catch(dA);
          });
          return Z(gA, NA), gA;
        }
        function K6(q1, NA) {
          var ZA = this,
            gA = new G(function (pA, dA) {
              ZA.ready().then(function () {
                var G1 = ZA._dbInfo;
                G1.db.transaction(function (R1) {
                  f1(R1, G1, "SELECT * FROM " + G1.storeName, [], function (u1, s1) {
                    var E1 = s1.rows,
                      Z6 = E1.length;
                    for (var Z8 = 0; Z8 < Z6; Z8++) {
                      var j4 = E1.item(Z8),
                        d4 = j4.value;
                      if (d4) d4 = G1.serializer.deserialize(d4);
                      if (d4 = q1(d4, j4.key, Z8 + 1), d4 !== void 0) {
                        pA(d4);
                        return;
                      }
                    }
                    pA();
                  }, function (u1, s1) {
                    dA(s1);
                  });
                });
              }).catch(dA);
            });
          return Z(gA, NA), gA;
        }
        function U6(q1, NA, ZA, gA) {
          var pA = this;
          q1 = D(q1);
          var dA = new G(function (G1, R1) {
            pA.ready().then(function () {
              if (NA === void 0) NA = null;
              var u1 = NA,
                s1 = pA._dbInfo;
              s1.serializer.serialize(NA, function (E1, Z6) {
                if (Z6) R1(Z6);else s1.db.transaction(function (Z8) {
                  f1(Z8, s1, "INSERT OR REPLACE INTO " + s1.storeName + " (key, value) VALUES (?, ?)", [q1, E1], function () {
                    G1(u1);
                  }, function (j4, d4) {
                    R1(d4);
                  });
                }, function (Z8) {
                  if (Z8.code === Z8.QUOTA_ERR) {
                    if (gA > 0) {
                      G1(U6.apply(pA, [q1, u1, ZA, gA - 1]));
                      return;
                    }
                    R1(Z8);
                  }
                });
              });
            }).catch(R1);
          });
          return Z(dA, ZA), dA;
        }
        function e8(q1, NA, ZA) {
          return U6.apply(this, [q1, NA, ZA, 1]);
        }
        function D8(q1, NA) {
          var ZA = this;
          q1 = D(q1);
          var gA = new G(function (pA, dA) {
            ZA.ready().then(function () {
              var G1 = ZA._dbInfo;
              G1.db.transaction(function (R1) {
                f1(R1, G1, "DELETE FROM " + G1.storeName + " WHERE key = ?", [q1], function () {
                  pA();
                }, function (u1, s1) {
                  dA(s1);
                });
              });
            }).catch(dA);
          });
          return Z(gA, NA), gA;
        }
        function Y7(q1) {
          var NA = this,
            ZA = new G(function (gA, pA) {
              NA.ready().then(function () {
                var dA = NA._dbInfo;
                dA.db.transaction(function (G1) {
                  f1(G1, dA, "DELETE FROM " + dA.storeName, [], function () {
                    gA();
                  }, function (R1, u1) {
                    pA(u1);
                  });
                });
              }).catch(pA);
            });
          return Z(ZA, q1), ZA;
        }
        function T7(q1) {
          var NA = this,
            ZA = new G(function (gA, pA) {
              NA.ready().then(function () {
                var dA = NA._dbInfo;
                dA.db.transaction(function (G1) {
                  f1(G1, dA, "SELECT COUNT(key) as c FROM " + dA.storeName, [], function (R1, u1) {
                    var s1 = u1.rows.item(0).c;
                    gA(s1);
                  }, function (R1, u1) {
                    pA(u1);
                  });
                });
              }).catch(pA);
            });
          return Z(ZA, q1), ZA;
        }
        function H4(q1, NA) {
          var ZA = this,
            gA = new G(function (pA, dA) {
              ZA.ready().then(function () {
                var G1 = ZA._dbInfo;
                G1.db.transaction(function (R1) {
                  f1(R1, G1, "SELECT key FROM " + G1.storeName + " WHERE id = ? LIMIT 1", [q1 + 1], function (u1, s1) {
                    var E1 = s1.rows.length ? s1.rows.item(0).key : null;
                    pA(E1);
                  }, function (u1, s1) {
                    dA(s1);
                  });
                });
              }).catch(dA);
            });
          return Z(gA, NA), gA;
        }
        function u7(q1) {
          var NA = this,
            ZA = new G(function (gA, pA) {
              NA.ready().then(function () {
                var dA = NA._dbInfo;
                dA.db.transaction(function (G1) {
                  f1(G1, dA, "SELECT key FROM " + dA.storeName, [], function (R1, u1) {
                    var s1 = [];
                    for (var E1 = 0; E1 < u1.rows.length; E1++) s1.push(u1.rows.item(E1).key);
                    gA(s1);
                  }, function (R1, u1) {
                    pA(u1);
                  });
                });
              }).catch(pA);
            });
          return Z(ZA, q1), ZA;
        }
        function s7(q1) {
          return new G(function (NA, ZA) {
            q1.transaction(function (gA) {
              gA.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (pA, dA) {
                var G1 = [];
                for (var R1 = 0; R1 < dA.rows.length; R1++) G1.push(dA.rows.item(R1).name);
                NA({
                  db: q1,
                  storeNames: G1
                });
              }, function (pA, dA) {
                ZA(dA);
              });
            }, function (gA) {
              ZA(gA);
            });
          });
        }
        function k5(q1, NA) {
          NA = j.apply(this, arguments);
          var ZA = this.config();
          if (q1 = typeof q1 !== "function" && q1 || {}, !q1.name) q1.name = q1.name || ZA.name, q1.storeName = q1.storeName || ZA.storeName;
          var gA = this,
            pA;
          if (!q1.name) pA = G.reject("Invalid arguments");else pA = new G(function (dA) {
            var G1;
            if (q1.name === ZA.name) G1 = gA._dbInfo.db;else G1 = openDatabase(q1.name, "", "", 0);
            if (!q1.storeName) dA(s7(G1));else dA({
              db: G1,
              storeNames: [q1.storeName]
            });
          }).then(function (dA) {
            return new G(function (G1, R1) {
              dA.db.transaction(function (u1) {
                function s1(j4) {
                  return new G(function (d4, r4) {
                    u1.executeSql("DROP TABLE IF EXISTS " + j4, [], function () {
                      d4();
                    }, function (U7, Fq) {
                      r4(Fq);
                    });
                  });
                }
                var E1 = [];
                for (var Z6 = 0, Z8 = dA.storeNames.length; Z6 < Z8; Z6++) E1.push(s1(dA.storeNames[Z6]));
                G.all(E1).then(function () {
                  G1();
                }).catch(function (j4) {
                  R1(j4);
                });
              }, function (u1) {
                R1(u1);
              });
            });
          });
          return Z(pA, NA), pA;
        }
        var iq = {
          _driver: "webSQLStorage",
          _initStorage: z1,
          _support: VA(),
          iterate: K6,
          getItem: T1,
          setItem: e8,
          removeItem: D8,
          clear: Y7,
          length: T7,
          key: H4,
          keys: u7,
          dropInstance: k5
        };
        function r8() {
          try {
            return typeof localStorage < "u" && "setItem" in localStorage && !!localStorage.setItem;
          } catch (q1) {
            return !1;
          }
        }
        function E8(q1, NA) {
          var ZA = q1.name + "/";
          if (q1.storeName !== NA.storeName) ZA += q1.storeName + "/";
          return ZA;
        }
        function X9() {
          var q1 = "_localforage_support_test";
          try {
            return localStorage.setItem(q1, !0), localStorage.removeItem(q1), !1;
          } catch (NA) {
            return !0;
          }
        }
        function I3() {
          return !X9() || localStorage.length > 0;
        }
        function Z3(q1) {
          var NA = this,
            ZA = {};
          if (q1) for (var gA in q1) ZA[gA] = q1[gA];
          if (ZA.keyPrefix = E8(q1, NA._defaultConfig), !I3()) return G.reject();
          return NA._dbInfo = ZA, ZA.serializer = J1, G.resolve();
        }
        function S3(q1) {
          var NA = this,
            ZA = NA.ready().then(function () {
              var gA = NA._dbInfo.keyPrefix;
              for (var pA = localStorage.length - 1; pA >= 0; pA--) {
                var dA = localStorage.key(pA);
                if (dA.indexOf(gA) === 0) localStorage.removeItem(dA);
              }
            });
          return Z(ZA, q1), ZA;
        }
        function dY(q1, NA) {
          var ZA = this;
          q1 = D(q1);
          var gA = ZA.ready().then(function () {
            var pA = ZA._dbInfo,
              dA = localStorage.getItem(pA.keyPrefix + q1);
            if (dA) dA = pA.serializer.deserialize(dA);
            return dA;
          });
          return Z(gA, NA), gA;
        }
        function vY(q1, NA) {
          var ZA = this,
            gA = ZA.ready().then(function () {
              var pA = ZA._dbInfo,
                dA = pA.keyPrefix,
                G1 = dA.length,
                R1 = localStorage.length,
                u1 = 1;
              for (var s1 = 0; s1 < R1; s1++) {
                var E1 = localStorage.key(s1);
                if (E1.indexOf(dA) !== 0) continue;
                var Z6 = localStorage.getItem(E1);
                if (Z6) Z6 = pA.serializer.deserialize(Z6);
                if (Z6 = q1(Z6, E1.substring(G1), u1++), Z6 !== void 0) return Z6;
              }
            });
          return Z(gA, NA), gA;
        }
        function $9(q1, NA) {
          var ZA = this,
            gA = ZA.ready().then(function () {
              var pA = ZA._dbInfo,
                dA;
              try {
                dA = localStorage.key(q1);
              } catch (G1) {
                dA = null;
              }
              if (dA) dA = dA.substring(pA.keyPrefix.length);
              return dA;
            });
          return Z(gA, NA), gA;
        }
        function EY(q1) {
          var NA = this,
            ZA = NA.ready().then(function () {
              var gA = NA._dbInfo,
                pA = localStorage.length,
                dA = [];
              for (var G1 = 0; G1 < pA; G1++) {
                var R1 = localStorage.key(G1);
                if (R1.indexOf(gA.keyPrefix) === 0) dA.push(R1.substring(gA.keyPrefix.length));
              }
              return dA;
            });
          return Z(ZA, q1), ZA;
        }
        function Yw(q1) {
          var NA = this,
            ZA = NA.keys().then(function (gA) {
              return gA.length;
            });
          return Z(ZA, q1), ZA;
        }
        function QK(q1, NA) {
          var ZA = this;
          q1 = D(q1);
          var gA = ZA.ready().then(function () {
            var pA = ZA._dbInfo;
            localStorage.removeItem(pA.keyPrefix + q1);
          });
          return Z(gA, NA), gA;
        }
        function _9(q1, NA, ZA) {
          var gA = this;
          q1 = D(q1);
          var pA = gA.ready().then(function () {
            if (NA === void 0) NA = null;
            var dA = NA;
            return new G(function (G1, R1) {
              var u1 = gA._dbInfo;
              u1.serializer.serialize(NA, function (s1, E1) {
                if (E1) R1(E1);else try {
                  localStorage.setItem(u1.keyPrefix + q1, s1), G1(dA);
                } catch (Z6) {
                  if (Z6.name === "QuotaExceededError" || Z6.name === "NS_ERROR_DOM_QUOTA_REACHED") R1(Z6);
                  R1(Z6);
                }
              });
            });
          });
          return Z(pA, ZA), pA;
        }
        function kY(q1, NA) {
          if (NA = j.apply(this, arguments), q1 = typeof q1 !== "function" && q1 || {}, !q1.name) {
            var ZA = this.config();
            q1.name = q1.name || ZA.name, q1.storeName = q1.storeName || ZA.storeName;
          }
          var gA = this,
            pA;
          if (!q1.name) pA = G.reject("Invalid arguments");else pA = new G(function (dA) {
            if (!q1.storeName) dA(q1.name + "/");else dA(E8(q1, gA._defaultConfig));
          }).then(function (dA) {
            for (var G1 = localStorage.length - 1; G1 >= 0; G1--) {
              var R1 = localStorage.key(G1);
              if (R1.indexOf(dA) === 0) localStorage.removeItem(R1);
            }
          });
          return Z(pA, NA), pA;
        }
        var gq = {
            _driver: "localStorageWrapper",
            _initStorage: Z3,
            _support: r8(),
            iterate: vY,
            getItem: dY,
            setItem: _9,
            removeItem: QK,
            clear: S3,
            length: Yw,
            key: $9,
            keys: EY,
            dropInstance: kY
          },
          T6 = function (NA, ZA) {
            return NA === ZA || typeof NA === "number" && typeof ZA === "number" && isNaN(NA) && isNaN(ZA);
          },
          W7 = function (NA, ZA) {
            var gA = NA.length,
              pA = 0;
            while (pA < gA) {
              if (T6(NA[pA], ZA)) return !0;
              pA++;
            }
            return !1;
          },
          Q8 = Array.isArray || function (q1) {
            return Object.prototype.toString.call(q1) === "[object Array]";
          },
          n4 = {},
          Xq = {},
          IK = {
            INDEXEDDB: XA,
            WEBSQL: iq,
            LOCALSTORAGE: gq
          },
          h3 = [IK.INDEXEDDB._driver, IK.WEBSQL._driver, IK.LOCALSTORAGE._driver],
          Y4 = ["dropInstance"],
          c8 = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Y4),
          z4 = {
            description: "",
            driver: h3.slice(),
            name: "localforage",
            size: 4980736,
            storeName: "keyvaluepairs",
            version: 1
          };
        function $q(q1, NA) {
          q1[NA] = function () {
            var ZA = arguments;
            return q1.ready().then(function () {
              return q1[NA].apply(q1, ZA);
            });
          };
        }
        function p3() {
          for (var q1 = 1; q1 < arguments.length; q1++) {
            var NA = arguments[q1];
            if (NA) {
              for (var ZA in NA) if (NA.hasOwnProperty(ZA)) if (Q8(NA[ZA])) arguments[0][ZA] = NA[ZA].slice();else arguments[0][ZA] = NA[ZA];
            }
          }
          return arguments[0];
        }
        var b5 = function () {
            function q1(NA) {
              J(this, q1);
              for (var ZA in IK) if (IK.hasOwnProperty(ZA)) {
                var gA = IK[ZA],
                  pA = gA._driver;
                if (this[ZA] = pA, !n4[pA]) this.defineDriver(gA);
              }
              this._defaultConfig = p3({}, z4), this._config = p3({}, this._defaultConfig, NA), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function () {});
            }
            return q1.prototype.config = function (ZA) {
              if ((typeof ZA > "u" ? "undefined" : H(ZA)) === "object") {
                if (this._ready) return Error("Can't call config() after localforage has been used.");
                for (var gA in ZA) {
                  if (gA === "storeName") ZA[gA] = ZA[gA].replace(/\W/g, "_");
                  if (gA === "version" && typeof ZA[gA] !== "number") return Error("Database version must be a number.");
                  this._config[gA] = ZA[gA];
                }
                if ("driver" in ZA && ZA.driver) return this.setDriver(this._config.driver);
                return !0;
              } else if (typeof ZA === "string") return this._config[ZA];else return this._config;
            }, q1.prototype.defineDriver = function (ZA, gA, pA) {
              var dA = new G(function (G1, R1) {
                try {
                  var u1 = ZA._driver,
                    s1 = Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                  if (!ZA._driver) {
                    R1(s1);
                    return;
                  }
                  var E1 = c8.concat("_initStorage");
                  for (var Z6 = 0, Z8 = E1.length; Z6 < Z8; Z6++) {
                    var j4 = E1[Z6],
                      d4 = !W7(Y4, j4);
                    if ((d4 || ZA[j4]) && typeof ZA[j4] !== "function") {
                      R1(s1);
                      return;
                    }
                  }
                  var r4 = function () {
                    var z2 = function (zJ) {
                      return function () {
                        var NH = Error("Method " + zJ + " is not implemented by the current driver"),
                          dw = G.reject(NH);
                        return Z(dw, arguments[arguments.length - 1]), dw;
                      };
                    };
                    for (var b3 = 0, zw = Y4.length; b3 < zw; b3++) {
                      var pw = Y4[b3];
                      if (!ZA[pw]) ZA[pw] = z2(pw);
                    }
                  };
                  r4();
                  var U7 = function (z2) {
                    if (n4[u1]) console.info("Redefining LocalForage driver: " + u1);
                    n4[u1] = ZA, Xq[u1] = z2, G1();
                  };
                  if ("_support" in ZA) {
                    if (ZA._support && typeof ZA._support === "function") ZA._support().then(U7, R1);else U7(!!ZA._support);
                  } else U7(!0);
                } catch (Fq) {
                  R1(Fq);
                }
              });
              return W(dA, gA, pA), dA;
            }, q1.prototype.driver = function () {
              return this._driver || null;
            }, q1.prototype.getDriver = function (ZA, gA, pA) {
              var dA = n4[ZA] ? G.resolve(n4[ZA]) : G.reject(Error("Driver not found."));
              return W(dA, gA, pA), dA;
            }, q1.prototype.getSerializer = function (ZA) {
              var gA = G.resolve(J1);
              return W(gA, ZA), gA;
            }, q1.prototype.ready = function (ZA) {
              var gA = this,
                pA = gA._driverSet.then(function () {
                  if (gA._ready === null) gA._ready = gA._initDriver();
                  return gA._ready;
                });
              return W(pA, ZA, ZA), pA;
            }, q1.prototype.setDriver = function (ZA, gA, pA) {
              var dA = this;
              if (!Q8(ZA)) ZA = [ZA];
              var G1 = this._getSupportedDrivers(ZA);
              function R1() {
                dA._config.driver = dA.driver();
              }
              function u1(Z6) {
                return dA._extend(Z6), R1(), dA._ready = dA._initStorage(dA._config), dA._ready;
              }
              function s1(Z6) {
                return function () {
                  var Z8 = 0;
                  function j4() {
                    while (Z8 < Z6.length) {
                      var d4 = Z6[Z8];
                      return Z8++, dA._dbInfo = null, dA._ready = null, dA.getDriver(d4).then(u1).catch(j4);
                    }
                    R1();
                    var r4 = Error("No available storage method found.");
                    return dA._driverSet = G.reject(r4), dA._driverSet;
                  }
                  return j4();
                };
              }
              var E1 = this._driverSet !== null ? this._driverSet.catch(function () {
                return G.resolve();
              }) : G.resolve();
              return this._driverSet = E1.then(function () {
                var Z6 = G1[0];
                return dA._dbInfo = null, dA._ready = null, dA.getDriver(Z6).then(function (Z8) {
                  dA._driver = Z8._driver, R1(), dA._wrapLibraryMethodsWithReady(), dA._initDriver = s1(G1);
                });
              }).catch(function () {
                R1();
                var Z6 = Error("No available storage method found.");
                return dA._driverSet = G.reject(Z6), dA._driverSet;
              }), W(this._driverSet, gA, pA), this._driverSet;
            }, q1.prototype.supports = function (ZA) {
              return !!Xq[ZA];
            }, q1.prototype._extend = function (ZA) {
              p3(this, ZA);
            }, q1.prototype._getSupportedDrivers = function (ZA) {
              var gA = [];
              for (var pA = 0, dA = ZA.length; pA < dA; pA++) {
                var G1 = ZA[pA];
                if (this.supports(G1)) gA.push(G1);
              }
              return gA;
            }, q1.prototype._wrapLibraryMethodsWithReady = function () {
              for (var ZA = 0, gA = c8.length; ZA < gA; ZA++) $q(this, c8[ZA]);
            }, q1.prototype.createInstance = function (ZA) {
              return new q1(ZA);
            }, q1;
          }(),
          W3 = new b5();
        z.exports = W3;
      }, {
        "3": 3
      }]
    }, {}, [4])(4);
  });
});

// Register to shared state
__$.Rk8 = Rk8;
