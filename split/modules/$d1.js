// Module: $d1
// Dependencies: ip1, np1, Jd1, Xd1, $D, qO, JkA, S6A, HkA, YJA

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var $d1 = k(() => {
  __$.ip1();
  __$.ip1();
  __$.np1();
  __$.np1();
  __$.Jd1();
  __$.Jd1();
  __$.Xd1();
  __$.Xd1();
  __$.$D = class $D extends __$.qO {
    constructor() {
      super(...arguments);
      this.models = new __$.JkA(this._client), this.messages = new __$.S6A(this._client), this.files = new __$.HkA(this._client), this.skills = new __$.YJA(this._client);
    }
  };
  __$.$D.Models = __$.JkA;
  __$.$D.Messages = __$.S6A;
  __$.$D.Files = __$.HkA;
  __$.$D.Skills = __$.YJA;
});

// Register to shared state
__$.$d1 = $d1;
