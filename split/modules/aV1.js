// Module: aV1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var aV1 = v((AeH, F9K) => {
  F9K.exports = IW;
  function IW(A) {
    if (!A) return Object.create(IW.prototype);
    this.url = A.replace(/^[ \t\n\r\f]+|[ \t\n\r\f]+$/g, "");
    var K = IW.pattern.exec(this.url);
    if (K) {
      if (K[2]) this.scheme = K[2];
      if (K[4]) {
        var q = K[4].match(IW.userinfoPattern);
        if (q) this.username = q[1], this.password = q[3], K[4] = K[4].substring(q[0].length);
        if (K[4].match(IW.portPattern)) {
          var Y = K[4].lastIndexOf(":");
          this.host = K[4].substring(0, Y), this.port = K[4].substring(Y + 1);
        } else this.host = K[4];
      }
      if (K[5]) this.path = K[5];
      if (K[6]) this.query = K[7];
      if (K[8]) this.fragment = K[9];
    }
  }
  IW.pattern = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/;
  IW.userinfoPattern = /^([^@:]*)(:([^@]*))?@/;
  IW.portPattern = /:\d+$/;
  IW.authorityPattern = /^[^:\/?#]+:\/\//;
  IW.hierarchyPattern = /^[^:\/?#]+:\//;
  IW.percentEncode = function (K) {
    var q = K.charCodeAt(0);
    if (q < 256) return "%" + q.toString(16);else throw Error("can't percent-encode codepoints > 255 yet");
  };
  IW.prototype = {
    constructor: IW,
    isAbsolute: function () {
      return !!this.scheme;
    },
    isAuthorityBased: function () {
      return IW.authorityPattern.test(this.url);
    },
    isHierarchical: function () {
      return IW.hierarchyPattern.test(this.url);
    },
    toString: function () {
      var A = "";
      if (this.scheme !== void 0) A += this.scheme + ":";
      if (this.isAbsolute()) {
        if (A += "//", this.username || this.password) {
          if (A += this.username || "", this.password) A += ":" + this.password;
          A += "@";
        }
        if (this.host) A += this.host;
      }
      if (this.port !== void 0) A += ":" + this.port;
      if (this.path !== void 0) A += this.path;
      if (this.query !== void 0) A += "?" + this.query;
      if (this.fragment !== void 0) A += "#" + this.fragment;
      return A;
    },
    resolve: function (A) {
      var K = this,
        q = new IW(A),
        Y = new IW();
      if (q.scheme !== void 0) Y.scheme = q.scheme, Y.username = q.username, Y.password = q.password, Y.host = q.host, Y.port = q.port, Y.path = w(q.path), Y.query = q.query;else if (Y.scheme = K.scheme, q.host !== void 0) Y.username = q.username, Y.password = q.password, Y.host = q.host, Y.port = q.port, Y.path = w(q.path), Y.query = q.query;else if (Y.username = K.username, Y.password = K.password, Y.host = K.host, Y.port = K.port, !q.path) {
        if (Y.path = K.path, q.query !== void 0) Y.query = q.query;else Y.query = K.query;
      } else {
        if (q.path.charAt(0) === "/") Y.path = w(q.path);else Y.path = z(K.path, q.path), Y.path = w(Y.path);
        Y.query = q.query;
      }
      return Y.fragment = q.fragment, Y.toString();
      function z(H, J) {
        if (K.host !== void 0 && !K.path) return "/" + J;
        var O = H.lastIndexOf("/");
        if (O === -1) return J;else return H.substring(0, O + 1) + J;
      }
      function w(H) {
        if (!H) return H;
        var J = "";
        while (H.length > 0) {
          if (H === "." || H === "..") {
            H = "";
            break;
          }
          var O = H.substring(0, 2),
            X = H.substring(0, 3),
            $ = H.substring(0, 4);
          if (X === "../") H = H.substring(3);else if (O === "./") H = H.substring(2);else if (X === "/./") H = "/" + H.substring(3);else if (O === "/." && H.length === 2) H = "/";else if ($ === "/../" || X === "/.." && H.length === 3) H = "/" + H.substring(4), J = J.replace(/\/?[^\/]*$/, "");else {
            var _ = H.match(/(\/?([^\/]*))/)[0];
            J += _, H = H.substring(_.length);
          }
        }
        return J;
      }
    }
  };
});

// Register to shared state
__$.aV1 = aV1;
