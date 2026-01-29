// Module: sjK
// Dependencies: KF6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var sjK = v(Ep2 => {
  var vp2 = __$.KF6();
  Ep2.render = vp2.render;
  Ep2.renderToFile = function (K, q, Y, z) {
    if (typeof z > "u") z = Y, Y = void 0;
    let w = CA("fs"),
      J = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' + Ep2.render(q, Y);
    w.writeFile(K, J, z);
  };
});

// Register to shared state
__$.sjK = sjK;
