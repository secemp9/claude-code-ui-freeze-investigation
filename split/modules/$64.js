// Module: $64
// Dependencies: gLA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $64 = v(Xf3 => {
  var QLA = __$.gLA();
  function Hf3(A) {
    let K = 0,
      q = 0,
      Y = null,
      z = null,
      w = J => {
        if (typeof J !== "number") throw Error("Attempted to allocate an event message where size was not a number: " + J);
        K = J, q = 4, Y = new Uint8Array(J), new DataView(Y.buffer).setUint32(0, J, !1);
      },
      H = async function* () {
        let J = A[Symbol.asyncIterator]();
        while (!0) {
          let {
            value: O,
            done: X
          } = await J.next();
          if (X) {
            if (!K) return;else if (K === q) yield Y;else throw Error("Truncated event message received.");
            return;
          }
          let $ = O.length,
            _ = 0;
          while (_ < $) {
            if (!Y) {
              let Z = $ - _;
              if (!z) z = new Uint8Array(4);
              let W = Math.min(4 - q, Z);
              if (z.set(O.slice(_, _ + W), q), q += W, _ += W, q < 4) break;
              w(new DataView(z.buffer).getUint32(0, !1)), z = null;
            }
            let G = Math.min(K - q, $ - _);
            if (Y.set(O.slice(_, _ + G), q), q += G, _ += G, K && K === q) yield Y, Y = null, K = 0, q = 0;
          }
        }
      };
    return {
      [Symbol.asyncIterator]: H
    };
  }
  function Jf3(A, K) {
    return async function (q) {
      let {
        value: Y
      } = q.headers[":message-type"];
      if (Y === "error") {
        let z = Error(q.headers[":error-message"].value || "UnknownError");
        throw z.name = q.headers[":error-code"].value, z;
      } else if (Y === "exception") {
        let z = q.headers[":exception-type"].value,
          w = {
            [z]: q
          },
          H = await A(w);
        if (H.$unknown) {
          let J = Error(K(q.body));
          throw J.name = z, J;
        }
        throw H[z];
      } else if (Y === "event") {
        let z = {
            [q.headers[":event-type"].value]: q
          },
          w = await A(z);
        if (w.$unknown) return;
        return w;
      } else throw Error(`Unrecognizable event type: ${q.headers[":event-type"].value}`);
    };
  }
  class bA6 {
    eventStreamCodec;
    utfEncoder;
    constructor({
      utf8Encoder: A,
      utf8Decoder: K
    }) {
      this.eventStreamCodec = new QLA.EventStreamCodec(A, K), this.utfEncoder = A;
    }
    deserialize(A, K) {
      let q = Hf3(A);
      return new QLA.SmithyMessageDecoderStream({
        messageStream: new QLA.MessageDecoderStream({
          inputStream: q,
          decoder: this.eventStreamCodec
        }),
        deserializer: Jf3(K, this.utfEncoder)
      });
    }
    serialize(A, K) {
      return new QLA.MessageEncoderStream({
        messageStream: new QLA.SmithyMessageEncoderStream({
          inputStream: A,
          serializer: K
        }),
        encoder: this.eventStreamCodec,
        includeEndFrame: !0
      });
    }
  }
  var Of3 = A => new bA6(A);
  Xf3.EventStreamMarshaller = bA6;
  Xf3.eventStreamSerdeProvider = Of3;
});

// Register to shared state
__$.$64 = $64;
