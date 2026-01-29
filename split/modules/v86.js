// Module: v86
// Dependencies: _2, T86

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var v86 = v((S6w, k94) => {
  var Dp3 = CA("node:assert"),
    {
      ResponseStatusCodeError: N94
    } = __$._2(),
    {
      chunksDecode: T94
    } = __$.T86();
  async function jp3({
    callback: A,
    body: K,
    contentType: q,
    statusCode: Y,
    statusMessage: z,
    headers: w
  }) {
    Dp3(K);
    let H = [],
      J = 0;
    try {
      for await (let _ of K) if (H.push(_), J += _.length, J > 131072) {
        H = [], J = 0;
        break;
      }
    } catch {
      H = [], J = 0;
    }
    let O = `Response status code ${Y}${z ? `: ${z}` : ""}`;
    if (Y === 204 || !q || !J) {
      queueMicrotask(() => A(new N94(O, Y, w)));
      return;
    }
    let X = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    let $;
    try {
      if (v94(q)) $ = JSON.parse(T94(H, J));else if (E94(q)) $ = T94(H, J);
    } catch {} finally {
      Error.stackTraceLimit = X;
    }
    queueMicrotask(() => A(new N94(O, Y, w, $)));
  }
  var v94 = A => {
      return A.length > 15 && A[11] === "/" && A[0] === "a" && A[1] === "p" && A[2] === "p" && A[3] === "l" && A[4] === "i" && A[5] === "c" && A[6] === "a" && A[7] === "t" && A[8] === "i" && A[9] === "o" && A[10] === "n" && A[12] === "j" && A[13] === "s" && A[14] === "o" && A[15] === "n";
    },
    E94 = A => {
      return A.length > 4 && A[4] === "/" && A[0] === "t" && A[1] === "e" && A[2] === "x" && A[3] === "t";
    };
  k94.exports = {
    getResolveErrorBodyCallback: jp3,
    isContentTypeApplicationJson: v94,
    isContentTypeText: E94
  };
});

// Register to shared state
__$.v86 = v86;
