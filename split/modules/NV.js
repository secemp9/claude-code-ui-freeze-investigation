// Module: NV
// Dependencies: dX, pb

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NV = v(ok5 => {
  var lCA = __$.dX(),
    rU8 = __$.pb();
  function oU8(A) {
    try {
      let K = new Set(Array.from(A.match(/([A-Z_]){3,}/g) ?? []));
      return K.delete("CONFIG"), K.delete("CONFIG_PREFIX_SEPARATOR"), K.delete("ENV"), [...K].join(", ");
    } catch (K) {
      return A;
    }
  }
  var ck5 = (A, K) => async () => {
      try {
        let q = A(process.env, K);
        if (q === void 0) throw Error();
        return q;
      } catch (q) {
        throw new lCA.CredentialsProviderError(q.message || `Not found in ENV: ${oU8(A.toString())}`, {
          logger: K?.logger
        });
      }
    },
    lk5 = (A, {
      preferredFile: K = "config",
      ...q
    } = {}) => async () => {
      let Y = rU8.getProfileName(q),
        {
          configFile: z,
          credentialsFile: w
        } = await rU8.loadSharedConfigFiles(q),
        H = w[Y] || {},
        J = z[Y] || {},
        O = K === "config" ? {
          ...H,
          ...J
        } : {
          ...J,
          ...H
        };
      try {
        let $ = A(O, K === "config" ? z : w);
        if ($ === void 0) throw Error();
        return $;
      } catch (X) {
        throw new lCA.CredentialsProviderError(X.message || `Not found in config files w/ profile [${Y}]: ${oU8(A.toString())}`, {
          logger: q.logger
        });
      }
    },
    ik5 = A => typeof A === "function",
    nk5 = A => ik5(A) ? async () => await A() : lCA.fromStatic(A),
    rk5 = ({
      environmentVariableSelector: A,
      configFileSelector: K,
      default: q
    }, Y = {}) => {
      let {
          signingName: z,
          logger: w
        } = Y,
        H = {
          signingName: z,
          logger: w
        };
      return lCA.memoize(lCA.chain(ck5(A, H), lk5(K, Y), nk5(q)));
    };
  ok5.loadConfig = rk5;
});

// Register to shared state
__$.NV = NV;
