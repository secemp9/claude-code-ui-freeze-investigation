// Module: Ay1
// Dependencies: ta6, aR1, sR1, BsK, As6, eR1, Ks6, tR1, ea6, $1A
//   ... and 5 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ay1 = k(() => {
  __$.ta6();
  __$.aR1 = Symbol.for("signal-exit emitter"), __$.sR1 = globalThis, __$.BsK = Object.defineProperty.bind(Object);
  __$.As6 = class As6 extends __$.eR1 {
    onExit() {
      return () => {};
    }
    load() {}
    unload() {}
  };
  __$.Ks6 = class Ks6 extends __$.eR1 {
    #A = __$.tR1.platform === "win32" ? "SIGINT" : "SIGHUP";
    #K = new __$.ea6();
    #q;
    #z;
    #Y;
    #J = {};
    #w = !1;
    constructor(A) {
      super();
      this.#q = A, this.#J = {};
      for (let K of __$.$1A) this.#J[K] = () => {
        let q = this.#q.listeners(K),
          {
            count: Y
          } = this.#K,
          z = A;
        if (typeof z.__signal_exit_emitter__ === "object" && typeof z.__signal_exit_emitter__.count === "number") Y += z.__signal_exit_emitter__.count;
        if (q.length === Y) {
          this.unload();
          let w = this.#K.emit("exit", null, K),
            H = K === "SIGHUP" ? this.#A : K;
          if (!w) A.kill(A.pid, H);
        }
      };
      this.#Y = A.reallyExit, this.#z = A.emit;
    }
    onExit(A, K) {
      if (!__$.$rA(this.#q)) return () => {};
      if (this.#w === !1) this.load();
      let q = K?.alwaysLast ? "afterExit" : "exit";
      return this.#K.on(q, A), () => {
        if (this.#K.removeListener(q, A), this.#K.listeners.exit.length === 0 && this.#K.listeners.afterExit.length === 0) this.unload();
      };
    }
    load() {
      if (this.#w) return;
      this.#w = !0, this.#K.count += 1;
      for (let A of __$.$1A) try {
        let K = this.#J[A];
        if (K) this.#q.on(A, K);
      } catch (K) {}
      this.#q.emit = (A, ...K) => {
        return this.#$(A, ...K);
      }, this.#q.reallyExit = A => {
        return this.#X(A);
      };
    }
    unload() {
      if (!this.#w) return;
      this.#w = !1, __$.$1A.forEach(A => {
        let K = this.#J[A];
        if (!K) throw Error("Listener not defined for signal: " + A);
        try {
          this.#q.removeListener(A, K);
        } catch (q) {}
      }), this.#q.emit = this.#z, this.#q.reallyExit = this.#Y, this.#K.count -= 1;
    }
    #X(A) {
      if (!__$.$rA(this.#q)) return 0;
      return this.#q.exitCode = A || 0, this.#K.emit("exit", this.#q.exitCode, null), this.#Y.call(this.#q, this.#q.exitCode);
    }
    #$(A, ...K) {
      let q = this.#z;
      if (A === "exit" && __$.$rA(this.#q)) {
        if (typeof K[0] === "number") this.#q.exitCode = K[0];
        let Y = q.call(this.#q, A, ...K);
        return this.#K.emit("exit", this.#q.exitCode, null), Y;
      } else return q.call(this.#q, A, ...K);
    }
  };
  __$.tR1 = globalThis.process, {
    onExit: __$._rA,
    load: __$.YXz,
    unload: __$.zXz
  } = __$.msK(__$.$rA(__$.tR1) ? new __$.Ks6(__$.tR1) : new __$.As6());
});

// Register to shared state
__$.Ay1 = Ay1;
