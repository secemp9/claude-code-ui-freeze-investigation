// Module: _2
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var _2 = v((l1w, jK4) => {
  class iO extends Error {
    constructor(A) {
      super(A);
      this.name = "UndiciError", this.code = "UND_ERR";
    }
  }
  class o74 extends iO {
    constructor(A) {
      super(A);
      this.name = "ConnectTimeoutError", this.message = A || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT";
    }
  }
  class a74 extends iO {
    constructor(A) {
      super(A);
      this.name = "HeadersTimeoutError", this.message = A || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT";
    }
  }
  class s74 extends iO {
    constructor(A) {
      super(A);
      this.name = "HeadersOverflowError", this.message = A || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW";
    }
  }
  class t74 extends iO {
    constructor(A) {
      super(A);
      this.name = "BodyTimeoutError", this.message = A || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT";
    }
  }
  class e74 extends iO {
    constructor(A, K, q, Y) {
      super(A);
      this.name = "ResponseStatusCodeError", this.message = A || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = Y, this.status = K, this.statusCode = K, this.headers = q;
    }
  }
  class AK4 extends iO {
    constructor(A) {
      super(A);
      this.name = "InvalidArgumentError", this.message = A || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG";
    }
  }
  class KK4 extends iO {
    constructor(A) {
      super(A);
      this.name = "InvalidReturnValueError", this.message = A || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE";
    }
  }
  class K66 extends iO {
    constructor(A) {
      super(A);
      this.name = "AbortError", this.message = A || "The operation was aborted";
    }
  }
  class qK4 extends K66 {
    constructor(A) {
      super(A);
      this.name = "AbortError", this.message = A || "Request aborted", this.code = "UND_ERR_ABORTED";
    }
  }
  class YK4 extends iO {
    constructor(A) {
      super(A);
      this.name = "InformationalError", this.message = A || "Request information", this.code = "UND_ERR_INFO";
    }
  }
  class zK4 extends iO {
    constructor(A) {
      super(A);
      this.name = "RequestContentLengthMismatchError", this.message = A || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
    }
  }
  class wK4 extends iO {
    constructor(A) {
      super(A);
      this.name = "ResponseContentLengthMismatchError", this.message = A || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
    }
  }
  class HK4 extends iO {
    constructor(A) {
      super(A);
      this.name = "ClientDestroyedError", this.message = A || "The client is destroyed", this.code = "UND_ERR_DESTROYED";
    }
  }
  class JK4 extends iO {
    constructor(A) {
      super(A);
      this.name = "ClientClosedError", this.message = A || "The client is closed", this.code = "UND_ERR_CLOSED";
    }
  }
  class OK4 extends iO {
    constructor(A, K) {
      super(A);
      this.name = "SocketError", this.message = A || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = K;
    }
  }
  class XK4 extends iO {
    constructor(A) {
      super(A);
      this.name = "NotSupportedError", this.message = A || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED";
    }
  }
  class $K4 extends iO {
    constructor(A) {
      super(A);
      this.name = "MissingUpstreamError", this.message = A || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
    }
  }
  class _K4 extends Error {
    constructor(A, K, q) {
      super(A);
      this.name = "HTTPParserError", this.code = K ? `HPE_${K}` : void 0, this.data = q ? q.toString() : void 0;
    }
  }
  class GK4 extends iO {
    constructor(A) {
      super(A);
      this.name = "ResponseExceededMaxSizeError", this.message = A || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE";
    }
  }
  class ZK4 extends iO {
    constructor(A, K, {
      headers: q,
      data: Y
    }) {
      super(A);
      this.name = "RequestRetryError", this.message = A || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = K, this.data = Y, this.headers = q;
    }
  }
  class WK4 extends iO {
    constructor(A, K, {
      headers: q,
      data: Y
    }) {
      super(A);
      this.name = "ResponseError", this.message = A || "Response error", this.code = "UND_ERR_RESPONSE", this.statusCode = K, this.data = Y, this.headers = q;
    }
  }
  class DK4 extends iO {
    constructor(A, K, q) {
      super(K, {
        cause: A,
        ...(q ?? {})
      });
      this.name = "SecureProxyConnectionError", this.message = K || "Secure Proxy Connection failed", this.code = "UND_ERR_PRX_TLS", this.cause = A;
    }
  }
  jK4.exports = {
    AbortError: K66,
    HTTPParserError: _K4,
    UndiciError: iO,
    HeadersTimeoutError: a74,
    HeadersOverflowError: s74,
    BodyTimeoutError: t74,
    RequestContentLengthMismatchError: zK4,
    ConnectTimeoutError: o74,
    ResponseStatusCodeError: e74,
    InvalidArgumentError: AK4,
    InvalidReturnValueError: KK4,
    RequestAbortedError: qK4,
    ClientDestroyedError: HK4,
    ClientClosedError: JK4,
    InformationalError: YK4,
    SocketError: OK4,
    NotSupportedError: XK4,
    ResponseContentLengthMismatchError: wK4,
    BalancedPoolMissingUpstreamError: $K4,
    ResponseExceededMaxSizeError: GK4,
    RequestRetryError: ZK4,
    ResponseError: WK4,
    SecureProxyConnectionError: DK4
  };
});

// Register to shared state
__$._2 = _2;
