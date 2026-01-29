// Module: jUK
// Dependencies: Vc6, DUK, R2, ja, q6, Nc6, vlA, i5z, l5z, iT
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var jUK = k(() => {
  __$.Vc6();
  __$.DUK();
  __$.R2();
  __$.ja();
  __$.q6();
  __$.Nc6 = class Nc6 extends __$.vlA {
    url;
    transport;
    inputStream;
    constructor(A, K, q) {
      let Y = new __$.i5z({
        encoding: "utf8"
      });
      super(Y, q);
      this.inputStream = Y, this.url = new __$.l5z(A);
      let z = {},
        w = __$.iT();
      if (w) z.Authorization = `Bearer ${w}`;
      let H = process.env.CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION;
      if (H) z["x-environment-runner-version"] = H;
      if (this.transport = __$.WUK(this.url, z, __$.d1()), this.transport.setOnData(J => {
        this.inputStream.write(J);
      }), this.transport.setOnClose(() => {
        this.inputStream.end();
      }), this.transport.connect(), __$.kK(async () => this.close()), K) {
        let J = this.inputStream;
        (async () => {
          for await (let O of K) J.write(O + `
`);
        })();
      }
    }
    async write(A) {
      await this.transport.write(A);
    }
    close() {
      this.transport.close(), this.inputStream.end();
    }
  };
});

// Register to shared state
__$.jUK = jUK;
