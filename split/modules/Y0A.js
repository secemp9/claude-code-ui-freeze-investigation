// Module: Y0A
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Y0A = v((o1w, FK4) => {
  var u2 = CA("node:diagnostics_channel"),
    O66 = CA("node:util"),
    F71 = O66.debuglog("undici"),
    J66 = O66.debuglog("fetch"),
    y8A = O66.debuglog("websocket"),
    gK4 = !1,
    $B3 = {
      beforeConnect: u2.channel("undici:client:beforeConnect"),
      connected: u2.channel("undici:client:connected"),
      connectError: u2.channel("undici:client:connectError"),
      sendHeaders: u2.channel("undici:client:sendHeaders"),
      create: u2.channel("undici:request:create"),
      bodySent: u2.channel("undici:request:bodySent"),
      headers: u2.channel("undici:request:headers"),
      trailers: u2.channel("undici:request:trailers"),
      error: u2.channel("undici:request:error"),
      open: u2.channel("undici:websocket:open"),
      close: u2.channel("undici:websocket:close"),
      socketError: u2.channel("undici:websocket:socket_error"),
      ping: u2.channel("undici:websocket:ping"),
      pong: u2.channel("undici:websocket:pong")
    };
  if (F71.enabled || J66.enabled) {
    let A = J66.enabled ? J66 : F71;
    u2.channel("undici:client:beforeConnect").subscribe(K => {
      let {
        connectParams: {
          version: q,
          protocol: Y,
          port: z,
          host: w
        }
      } = K;
      A("connecting to %s using %s%s", `${w}${z ? `:${z}` : ""}`, Y, q);
    }), u2.channel("undici:client:connected").subscribe(K => {
      let {
        connectParams: {
          version: q,
          protocol: Y,
          port: z,
          host: w
        }
      } = K;
      A("connected to %s using %s%s", `${w}${z ? `:${z}` : ""}`, Y, q);
    }), u2.channel("undici:client:connectError").subscribe(K => {
      let {
        connectParams: {
          version: q,
          protocol: Y,
          port: z,
          host: w
        },
        error: H
      } = K;
      A("connection to %s using %s%s errored - %s", `${w}${z ? `:${z}` : ""}`, Y, q, H.message);
    }), u2.channel("undici:client:sendHeaders").subscribe(K => {
      let {
        request: {
          method: q,
          path: Y,
          origin: z
        }
      } = K;
      A("sending request to %s %s/%s", q, z, Y);
    }), u2.channel("undici:request:headers").subscribe(K => {
      let {
        request: {
          method: q,
          path: Y,
          origin: z
        },
        response: {
          statusCode: w
        }
      } = K;
      A("received response to %s %s/%s - HTTP %d", q, z, Y, w);
    }), u2.channel("undici:request:trailers").subscribe(K => {
      let {
        request: {
          method: q,
          path: Y,
          origin: z
        }
      } = K;
      A("trailers received from %s %s/%s", q, z, Y);
    }), u2.channel("undici:request:error").subscribe(K => {
      let {
        request: {
          method: q,
          path: Y,
          origin: z
        },
        error: w
      } = K;
      A("request to %s %s/%s errored - %s", q, z, Y, w.message);
    }), gK4 = !0;
  }
  if (y8A.enabled) {
    if (!gK4) {
      let A = F71.enabled ? F71 : y8A;
      u2.channel("undici:client:beforeConnect").subscribe(K => {
        let {
          connectParams: {
            version: q,
            protocol: Y,
            port: z,
            host: w
          }
        } = K;
        A("connecting to %s%s using %s%s", w, z ? `:${z}` : "", Y, q);
      }), u2.channel("undici:client:connected").subscribe(K => {
        let {
          connectParams: {
            version: q,
            protocol: Y,
            port: z,
            host: w
          }
        } = K;
        A("connected to %s%s using %s%s", w, z ? `:${z}` : "", Y, q);
      }), u2.channel("undici:client:connectError").subscribe(K => {
        let {
          connectParams: {
            version: q,
            protocol: Y,
            port: z,
            host: w
          },
          error: H
        } = K;
        A("connection to %s%s using %s%s errored - %s", w, z ? `:${z}` : "", Y, q, H.message);
      }), u2.channel("undici:client:sendHeaders").subscribe(K => {
        let {
          request: {
            method: q,
            path: Y,
            origin: z
          }
        } = K;
        A("sending request to %s %s/%s", q, z, Y);
      });
    }
    u2.channel("undici:websocket:open").subscribe(A => {
      let {
        address: {
          address: K,
          port: q
        }
      } = A;
      y8A("connection opened %s%s", K, q ? `:${q}` : "");
    }), u2.channel("undici:websocket:close").subscribe(A => {
      let {
        websocket: K,
        code: q,
        reason: Y
      } = A;
      y8A("closed connection to %s - %s %s", K.url, q, Y);
    }), u2.channel("undici:websocket:socket_error").subscribe(A => {
      y8A("connection errored - %s", A.message);
    }), u2.channel("undici:websocket:ping").subscribe(A => {
      y8A("ping received");
    }), u2.channel("undici:websocket:pong").subscribe(A => {
      y8A("pong received");
    });
  }
  FK4.exports = {
    channels: $B3
  };
});

// Register to shared state
__$.Y0A = Y0A;
