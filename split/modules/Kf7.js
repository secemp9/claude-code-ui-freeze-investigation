// Module: Kf7
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Kf7 = v(eV7 => {
  Object.defineProperty(eV7, "__esModule", {
    value: !0
  });
  eV7.resolveHttpAuthRuntimeConfig = eV7.getHttpAuthExtensionConfiguration = void 0;
  var tSY = A => {
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
  eV7.getHttpAuthExtensionConfiguration = tSY;
  var eSY = A => {
    return {
      httpAuthSchemes: A.httpAuthSchemes(),
      httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
      credentials: A.credentials()
    };
  };
  eV7.resolveHttpAuthRuntimeConfig = eSY;
});

// Register to shared state
__$.Kf7 = Kf7;
