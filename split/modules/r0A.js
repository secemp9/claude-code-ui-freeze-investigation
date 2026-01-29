// Module: r0A
// Dependencies: p7, k46, Z1, e6, Ny, z6, BA, h, qH4, Qr3

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var r0A = k(() => {
  __$.p7();
  __$.k46();
  __$.Z1();
  __$.e6();
  __$.Ny = __$.z6(() => {
    let A = {};
    if (process.env.CLAUDE_CODE_CLIENT_CERT) try {
      A.cert = __$.BA().readFileSync(process.env.CLAUDE_CODE_CLIENT_CERT, {
        encoding: "utf8"
      }), __$.h("mTLS: Loaded client certificate from CLAUDE_CODE_CLIENT_CERT");
    } catch (K) {
      __$.h(`mTLS: Failed to load client certificate: ${K}`, {
        level: "error"
      });
    }
    if (process.env.CLAUDE_CODE_CLIENT_KEY) try {
      A.key = __$.BA().readFileSync(process.env.CLAUDE_CODE_CLIENT_KEY, {
        encoding: "utf8"
      }), __$.h("mTLS: Loaded client key from CLAUDE_CODE_CLIENT_KEY");
    } catch (K) {
      __$.h(`mTLS: Failed to load client key: ${K}`, {
        level: "error"
      });
    }
    if (process.env.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE) A.passphrase = process.env.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE, __$.h("mTLS: Using client key passphrase");
    if (Object.keys(A).length === 0) return;
    return A;
  }), __$.qH4 = __$.z6(() => {
    let A = __$.Ny();
    if (!A) return;
    let K = {
      ...A,
      keepAlive: !0
    };
    return __$.h("mTLS: Creating HTTPS agent with custom certificates"), new __$.Qr3(K);
  });
});

// Register to shared state
__$.r0A = r0A;
