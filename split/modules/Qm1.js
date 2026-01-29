// Module: Qm1
// Dependencies: H8, sq, $v8, Em1, btA, xtA, BtA, mtA, QtA, UtA
//   ... and 6 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Qm1 = v(kE8 => {
  var {
    _optionalChain: Qeq
  } = __$.H8();
  Object.defineProperty(kE8, "__esModule", {
    value: !0
  });
  var mE = __$.sq(),
    X6A = __$.H8(),
    Ueq = __$.$v8(),
    peq = __$.Em1(),
    deq = __$.btA(),
    ceq = __$.xtA(),
    leq = __$.BtA(),
    ieq = __$.mtA(),
    neq = __$.QtA(),
    req = __$.UtA(),
    oeq = __$.ctA(),
    aeq = __$.itA(),
    seq = __$.ntA(),
    teq = __$.otA(),
    eeq = __$.Fm1(),
    AA5 = __$.Lm1(),
    NE8 = [mE.inboundFiltersIntegration(), mE.functionToStringIntegration(), mE.linkedErrorsIntegration(), mE.requestDataIntegration(), deq.consoleIntegration(), ieq.httpIntegration(), teq.nativeNodeFetchintegration(), oeq.onUncaughtExceptionIntegration(), aeq.onUnhandledRejectionIntegration(), leq.contextLinesIntegration(), neq.localVariablesIntegration(), ceq.nodeContextIntegration(), req.modulesIntegration()];
  function TE8(A) {
    let K = mE.getMainCarrier(),
      q = Qeq([K, "access", Y => Y.__SENTRY__, "optionalAccess", Y => Y.integrations]) || [];
    return [...NE8, ...q];
  }
  function KA5(A = {}) {
    if (Ueq.setNodeAsyncContextStrategy(), A.defaultIntegrations === void 0) A.defaultIntegrations = TE8();
    if (A.dsn === void 0 && process.env.SENTRY_DSN) A.dsn = process.env.SENTRY_DSN;
    let K = process.env.SENTRY_TRACES_SAMPLE_RATE;
    if (A.tracesSampleRate === void 0 && K) {
      let Y = parseFloat(K);
      if (isFinite(Y)) A.tracesSampleRate = Y;
    }
    if (A.release === void 0) {
      let Y = vE8();
      if (Y !== void 0) A.release = Y;else A.autoSessionTracking = !1;
    }
    if (A.environment === void 0 && process.env.SENTRY_ENVIRONMENT) A.environment = process.env.SENTRY_ENVIRONMENT;
    if (A.autoSessionTracking === void 0 && A.dsn !== void 0) A.autoSessionTracking = !0;
    if (A.instrumenter === void 0) A.instrumenter = "sentry";
    let q = {
      ...A,
      stackParser: X6A.stackParserFromStackParserOptions(A.stackParser || EE8),
      integrations: mE.getIntegrationsToSetup(A),
      transport: A.transport || AA5.makeNodeTransport
    };
    if (mE.initAndBind(A.clientClass || peq.NodeClient, q), A.autoSessionTracking) YA5();
    if (zA5(), A.spotlight) {
      let Y = mE.getClient();
      if (Y && Y.addIntegration) {
        let z = Y.getOptions().integrations;
        for (let w of z) Y.addIntegration(w);
        Y.addIntegration(seq.spotlightIntegration({
          sidecarUrl: typeof A.spotlight === "string" ? A.spotlight : void 0
        }));
      }
    }
  }
  function qA5(A) {
    if (A === void 0) return !1;
    let K = A && A.getOptions();
    if (K && K.autoSessionTracking !== void 0) return K.autoSessionTracking;
    return !1;
  }
  function vE8(A) {
    if (process.env.SENTRY_RELEASE) return process.env.SENTRY_RELEASE;
    if (X6A.GLOBAL_OBJ.SENTRY_RELEASE && X6A.GLOBAL_OBJ.SENTRY_RELEASE.id) return X6A.GLOBAL_OBJ.SENTRY_RELEASE.id;
    return process.env.GITHUB_SHA || process.env.COMMIT_REF || process.env.VERCEL_GIT_COMMIT_SHA || process.env.VERCEL_GITHUB_COMMIT_SHA || process.env.VERCEL_GITLAB_COMMIT_SHA || process.env.VERCEL_BITBUCKET_COMMIT_SHA || process.env.ZEIT_GITHUB_COMMIT_SHA || process.env.ZEIT_GITLAB_COMMIT_SHA || process.env.ZEIT_BITBUCKET_COMMIT_SHA || process.env.CF_PAGES_COMMIT_SHA || A;
  }
  var EE8 = X6A.createStackParser(X6A.nodeStackLineParser(eeq.createGetModuleFromFilename()));
  function YA5() {
    mE.startSession(), process.on("beforeExit", () => {
      let A = mE.getIsolationScope().getSession();
      if (A && !["exited", "crashed"].includes(A.status)) mE.endSession();
    });
  }
  function zA5() {
    let A = (process.env.SENTRY_USE_ENVIRONMENT || "").toLowerCase();
    if (!["false", "n", "no", "off", "0"].includes(A)) {
      let K = process.env.SENTRY_TRACE,
        q = process.env.SENTRY_BAGGAGE,
        Y = X6A.propagationContextFromHeaders(K, q);
      mE.getCurrentScope().setPropagationContext(Y);
    }
  }
  kE8.defaultIntegrations = NE8;
  kE8.defaultStackParser = EE8;
  kE8.getDefaultIntegrations = TE8;
  kE8.getSentryRelease = vE8;
  kE8.init = KA5;
  kE8.isAutoSessionTrackingEnabled = qA5;
});

// Register to shared state
__$.Qm1 = Qm1;
