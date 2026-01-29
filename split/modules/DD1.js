// Module: DD1
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DD1 = v(pg7 => {
  Object.defineProperty(pg7, "__esModule", {
    value: !0
  });
  pg7.toAnyValue = pg7.toKeyValue = pg7.toAttributes = pg7.createInstrumentationScope = pg7.createResource = void 0;
  function A82(A) {
    let K = {
        attributes: Ug7(A.attributes),
        droppedAttributesCount: 0
      },
      q = A.schemaUrl;
    if (q && q !== "") K.schemaUrl = q;
    return K;
  }
  pg7.createResource = A82;
  function K82(A) {
    return {
      name: A.name,
      version: A.version
    };
  }
  pg7.createInstrumentationScope = K82;
  function Ug7(A) {
    return Object.keys(A).map(K => XE6(K, A[K]));
  }
  pg7.toAttributes = Ug7;
  function XE6(A, K) {
    return {
      key: A,
      value: $E6(K)
    };
  }
  pg7.toKeyValue = XE6;
  function $E6(A) {
    let K = typeof A;
    if (K === "string") return {
      stringValue: A
    };
    if (K === "number") {
      if (!Number.isInteger(A)) return {
        doubleValue: A
      };
      return {
        intValue: A
      };
    }
    if (K === "boolean") return {
      boolValue: A
    };
    if (A instanceof Uint8Array) return {
      bytesValue: A
    };
    if (Array.isArray(A)) return {
      arrayValue: {
        values: A.map($E6)
      }
    };
    if (K === "object" && A != null) return {
      kvlistValue: {
        values: Object.entries(A).map(([q, Y]) => XE6(q, Y))
      }
    };
    return {};
  }
  pg7.toAnyValue = $E6;
});

// Register to shared state
__$.DD1 = DD1;
