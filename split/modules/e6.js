// Module: e6
// Dependencies: Z1, b1, q6, nrK, BX, aq, QrK, UrK, prK, drK
//   ... and 3 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var e6 = k(() => {
  __$.Z1();
  __$.b1();
  __$.q6();
  __$.nrK = {
    cwd() {
      return process.cwd();
    },
    existsSync(A) {
      return __$.BX(`existsSync(${A})`, () => __$.aq.existsSync(A));
    },
    async stat(A) {
      return __$.QrK(A);
    },
    async readdir(A) {
      return __$.UrK(A, {
        withFileTypes: !0
      });
    },
    async unlink(A) {
      return __$.prK(A);
    },
    async rmdir(A) {
      return __$.drK(A);
    },
    async rm(A, K) {
      return __$.crK(A, K);
    },
    statSync(A) {
      return __$.BX(`statSync(${A})`, () => __$.aq.statSync(A));
    },
    lstatSync(A) {
      return __$.BX(`lstatSync(${A})`, () => __$.aq.lstatSync(A));
    },
    readFileSync(A, K) {
      return __$.BX(`readFileSync(${A})`, () => __$.aq.readFileSync(A, {
        encoding: K.encoding
      }));
    },
    readFileBytesSync(A) {
      return __$.BX(`readFileBytesSync(${A})`, () => __$.aq.readFileSync(A));
    },
    readSync(A, K) {
      return __$.BX(`readSync(${A}, ${K.length} bytes)`, () => {
        let q = void 0;
        try {
          q = __$.aq.openSync(A, "r");
          let Y = Buffer.alloc(K.length),
            z = __$.aq.readSync(q, Y, 0, K.length, 0);
          return {
            buffer: Y,
            bytesRead: z
          };
        } finally {
          if (q) __$.aq.closeSync(q);
        }
      });
    },
    appendFileSync(A, K, q) {
      return __$.BX(`appendFileSync(${A}, ${K.length} chars)`, () => {
        if (!__$.aq.existsSync(A) && q?.mode !== void 0) {
          let Y = __$.aq.openSync(A, "a", q.mode);
          try {
            __$.aq.appendFileSync(Y, K);
          } finally {
            __$.aq.closeSync(Y);
          }
        } else __$.aq.appendFileSync(A, K);
      });
    },
    copyFileSync(A, K) {
      return __$.BX(`copyFileSync(${A} → ${K})`, () => __$.aq.copyFileSync(A, K));
    },
    unlinkSync(A) {
      return __$.BX(`unlinkSync(${A})`, () => __$.aq.unlinkSync(A));
    },
    renameSync(A, K) {
      return __$.BX(`renameSync(${A} → ${K})`, () => __$.aq.renameSync(A, K));
    },
    linkSync(A, K) {
      return __$.BX(`linkSync(${A} → ${K})`, () => __$.aq.linkSync(A, K));
    },
    symlinkSync(A, K) {
      return __$.BX(`symlinkSync(${A} → ${K})`, () => __$.aq.symlinkSync(A, K));
    },
    readlinkSync(A) {
      return __$.BX(`readlinkSync(${A})`, () => __$.aq.readlinkSync(A));
    },
    realpathSync(A) {
      return __$.BX(`realpathSync(${A})`, () => __$.aq.realpathSync(A));
    },
    mkdirSync(A, K) {
      return __$.BX(`mkdirSync(${A})`, () => {
        if (!__$.aq.existsSync(A)) {
          let q = {
            recursive: !0
          };
          if (K?.mode !== void 0) q.mode = K.mode;
          __$.aq.mkdirSync(A, q);
        }
      });
    },
    readdirSync(A) {
      return __$.BX(`readdirSync(${A})`, () => __$.aq.readdirSync(A, {
        withFileTypes: !0
      }));
    },
    readdirStringSync(A) {
      return __$.BX(`readdirStringSync(${A})`, () => __$.aq.readdirSync(A));
    },
    isDirEmptySync(A) {
      return __$.BX(`isDirEmptySync(${A})`, () => {
        return this.readdirSync(A).length === 0;
      });
    },
    rmdirSync(A) {
      return __$.BX(`rmdirSync(${A})`, () => __$.aq.rmdirSync(A));
    },
    rmSync(A, K) {
      return __$.BX(`rmSync(${A})`, () => __$.aq.rmSync(A, K));
    },
    createWriteStream(A) {
      return __$.aq.createWriteStream(A);
    }
  }, __$.rrK = __$.nrK;
});

// Register to shared state
__$.e6 = e6;
