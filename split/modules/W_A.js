// Module: W_A
// Dependencies: Ao4, zo4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var W_A = v(Ho4 => {
  Object.defineProperty(Ho4, "__esModule", {
    value: !0
  });
  Ho4.createCrypto = Ms9;
  Ho4.hasBrowserCrypto = wo4;
  Ho4.fromArrayBufferToHex = Ps9;
  var Ds9 = __$.Ao4(),
    js9 = __$.zo4();
  function Ms9() {
    if (wo4()) return new Ds9.BrowserCrypto();
    return new js9.NodeCrypto();
  }
  function wo4() {
    return typeof window < "u" && typeof window.crypto < "u" && typeof window.crypto.subtle < "u";
  }
  function Ps9(A) {
    return Array.from(new Uint8Array(A)).map(q => {
      return q.toString(16).padStart(2, "0");
    }).join("");
  }
});

// Register to shared state
__$.W_A = W_A;
