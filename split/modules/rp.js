// Module: rp
// Dependencies: Xj, I5A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rp = v(zS7 => {
  Object.defineProperty(zS7, "__esModule", {
    value: !0
  });
  zS7._setObjectInStorage = zS7._getObjectFromStorage = zS7.Storage = void 0;
  var PaY = __$.Xj(),
    VaY = __$.I5A(),
    PgA = {},
    mT6 = {
      isReady: () => !0,
      isReadyResolver: () => null,
      getProviderName: () => "InMemory",
      getItem: A => PgA[A] ? PgA[A] : null,
      setItem: (A, K) => {
        PgA[A] = K;
      },
      removeItem: A => {
        delete PgA[A];
      },
      getAllKeys: () => Object.keys(PgA)
    },
    PW1 = null;
  try {
    let A = (0, VaY._getWindowSafe)();
    if (A && A.localStorage && typeof A.localStorage.getItem === "function") PW1 = {
      isReady: () => !0,
      isReadyResolver: () => null,
      getProviderName: () => "LocalStorage",
      getItem: K => A.localStorage.getItem(K),
      setItem: (K, q) => A.localStorage.setItem(K, q),
      removeItem: K => A.localStorage.removeItem(K),
      getAllKeys: () => Object.keys(A.localStorage)
    };
  } catch (A) {
    PaY.Log.warn("Failed to setup localStorageProvider.");
  }
  var BT6 = PW1 !== null && PW1 !== void 0 ? PW1 : mT6,
    NB = BT6;
  function faY(A) {
    try {
      return A();
    } catch (K) {
      if (K instanceof Error && K.name === "SecurityError") return zS7.Storage._setProvider(mT6), null;
      throw K;
    }
  }
  zS7.Storage = {
    isReady: () => NB.isReady(),
    isReadyResolver: () => NB.isReadyResolver(),
    getProviderName: () => NB.getProviderName(),
    getItem: A => faY(() => NB.getItem(A)),
    setItem: (A, K) => NB.setItem(A, K),
    removeItem: A => NB.removeItem(A),
    getAllKeys: () => NB.getAllKeys(),
    _setProvider: A => {
      BT6 = A, NB = A;
    },
    _setDisabled: A => {
      if (A) NB = mT6;else NB = BT6;
    }
  };
  function NaY(A) {
    let K = zS7.Storage.getItem(A);
    return JSON.parse(K !== null && K !== void 0 ? K : "null");
  }
  zS7._getObjectFromStorage = NaY;
  function TaY(A, K) {
    zS7.Storage.setItem(A, JSON.stringify(K));
  }
  zS7._setObjectInStorage = TaY;
});

// Register to shared state
__$.rp = rp;
