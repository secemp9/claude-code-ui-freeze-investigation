// Module: C18
// Dependencies: Ow, uI1, k18, K8q, i1, BI1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var C18 = k(() => {
  __$.Ow();
  __$.uI1 = Symbol("internals");
  __$.k18 = class k18 extends __$.K8q.Transform {
    constructor(A) {
      A = __$.i1.toFlatObject(A, {
        maxRate: 0,
        chunkSize: 65536,
        minChunkSize: 100,
        timeWindow: 500,
        ticksRate: 2,
        samplesCount: 15
      }, null, (q, Y) => {
        return !__$.i1.isUndefined(Y[q]);
      });
      super({
        readableHighWaterMark: A.chunkSize
      });
      let K = this[__$.uI1] = {
        timeWindow: A.timeWindow,
        chunkSize: A.chunkSize,
        maxRate: A.maxRate,
        minChunkSize: A.minChunkSize,
        bytesSeen: 0,
        isCaptured: !1,
        notifiedBytesLoaded: 0,
        ts: Date.now(),
        bytes: 0,
        onReadCallback: null
      };
      this.on("newListener", q => {
        if (q === "progress") {
          if (!K.isCaptured) K.isCaptured = !0;
        }
      });
    }
    _read(A) {
      let K = this[__$.uI1];
      if (K.onReadCallback) K.onReadCallback();
      return super._read(A);
    }
    _transform(A, K, q) {
      let Y = this[__$.uI1],
        z = Y.maxRate,
        w = this.readableHighWaterMark,
        H = Y.timeWindow,
        J = 1000 / H,
        O = z / J,
        X = Y.minChunkSize !== !1 ? Math.max(Y.minChunkSize, O * 0.01) : 0,
        $ = (G, Z) => {
          let W = Buffer.byteLength(G);
          if (Y.bytesSeen += W, Y.bytes += W, Y.isCaptured && this.emit("progress", Y.bytesSeen), this.push(G)) process.nextTick(Z);else Y.onReadCallback = () => {
            Y.onReadCallback = null, process.nextTick(Z);
          };
        },
        _ = (G, Z) => {
          let W = Buffer.byteLength(G),
            D = null,
            j = w,
            M,
            P = 0;
          if (z) {
            let f = Date.now();
            if (!Y.ts || (P = f - Y.ts) >= H) Y.ts = f, M = O - Y.bytes, Y.bytes = M < 0 ? -M : 0, P = 0;
            M = O - Y.bytes;
          }
          if (z) {
            if (M <= 0) return setTimeout(() => {
              Z(null, G);
            }, H - P);
            if (M < j) j = M;
          }
          if (j && W > j && W - j > X) D = G.subarray(j), G = G.subarray(0, j);
          $(G, D ? () => {
            process.nextTick(Z, null, D);
          } : Z);
        };
      _(A, function G(Z, W) {
        if (Z) return q(Z);
        if (W) _(W, G);else q(null);
      });
    }
  };
  __$.BI1 = __$.k18;
});

// Register to shared state
__$.C18 = C18;
