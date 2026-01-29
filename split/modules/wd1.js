// Module: wd1
// Dependencies: rj, up1, qJA, Ci, O7, eEA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wd1 = k(() => {
  __$.rj();
  __$.up1();
  __$.qJA = class qJA {
    constructor(A, K) {
      this.iterator = A, this.controller = K;
    }
    async *decoder() {
      let A = new __$.Ci();
      for await (let K of this.iterator) for (let q of A.decode(K)) yield JSON.parse(q);
      for (let K of A.flush()) yield JSON.parse(K);
    }
    [Symbol.asyncIterator]() {
      return this.decoder();
    }
    static fromResponse(A, K) {
      if (!A.body) {
        if (K.abort(), typeof globalThis.navigator < "u" && globalThis.navigator.product === "ReactNative") throw new __$.O7("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api");
        throw new __$.O7("Attempted to iterate over a response with no body");
      }
      return new __$.qJA(__$.eEA(A.body), K);
    }
  };
});

// Register to shared state
__$.wd1 = wd1;
