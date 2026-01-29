// Module: orA
// Dependencies: Ow, uN, nrA, ATA, tA8, RR, ZI1, WI1, gzA, i1
//   ... and 7 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var orA = k(() => {
  __$.Ow();
  __$.uN();
  __$.nrA();
  __$.ATA();
  __$.tA8();
  __$.RR();
  __$.ZI1();
  __$.WI1 = {
    transitional: __$.gzA,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function (K, q) {
      let Y = q.getContentType() || "",
        z = Y.indexOf("application/json") > -1,
        w = __$.i1.isObject(K);
      if (w && __$.i1.isHTMLForm(K)) K = new FormData(K);
      if (__$.i1.isFormData(K)) return z ? JSON.stringify(__$.rrA(K)) : K;
      if (__$.i1.isArrayBuffer(K) || __$.i1.isBuffer(K) || __$.i1.isStream(K) || __$.i1.isFile(K) || __$.i1.isBlob(K) || __$.i1.isReadableStream(K)) return K;
      if (__$.i1.isArrayBufferView(K)) return K.buffer;
      if (__$.i1.isURLSearchParams(K)) return q.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), K.toString();
      let J;
      if (w) {
        if (Y.indexOf("application/x-www-form-urlencoded") > -1) return __$.GI1(K, this.formSerializer).toString();
        if ((J = __$.i1.isFileList(K)) || Y.indexOf("multipart/form-data") > -1) {
          let O = this.env && this.env.FormData;
          return __$.yl(J ? {
            "files[]": K
          } : K, O && new O(), this.formSerializer);
        }
      }
      if (w || z) return q.setContentType("application/json", !1), __$.i1q(K);
      return K;
    }],
    transformResponse: [function (K) {
      let q = this.transitional || __$.WI1.transitional,
        Y = q && q.forcedJSONParsing,
        z = this.responseType === "json";
      if (__$.i1.isResponse(K) || __$.i1.isReadableStream(K)) return K;
      if (K && __$.i1.isString(K) && (Y && !this.responseType || z)) {
        let H = !(q && q.silentJSONParsing) && z;
        try {
          return JSON.parse(K);
        } catch (J) {
          if (H) {
            if (J.name === "SyntaxError") throw __$.a4.from(J, __$.a4.ERR_BAD_RESPONSE, this, null, this.response);
            throw J;
          }
        }
      }
      return K;
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: __$.cY.classes.FormData,
      Blob: __$.cY.classes.Blob
    },
    validateStatus: function (K) {
      return K >= 200 && K < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  __$.i1.forEach(["delete", "get", "head", "post", "put", "patch"], A => {
    __$.WI1.headers[A] = {};
  });
  __$.FzA = __$.WI1;
});

// Register to shared state
__$.orA = orA;
