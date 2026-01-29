// Module: zs4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zs4 = v(qs4 => {
  Object.defineProperty(qs4, "__esModule", {
    value: !0
  });
  qs4.UrlSubjectTokenSupplier = void 0;
  class Ks4 {
    constructor(A) {
      this.url = A.url, this.formatType = A.formatType, this.subjectTokenFieldName = A.subjectTokenFieldName, this.headers = A.headers, this.additionalGaxiosOptions = A.additionalGaxiosOptions;
    }
    async getSubjectToken(A) {
      let K = {
          ...this.additionalGaxiosOptions,
          url: this.url,
          method: "GET",
          headers: this.headers,
          responseType: this.formatType
        },
        q;
      if (this.formatType === "text") q = (await A.transporter.request(K)).data;else if (this.formatType === "json" && this.subjectTokenFieldName) q = (await A.transporter.request(K)).data[this.subjectTokenFieldName];
      if (!q) throw Error("Unable to parse the subject_token from the credential_source URL");
      return q;
    }
  }
  qs4.UrlSubjectTokenSupplier = Ks4;
});

// Register to shared state
__$.zs4 = zs4;
