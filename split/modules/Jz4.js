// Module: Jz4
// Dependencies: SZ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Jz4 = v((z8w, Hz4) => {
  var {
      webidl: VT
    } = __$.SZ(),
    oK1 = Symbol("ProgressEvent state");
  class dRA extends Event {
    constructor(A, K = {}) {
      A = VT.converters.DOMString(A, "ProgressEvent constructor", "type"), K = VT.converters.ProgressEventInit(K ?? {});
      super(A, K);
      this[oK1] = {
        lengthComputable: K.lengthComputable,
        loaded: K.loaded,
        total: K.total
      };
    }
    get lengthComputable() {
      return VT.brandCheck(this, dRA), this[oK1].lengthComputable;
    }
    get loaded() {
      return VT.brandCheck(this, dRA), this[oK1].loaded;
    }
    get total() {
      return VT.brandCheck(this, dRA), this[oK1].total;
    }
  }
  VT.converters.ProgressEventInit = VT.dictionaryConverter([{
    key: "lengthComputable",
    converter: VT.converters.boolean,
    defaultValue: () => !1
  }, {
    key: "loaded",
    converter: VT.converters["unsigned long long"],
    defaultValue: () => 0
  }, {
    key: "total",
    converter: VT.converters["unsigned long long"],
    defaultValue: () => 0
  }, {
    key: "bubbles",
    converter: VT.converters.boolean,
    defaultValue: () => !1
  }, {
    key: "cancelable",
    converter: VT.converters.boolean,
    defaultValue: () => !1
  }, {
    key: "composed",
    converter: VT.converters.boolean,
    defaultValue: () => !1
  }]);
  Hz4.exports = {
    ProgressEvent: dRA
  };
});

// Register to shared state
__$.Jz4 = Jz4;
