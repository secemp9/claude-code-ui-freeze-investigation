// Module: qeA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var qeA = v(TC8 => {
  Object.defineProperty(TC8, "__esModule", {
    value: !0
  });
  var k85 = [["january", "1"], ["february", "2"], ["march", "3"], ["april", "4"], ["may", "5"], ["june", "6"], ["july", "7"], ["august", "8"], ["september", "9"], ["october", "10"], ["november", "11"], ["december", "12"], ["jan", "1"], ["feb", "2"], ["mar", "3"], ["apr", "4"], ["may", "5"], ["jun", "6"], ["jul", "7"], ["aug", "8"], ["sep", "9"], ["oct", "10"], ["nov", "11"], ["dec", "12"], ["sunday", "0"], ["monday", "1"], ["tuesday", "2"], ["wednesday", "3"], ["thursday", "4"], ["friday", "5"], ["saturday", "6"], ["sun", "0"], ["mon", "1"], ["tue", "2"], ["wed", "3"], ["thu", "4"], ["fri", "5"], ["sat", "6"]];
  function C85(A) {
    return k85.reduce((K, [q, Y]) => K.replace(new RegExp(q, "gi"), Y), A);
  }
  TC8.replaceCronNames = C85;
});

// Register to shared state
__$.qeA = qeA;
