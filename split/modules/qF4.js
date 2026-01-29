// Module: qF4
// Dependencies: dX

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qF4 = v(KF4 => {
  Object.defineProperty(KF4, "__esModule", {
    value: !0
  });
  KF4.propertyProviderChain = KF4.createCredentialChain = void 0;
  var Rh9 = __$.dX(),
    yh9 = (...A) => {
      let K = -1,
        Y = Object.assign(async z => {
          let w = await KF4.propertyProviderChain(...A)(z);
          if (!w.expiration && K !== -1) w.expiration = new Date(Date.now() + K);
          return w;
        }, {
          expireAfter(z) {
            if (z < 300000) throw Error("@aws-sdk/credential-providers - createCredentialChain(...).expireAfter(ms) may not be called with a duration lower than five minutes.");
            return K = z, Y;
          }
        });
      return Y;
    };
  KF4.createCredentialChain = yh9;
  var Ih9 = (...A) => async K => {
    if (A.length === 0) throw new Rh9.ProviderError("No providers in chain", {
      tryNextLink: !1
    });
    let q;
    for (let Y of A) try {
      return await Y(K);
    } catch (z) {
      if (q = z, z?.tryNextLink) continue;
      throw z;
    }
    throw q;
  };
  KF4.propertyProviderChain = Ih9;
});

// Register to shared state
__$.qF4 = qF4;
