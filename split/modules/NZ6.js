// Module: NZ6
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var NZ6 = v(aY7 => {
  Object.defineProperty(aY7, "__esModule", {
    value: !0
  });
  aY7.getRules = aY7.isJSONType = void 0;
  var C0Y = ["string", "number", "integer", "boolean", "null", "object", "array"],
    L0Y = new Set(C0Y);
  function R0Y(A) {
    return typeof A == "string" && L0Y.has(A);
  }
  aY7.isJSONType = R0Y;
  function y0Y() {
    let A = {
      number: {
        type: "number",
        rules: []
      },
      string: {
        type: "string",
        rules: []
      },
      array: {
        type: "array",
        rules: []
      },
      object: {
        type: "object",
        rules: []
      }
    };
    return {
      types: {
        ...A,
        integer: !0,
        boolean: !0,
        null: !0
      },
      rules: [{
        rules: []
      }, A.number, A.string, A.array, A.object],
      post: {
        rules: []
      },
      all: {},
      keywords: {}
    };
  }
  aY7.getRules = y0Y;
});

// Register to shared state
__$.NZ6 = NZ6;
