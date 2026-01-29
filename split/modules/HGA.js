// Module: HGA
// Dependencies: DC, RM, V5

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var HGA = k(() => {
  __$.DC(); /*! @azure/msal-common v15.13.1 2025-10-29 */
  __$.RM = class RM extends __$.V5 {
    constructor(A, K, q, Y, z) {
      super(A, K, q);
      this.name = "ServerError", this.errorNo = Y, this.status = z, Object.setPrototypeOf(this, __$.RM.prototype);
    }
  };
});

// Register to shared state
__$.HGA = HGA;
