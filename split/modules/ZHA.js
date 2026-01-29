// Module: ZHA
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ZHA = v(nM8 => {
  Object.defineProperty(nM8, "__esModule", {
    value: !0
  });
  nM8.SpanStatus = void 0;
  (function (A) {
    A.Ok = "ok";
    let q = "deadline_exceeded";
    A.DeadlineExceeded = q;
    let Y = "unauthenticated";
    A.Unauthenticated = Y;
    let z = "permission_denied";
    A.PermissionDenied = z;
    let w = "not_found";
    A.NotFound = w;
    let H = "resource_exhausted";
    A.ResourceExhausted = H;
    let J = "invalid_argument";
    A.InvalidArgument = J;
    let O = "unimplemented";
    A.Unimplemented = O;
    let X = "unavailable";
    A.Unavailable = X;
    let $ = "internal_error";
    A.InternalError = $;
    let _ = "unknown_error";
    A.UnknownError = _;
    let G = "cancelled";
    A.Cancelled = G;
    let Z = "already_exists";
    A.AlreadyExists = Z;
    let W = "failed_precondition";
    A.FailedPrecondition = W;
    let D = "aborted";
    A.Aborted = D;
    let j = "out_of_range";
    A.OutOfRange = j;
    let M = "data_loss";
    A.DataLoss = M;
  })(nM8.SpanStatus || (nM8.SpanStatus = {}));
  function vB1(A) {
    if (A < 400 && A >= 100) return "ok";
    if (A >= 400 && A < 500) switch (A) {
      case 401:
        return "unauthenticated";
      case 403:
        return "permission_denied";
      case 404:
        return "not_found";
      case 409:
        return "already_exists";
      case 413:
        return "failed_precondition";
      case 429:
        return "resource_exhausted";
      default:
        return "invalid_argument";
    }
    if (A >= 500 && A < 600) switch (A) {
      case 501:
        return "unimplemented";
      case 503:
        return "unavailable";
      case 504:
        return "deadline_exceeded";
      default:
        return "internal_error";
    }
    return "unknown_error";
  }
  var Ggq = vB1;
  function Zgq(A, K) {
    A.setTag("http.status_code", String(K)), A.setData("http.response.status_code", K);
    let q = vB1(K);
    if (q !== "unknown_error") A.setStatus(q);
  }
  nM8.getSpanStatusFromHttpCode = vB1;
  nM8.setHttpStatus = Zgq;
  nM8.spanStatusfromHttpCode = Ggq;
});

// Register to shared state
__$.ZHA = ZHA;
