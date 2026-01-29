// Module: mf
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var mf = v(Ap7 => {
  Object.defineProperty(Ap7, "__esModule", {
    value: !0
  });
  Ap7.EndpointMap = void 0;
  Ap7.isTcpSubchannelAddress = rgA;
  Ap7.subchannelAddressEqual = xD1;
  Ap7.subchannelAddressToString = sU7;
  Ap7.stringToSubchannelAddress = eq2;
  Ap7.endpointEqual = A52;
  Ap7.endpointToString = K52;
  Ap7.endpointHasAddress = tU7;
  var aU7 = CA("net");
  function rgA(A) {
    return "port" in A;
  }
  function xD1(A, K) {
    if (!A && !K) return !0;
    if (!A || !K) return !1;
    if (rgA(A)) return rgA(K) && A.host === K.host && A.port === K.port;else return !rgA(K) && A.path === K.path;
  }
  function sU7(A) {
    if (rgA(A)) {
      if ((0, aU7.isIPv6)(A.host)) return "[" + A.host + "]:" + A.port;else return A.host + ":" + A.port;
    } else return A.path;
  }
  var tq2 = 443;
  function eq2(A, K) {
    if ((0, aU7.isIP)(A)) return {
      host: A,
      port: K !== null && K !== void 0 ? K : tq2
    };else return {
      path: A
    };
  }
  function A52(A, K) {
    if (A.addresses.length !== K.addresses.length) return !1;
    for (let q = 0; q < A.addresses.length; q++) if (!xD1(A.addresses[q], K.addresses[q])) return !1;
    return !0;
  }
  function K52(A) {
    return "[" + A.addresses.map(sU7).join(", ") + "]";
  }
  function tU7(A, K) {
    for (let q of A.addresses) if (xD1(q, K)) return !0;
    return !1;
  }
  function ngA(A, K) {
    if (A.addresses.length !== K.addresses.length) return !1;
    for (let q of A.addresses) {
      let Y = !1;
      for (let z of K.addresses) if (xD1(q, z)) {
        Y = !0;
        break;
      }
      if (!Y) return !1;
    }
    return !0;
  }
  class eU7 {
    constructor() {
      this.map = new Set();
    }
    get size() {
      return this.map.size;
    }
    getForSubchannelAddress(A) {
      for (let K of this.map) if (tU7(K.key, A)) return K.value;
      return;
    }
    deleteMissing(A) {
      let K = [];
      for (let q of this.map) {
        let Y = !1;
        for (let z of A) if (ngA(z, q.key)) Y = !0;
        if (!Y) K.push(q.value), this.map.delete(q);
      }
      return K;
    }
    get(A) {
      for (let K of this.map) if (ngA(A, K.key)) return K.value;
      return;
    }
    set(A, K) {
      for (let q of this.map) if (ngA(A, q.key)) {
        q.value = K;
        return;
      }
      this.map.add({
        key: A,
        value: K
      });
    }
    delete(A) {
      for (let K of this.map) if (ngA(A, K.key)) {
        this.map.delete(K);
        return;
      }
    }
    has(A) {
      for (let K of this.map) if (ngA(A, K.key)) return !0;
      return !1;
    }
    clear() {
      this.map.clear();
    }
    *keys() {
      for (let A of this.map) yield A.key;
    }
    *values() {
      for (let A of this.map) yield A.value;
    }
    *entries() {
      for (let A of this.map) yield [A.key, A.value];
    }
  }
  Ap7.EndpointMap = eU7;
});

// Register to shared state
__$.mf = mf;
