// Module: uQ8
// Dependencies: bQ8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uQ8 = v(xQ8 => {
  Object.defineProperty(xQ8, "__esModule", {
    value: !0
  });
  xQ8.parseXML = _T5;
  var $T5 = __$.bQ8(),
    xn1 = new $T5.XMLParser({
      attributeNamePrefix: "",
      htmlEntities: !0,
      ignoreAttributes: !1,
      ignoreDeclaration: !0,
      parseTagValue: !1,
      trimValues: !1,
      tagValueProcessor: (A, K) => K.trim() === "" && K.includes(`
`) ? "" : void 0
    });
  xn1.addEntity("#xD", "\r");
  xn1.addEntity("#10", `
`);
  function _T5(A) {
    return xn1.parse(A, !0);
  }
});

// Register to shared state
__$.uQ8 = uQ8;
