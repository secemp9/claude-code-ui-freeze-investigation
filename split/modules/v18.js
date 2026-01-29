// Module: v18
// Dependencies: P18

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var v18 = v((QZz, bI1) => {
  var OTA = CA("url"),
    JTA = OTA.URL,
    d6q = CA("http"),
    c6q = CA("https"),
    CI1 = CA("stream").Writable,
    LI1 = CA("assert"),
    V18 = __$.P18();
  (function () {
    var K = typeof process < "u",
      q = typeof window < "u" && typeof document < "u",
      Y = N1A(Error.captureStackTrace);
    if (!K && (q || !Y)) console.warn("The follow-redirects package should be excluded from browser builds.");
  })();
  var RI1 = !1;
  try {
    LI1(new JTA(""));
  } catch (A) {
    RI1 = A.code === "ERR_INVALID_URL";
  }
  var l6q = ["auth", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "hash"],
    yI1 = ["abort", "aborted", "connect", "error", "socket", "timeout"],
    II1 = Object.create(null);
  yI1.forEach(function (A) {
    II1[A] = function (K, q, Y) {
      this._redirectable.emit(A, K, q, Y);
    };
  });
  var vI1 = XTA("ERR_INVALID_URL", "Invalid URL", TypeError),
    EI1 = XTA("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed"),
    i6q = XTA("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", EI1),
    n6q = XTA("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit"),
    r6q = XTA("ERR_STREAM_WRITE_AFTER_END", "write after end"),
    o6q = CI1.prototype.destroy || N18;
  function aP(A, K) {
    if (CI1.call(this), this._sanitizeOptions(A), this._options = A, this._ended = !1, this._ending = !1, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], K) this.on("response", K);
    var q = this;
    this._onNativeResponse = function (Y) {
      try {
        q._processResponse(Y);
      } catch (z) {
        q.emit("error", z instanceof EI1 ? z : new EI1({
          cause: z
        }));
      }
    }, this._performRequest();
  }
  aP.prototype = Object.create(CI1.prototype);
  aP.prototype.abort = function () {
    hI1(this._currentRequest), this._currentRequest.abort(), this.emit("abort");
  };
  aP.prototype.destroy = function (A) {
    return hI1(this._currentRequest, A), o6q.call(this, A), this;
  };
  aP.prototype.write = function (A, K, q) {
    if (this._ending) throw new r6q();
    if (!f1A(A) && !t6q(A)) throw TypeError("data should be a string, Buffer or Uint8Array");
    if (N1A(K)) q = K, K = null;
    if (A.length === 0) {
      if (q) q();
      return;
    }
    if (this._requestBodyLength + A.length <= this._options.maxBodyLength) this._requestBodyLength += A.length, this._requestBodyBuffers.push({
      data: A,
      encoding: K
    }), this._currentRequest.write(A, K, q);else this.emit("error", new n6q()), this.abort();
  };
  aP.prototype.end = function (A, K, q) {
    if (N1A(A)) q = A, A = K = null;else if (N1A(K)) q = K, K = null;
    if (!A) this._ended = this._ending = !0, this._currentRequest.end(null, null, q);else {
      var Y = this,
        z = this._currentRequest;
      this.write(A, K, function () {
        Y._ended = !0, z.end(null, null, q);
      }), this._ending = !0;
    }
  };
  aP.prototype.setHeader = function (A, K) {
    this._options.headers[A] = K, this._currentRequest.setHeader(A, K);
  };
  aP.prototype.removeHeader = function (A) {
    delete this._options.headers[A], this._currentRequest.removeHeader(A);
  };
  aP.prototype.setTimeout = function (A, K) {
    var q = this;
    function Y(H) {
      H.setTimeout(A), H.removeListener("timeout", H.destroy), H.addListener("timeout", H.destroy);
    }
    function z(H) {
      if (q._timeout) clearTimeout(q._timeout);
      q._timeout = setTimeout(function () {
        q.emit("timeout"), w();
      }, A), Y(H);
    }
    function w() {
      if (q._timeout) clearTimeout(q._timeout), q._timeout = null;
      if (q.removeListener("abort", w), q.removeListener("error", w), q.removeListener("response", w), q.removeListener("close", w), K) q.removeListener("timeout", K);
      if (!q.socket) q._currentRequest.removeListener("socket", z);
    }
    if (K) this.on("timeout", K);
    if (this.socket) z(this.socket);else this._currentRequest.once("socket", z);
    return this.on("socket", Y), this.on("abort", w), this.on("error", w), this.on("response", w), this.on("close", w), this;
  };
  ["flushHeaders", "getHeader", "setNoDelay", "setSocketKeepAlive"].forEach(function (A) {
    aP.prototype[A] = function (K, q) {
      return this._currentRequest[A](K, q);
    };
  });
  ["aborted", "connection", "socket"].forEach(function (A) {
    Object.defineProperty(aP.prototype, A, {
      get: function () {
        return this._currentRequest[A];
      }
    });
  });
  aP.prototype._sanitizeOptions = function (A) {
    if (!A.headers) A.headers = {};
    if (A.host) {
      if (!A.hostname) A.hostname = A.host;
      delete A.host;
    }
    if (!A.pathname && A.path) {
      var K = A.path.indexOf("?");
      if (K < 0) A.pathname = A.path;else A.pathname = A.path.substring(0, K), A.search = A.path.substring(K);
    }
  };
  aP.prototype._performRequest = function () {
    var A = this._options.protocol,
      K = this._options.nativeProtocols[A];
    if (!K) throw TypeError("Unsupported protocol " + A);
    if (this._options.agents) {
      var q = A.slice(0, -1);
      this._options.agent = this._options.agents[q];
    }
    var Y = this._currentRequest = K.request(this._options, this._onNativeResponse);
    Y._redirectable = this;
    for (var z of yI1) Y.on(z, II1[z]);
    if (this._currentUrl = /^\//.test(this._options.path) ? OTA.format(this._options) : this._options.path, this._isRedirect) {
      var w = 0,
        H = this,
        J = this._requestBodyBuffers;
      (function O(X) {
        if (Y === H._currentRequest) {
          if (X) H.emit("error", X);else if (w < J.length) {
            var $ = J[w++];
            if (!Y.finished) Y.write($.data, $.encoding, O);
          } else if (H._ended) Y.end();
        }
      })();
    }
  };
  aP.prototype._processResponse = function (A) {
    var K = A.statusCode;
    if (this._options.trackRedirects) this._redirects.push({
      url: this._currentUrl,
      headers: A.headers,
      statusCode: K
    });
    var q = A.headers.location;
    if (!q || this._options.followRedirects === !1 || K < 300 || K >= 400) {
      A.responseUrl = this._currentUrl, A.redirects = this._redirects, this.emit("response", A), this._requestBodyBuffers = [];
      return;
    }
    if (hI1(this._currentRequest), A.destroy(), ++this._redirectCount > this._options.maxRedirects) throw new i6q();
    var Y,
      z = this._options.beforeRedirect;
    if (z) Y = Object.assign({
      Host: A.req.getHeader("host")
    }, this._options.headers);
    var w = this._options.method;
    if ((K === 301 || K === 302) && this._options.method === "POST" || K === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) this._options.method = "GET", this._requestBodyBuffers = [], TI1(/^content-/i, this._options.headers);
    var H = TI1(/^host$/i, this._options.headers),
      J = SI1(this._currentUrl),
      O = H || J.host,
      X = /^\w+:/.test(q) ? this._currentUrl : OTA.format(Object.assign(J, {
        host: O
      })),
      $ = a6q(q, X);
    if (V18("redirecting to", $.href), this._isRedirect = !0, kI1($, this._options), $.protocol !== J.protocol && $.protocol !== "https:" || $.host !== O && !s6q($.host, O)) TI1(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers);
    if (N1A(z)) {
      var _ = {
          headers: A.headers,
          statusCode: K
        },
        G = {
          url: X,
          method: w,
          headers: Y
        };
      z(this._options, _, G), this._sanitizeOptions(this._options);
    }
    this._performRequest();
  };
  function f18(A) {
    var K = {
        maxRedirects: 21,
        maxBodyLength: 10485760
      },
      q = {};
    return Object.keys(A).forEach(function (Y) {
      var z = Y + ":",
        w = q[z] = A[Y],
        H = K[Y] = Object.create(w);
      function J(X, $, _) {
        if (e6q(X)) X = kI1(X);else if (f1A(X)) X = kI1(SI1(X));else _ = $, $ = T18(X), X = {
          protocol: z
        };
        if (N1A($)) _ = $, $ = null;
        if ($ = Object.assign({
          maxRedirects: K.maxRedirects,
          maxBodyLength: K.maxBodyLength
        }, X, $), $.nativeProtocols = q, !f1A($.host) && !f1A($.hostname)) $.hostname = "::1";
        return LI1.equal($.protocol, z, "protocol mismatch"), V18("options", $), new aP($, _);
      }
      function O(X, $, _) {
        var G = H.request(X, $, _);
        return G.end(), G;
      }
      Object.defineProperties(H, {
        request: {
          value: J,
          configurable: !0,
          enumerable: !0,
          writable: !0
        },
        get: {
          value: O,
          configurable: !0,
          enumerable: !0,
          writable: !0
        }
      });
    }), K;
  }
  function N18() {}
  function SI1(A) {
    var K;
    if (RI1) K = new JTA(A);else if (K = T18(OTA.parse(A)), !f1A(K.protocol)) throw new vI1({
      input: A
    });
    return K;
  }
  function a6q(A, K) {
    return RI1 ? new JTA(A, K) : SI1(OTA.resolve(K, A));
  }
  function T18(A) {
    if (/^\[/.test(A.hostname) && !/^\[[:0-9a-f]+\]$/i.test(A.hostname)) throw new vI1({
      input: A.href || A
    });
    if (/^\[/.test(A.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(A.host)) throw new vI1({
      input: A.href || A
    });
    return A;
  }
  function kI1(A, K) {
    var q = K || {};
    for (var Y of l6q) q[Y] = A[Y];
    if (q.hostname.startsWith("[")) q.hostname = q.hostname.slice(1, -1);
    if (q.port !== "") q.port = Number(q.port);
    return q.path = q.search ? q.pathname + q.search : q.pathname, q;
  }
  function TI1(A, K) {
    var q;
    for (var Y in K) if (A.test(Y)) q = K[Y], delete K[Y];
    return q === null || typeof q > "u" ? void 0 : String(q).trim();
  }
  function XTA(A, K, q) {
    function Y(z) {
      if (N1A(Error.captureStackTrace)) Error.captureStackTrace(this, this.constructor);
      Object.assign(this, z || {}), this.code = A, this.message = this.cause ? K + ": " + this.cause.message : K;
    }
    return Y.prototype = Object.create((q || Error).prototype), Object.defineProperties(Y.prototype, {
      constructor: {
        value: Y,
        enumerable: !1
      },
      name: {
        value: "Error [" + A + "]",
        enumerable: !1
      }
    }), Y;
  }
  function hI1(A, K) {
    for (var q of yI1) A.removeListener(q, II1[q]);
    A.on("error", N18), A.destroy(K);
  }
  function s6q(A, K) {
    LI1(f1A(A) && f1A(K));
    var q = A.length - K.length - 1;
    return q > 0 && A[q] === "." && A.endsWith(K);
  }
  function f1A(A) {
    return typeof A === "string" || A instanceof String;
  }
  function N1A(A) {
    return typeof A === "function";
  }
  function t6q(A) {
    return typeof A === "object" && "length" in A;
  }
  function e6q(A) {
    return JTA && A instanceof JTA;
  }
  bI1.exports = f18({
    http: d6q,
    https: c6q
  });
  bI1.exports.wrap = f18;
});

// Register to shared state
__$.v18 = v18;
