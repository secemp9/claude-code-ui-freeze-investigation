// Module: _q7
// Dependencies: NU, Po, YX, mT, lKA, tY, UU, U$6, phA, cYY
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _q7 = k(() => {
  __$.NU();
  __$.Po();
  __$.YX();
  __$.mT();
  __$.lKA = __$.tY(__$.UU);
  __$.U$6 = {
    name: "imdsMsi",
    async isAvailable(A) {
      let {
          scopes: K,
          identityClient: q,
          getTokenOptions: Y
        } = A,
        z = __$.phA(K);
      if (!z) return __$.lKA.info(`${__$.UU}: Unavailable. Multiple scopes are not supported.`), !1;
      if (process.env.AZURE_POD_IDENTITY_AUTHORITY_HOST) return !0;
      if (!q) throw Error("Missing IdentityClient");
      let w = __$.cYY(z);
      return __$.EJ.withSpan("ManagedIdentityCredential-pingImdsEndpoint", Y !== null && Y !== void 0 ? Y : {}, async H => {
        var J, O;
        w.tracingOptions = H.tracingOptions;
        let X = __$.wI(w);
        X.timeout = ((J = H.requestOptions) === null || J === void 0 ? void 0 : J.timeout) || 1000, X.allowInsecureConnection = !0;
        let $;
        try {
          __$.lKA.info(`${__$.UU}: Pinging the Azure IMDS endpoint`), $ = await q.sendRequest(X);
        } catch (_) {
          if (__$.Qw1(_)) __$.lKA.verbose(`${__$.UU}: Caught error ${_.name}: ${_.message}`);
          return __$.lKA.info(`${__$.UU}: The Azure IMDS endpoint is unavailable`), !1;
        }
        if ($.status === 403) {
          if ((O = $.bodyAsText) === null || O === void 0 ? void 0 : O.includes("unreachable")) return __$.lKA.info(`${__$.UU}: The Azure IMDS endpoint is unavailable`), __$.lKA.info(`${__$.UU}: ${$.bodyAsText}`), !1;
        }
        return __$.lKA.info(`${__$.UU}: The Azure IMDS endpoint is available`), !0;
      });
    }
  };
});

// Register to shared state
__$._q7 = _q7;
