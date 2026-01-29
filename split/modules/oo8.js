// Module: oo8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var oo8 = v(no8 => {
  Object.defineProperty(no8, "__esModule", {
    value: !0
  });
  no8.resolveHttpAuthRuntimeConfig = no8.getHttpAuthExtensionConfiguration = void 0;
  var tc5 = A => {
    let {
      httpAuthSchemes: K,
      httpAuthSchemeProvider: q,
      credentials: Y
    } = A;
    return {
      setHttpAuthScheme(z) {
        let w = K.findIndex(H => H.schemeId === z.schemeId);
        if (w === -1) K.push(z);else K.splice(w, 1, z);
      },
      httpAuthSchemes() {
        return K;
      },
      setHttpAuthSchemeProvider(z) {
        q = z;
      },
      httpAuthSchemeProvider() {
        return q;
      },
      setCredentials(z) {
        Y = z;
      },
      credentials() {
        return Y;
      }
    };
  };
  no8.getHttpAuthExtensionConfiguration = tc5;
  var ec5 = A => {
    return {
      httpAuthSchemes: A.httpAuthSchemes(),
      httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
      credentials: A.credentials()
    };
  };
  no8.resolveHttpAuthRuntimeConfig = ec5;
});

// Register to shared state
__$.oo8 = oo8;
