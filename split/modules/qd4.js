// Module: qd4
// Dependencies: op4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qd4 = v((Yfw, Kd4) => {
  var {
      defineProperty: e21,
      getOwnPropertyDescriptor: kU9,
      getOwnPropertyNames: CU9
    } = Object,
    LU9 = Object.prototype.hasOwnProperty,
    t$A = (A, K) => e21(A, "name", {
      value: K,
      configurable: !0
    }),
    RU9 = (A, K) => {
      for (var q in K) e21(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    yU9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of CU9(K)) if (!LU9.call(A, z) && z !== q) e21(A, z, {
          get: () => K[z],
          enumerable: !(Y = kU9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    IU9 = A => yU9(e21({}, "__esModule", {
      value: !0
    }), A),
    ap4 = {};
  RU9(ap4, {
    EventStreamMarshaller: () => Ad4,
    eventStreamSerdeProvider: () => SU9
  });
  Kd4.exports = IU9(ap4);
  var cSA = __$.op4();
  function sp4(A) {
    let K = 0,
      q = 0,
      Y = null,
      z = null,
      w = t$A(J => {
        if (typeof J !== "number") throw Error("Attempted to allocate an event message where size was not a number: " + J);
        K = J, q = 4, Y = new Uint8Array(J), new DataView(Y.buffer).setUint32(0, J, !1);
      }, "allocateMessage"),
      H = t$A(async function* () {
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
      }, "iterator");
    return {
      [Symbol.asyncIterator]: H
    };
  }
  t$A(sp4, "getChunkedStream");
  function tp4(A, K) {
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
  t$A(tp4, "getMessageUnmarshaller");
  var ep4 = class {
    constructor({
      utf8Encoder: K,
      utf8Decoder: q
    }) {
      this.eventStreamCodec = new cSA.EventStreamCodec(K, q), this.utfEncoder = K;
    }
    deserialize(K, q) {
      let Y = sp4(K);
      return new cSA.SmithyMessageDecoderStream({
        messageStream: new cSA.MessageDecoderStream({
          inputStream: Y,
          decoder: this.eventStreamCodec
        }),
        deserializer: tp4(q, this.utfEncoder)
      });
    }
    serialize(K, q) {
      return new cSA.MessageEncoderStream({
        messageStream: new cSA.SmithyMessageEncoderStream({
          inputStream: K,
          serializer: q
        }),
        encoder: this.eventStreamCodec,
        includeEndFrame: !0
      });
    }
  };
  t$A(ep4, "EventStreamMarshaller");
  var Ad4 = ep4,
    SU9 = t$A(A => new Ad4(A), "eventStreamSerdeProvider");
});

// Register to shared state
__$.qd4 = qd4;
