// Module: jS
// Dependencies: zP

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jS = v(MU7 => {
  Object.defineProperty(MU7, "__esModule", {
    value: !0
  });
  MU7.CHANNEL_ARGS_CONFIG_SELECTOR_KEY = void 0;
  MU7.registerResolver = SK2;
  MU7.registerDefaultScheme = hK2;
  MU7.createResolver = bK2;
  MU7.getDefaultAuthority = xK2;
  MU7.mapUriDefaultScheme = uK2;
  var UE6 = __$.zP();
  MU7.CHANNEL_ARGS_CONFIG_SELECTOR_KEY = "grpc.internal.config_selector";
  var AjA = {},
    QE6 = null;
  function SK2(A, K) {
    AjA[A] = K;
  }
  function hK2(A) {
    QE6 = A;
  }
  function bK2(A, K, q) {
    if (A.scheme !== void 0 && A.scheme in AjA) return new AjA[A.scheme](A, K, q);else throw Error(`No resolver could be created for target ${(0, UE6.uriToString)(A)}`);
  }
  function xK2(A) {
    if (A.scheme !== void 0 && A.scheme in AjA) return AjA[A.scheme].getDefaultAuthority(A);else throw Error(`Invalid target ${(0, UE6.uriToString)(A)}`);
  }
  function uK2(A) {
    if (A.scheme === void 0 || !(A.scheme in AjA)) if (QE6 !== null) return {
      scheme: QE6,
      authority: void 0,
      path: (0, UE6.uriToString)(A)
    };else return null;
    return A;
  }
});

// Register to shared state
__$.jS = jS;
