// Module: XV8
// Dependencies: H8, tsA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var XV8 = v(OV8 => {
  Object.defineProperty(OV8, "__esModule", {
    value: !0
  });
  var nB1 = __$.H8(),
    rUq = __$.tsA();
  function rB1(A, K) {
    let q;
    return nB1.forEachEnvelopeItem(A, (Y, z) => {
      if (K.includes(z)) q = Array.isArray(Y) ? Y[1] : void 0;
      return !!q;
    }), q;
  }
  function oUq(A, K) {
    return q => {
      let Y = A(q);
      return {
        ...Y,
        send: async z => {
          let w = rB1(z, ["event", "transaction", "profile", "replay_event"]);
          if (w) w.release = K;
          return Y.send(z);
        }
      };
    };
  }
  function aUq(A, K) {
    return nB1.createEnvelope(K ? {
      ...A[0],
      dsn: K
    } : A[0], A[1]);
  }
  function sUq(A, K) {
    return q => {
      let Y = A(q),
        z = new Map();
      function w(O, X) {
        let $ = X ? `${O}:${X}` : O,
          _ = z.get($);
        if (!_) {
          let G = nB1.dsnFromString(O);
          if (!G) return;
          let Z = rUq.getEnvelopeEndpointWithUrlEncodedAuth(G, q.tunnel);
          _ = X ? oUq(A, X)({
            ...q,
            url: Z
          }) : A({
            ...q,
            url: Z
          }), z.set($, _);
        }
        return [O, _];
      }
      async function H(O) {
        function X(G) {
          let Z = G && G.length ? G : ["event"];
          return rB1(O, Z);
        }
        let $ = K({
          envelope: O,
          getEvent: X
        }).map(G => {
          if (typeof G === "string") return w(G, void 0);else return w(G.dsn, G.release);
        }).filter(G => !!G);
        if ($.length === 0) $.push(["", Y]);
        return (await Promise.all($.map(([G, Z]) => Z.send(aUq(O, G)))))[0];
      }
      async function J(O) {
        let X = [await Y.flush(O)];
        for (let [, $] of z) X.push(await $.flush(O));
        return X.every($ => $);
      }
      return {
        send: H,
        flush: J
      };
    };
  }
  OV8.eventFromEnvelope = rB1;
  OV8.makeMultiplexedTransport = sUq;
});

// Register to shared state
__$.XV8 = XV8;
