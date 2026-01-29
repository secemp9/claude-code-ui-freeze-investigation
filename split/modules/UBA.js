// Module: UBA
// Dependencies: vy1, CK, l6, uz, rP, b1, gI, CW7, Vp, aZA
//   ... and 6 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UBA = k(() => {
  __$.vy1();
  __$.CK();
  __$.l6();
  __$.uz();
  __$.rP();
  __$.b1();
  __$.gI = {
    data: null,
    valid: !1
  };
  __$.CW7 = {
    name: "keychain",
    read() {
      if (__$.gI.valid) return __$.gI.data;
      try {
        let A = __$.Vp("-credentials"),
          K = __$.aZA(),
          q = __$.eW(`security find-generic-password -a "${K}" -w -s "${A}"`);
        if (q) {
          let Y = __$.G6(q);
          return __$.gI = {
            data: Y,
            valid: !0
          }, Y;
        }
      } catch (A) {
        return __$.gI = {
          data: null,
          valid: !0
        }, null;
      }
      return __$.gI = {
        data: null,
        valid: !0
      }, null;
    },
    async readAsync() {
      if (__$.gI.valid) return __$.gI.data;
      try {
        let A = __$.Vp("-credentials"),
          K = __$.aZA(),
          {
            stdout: q,
            code: Y
          } = await __$.R6("security", ["find-generic-password", "-a", K, "-w", "-s", A], {
            useCwd: !1,
            preserveOutputOnError: !1
          });
        if (Y === 0 && q) {
          let z = __$.G6(q.trim());
          return __$.gI = {
            data: z,
            valid: !0
          }, z;
        }
      } catch (A) {}
      return __$.gI = {
        data: null,
        valid: !0
      }, null;
    },
    update(A) {
      __$.la();
      try {
        let K = __$.Vp("-credentials"),
          q = __$.aZA(),
          Y = __$.UA(A),
          z = Buffer.from(Y, "utf-8").toString("hex"),
          w = `add-generic-password -U -a "${q}" -s "${K}" -X "${z}"
`;
        if (__$.TzA("security", ["-i"], {
          input: w,
          stdio: ["pipe", "pipe", "pipe"],
          reject: !1
        }).exitCode !== 0) return {
          success: !1
        };
        return __$.gI = {
          data: A,
          valid: !0
        }, {
          success: !0
        };
      } catch (K) {
        return {
          success: !1
        };
      }
    },
    delete() {
      __$.la();
      try {
        let A = __$.Vp("-credentials"),
          K = __$.aZA();
        return __$.eW(`security delete-generic-password -a "${K}" -s "${A}"`), !0;
      } catch (A) {
        return !1;
      }
    }
  };
});

// Register to shared state
__$.UBA = UBA;
