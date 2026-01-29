// Module: m74
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var m74 = v(yV => {
  var Ku3 = yV && yV.__createBinding || (Object.create ? function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      var z = Object.getOwnPropertyDescriptor(K, q);
      if (!z || ("get" in z ? !K.__esModule : z.writable || z.configurable)) z = {
        enumerable: !0,
        get: function () {
          return K[q];
        }
      };
      Object.defineProperty(A, Y, z);
    } : function (A, K, q, Y) {
      if (Y === void 0) Y = q;
      A[Y] = K[q];
    }),
    qu3 = yV && yV.__setModuleDefault || (Object.create ? function (A, K) {
      Object.defineProperty(A, "default", {
        enumerable: !0,
        value: K
      });
    } : function (A, K) {
      A.default = K;
    }),
    u74 = yV && yV.__importStar || function (A) {
      if (A && A.__esModule) return A;
      var K = {};
      if (A != null) {
        for (var q in A) if (q !== "default" && Object.prototype.hasOwnProperty.call(A, q)) Ku3(K, A, q);
      }
      return qu3(K, A), K;
    };
  Object.defineProperty(yV, "__esModule", {
    value: !0
  });
  yV.req = yV.json = yV.toBuffer = void 0;
  var Yu3 = u74(CA("http")),
    zu3 = u74(CA("https"));
  async function B74(A) {
    let K = 0,
      q = [];
    for await (let Y of A) K += Y.length, q.push(Y);
    return Buffer.concat(q, K);
  }
  yV.toBuffer = B74;
  async function wu3(A) {
    let q = (await B74(A)).toString("utf8");
    try {
      return JSON.parse(q);
    } catch (Y) {
      let z = Y;
      throw z.message += ` (input: ${q})`, z;
    }
  }
  yV.json = wu3;
  function Hu3(A, K = {}) {
    let Y = ((typeof A === "string" ? A : A.href).startsWith("https:") ? zu3 : Yu3).request(A, K),
      z = new Promise((w, H) => {
        Y.once("response", w).once("error", H).end();
      });
    return Y.then = z.then.bind(z), Y;
  }
  yV.req = Hu3;
});

// Register to shared state
__$.m74 = m74;
