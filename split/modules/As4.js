// Module: As4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var As4 = v(ta4 => {
  var DJ6, jJ6, MJ6;
  Object.defineProperty(ta4, "__esModule", {
    value: !0
  });
  ta4.FileSubjectTokenSupplier = void 0;
  var PJ6 = CA("util"),
    VJ6 = CA("fs"),
    Te9 = (0, PJ6.promisify)((DJ6 = VJ6.readFile) !== null && DJ6 !== void 0 ? DJ6 : () => {}),
    ve9 = (0, PJ6.promisify)((jJ6 = VJ6.realpath) !== null && jJ6 !== void 0 ? jJ6 : () => {}),
    Ee9 = (0, PJ6.promisify)((MJ6 = VJ6.lstat) !== null && MJ6 !== void 0 ? MJ6 : () => {});
  class sa4 {
    constructor(A) {
      this.filePath = A.filePath, this.formatType = A.formatType, this.subjectTokenFieldName = A.subjectTokenFieldName;
    }
    async getSubjectToken(A) {
      let K = this.filePath;
      try {
        if (K = await ve9(K), !(await Ee9(K)).isFile()) throw Error();
      } catch (z) {
        if (z instanceof Error) z.message = `The file at ${K} does not exist, or it is not a file. ${z.message}`;
        throw z;
      }
      let q,
        Y = await Te9(K, {
          encoding: "utf8"
        });
      if (this.formatType === "text") q = Y;else if (this.formatType === "json" && this.subjectTokenFieldName) q = JSON.parse(Y)[this.subjectTokenFieldName];
      if (!q) throw Error("Unable to parse the subject_token from the credential_source file");
      return q;
    }
  }
  ta4.FileSubjectTokenSupplier = sa4;
});

// Register to shared state
__$.As4 = As4;
