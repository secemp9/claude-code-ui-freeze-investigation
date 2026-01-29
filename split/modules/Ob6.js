// Module: Ob6
// Dependencies: aV1

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ob6 = v((weH, e9K) => {
  var oG = __$.aV1();
  e9K.exports = RUA;
  function RUA() {}
  RUA.prototype = Object.create(Object.prototype, {
    _url: {
      get: function () {
        return new oG(this.href);
      }
    },
    protocol: {
      get: function () {
        var A = this._url;
        if (A && A.scheme) return A.scheme + ":";else return ":";
      },
      set: function (A) {
        var K = this.href,
          q = new oG(K);
        if (q.isAbsolute()) {
          if (A = A.replace(/:+$/, ""), A = A.replace(/[^-+\.a-zA-Z0-9]/g, oG.percentEncode), A.length > 0) q.scheme = A, K = q.toString();
        }
        this.href = K;
      }
    },
    host: {
      get: function () {
        var A = this._url;
        if (A.isAbsolute() && A.isAuthorityBased()) return A.host + (A.port ? ":" + A.port : "");else return "";
      },
      set: function (A) {
        var K = this.href,
          q = new oG(K);
        if (q.isAbsolute() && q.isAuthorityBased()) {
          if (A = A.replace(/[^-+\._~!$&'()*,;:=a-zA-Z0-9]/g, oG.percentEncode), A.length > 0) q.host = A, delete q.port, K = q.toString();
        }
        this.href = K;
      }
    },
    hostname: {
      get: function () {
        var A = this._url;
        if (A.isAbsolute() && A.isAuthorityBased()) return A.host;else return "";
      },
      set: function (A) {
        var K = this.href,
          q = new oG(K);
        if (q.isAbsolute() && q.isAuthorityBased()) {
          if (A = A.replace(/^\/+/, ""), A = A.replace(/[^-+\._~!$&'()*,;:=a-zA-Z0-9]/g, oG.percentEncode), A.length > 0) q.host = A, K = q.toString();
        }
        this.href = K;
      }
    },
    port: {
      get: function () {
        var A = this._url;
        if (A.isAbsolute() && A.isAuthorityBased() && A.port !== void 0) return A.port;else return "";
      },
      set: function (A) {
        var K = this.href,
          q = new oG(K);
        if (q.isAbsolute() && q.isAuthorityBased()) {
          if (A = "" + A, A = A.replace(/[^0-9].*$/, ""), A = A.replace(/^0+/, ""), A.length === 0) A = "0";
          if (parseInt(A, 10) <= 65535) q.port = A, K = q.toString();
        }
        this.href = K;
      }
    },
    pathname: {
      get: function () {
        var A = this._url;
        if (A.isAbsolute() && A.isHierarchical()) return A.path;else return "";
      },
      set: function (A) {
        var K = this.href,
          q = new oG(K);
        if (q.isAbsolute() && q.isHierarchical()) {
          if (A.charAt(0) !== "/") A = "/" + A;
          A = A.replace(/[^-+\._~!$&'()*,;:=@\/a-zA-Z0-9]/g, oG.percentEncode), q.path = A, K = q.toString();
        }
        this.href = K;
      }
    },
    search: {
      get: function () {
        var A = this._url;
        if (A.isAbsolute() && A.isHierarchical() && A.query !== void 0) return "?" + A.query;else return "";
      },
      set: function (A) {
        var K = this.href,
          q = new oG(K);
        if (q.isAbsolute() && q.isHierarchical()) {
          if (A.charAt(0) === "?") A = A.substring(1);
          A = A.replace(/[^-+\._~!$&'()*,;:=@\/?a-zA-Z0-9]/g, oG.percentEncode), q.query = A, K = q.toString();
        }
        this.href = K;
      }
    },
    hash: {
      get: function () {
        var A = this._url;
        if (A == null || A.fragment == null || A.fragment === "") return "";else return "#" + A.fragment;
      },
      set: function (A) {
        var K = this.href,
          q = new oG(K);
        if (A.charAt(0) === "#") A = A.substring(1);
        A = A.replace(/[^-+\._~!$&'()*,;:=@\/?a-zA-Z0-9]/g, oG.percentEncode), q.fragment = A, K = q.toString(), this.href = K;
      }
    },
    username: {
      get: function () {
        var A = this._url;
        return A.username || "";
      },
      set: function (A) {
        var K = this.href,
          q = new oG(K);
        if (q.isAbsolute()) A = A.replace(/[\x00-\x1F\x7F-\uFFFF "#<>?`\/@\\:]/g, oG.percentEncode), q.username = A, K = q.toString();
        this.href = K;
      }
    },
    password: {
      get: function () {
        var A = this._url;
        return A.password || "";
      },
      set: function (A) {
        var K = this.href,
          q = new oG(K);
        if (q.isAbsolute()) {
          if (A === "") q.password = null;else A = A.replace(/[\x00-\x1F\x7F-\uFFFF "#<>?`\/@\\]/g, oG.percentEncode), q.password = A;
          K = q.toString();
        }
        this.href = K;
      }
    },
    origin: {
      get: function () {
        var A = this._url;
        if (A == null) return "";
        var K = function (q) {
          var Y = [A.scheme, A.host, +A.port || q];
          return Y[0] + "://" + Y[1] + (Y[2] === q ? "" : ":" + Y[2]);
        };
        switch (A.scheme) {
          case "ftp":
            return K(21);
          case "gopher":
            return K(70);
          case "http":
          case "ws":
            return K(80);
          case "https":
          case "wss":
            return K(443);
          default:
            return A.scheme + "://";
        }
      }
    }
  });
  RUA._inherit = function (A) {
    Object.getOwnPropertyNames(RUA.prototype).forEach(function (K) {
      if (K === "constructor" || K === "href") return;
      var q = Object.getOwnPropertyDescriptor(RUA.prototype, K);
      Object.defineProperty(A, K, q);
    });
  };
});

// Register to shared state
__$.Ob6 = Ob6;
