// Module: cI4
// Dependencies: q$

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var cI4 = v(OM9 => {
  var QI4 = __$.q$();
  function UI4({
    value: A,
    source: K
  }, q) {
    if (K && (A ? pI4 : dI4).test.test(K)) return K;
    return A ? q.options.trueStr : q.options.falseStr;
  }
  var pI4 = {
      identify: A => A === !0,
      default: !0,
      tag: "tag:yaml.org,2002:bool",
      test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
      resolve: () => new QI4.Scalar(!0),
      stringify: UI4
    },
    dI4 = {
      identify: A => A === !1,
      default: !0,
      tag: "tag:yaml.org,2002:bool",
      test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
      resolve: () => new QI4.Scalar(!1),
      stringify: UI4
    };
  OM9.falseTag = dI4;
  OM9.trueTag = pI4;
});

// Register to shared state
__$.cI4 = cI4;
