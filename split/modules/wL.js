// Module: wL
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wL = v((mcY, ZL7) => {
  var RZ1 = /^win/.test(process.platform),
    bcY = /\//g,
    xcY = /^(\w{2,}):\/\//i,
    jN6 = mcY,
    ucY = /~1/g,
    BcY = /~0/g,
    WN6 = [/\?/g, "%3F", /\#/g, "%23"],
    DN6 = [/\%23/g, "#", /\%24/g, "$", /\%26/g, "&", /\%2C/g, ",", /\%40/g, "@"];
  mcY.parse = CA("url").parse;
  mcY.resolve = CA("url").resolve;
  mcY.cwd = function () {
    let K = process.cwd(),
      q = K.slice(-1);
    if (q === "/" || q === "\\") return K;else return K + "/";
  };
  mcY.getProtocol = function (K) {
    let q = xcY.exec(K);
    if (q) return q[1].toLowerCase();
  };
  mcY.getExtension = function (K) {
    let q = K.lastIndexOf(".");
    if (q >= 0) return jN6.stripQuery(K.substr(q).toLowerCase());
    return "";
  };
  mcY.stripQuery = function (K) {
    let q = K.indexOf("?");
    if (q >= 0) K = K.substr(0, q);
    return K;
  };
  mcY.getHash = function (K) {
    let q = K.indexOf("#");
    if (q >= 0) return K.substr(q);
    return "#";
  };
  mcY.stripHash = function (K) {
    let q = K.indexOf("#");
    if (q >= 0) K = K.substr(0, q);
    return K;
  };
  mcY.isHttp = function (K) {
    let q = jN6.getProtocol(K);
    if (q === "http" || q === "https") return !0;else if (q === void 0) return !1;else return !1;
  };
  mcY.isFileSystemPath = function (K) {
    let q = jN6.getProtocol(K);
    return q === void 0 || q === "file";
  };
  mcY.fromFileSystemPath = function (K) {
    if (RZ1) K = K.replace(/\\/g, "/");
    K = encodeURI(K);
    for (let q = 0; q < WN6.length; q += 2) K = K.replace(WN6[q], WN6[q + 1]);
    return K;
  };
  mcY.toFileSystemPath = function (K, q) {
    K = decodeURI(K);
    for (let z = 0; z < DN6.length; z += 2) K = K.replace(DN6[z], DN6[z + 1]);
    let Y = K.substr(0, 7).toLowerCase() === "file://";
    if (Y) {
      if (K = K[7] === "/" ? K.substr(8) : K.substr(7), RZ1 && K[1] === "/") K = K[0] + ":" + K.substr(1);
      if (q) K = "file:///" + K;else Y = !1, K = RZ1 ? K : "/" + K;
    }
    if (RZ1 && !Y) {
      if (K = K.replace(bcY, "\\"), K.substr(1, 2) === ":\\") K = K[0].toUpperCase() + K.substr(1);
    }
    return K;
  };
  mcY.safePointerToPath = function (K) {
    if (K.length <= 1 || K[0] !== "#" || K[1] !== "/") return [];
    return K.slice(2).split("/").map(q => {
      return decodeURIComponent(q).replace(ucY, "/").replace(BcY, "~");
    });
  };
});

// Register to shared state
__$.wL = wL;
