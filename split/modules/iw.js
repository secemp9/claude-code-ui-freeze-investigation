// Module: iw
// Dependencies: uTA, qb, y2, KV, bR, o$, dg

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var iw = k(() => {
  __$.uTA = class uTA extends Error {
    constructor(A) {
      super(A);
      this.name = this.constructor.name;
    }
  };
  __$.qb = class qb extends Error {};
  __$.y2 = class y2 extends Error {
    constructor(A) {
      super(A);
      this.name = "AbortError";
    }
  };
  __$.KV = class KV extends Error {
    filePath;
    defaultConfig;
    constructor(A, K, q) {
      super(A);
      this.name = "ConfigParseError", this.filePath = K, this.defaultConfig = q;
    }
  };
  __$.bR = class bR extends Error {
    stdout;
    stderr;
    code;
    interrupted;
    constructor(A, K, q, Y) {
      super("Shell command failed");
      this.stdout = A;
      this.stderr = K;
      this.code = q;
      this.interrupted = Y;
      this.name = "ShellError";
    }
  };
  __$.o$ = class o$ extends Error {
    formattedMessage;
    constructor(A, K) {
      super(A);
      this.formattedMessage = K;
      this.name = "TeleportOperationError";
    }
  };
  __$.dg = class dg extends Error {
    telemetryMessage;
    constructor(A, K) {
      super(A);
      this.name = "TelemetrySafeError", this.telemetryMessage = K ?? A;
    }
  };
});

// Register to shared state
__$.iw = iw;
