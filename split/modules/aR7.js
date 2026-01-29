// Module: aR7
// Dependencies: wS

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aR7 = v((WDH, oR7) => {
  var {
      ParserError: vrY
    } = __$.wS(),
    ErY = /\.(txt|htm|html|md|xml|js|min|map|css|scss|less|svg)$/i;
  oR7.exports = {
    order: 300,
    allowEmpty: !0,
    encoding: "utf8",
    canParse(A) {
      return (typeof A.data === "string" || Buffer.isBuffer(A.data)) && ErY.test(A.url);
    },
    parse(A) {
      if (typeof A.data === "string") return A.data;else if (Buffer.isBuffer(A.data)) return A.data.toString(this.encoding);else throw new vrY("data is not text", A.url);
    }
  };
});

// Register to shared state
__$.aR7 = aR7;
