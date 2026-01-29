// Module: rw6
// Dependencies: rl4, Qw6, yz1, Iz1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rw6 = v((Wn9, PM) => {
  var pi9 = __$.rl4(),
    UZ = __$.Qw6(),
    {
      utf8DecodeWithoutBOM: di9
    } = __$.yz1(),
    {
      percentDecodeString: ci9,
      utf8PercentEncodeCodePoint: hz1,
      utf8PercentEncodeString: bz1,
      isC0ControlPercentEncode: Xi4,
      isFragmentPercentEncode: li9,
      isQueryPercentEncode: ii9,
      isSpecialQueryPercentEncode: ni9,
      isPathPercentEncode: ri9,
      isUserinfoPercentEncode: lw6
    } = __$.Iz1();
  function s8(A) {
    return A.codePointAt(0);
  }
  var $i4 = {
      ftp: 21,
      file: null,
      http: 80,
      https: 443,
      ws: 80,
      wss: 443
    },
    U5 = Symbol("failure");
  function wi4(A) {
    return [...A].length;
  }
  function Hi4(A, K) {
    let q = A[K];
    return isNaN(q) ? void 0 : String.fromCodePoint(q);
  }
  function Ji4(A) {
    return A === "." || A.toLowerCase() === "%2e";
  }
  function oi9(A) {
    return A = A.toLowerCase(), A === ".." || A === "%2e." || A === ".%2e" || A === "%2e%2e";
  }
  function ai9(A, K) {
    return UZ.isASCIIAlpha(A) && (K === s8(":") || K === s8("|"));
  }
  function _i4(A) {
    return A.length === 2 && UZ.isASCIIAlpha(A.codePointAt(0)) && (A[1] === ":" || A[1] === "|");
  }
  function si9(A) {
    return A.length === 2 && UZ.isASCIIAlpha(A.codePointAt(0)) && A[1] === ":";
  }
  function Gi4(A) {
    return A.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|<|>|\?|@|\[|\\|\]|\^|\|/u) !== -1;
  }
  function ti9(A) {
    return Gi4(A) || A.search(/[\u0000-\u001F]|%|\u007F/u) !== -1;
  }
  function Sz1(A) {
    return $i4[A] !== void 0;
  }
  function QZ(A) {
    return Sz1(A.scheme);
  }
  function dw6(A) {
    return !Sz1(A.scheme);
  }
  function Zi4(A) {
    return $i4[A];
  }
  function Wi4(A) {
    if (A === "") return U5;
    let K = 10;
    if (A.length >= 2 && A.charAt(0) === "0" && A.charAt(1).toLowerCase() === "x") A = A.substring(2), K = 16;else if (A.length >= 2 && A.charAt(0) === "0") A = A.substring(1), K = 8;
    if (A === "") return 0;
    let q = /[^0-7]/u;
    if (K === 10) q = /[^0-9]/u;
    if (K === 16) q = /[^0-9A-Fa-f]/u;
    if (q.test(A)) return U5;
    return parseInt(A, K);
  }
  function ei9(A) {
    let K = A.split(".");
    if (K[K.length - 1] === "") {
      if (K.length > 1) K.pop();
    }
    if (K.length > 4) return U5;
    let q = [];
    for (let w of K) {
      let H = Wi4(w);
      if (H === U5) return U5;
      q.push(H);
    }
    for (let w = 0; w < q.length - 1; ++w) if (q[w] > 255) return U5;
    if (q[q.length - 1] >= 256 ** (5 - q.length)) return U5;
    let Y = q.pop(),
      z = 0;
    for (let w of q) Y += w * 256 ** (3 - z), ++z;
    return Y;
  }
  function An9(A) {
    let K = "",
      q = A;
    for (let Y = 1; Y <= 4; ++Y) {
      if (K = String(q % 256) + K, Y !== 4) K = `.${K}`;
      q = Math.floor(q / 256);
    }
    return K;
  }
  function Kn9(A) {
    let K = [0, 0, 0, 0, 0, 0, 0, 0],
      q = 0,
      Y = null,
      z = 0;
    if (A = Array.from(A, w => w.codePointAt(0)), A[z] === s8(":")) {
      if (A[z + 1] !== s8(":")) return U5;
      z += 2, ++q, Y = q;
    }
    while (z < A.length) {
      if (q === 8) return U5;
      if (A[z] === s8(":")) {
        if (Y !== null) return U5;
        ++z, ++q, Y = q;
        continue;
      }
      let w = 0,
        H = 0;
      while (H < 4 && UZ.isASCIIHex(A[z])) w = w * 16 + parseInt(Hi4(A, z), 16), ++z, ++H;
      if (A[z] === s8(".")) {
        if (H === 0) return U5;
        if (z -= H, q > 6) return U5;
        let J = 0;
        while (A[z] !== void 0) {
          let O = null;
          if (J > 0) if (A[z] === s8(".") && J < 4) ++z;else return U5;
          if (!UZ.isASCIIDigit(A[z])) return U5;
          while (UZ.isASCIIDigit(A[z])) {
            let X = parseInt(Hi4(A, z));
            if (O === null) O = X;else if (O === 0) return U5;else O = O * 10 + X;
            if (O > 255) return U5;
            ++z;
          }
          if (K[q] = K[q] * 256 + O, ++J, J === 2 || J === 4) ++q;
        }
        if (J !== 4) return U5;
        break;
      } else if (A[z] === s8(":")) {
        if (++z, A[z] === void 0) return U5;
      } else if (A[z] !== void 0) return U5;
      K[q] = w, ++q;
    }
    if (Y !== null) {
      let w = q - Y;
      q = 7;
      while (q !== 0 && w > 0) {
        let H = K[Y + w - 1];
        K[Y + w - 1] = K[q], K[q] = H, --q, --w;
      }
    } else if (Y === null && q !== 8) return U5;
    return K;
  }
  function qn9(A) {
    let K = "",
      q = wn9(A),
      Y = !1;
    for (let z = 0; z <= 7; ++z) {
      if (Y && A[z] === 0) continue;else if (Y) Y = !1;
      if (q === z) {
        K += z === 0 ? "::" : ":", Y = !0;
        continue;
      }
      if (K += A[z].toString(16), z !== 7) K += ":";
    }
    return K;
  }
  function cw6(A, K = !1) {
    if (A[0] === "[") {
      if (A[A.length - 1] !== "]") return U5;
      return Kn9(A.substring(1, A.length - 1));
    }
    if (K) return zn9(A);
    let q = di9(ci9(A)),
      Y = Hn9(q);
    if (Y === U5) return U5;
    if (Yn9(Y)) return ei9(Y);
    return Y;
  }
  function Yn9(A) {
    let K = A.split(".");
    if (K[K.length - 1] === "") {
      if (K.length === 1) return !1;
      K.pop();
    }
    let q = K[K.length - 1];
    if (Wi4(q) !== U5) return !0;
    if (/^[0-9]+$/u.test(q)) return !0;
    return !1;
  }
  function zn9(A) {
    if (Gi4(A)) return U5;
    return bz1(A, Xi4);
  }
  function wn9(A) {
    let K = null,
      q = 1,
      Y = null,
      z = 0;
    for (let w = 0; w < A.length; ++w) if (A[w] !== 0) {
      if (z > q) K = Y, q = z;
      Y = null, z = 0;
    } else {
      if (Y === null) Y = w;
      ++z;
    }
    if (z > q) return Y;
    return K;
  }
  function iw6(A) {
    if (typeof A === "number") return An9(A);
    if (A instanceof Array) return `[${qn9(A)}]`;
    return A;
  }
  function Hn9(A, K = !1) {
    let q = pi9.toASCII(A, {
      checkHyphens: K,
      checkBidi: !0,
      checkJoiners: !0,
      useSTD3ASCIIRules: K,
      transitionalProcessing: !1,
      verifyDNSLength: K,
      ignoreInvalidPunycode: !1
    });
    if (q === null) return U5;
    if (!K) {
      if (q === "") return U5;
      if (ti9(q)) return U5;
    }
    return q;
  }
  function Jn9(A) {
    let K = 0,
      q = A.length;
    for (; K < q; ++K) if (A.charCodeAt(K) > 32) break;
    for (; q > K; --q) if (A.charCodeAt(q - 1) > 32) break;
    return A.substring(K, q);
  }
  function On9(A) {
    return A.replace(/\u0009|\u000A|\u000D/ug, "");
  }
  function Di4(A) {
    let {
      path: K
    } = A;
    if (K.length === 0) return;
    if (A.scheme === "file" && K.length === 1 && $n9(K[0])) return;
    K.pop();
  }
  function ji4(A) {
    return A.username !== "" || A.password !== "";
  }
  function Xn9(A) {
    return A.host === null || A.host === "" || A.scheme === "file";
  }
  function KhA(A) {
    return typeof A.path === "string";
  }
  function $n9(A) {
    return /^[A-Za-z]:$/u.test(A);
  }
  function eO(A, K, q, Y, z) {
    if (this.pointer = 0, this.input = A, this.base = K || null, this.encodingOverride = q || "utf-8", this.stateOverride = z, this.url = Y, this.failure = !1, this.parseError = !1, !this.url) {
      this.url = {
        scheme: "",
        username: "",
        password: "",
        host: null,
        port: null,
        path: [],
        query: null,
        fragment: null
      };
      let H = Jn9(this.input);
      if (H !== this.input) this.parseError = !0;
      this.input = H;
    }
    let w = On9(this.input);
    if (w !== this.input) this.parseError = !0;
    this.input = w, this.state = z || "scheme start", this.buffer = "", this.atFlag = !1, this.arrFlag = !1, this.passwordTokenSeenFlag = !1, this.input = Array.from(this.input, H => H.codePointAt(0));
    for (; this.pointer <= this.input.length; ++this.pointer) {
      let H = this.input[this.pointer],
        J = isNaN(H) ? void 0 : String.fromCodePoint(H),
        O = this[`parse ${this.state}`](H, J);
      if (!O) break;else if (O === U5) {
        this.failure = !0;
        break;
      }
    }
  }
  eO.prototype["parse scheme start"] = function (K, q) {
    if (UZ.isASCIIAlpha(K)) this.buffer += q.toLowerCase(), this.state = "scheme";else if (!this.stateOverride) this.state = "no scheme", --this.pointer;else return this.parseError = !0, U5;
    return !0;
  };
  eO.prototype["parse scheme"] = function (K, q) {
    if (UZ.isASCIIAlphanumeric(K) || K === s8("+") || K === s8("-") || K === s8(".")) this.buffer += q.toLowerCase();else if (K === s8(":")) {
      if (this.stateOverride) {
        if (QZ(this.url) && !Sz1(this.buffer)) return !1;
        if (!QZ(this.url) && Sz1(this.buffer)) return !1;
        if ((ji4(this.url) || this.url.port !== null) && this.buffer === "file") return !1;
        if (this.url.scheme === "file" && this.url.host === "") return !1;
      }
      if (this.url.scheme = this.buffer, this.stateOverride) {
        if (this.url.port === Zi4(this.url.scheme)) this.url.port = null;
        return !1;
      }
      if (this.buffer = "", this.url.scheme === "file") {
        if (this.input[this.pointer + 1] !== s8("/") || this.input[this.pointer + 2] !== s8("/")) this.parseError = !0;
        this.state = "file";
      } else if (QZ(this.url) && this.base !== null && this.base.scheme === this.url.scheme) this.state = "special relative or authority";else if (QZ(this.url)) this.state = "special authority slashes";else if (this.input[this.pointer + 1] === s8("/")) this.state = "path or authority", ++this.pointer;else this.url.path = "", this.state = "opaque path";
    } else if (!this.stateOverride) this.buffer = "", this.state = "no scheme", this.pointer = -1;else return this.parseError = !0, U5;
    return !0;
  };
  eO.prototype["parse no scheme"] = function (K) {
    if (this.base === null || KhA(this.base) && K !== s8("#")) return U5;else if (KhA(this.base) && K === s8("#")) this.url.scheme = this.base.scheme, this.url.path = this.base.path, this.url.query = this.base.query, this.url.fragment = "", this.state = "fragment";else if (this.base.scheme === "file") this.state = "file", --this.pointer;else this.state = "relative", --this.pointer;
    return !0;
  };
  eO.prototype["parse special relative or authority"] = function (K) {
    if (K === s8("/") && this.input[this.pointer + 1] === s8("/")) this.state = "special authority ignore slashes", ++this.pointer;else this.parseError = !0, this.state = "relative", --this.pointer;
    return !0;
  };
  eO.prototype["parse path or authority"] = function (K) {
    if (K === s8("/")) this.state = "authority";else this.state = "path", --this.pointer;
    return !0;
  };
  eO.prototype["parse relative"] = function (K) {
    if (this.url.scheme = this.base.scheme, K === s8("/")) this.state = "relative slash";else if (QZ(this.url) && K === s8("\\")) this.parseError = !0, this.state = "relative slash";else if (this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.url.path = this.base.path.slice(), this.url.query = this.base.query, K === s8("?")) this.url.query = "", this.state = "query";else if (K === s8("#")) this.url.fragment = "", this.state = "fragment";else if (!isNaN(K)) this.url.query = null, this.url.path.pop(), this.state = "path", --this.pointer;
    return !0;
  };
  eO.prototype["parse relative slash"] = function (K) {
    if (QZ(this.url) && (K === s8("/") || K === s8("\\"))) {
      if (K === s8("\\")) this.parseError = !0;
      this.state = "special authority ignore slashes";
    } else if (K === s8("/")) this.state = "authority";else this.url.username = this.base.username, this.url.password = this.base.password, this.url.host = this.base.host, this.url.port = this.base.port, this.state = "path", --this.pointer;
    return !0;
  };
  eO.prototype["parse special authority slashes"] = function (K) {
    if (K === s8("/") && this.input[this.pointer + 1] === s8("/")) this.state = "special authority ignore slashes", ++this.pointer;else this.parseError = !0, this.state = "special authority ignore slashes", --this.pointer;
    return !0;
  };
  eO.prototype["parse special authority ignore slashes"] = function (K) {
    if (K !== s8("/") && K !== s8("\\")) this.state = "authority", --this.pointer;else this.parseError = !0;
    return !0;
  };
  eO.prototype["parse authority"] = function (K, q) {
    if (K === s8("@")) {
      if (this.parseError = !0, this.atFlag) this.buffer = `%40${this.buffer}`;
      this.atFlag = !0;
      let Y = wi4(this.buffer);
      for (let z = 0; z < Y; ++z) {
        let w = this.buffer.codePointAt(z);
        if (w === s8(":") && !this.passwordTokenSeenFlag) {
          this.passwordTokenSeenFlag = !0;
          continue;
        }
        let H = hz1(w, lw6);
        if (this.passwordTokenSeenFlag) this.url.password += H;else this.url.username += H;
      }
      this.buffer = "";
    } else if (isNaN(K) || K === s8("/") || K === s8("?") || K === s8("#") || QZ(this.url) && K === s8("\\")) {
      if (this.atFlag && this.buffer === "") return this.parseError = !0, U5;
      this.pointer -= wi4(this.buffer) + 1, this.buffer = "", this.state = "host";
    } else this.buffer += q;
    return !0;
  };
  eO.prototype["parse hostname"] = eO.prototype["parse host"] = function (K, q) {
    if (this.stateOverride && this.url.scheme === "file") --this.pointer, this.state = "file host";else if (K === s8(":") && !this.arrFlag) {
      if (this.buffer === "") return this.parseError = !0, U5;
      if (this.stateOverride === "hostname") return !1;
      let Y = cw6(this.buffer, dw6(this.url));
      if (Y === U5) return U5;
      this.url.host = Y, this.buffer = "", this.state = "port";
    } else if (isNaN(K) || K === s8("/") || K === s8("?") || K === s8("#") || QZ(this.url) && K === s8("\\")) {
      if (--this.pointer, QZ(this.url) && this.buffer === "") return this.parseError = !0, U5;else if (this.stateOverride && this.buffer === "" && (ji4(this.url) || this.url.port !== null)) return this.parseError = !0, !1;
      let Y = cw6(this.buffer, dw6(this.url));
      if (Y === U5) return U5;
      if (this.url.host = Y, this.buffer = "", this.state = "path start", this.stateOverride) return !1;
    } else {
      if (K === s8("[")) this.arrFlag = !0;else if (K === s8("]")) this.arrFlag = !1;
      this.buffer += q;
    }
    return !0;
  };
  eO.prototype["parse port"] = function (K, q) {
    if (UZ.isASCIIDigit(K)) this.buffer += q;else if (isNaN(K) || K === s8("/") || K === s8("?") || K === s8("#") || QZ(this.url) && K === s8("\\") || this.stateOverride) {
      if (this.buffer !== "") {
        let Y = parseInt(this.buffer);
        if (Y > 65535) return this.parseError = !0, U5;
        this.url.port = Y === Zi4(this.url.scheme) ? null : Y, this.buffer = "";
      }
      if (this.stateOverride) return !1;
      this.state = "path start", --this.pointer;
    } else return this.parseError = !0, U5;
    return !0;
  };
  var _n9 = new Set([s8("/"), s8("\\"), s8("?"), s8("#")]);
  function Mi4(A, K) {
    let q = A.length - K;
    return q >= 2 && ai9(A[K], A[K + 1]) && (q === 2 || _n9.has(A[K + 2]));
  }
  eO.prototype["parse file"] = function (K) {
    if (this.url.scheme = "file", this.url.host = "", K === s8("/") || K === s8("\\")) {
      if (K === s8("\\")) this.parseError = !0;
      this.state = "file slash";
    } else if (this.base !== null && this.base.scheme === "file") {
      if (this.url.host = this.base.host, this.url.path = this.base.path.slice(), this.url.query = this.base.query, K === s8("?")) this.url.query = "", this.state = "query";else if (K === s8("#")) this.url.fragment = "", this.state = "fragment";else if (!isNaN(K)) {
        if (this.url.query = null, !Mi4(this.input, this.pointer)) Di4(this.url);else this.parseError = !0, this.url.path = [];
        this.state = "path", --this.pointer;
      }
    } else this.state = "path", --this.pointer;
    return !0;
  };
  eO.prototype["parse file slash"] = function (K) {
    if (K === s8("/") || K === s8("\\")) {
      if (K === s8("\\")) this.parseError = !0;
      this.state = "file host";
    } else {
      if (this.base !== null && this.base.scheme === "file") {
        if (!Mi4(this.input, this.pointer) && si9(this.base.path[0])) this.url.path.push(this.base.path[0]);
        this.url.host = this.base.host;
      }
      this.state = "path", --this.pointer;
    }
    return !0;
  };
  eO.prototype["parse file host"] = function (K, q) {
    if (isNaN(K) || K === s8("/") || K === s8("\\") || K === s8("?") || K === s8("#")) {
      if (--this.pointer, !this.stateOverride && _i4(this.buffer)) this.parseError = !0, this.state = "path";else if (this.buffer === "") {
        if (this.url.host = "", this.stateOverride) return !1;
        this.state = "path start";
      } else {
        let Y = cw6(this.buffer, dw6(this.url));
        if (Y === U5) return U5;
        if (Y === "localhost") Y = "";
        if (this.url.host = Y, this.stateOverride) return !1;
        this.buffer = "", this.state = "path start";
      }
    } else this.buffer += q;
    return !0;
  };
  eO.prototype["parse path start"] = function (K) {
    if (QZ(this.url)) {
      if (K === s8("\\")) this.parseError = !0;
      if (this.state = "path", K !== s8("/") && K !== s8("\\")) --this.pointer;
    } else if (!this.stateOverride && K === s8("?")) this.url.query = "", this.state = "query";else if (!this.stateOverride && K === s8("#")) this.url.fragment = "", this.state = "fragment";else if (K !== void 0) {
      if (this.state = "path", K !== s8("/")) --this.pointer;
    } else if (this.stateOverride && this.url.host === null) this.url.path.push("");
    return !0;
  };
  eO.prototype["parse path"] = function (K) {
    if (isNaN(K) || K === s8("/") || QZ(this.url) && K === s8("\\") || !this.stateOverride && (K === s8("?") || K === s8("#"))) {
      if (QZ(this.url) && K === s8("\\")) this.parseError = !0;
      if (oi9(this.buffer)) {
        if (Di4(this.url), K !== s8("/") && !(QZ(this.url) && K === s8("\\"))) this.url.path.push("");
      } else if (Ji4(this.buffer) && K !== s8("/") && !(QZ(this.url) && K === s8("\\"))) this.url.path.push("");else if (!Ji4(this.buffer)) {
        if (this.url.scheme === "file" && this.url.path.length === 0 && _i4(this.buffer)) this.buffer = `${this.buffer[0]}:`;
        this.url.path.push(this.buffer);
      }
      if (this.buffer = "", K === s8("?")) this.url.query = "", this.state = "query";
      if (K === s8("#")) this.url.fragment = "", this.state = "fragment";
    } else {
      if (K === s8("%") && (!UZ.isASCIIHex(this.input[this.pointer + 1]) || !UZ.isASCIIHex(this.input[this.pointer + 2]))) this.parseError = !0;
      this.buffer += hz1(K, ri9);
    }
    return !0;
  };
  eO.prototype["parse opaque path"] = function (K) {
    if (K === s8("?")) this.url.query = "", this.state = "query";else if (K === s8("#")) this.url.fragment = "", this.state = "fragment";else if (K === s8(" ")) {
      let q = this.input[this.pointer + 1];
      if (q === s8("?") || q === s8("#")) this.url.path += "%20";else this.url.path += " ";
    } else {
      if (!isNaN(K) && K !== s8("%")) this.parseError = !0;
      if (K === s8("%") && (!UZ.isASCIIHex(this.input[this.pointer + 1]) || !UZ.isASCIIHex(this.input[this.pointer + 2]))) this.parseError = !0;
      if (!isNaN(K)) this.url.path += hz1(K, Xi4);
    }
    return !0;
  };
  eO.prototype["parse query"] = function (K, q) {
    if (!QZ(this.url) || this.url.scheme === "ws" || this.url.scheme === "wss") this.encodingOverride = "utf-8";
    if (!this.stateOverride && K === s8("#") || isNaN(K)) {
      let Y = QZ(this.url) ? ni9 : ii9;
      if (this.url.query += bz1(this.buffer, Y), this.buffer = "", K === s8("#")) this.url.fragment = "", this.state = "fragment";
    } else if (!isNaN(K)) {
      if (K === s8("%") && (!UZ.isASCIIHex(this.input[this.pointer + 1]) || !UZ.isASCIIHex(this.input[this.pointer + 2]))) this.parseError = !0;
      this.buffer += q;
    }
    return !0;
  };
  eO.prototype["parse fragment"] = function (K) {
    if (!isNaN(K)) {
      if (K === s8("%") && (!UZ.isASCIIHex(this.input[this.pointer + 1]) || !UZ.isASCIIHex(this.input[this.pointer + 2]))) this.parseError = !0;
      this.url.fragment += hz1(K, li9);
    }
    return !0;
  };
  function Gn9(A, K) {
    let q = `${A.scheme}:`;
    if (A.host !== null) {
      if (q += "//", A.username !== "" || A.password !== "") {
        if (q += A.username, A.password !== "") q += `:${A.password}`;
        q += "@";
      }
      if (q += iw6(A.host), A.port !== null) q += `:${A.port}`;
    }
    if (A.host === null && !KhA(A) && A.path.length > 1 && A.path[0] === "") q += "/.";
    if (q += nw6(A), A.query !== null) q += `?${A.query}`;
    if (!K && A.fragment !== null) q += `#${A.fragment}`;
    return q;
  }
  function Zn9(A) {
    let K = `${A.scheme}://`;
    if (K += iw6(A.host), A.port !== null) K += `:${A.port}`;
    return K;
  }
  function nw6(A) {
    if (KhA(A)) return A.path;
    let K = "";
    for (let q of A.path) K += `/${q}`;
    return K;
  }
  Wn9.serializeURL = Gn9;
  Wn9.serializePath = nw6;
  Wn9.serializeURLOrigin = function (A) {
    switch (A.scheme) {
      case "blob":
        {
          let K = Wn9.parseURL(nw6(A));
          if (K === null) return "null";
          if (K.scheme !== "http" && K.scheme !== "https") return "null";
          return Wn9.serializeURLOrigin(K);
        }
      case "ftp":
      case "http":
      case "https":
      case "ws":
      case "wss":
        return Zn9({
          scheme: A.scheme,
          host: A.host,
          port: A.port
        });
      case "file":
        return "null";
      default:
        return "null";
    }
  };
  Wn9.basicURLParse = function (A, K) {
    if (K === void 0) K = {};
    let q = new eO(A, K.baseURL, K.encodingOverride, K.url, K.stateOverride);
    if (q.failure) return null;
    return q.url;
  };
  Wn9.setTheUsername = function (A, K) {
    A.username = bz1(K, lw6);
  };
  Wn9.setThePassword = function (A, K) {
    A.password = bz1(K, lw6);
  };
  Wn9.serializeHost = iw6;
  Wn9.cannotHaveAUsernamePasswordPort = Xn9;
  Wn9.hasAnOpaquePath = KhA;
  Wn9.serializeInteger = function (A) {
    return String(A);
  };
  Wn9.parseURL = function (A, K) {
    if (K === void 0) K = {};
    return Wn9.basicURLParse(A, {
      baseURL: K.baseURL,
      encodingOverride: K.encodingOverride
    });
  };
});

// Register to shared state
__$.rw6 = rw6;
