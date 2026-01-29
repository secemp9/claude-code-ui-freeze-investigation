// Module: Qe7
// Dependencies: ge7

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Qe7 = v(EG2 => {
  var {
    DOMParser: NG2
  } = __$.ge7();
  EG2.parse = vG2;
  var SM1 = 3,
    Fe7 = 4,
    TG2 = 8;
  function QR6(A) {
    return A.nodeType === SM1 || A.nodeType === TG2 || A.nodeType === Fe7;
  }
  function Vd(A) {
    if (!A.childNodes || A.childNodes.length === 0) return !0;else return !1;
  }
  function j3A(A, K) {
    if (!A) throw Error(K);
  }
  function vG2(A) {
    var K = new NG2().parseFromString(A);
    j3A(K.documentElement.nodeName === "plist", "malformed document. First element should be <plist>");
    var q = ojA(K.documentElement);
    if (q.length == 1) q = q[0];
    return q;
  }
  function ojA(A) {
    var K, q, Y, z, w, H, J, O;
    if (!A) return null;
    if (A.nodeName === "plist") {
      if (w = [], Vd(A)) return w;
      for (K = 0; K < A.childNodes.length; K++) if (!QR6(A.childNodes[K])) w.push(ojA(A.childNodes[K]));
      return w;
    } else if (A.nodeName === "dict") {
      if (q = {}, Y = null, J = 0, Vd(A)) return q;
      for (K = 0; K < A.childNodes.length; K++) {
        if (QR6(A.childNodes[K])) continue;
        if (J % 2 === 0) j3A(A.childNodes[K].nodeName === "key", "Missing key while parsing <dict/>."), Y = ojA(A.childNodes[K]);else j3A(A.childNodes[K].nodeName !== "key", 'Unexpected key "' + ojA(A.childNodes[K]) + '" while parsing <dict/>.'), q[Y] = ojA(A.childNodes[K]);
        J += 1;
      }
      if (J % 2 === 1) q[Y] = "";
      return q;
    } else if (A.nodeName === "array") {
      if (w = [], Vd(A)) return w;
      for (K = 0; K < A.childNodes.length; K++) if (!QR6(A.childNodes[K])) {
        if (H = ojA(A.childNodes[K]), H != null) w.push(H);
      }
      return w;
    } else if (A.nodeName === "#text") ;else if (A.nodeName === "key") {
      if (Vd(A)) return "";
      return j3A(A.childNodes[0].nodeValue !== "__proto__", "__proto__ keys can lead to prototype pollution. More details on CVE-2022-22912"), A.childNodes[0].nodeValue;
    } else if (A.nodeName === "string") {
      if (H = "", Vd(A)) return H;
      for (K = 0; K < A.childNodes.length; K++) {
        var O = A.childNodes[K].nodeType;
        if (O === SM1 || O === Fe7) H += A.childNodes[K].nodeValue;
      }
      return H;
    } else if (A.nodeName === "integer") return j3A(!Vd(A), 'Cannot parse "" as integer.'), parseInt(A.childNodes[0].nodeValue, 10);else if (A.nodeName === "real") {
      j3A(!Vd(A), 'Cannot parse "" as real.'), H = "";
      for (K = 0; K < A.childNodes.length; K++) if (A.childNodes[K].nodeType === SM1) H += A.childNodes[K].nodeValue;
      return parseFloat(H);
    } else if (A.nodeName === "data") {
      if (H = "", Vd(A)) return Buffer.from(H, "base64");
      for (K = 0; K < A.childNodes.length; K++) if (A.childNodes[K].nodeType === SM1) H += A.childNodes[K].nodeValue.replace(/\s+/g, "");
      return Buffer.from(H, "base64");
    } else if (A.nodeName === "date") return j3A(!Vd(A), 'Cannot parse "" as Date.'), new Date(A.childNodes[0].nodeValue);else if (A.nodeName === "null") return null;else if (A.nodeName === "true") return !0;else if (A.nodeName === "false") return !1;else throw Error("Invalid PLIST tag " + A.nodeName);
  }
});

// Register to shared state
__$.Qe7 = Qe7;
