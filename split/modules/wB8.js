// Module: wB8
// Dependencies: Sl1, qB8, ii

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wB8 = v(zB8 => {
  Object.defineProperty(zB8, "__esModule", {
    value: !0
  });
  zB8.createBufferedReadable = q_5;
  var A_5 = CA("node:stream"),
    YB8 = __$.Sl1(),
    FF = __$.qB8(),
    K_5 = __$.ii();
  function q_5(A, K, q) {
    if ((0, K_5.isReadableStream)(A)) return (0, FF.createBufferedReadableStream)(A, K, q);
    let Y = new A_5.Readable({
        read() {}
      }),
      z = !1,
      w = 0,
      H = ["", new YB8.ByteArrayCollector(O => new Uint8Array(O)), new YB8.ByteArrayCollector(O => Buffer.from(new Uint8Array(O)))],
      J = -1;
    return A.on("data", O => {
      let X = (0, FF.modeOf)(O, !0);
      if (J !== X) {
        if (J >= 0) Y.push((0, FF.flush)(H, J));
        J = X;
      }
      if (J === -1) {
        Y.push(O);
        return;
      }
      let $ = (0, FF.sizeOf)(O);
      w += $;
      let _ = (0, FF.sizeOf)(H[J]);
      if ($ >= K && _ === 0) Y.push(O);else {
        let G = (0, FF.merge)(H, J, O);
        if (!z && w > K * 2) z = !0, q?.warn(`@smithy/util-stream - stream chunk size ${$} is below threshold of ${K}, automatically buffering.`);
        if (G >= K) Y.push((0, FF.flush)(H, J));
      }
    }), A.on("end", () => {
      if (J !== -1) {
        let O = (0, FF.flush)(H, J);
        if ((0, FF.sizeOf)(O) > 0) Y.push(O);
      }
      Y.push(null);
    }), Y;
  }
});

// Register to shared state
__$.wB8 = wB8;
