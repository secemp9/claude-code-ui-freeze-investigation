// Module: Dh6
// Dependencies: bMA, Wh6, P0

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Dh6 = v((LtH, O3K) => {
  var t3A = __$.bMA(),
    YN2 = __$.Wh6(),
    zN2 = __$.P0();
  O3K.exports = J3K;
  function J3K() {}
  J3K.prototype = {
    addEventListener: function (K, q, Y) {
      if (!q) return;
      if (Y === void 0) Y = !1;
      if (!this._listeners) this._listeners = Object.create(null);
      if (!this._listeners[K]) this._listeners[K] = [];
      var z = this._listeners[K];
      for (var w = 0, H = z.length; w < H; w++) {
        var J = z[w];
        if (J.listener === q && J.capture === Y) return;
      }
      var O = {
        listener: q,
        capture: Y
      };
      if (typeof q === "function") O.f = q;
      z.push(O);
    },
    removeEventListener: function (K, q, Y) {
      if (Y === void 0) Y = !1;
      if (this._listeners) {
        var z = this._listeners[K];
        if (z) for (var w = 0, H = z.length; w < H; w++) {
          var J = z[w];
          if (J.listener === q && J.capture === Y) {
            if (z.length === 1) this._listeners[K] = void 0;else z.splice(w, 1);
            return;
          }
        }
      }
    },
    dispatchEvent: function (K) {
      return this._dispatchEvent(K, !1);
    },
    _dispatchEvent: function (K, q) {
      if (typeof q !== "boolean") q = !1;
      function Y(X, $) {
        var {
          type: _,
          eventPhase: G
        } = $;
        if ($.currentTarget = X, G !== t3A.CAPTURING_PHASE && X._handlers && X._handlers[_]) {
          var Z = X._handlers[_],
            W;
          if (typeof Z === "function") W = Z.call($.currentTarget, $);else {
            var D = Z.handleEvent;
            if (typeof D !== "function") throw TypeError("handleEvent property of event handler object isnot a function.");
            W = D.call(Z, $);
          }
          switch ($.type) {
            case "mouseover":
              if (W === !0) $.preventDefault();
              break;
            case "beforeunload":
            default:
              if (W === !1) $.preventDefault();
              break;
          }
        }
        var j = X._listeners && X._listeners[_];
        if (!j) return;
        j = j.slice();
        for (var M = 0, P = j.length; M < P; M++) {
          if ($._immediatePropagationStopped) return;
          var f = j[M];
          if (G === t3A.CAPTURING_PHASE && !f.capture || G === t3A.BUBBLING_PHASE && f.capture) continue;
          if (f.f) f.f.call($.currentTarget, $);else {
            var N = f.listener.handleEvent;
            if (typeof N !== "function") throw TypeError("handleEvent property of event listener object is not a function.");
            N.call(f.listener, $);
          }
        }
      }
      if (!K._initialized || K._dispatching) zN2.InvalidStateError();
      K.isTrusted = q, K._dispatching = !0, K.target = this;
      var z = [];
      for (var w = this.parentNode; w; w = w.parentNode) z.push(w);
      K.eventPhase = t3A.CAPTURING_PHASE;
      for (var H = z.length - 1; H >= 0; H--) if (Y(z[H], K), K._propagationStopped) break;
      if (!K._propagationStopped) K.eventPhase = t3A.AT_TARGET, Y(this, K);
      if (K.bubbles && !K._propagationStopped) {
        K.eventPhase = t3A.BUBBLING_PHASE;
        for (var J = 0, O = z.length; J < O; J++) if (Y(z[J], K), K._propagationStopped) break;
      }
      if (K._dispatching = !1, K.eventPhase = t3A.AT_TARGET, K.currentTarget = null, q && !K.defaultPrevented && K instanceof YN2) switch (K.type) {
        case "mousedown":
          this._armed = {
            x: K.clientX,
            y: K.clientY,
            t: K.timeStamp
          };
          break;
        case "mouseout":
        case "mouseover":
          this._armed = null;
          break;
        case "mouseup":
          if (this._isClick(K)) this._doClick(K);
          this._armed = null;
          break;
      }
      return !K.defaultPrevented;
    },
    _isClick: function (A) {
      return this._armed !== null && A.type === "mouseup" && A.isTrusted && A.button === 0 && A.timeStamp - this._armed.t < 1000 && Math.abs(A.clientX - this._armed.x) < 10 && Math.abs(A.clientY - this._armed.Y) < 10;
    },
    _doClick: function (A) {
      if (this._click_in_progress) return;
      this._click_in_progress = !0;
      var K = this;
      while (K && !K._post_click_activation_steps) K = K.parentNode;
      if (K && K._pre_click_activation_steps) K._pre_click_activation_steps();
      var q = this.ownerDocument.createEvent("MouseEvent");
      q.initMouseEvent("click", !0, !0, this.ownerDocument.defaultView, 1, A.screenX, A.screenY, A.clientX, A.clientY, A.ctrlKey, A.altKey, A.shiftKey, A.metaKey, A.button, null);
      var Y = this._dispatchEvent(q, !0);
      if (K) {
        if (Y) {
          if (K._post_click_activation_steps) K._post_click_activation_steps(q);
        } else if (K._cancelled_activation_steps) K._cancelled_activation_steps();
      }
    },
    _setEventHandler: function (K, q) {
      if (!this._handlers) this._handlers = Object.create(null);
      this._handlers[K] = q;
    },
    _getEventHandler: function (K) {
      return this._handlers && this._handlers[K] || null;
    }
  };
});

// Register to shared state
__$.Dh6 = Dh6;
