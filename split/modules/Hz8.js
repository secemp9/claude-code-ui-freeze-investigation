// Module: Hz8
// Dependencies: wz8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Hz8 = v((fEz, FwA) => {
  var $J = global.process,
    u1A = function (A) {
      return A && typeof A === "object" && typeof A.removeListener === "function" && typeof A.emit === "function" && typeof A.reallyExit === "function" && typeof A.listeners === "function" && typeof A.kill === "function" && typeof A.pid === "number" && typeof A.on === "function";
    };
  if (!u1A($J)) FwA.exports = function () {
    return function () {};
  };else {
    if (pb1 = CA("assert"), B1A = __$.wz8(), db1 = /^win/i.test($J.platform), gwA = CA("events"), typeof gwA !== "function") gwA = gwA.EventEmitter;
    if ($J.__signal_exit_emitter__) a$ = $J.__signal_exit_emitter__;else a$ = $J.__signal_exit_emitter__ = new gwA(), a$.count = 0, a$.emitted = {};
    if (!a$.infinite) a$.setMaxListeners(1 / 0), a$.infinite = !0;
    FwA.exports = function (A, K) {
      if (!u1A(global.process)) return function () {};
      if (pb1.equal(typeof A, "function", "a callback must be provided for exit handler"), m1A === !1) zaA();
      var q = "exit";
      if (K && K.alwaysLast) q = "afterexit";
      var Y = function () {
        if (a$.removeListener(q, A), a$.listeners("exit").length === 0 && a$.listeners("afterexit").length === 0) mTA();
      };
      return a$.on(q, A), Y;
    }, mTA = function () {
      if (!m1A || !u1A(global.process)) return;
      m1A = !1, B1A.forEach(function (K) {
        try {
          $J.removeListener(K, gTA[K]);
        } catch (q) {}
      }), $J.emit = FTA, $J.reallyExit = waA, a$.count -= 1;
    }, FwA.exports.unload = mTA, Yi = function (K, q, Y) {
      if (a$.emitted[K]) return;
      a$.emitted[K] = !0, a$.emit(K, q, Y);
    }, gTA = {}, B1A.forEach(function (A) {
      gTA[A] = function () {
        if (!u1A(global.process)) return;
        var q = $J.listeners(A);
        if (q.length === a$.count) {
          if (mTA(), Yi("exit", null, A), Yi("afterexit", null, A), db1 && A === "SIGHUP") A = "SIGINT";
          $J.kill($J.pid, A);
        }
      };
    }), FwA.exports.signals = function () {
      return B1A;
    }, m1A = !1, zaA = function () {
      if (m1A || !u1A(global.process)) return;
      m1A = !0, a$.count += 1, B1A = B1A.filter(function (K) {
        try {
          return $J.on(K, gTA[K]), !0;
        } catch (q) {
          return !1;
        }
      }), $J.emit = lb1, $J.reallyExit = cb1;
    }, FwA.exports.load = zaA, waA = $J.reallyExit, cb1 = function (K) {
      if (!u1A(global.process)) return;
      $J.exitCode = K || 0, Yi("exit", $J.exitCode, null), Yi("afterexit", $J.exitCode, null), waA.call($J, $J.exitCode);
    }, FTA = $J.emit, lb1 = function (K, q) {
      if (K === "exit" && u1A(global.process)) {
        if (q !== void 0) $J.exitCode = q;
        var Y = FTA.apply(this, arguments);
        return Yi("exit", $J.exitCode, null), Yi("afterexit", $J.exitCode, null), Y;
      } else return FTA.apply(this, arguments);
    };
  }
  var pb1, B1A, db1, gwA, a$, mTA, Yi, gTA, m1A, zaA, waA, cb1, FTA, lb1;
});

// Register to shared state
__$.Hz8 = Hz8;
