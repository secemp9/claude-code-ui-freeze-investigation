// Module: BtA
// Dependencies: H8, sq

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BtA = v(yv8 => {
  var {
    _optionalChain: ym1
  } = __$.H8();
  Object.defineProperty(yv8, "__esModule", {
    value: !0
  });
  var tsq = CA("fs"),
    kv8 = __$.sq(),
    Cv8 = __$.H8(),
    utA = new Cv8.LRUMap(100),
    esq = 7,
    Lv8 = "ContextLines";
  function Atq(A) {
    return new Promise((K, q) => {
      tsq.readFile(A, "utf8", (Y, z) => {
        if (Y) q(Y);else K(z);
      });
    });
  }
  var Ktq = (A = {}) => {
      let K = A.frameContextLines !== void 0 ? A.frameContextLines : esq;
      return {
        name: Lv8,
        setupOnce() {},
        processEvent(q) {
          return Ytq(q, K);
        }
      };
    },
    Rv8 = kv8.defineIntegration(Ktq),
    qtq = kv8.convertIntegrationFnToClass(Lv8, Rv8);
  async function Ytq(A, K) {
    let q = {},
      Y = [];
    if (K > 0 && ym1([A, "access", z => z.exception, "optionalAccess", z => z.values])) for (let z of A.exception.values) {
      if (!ym1([z, "access", w => w.stacktrace, "optionalAccess", w => w.frames])) continue;
      for (let w = z.stacktrace.frames.length - 1; w >= 0; w--) {
        let H = z.stacktrace.frames[w];
        if (H.filename && !q[H.filename] && !utA.get(H.filename)) Y.push(wtq(H.filename)), q[H.filename] = 1;
      }
    }
    if (Y.length > 0) await Promise.all(Y);
    if (K > 0 && ym1([A, "access", z => z.exception, "optionalAccess", z => z.values])) {
      for (let z of A.exception.values) if (z.stacktrace && z.stacktrace.frames) await ztq(z.stacktrace.frames, K);
    }
    return A;
  }
  function ztq(A, K) {
    for (let q of A) if (q.filename && q.context_line === void 0) {
      let Y = utA.get(q.filename);
      if (Y) try {
        Cv8.addContextToFrame(Y, q, K);
      } catch (z) {}
    }
  }
  async function wtq(A) {
    let K = utA.get(A);
    if (K === null) return null;
    if (K !== void 0) return K;
    let q = null;
    try {
      q = (await Atq(A)).split(`
`);
    } catch (Y) {}
    return utA.set(A, q), q;
  }
  yv8.ContextLines = qtq;
  yv8.contextLinesIntegration = Rv8;
});

// Register to shared state
__$.BtA = BtA;
