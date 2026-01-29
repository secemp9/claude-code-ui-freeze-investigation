// Module: v36
// Dependencies: FR4, cR4, rR4, eR4, Xy4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var v36 = v(n4A => {
  Object.defineProperty(n4A, "__esModule", {
    value: !0
  });
  n4A.BatchLogRecordProcessor = n4A.InMemoryLogRecordExporter = n4A.SimpleLogRecordProcessor = n4A.ConsoleLogRecordExporter = n4A.LoggerProvider = void 0;
  var OG9 = __$.FR4();
  Object.defineProperty(n4A, "LoggerProvider", {
    enumerable: !0,
    get: function () {
      return OG9.LoggerProvider;
    }
  });
  var XG9 = __$.cR4();
  Object.defineProperty(n4A, "ConsoleLogRecordExporter", {
    enumerable: !0,
    get: function () {
      return XG9.ConsoleLogRecordExporter;
    }
  });
  var $G9 = __$.rR4();
  Object.defineProperty(n4A, "SimpleLogRecordProcessor", {
    enumerable: !0,
    get: function () {
      return $G9.SimpleLogRecordProcessor;
    }
  });
  var _G9 = __$.eR4();
  Object.defineProperty(n4A, "InMemoryLogRecordExporter", {
    enumerable: !0,
    get: function () {
      return _G9.InMemoryLogRecordExporter;
    }
  });
  var GG9 = __$.Xy4();
  Object.defineProperty(n4A, "BatchLogRecordProcessor", {
    enumerable: !0,
    get: function () {
      return GG9.BatchLogRecordProcessor;
    }
  });
});

// Register to shared state
__$.v36 = v36;
