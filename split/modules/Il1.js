// Module: Il1
// Dependencies: oJA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Il1 = v(uu8 => {
  Object.defineProperty(uu8, "__esModule", {
    value: !0
  });
  uu8.ChecksumStream = void 0;
  var b$5 = __$.oJA(),
    x$5 = CA("stream");
  class xu8 extends x$5.Duplex {
    expectedChecksum;
    checksumSourceLocation;
    checksum;
    source;
    base64Encoder;
    constructor({
      expectedChecksum: A,
      checksum: K,
      source: q,
      checksumSourceLocation: Y,
      base64Encoder: z
    }) {
      super();
      if (typeof q.pipe === "function") this.source = q;else throw Error(`@smithy/util-stream: unsupported source type ${q?.constructor?.name ?? q} in ChecksumStream.`);
      this.base64Encoder = z ?? b$5.toBase64, this.expectedChecksum = A, this.checksum = K, this.checksumSourceLocation = Y, this.source.pipe(this);
    }
    _read(A) {}
    _write(A, K, q) {
      try {
        this.checksum.update(A), this.push(A);
      } catch (Y) {
        return q(Y);
      }
      return q();
    }
    async _final(A) {
      try {
        let K = await this.checksum.digest(),
          q = this.base64Encoder(K);
        if (this.expectedChecksum !== q) return A(Error(`Checksum mismatch: expected "${this.expectedChecksum}" but received "${q}" in response header "${this.checksumSourceLocation}".`));
      } catch (K) {
        return A(K);
      }
      return this.push(null), A();
    }
  }
  uu8.ChecksumStream = xu8;
});

// Register to shared state
__$.Il1 = Il1;
