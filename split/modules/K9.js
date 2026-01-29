// Module: K9
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var K9 = v(AU7 => {
  Object.defineProperty(AU7, "__esModule", {
    value: !0
  });
  AU7.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = AU7.DEFAULT_MAX_SEND_MESSAGE_LENGTH = AU7.Propagate = AU7.LogVerbosity = AU7.Status = void 0;
  var sQ7;
  (function (A) {
    A[A.OK = 0] = "OK", A[A.CANCELLED = 1] = "CANCELLED", A[A.UNKNOWN = 2] = "UNKNOWN", A[A.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", A[A.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", A[A.NOT_FOUND = 5] = "NOT_FOUND", A[A.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", A[A.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", A[A.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", A[A.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", A[A.ABORTED = 10] = "ABORTED", A[A.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", A[A.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", A[A.INTERNAL = 13] = "INTERNAL", A[A.UNAVAILABLE = 14] = "UNAVAILABLE", A[A.DATA_LOSS = 15] = "DATA_LOSS", A[A.UNAUTHENTICATED = 16] = "UNAUTHENTICATED";
  })(sQ7 || (AU7.Status = sQ7 = {}));
  var tQ7;
  (function (A) {
    A[A.DEBUG = 0] = "DEBUG", A[A.INFO = 1] = "INFO", A[A.ERROR = 2] = "ERROR", A[A.NONE = 3] = "NONE";
  })(tQ7 || (AU7.LogVerbosity = tQ7 = {}));
  var eQ7;
  (function (A) {
    A[A.DEADLINE = 1] = "DEADLINE", A[A.CENSUS_STATS_CONTEXT = 2] = "CENSUS_STATS_CONTEXT", A[A.CENSUS_TRACING_CONTEXT = 4] = "CENSUS_TRACING_CONTEXT", A[A.CANCELLATION = 8] = "CANCELLATION", A[A.DEFAULTS = 65535] = "DEFAULTS";
  })(eQ7 || (AU7.Propagate = eQ7 = {}));
  AU7.DEFAULT_MAX_SEND_MESSAGE_LENGTH = -1;
  AU7.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = 4194304;
});

// Register to shared state
__$.K9 = K9;
