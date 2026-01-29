// Module: zd1
// Dependencies: NF, rj, UE, jkA, hA1, KJA, I6A, ZV, WkA, UR
//   ... and 10 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var zd1 = k(() => {
  __$.NF();
  __$.rj();
  __$.UE();
  __$.jkA = class jkA {
    constructor(A, K, q) {
      __$.hA1.add(this), this.client = A, __$.KJA.set(this, !1), __$.I6A.set(this, !1), __$.ZV.set(this, void 0), __$.WkA.set(this, void 0), __$.UR.set(this, void 0), __$.kF.set(this, void 0), __$.yi.set(this, void 0), __$.DkA.set(this, 0), __$._7(this, __$.ZV, {
        params: {
          ...K,
          messages: structuredClone(K.messages)
        }
      }, "f"), __$._7(this, __$.WkA, {
        ...q,
        headers: __$.j5([{
          "x-stainless-helper": "BetaToolRunner"
        }, q?.headers])
      }, "f"), __$._7(this, __$.yi, __$.vy8(), "f");
    }
    async *[(__$.KJA = new WeakMap(), __$.I6A = new WeakMap(), __$.ZV = new WeakMap(), __$.WkA = new WeakMap(), __$.UR = new WeakMap(), __$.kF = new WeakMap(), __$.yi = new WeakMap(), __$.DkA = new WeakMap(), __$.hA1 = new WeakSet(), Symbol.asyncIterator)]() {
      var A;
      if (__$.x6(this, __$.KJA, "f")) throw new __$.O7("Cannot iterate over a consumed stream");
      __$._7(this, __$.KJA, !0, "f"), __$._7(this, __$.I6A, !0, "f"), __$._7(this, __$.kF, void 0, "f");
      try {
        while (!0) {
          let K;
          try {
            if (__$.x6(this, __$.ZV, "f").params.max_iterations && __$.x6(this, __$.DkA, "f") >= __$.x6(this, __$.ZV, "f").params.max_iterations) break;
            __$._7(this, __$.I6A, !1, "f"), __$._7(this, __$.UR, void 0, "f"), __$._7(this, __$.kF, void 0, "f"), __$._7(this, __$.DkA, (A = __$.x6(this, __$.DkA, "f"), A++, A), "f");
            let {
              max_iterations: q,
              ...Y
            } = __$.x6(this, __$.ZV, "f").params;
            if (Y.stream) K = this.client.beta.messages.stream({
              ...Y
            }, __$.x6(this, __$.WkA, "f")), __$._7(this, __$.UR, K.finalMessage(), "f"), __$.x6(this, __$.UR, "f").catch(() => {}), yield K;else __$._7(this, __$.UR, this.client.beta.messages.create({
              ...Y,
              stream: !1
            }, __$.x6(this, __$.WkA, "f")), "f"), yield __$.x6(this, __$.UR, "f");
            if (!__$.x6(this, __$.I6A, "f")) {
              let {
                role: w,
                content: H
              } = await __$.x6(this, __$.UR, "f");
              __$.x6(this, __$.ZV, "f").params.messages.push({
                role: w,
                content: H
              });
            }
            let z = await __$.x6(this, __$.hA1, "m", __$.Yd1).call(this, __$.x6(this, __$.ZV, "f").params.messages.at(-1));
            if (z) __$.x6(this, __$.ZV, "f").params.messages.push(z);
            if (!z && !__$.x6(this, __$.I6A, "f")) break;
          } finally {
            if (K) K.abort();
          }
        }
        if (!__$.x6(this, __$.UR, "f")) throw new __$.O7("ToolRunner concluded without a message from the server");
        __$.x6(this, __$.yi, "f").resolve(await __$.x6(this, __$.UR, "f"));
      } catch (K) {
        throw __$._7(this, __$.KJA, !1, "f"), __$.x6(this, __$.yi, "f").promise.catch(() => {}), __$.x6(this, __$.yi, "f").reject(K), __$._7(this, __$.yi, __$.vy8(), "f"), K;
      }
    }
    setMessagesParams(A) {
      if (typeof A === "function") __$.x6(this, __$.ZV, "f").params = A(__$.x6(this, __$.ZV, "f").params);else __$.x6(this, __$.ZV, "f").params = A;
      __$._7(this, __$.I6A, !0, "f"), __$._7(this, __$.kF, void 0, "f");
    }
    async generateToolResponse() {
      let A = (await __$.x6(this, __$.UR, "f")) ?? this.params.messages.at(-1);
      if (!A) return null;
      return __$.x6(this, __$.hA1, "m", __$.Yd1).call(this, A);
    }
    done() {
      return __$.x6(this, __$.yi, "f").promise;
    }
    async runUntilDone() {
      if (!__$.x6(this, __$.KJA, "f")) for await (let A of this);
      return this.done();
    }
    get params() {
      return __$.x6(this, __$.ZV, "f").params;
    }
    pushMessages(...A) {
      this.setMessagesParams(K => ({
        ...K,
        messages: [...K.messages, ...A]
      }));
    }
    then(A, K) {
      return this.runUntilDone().then(A, K);
    }
  };
  __$.Yd1 = async function (K) {
    if (__$.x6(this, __$.kF, "f") !== void 0) return __$.x6(this, __$.kF, "f");
    return __$._7(this, __$.kF, __$.y35(__$.x6(this, __$.ZV, "f").params, K), "f"), __$.x6(this, __$.kF, "f");
  };
});

// Register to shared state
__$.zd1 = zd1;
