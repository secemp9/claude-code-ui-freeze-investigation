// Module: Pr1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Pr1 = v(SC5 => {
  var TC5 = ["AuthFailure", "InvalidSignatureException", "RequestExpired", "RequestInTheFuture", "RequestTimeTooSkewed", "SignatureDoesNotMatch"],
    vC5 = ["BandwidthLimitExceeded", "EC2ThrottledException", "LimitExceededException", "PriorRequestNotComplete", "ProvisionedThroughputExceededException", "RequestLimitExceeded", "RequestThrottled", "RequestThrottledException", "SlowDown", "ThrottledException", "Throttling", "ThrottlingException", "TooManyRequestsException", "TransactionInProgressException"],
    EC5 = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"],
    kC5 = [500, 502, 503, 504],
    CC5 = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"],
    LC5 = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"],
    _p8 = A => A?.$retryable !== void 0,
    RC5 = A => TC5.includes(A.name),
    Gp8 = A => A.$metadata?.clockSkewCorrected,
    Zp8 = A => {
      let K = new Set(["Failed to fetch", "NetworkError when attempting to fetch resource", "The Internet connection appears to be offline", "Load failed", "Network request failed"]);
      if (!(A && A instanceof TypeError)) return !1;
      return K.has(A.message);
    },
    yC5 = A => A.$metadata?.httpStatusCode === 429 || vC5.includes(A.name) || A.$retryable?.throttling == !0,
    Mr1 = (A, K = 0) => _p8(A) || Gp8(A) || EC5.includes(A.name) || CC5.includes(A?.code || "") || LC5.includes(A?.code || "") || kC5.includes(A.$metadata?.httpStatusCode || 0) || Zp8(A) || A.cause !== void 0 && K <= 10 && Mr1(A.cause, K + 1),
    IC5 = A => {
      if (A.$metadata?.httpStatusCode !== void 0) {
        let K = A.$metadata.httpStatusCode;
        if (500 <= K && K <= 599 && !Mr1(A)) return !0;
        return !1;
      }
      return !1;
    };
  SC5.isBrowserNetworkError = Zp8;
  SC5.isClockSkewCorrectedError = Gp8;
  SC5.isClockSkewError = RC5;
  SC5.isRetryableByTrait = _p8;
  SC5.isServerError = IC5;
  SC5.isThrottlingError = yC5;
  SC5.isTransientError = Mr1;
});

// Register to shared state
__$.Pr1 = Pr1;
