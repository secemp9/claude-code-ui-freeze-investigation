// Module: Xu1
// Dependencies: Xb, xR

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Xu1 = v(QW8 => {
  Object.defineProperty(QW8, "__esModule", {
    value: !0
  });
  var KCq = __$.Xb(),
    wvA = __$.xR(),
    qCq = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
  function YCq(A) {
    return A === "http" || A === "https";
  }
  function zCq(A, K = !1) {
    let {
      host: q,
      path: Y,
      pass: z,
      port: w,
      projectId: H,
      protocol: J,
      publicKey: O
    } = A;
    return `${J}://${O}${K && z ? `:${z}` : ""}@${q}${w ? `:${w}` : ""}/${Y ? `${Y}/` : Y}${H}`;
  }
  function gW8(A) {
    let K = qCq.exec(A);
    if (!K) {
      wvA.consoleSandbox(() => {
        console.error(`Invalid Sentry Dsn: ${A}`);
      });
      return;
    }
    let [q, Y, z = "", w, H = "", J] = K.slice(1),
      O = "",
      X = J,
      $ = X.split("/");
    if ($.length > 1) O = $.slice(0, -1).join("/"), X = $.pop();
    if (X) {
      let _ = X.match(/^\d+/);
      if (_) X = _[0];
    }
    return FW8({
      host: w,
      pass: z,
      path: O,
      projectId: X,
      port: H,
      protocol: q,
      publicKey: Y
    });
  }
  function FW8(A) {
    return {
      protocol: A.protocol,
      publicKey: A.publicKey || "",
      pass: A.pass || "",
      host: A.host,
      port: A.port || "",
      path: A.path || "",
      projectId: A.projectId
    };
  }
  function wCq(A) {
    if (!KCq.DEBUG_BUILD) return !0;
    let {
      port: K,
      projectId: q,
      protocol: Y
    } = A;
    if (["protocol", "publicKey", "host", "projectId"].find(H => {
      if (!A[H]) return wvA.logger.error(`Invalid Sentry Dsn: ${H} missing`), !0;
      return !1;
    })) return !1;
    if (!q.match(/^\d+$/)) return wvA.logger.error(`Invalid Sentry Dsn: Invalid projectId ${q}`), !1;
    if (!YCq(Y)) return wvA.logger.error(`Invalid Sentry Dsn: Invalid protocol ${Y}`), !1;
    if (K && isNaN(parseInt(K, 10))) return wvA.logger.error(`Invalid Sentry Dsn: Invalid port ${K}`), !1;
    return !0;
  }
  function HCq(A) {
    let K = typeof A === "string" ? gW8(A) : FW8(A);
    if (!K || !wCq(K)) return;
    return K;
  }
  QW8.dsnFromString = gW8;
  QW8.dsnToString = zCq;
  QW8.makeDsn = HCq;
});

// Register to shared state
__$.Xu1 = Xu1;
