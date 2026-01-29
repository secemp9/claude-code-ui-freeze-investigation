// Module: JsA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var JsA = v(sW8 => {
  Object.defineProperty(sW8, "__esModule", {
    value: !0
  });
  function aW8(A, K = !1) {
    return !(K || A && !A.startsWith("/") && !A.match(/^[A-Z]:/) && !A.startsWith(".") && !A.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)) && A !== void 0 && !A.includes("node_modules/");
  }
  function ICq(A) {
    let K = /^\s*[-]{4,}$/,
      q = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
    return Y => {
      let z = Y.match(q);
      if (z) {
        let w, H, J, O, X;
        if (z[1]) {
          J = z[1];
          let G = J.lastIndexOf(".");
          if (J[G - 1] === ".") G--;
          if (G > 0) {
            w = J.slice(0, G), H = J.slice(G + 1);
            let Z = w.indexOf(".Module");
            if (Z > 0) J = J.slice(Z + 1), w = w.slice(0, Z);
          }
          O = void 0;
        }
        if (H) O = w, X = H;
        if (H === "<anonymous>") X = void 0, J = void 0;
        if (J === void 0) X = X || "<anonymous>", J = O ? `${O}.${X}` : X;
        let $ = z[2] && z[2].startsWith("file://") ? z[2].slice(7) : z[2],
          _ = z[5] === "native";
        if ($ && $.match(/\/[A-Z]:/)) $ = $.slice(1);
        if (!$ && z[5] && !_) $ = z[5];
        return {
          filename: $,
          module: A ? A($) : void 0,
          function: J,
          lineno: parseInt(z[3], 10) || void 0,
          colno: parseInt(z[4], 10) || void 0,
          in_app: aW8($, _)
        };
      }
      if (Y.match(K)) return {
        filename: Y
      };
      return;
    };
  }
  sW8.filenameIsInApp = aW8;
  sW8.node = ICq;
});

// Register to shared state
__$.JsA = JsA;
