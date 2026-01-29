// Module: gJ6
// Dependencies: Zo, TJ6, CJ6, Ww1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var gJ6 = v(hs4 => {
  Object.defineProperty(hs4, "__esModule", {
    value: !0
  });
  hs4.ExternalAccountClient = void 0;
  var se9 = __$.Zo(),
    te9 = __$.TJ6(),
    ee9 = __$.CJ6(),
    AAY = __$.Ww1();
  class Ss4 {
    constructor() {
      throw Error("ExternalAccountClients should be initialized via: ExternalAccountClient.fromJSON(), directly via explicit constructors, eg. new AwsClient(options), new IdentityPoolClient(options), newPluggableAuthClientOptions, or via new GoogleAuth(options).getClient()");
    }
    static fromJSON(A, K) {
      var q, Y;
      if (A && A.type === se9.EXTERNAL_ACCOUNT_TYPE) {
        if ((q = A.credential_source) === null || q === void 0 ? void 0 : q.environment_id) return new ee9.AwsClient(A, K);else if ((Y = A.credential_source) === null || Y === void 0 ? void 0 : Y.executable) return new AAY.PluggableAuthClient(A, K);else return new te9.IdentityPoolClient(A, K);
      } else return null;
    }
  }
  hs4.ExternalAccountClient = Ss4;
});

// Register to shared state
__$.gJ6 = gJ6;
