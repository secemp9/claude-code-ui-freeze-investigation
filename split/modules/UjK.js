// Module: UjK
// Dependencies: FjK, IdA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var UjK = v(sU2 => {
  var oU2 = CA("fs"),
    aU2 = __$.FjK().PNG,
    tg6 = __$.IdA();
  sU2.render = function (K, q) {
    let Y = tg6.getOptions(q),
      z = Y.rendererOpts,
      w = tg6.getImageWidth(K.modules.size, Y);
    z.width = w, z.height = w;
    let H = new aU2(z);
    return tg6.qrToImageData(H.data, K, Y), H;
  };
  sU2.renderToDataURL = function (K, q, Y) {
    if (typeof Y > "u") Y = q, q = void 0;
    sU2.renderToBuffer(K, q, function (z, w) {
      if (z) Y(z);
      let H = "data:image/png;base64,";
      H += w.toString("base64"), Y(null, H);
    });
  };
  sU2.renderToBuffer = function (K, q, Y) {
    if (typeof Y > "u") Y = q, q = void 0;
    let z = sU2.render(K, q),
      w = [];
    z.on("error", Y), z.on("data", function (H) {
      w.push(H);
    }), z.on("end", function () {
      Y(null, Buffer.concat(w));
    }), z.pack();
  };
  sU2.renderToFile = function (K, q, Y, z) {
    if (typeof z > "u") z = Y, Y = void 0;
    let w = !1,
      H = (...O) => {
        if (w) return;
        w = !0, z.apply(null, O);
      },
      J = oU2.createWriteStream(K);
    J.on("error", H), J.on("close", H), sU2.renderToFileStream(J, q, Y);
  };
  sU2.renderToFileStream = function (K, q, Y) {
    sU2.render(q, Y).pack().pipe(K);
  };
});

// Register to shared state
__$.UjK = UjK;
