// Module: wu1
// Dependencies: SE, YD

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wu1 = v(xW8 => {
  Object.defineProperty(xW8, "__esModule", {
    value: !0
  });
  var bkq = __$.SE(),
    xkq = __$.YD(),
    YHA = xkq.getGlobalObject(),
    ukq = 80;
  function Bkq(A, K = {}) {
    if (!A) return "<unknown>";
    try {
      let q = A,
        Y = 5,
        z = [],
        w = 0,
        H = 0,
        J = " > ",
        O = J.length,
        X,
        $ = Array.isArray(K) ? K : K.keyAttrs,
        _ = !Array.isArray(K) && K.maxStringLength || ukq;
      while (q && w++ < Y) {
        if (X = mkq(q, $), X === "html" || w > 1 && H + z.length * O + X.length >= _) break;
        z.push(X), H += X.length, q = q.parentNode;
      }
      return z.reverse().join(J);
    } catch (q) {
      return "<unknown>";
    }
  }
  function mkq(A, K) {
    let q = A,
      Y = [],
      z,
      w,
      H,
      J,
      O;
    if (!q || !q.tagName) return "";
    if (YHA.HTMLElement) {
      if (q instanceof HTMLElement && q.dataset && q.dataset.sentryComponent) return q.dataset.sentryComponent;
    }
    Y.push(q.tagName.toLowerCase());
    let X = K && K.length ? K.filter(_ => q.getAttribute(_)).map(_ => [_, q.getAttribute(_)]) : null;
    if (X && X.length) X.forEach(_ => {
      Y.push(`[${_[0]}="${_[1]}"]`);
    });else {
      if (q.id) Y.push(`#${q.id}`);
      if (z = q.className, z && bkq.isString(z)) {
        w = z.split(/\s+/);
        for (O = 0; O < w.length; O++) Y.push(`.${w[O]}`);
      }
    }
    let $ = ["aria-label", "type", "name", "title", "alt"];
    for (O = 0; O < $.length; O++) if (H = $[O], J = q.getAttribute(H), J) Y.push(`[${H}="${J}"]`);
    return Y.join("");
  }
  function gkq() {
    try {
      return YHA.document.location.href;
    } catch (A) {
      return "";
    }
  }
  function Fkq(A) {
    if (YHA.document && YHA.document.querySelector) return YHA.document.querySelector(A);
    return null;
  }
  function Qkq(A) {
    if (!YHA.HTMLElement) return null;
    let K = A,
      q = 5;
    for (let Y = 0; Y < q; Y++) {
      if (!K) return null;
      if (K instanceof HTMLElement && K.dataset.sentryComponent) return K.dataset.sentryComponent;
      K = K.parentNode;
    }
    return null;
  }
  xW8.getComponentName = Qkq;
  xW8.getDomElement = Fkq;
  xW8.getLocationHref = gkq;
  xW8.htmlTreeAsString = Bkq;
});

// Register to shared state
__$.wu1 = wu1;
