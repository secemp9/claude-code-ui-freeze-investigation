// Module: yK7
// Dependencies: H$6, T$6, N$6, wJ1, AK7, qK7, JK7, XK7, ZK7, DK7
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var yK7 = v((fgw, RK7) => {
  var NK7 = __$.H$6(),
    zYY = __$.T$6(),
    wYY = __$.N$6(),
    TK7 = __$.wJ1(),
    HYY = __$.AK7(),
    EJ1 = __$.qK7(),
    vK7 = __$.JK7(),
    y$6 = __$.XK7(),
    kK7 = __$.ZK7(),
    Qo = __$.DK7(),
    JYY = __$.fK7(),
    {
      KeyObject: OYY,
      createSecretKey: XYY,
      createPrivateKey: $YY
    } = CA("crypto"),
    CK7 = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
  if (zYY) CK7.splice(3, 0, "PS256", "PS384", "PS512");
  var _YY = {
      expiresIn: {
        isValid: function (A) {
          return vK7(A) || Qo(A) && A;
        },
        message: '"expiresIn" should be a number of seconds or string representing a timespan'
      },
      notBefore: {
        isValid: function (A) {
          return vK7(A) || Qo(A) && A;
        },
        message: '"notBefore" should be a number of seconds or string representing a timespan'
      },
      audience: {
        isValid: function (A) {
          return Qo(A) || Array.isArray(A);
        },
        message: '"audience" must be a string or array'
      },
      algorithm: {
        isValid: HYY.bind(null, CK7),
        message: '"algorithm" must be a valid string enum value'
      },
      header: {
        isValid: kK7,
        message: '"header" must be an object'
      },
      encoding: {
        isValid: Qo,
        message: '"encoding" must be a string'
      },
      issuer: {
        isValid: Qo,
        message: '"issuer" must be a string'
      },
      subject: {
        isValid: Qo,
        message: '"subject" must be a string'
      },
      jwtid: {
        isValid: Qo,
        message: '"jwtid" must be a string'
      },
      noTimestamp: {
        isValid: EJ1,
        message: '"noTimestamp" must be a boolean'
      },
      keyid: {
        isValid: Qo,
        message: '"keyid" must be a string'
      },
      mutatePayload: {
        isValid: EJ1,
        message: '"mutatePayload" must be a boolean'
      },
      allowInsecureKeySizes: {
        isValid: EJ1,
        message: '"allowInsecureKeySizes" must be a boolean'
      },
      allowInvalidAsymmetricKeyTypes: {
        isValid: EJ1,
        message: '"allowInvalidAsymmetricKeyTypes" must be a boolean'
      }
    },
    GYY = {
      iat: {
        isValid: y$6,
        message: '"iat" should be a number of seconds'
      },
      exp: {
        isValid: y$6,
        message: '"exp" should be a number of seconds'
      },
      nbf: {
        isValid: y$6,
        message: '"nbf" should be a number of seconds'
      }
    };
  function LK7(A, K, q, Y) {
    if (!kK7(q)) throw Error('Expected "' + Y + '" to be a plain object.');
    Object.keys(q).forEach(function (z) {
      let w = A[z];
      if (!w) {
        if (!K) throw Error('"' + z + '" is not allowed in "' + Y + '"');
        return;
      }
      if (!w.isValid(q[z])) throw Error(w.message);
    });
  }
  function ZYY(A) {
    return LK7(_YY, !1, A, "options");
  }
  function WYY(A) {
    return LK7(GYY, !0, A, "payload");
  }
  var EK7 = {
      audience: "aud",
      issuer: "iss",
      subject: "sub",
      jwtid: "jti"
    },
    DYY = ["expiresIn", "notBefore", "noTimestamp", "audience", "issuer", "subject", "jwtid"];
  RK7.exports = function (A, K, q, Y) {
    if (typeof q === "function") Y = q, q = {};else q = q || {};
    let z = typeof A === "object" && !Buffer.isBuffer(A),
      w = Object.assign({
        alg: q.algorithm || "HS256",
        typ: z ? "JWT" : void 0,
        kid: q.keyid
      }, q.header);
    function H(X) {
      if (Y) return Y(X);
      throw X;
    }
    if (!K && q.algorithm !== "none") return H(Error("secretOrPrivateKey must have a value"));
    if (K != null && !(K instanceof OYY)) try {
      K = $YY(K);
    } catch (X) {
      try {
        K = XYY(typeof K === "string" ? Buffer.from(K) : K);
      } catch ($) {
        return H(Error("secretOrPrivateKey is not valid key material"));
      }
    }
    if (w.alg.startsWith("HS") && K.type !== "secret") return H(Error(`secretOrPrivateKey must be a symmetric key when using ${w.alg}`));else if (/^(?:RS|PS|ES)/.test(w.alg)) {
      if (K.type !== "private") return H(Error(`secretOrPrivateKey must be an asymmetric key when using ${w.alg}`));
      if (!q.allowInsecureKeySizes && !w.alg.startsWith("ES") && K.asymmetricKeyDetails !== void 0 && K.asymmetricKeyDetails.modulusLength < 2048) return H(Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${w.alg}`));
    }
    if (typeof A > "u") return H(Error("payload is required"));else if (z) {
      try {
        WYY(A);
      } catch (X) {
        return H(X);
      }
      if (!q.mutatePayload) A = Object.assign({}, A);
    } else {
      let X = DYY.filter(function ($) {
        return typeof q[$] < "u";
      });
      if (X.length > 0) return H(Error("invalid " + X.join(",") + " option for " + typeof A + " payload"));
    }
    if (typeof A.exp < "u" && typeof q.expiresIn < "u") return H(Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
    if (typeof A.nbf < "u" && typeof q.notBefore < "u") return H(Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
    try {
      ZYY(q);
    } catch (X) {
      return H(X);
    }
    if (!q.allowInvalidAsymmetricKeyTypes) try {
      wYY(w.alg, K);
    } catch (X) {
      return H(X);
    }
    let J = A.iat || Math.floor(Date.now() / 1000);
    if (q.noTimestamp) delete A.iat;else if (z) A.iat = J;
    if (typeof q.notBefore < "u") {
      try {
        A.nbf = NK7(q.notBefore, J);
      } catch (X) {
        return H(X);
      }
      if (typeof A.nbf > "u") return H(Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
    if (typeof q.expiresIn < "u" && typeof A === "object") {
      try {
        A.exp = NK7(q.expiresIn, J);
      } catch (X) {
        return H(X);
      }
      if (typeof A.exp > "u") return H(Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
    Object.keys(EK7).forEach(function (X) {
      let $ = EK7[X];
      if (typeof q[X] < "u") {
        if (typeof A[$] < "u") return H(Error('Bad "options.' + X + '" option. The payload already has an "' + $ + '" property.'));
        A[$] = q[X];
      }
    });
    let O = q.encoding || "utf8";
    if (typeof Y === "function") Y = Y && JYY(Y), TK7.createSign({
      header: w,
      privateKey: K,
      payload: A,
      encoding: O
    }).once("error", Y).once("done", function (X) {
      if (!q.allowInsecureKeySizes && /^(?:RS|PS)/.test(w.alg) && X.length < 256) return Y(Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${w.alg}`));
      Y(null, X);
    });else {
      let X = TK7.sign({
        header: w,
        payload: A,
        secret: K,
        encoding: O
      });
      if (!q.allowInsecureKeySizes && /^(?:RS|PS)/.test(w.alg) && X.length < 256) throw Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${w.alg}`);
      return X;
    }
  };
});

// Register to shared state
__$.yK7 = yK7;
