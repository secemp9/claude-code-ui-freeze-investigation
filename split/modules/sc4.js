// Module: sc4
// Dependencies: EA1, y6A, sN, Uc4, tSA, nc4, oc4, Od4, Mz1, sz6
//   ... and 13 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sc4 = k(() => {
  __$.EA1();
  __$.y6A();
  __$.sN();
  __$.Uc4();
  __$.tSA();
  __$.nc4();
  __$.oc4 = o(__$.Od4(), 1), __$.Mz1 = o(__$.sz6(), 1), __$.ac4 = o(__$.k26(), 1);
  __$.Pz1 = class Pz1 extends __$.oj {
    static fromSSEResponse(A, K, q) {
      let Y = !1,
        z = q ? __$.ic4(q) : console;
      async function* w() {
        if (!A.body) throw K.abort(), new __$.O7("Attempted to iterate over a response with no body");
        let J = __$.pc4(A.body),
          O = __$.Qc4(J, __$.xc9());
        for await (let X of O) if (X.chunk && X.chunk.bytes) yield {
          event: "chunk",
          data: __$.Ew6(X.chunk.bytes),
          raw: []
        };else if (X.internalServerException) yield {
          event: "error",
          data: "InternalServerException",
          raw: []
        };else if (X.modelStreamErrorException) yield {
          event: "error",
          data: "ModelStreamErrorException",
          raw: []
        };else if (X.validationException) yield {
          event: "error",
          data: "ValidationException",
          raw: []
        };else if (X.throttlingException) yield {
          event: "error",
          data: "ThrottlingException",
          raw: []
        };
      }
      async function* H() {
        if (Y) throw Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
        Y = !0;
        let J = !1;
        try {
          for await (let O of w()) {
            if (O.event === "chunk") try {
              yield JSON.parse(O.data);
            } catch (X) {
              throw z.error("Could not parse message into JSON:", O.data), z.error("From chunk:", O.raw), X;
            }
            if (O.event === "error") {
              let X = O.data,
                $ = __$.dc4(X),
                _ = $ ? void 0 : X;
              throw __$.r7.generate(void 0, $, _, A.headers);
            }
          }
          J = !0;
        } catch (O) {
          if (__$.uc9(O)) return;
          throw O;
        } finally {
          if (!J) K.abort();
        }
      }
      return new __$.Pz1(H, K);
    }
  };
});

// Register to shared state
__$.sc4 = sc4;
