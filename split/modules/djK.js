// Module: djK
// Dependencies: IdA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var djK = v(Hp2 => {
  var qp2 = __$.IdA(),
    Yp2 = {
      WW: " ",
      WB: "▄",
      BB: "█",
      BW: "▀"
    },
    zp2 = {
      BB: " ",
      BW: "▄",
      WW: "█",
      WB: "▀"
    };
  function wp2(A, K, q) {
    if (A && K) return q.BB;
    if (A && !K) return q.BW;
    if (!A && K) return q.WB;
    return q.WW;
  }
  Hp2.render = function (A, K, q) {
    let Y = qp2.getOptions(K),
      z = Yp2;
    if (Y.color.dark.hex === "#ffffff" || Y.color.light.hex === "#000000") z = zp2;
    let w = A.modules.size,
      H = A.modules.data,
      J = "",
      O = Array(w + Y.margin * 2 + 1).join(z.WW);
    O = Array(Y.margin / 2 + 1).join(O + `
`);
    let X = Array(Y.margin + 1).join(z.WW);
    J += O;
    for (let $ = 0; $ < w; $ += 2) {
      J += X;
      for (let _ = 0; _ < w; _++) {
        let G = H[$ * w + _],
          Z = H[($ + 1) * w + _];
        J += wp2(G, Z, z);
      }
      J += X + `
`;
    }
    if (J += O.slice(0, -1), typeof q === "function") q(null, J);
    return J;
  };
  Hp2.renderToFile = function (K, q, Y, z) {
    if (typeof z > "u") z = Y, Y = void 0;
    let w = CA("fs"),
      H = Hp2.render(q, Y);
    w.writeFile(K, H, z);
  };
});

// Register to shared state
__$.djK = djK;
