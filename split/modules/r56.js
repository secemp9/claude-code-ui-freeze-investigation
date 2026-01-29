// Module: r56
// Dependencies: RK, n56

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var r56 = v(nj4 => {
  Object.defineProperty(nj4, "__esModule", {
    value: !0
  });
  nj4.parseKeyPairsIntoRecord = nj4.parsePairKeyValue = nj4.getKeyPairs = nj4.serializeKeyPairs = void 0;
  var tK9 = __$.RK(),
    u4A = __$.n56();
  function eK9(A) {
    return A.reduce((K, q) => {
      let Y = `${K}${K !== "" ? u4A.BAGGAGE_ITEMS_SEPARATOR : ""}${q}`;
      return Y.length > u4A.BAGGAGE_MAX_TOTAL_LENGTH ? K : Y;
    }, "");
  }
  nj4.serializeKeyPairs = eK9;
  function Aq9(A) {
    return A.getAllEntries().map(([K, q]) => {
      let Y = `${encodeURIComponent(K)}=${encodeURIComponent(q.value)}`;
      if (q.metadata !== void 0) Y += u4A.BAGGAGE_PROPERTIES_SEPARATOR + q.metadata.toString();
      return Y;
    });
  }
  nj4.getKeyPairs = Aq9;
  function ij4(A) {
    let K = A.split(u4A.BAGGAGE_PROPERTIES_SEPARATOR);
    if (K.length <= 0) return;
    let q = K.shift();
    if (!q) return;
    let Y = q.indexOf(u4A.BAGGAGE_KEY_PAIR_SEPARATOR);
    if (Y <= 0) return;
    let z = decodeURIComponent(q.substring(0, Y).trim()),
      w = decodeURIComponent(q.substring(Y + 1).trim()),
      H;
    if (K.length > 0) H = (0, tK9.baggageEntryMetadataFromString)(K.join(u4A.BAGGAGE_PROPERTIES_SEPARATOR));
    return {
      key: z,
      value: w,
      metadata: H
    };
  }
  nj4.parsePairKeyValue = ij4;
  function Kq9(A) {
    let K = {};
    if (typeof A === "string" && A.length > 0) A.split(u4A.BAGGAGE_ITEMS_SEPARATOR).forEach(q => {
      let Y = ij4(q);
      if (Y !== void 0 && Y.value.length > 0) K[Y.key] = Y.value;
    });
    return K;
  }
  nj4.parseKeyPairsIntoRecord = Kq9;
});

// Register to shared state
__$.r56 = r56;
