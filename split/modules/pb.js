// Module: pb
// Dependencies: zr1, wr1, mU8, gU8, UU8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pb = v(A8A => {
  var cCA = __$.zr1(),
    pU8 = __$.wr1(),
    Wr1 = __$.mU8(),
    e61 = CA("path"),
    A81 = __$.gU8(),
    $OA = __$.UU8(),
    cU8 = "AWS_PROFILE",
    lU8 = "default",
    vk5 = A => A.profile || process.env[cU8] || lU8,
    e6A = ".",
    Ek5 = A => Object.entries(A).filter(([K]) => {
      let q = K.indexOf(e6A);
      if (q === -1) return !1;
      return Object.values(A81.IniSectionType).includes(K.substring(0, q));
    }).reduce((K, [q, Y]) => {
      let z = q.indexOf(e6A),
        w = q.substring(0, z) === A81.IniSectionType.PROFILE ? q.substring(z + 1) : q;
      return K[w] = Y, K;
    }, {
      ...(A.default && {
        default: A.default
      })
    }),
    kk5 = "AWS_CONFIG_FILE",
    iU8 = () => process.env[kk5] || e61.join(cCA.getHomeDir(), ".aws", "config"),
    Ck5 = "AWS_SHARED_CREDENTIALS_FILE",
    Lk5 = () => process.env[Ck5] || e61.join(cCA.getHomeDir(), ".aws", "credentials"),
    Rk5 = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/,
    yk5 = ["__proto__", "profile __proto__"],
    Dr1 = A => {
      let K = {},
        q,
        Y;
      for (let z of A.split(/\r?\n/)) {
        let w = z.split(/(^|\s)[;#]/)[0].trim();
        if (w[0] === "[" && w[w.length - 1] === "]") {
          q = void 0, Y = void 0;
          let J = w.substring(1, w.length - 1),
            O = Rk5.exec(J);
          if (O) {
            let [, X,, $] = O;
            if (Object.values(A81.IniSectionType).includes(X)) q = [X, $].join(e6A);
          } else q = J;
          if (yk5.includes(J)) throw Error(`Found invalid profile name "${J}"`);
        } else if (q) {
          let J = w.indexOf("=");
          if (![0, -1].includes(J)) {
            let [O, X] = [w.substring(0, J).trim(), w.substring(J + 1).trim()];
            if (X === "") Y = O;else {
              if (Y && z.trimStart() === z) Y = void 0;
              K[q] = K[q] || {};
              let $ = Y ? [Y, O].join(e6A) : O;
              K[q][$] = X;
            }
          }
        }
      }
      return K;
    },
    dU8 = () => ({}),
    nU8 = async (A = {}) => {
      let {
          filepath: K = Lk5(),
          configFilepath: q = iU8()
        } = A,
        Y = cCA.getHomeDir(),
        z = "~/",
        w = K;
      if (K.startsWith("~/")) w = e61.join(Y, K.slice(2));
      let H = q;
      if (q.startsWith("~/")) H = e61.join(Y, q.slice(2));
      let J = await Promise.all([$OA.readFile(H, {
        ignoreCache: A.ignoreCache
      }).then(Dr1).then(Ek5).catch(dU8), $OA.readFile(w, {
        ignoreCache: A.ignoreCache
      }).then(Dr1).catch(dU8)]);
      return {
        configFile: J[0],
        credentialsFile: J[1]
      };
    },
    Ik5 = A => Object.entries(A).filter(([K]) => K.startsWith(A81.IniSectionType.SSO_SESSION + e6A)).reduce((K, [q, Y]) => ({
      ...K,
      [q.substring(q.indexOf(e6A) + 1)]: Y
    }), {}),
    Sk5 = () => ({}),
    hk5 = async (A = {}) => $OA.readFile(A.configFilepath ?? iU8()).then(Dr1).then(Ik5).catch(Sk5),
    bk5 = (...A) => {
      let K = {};
      for (let q of A) for (let [Y, z] of Object.entries(q)) if (K[Y] !== void 0) Object.assign(K[Y], z);else K[Y] = z;
      return K;
    },
    xk5 = async A => {
      let K = await nU8(A);
      return bk5(K.configFile, K.credentialsFile);
    },
    uk5 = {
      getFileRecord() {
        return $OA.fileIntercept;
      },
      interceptFile(A, K) {
        $OA.fileIntercept[A] = Promise.resolve(K);
      },
      getTokenRecord() {
        return Wr1.tokenIntercept;
      },
      interceptToken(A, K) {
        Wr1.tokenIntercept[A] = K;
      }
    };
  Object.defineProperty(A8A, "getSSOTokenFromFile", {
    enumerable: !0,
    get: function () {
      return Wr1.getSSOTokenFromFile;
    }
  });
  Object.defineProperty(A8A, "readFile", {
    enumerable: !0,
    get: function () {
      return $OA.readFile;
    }
  });
  A8A.CONFIG_PREFIX_SEPARATOR = e6A;
  A8A.DEFAULT_PROFILE = lU8;
  A8A.ENV_PROFILE = cU8;
  A8A.externalDataInterceptor = uk5;
  A8A.getProfileName = vk5;
  A8A.loadSharedConfigFiles = nU8;
  A8A.loadSsoSessionData = hk5;
  A8A.parseKnownFiles = xk5;
  Object.keys(cCA).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(A8A, A)) Object.defineProperty(A8A, A, {
      enumerable: !0,
      get: function () {
        return cCA[A];
      }
    });
  });
  Object.keys(pU8).forEach(function (A) {
    if (A !== "default" && !Object.prototype.hasOwnProperty.call(A8A, A)) Object.defineProperty(A8A, A, {
      enumerable: !0,
      get: function () {
        return pU8[A];
      }
    });
  });
});

// Register to shared state
__$.pb = pb;
