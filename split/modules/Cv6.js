// Module: Cv6
// Dependencies: hgA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Cv6 = v(Lu7 => {
  Object.defineProperty(Lu7, "__esModule", {
    value: !0
  });
  Lu7.MetricStorage = void 0;
  var dA2 = __$.hgA();
  class Cu7 {
    _instrumentDescriptor;
    constructor(A) {
      this._instrumentDescriptor = A;
    }
    getInstrumentDescriptor() {
      return this._instrumentDescriptor;
    }
    updateDescription(A) {
      this._instrumentDescriptor = (0, dA2.createInstrumentDescriptor)(this._instrumentDescriptor.name, this._instrumentDescriptor.type, {
        description: A,
        valueType: this._instrumentDescriptor.valueType,
        unit: this._instrumentDescriptor.unit,
        advice: this._instrumentDescriptor.advice
      });
    }
  }
  Lu7.MetricStorage = Cu7;
});

// Register to shared state
__$.Cv6 = Cv6;
