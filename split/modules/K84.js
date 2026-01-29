// Module: K84
// Dependencies: gLA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var K84 = v(UT3 => {
  var cLA = __$.gLA();
  function gT3(A) {
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
  function FT3(A, K) {
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
  class Y16 {
    eventStreamCodec;
    utfEncoder;
    constructor({
      utf8Encoder: A,
      utf8Decoder: K
    }) {
      this.eventStreamCodec = new cLA.EventStreamCodec(A, K), this.utfEncoder = A;
    }
    deserialize(A, K) {
      let q = gT3(A);
      return new cLA.SmithyMessageDecoderStream({
        messageStream: new cLA.MessageDecoderStream({
          inputStream: q,
          decoder: this.eventStreamCodec
        }),
        deserializer: FT3(K, this.utfEncoder)
      });
    }
    serialize(A, K) {
      return new cLA.MessageEncoderStream({
        messageStream: new cLA.SmithyMessageEncoderStream({
          inputStream: A,
          serializer: K
        }),
        encoder: this.eventStreamCodec,
        includeEndFrame: !0
      });
    }
  }
  var QT3 = A => new Y16(A);
  UT3.EventStreamMarshaller = Y16;
  UT3.eventStreamSerdeProvider = QT3;
});

// Register to shared state
__$.K84 = K84;
