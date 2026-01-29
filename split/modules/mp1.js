// Module: mp1
// Dependencies: NF, rj, up1, C6A, jA1, oj, qkA, _7, r_, O7
//   ... and 9 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mp1 = k(() => {
  __$.NF();
  __$.rj();
  __$.up1();
  __$.C6A();
  __$.jA1();
  __$.rj();
  __$.oj = class oj {
    constructor(A, K, q) {
      this.iterator = A, __$.qkA.set(this, void 0), this.controller = K, __$._7(this, __$.qkA, q, "f");
    }
    static fromSSEResponse(A, K, q) {
      let Y = !1,
        z = q ? __$.r_(q) : console;
      async function* w() {
        if (Y) throw new __$.O7("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
        Y = !0;
        let H = !1;
        try {
          for await (let J of __$.$35(A, K)) {
            if (J.event === "completion") try {
              yield JSON.parse(J.data);
            } catch (O) {
              throw z.error("Could not parse message into JSON:", J.data), z.error("From chunk:", J.raw), O;
            }
            if (J.event === "message_start" || J.event === "message_delta" || J.event === "message_stop" || J.event === "content_block_start" || J.event === "content_block_delta" || J.event === "content_block_stop") try {
              yield JSON.parse(J.data);
            } catch (O) {
              throw z.error("Could not parse message into JSON:", J.data), z.error("From chunk:", J.raw), O;
            }
            if (J.event === "ping") continue;
            if (J.event === "error") throw new __$.r7(void 0, __$.GA1(J.data) ?? J.data, void 0, A.headers);
          }
          H = !0;
        } catch (J) {
          if (__$.TF(J)) return;
          throw J;
        } finally {
          if (!H) K.abort();
        }
      }
      return new __$.oj(w, K, q);
    }
    static fromReadableStream(A, K, q) {
      let Y = !1;
      async function* z() {
        let H = new __$.Ci(),
          J = __$.eEA(A);
        for await (let O of J) for (let X of H.decode(O)) yield X;
        for (let O of H.flush()) yield O;
      }
      async function* w() {
        if (Y) throw new __$.O7("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
        Y = !0;
        let H = !1;
        try {
          for await (let J of z()) {
            if (H) continue;
            if (J) yield JSON.parse(J);
          }
          H = !0;
        } catch (J) {
          if (__$.TF(J)) return;
          throw J;
        } finally {
          if (!H) K.abort();
        }
      }
      return new __$.oj(w, K, q);
    }
    [(__$.qkA = new WeakMap(), Symbol.asyncIterator)]() {
      return this.iterator();
    }
    tee() {
      let A = [],
        K = [],
        q = this.iterator(),
        Y = z => {
          return {
            next: () => {
              if (z.length === 0) {
                let w = q.next();
                A.push(w), K.push(w);
              }
              return z.shift();
            }
          };
        };
      return [new __$.oj(() => Y(A), this.controller, __$.x6(this, __$.qkA, "f")), new __$.oj(() => Y(K), this.controller, __$.x6(this, __$.qkA, "f"))];
    }
    toReadableStream() {
      let A = this,
        K;
      return __$.bp1({
        async start() {
          K = A[Symbol.asyncIterator]();
        },
        async pull(q) {
          try {
            let {
              value: Y,
              done: z
            } = await K.next();
            if (z) return q.close();
            let w = __$.AkA(JSON.stringify(Y) + `
`);
            q.enqueue(w);
          } catch (Y) {
            q.error(Y);
          }
        },
        async cancel() {
          await K.return?.();
        }
      });
    }
  };
});

// Register to shared state
__$.mp1 = mp1;
