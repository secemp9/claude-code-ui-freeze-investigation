// Module: YW1
// Dependencies: JI7, $A, OI7, _F, k5A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var YW1 = k(() => {
  __$.JI7 = o(__$.$A(), 1), __$.OI7 = o(__$._F(), 1);
  __$.k5A = class k5A extends __$.JI7.Component {
    constructor(A) {
      super(A);
      this.state = {
        hasError: !1
      };
    }
    static getDerivedStateFromError() {
      return {
        hasError: !0
      };
    }
    componentDidCatch(A) {
      try {
        __$.OI7.captureException(A);
      } catch {}
    }
    render() {
      if (this.state.hasError) return null;
      return this.props.children;
    }
  };
});

// Register to shared state
__$.YW1 = YW1;
