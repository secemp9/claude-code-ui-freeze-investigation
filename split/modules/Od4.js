// Module: Od4
// Dependencies: qd4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Od4 = v((zfw, Jd4) => {
  var {
      defineProperty: Az1,
      getOwnPropertyDescriptor: hU9,
      getOwnPropertyNames: bU9
    } = Object,
    xU9 = Object.prototype.hasOwnProperty,
    nz6 = (A, K) => Az1(A, "name", {
      value: K,
      configurable: !0
    }),
    uU9 = (A, K) => {
      for (var q in K) Az1(A, q, {
        get: K[q],
        enumerable: !0
      });
    },
    BU9 = (A, K, q, Y) => {
      if (K && typeof K === "object" || typeof K === "function") {
        for (let z of bU9(K)) if (!xU9.call(A, z) && z !== q) Az1(A, z, {
          get: () => K[z],
          enumerable: !(Y = hU9(K, z)) || Y.enumerable
        });
      }
      return A;
    },
    mU9 = A => BU9(Az1({}, "__esModule", {
      value: !0
    }), A),
    Yd4 = {};
  uU9(Yd4, {
    EventStreamMarshaller: () => Hd4,
    eventStreamSerdeProvider: () => QU9
  });
  Jd4.exports = mU9(Yd4);
  var gU9 = __$.qd4(),
    FU9 = CA("stream");
  async function* zd4(A) {
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
  nz6(zd4, "readabletoIterable");
  var wd4 = class {
    constructor({
      utf8Encoder: K,
      utf8Decoder: q
    }) {
      this.universalMarshaller = new gU9.EventStreamMarshaller({
        utf8Decoder: q,
        utf8Encoder: K
      });
    }
    deserialize(K, q) {
      let Y = typeof K[Symbol.asyncIterator] === "function" ? K : zd4(K);
      return this.universalMarshaller.deserialize(Y, q);
    }
    serialize(K, q) {
      return FU9.Readable.from(this.universalMarshaller.serialize(K, q));
    }
  };
  nz6(wd4, "EventStreamMarshaller");
  var Hd4 = wd4,
    QU9 = nz6(A => new Hd4(A), "eventStreamSerdeProvider");
});

// Register to shared state
__$.Od4 = Od4;
