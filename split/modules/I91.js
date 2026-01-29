// Module: I91
// Dependencies: o36, WY, Sr

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var I91 = v(wW9 => {
  var YW9 = __$.o36(),
    HI4 = __$.WY(),
    zW9 = __$.Sr();
  class JI4 {
    constructor(A) {
      Object.defineProperty(this, HI4.NODE_TYPE, {
        value: A
      });
    }
    clone() {
      let A = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
      if (this.range) A.range = this.range.slice();
      return A;
    }
    toJS(A, {
      mapAsMap: K,
      maxAliasCount: q,
      onAnchor: Y,
      reviver: z
    } = {}) {
      if (!HI4.isDocument(A)) throw TypeError("A document argument is required");
      let w = {
          anchors: new Map(),
          doc: A,
          keep: !0,
          mapAsMap: K === !0,
          mapKeyWarned: !1,
          maxAliasCount: typeof q === "number" ? q : 100
        },
        H = zW9.toJS(this, "", w);
      if (typeof Y === "function") for (let {
        count: J,
        res: O
      } of w.anchors.values()) Y(O, J);
      return typeof z === "function" ? YW9.applyReviver(z, {
        "": H
      }, "", H) : H;
    }
  }
  wW9.NodeBase = JI4;
});

// Register to shared state
__$.I91 = I91;
