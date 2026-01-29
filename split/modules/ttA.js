// Module: ttA
// Dependencies: H8, sq, z6A, RE8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ttA = v((hE8, bE8) => {
  var {
    _optionalChain: DA5,
    _optionalChainDelete: yE8
  } = __$.H8();
  Object.defineProperty(hE8, "__esModule", {
    value: !0
  });
  var jA5 = CA("url"),
    XF = __$.sq(),
    stA = __$.H8(),
    pm1 = __$.z6A(),
    MA5 = __$.RE8(),
    PA5 = 50,
    VA5 = 5000;
  function dm1(A, ...K) {
    stA.logger.log(`[ANR] ${A}`, ...K);
  }
  function fA5() {
    return stA.GLOBAL_OBJ;
  }
  function NA5() {
    let A = XF.getGlobalScope().getScopeData();
    return XF.mergeScopeData(A, XF.getIsolationScope().getScopeData()), XF.mergeScopeData(A, XF.getCurrentScope().getScopeData()), A.attachments = [], A.eventProcessors = [], A;
  }
  function TA5() {
    return stA.dynamicRequire(bE8, "worker_threads");
  }
  async function vA5(A) {
    let K = {
        message: "ANR"
      },
      q = {};
    for (let Y of A.getEventProcessors()) {
      if (K === null) break;
      K = await Y(K, q);
    }
    return DA5([K, "optionalAccess", Y => Y.contexts]) || {};
  }
  var IE8 = "Anr",
    EA5 = (A = {}) => {
      if (pm1.NODE_VERSION.major < 16 || pm1.NODE_VERSION.major === 16 && pm1.NODE_VERSION.minor < 17) throw Error("ANR detection requires Node 16.17.0 or later");
      let K,
        q,
        Y = fA5();
      return Y.__SENTRY_GET_SCOPES__ = NA5, {
        name: IE8,
        setupOnce() {},
        startWorker: () => {
          if (K) return;
          if (q) K = CA5(q, A);
        },
        stopWorker: () => {
          if (K) K.then(z => {
            z(), K = void 0;
          });
        },
        setup(z) {
          q = z, setImmediate(() => this.startWorker());
        }
      };
    },
    SE8 = XF.defineIntegration(EA5),
    kA5 = XF.convertIntegrationFnToClass(IE8, SE8);
  async function CA5(A, K) {
    let q = A.getDsn();
    if (!q) return () => {};
    let Y = await vA5(A);
    yE8([Y, "access", $ => $.app, "optionalAccess", $ => delete $.app_memory]), yE8([Y, "access", $ => $.device, "optionalAccess", $ => delete $.free_memory]);
    let z = A.getOptions(),
      w = A.getSdkMetadata() || {};
    if (w.sdk) w.sdk.integrations = z.integrations.map($ => $.name);
    let H = {
      debug: stA.logger.isEnabled(),
      dsn: q,
      environment: z.environment || "production",
      release: z.release,
      dist: z.dist,
      sdkMetadata: w,
      appRootPath: K.appRootPath,
      pollInterval: K.pollInterval || PA5,
      anrThreshold: K.anrThreshold || VA5,
      captureStackTrace: !!K.captureStackTrace,
      staticTags: K.staticTags || {},
      contexts: Y
    };
    if (H.captureStackTrace) {
      let $ = CA("inspector");
      if (!$.url()) $.open(0);
    }
    let {
        Worker: J
      } = TA5(),
      O = new J(new jA5.URL(`data:application/javascript;base64,${MA5.base64WorkerScript}`), {
        workerData: H
      });
    process.on("exit", () => {
      O.terminate();
    });
    let X = setInterval(() => {
      try {
        let $ = XF.getCurrentScope().getSession(),
          _ = $ ? {
            ...$,
            toJSON: void 0
          } : void 0;
        O.postMessage({
          session: _
        });
      } catch ($) {}
    }, H.pollInterval);
    return X.unref(), O.on("message", $ => {
      if ($ === "session-ended") dm1("ANR event sent from ANR worker. Clearing session in this thread."), XF.getCurrentScope().setSession(void 0);
    }), O.once("error", $ => {
      clearInterval(X), dm1("ANR worker error", $);
    }), O.once("exit", $ => {
      clearInterval(X), dm1("ANR worker exit", $);
    }), O.unref(), () => {
      O.terminate(), clearInterval(X);
    };
  }
  hE8.Anr = kA5;
  hE8.anrIntegration = SE8;
});

// Register to shared state
__$.ttA = ttA;
