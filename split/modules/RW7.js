// Module: RW7
// Dependencies: e6, l6, b1, GM6, _M6, BA, G6, x8, UA, skY

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var RW7 = k(() => {
  __$.e6();
  __$.l6();
  __$.b1();
  __$.b1();
  __$.GM6 = {
    name: "plaintext",
    read() {
      let {
        storagePath: A
      } = __$._M6();
      if (__$.BA().existsSync(A)) try {
        let K = __$.BA().readFileSync(A, {
          encoding: "utf8"
        });
        return __$.G6(K);
      } catch (K) {
        return null;
      }
      return null;
    },
    async readAsync() {
      return this.read();
    },
    update(A) {
      try {
        let {
          storageDir: K,
          storagePath: q
        } = __$._M6();
        if (!__$.BA().existsSync(K)) __$.BA().mkdirSync(K);
        return __$.x8(q, __$.UA(A), {
          encoding: "utf8",
          flush: !1
        }), __$.skY(q, 384), {
          success: !0,
          warning: "Warning: Storing credentials in plaintext."
        };
      } catch (K) {
        return {
          success: !1
        };
      }
    },
    delete() {
      let {
        storagePath: A
      } = __$._M6();
      if (__$.BA().existsSync(A)) try {
        return __$.BA().unlinkSync(A), !0;
      } catch (K) {
        return !1;
      }
      return !0;
    }
  };
});

// Register to shared state
__$.RW7 = RW7;
