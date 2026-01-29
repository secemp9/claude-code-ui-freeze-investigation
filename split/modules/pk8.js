// Module: pk8
// Dependencies: sq, H8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pk8 = v(Uk8 => {
  Object.defineProperty(Uk8, "__esModule", {
    value: !0
  });
  var gk8 = __$.sq(),
    mk8 = __$.H8(),
    Fk8 = "RewriteFrames",
    T65 = (A = {}) => {
      let K = A.root,
        q = A.prefix || "app:///",
        Y = A.iteratee || (H => {
          if (!H.filename) return H;
          let J = /^[a-zA-Z]:\\/.test(H.filename) || H.filename.includes("\\") && !H.filename.includes("/"),
            O = /^\//.test(H.filename);
          if (J || O) {
            let X = J ? H.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : H.filename,
              $ = K ? mk8.relative(K, X) : mk8.basename(X);
            H.filename = `${q}${$}`;
          }
          return H;
        });
      function z(H) {
        try {
          return {
            ...H,
            exception: {
              ...H.exception,
              values: H.exception.values.map(J => ({
                ...J,
                ...(J.stacktrace && {
                  stacktrace: w(J.stacktrace)
                })
              }))
            }
          };
        } catch (J) {
          return H;
        }
      }
      function w(H) {
        return {
          ...H,
          frames: H && H.frames && H.frames.map(J => Y(J))
        };
      }
      return {
        name: Fk8,
        setupOnce() {},
        processEvent(H) {
          let J = H;
          if (H.exception && Array.isArray(H.exception.values)) J = z(J);
          return J;
        }
      };
    },
    Qk8 = gk8.defineIntegration(T65),
    v65 = gk8.convertIntegrationFnToClass(Fk8, Qk8);
  Uk8.RewriteFrames = v65;
  Uk8.rewriteFramesIntegration = Qk8;
});

// Register to shared state
__$.pk8 = pk8;
