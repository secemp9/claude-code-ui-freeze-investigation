// Module: uI4
// Dependencies: q$, X$A, $$A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var uI4 = v(cj9 => {
  var gj9 = __$.q$(),
    Fj9 = __$.X$A(),
    Qj9 = __$.$$A();
  function xI4(A) {
    return typeof A === "bigint" || Number.isInteger(A);
  }
  var r91 = ({
      value: A
    }) => JSON.stringify(A),
    Uj9 = [{
      identify: A => typeof A === "string",
      default: !0,
      tag: "tag:yaml.org,2002:str",
      resolve: A => A,
      stringify: r91
    }, {
      identify: A => A == null,
      createNode: () => new gj9.Scalar(null),
      default: !0,
      tag: "tag:yaml.org,2002:null",
      test: /^null$/,
      resolve: () => null,
      stringify: r91
    }, {
      identify: A => typeof A === "boolean",
      default: !0,
      tag: "tag:yaml.org,2002:bool",
      test: /^true$|^false$/,
      resolve: A => A === "true",
      stringify: r91
    }, {
      identify: xI4,
      default: !0,
      tag: "tag:yaml.org,2002:int",
      test: /^-?(?:0|[1-9][0-9]*)$/,
      resolve: (A, K, {
        intAsBigInt: q
      }) => q ? BigInt(A) : parseInt(A, 10),
      stringify: ({
        value: A
      }) => xI4(A) ? A.toString() : JSON.stringify(A)
    }, {
      identify: A => typeof A === "number",
      default: !0,
      tag: "tag:yaml.org,2002:float",
      test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
      resolve: A => parseFloat(A),
      stringify: r91
    }],
    pj9 = {
      default: !0,
      tag: "",
      test: /^/,
      resolve(A, K) {
        return K(`Unresolved plain scalar ${JSON.stringify(A)}`), A;
      }
    },
    dj9 = [Fj9.map, Qj9.seq].concat(Uj9, pj9);
  cj9.schema = dj9;
});

// Register to shared state
__$.uI4 = uI4;
