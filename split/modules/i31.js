// Module: i31
// Dependencies: l31

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var i31 = v(hW4 => {
  Object.defineProperty(hW4, "__esModule", {
    value: !0
  });
  hW4.NonRecordingSpan = void 0;
  var s49 = __$.l31();
  class SW4 {
    constructor(A = s49.INVALID_SPAN_CONTEXT) {
      this._spanContext = A;
    }
    spanContext() {
      return this._spanContext;
    }
    setAttribute(A, K) {
      return this;
    }
    setAttributes(A) {
      return this;
    }
    addEvent(A, K) {
      return this;
    }
    addLink(A) {
      return this;
    }
    addLinks(A) {
      return this;
    }
    setStatus(A) {
      return this;
    }
    updateName(A) {
      return this;
    }
    end(A) {}
    isRecording() {
      return !1;
    }
    recordException(A, K) {}
  }
  hW4.NonRecordingSpan = SW4;
});

// Register to shared state
__$.i31 = i31;
