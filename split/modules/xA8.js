// Module: xA8
// Dependencies: mt6, lt6, Oe6, IA8, hA8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var xA8 = v((yGz, bA8) => {
  var zI1 = __$.mt6(),
    k1q = CA("util"),
    KI1 = CA("path"),
    C1q = CA("http"),
    L1q = CA("https"),
    R1q = CA("url").parse,
    y1q = CA("fs"),
    I1q = CA("stream").Stream,
    qI1 = __$.lt6(),
    S1q = __$.Oe6(),
    h1q = __$.IA8(),
    YI1 = __$.hA8();
  bA8.exports = _Y;
  k1q.inherits(_Y, zI1);
  function _Y(A) {
    if (!(this instanceof _Y)) return new _Y(A);
    this._overheadLength = 0, this._valueLength = 0, this._valuesToMeasure = [], zI1.call(this), A = A || {};
    for (var K in A) this[K] = A[K];
  }
  _Y.LINE_BREAK = `\r
`;
  _Y.DEFAULT_CONTENT_TYPE = "application/octet-stream";
  _Y.prototype.append = function (A, K, q) {
    if (q = q || {}, typeof q == "string") q = {
      filename: q
    };
    var Y = zI1.prototype.append.bind(this);
    if (typeof K == "number") K = "" + K;
    if (Array.isArray(K)) {
      this._error(Error("Arrays are not supported."));
      return;
    }
    var z = this._multiPartHeader(A, K, q),
      w = this._multiPartFooter();
    Y(z), Y(K), Y(w), this._trackLength(z, K, q);
  };
  _Y.prototype._trackLength = function (A, K, q) {
    var Y = 0;
    if (q.knownLength != null) Y += +q.knownLength;else if (Buffer.isBuffer(K)) Y = K.length;else if (typeof K === "string") Y = Buffer.byteLength(K);
    if (this._valueLength += Y, this._overheadLength += Buffer.byteLength(A) + _Y.LINE_BREAK.length, !K || !K.path && !(K.readable && Object.prototype.hasOwnProperty.call(K, "httpVersion")) && !(K instanceof I1q)) return;
    if (!q.knownLength) this._valuesToMeasure.push(K);
  };
  _Y.prototype._lengthRetriever = function (A, K) {
    if (Object.prototype.hasOwnProperty.call(A, "fd")) {
      if (A.end != null && A.end != 1 / 0 && A.start != null) K(null, A.end + 1 - (A.start ? A.start : 0));else y1q.stat(A.path, function (q, Y) {
        var z;
        if (q) {
          K(q);
          return;
        }
        z = Y.size - (A.start ? A.start : 0), K(null, z);
      });
    } else if (Object.prototype.hasOwnProperty.call(A, "httpVersion")) K(null, +A.headers["content-length"]);else if (Object.prototype.hasOwnProperty.call(A, "httpModule")) A.on("response", function (q) {
      A.pause(), K(null, +q.headers["content-length"]);
    }), A.resume();else K("Unknown stream");
  };
  _Y.prototype._multiPartHeader = function (A, K, q) {
    if (typeof q.header == "string") return q.header;
    var Y = this._getContentDisposition(K, q),
      z = this._getContentType(K, q),
      w = "",
      H = {
        "Content-Disposition": ["form-data", 'name="' + A + '"'].concat(Y || []),
        "Content-Type": [].concat(z || [])
      };
    if (typeof q.header == "object") YI1(H, q.header);
    var J;
    for (var O in H) if (Object.prototype.hasOwnProperty.call(H, O)) {
      if (J = H[O], J == null) continue;
      if (!Array.isArray(J)) J = [J];
      if (J.length) w += O + ": " + J.join("; ") + _Y.LINE_BREAK;
    }
    return "--" + this.getBoundary() + _Y.LINE_BREAK + w + _Y.LINE_BREAK;
  };
  _Y.prototype._getContentDisposition = function (A, K) {
    var q, Y;
    if (typeof K.filepath === "string") q = KI1.normalize(K.filepath).replace(/\\/g, "/");else if (K.filename || A.name || A.path) q = KI1.basename(K.filename || A.name || A.path);else if (A.readable && Object.prototype.hasOwnProperty.call(A, "httpVersion")) q = KI1.basename(A.client._httpMessage.path || "");
    if (q) Y = 'filename="' + q + '"';
    return Y;
  };
  _Y.prototype._getContentType = function (A, K) {
    var q = K.contentType;
    if (!q && A.name) q = qI1.lookup(A.name);
    if (!q && A.path) q = qI1.lookup(A.path);
    if (!q && A.readable && Object.prototype.hasOwnProperty.call(A, "httpVersion")) q = A.headers["content-type"];
    if (!q && (K.filepath || K.filename)) q = qI1.lookup(K.filepath || K.filename);
    if (!q && typeof A == "object") q = _Y.DEFAULT_CONTENT_TYPE;
    return q;
  };
  _Y.prototype._multiPartFooter = function () {
    return function (A) {
      var K = _Y.LINE_BREAK,
        q = this._streams.length === 0;
      if (q) K += this._lastBoundary();
      A(K);
    }.bind(this);
  };
  _Y.prototype._lastBoundary = function () {
    return "--" + this.getBoundary() + "--" + _Y.LINE_BREAK;
  };
  _Y.prototype.getHeaders = function (A) {
    var K,
      q = {
        "content-type": "multipart/form-data; boundary=" + this.getBoundary()
      };
    for (K in A) if (Object.prototype.hasOwnProperty.call(A, K)) q[K.toLowerCase()] = A[K];
    return q;
  };
  _Y.prototype.setBoundary = function (A) {
    this._boundary = A;
  };
  _Y.prototype.getBoundary = function () {
    if (!this._boundary) this._generateBoundary();
    return this._boundary;
  };
  _Y.prototype.getBuffer = function () {
    var A = new Buffer.alloc(0),
      K = this.getBoundary();
    for (var q = 0, Y = this._streams.length; q < Y; q++) if (typeof this._streams[q] !== "function") {
      if (Buffer.isBuffer(this._streams[q])) A = Buffer.concat([A, this._streams[q]]);else A = Buffer.concat([A, Buffer.from(this._streams[q])]);
      if (typeof this._streams[q] !== "string" || this._streams[q].substring(2, K.length + 2) !== K) A = Buffer.concat([A, Buffer.from(_Y.LINE_BREAK)]);
    }
    return Buffer.concat([A, Buffer.from(this._lastBoundary())]);
  };
  _Y.prototype._generateBoundary = function () {
    var A = "--------------------------";
    for (var K = 0; K < 24; K++) A += Math.floor(Math.random() * 10).toString(16);
    this._boundary = A;
  };
  _Y.prototype.getLengthSync = function () {
    var A = this._overheadLength + this._valueLength;
    if (this._streams.length) A += this._lastBoundary().length;
    if (!this.hasKnownLength()) this._error(Error("Cannot calculate proper length in synchronous way."));
    return A;
  };
  _Y.prototype.hasKnownLength = function () {
    var A = !0;
    if (this._valuesToMeasure.length) A = !1;
    return A;
  };
  _Y.prototype.getLength = function (A) {
    var K = this._overheadLength + this._valueLength;
    if (this._streams.length) K += this._lastBoundary().length;
    if (!this._valuesToMeasure.length) {
      process.nextTick(A.bind(this, null, K));
      return;
    }
    S1q.parallel(this._valuesToMeasure, this._lengthRetriever, function (q, Y) {
      if (q) {
        A(q);
        return;
      }
      Y.forEach(function (z) {
        K += z;
      }), A(null, K);
    });
  };
  _Y.prototype.submit = function (A, K) {
    var q,
      Y,
      z = {
        method: "post"
      };
    if (typeof A == "string") A = R1q(A), Y = YI1({
      port: A.port,
      path: A.pathname,
      host: A.hostname,
      protocol: A.protocol
    }, z);else if (Y = YI1(A, z), !Y.port) Y.port = Y.protocol == "https:" ? 443 : 80;
    if (Y.headers = this.getHeaders(A.headers), Y.protocol == "https:") q = L1q.request(Y);else q = C1q.request(Y);
    return this.getLength(function (w, H) {
      if (w && w !== "Unknown stream") {
        this._error(w);
        return;
      }
      if (H) q.setHeader("Content-Length", H);
      if (this.pipe(q), K) {
        var J,
          O = function (X, $) {
            return q.removeListener("error", O), q.removeListener("response", J), K.call(this, X, $);
          };
        J = O.bind(this, null), q.on("error", O), q.on("response", J);
      }
    }.bind(this)), q;
  };
  _Y.prototype._error = function (A) {
    if (!this.error) this.error = A, this.pause(), this.emit("error", A);
  };
  _Y.prototype.toString = function () {
    return "[object FormData]";
  };
  h1q(_Y, "FormData");
});

// Register to shared state
__$.xA8 = xA8;
