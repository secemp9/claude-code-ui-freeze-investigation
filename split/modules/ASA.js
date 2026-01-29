// Module: ASA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ASA = v(LP9 => {
  class zY1 extends Error {
    constructor(A, K, q, Y) {
      super();
      this.name = A, this.code = q, this.message = Y, this.pos = K;
    }
  }
  class XS4 extends zY1 {
    constructor(A, K, q) {
      super("YAMLParseError", A, K, q);
    }
  }
  class $S4 extends zY1 {
    constructor(A, K, q) {
      super("YAMLWarning", A, K, q);
    }
  }
  var CP9 = (A, K) => q => {
    if (q.pos[0] === -1) return;
    q.linePos = q.pos.map(J => K.linePos(J));
    let {
      line: Y,
      col: z
    } = q.linePos[0];
    q.message += ` at line ${Y}, column ${z}`;
    let w = z - 1,
      H = A.substring(K.lineStarts[Y - 1], K.lineStarts[Y]).replace(/[\n\r]+$/, "");
    if (w >= 60 && H.length > 80) {
      let J = Math.min(w - 39, H.length - 79);
      H = "…" + H.substring(J), w -= J - 1;
    }
    if (H.length > 80) H = H.substring(0, 79) + "…";
    if (Y > 1 && /^ *$/.test(H.substring(0, w))) {
      let J = A.substring(K.lineStarts[Y - 2], K.lineStarts[Y - 1]);
      if (J.length > 80) J = J.substring(0, 79) + `…
`;
      H = J + H;
    }
    if (/[^ ]/.test(H)) {
      let J = 1,
        O = q.linePos[1];
      if (O && O.line === Y && O.col > z) J = Math.max(1, Math.min(O.col - z, 80 - w));
      let X = " ".repeat(w) + "^".repeat(J);
      q.message += `:

${H}
${X}
`;
    }
  };
  LP9.YAMLError = zY1;
  LP9.YAMLParseError = XS4;
  LP9.YAMLWarning = $S4;
  LP9.prettifyError = CP9;
});

// Register to shared state
__$.ASA = ASA;
