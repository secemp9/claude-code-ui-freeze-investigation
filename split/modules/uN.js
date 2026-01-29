// Module: uN
// Dependencies: Ow, i1, bzA, yt6, It6, a4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uN = k(() => {
  __$.Ow();
  __$.i1.inherits(__$.bzA, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: __$.i1.toJSONObject(this.config),
        code: this.code,
        status: this.status
      };
    }
  });
  __$.yt6 = __$.bzA.prototype, __$.It6 = {};
  ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(A => {
    __$.It6[A] = {
      value: A
    };
  });
  Object.defineProperties(__$.bzA, __$.It6);
  Object.defineProperty(__$.yt6, "isAxiosError", {
    value: !0
  });
  __$.bzA.from = (A, K, q, Y, z, w) => {
    let H = Object.create(__$.yt6);
    return __$.i1.toFlatObject(A, H, function (O) {
      return O !== Error.prototype;
    }, J => {
      return J !== "isAxiosError";
    }), __$.bzA.call(H, A.message, K, q, Y, z), H.cause = A, H.name = A.name, w && Object.assign(H, w), H;
  };
  __$.a4 = __$.bzA;
});

// Register to shared state
__$.uN = uN;
