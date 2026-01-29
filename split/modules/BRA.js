// Module: BRA
// Dependencies: I86, S0A, j9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var BRA = v((Q6w, jY4) => {
  var {
      MockNotMatchedError: Q8A
    } = __$.I86(),
    {
      kDispatches: vK1,
      kMockAgent: tp3,
      kOriginalDispatch: ep3,
      kOrigin: Ad3,
      kGetNetConnect: Kd3
    } = __$.S0A(),
    {
      buildURL: qd3
    } = __$.j9(),
    {
      STATUS_CODES: Yd3
    } = CA("node:http"),
    {
      types: {
        isPromise: zd3
      }
    } = CA("node:util");
  function MQ(A, K) {
    if (typeof A === "string") return A === K;
    if (A instanceof RegExp) return A.test(K);
    if (typeof A === "function") return A(K) === !0;
    return !1;
  }
  function JY4(A) {
    return Object.fromEntries(Object.entries(A).map(([K, q]) => {
      return [K.toLocaleLowerCase(), q];
    }));
  }
  function OY4(A, K) {
    if (Array.isArray(A)) {
      for (let q = 0; q < A.length; q += 2) if (A[q].toLocaleLowerCase() === K.toLocaleLowerCase()) return A[q + 1];
      return;
    } else if (typeof A.get === "function") return A.get(K);else return JY4(A)[K.toLocaleLowerCase()];
  }
  function b86(A) {
    let K = A.slice(),
      q = [];
    for (let Y = 0; Y < K.length; Y += 2) q.push([K[Y], K[Y + 1]]);
    return Object.fromEntries(q);
  }
  function XY4(A, K) {
    if (typeof A.headers === "function") {
      if (Array.isArray(K)) K = b86(K);
      return A.headers(K ? JY4(K) : {});
    }
    if (typeof A.headers > "u") return !0;
    if (typeof K !== "object" || typeof A.headers !== "object") return !1;
    for (let [q, Y] of Object.entries(A.headers)) {
      let z = OY4(K, q);
      if (!MQ(Y, z)) return !1;
    }
    return !0;
  }
  function HY4(A) {
    if (typeof A !== "string") return A;
    let K = A.split("?");
    if (K.length !== 2) return A;
    let q = new URLSearchParams(K.pop());
    return q.sort(), [...K, q.toString()].join("?");
  }
  function wd3(A, {
    path: K,
    method: q,
    body: Y,
    headers: z
  }) {
    let w = MQ(A.path, K),
      H = MQ(A.method, q),
      J = typeof A.body < "u" ? MQ(A.body, Y) : !0,
      O = XY4(A, z);
    return w && H && J && O;
  }
  function $Y4(A) {
    if (Buffer.isBuffer(A)) return A;else if (A instanceof Uint8Array) return A;else if (A instanceof ArrayBuffer) return A;else if (typeof A === "object") return JSON.stringify(A);else return A.toString();
  }
  function _Y4(A, K) {
    let q = K.query ? qd3(K.path, K.query) : K.path,
      Y = typeof q === "string" ? HY4(q) : q,
      z = A.filter(({
        consumed: w
      }) => !w).filter(({
        path: w
      }) => MQ(HY4(w), Y));
    if (z.length === 0) throw new Q8A(`Mock dispatch not matched for path '${Y}'`);
    if (z = z.filter(({
      method: w
    }) => MQ(w, K.method)), z.length === 0) throw new Q8A(`Mock dispatch not matched for method '${K.method}' on path '${Y}'`);
    if (z = z.filter(({
      body: w
    }) => typeof w < "u" ? MQ(w, K.body) : !0), z.length === 0) throw new Q8A(`Mock dispatch not matched for body '${K.body}' on path '${Y}'`);
    if (z = z.filter(w => XY4(w, K.headers)), z.length === 0) {
      let w = typeof K.headers === "object" ? JSON.stringify(K.headers) : K.headers;
      throw new Q8A(`Mock dispatch not matched for headers '${w}' on path '${Y}'`);
    }
    return z[0];
  }
  function Hd3(A, K, q) {
    let Y = {
        timesInvoked: 0,
        times: 1,
        persist: !1,
        consumed: !1
      },
      z = typeof q === "function" ? {
        callback: q
      } : {
        ...q
      },
      w = {
        ...Y,
        ...K,
        pending: !0,
        data: {
          error: null,
          ...z
        }
      };
    return A.push(w), w;
  }
  function S86(A, K) {
    let q = A.findIndex(Y => {
      if (!Y.consumed) return !1;
      return wd3(Y, K);
    });
    if (q !== -1) A.splice(q, 1);
  }
  function GY4(A) {
    let {
      path: K,
      method: q,
      body: Y,
      headers: z,
      query: w
    } = A;
    return {
      path: K,
      method: q,
      body: Y,
      headers: z,
      query: w
    };
  }
  function h86(A) {
    let K = Object.keys(A),
      q = [];
    for (let Y = 0; Y < K.length; ++Y) {
      let z = K[Y],
        w = A[z],
        H = Buffer.from(`${z}`);
      if (Array.isArray(w)) for (let J = 0; J < w.length; ++J) q.push(H, Buffer.from(`${w[J]}`));else q.push(H, Buffer.from(`${w}`));
    }
    return q;
  }
  function ZY4(A) {
    return Yd3[A] || "unknown";
  }
  async function Jd3(A) {
    let K = [];
    for await (let q of A) K.push(q);
    return Buffer.concat(K).toString("utf8");
  }
  function WY4(A, K) {
    let q = GY4(A),
      Y = _Y4(this[vK1], q);
    if (Y.timesInvoked++, Y.data.callback) Y.data = {
      ...Y.data,
      ...Y.data.callback(A)
    };
    let {
        data: {
          statusCode: z,
          data: w,
          headers: H,
          trailers: J,
          error: O
        },
        delay: X,
        persist: $
      } = Y,
      {
        timesInvoked: _,
        times: G
      } = Y;
    if (Y.consumed = !$ && _ >= G, Y.pending = _ < G, O !== null) return S86(this[vK1], q), K.onError(O), !0;
    if (typeof X === "number" && X > 0) setTimeout(() => {
      Z(this[vK1]);
    }, X);else Z(this[vK1]);
    function Z(D, j = w) {
      let M = Array.isArray(A.headers) ? b86(A.headers) : A.headers,
        P = typeof j === "function" ? j({
          ...A,
          headers: M
        }) : j;
      if (zd3(P)) {
        P.then(C => Z(D, C));
        return;
      }
      let f = $Y4(P),
        N = h86(H),
        T = h86(J);
      K.onConnect?.(C => K.onError(C), null), K.onHeaders?.(z, N, W, ZY4(z)), K.onData?.(Buffer.from(f)), K.onComplete?.(T), S86(D, q);
    }
    function W() {}
    return !0;
  }
  function Od3() {
    let A = this[tp3],
      K = this[Ad3],
      q = this[ep3];
    return function (z, w) {
      if (A.isMockActive) try {
        WY4.call(this, z, w);
      } catch (H) {
        if (H instanceof Q8A) {
          let J = A[Kd3]();
          if (J === !1) throw new Q8A(`${H.message}: subsequent request to origin ${K} was not allowed (net.connect disabled)`);
          if (DY4(J, K)) q.call(this, z, w);else throw new Q8A(`${H.message}: subsequent request to origin ${K} was not allowed (net.connect is not enabled for this origin)`);
        } else throw H;
      } else q.call(this, z, w);
    };
  }
  function DY4(A, K) {
    let q = new URL(K);
    if (A === !0) return !0;else if (Array.isArray(A) && A.some(Y => MQ(Y, q.host))) return !0;
    return !1;
  }
  function Xd3(A) {
    if (A) {
      let {
        agent: K,
        ...q
      } = A;
      return q;
    }
  }
  jY4.exports = {
    getResponseData: $Y4,
    getMockDispatch: _Y4,
    addMockDispatch: Hd3,
    deleteMockDispatch: S86,
    buildKey: GY4,
    generateKeyValues: h86,
    matchValue: MQ,
    getResponse: Jd3,
    getStatusText: ZY4,
    mockDispatch: WY4,
    buildMockDispatch: Od3,
    checkNetConnect: DY4,
    buildMockOptions: Xd3,
    getHeaderByName: OY4,
    buildHeadersFromArray: b86
  };
});

// Register to shared state
__$.BRA = BRA;
