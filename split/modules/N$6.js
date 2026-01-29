// Module: N$6
// Dependencies: U77, d77

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var N$6 = v(($gw, c77) => {
  var A3Y = __$.U77(),
    K3Y = __$.d77(),
    q3Y = {
      ec: ["ES256", "ES384", "ES512"],
      rsa: ["RS256", "PS256", "RS384", "PS384", "RS512", "PS512"],
      "rsa-pss": ["PS256", "PS384", "PS512"]
    },
    Y3Y = {
      ES256: "prime256v1",
      ES384: "secp384r1",
      ES512: "secp521r1"
    };
  c77.exports = function (A, K) {
    if (!A || !K) return;
    let q = K.asymmetricKeyType;
    if (!q) return;
    let Y = q3Y[q];
    if (!Y) throw Error(`Unknown key type "${q}".`);
    if (!Y.includes(A)) throw Error(`"alg" parameter for "${q}" key type must be one of: ${Y.join(", ")}.`);
    if (A3Y) switch (q) {
      case "ec":
        let z = K.asymmetricKeyDetails.namedCurve,
          w = Y3Y[A];
        if (z !== w) throw Error(`"alg" parameter "${A}" requires curve "${w}".`);
        break;
      case "rsa-pss":
        if (K3Y) {
          let H = parseInt(A.slice(-3), 10),
            {
              hashAlgorithm: J,
              mgf1HashAlgorithm: O,
              saltLength: X
            } = K.asymmetricKeyDetails;
          if (J !== `sha${H}` || O !== J) throw Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${A}.`);
          if (X !== void 0 && X > H >> 3) throw Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${A}.`);
        }
        break;
    }
  };
});

// Register to shared state
__$.N$6 = N$6;
