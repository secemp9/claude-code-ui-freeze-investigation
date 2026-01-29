// Module: lu8
// Dependencies: oJA, ii, pu8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lu8 = v(du8 => {
  Object.defineProperty(du8, "__esModule", {
    value: !0
  });
  du8.createChecksumStream = void 0;
  var F$5 = __$.oJA(),
    Q$5 = __$.ii(),
    U$5 = __$.pu8(),
    p$5 = ({
      expectedChecksum: A,
      checksum: K,
      source: q,
      checksumSourceLocation: Y,
      base64Encoder: z
    }) => {
      if (!(0, Q$5.isReadableStream)(q)) throw Error(`@smithy/util-stream: unsupported source type ${q?.constructor?.name ?? q} in ChecksumStream.`);
      let w = z ?? F$5.toBase64;
      if (typeof TransformStream !== "function") throw Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.");
      let H = new TransformStream({
        start() {},
        async transform(O, X) {
          K.update(O), X.enqueue(O);
        },
        async flush(O) {
          let X = await K.digest(),
            $ = w(X);
          if (A !== $) {
            let _ = Error(`Checksum mismatch: expected "${A}" but received "${$}" in response header "${Y}".`);
            O.error(_);
          } else O.terminate();
        }
      });
      q.pipeThrough(H);
      let J = H.readable;
      return Object.setPrototypeOf(J, U$5.ChecksumStream.prototype), J;
    };
  du8.createChecksumStream = p$5;
});

// Register to shared state
__$.lu8 = lu8;
