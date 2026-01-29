// Module: r77
// Dependencies: OxA, z$6, w$6, Y$6, H$6, N$6, T$6, wJ1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var r77 = v((Ggw, n77) => {
  var wH = __$.OxA(),
    w3Y = __$.z$6(),
    i77 = __$.w$6(),
    H3Y = __$.Y$6(),
    J3Y = __$.H$6(),
    O3Y = __$.N$6(),
    X3Y = __$.T$6(),
    $3Y = __$.wJ1(),
    {
      KeyObject: _3Y,
      createSecretKey: G3Y,
      createPublicKey: Z3Y
    } = CA("crypto"),
    v$6 = ["RS256", "RS384", "RS512"],
    W3Y = ["ES256", "ES384", "ES512"],
    E$6 = ["RS256", "RS384", "RS512"],
    D3Y = ["HS256", "HS384", "HS512"];
  if (X3Y) v$6.splice(v$6.length, 0, "PS256", "PS384", "PS512"), E$6.splice(E$6.length, 0, "PS256", "PS384", "PS512");
  n77.exports = function (A, K, q, Y) {
    if (typeof q === "function" && !Y) Y = q, q = {};
    if (!q) q = {};
    q = Object.assign({}, q);
    let z;
    if (Y) z = Y;else z = function ($, _) {
      if ($) throw $;
      return _;
    };
    if (q.clockTimestamp && typeof q.clockTimestamp !== "number") return z(new wH("clockTimestamp must be a number"));
    if (q.nonce !== void 0 && (typeof q.nonce !== "string" || q.nonce.trim() === "")) return z(new wH("nonce must be a non-empty string"));
    if (q.allowInvalidAsymmetricKeyTypes !== void 0 && typeof q.allowInvalidAsymmetricKeyTypes !== "boolean") return z(new wH("allowInvalidAsymmetricKeyTypes must be a boolean"));
    let w = q.clockTimestamp || Math.floor(Date.now() / 1000);
    if (!A) return z(new wH("jwt must be provided"));
    if (typeof A !== "string") return z(new wH("jwt must be a string"));
    let H = A.split(".");
    if (H.length !== 3) return z(new wH("jwt malformed"));
    let J;
    try {
      J = H3Y(A, {
        complete: !0
      });
    } catch ($) {
      return z($);
    }
    if (!J) return z(new wH("invalid token"));
    let O = J.header,
      X;
    if (typeof K === "function") {
      if (!Y) return z(new wH("verify must be called asynchronous if secret or public key is provided as a callback"));
      X = K;
    } else X = function ($, _) {
      return _(null, K);
    };
    return X(O, function ($, _) {
      if ($) return z(new wH("error in secret or public key callback: " + $.message));
      let G = H[2].trim() !== "";
      if (!G && _) return z(new wH("jwt signature is required"));
      if (G && !_) return z(new wH("secret or public key must be provided"));
      if (!G && !q.algorithms) return z(new wH('please specify "none" in "algorithms" to verify unsigned tokens'));
      if (_ != null && !(_ instanceof _3Y)) try {
        _ = Z3Y(_);
      } catch (D) {
        try {
          _ = G3Y(typeof _ === "string" ? Buffer.from(_) : _);
        } catch (j) {
          return z(new wH("secretOrPublicKey is not valid key material"));
        }
      }
      if (!q.algorithms) if (_.type === "secret") q.algorithms = D3Y;else if (["rsa", "rsa-pss"].includes(_.asymmetricKeyType)) q.algorithms = E$6;else if (_.asymmetricKeyType === "ec") q.algorithms = W3Y;else q.algorithms = v$6;
      if (q.algorithms.indexOf(J.header.alg) === -1) return z(new wH("invalid algorithm"));
      if (O.alg.startsWith("HS") && _.type !== "secret") return z(new wH(`secretOrPublicKey must be a symmetric key when using ${O.alg}`));else if (/^(?:RS|PS|ES)/.test(O.alg) && _.type !== "public") return z(new wH(`secretOrPublicKey must be an asymmetric key when using ${O.alg}`));
      if (!q.allowInvalidAsymmetricKeyTypes) try {
        O3Y(O.alg, _);
      } catch (D) {
        return z(D);
      }
      let Z;
      try {
        Z = $3Y.verify(A, J.header.alg, _);
      } catch (D) {
        return z(D);
      }
      if (!Z) return z(new wH("invalid signature"));
      let W = J.payload;
      if (typeof W.nbf < "u" && !q.ignoreNotBefore) {
        if (typeof W.nbf !== "number") return z(new wH("invalid nbf value"));
        if (W.nbf > w + (q.clockTolerance || 0)) return z(new w3Y("jwt not active", new Date(W.nbf * 1000)));
      }
      if (typeof W.exp < "u" && !q.ignoreExpiration) {
        if (typeof W.exp !== "number") return z(new wH("invalid exp value"));
        if (w >= W.exp + (q.clockTolerance || 0)) return z(new i77("jwt expired", new Date(W.exp * 1000)));
      }
      if (q.audience) {
        let D = Array.isArray(q.audience) ? q.audience : [q.audience];
        if (!(Array.isArray(W.aud) ? W.aud : [W.aud]).some(function (P) {
          return D.some(function (f) {
            return f instanceof RegExp ? f.test(P) : f === P;
          });
        })) return z(new wH("jwt audience invalid. expected: " + D.join(" or ")));
      }
      if (q.issuer) {
        if (typeof q.issuer === "string" && W.iss !== q.issuer || Array.isArray(q.issuer) && q.issuer.indexOf(W.iss) === -1) return z(new wH("jwt issuer invalid. expected: " + q.issuer));
      }
      if (q.subject) {
        if (W.sub !== q.subject) return z(new wH("jwt subject invalid. expected: " + q.subject));
      }
      if (q.jwtid) {
        if (W.jti !== q.jwtid) return z(new wH("jwt jwtid invalid. expected: " + q.jwtid));
      }
      if (q.nonce) {
        if (W.nonce !== q.nonce) return z(new wH("jwt nonce invalid. expected: " + q.nonce));
      }
      if (q.maxAge) {
        if (typeof W.iat !== "number") return z(new wH("iat required when maxAge is specified"));
        let D = J3Y(q.maxAge, W.iat);
        if (typeof D > "u") return z(new wH('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        if (w >= D + (q.clockTolerance || 0)) return z(new i77("maxAge exceeded", new Date(D * 1000)));
      }
      if (q.complete === !0) {
        let D = J.signature;
        return z(null, {
          header: O,
          payload: W,
          signature: D
        });
      }
      return z(null, W);
    });
  };
});

// Register to shared state
__$.r77 = r77;
