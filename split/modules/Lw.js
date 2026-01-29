// Module: Lw
// Dependencies: K9, RE6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Lw = v(zU7 => {
  var yE6, IE6, SE6, hE6;
  Object.defineProperty(zU7, "__esModule", {
    value: !0
  });
  zU7.log = zU7.setLoggerVerbosity = zU7.setLogger = zU7.getLogger = void 0;
  zU7.trace = e72;
  zU7.isTracerEnabled = YU7;
  var Yt = __$.K9(),
    d72 = CA("process"),
    c72 = __$.RE6().version,
    l72 = {
      error: (A, ...K) => {
        console.error("E " + A, ...K);
      },
      info: (A, ...K) => {
        console.error("I " + A, ...K);
      },
      debug: (A, ...K) => {
        console.error("D " + A, ...K);
      }
    },
    i5A = l72,
    tDA = Yt.LogVerbosity.ERROR,
    i72 = (IE6 = (yE6 = process.env.GRPC_NODE_VERBOSITY) !== null && yE6 !== void 0 ? yE6 : process.env.GRPC_VERBOSITY) !== null && IE6 !== void 0 ? IE6 : "";
  switch (i72.toUpperCase()) {
    case "DEBUG":
      tDA = Yt.LogVerbosity.DEBUG;
      break;
    case "INFO":
      tDA = Yt.LogVerbosity.INFO;
      break;
    case "ERROR":
      tDA = Yt.LogVerbosity.ERROR;
      break;
    case "NONE":
      tDA = Yt.LogVerbosity.NONE;
      break;
    default:
  }
  var n72 = () => {
    return i5A;
  };
  zU7.getLogger = n72;
  var r72 = A => {
    i5A = A;
  };
  zU7.setLogger = r72;
  var o72 = A => {
    tDA = A;
  };
  zU7.setLoggerVerbosity = o72;
  var a72 = (A, ...K) => {
    let q;
    if (A >= tDA) {
      switch (A) {
        case Yt.LogVerbosity.DEBUG:
          q = i5A.debug;
          break;
        case Yt.LogVerbosity.INFO:
          q = i5A.info;
          break;
        case Yt.LogVerbosity.ERROR:
          q = i5A.error;
          break;
      }
      if (!q) q = i5A.error;
      if (q) q.bind(i5A)(...K);
    }
  };
  zU7.log = a72;
  var s72 = (hE6 = (SE6 = process.env.GRPC_NODE_TRACE) !== null && SE6 !== void 0 ? SE6 : process.env.GRPC_TRACE) !== null && hE6 !== void 0 ? hE6 : "",
    bE6 = new Set(),
    qU7 = new Set();
  for (let A of s72.split(",")) if (A.startsWith("-")) qU7.add(A.substring(1));else bE6.add(A);
  var t72 = bE6.has("all");
  function e72(A, K, q) {
    if (YU7(K)) zU7.log(A, new Date().toISOString() + " | v" + c72 + " " + d72.pid + " | " + K + " | " + q);
  }
  function YU7(A) {
    return !qU7.has(A) && (t72 || bE6.has(A));
  }
});

// Register to shared state
__$.Lw = Lw;
