// Module: tS7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tS7 = v(hDA => {
  var $sY = hDA && hDA.__awaiter || function (A, K, q, Y) {
    function z(w) {
      return w instanceof q ? w : new q(function (H) {
        H(w);
      });
    }
    return new (q || (q = Promise))(function (w, H) {
      function J($) {
        try {
          X(Y.next($));
        } catch (_) {
          H(_);
        }
      }
      function O($) {
        try {
          X(Y.throw($));
        } catch (_) {
          H(_);
        }
      }
      function X($) {
        $.done ? w($.value) : z($.value).then(J, O);
      }
      X((Y = Y.apply(A, K || [])).next());
    });
  };
  Object.defineProperty(hDA, "__esModule", {
    value: !0
  });
  hDA._fetchTxtRecords = void 0;
  var _sY = new Uint8Array([0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114, 101, 97, 115, 115, 101, 116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1]),
    GsY = "https://cloudflare-dns.com/dns-query",
    ZsY = ["i", "e", "d"],
    WsY = 200;
  function DsY(A) {
    return $sY(this, void 0, void 0, function* () {
      let K = yield A(GsY, {
        method: "POST",
        headers: {
          "Content-Type": "application/dns-message",
          Accept: "application/dns-message"
        },
        body: _sY
      });
      if (!K.ok) {
        let z = Error("Failed to fetch TXT records from DNS");
        throw z.name = "DnsTxtFetchError", z;
      }
      let q = yield K.arrayBuffer(),
        Y = new Uint8Array(q);
      return jsY(Y);
    });
  }
  hDA._fetchTxtRecords = DsY;
  function jsY(A) {
    let K = A.findIndex((Y, z) => z < WsY && String.fromCharCode(Y) === "=" && ZsY.includes(String.fromCharCode(A[z - 1])));
    if (K === -1) {
      let Y = Error("Failed to parse TXT records from DNS");
      throw Y.name = "DnsTxtParseError", Y;
    }
    let q = "";
    for (let Y = K - 1; Y < A.length; Y++) q += String.fromCharCode(A[Y]);
    return q.split(",");
  }
});

// Register to shared state
__$.tS7 = tS7;
