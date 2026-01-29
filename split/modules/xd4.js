// Module: xd4
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xd4 = v(hd4 => {
  Object.defineProperty(hd4, "__esModule", {
    value: !0
  });
  hd4.getAwsChunkedEncodingStream = void 0;
  var Vp9 = CA("stream"),
    fp9 = (A, K) => {
      let {
          base64Encoder: q,
          bodyLengthChecker: Y,
          checksumAlgorithmFn: z,
          checksumLocationName: w,
          streamHasher: H
        } = K,
        J = q !== void 0 && z !== void 0 && w !== void 0 && H !== void 0,
        O = J ? H(z, A) : void 0,
        X = new Vp9.Readable({
          read: () => {}
        });
      return A.on("data", $ => {
        let _ = Y($) || 0;
        X.push(`${_.toString(16)}\r
`), X.push($), X.push(`\r
`);
      }), A.on("end", async () => {
        if (X.push(`0\r
`), J) {
          let $ = q(await O);
          X.push(`${w}:${$}\r
`), X.push(`\r
`);
        }
        X.push(null);
      }), X;
    };
  hd4.getAwsChunkedEncodingStream = fp9;
});

// Register to shared state
__$.xd4 = xd4;
