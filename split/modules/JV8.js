// Module: JV8
// Dependencies: H8, FX

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var JV8 = v(HV8 => {
  Object.defineProperty(HV8, "__esModule", {
    value: !0
  });
  var lB1 = __$.H8(),
    pUq = __$.FX(),
    wV8 = 100,
    iB1 = 5000,
    dUq = 3600000;
  function cB1(A, K) {
    pUq.DEBUG_BUILD && lB1.logger.info(`[Offline]: ${A}`, K);
  }
  function cUq(A) {
    return K => {
      let q = A(K),
        Y = K.createStore ? K.createStore(K) : void 0,
        z = iB1,
        w;
      function H($, _, G) {
        if (lB1.envelopeContainsItemType($, ["replay_event", "replay_recording", "client_report"])) return !1;
        if (K.shouldStore) return K.shouldStore($, _, G);
        return !0;
      }
      function J($) {
        if (!Y) return;
        if (w) clearTimeout(w);
        if (w = setTimeout(async () => {
          w = void 0;
          let _ = await Y.pop();
          if (_) cB1("Attempting to send previously queued event"), X(_).catch(G => {
            cB1("Failed to retry sending", G);
          });
        }, $), typeof w !== "number" && w.unref) w.unref();
      }
      function O() {
        if (w) return;
        J(z), z = Math.min(z * 2, dUq);
      }
      async function X($) {
        try {
          let _ = await q.send($),
            G = wV8;
          if (_) {
            if (_.headers && _.headers["retry-after"]) G = lB1.parseRetryAfterHeader(_.headers["retry-after"]);else if ((_.statusCode || 0) >= 400) return _;
          }
          return J(G), z = iB1, _;
        } catch (_) {
          if (Y && (await H($, _, z))) return await Y.insert($), O(), cB1("Error sending. Event queued", _), {};else throw _;
        }
      }
      if (K.flushAtStartup) O();
      return {
        send: X,
        flush: $ => q.flush($)
      };
    };
  }
  HV8.MIN_DELAY = wV8;
  HV8.START_DELAY = iB1;
  HV8.makeOfflineTransport = cUq;
});

// Register to shared state
__$.JV8 = JV8;
