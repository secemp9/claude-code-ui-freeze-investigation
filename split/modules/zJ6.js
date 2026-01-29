// Module: zJ6
// Dependencies: eH6, _o

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zJ6 = v(Sa4 => {
  Object.defineProperty(Sa4, "__esModule", {
    value: !0
  });
  Sa4.JWTAccess = void 0;
  var ot9 = __$.eH6(),
    at9 = __$._o(),
    Ia4 = {
      alg: "RS256",
      typ: "JWT"
    };
  class YJ6 {
    constructor(A, K, q, Y) {
      this.cache = new at9.LRUCache({
        capacity: 500,
        maxAge: 3600000
      }), this.email = A, this.key = K, this.keyId = q, this.eagerRefreshThresholdMillis = Y !== null && Y !== void 0 ? Y : 300000;
    }
    getCachedKey(A, K) {
      let q = A;
      if (K && Array.isArray(K) && K.length) q = A ? `${A}_${K.join("_")}` : `${K.join("_")}`;else if (typeof K === "string") q = A ? `${A}_${K}` : K;
      if (!q) throw Error("Scopes or url must be provided");
      return q;
    }
    getRequestHeaders(A, K, q) {
      let Y = this.getCachedKey(A, q),
        z = this.cache.get(Y),
        w = Date.now();
      if (z && z.expiration - w > this.eagerRefreshThresholdMillis) return z.headers;
      let H = Math.floor(Date.now() / 1000),
        J = YJ6.getExpirationTime(H),
        O;
      if (Array.isArray(q)) q = q.join(" ");
      if (q) O = {
        iss: this.email,
        sub: this.email,
        scope: q,
        exp: J,
        iat: H
      };else O = {
        iss: this.email,
        sub: this.email,
        aud: A,
        exp: J,
        iat: H
      };
      if (K) {
        for (let Z in O) if (K[Z]) throw Error(`The '${Z}' property is not allowed when passing additionalClaims. This claim is included in the JWT by default.`);
      }
      let X = this.keyId ? {
          ...Ia4,
          kid: this.keyId
        } : Ia4,
        $ = Object.assign(O, K),
        G = {
          Authorization: `Bearer ${ot9.sign({
            header: X,
            payload: $,
            secret: this.key
          })}`
        };
      return this.cache.set(Y, {
        expiration: J * 1000,
        headers: G
      }), G;
    }
    static getExpirationTime(A) {
      return A + 3600;
    }
    fromJSON(A) {
      if (!A) throw Error("Must pass in a JSON object containing the service account auth settings.");
      if (!A.client_email) throw Error("The incoming JSON object does not contain a client_email field");
      if (!A.private_key) throw Error("The incoming JSON object does not contain a private_key field");
      this.email = A.client_email, this.key = A.private_key, this.keyId = A.private_key_id, this.projectId = A.project_id;
    }
    fromStream(A, K) {
      if (K) this.fromStreamAsync(A).then(() => K(), K);else return this.fromStreamAsync(A);
    }
    fromStreamAsync(A) {
      return new Promise((K, q) => {
        if (!A) q(Error("Must pass in a stream containing the service account auth settings."));
        let Y = "";
        A.setEncoding("utf8").on("data", z => Y += z).on("error", q).on("end", () => {
          try {
            let z = JSON.parse(Y);
            this.fromJSON(z), K();
          } catch (z) {
            q(z);
          }
        });
      });
    }
  }
  Sa4.JWTAccess = YJ6;
});

// Register to shared state
__$.zJ6 = zJ6;
