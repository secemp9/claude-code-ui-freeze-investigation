// Module: Oc4
// Dependencies: zc4, N8A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Oc4 = v(Hc4 => {
  Object.defineProperty(Hc4, "__esModule", {
    value: !0
  });
  Hc4.sdkStreamMixin = void 0;
  var qd9 = __$.zc4(),
    Yd9 = __$.N8A(),
    ww6 = CA("stream"),
    zd9 = CA("util"),
    wc4 = "The stream has already been transformed.",
    wd9 = A => {
      var K, q;
      if (!(A instanceof ww6.Readable)) {
        let w = ((q = (K = A === null || A === void 0 ? void 0 : A.__proto__) === null || K === void 0 ? void 0 : K.constructor) === null || q === void 0 ? void 0 : q.name) || A;
        throw Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${w}`);
      }
      let Y = !1,
        z = async () => {
          if (Y) throw Error(wc4);
          return Y = !0, await (0, qd9.streamCollector)(A);
        };
      return Object.assign(A, {
        transformToByteArray: z,
        transformToString: async w => {
          let H = await z();
          if (w === void 0 || Buffer.isEncoding(w)) return (0, Yd9.fromArrayBuffer)(H.buffer, H.byteOffset, H.byteLength).toString(w);else return new zd9.TextDecoder(w).decode(H);
        },
        transformToWebStream: () => {
          if (Y) throw Error(wc4);
          if (A.readableFlowing !== null) throw Error("The stream has been consumed by other callbacks.");
          if (typeof ww6.Readable.toWeb !== "function") throw Error("Readable.toWeb() is not supported. Please make sure you are using Node.js >= 17.0.0, or polyfill is available.");
          return Y = !0, ww6.Readable.toWeb(A);
        }
      });
    };
  Hc4.sdkStreamMixin = wd9;
});

// Register to shared state
__$.Oc4 = Oc4;
