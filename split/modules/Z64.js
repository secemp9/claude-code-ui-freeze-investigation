// Module: Z64
// Dependencies: $64

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Z64 = v(Df3 => {
  var Gf3 = __$.$64(),
    _64 = A => ({
      [Symbol.asyncIterator]: async function* () {
        let K = A.getReader();
        try {
          while (!0) {
            let {
              done: q,
              value: Y
            } = await K.read();
            if (q) return;
            yield Y;
          }
        } finally {
          K.releaseLock();
        }
      }
    }),
    G64 = A => {
      let K = A[Symbol.asyncIterator]();
      return new ReadableStream({
        async pull(q) {
          let {
            done: Y,
            value: z
          } = await K.next();
          if (Y) return q.close();
          q.enqueue(z);
        }
      });
    };
  class xA6 {
    universalMarshaller;
    constructor({
      utf8Encoder: A,
      utf8Decoder: K
    }) {
      this.universalMarshaller = new Gf3.EventStreamMarshaller({
        utf8Decoder: K,
        utf8Encoder: A
      });
    }
    deserialize(A, K) {
      let q = Zf3(A) ? _64(A) : A;
      return this.universalMarshaller.deserialize(q, K);
    }
    serialize(A, K) {
      let q = this.universalMarshaller.serialize(A, K);
      return typeof ReadableStream === "function" ? G64(q) : q;
    }
  }
  var Zf3 = A => typeof ReadableStream === "function" && A instanceof ReadableStream,
    Wf3 = A => new xA6(A);
  Df3.EventStreamMarshaller = xA6;
  Df3.eventStreamSerdeProvider = Wf3;
  Df3.iterableToReadableStream = G64;
  Df3.readableStreamtoIterable = _64;
});

// Register to shared state
__$.Z64 = Z64;
