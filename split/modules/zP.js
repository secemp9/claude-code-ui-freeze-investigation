// Module: zP
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zP = v(jU7 => {
  Object.defineProperty(jU7, "__esModule", {
    value: !0
  });
  jU7.parseUri = vK2;
  jU7.splitHostPort = EK2;
  jU7.combineHostPort = kK2;
  jU7.uriToString = CK2;
  var TK2 = /^(?:([A-Za-z0-9+.-]+):)?(?:\/\/([^/]*)\/)?(.+)$/;
  function vK2(A) {
    let K = TK2.exec(A);
    if (K === null) return null;
    return {
      scheme: K[1],
      authority: K[2],
      path: K[3]
    };
  }
  var DU7 = /^\d+$/;
  function EK2(A) {
    if (A.startsWith("[")) {
      let K = A.indexOf("]");
      if (K === -1) return null;
      let q = A.substring(1, K);
      if (q.indexOf(":") === -1) return null;
      if (A.length > K + 1) {
        if (A[K + 1] === ":") {
          let Y = A.substring(K + 2);
          if (DU7.test(Y)) return {
            host: q,
            port: +Y
          };else return null;
        } else return null;
      } else return {
        host: q
      };
    } else {
      let K = A.split(":");
      if (K.length === 2) {
        if (DU7.test(K[1])) return {
          host: K[0],
          port: +K[1]
        };else return null;
      } else return {
        host: A
      };
    }
  }
  function kK2(A) {
    if (A.port === void 0) return A.host;else if (A.host.includes(":")) return `[${A.host}]:${A.port}`;else return `${A.host}:${A.port}`;
  }
  function CK2(A) {
    let K = "";
    if (A.scheme !== void 0) K += A.scheme + ":";
    if (A.authority !== void 0) K += "//" + A.authority + "/";
    return K += A.path, K;
  }
});

// Register to shared state
__$.zP = zP;
