// Module: tB8
// Dependencies: cB8, oJA, iB8, _z, ii

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var tB8 = v(aB8 => {
  Object.defineProperty(aB8, "__esModule", {
    value: !0
  });
  aB8.sdkStreamMixin = void 0;
  var aG5 = __$.cB8(),
    sG5 = __$.oJA(),
    tG5 = __$.iB8(),
    eG5 = __$._z(),
    nB8 = __$.ii(),
    rB8 = "The stream has already been transformed.",
    AZ5 = A => {
      if (!oB8(A) && !(0, nB8.isReadableStream)(A)) {
        let z = A?.__proto__?.constructor?.name || A;
        throw Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${z}`);
      }
      let K = !1,
        q = async () => {
          if (K) throw Error(rB8);
          return K = !0, await (0, aG5.streamCollector)(A);
        },
        Y = z => {
          if (typeof z.stream !== "function") throw Error(`Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.
If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body`);
          return z.stream();
        };
      return Object.assign(A, {
        transformToByteArray: q,
        transformToString: async z => {
          let w = await q();
          if (z === "base64") return (0, sG5.toBase64)(w);else if (z === "hex") return (0, tG5.toHex)(w);else if (z === void 0 || z === "utf8" || z === "utf-8") return (0, eG5.toUtf8)(w);else if (typeof TextDecoder === "function") return new TextDecoder(z).decode(w);else throw Error("TextDecoder is not available, please make sure polyfill is provided.");
        },
        transformToWebStream: () => {
          if (K) throw Error(rB8);
          if (K = !0, oB8(A)) return Y(A);else if ((0, nB8.isReadableStream)(A)) return A;else throw Error(`Cannot transform payload to web stream, got ${A}`);
        }
      });
    };
  aB8.sdkStreamMixin = AZ5;
  var oB8 = A => typeof Blob === "function" && A instanceof Blob;
});

// Register to shared state
__$.tB8 = tB8;
