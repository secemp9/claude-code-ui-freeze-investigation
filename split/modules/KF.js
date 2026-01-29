// Module: KF
// Dependencies: H8, FX, MvA, xE, Gb

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var KF = v(LP8 => {
  Object.defineProperty(LP8, "__esModule", {
    value: !0
  });
  var esA = __$.H8(),
    xB1 = __$.FX(),
    eFq = __$.MvA(),
    AQq = __$.xE(),
    KQq = __$.Gb(),
    uB1 = [];
  function qQq(A) {
    let K = {};
    return A.forEach(q => {
      let {
          name: Y
        } = q,
        z = K[Y];
      if (z && !z.isDefaultInstance && q.isDefaultInstance) return;
      K[Y] = q;
    }), Object.keys(K).map(q => K[q]);
  }
  function YQq(A) {
    let K = A.defaultIntegrations || [],
      q = A.integrations;
    K.forEach(H => {
      H.isDefaultInstance = !0;
    });
    let Y;
    if (Array.isArray(q)) Y = [...K, ...q];else if (typeof q === "function") Y = esA.arrayify(q(K));else Y = K;
    let z = qQq(Y),
      w = JQq(z, H => H.name === "Debug");
    if (w !== -1) {
      let [H] = z.splice(w, 1);
      z.push(H);
    }
    return z;
  }
  function zQq(A, K) {
    let q = {};
    return K.forEach(Y => {
      if (Y) CP8(A, Y, q);
    }), q;
  }
  function wQq(A, K) {
    for (let q of K) if (q && q.afterAllSetup) q.afterAllSetup(A);
  }
  function CP8(A, K, q) {
    if (q[K.name]) {
      xB1.DEBUG_BUILD && esA.logger.log(`Integration skipped because it was already installed: ${K.name}`);
      return;
    }
    if (q[K.name] = K, uB1.indexOf(K.name) === -1) K.setupOnce(eFq.addGlobalEventProcessor, KQq.getCurrentHub), uB1.push(K.name);
    if (K.setup && typeof K.setup === "function") K.setup(A);
    if (A.on && typeof K.preprocessEvent === "function") {
      let Y = K.preprocessEvent.bind(K);
      A.on("preprocessEvent", (z, w) => Y(z, w, A));
    }
    if (A.addEventProcessor && typeof K.processEvent === "function") {
      let Y = K.processEvent.bind(K),
        z = Object.assign((w, H) => Y(w, H, A), {
          id: K.name
        });
      A.addEventProcessor(z);
    }
    xB1.DEBUG_BUILD && esA.logger.log(`Integration installed: ${K.name}`);
  }
  function HQq(A) {
    let K = AQq.getClient();
    if (!K || !K.addIntegration) {
      xB1.DEBUG_BUILD && esA.logger.warn(`Cannot add integration "${A.name}" because no SDK Client is available.`);
      return;
    }
    K.addIntegration(A);
  }
  function JQq(A, K) {
    for (let q = 0; q < A.length; q++) if (K(A[q]) === !0) return q;
    return -1;
  }
  function OQq(A, K) {
    return Object.assign(function (...Y) {
      return K(...Y);
    }, {
      id: A
    });
  }
  function XQq(A) {
    return A;
  }
  LP8.addIntegration = HQq;
  LP8.afterSetupIntegrations = wQq;
  LP8.convertIntegrationFnToClass = OQq;
  LP8.defineIntegration = XQq;
  LP8.getIntegrationsToSetup = YQq;
  LP8.installedIntegrations = uB1;
  LP8.setupIntegration = CP8;
  LP8.setupIntegrations = zQq;
});

// Register to shared state
__$.KF = KF;
