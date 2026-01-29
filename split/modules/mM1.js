// Module: mM1
// Dependencies: Dv, DX

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mM1 = v((DAK, jAK) => {
  (function () {
    var A, K, q;
    q = __$.Dv(), A = __$.DX(), jAK.exports = K = class extends q {
      constructor(z, w, H, J, O, X) {
        super(z);
        if (w == null) throw Error("Missing DTD element name. " + this.debugInfo());
        if (H == null) throw Error("Missing DTD attribute name. " + this.debugInfo(w));
        if (!J) throw Error("Missing DTD attribute type. " + this.debugInfo(w));
        if (!O) throw Error("Missing DTD attribute default. " + this.debugInfo(w));
        if (O.indexOf("#") !== 0) O = "#" + O;
        if (!O.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) throw Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(w));
        if (X && !O.match(/^(#FIXED|#DEFAULT)$/)) throw Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(w));
        if (this.elementName = this.stringify.name(w), this.type = A.AttributeDeclaration, this.attributeName = this.stringify.name(H), this.attributeType = this.stringify.dtdAttType(J), X) this.defaultValue = this.stringify.dtdAttDefault(X);
        this.defaultValueType = O;
      }
      toString(z) {
        return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(z));
      }
    };
  }).call(DAK);
});

// Register to shared state
__$.mM1 = mM1;
