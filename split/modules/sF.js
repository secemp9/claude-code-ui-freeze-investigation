// Module: sF
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sF = v(cx5 => {
  var po1 = CA("node:fs"),
    dx5 = A => {
      if (!A) return 0;
      if (typeof A === "string") return Buffer.byteLength(A);else if (typeof A.byteLength === "number") return A.byteLength;else if (typeof A.size === "number") return A.size;else if (typeof A.start === "number" && typeof A.end === "number") return A.end + 1 - A.start;else if (A instanceof po1.ReadStream) {
        if (A.path != null) return po1.lstatSync(A.path).size;else if (typeof A.fd === "number") return po1.fstatSync(A.fd).size;
      }
      throw Error(`Body Length computation failed for ${A}`);
    };
  cx5.calculateBodyLength = dx5;
});

// Register to shared state
__$.sF = sF;
