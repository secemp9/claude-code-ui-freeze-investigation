// Module: q84
// Dependencies: K84

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var q84 = v(rT3 => {
  var cT3 = __$.K84(),
    lT3 = CA("stream");
  async function* iT3(A) {
    let K = !1,
      q = !1,
      Y = [];
    A.on("error", z => {
      if (!K) K = !0;
      if (z) throw z;
    }), A.on("data", z => {
      Y.push(z);
    }), A.on("end", () => {
      K = !0;
    });
    while (!q) {
      let z = await new Promise(w => setTimeout(() => w(Y.shift()), 0));
      if (z) yield z;
      q = K && Y.length === 0;
    }
  }
  class z16 {
    universalMarshaller;
    constructor({
      utf8Encoder: A,
      utf8Decoder: K
    }) {
      this.universalMarshaller = new cT3.EventStreamMarshaller({
        utf8Decoder: K,
        utf8Encoder: A
      });
    }
    deserialize(A, K) {
      let q = typeof A[Symbol.asyncIterator] === "function" ? A : iT3(A);
      return this.universalMarshaller.deserialize(q, K);
    }
    serialize(A, K) {
      return lT3.Readable.from(this.universalMarshaller.serialize(A, K));
    }
  }
  var nT3 = A => new z16(A);
  rT3.EventStreamMarshaller = z16;
  rT3.eventStreamSerdeProvider = nT3;
});

// Register to shared state
__$.q84 = q84;
