// Module: eG7
// Dependencies: m3, bY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eG7 = v((F4H, tG7) => {
  var AY = __$.m3();
  __$.bY();
  tG7.exports = AY.log = AY.log || {};
  AY.log.levels = ["none", "error", "warning", "info", "debug", "verbose", "max"];
  var G$1 = {},
    Sj6 = [],
    CBA = null;
  AY.log.LEVEL_LOCKED = 2;
  AY.log.NO_LEVEL_CHECK = 4;
  AY.log.INTERPOLATE = 8;
  for (UC = 0; UC < AY.log.levels.length; ++UC) $$1 = AY.log.levels[UC], G$1[$$1] = {
    index: UC,
    name: $$1.toUpperCase()
  };
  var $$1, UC;
  AY.log.logMessage = function (A) {
    var K = G$1[A.level].index;
    for (var q = 0; q < Sj6.length; ++q) {
      var Y = Sj6[q];
      if (Y.flags & AY.log.NO_LEVEL_CHECK) Y.f(A);else {
        var z = G$1[Y.level].index;
        if (K <= z) Y.f(Y, A);
      }
    }
  };
  AY.log.prepareStandard = function (A) {
    if (!("standard" in A)) A.standard = G$1[A.level].name + " [" + A.category + "] " + A.message;
  };
  AY.log.prepareFull = function (A) {
    if (!("full" in A)) {
      var K = [A.message];
      K = K.concat([]), A.full = AY.util.format.apply(this, K);
    }
  };
  AY.log.prepareStandardFull = function (A) {
    if (!("standardFull" in A)) AY.log.prepareStandard(A), A.standardFull = A.standard;
  };
  _$1 = ["error", "warning", "info", "debug", "verbose"];
  for (UC = 0; UC < _$1.length; ++UC) (function (K) {
    AY.log[K] = function (q, Y) {
      var z = Array.prototype.slice.call(arguments).slice(2),
        w = {
          timestamp: new Date(),
          level: K,
          category: q,
          message: Y,
          arguments: z
        };
      AY.log.logMessage(w);
    };
  })(_$1[UC]);
  var _$1, UC;
  AY.log.makeLogger = function (A) {
    var K = {
      flags: 0,
      f: A
    };
    return AY.log.setLevel(K, "none"), K;
  };
  AY.log.setLevel = function (A, K) {
    var q = !1;
    if (A && !(A.flags & AY.log.LEVEL_LOCKED)) for (var Y = 0; Y < AY.log.levels.length; ++Y) {
      var z = AY.log.levels[Y];
      if (K == z) {
        A.level = K, q = !0;
        break;
      }
    }
    return q;
  };
  AY.log.lock = function (A, K) {
    if (typeof K > "u" || K) A.flags |= AY.log.LEVEL_LOCKED;else A.flags &= ~AY.log.LEVEL_LOCKED;
  };
  AY.log.addLogger = function (A) {
    Sj6.push(A);
  };
  if (typeof console < "u" && "log" in console) {
    if (console.error && console.warn && console.info && console.debug) hj6 = {
      error: console.error,
      warning: console.warn,
      info: console.info,
      debug: console.debug,
      verbose: console.debug
    }, FZA = function (A, K) {
      AY.log.prepareStandard(K);
      var q = hj6[K.level],
        Y = [K.standard];
      Y = Y.concat(K.arguments.slice()), q.apply(console, Y);
    }, SqA = AY.log.makeLogger(FZA);else FZA = function (K, q) {
      AY.log.prepareStandardFull(q), console.log(q.standardFull);
    }, SqA = AY.log.makeLogger(FZA);
    AY.log.setLevel(SqA, "debug"), AY.log.addLogger(SqA), CBA = SqA;
  } else console = {
    log: function () {}
  };
  var SqA, hj6, FZA;
  if (CBA !== null && typeof window < "u" && window.location) {
    if (gZA = new URL(window.location.href).searchParams, gZA.has("console.level")) AY.log.setLevel(CBA, gZA.get("console.level").slice(-1)[0]);
    if (gZA.has("console.lock")) {
      if (bj6 = gZA.get("console.lock").slice(-1)[0], bj6 == "true") AY.log.lock(CBA);
    }
  }
  var gZA, bj6;
  AY.log.consoleLogger = CBA;
});

// Register to shared state
__$.eG7 = eG7;
