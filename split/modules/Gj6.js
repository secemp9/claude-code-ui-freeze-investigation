// Module: Gj6
// Dependencies: m3, xI, ba, wj6, vqA, rX1, $j6, K$1, fBA, bY
//   ... and 1 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Gj6 = v((h4H, VG7) => {
  var ma = __$.m3();
  __$.xI();
  __$.ba();
  __$.wj6();
  __$.vqA();
  __$.rX1();
  __$.$j6();
  __$.K$1();
  __$.fBA();
  __$.bY();
  __$.z$1();
  var _j6 = ma.asn1,
    uZA = VG7.exports = ma.pki = ma.pki || {};
  uZA.pemToDer = function (A) {
    var K = ma.pem.decode(A)[0];
    if (K.procType && K.procType.type === "ENCRYPTED") throw Error("Could not convert PEM to DER; PEM is encrypted.");
    return ma.util.createBuffer(K.body);
  };
  uZA.privateKeyFromPem = function (A) {
    var K = ma.pem.decode(A)[0];
    if (K.type !== "PRIVATE KEY" && K.type !== "RSA PRIVATE KEY") {
      var q = Error('Could not convert private key from PEM; PEM header type is not "PRIVATE KEY" or "RSA PRIVATE KEY".');
      throw q.headerType = K.type, q;
    }
    if (K.procType && K.procType.type === "ENCRYPTED") throw Error("Could not convert private key from PEM; PEM is encrypted.");
    var Y = _j6.fromDer(K.body);
    return uZA.privateKeyFromAsn1(Y);
  };
  uZA.privateKeyToPem = function (A, K) {
    var q = {
      type: "RSA PRIVATE KEY",
      body: _j6.toDer(uZA.privateKeyToAsn1(A)).getBytes()
    };
    return ma.pem.encode(q, {
      maxline: K
    });
  };
  uZA.privateKeyInfoToPem = function (A, K) {
    var q = {
      type: "PRIVATE KEY",
      body: _j6.toDer(A).getBytes()
    };
    return ma.pem.encode(q, {
      maxline: K
    });
  };
});

// Register to shared state
__$.Gj6 = Gj6;
