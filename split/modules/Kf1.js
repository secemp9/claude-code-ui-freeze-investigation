// Module: Kf1
// Dependencies: RW, A9A, FV1, QMA, ih6, rh6, bMA, ah6, th6, hUA
//   ... and 12 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Kf1 = v((ZeH, VYK) => {
  VYK.exports = SUA;
  var jj = __$.RW(),
    hT2 = __$.A9A(),
    DYK = __$.FV1(),
    et = __$.QMA(),
    bT2 = __$.ih6(),
    xT2 = __$.rh6(),
    IUA = __$.bMA(),
    uT2 = __$.ah6(),
    BT2 = __$.th6(),
    mT2 = __$.hUA(),
    gT2 = __$.h9K(),
    FT2 = __$.g9K(),
    $YK = __$.LUA(),
    _YK = __$.aV1(),
    GYK = __$.cV1(),
    QT2 = __$.Jb6(),
    Af1 = __$.QV1(),
    Wb6 = __$.eV1(),
    UT2 = __$.Zb6(),
    q2 = __$.P0(),
    dMA = __$.XYK(),
    lMA = q2.NAMESPACE,
    Db6 = __$.BV1().isApiWritable;
  function SUA(A, K) {
    DYK.call(this), this.nodeType = jj.DOCUMENT_NODE, this.isHTML = A, this._address = K || "about:blank", this.readyState = "loading", this.implementation = new mT2(this), this.ownerDocument = null, this._contentType = A ? "text/html" : "application/xml", this.doctype = null, this.documentElement = null, this._templateDocCache = null, this._nodeIterators = null, this._nid = 1, this._nextnid = 2, this._nodes = [null, this], this.byId = Object.create(null), this.modclock = 0;
  }
  var pT2 = {
      event: "Event",
      customevent: "CustomEvent",
      uievent: "UIEvent",
      mouseevent: "MouseEvent"
    },
    dT2 = {
      events: "event",
      htmlevents: "event",
      mouseevents: "mouseevent",
      mutationevents: "mutationevent",
      uievents: "uievent"
    },
    cMA = function (A, K, q) {
      return {
        get: function () {
          var Y = A.call(this);
          if (Y) return Y[K];
          return q;
        },
        set: function (Y) {
          var z = A.call(this);
          if (z) z[K] = Y;
        }
      };
    };
  function ZYK(A, K) {
    var q, Y, z;
    if (A === "") A = null;
    if (!Af1.isValidQName(K)) q2.InvalidCharacterError();
    if (q = null, Y = K, z = K.indexOf(":"), z >= 0) q = K.substring(0, z), Y = K.substring(z + 1);
    if (q !== null && A === null) q2.NamespaceError();
    if (q === "xml" && A !== lMA.XML) q2.NamespaceError();
    if ((q === "xmlns" || K === "xmlns") && A !== lMA.XMLNS) q2.NamespaceError();
    if (A === lMA.XMLNS && !(q === "xmlns" || K === "xmlns")) q2.NamespaceError();
    return {
      namespace: A,
      prefix: q,
      localName: Y
    };
  }
  SUA.prototype = Object.create(DYK.prototype, {
    _setMutationHandler: {
      value: function (A) {
        this.mutationHandler = A;
      }
    },
    _dispatchRendererEvent: {
      value: function (A, K, q) {
        var Y = this._nodes[A];
        if (!Y) return;
        Y._dispatchEvent(new IUA(K, q), !0);
      }
    },
    nodeName: {
      value: "#document"
    },
    nodeValue: {
      get: function () {
        return null;
      },
      set: function () {}
    },
    documentURI: {
      get: function () {
        return this._address;
      },
      set: q2.nyi
    },
    compatMode: {
      get: function () {
        return this._quirks ? "BackCompat" : "CSS1Compat";
      }
    },
    createTextNode: {
      value: function (A) {
        return new bT2(this, String(A));
      }
    },
    createComment: {
      value: function (A) {
        return new xT2(this, A);
      }
    },
    createDocumentFragment: {
      value: function () {
        return new uT2(this);
      }
    },
    createProcessingInstruction: {
      value: function (A, K) {
        if (!Af1.isValidName(A) || K.indexOf("?>") !== -1) q2.InvalidCharacterError();
        return new BT2(this, A, K);
      }
    },
    createAttribute: {
      value: function (A) {
        if (A = String(A), !Af1.isValidName(A)) q2.InvalidCharacterError();
        if (this.isHTML) A = q2.toASCIILowerCase(A);
        return new et._Attr(null, A, null, null, "");
      }
    },
    createAttributeNS: {
      value: function (A, K) {
        A = A === null || A === void 0 || A === "" ? null : String(A), K = String(K);
        var q = ZYK(A, K);
        return new et._Attr(null, q.localName, q.prefix, q.namespace, "");
      }
    },
    createElement: {
      value: function (A) {
        if (A = String(A), !Af1.isValidName(A)) q2.InvalidCharacterError();
        if (this.isHTML) {
          if (/[A-Z]/.test(A)) A = q2.toASCIILowerCase(A);
          return Wb6.createElement(this, A, null);
        } else if (this.contentType === "application/xhtml+xml") return Wb6.createElement(this, A, null);else return new et(this, A, null, null);
      },
      writable: Db6
    },
    createElementNS: {
      value: function (A, K) {
        A = A === null || A === void 0 || A === "" ? null : String(A), K = String(K);
        var q = ZYK(A, K);
        return this._createElementNS(q.localName, q.namespace, q.prefix);
      },
      writable: Db6
    },
    _createElementNS: {
      value: function (A, K, q) {
        if (K === lMA.HTML) return Wb6.createElement(this, A, q);else if (K === lMA.SVG) return UT2.createElement(this, A, q);
        return new et(this, A, K, q);
      }
    },
    createEvent: {
      value: function (K) {
        K = K.toLowerCase();
        var q = dT2[K] || K,
          Y = QT2[pT2[q]];
        if (Y) {
          var z = new Y();
          return z._initialized = !1, z;
        } else q2.NotSupportedError();
      }
    },
    createTreeWalker: {
      value: function (A, K, q) {
        if (!A) throw TypeError("root argument is required");
        if (!(A instanceof jj)) throw TypeError("root not a node");
        return K = K === void 0 ? $YK.SHOW_ALL : +K, q = q === void 0 ? null : q, new gT2(A, K, q);
      }
    },
    createNodeIterator: {
      value: function (A, K, q) {
        if (!A) throw TypeError("root argument is required");
        if (!(A instanceof jj)) throw TypeError("root not a node");
        return K = K === void 0 ? $YK.SHOW_ALL : +K, q = q === void 0 ? null : q, new FT2(A, K, q);
      }
    },
    _attachNodeIterator: {
      value: function (A) {
        if (!this._nodeIterators) this._nodeIterators = [];
        this._nodeIterators.push(A);
      }
    },
    _detachNodeIterator: {
      value: function (A) {
        var K = this._nodeIterators.indexOf(A);
        this._nodeIterators.splice(K, 1);
      }
    },
    _preremoveNodeIterators: {
      value: function (A) {
        if (this._nodeIterators) this._nodeIterators.forEach(function (K) {
          K._preremove(A);
        });
      }
    },
    _updateDocTypeElement: {
      value: function () {
        this.doctype = this.documentElement = null;
        for (var K = this.firstChild; K !== null; K = K.nextSibling) if (K.nodeType === jj.DOCUMENT_TYPE_NODE) this.doctype = K;else if (K.nodeType === jj.ELEMENT_NODE) this.documentElement = K;
      }
    },
    insertBefore: {
      value: function (K, q) {
        return jj.prototype.insertBefore.call(this, K, q), this._updateDocTypeElement(), K;
      }
    },
    replaceChild: {
      value: function (K, q) {
        return jj.prototype.replaceChild.call(this, K, q), this._updateDocTypeElement(), q;
      }
    },
    removeChild: {
      value: function (K) {
        return jj.prototype.removeChild.call(this, K), this._updateDocTypeElement(), K;
      }
    },
    getElementById: {
      value: function (A) {
        var K = this.byId[A];
        if (!K) return null;
        if (K instanceof Bd) return K.getFirst();
        return K;
      }
    },
    _hasMultipleElementsWithId: {
      value: function (A) {
        return this.byId[A] instanceof Bd;
      }
    },
    getElementsByName: {
      value: et.prototype.getElementsByName
    },
    getElementsByTagName: {
      value: et.prototype.getElementsByTagName
    },
    getElementsByTagNameNS: {
      value: et.prototype.getElementsByTagNameNS
    },
    getElementsByClassName: {
      value: et.prototype.getElementsByClassName
    },
    adoptNode: {
      value: function (K) {
        if (K.nodeType === jj.DOCUMENT_NODE) q2.NotSupportedError();
        if (K.nodeType === jj.ATTRIBUTE_NODE) return K;
        if (K.parentNode) K.parentNode.removeChild(K);
        if (K.ownerDocument !== this) PYK(K, this);
        return K;
      }
    },
    importNode: {
      value: function (K, q) {
        return this.adoptNode(K.cloneNode(q));
      },
      writable: Db6
    },
    origin: {
      get: function () {
        return null;
      }
    },
    characterSet: {
      get: function () {
        return "UTF-8";
      }
    },
    contentType: {
      get: function () {
        return this._contentType;
      }
    },
    URL: {
      get: function () {
        return this._address;
      }
    },
    domain: {
      get: q2.nyi,
      set: q2.nyi
    },
    referrer: {
      get: q2.nyi
    },
    cookie: {
      get: q2.nyi,
      set: q2.nyi
    },
    lastModified: {
      get: q2.nyi
    },
    location: {
      get: function () {
        return this.defaultView ? this.defaultView.location : null;
      },
      set: q2.nyi
    },
    _titleElement: {
      get: function () {
        return this.getElementsByTagName("title").item(0) || null;
      }
    },
    title: {
      get: function () {
        var A = this._titleElement,
          K = A ? A.textContent : "";
        return K.replace(/[ \t\n\r\f]+/g, " ").replace(/(^ )|( $)/g, "");
      },
      set: function (A) {
        var K = this._titleElement,
          q = this.head;
        if (!K && !q) return;
        if (!K) K = this.createElement("title"), q.appendChild(K);
        K.textContent = A;
      }
    },
    dir: cMA(function () {
      var A = this.documentElement;
      if (A && A.tagName === "HTML") return A;
    }, "dir", ""),
    fgColor: cMA(function () {
      return this.body;
    }, "text", ""),
    linkColor: cMA(function () {
      return this.body;
    }, "link", ""),
    vlinkColor: cMA(function () {
      return this.body;
    }, "vLink", ""),
    alinkColor: cMA(function () {
      return this.body;
    }, "aLink", ""),
    bgColor: cMA(function () {
      return this.body;
    }, "bgColor", ""),
    charset: {
      get: function () {
        return this.characterSet;
      }
    },
    inputEncoding: {
      get: function () {
        return this.characterSet;
      }
    },
    scrollingElement: {
      get: function () {
        return this._quirks ? this.body : this.documentElement;
      }
    },
    body: {
      get: function () {
        return WYK(this.documentElement, "body");
      },
      set: q2.nyi
    },
    head: {
      get: function () {
        return WYK(this.documentElement, "head");
      }
    },
    images: {
      get: q2.nyi
    },
    embeds: {
      get: q2.nyi
    },
    plugins: {
      get: q2.nyi
    },
    links: {
      get: q2.nyi
    },
    forms: {
      get: q2.nyi
    },
    scripts: {
      get: q2.nyi
    },
    applets: {
      get: function () {
        return [];
      }
    },
    activeElement: {
      get: function () {
        return null;
      }
    },
    innerHTML: {
      get: function () {
        return this.serialize();
      },
      set: q2.nyi
    },
    outerHTML: {
      get: function () {
        return this.serialize();
      },
      set: q2.nyi
    },
    write: {
      value: function (A) {
        if (!this.isHTML) q2.InvalidStateError();
        if (!this._parser) return;
        if (!this._parser) ;
        var K = arguments.join("");
        this._parser.parse(K);
      }
    },
    writeln: {
      value: function (K) {
        this.write(Array.prototype.join.call(arguments, "") + `
`);
      }
    },
    open: {
      value: function () {
        this.documentElement = null;
      }
    },
    close: {
      value: function () {
        if (this.readyState = "interactive", this._dispatchEvent(new IUA("readystatechange"), !0), this._dispatchEvent(new IUA("DOMContentLoaded"), !0), this.readyState = "complete", this._dispatchEvent(new IUA("readystatechange"), !0), this.defaultView) this.defaultView._dispatchEvent(new IUA("load"), !0);
      }
    },
    clone: {
      value: function () {
        var K = new SUA(this.isHTML, this._address);
        return K._quirks = this._quirks, K._contentType = this._contentType, K;
      }
    },
    cloneNode: {
      value: function (K) {
        var q = jj.prototype.cloneNode.call(this, !1);
        if (K) for (var Y = this.firstChild; Y !== null; Y = Y.nextSibling) q._appendChild(q.importNode(Y, !0));
        return q._updateDocTypeElement(), q;
      }
    },
    isEqual: {
      value: function (K) {
        return !0;
      }
    },
    mutateValue: {
      value: function (A) {
        if (this.mutationHandler) this.mutationHandler({
          type: dMA.VALUE,
          target: A,
          data: A.data
        });
      }
    },
    mutateAttr: {
      value: function (A, K) {
        if (this.mutationHandler) this.mutationHandler({
          type: dMA.ATTR,
          target: A.ownerElement,
          attr: A
        });
      }
    },
    mutateRemoveAttr: {
      value: function (A) {
        if (this.mutationHandler) this.mutationHandler({
          type: dMA.REMOVE_ATTR,
          target: A.ownerElement,
          attr: A
        });
      }
    },
    mutateRemove: {
      value: function (A) {
        if (this.mutationHandler) this.mutationHandler({
          type: dMA.REMOVE,
          target: A.parentNode,
          node: A
        });
        MYK(A);
      }
    },
    mutateInsert: {
      value: function (A) {
        if (jYK(A), this.mutationHandler) this.mutationHandler({
          type: dMA.INSERT,
          target: A.parentNode,
          node: A
        });
      }
    },
    mutateMove: {
      value: function (A) {
        if (this.mutationHandler) this.mutationHandler({
          type: dMA.MOVE,
          target: A
        });
      }
    },
    addId: {
      value: function (K, q) {
        var Y = this.byId[K];
        if (!Y) this.byId[K] = q;else {
          if (!(Y instanceof Bd)) Y = new Bd(Y), this.byId[K] = Y;
          Y.add(q);
        }
      }
    },
    delId: {
      value: function (K, q) {
        var Y = this.byId[K];
        if (q2.assert(Y), Y instanceof Bd) {
          if (Y.del(q), Y.length === 1) this.byId[K] = Y.downgrade();
        } else this.byId[K] = void 0;
      }
    },
    _resolve: {
      value: function (A) {
        return new _YK(this._documentBaseURL).resolve(A);
      }
    },
    _documentBaseURL: {
      get: function () {
        var A = this._address;
        if (A === "about:blank") A = "/";
        var K = this.querySelector("base[href]");
        if (K) return new _YK(A).resolve(K.getAttribute("href"));
        return A;
      }
    },
    _templateDoc: {
      get: function () {
        if (!this._templateDocCache) {
          var A = new SUA(this.isHTML, this._address);
          this._templateDocCache = A._templateDocCache = A;
        }
        return this._templateDocCache;
      }
    },
    querySelector: {
      value: function (A) {
        return GYK(A, this)[0];
      }
    },
    querySelectorAll: {
      value: function (A) {
        var K = GYK(A, this);
        return K.item ? K : new hT2(K);
      }
    }
  });
  var cT2 = ["abort", "canplay", "canplaythrough", "change", "click", "contextmenu", "cuechange", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "durationchange", "emptied", "ended", "input", "invalid", "keydown", "keypress", "keyup", "loadeddata", "loadedmetadata", "loadstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "pause", "play", "playing", "progress", "ratechange", "readystatechange", "reset", "seeked", "seeking", "select", "show", "stalled", "submit", "suspend", "timeupdate", "volumechange", "waiting", "blur", "error", "focus", "load", "scroll"];
  cT2.forEach(function (A) {
    Object.defineProperty(SUA.prototype, "on" + A, {
      get: function () {
        return this._getEventHandler(A);
      },
      set: function (K) {
        this._setEventHandler(A, K);
      }
    });
  });
  function WYK(A, K) {
    if (A && A.isHTML) {
      for (var q = A.firstChild; q !== null; q = q.nextSibling) if (q.nodeType === jj.ELEMENT_NODE && q.localName === K && q.namespaceURI === lMA.HTML) return q;
    }
    return null;
  }
  function lT2(A) {
    if (A._nid = A.ownerDocument._nextnid++, A.ownerDocument._nodes[A._nid] = A, A.nodeType === jj.ELEMENT_NODE) {
      var K = A.getAttribute("id");
      if (K) A.ownerDocument.addId(K, A);
      if (A._roothook) A._roothook();
    }
  }
  function iT2(A) {
    if (A.nodeType === jj.ELEMENT_NODE) {
      var K = A.getAttribute("id");
      if (K) A.ownerDocument.delId(K, A);
    }
    A.ownerDocument._nodes[A._nid] = void 0, A._nid = void 0;
  }
  function jYK(A) {
    if (lT2(A), A.nodeType === jj.ELEMENT_NODE) for (var K = A.firstChild; K !== null; K = K.nextSibling) jYK(K);
  }
  function MYK(A) {
    iT2(A);
    for (var K = A.firstChild; K !== null; K = K.nextSibling) MYK(K);
  }
  function PYK(A, K) {
    if (A.ownerDocument = K, A._lastModTime = void 0, Object.prototype.hasOwnProperty.call(A, "_tagName")) A._tagName = void 0;
    for (var q = A.firstChild; q !== null; q = q.nextSibling) PYK(q, K);
  }
  function Bd(A) {
    this.nodes = Object.create(null), this.nodes[A._nid] = A, this.length = 1, this.firstNode = void 0;
  }
  Bd.prototype.add = function (A) {
    if (!this.nodes[A._nid]) this.nodes[A._nid] = A, this.length++, this.firstNode = void 0;
  };
  Bd.prototype.del = function (A) {
    if (this.nodes[A._nid]) delete this.nodes[A._nid], this.length--, this.firstNode = void 0;
  };
  Bd.prototype.getFirst = function () {
    if (!this.firstNode) {
      var A;
      for (A in this.nodes) if (this.firstNode === void 0 || this.firstNode.compareDocumentPosition(this.nodes[A]) & jj.DOCUMENT_POSITION_PRECEDING) this.firstNode = this.nodes[A];
    }
    return this.firstNode;
  };
  Bd.prototype.downgrade = function () {
    if (this.length === 1) {
      var A;
      for (A in this.nodes) return this.nodes[A];
    }
    return this;
  };
});

// Register to shared state
__$.Kf1 = Kf1;
