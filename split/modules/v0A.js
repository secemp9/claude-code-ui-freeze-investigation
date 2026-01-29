// Module: v0A
// Dependencies: X86, ERA, _2, j9, MJ, wRA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var v0A = v((v6w, S34) => {
  var {
      PoolBase: JU3,
      kClients: C34,
      kNeedDrain: OU3,
      kAddClient: XU3,
      kGetDispatcher: $U3
    } = __$.X86(),
    _U3 = __$.ERA(),
    {
      InvalidArgumentError: $86
    } = __$._2(),
    L34 = __$.j9(),
    {
      kUrl: R34,
      kInterceptors: GU3
    } = __$.MJ(),
    ZU3 = __$.wRA(),
    _86 = Symbol("options"),
    G86 = Symbol("connections"),
    y34 = Symbol("factory");
  function WU3(A, K) {
    return new _U3(A, K);
  }
  class I34 extends JU3 {
    constructor(A, {
      connections: K,
      factory: q = WU3,
      connect: Y,
      connectTimeout: z,
      tls: w,
      maxCachedSessions: H,
      socketPath: J,
      autoSelectFamily: O,
      autoSelectFamilyAttemptTimeout: X,
      allowH2: $,
      ..._
    } = {}) {
      super();
      if (K != null && (!Number.isFinite(K) || K < 0)) throw new $86("invalid connections");
      if (typeof q !== "function") throw new $86("factory must be a function.");
      if (Y != null && typeof Y !== "function" && typeof Y !== "object") throw new $86("connect must be a function or an object");
      if (typeof Y !== "function") Y = ZU3({
        ...w,
        maxCachedSessions: H,
        allowH2: $,
        socketPath: J,
        timeout: z,
        ...(O ? {
          autoSelectFamily: O,
          autoSelectFamilyAttemptTimeout: X
        } : void 0),
        ...Y
      });
      this[GU3] = _.interceptors?.Pool && Array.isArray(_.interceptors.Pool) ? _.interceptors.Pool : [], this[G86] = K || null, this[R34] = L34.parseOrigin(A), this[_86] = {
        ...L34.deepClone(_),
        connect: Y,
        allowH2: $
      }, this[_86].interceptors = _.interceptors ? {
        ..._.interceptors
      } : void 0, this[y34] = q;
    }
    [$U3]() {
      for (let A of this[C34]) if (!A[OU3]) return A;
      if (!this[G86] || this[C34].length < this[G86]) {
        let A = this[y34](this[R34], this[_86]);
        return this[XU3](A), A;
      }
    }
  }
  S34.exports = I34;
});

// Register to shared state
__$.v0A = v0A;
