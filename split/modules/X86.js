// Module: X86
// Dependencies: J0A, z86, MJ, W34

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var X86 = v((T6w, k34) => {
  var tQ3 = __$.J0A(),
    eQ3 = __$.z86(),
    {
      kConnected: w86,
      kSize: D34,
      kRunning: j34,
      kPending: M34,
      kQueued: kRA,
      kBusy: AU3,
      kFree: KU3,
      kUrl: qU3,
      kClose: YU3,
      kDestroy: zU3,
      kDispatch: wU3
    } = __$.MJ(),
    HU3 = __$.W34(),
    hV = Symbol("clients"),
    zM = Symbol("needDrain"),
    CRA = Symbol("queue"),
    H86 = Symbol("closed resolve"),
    J86 = Symbol("onDrain"),
    P34 = Symbol("onConnect"),
    V34 = Symbol("onDisconnect"),
    f34 = Symbol("onConnectionError"),
    O86 = Symbol("get dispatcher"),
    T34 = Symbol("add client"),
    v34 = Symbol("remove client"),
    N34 = Symbol("stats");
  class E34 extends tQ3 {
    constructor() {
      super();
      this[CRA] = new eQ3(), this[hV] = [], this[kRA] = 0;
      let A = this;
      this[J86] = function (q, Y) {
        let z = A[CRA],
          w = !1;
        while (!w) {
          let H = z.shift();
          if (!H) break;
          A[kRA]--, w = !this.dispatch(H.opts, H.handler);
        }
        if (this[zM] = w, !this[zM] && A[zM]) A[zM] = !1, A.emit("drain", q, [A, ...Y]);
        if (A[H86] && z.isEmpty()) Promise.all(A[hV].map(H => H.close())).then(A[H86]);
      }, this[P34] = (K, q) => {
        A.emit("connect", K, [A, ...q]);
      }, this[V34] = (K, q, Y) => {
        A.emit("disconnect", K, [A, ...q], Y);
      }, this[f34] = (K, q, Y) => {
        A.emit("connectionError", K, [A, ...q], Y);
      }, this[N34] = new HU3(this);
    }
    get [AU3]() {
      return this[zM];
    }
    get [w86]() {
      return this[hV].filter(A => A[w86]).length;
    }
    get [KU3]() {
      return this[hV].filter(A => A[w86] && !A[zM]).length;
    }
    get [M34]() {
      let A = this[kRA];
      for (let {
        [M34]: K
      } of this[hV]) A += K;
      return A;
    }
    get [j34]() {
      let A = 0;
      for (let {
        [j34]: K
      } of this[hV]) A += K;
      return A;
    }
    get [D34]() {
      let A = this[kRA];
      for (let {
        [D34]: K
      } of this[hV]) A += K;
      return A;
    }
    get stats() {
      return this[N34];
    }
    async [YU3]() {
      if (this[CRA].isEmpty()) await Promise.all(this[hV].map(A => A.close()));else await new Promise(A => {
        this[H86] = A;
      });
    }
    async [zU3](A) {
      while (!0) {
        let K = this[CRA].shift();
        if (!K) break;
        K.handler.onError(A);
      }
      await Promise.all(this[hV].map(K => K.destroy(A)));
    }
    [wU3](A, K) {
      let q = this[O86]();
      if (!q) this[zM] = !0, this[CRA].push({
        opts: A,
        handler: K
      }), this[kRA]++;else if (!q.dispatch(A, K)) q[zM] = !0, this[zM] = !this[O86]();
      return !this[zM];
    }
    [T34](A) {
      if (A.on("drain", this[J86]).on("connect", this[P34]).on("disconnect", this[V34]).on("connectionError", this[f34]), this[hV].push(A), this[zM]) queueMicrotask(() => {
        if (this[zM]) this[J86](A[qU3], [this, A]);
      });
      return this;
    }
    [v34](A) {
      A.close(() => {
        let K = this[hV].indexOf(A);
        if (K !== -1) this[hV].splice(K, 1);
      }), this[zM] = this[hV].some(K => !K[zM] && K.closed !== !0 && K.destroyed !== !0);
    }
  }
  k34.exports = {
    PoolBase: E34,
    kClients: hV,
    kNeedDrain: zM,
    kAddClient: T34,
    kRemoveClient: v34,
    kGetDispatcher: O86
  };
});

// Register to shared state
__$.X86 = X86;
