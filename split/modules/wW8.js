// Module: wW8
// Dependencies: none

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var wW8 = v(zW8 => {
  Object.defineProperty(zW8, "__esModule", {
    value: !0
  });
  var sZ8 = /^[a-zA-Z:_][a-zA-Z0-9:_.-]*$/,
    sx1 = {
      revert: function () {}
    },
    naA = new Map(),
    ax1 = new Set();
  function raA(A) {
    var K = naA.get(A);
    return K || naA.set(A, K = {
      element: A,
      attributes: {}
    }), K;
  }
  function oaA(A, K, q, Y, z) {
    var w = q(A),
      H = {
        isDirty: !1,
        originalValue: w,
        virtualValue: w,
        mutations: [],
        el: A,
        _positionTimeout: null,
        observer: new MutationObserver(function () {
          if (K !== "position" || !H._positionTimeout) {
            K === "position" && (H._positionTimeout = setTimeout(function () {
              H._positionTimeout = null;
            }, 1000));
            var J = q(A);
            K === "position" && J.parentNode === H.virtualValue.parentNode && J.insertBeforeNode === H.virtualValue.insertBeforeNode || J !== H.virtualValue && (H.originalValue = J, z(H));
          }
        }),
        mutationRunner: z,
        setValue: Y,
        getCurrentValue: q
      };
    return K === "position" && A.parentNode ? H.observer.observe(A.parentNode, {
      childList: !0,
      subtree: !0,
      attributes: !1,
      characterData: !1
    }) : H.observer.observe(A, function (J) {
      return J === "html" ? {
        childList: !0,
        subtree: !0,
        attributes: !0,
        characterData: !0
      } : {
        childList: !1,
        subtree: !1,
        attributes: !0,
        attributeFilter: [J]
      };
    }(K)), H;
  }
  function aaA(A, K) {
    var q = K.getCurrentValue(K.el);
    K.virtualValue = A, A && typeof A != "string" ? q && A.parentNode === q.parentNode && A.insertBeforeNode === q.insertBeforeNode || (K.isDirty = !0, rZ8()) : A !== q && (K.isDirty = !0, rZ8());
  }
  function OEq(A) {
    var K = A.originalValue;
    A.mutations.forEach(function (q) {
      return K = q.mutate(K);
    }), aaA(function (q) {
      return caA || (caA = document.createElement("div")), caA.innerHTML = q, caA.innerHTML;
    }(K), A);
  }
  function XEq(A) {
    var K = new Set(A.originalValue.split(/\s+/).filter(Boolean));
    A.mutations.forEach(function (q) {
      return q.mutate(K);
    }), aaA(Array.from(K).filter(Boolean).join(" "), A);
  }
  function $Eq(A) {
    var K = A.originalValue;
    A.mutations.forEach(function (q) {
      return K = q.mutate(K);
    }), aaA(K, A);
  }
  function _Eq(A) {
    var K = A.originalValue;
    A.mutations.forEach(function (q) {
      var Y = function (z) {
        var w = z.insertBeforeSelector,
          H = document.querySelector(z.parentSelector);
        if (!H) return null;
        var J = w ? document.querySelector(w) : null;
        return w && !J ? null : {
          parentNode: H,
          insertBeforeNode: J
        };
      }(q.mutate());
      K = Y || K;
    }), aaA(K, A);
  }
  var GEq = function (A) {
      return A.innerHTML;
    },
    ZEq = function (A, K) {
      return A.innerHTML = K;
    };
  function tZ8(A) {
    var K = raA(A);
    return K.html || (K.html = oaA(A, "html", GEq, ZEq, OEq)), K.html;
  }
  var WEq = function (A) {
      return {
        parentNode: A.parentElement,
        insertBeforeNode: A.nextElementSibling
      };
    },
    DEq = function (A, K) {
      K.insertBeforeNode && !K.parentNode.contains(K.insertBeforeNode) || K.parentNode.insertBefore(A, K.insertBeforeNode);
    };
  function eZ8(A) {
    var K = raA(A);
    return K.position || (K.position = oaA(A, "position", WEq, DEq, _Eq)), K.position;
  }
  var caA,
    qvA,
    jEq = function (A, K) {
      return K ? A.className = K : A.removeAttribute("class");
    },
    MEq = function (A) {
      return A.className;
    };
  function AW8(A) {
    var K = raA(A);
    return K.classes || (K.classes = oaA(A, "class", MEq, jEq, XEq)), K.classes;
  }
  function KW8(A, K) {
    var q,
      Y = raA(A);
    return Y.attributes[K] || (Y.attributes[K] = oaA(A, K, (q = K, function (z) {
      var w;
      return (w = z.getAttribute(q)) != null ? w : null;
    }), function (z) {
      return function (w, H) {
        return H !== null ? w.setAttribute(z, H) : w.removeAttribute(z);
      };
    }(K), $Eq)), Y.attributes[K];
  }
  function laA(A, K, q) {
    if (q.isDirty) {
      q.isDirty = !1;
      var Y = q.virtualValue;
      q.mutations.length || function (z, w) {
        var H,
          J,
          O = naA.get(z);
        if (O) if (w === "html") (H = O.html) == null || (J = H.observer) == null || J.disconnect(), delete O.html;else if (w === "class") {
          var X, $;
          (X = O.classes) == null || ($ = X.observer) == null || $.disconnect(), delete O.classes;
        } else if (w === "position") {
          var _, G;
          (_ = O.position) == null || (G = _.observer) == null || G.disconnect(), delete O.position;
        } else {
          var Z, W, D;
          (Z = O.attributes) == null || (W = Z[w]) == null || (D = W.observer) == null || D.disconnect(), delete O.attributes[w];
        }
      }(A, K), q.setValue(A, Y);
    }
  }
  function PEq(A, K) {
    A.html && laA(K, "html", A.html), A.classes && laA(K, "class", A.classes), A.position && laA(K, "position", A.position), Object.keys(A.attributes).forEach(function (q) {
      laA(K, q, A.attributes[q]);
    });
  }
  function rZ8() {
    naA.forEach(PEq);
  }
  function qW8(A) {
    if (A.kind !== "position" || A.elements.size !== 1) {
      var K = new Set(A.elements);
      document.querySelectorAll(A.selector).forEach(function (q) {
        K.has(q) || (A.elements.add(q), function (Y, z) {
          var w = null;
          Y.kind === "html" ? w = tZ8(z) : Y.kind === "class" ? w = AW8(z) : Y.kind === "attribute" ? w = KW8(z, Y.attribute) : Y.kind === "position" && (w = eZ8(z)), w && (w.mutations.push(Y), w.mutationRunner(w));
        }(A, q));
      });
    }
  }
  function oZ8() {
    ax1.forEach(qW8);
  }
  function YW8() {
    typeof document < "u" && (qvA || (qvA = new MutationObserver(function () {
      oZ8();
    })), oZ8(), qvA.observe(document.documentElement, {
      childList: !0,
      subtree: !0,
      attributes: !1,
      characterData: !1
    }));
  }
  function saA(A) {
    return typeof document > "u" ? sx1 : (ax1.add(A), qW8(A), {
      revert: function () {
        var K;
        (K = A).elements.forEach(function (q) {
          return function (Y, z) {
            var w = null;
            if (Y.kind === "html" ? w = tZ8(z) : Y.kind === "class" ? w = AW8(z) : Y.kind === "attribute" ? w = KW8(z, Y.attribute) : Y.kind === "position" && (w = eZ8(z)), w) {
              var H = w.mutations.indexOf(Y);
              H !== -1 && w.mutations.splice(H, 1), w.mutationRunner(w);
            }
          }(K, q);
        }), K.elements.clear(), ax1.delete(K);
      }
    });
  }
  function ox1(A, K) {
    return saA({
      kind: "html",
      elements: new Set(),
      mutate: K,
      selector: A
    });
  }
  function aZ8(A, K) {
    return saA({
      kind: "position",
      elements: new Set(),
      mutate: K,
      selector: A
    });
  }
  function KvA(A, K) {
    return saA({
      kind: "class",
      elements: new Set(),
      mutate: K,
      selector: A
    });
  }
  function iaA(A, K, q) {
    return sZ8.test(K) ? K === "class" || K === "className" ? KvA(A, function (Y) {
      var z = q(Array.from(Y).join(" "));
      Y.clear(), z && z.split(/\s+/g).filter(Boolean).forEach(function (w) {
        return Y.add(w);
      });
    }) : saA({
      kind: "attribute",
      attribute: K,
      elements: new Set(),
      mutate: q,
      selector: A
    }) : sx1;
  }
  YW8();
  var VEq = {
    html: ox1,
    classes: KvA,
    attribute: iaA,
    position: aZ8,
    declarative: function (A) {
      var {
        selector: K,
        action: q,
        value: Y,
        attribute: z,
        parentSelector: w,
        insertBeforeSelector: H
      } = A;
      if (z === "html") {
        if (q === "append") return ox1(K, function (J) {
          return J + (Y != null ? Y : "");
        });
        if (q === "set") return ox1(K, function () {
          return Y != null ? Y : "";
        });
      } else if (z === "class") {
        if (q === "append") return KvA(K, function (J) {
          Y && J.add(Y);
        });
        if (q === "remove") return KvA(K, function (J) {
          Y && J.delete(Y);
        });
        if (q === "set") return KvA(K, function (J) {
          J.clear(), Y && J.add(Y);
        });
      } else if (z === "position") {
        if (q === "set" && w) return aZ8(K, function () {
          return {
            insertBeforeSelector: H,
            parentSelector: w
          };
        });
      } else {
        if (q === "append") return iaA(K, z, function (J) {
          return J !== null ? J + (Y != null ? Y : "") : Y != null ? Y : "";
        });
        if (q === "set") return iaA(K, z, function () {
          return Y != null ? Y : "";
        });
        if (q === "remove") return iaA(K, z, function () {
          return null;
        });
      }
      return sx1;
    }
  };
  zW8.connectGlobalObserver = YW8, zW8.default = VEq, zW8.disconnectGlobalObserver = function () {
    qvA && qvA.disconnect();
  }, zW8.validAttributeName = sZ8;
});

// Register to shared state
__$.wW8 = wW8;
