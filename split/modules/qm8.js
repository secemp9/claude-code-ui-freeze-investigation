// Module: qm8
// Dependencies: zT, w61, tB8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qm8 = v(Am8 => {
  Object.defineProperty(Am8, "__esModule", {
    value: !0
  });
  Am8.sdkStreamMixin = void 0;
  var KZ5 = __$.zT(),
    qZ5 = __$.w61(),
    al1 = CA("stream"),
    YZ5 = __$.tB8(),
    eB8 = "The stream has already been transformed.",
    zZ5 = A => {
      if (!(A instanceof al1.Readable)) try {
        return (0, YZ5.sdkStreamMixin)(A);
      } catch (Y) {
        let z = A?.__proto__?.constructor?.name || A;
        throw Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${z}`);
      }
      let K = !1,
        q = async () => {
          if (K) throw Error(eB8);
          return K = !0, await (0, KZ5.streamCollector)(A);
        };
      return Object.assign(A, {
        transformToByteArray: q,
        transformToString: async Y => {
          let z = await q();
          if (Y === void 0 || Buffer.isEncoding(Y)) return (0, qZ5.fromArrayBuffer)(z.buffer, z.byteOffset, z.byteLength).toString(Y);else return new TextDecoder(Y).decode(z);
        },
        transformToWebStream: () => {
          if (K) throw Error(eB8);
          if (A.readableFlowing !== null) throw Error("The stream has been consumed by other callbacks.");
          if (typeof al1.Readable.toWeb !== "function") throw Error("Readable.toWeb() is not supported. Please ensure a polyfill is available.");
          return K = !0, al1.Readable.toWeb(A);
        }
      });
    };
  Am8.sdkStreamMixin = zZ5;
});

// Register to shared state
__$.qm8 = qm8;
