// Module: G06
// Dependencies: H$, zX, i_A, t6, v3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var G06 = k(() => {
  __$.H$();
  __$.zX(); /*! @azure/msal-common v15.13.1 2025-10-29 */
  __$.i_A = {
    createNewGuid: () => {
      throw __$.t6(__$.v3);
    },
    base64Decode: () => {
      throw __$.t6(__$.v3);
    },
    base64Encode: () => {
      throw __$.t6(__$.v3);
    },
    base64UrlEncode: () => {
      throw __$.t6(__$.v3);
    },
    encodeKid: () => {
      throw __$.t6(__$.v3);
    },
    async getPublicKeyThumbprint() {
      throw __$.t6(__$.v3);
    },
    async removeTokenBindingKey() {
      throw __$.t6(__$.v3);
    },
    async clearKeystore() {
      throw __$.t6(__$.v3);
    },
    async signJwt() {
      throw __$.t6(__$.v3);
    },
    async hashString() {
      throw __$.t6(__$.v3);
    }
  };
});

// Register to shared state
__$.G06 = G06;
