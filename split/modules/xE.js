// Module: xE
// Dependencies: H8, OHA, FX, Gb, XHA, IsA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xE = v(LM8 => {
  Object.defineProperty(LM8, "__esModule", {
    value: !0
  });
  var eg = __$.H8(),
    ZBq = __$.OHA(),
    bsA = __$.FX(),
    Q0 = __$.Gb(),
    ZB1 = __$.XHA(),
    WBq = __$.IsA();
  function DBq(A, K) {
    return Q0.getCurrentHub().captureException(A, WBq.parseEventHintOrCaptureContext(K));
  }
  function jBq(A, K) {
    let q = typeof K === "string" ? K : void 0,
      Y = typeof K !== "string" ? {
        captureContext: K
      } : void 0;
    return Q0.getCurrentHub().captureMessage(A, q, Y);
  }
  function MBq(A, K) {
    return Q0.getCurrentHub().captureEvent(A, K);
  }
  function PBq(A) {
    Q0.getCurrentHub().configureScope(A);
  }
  function VBq(A, K) {
    Q0.getCurrentHub().addBreadcrumb(A, K);
  }
  function fBq(A, K) {
    Q0.getCurrentHub().setContext(A, K);
  }
  function NBq(A) {
    Q0.getCurrentHub().setExtras(A);
  }
  function TBq(A, K) {
    Q0.getCurrentHub().setExtra(A, K);
  }
  function vBq(A) {
    Q0.getCurrentHub().setTags(A);
  }
  function EBq(A, K) {
    Q0.getCurrentHub().setTag(A, K);
  }
  function kBq(A) {
    Q0.getCurrentHub().setUser(A);
  }
  function kM8(...A) {
    let K = Q0.getCurrentHub();
    if (A.length === 2) {
      let [q, Y] = A;
      if (!q) return K.withScope(Y);
      return K.withScope(() => {
        return K.getStackTop().scope = q, Y(q);
      });
    }
    return K.withScope(A[0]);
  }
  function CBq(A) {
    return Q0.runWithAsyncContext(() => {
      return A(Q0.getIsolationScope());
    });
  }
  function LBq(A, K) {
    return kM8(q => {
      return q.setSpan(A), K(q);
    });
  }
  function RBq(A, K) {
    return Q0.getCurrentHub().startTransaction({
      ...A
    }, K);
  }
  function WB1(A, K) {
    let q = VvA(),
      Y = i1A();
    if (!Y) bsA.DEBUG_BUILD && eg.logger.warn("Cannot capture check-in. No client defined.");else if (!Y.captureCheckIn) bsA.DEBUG_BUILD && eg.logger.warn("Cannot capture check-in. Client does not support sending check-ins.");else return Y.captureCheckIn(A, K, q);
    return eg.uuid4();
  }
  function yBq(A, K, q) {
    let Y = WB1({
        monitorSlug: A,
        status: "in_progress"
      }, q),
      z = eg.timestampInSeconds();
    function w(J) {
      WB1({
        monitorSlug: A,
        status: J,
        checkInId: Y,
        duration: eg.timestampInSeconds() - z
      });
    }
    let H;
    try {
      H = K();
    } catch (J) {
      throw w("error"), J;
    }
    if (eg.isThenable(H)) Promise.resolve(H).then(() => {
      w("ok");
    }, () => {
      w("error");
    });else w("ok");
    return H;
  }
  async function IBq(A) {
    let K = i1A();
    if (K) return K.flush(A);
    return bsA.DEBUG_BUILD && eg.logger.warn("Cannot flush events. No client defined."), Promise.resolve(!1);
  }
  async function SBq(A) {
    let K = i1A();
    if (K) return K.close(A);
    return bsA.DEBUG_BUILD && eg.logger.warn("Cannot flush events and disable SDK. No client defined."), Promise.resolve(!1);
  }
  function hBq() {
    return Q0.getCurrentHub().lastEventId();
  }
  function i1A() {
    return Q0.getCurrentHub().getClient();
  }
  function bBq() {
    return !!i1A();
  }
  function VvA() {
    return Q0.getCurrentHub().getScope();
  }
  function xBq(A) {
    let K = i1A(),
      q = Q0.getIsolationScope(),
      Y = VvA(),
      {
        release: z,
        environment: w = ZBq.DEFAULT_ENVIRONMENT
      } = K && K.getOptions() || {},
      {
        userAgent: H
      } = eg.GLOBAL_OBJ.navigator || {},
      J = ZB1.makeSession({
        release: z,
        environment: w,
        user: Y.getUser() || q.getUser(),
        ...(H && {
          userAgent: H
        }),
        ...A
      }),
      O = q.getSession();
    if (O && O.status === "ok") ZB1.updateSession(O, {
      status: "exited"
    });
    return DB1(), q.setSession(J), Y.setSession(J), J;
  }
  function DB1() {
    let A = Q0.getIsolationScope(),
      K = VvA(),
      q = K.getSession() || A.getSession();
    if (q) ZB1.closeSession(q);
    CM8(), A.setSession(), K.setSession();
  }
  function CM8() {
    let A = Q0.getIsolationScope(),
      K = VvA(),
      q = i1A(),
      Y = K.getSession() || A.getSession();
    if (Y && q && q.captureSession) q.captureSession(Y);
  }
  function uBq(A = !1) {
    if (A) {
      DB1();
      return;
    }
    CM8();
  }
  LM8.addBreadcrumb = VBq;
  LM8.captureCheckIn = WB1;
  LM8.captureEvent = MBq;
  LM8.captureException = DBq;
  LM8.captureMessage = jBq;
  LM8.captureSession = uBq;
  LM8.close = SBq;
  LM8.configureScope = PBq;
  LM8.endSession = DB1;
  LM8.flush = IBq;
  LM8.getClient = i1A;
  LM8.getCurrentScope = VvA;
  LM8.isInitialized = bBq;
  LM8.lastEventId = hBq;
  LM8.setContext = fBq;
  LM8.setExtra = TBq;
  LM8.setExtras = NBq;
  LM8.setTag = EBq;
  LM8.setTags = vBq;
  LM8.setUser = kBq;
  LM8.startSession = xBq;
  LM8.startTransaction = RBq;
  LM8.withActiveSpan = LBq;
  LM8.withIsolationScope = CBq;
  LM8.withMonitor = yBq;
  LM8.withScope = kM8;
});

// Register to shared state
__$.xE = xE;
