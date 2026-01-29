// Module: eV1
// Dependencies: RW, QMA, sV1, P0, Ob6, Xb6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var eV1 = v(kT2 => {
  var $b6 = __$.RW(),
    YYK = __$.QMA(),
    NT2 = __$.sV1(),
    vv = __$.P0(),
    zYK = __$.Ob6(),
    TT2 = __$.Xb6(),
    ud = kT2.elements = {},
    yUA = Object.create(null);
  kT2.createElement = function (A, K, q) {
    var Y = yUA[K] || ET2;
    return new Y(A, K, q);
  };
  function H7(A) {
    return TT2(A, vK, ud, yUA);
  }
  function V0(A) {
    return {
      get: function () {
        var K = this._getattr(A);
        if (K === null) return "";
        var q = this.doc._resolve(K);
        return q === null ? K : q;
      },
      set: function (K) {
        this._setattr(A, K);
      }
    };
  }
  function tV1(A) {
    return {
      get: function () {
        var K = this._getattr(A);
        if (K === null) return null;
        if (K.toLowerCase() === "use-credentials") return "use-credentials";
        return "anonymous";
      },
      set: function (K) {
        if (K === null || K === void 0) this.removeAttribute(A);else this._setattr(A, K);
      }
    };
  }
  var pMA = {
      type: ["", "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url"],
      missing: ""
    },
    vT2 = {
      A: !0,
      LINK: !0,
      BUTTON: !0,
      INPUT: !0,
      SELECT: !0,
      TEXTAREA: !0,
      COMMAND: !0
    },
    iS = function (A, K, q) {
      vK.call(this, A, K, q), this._form = null;
    },
    vK = kT2.HTMLElement = H7({
      superclass: YYK,
      name: "HTMLElement",
      ctor: function (K, q, Y) {
        YYK.call(this, K, q, vv.NAMESPACE.HTML, Y);
      },
      props: {
        dangerouslySetInnerHTML: {
          set: function (A) {
            this._innerHTML = A;
          }
        },
        innerHTML: {
          get: function () {
            return this.serialize();
          },
          set: function (A) {
            var K = this.ownerDocument.implementation.mozHTMLParser(this.ownerDocument._address, this);
            K.parse(A === null ? "" : String(A), !0);
            var q = this instanceof yUA.template ? this.content : this;
            while (q.hasChildNodes()) q.removeChild(q.firstChild);
            q.appendChild(K._asDocumentFragment());
          }
        },
        style: {
          get: function () {
            if (!this._style) this._style = new NT2(this);
            return this._style;
          },
          set: function (A) {
            if (A === null || A === void 0) A = "";
            this._setattr("style", String(A));
          }
        },
        blur: {
          value: function () {}
        },
        focus: {
          value: function () {}
        },
        forceSpellCheck: {
          value: function () {}
        },
        click: {
          value: function () {
            if (this._click_in_progress) return;
            this._click_in_progress = !0;
            try {
              if (this._pre_click_activation_steps) this._pre_click_activation_steps();
              var A = this.ownerDocument.createEvent("MouseEvent");
              A.initMouseEvent("click", !0, !0, this.ownerDocument.defaultView, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
              var K = this.dispatchEvent(A);
              if (K) {
                if (this._post_click_activation_steps) this._post_click_activation_steps(A);
              } else if (this._cancelled_activation_steps) this._cancelled_activation_steps();
            } finally {
              this._click_in_progress = !1;
            }
          }
        },
        submit: {
          value: vv.nyi
        }
      },
      attributes: {
        title: String,
        lang: String,
        dir: {
          type: ["ltr", "rtl", "auto"],
          missing: ""
        },
        draggable: {
          type: ["true", "false"],
          treatNullAsEmptyString: !0
        },
        spellcheck: {
          type: ["true", "false"],
          missing: ""
        },
        enterKeyHint: {
          type: ["enter", "done", "go", "next", "previous", "search", "send"],
          missing: ""
        },
        autoCapitalize: {
          type: ["off", "on", "none", "sentences", "words", "characters"],
          missing: ""
        },
        autoFocus: Boolean,
        accessKey: String,
        nonce: String,
        hidden: Boolean,
        translate: {
          type: ["no", "yes"],
          missing: ""
        },
        tabIndex: {
          type: "long",
          default: function () {
            if (this.tagName in vT2 || this.contentEditable) return 0;else return -1;
          }
        }
      },
      events: ["abort", "canplay", "canplaythrough", "change", "click", "contextmenu", "cuechange", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "durationchange", "emptied", "ended", "input", "invalid", "keydown", "keypress", "keyup", "loadeddata", "loadedmetadata", "loadstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "pause", "play", "playing", "progress", "ratechange", "readystatechange", "reset", "seeked", "seeking", "select", "show", "stalled", "submit", "suspend", "timeupdate", "volumechange", "waiting", "blur", "error", "focus", "load", "scroll"]
    }),
    ET2 = H7({
      name: "HTMLUnknownElement",
      ctor: function (K, q, Y) {
        vK.call(this, K, q, Y);
      }
    }),
    nS = {
      form: {
        get: function () {
          return this._form;
        }
      }
    };
  H7({
    tag: "a",
    name: "HTMLAnchorElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    props: {
      _post_click_activation_steps: {
        value: function (A) {
          if (this.href) this.ownerDocument.defaultView.location = this.href;
        }
      }
    },
    attributes: {
      href: V0,
      ping: String,
      download: String,
      target: String,
      rel: String,
      media: String,
      hreflang: String,
      type: String,
      referrerPolicy: pMA,
      coords: String,
      charset: String,
      name: String,
      rev: String,
      shape: String
    }
  });
  zYK._inherit(yUA.a.prototype);
  H7({
    tag: "area",
    name: "HTMLAreaElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      alt: String,
      target: String,
      download: String,
      rel: String,
      media: String,
      href: V0,
      hreflang: String,
      type: String,
      shape: String,
      coords: String,
      ping: String,
      referrerPolicy: pMA,
      noHref: Boolean
    }
  });
  zYK._inherit(yUA.area.prototype);
  H7({
    tag: "br",
    name: "HTMLBRElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      clear: String
    }
  });
  H7({
    tag: "base",
    name: "HTMLBaseElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      target: String
    }
  });
  H7({
    tag: "body",
    name: "HTMLBodyElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    events: ["afterprint", "beforeprint", "beforeunload", "blur", "error", "focus", "hashchange", "load", "message", "offline", "online", "pagehide", "pageshow", "popstate", "resize", "scroll", "storage", "unload"],
    attributes: {
      text: {
        type: String,
        treatNullAsEmptyString: !0
      },
      link: {
        type: String,
        treatNullAsEmptyString: !0
      },
      vLink: {
        type: String,
        treatNullAsEmptyString: !0
      },
      aLink: {
        type: String,
        treatNullAsEmptyString: !0
      },
      bgColor: {
        type: String,
        treatNullAsEmptyString: !0
      },
      background: String
    }
  });
  H7({
    tag: "button",
    name: "HTMLButtonElement",
    ctor: function (K, q, Y) {
      iS.call(this, K, q, Y);
    },
    props: nS,
    attributes: {
      name: String,
      value: String,
      disabled: Boolean,
      autofocus: Boolean,
      type: {
        type: ["submit", "reset", "button", "menu"],
        missing: "submit"
      },
      formTarget: String,
      formAction: V0,
      formNoValidate: Boolean,
      formMethod: {
        type: ["get", "post", "dialog"],
        invalid: "get",
        missing: ""
      },
      formEnctype: {
        type: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"],
        invalid: "application/x-www-form-urlencoded",
        missing: ""
      }
    }
  });
  H7({
    tag: "dl",
    name: "HTMLDListElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      compact: Boolean
    }
  });
  H7({
    tag: "data",
    name: "HTMLDataElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      value: String
    }
  });
  H7({
    tag: "datalist",
    name: "HTMLDataListElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    }
  });
  H7({
    tag: "details",
    name: "HTMLDetailsElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      open: Boolean
    }
  });
  H7({
    tag: "div",
    name: "HTMLDivElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      align: String
    }
  });
  H7({
    tag: "embed",
    name: "HTMLEmbedElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      src: V0,
      type: String,
      width: String,
      height: String,
      align: String,
      name: String
    }
  });
  H7({
    tag: "fieldset",
    name: "HTMLFieldSetElement",
    ctor: function (K, q, Y) {
      iS.call(this, K, q, Y);
    },
    props: nS,
    attributes: {
      disabled: Boolean,
      name: String
    }
  });
  H7({
    tag: "form",
    name: "HTMLFormElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      action: String,
      autocomplete: {
        type: ["on", "off"],
        missing: "on"
      },
      name: String,
      acceptCharset: {
        name: "accept-charset"
      },
      target: String,
      noValidate: Boolean,
      method: {
        type: ["get", "post", "dialog"],
        invalid: "get",
        missing: "get"
      },
      enctype: {
        type: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"],
        invalid: "application/x-www-form-urlencoded",
        missing: "application/x-www-form-urlencoded"
      },
      encoding: {
        name: "enctype",
        type: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"],
        invalid: "application/x-www-form-urlencoded",
        missing: "application/x-www-form-urlencoded"
      }
    }
  });
  H7({
    tag: "hr",
    name: "HTMLHRElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      align: String,
      color: String,
      noShade: Boolean,
      size: String,
      width: String
    }
  });
  H7({
    tag: "head",
    name: "HTMLHeadElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    }
  });
  H7({
    tags: ["h1", "h2", "h3", "h4", "h5", "h6"],
    name: "HTMLHeadingElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      align: String
    }
  });
  H7({
    tag: "html",
    name: "HTMLHtmlElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      xmlns: V0,
      version: String
    }
  });
  H7({
    tag: "iframe",
    name: "HTMLIFrameElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      src: V0,
      srcdoc: String,
      name: String,
      width: String,
      height: String,
      seamless: Boolean,
      allow: Boolean,
      allowFullscreen: Boolean,
      allowUserMedia: Boolean,
      allowPaymentRequest: Boolean,
      referrerPolicy: pMA,
      loading: {
        type: ["eager", "lazy"],
        treatNullAsEmptyString: !0
      },
      align: String,
      scrolling: String,
      frameBorder: String,
      longDesc: V0,
      marginHeight: {
        type: String,
        treatNullAsEmptyString: !0
      },
      marginWidth: {
        type: String,
        treatNullAsEmptyString: !0
      }
    }
  });
  H7({
    tag: "img",
    name: "HTMLImageElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      alt: String,
      src: V0,
      srcset: String,
      crossOrigin: tV1,
      useMap: String,
      isMap: Boolean,
      sizes: String,
      height: {
        type: "unsigned long",
        default: 0
      },
      width: {
        type: "unsigned long",
        default: 0
      },
      referrerPolicy: pMA,
      loading: {
        type: ["eager", "lazy"],
        missing: ""
      },
      name: String,
      lowsrc: V0,
      align: String,
      hspace: {
        type: "unsigned long",
        default: 0
      },
      vspace: {
        type: "unsigned long",
        default: 0
      },
      longDesc: V0,
      border: {
        type: String,
        treatNullAsEmptyString: !0
      }
    }
  });
  H7({
    tag: "input",
    name: "HTMLInputElement",
    ctor: function (K, q, Y) {
      iS.call(this, K, q, Y);
    },
    props: {
      form: nS.form,
      _post_click_activation_steps: {
        value: function (A) {
          if (this.type === "checkbox") this.checked = !this.checked;else if (this.type === "radio") {
            var K = this.form.getElementsByName(this.name);
            for (var q = K.length - 1; q >= 0; q--) {
              var Y = K[q];
              Y.checked = Y === this;
            }
          }
        }
      }
    },
    attributes: {
      name: String,
      disabled: Boolean,
      autofocus: Boolean,
      accept: String,
      alt: String,
      max: String,
      min: String,
      pattern: String,
      placeholder: String,
      step: String,
      dirName: String,
      defaultValue: {
        name: "value"
      },
      multiple: Boolean,
      required: Boolean,
      readOnly: Boolean,
      checked: Boolean,
      value: String,
      src: V0,
      defaultChecked: {
        name: "checked",
        type: Boolean
      },
      size: {
        type: "unsigned long",
        default: 20,
        min: 1,
        setmin: 1
      },
      width: {
        type: "unsigned long",
        min: 0,
        setmin: 0,
        default: 0
      },
      height: {
        type: "unsigned long",
        min: 0,
        setmin: 0,
        default: 0
      },
      minLength: {
        type: "unsigned long",
        min: 0,
        setmin: 0,
        default: -1
      },
      maxLength: {
        type: "unsigned long",
        min: 0,
        setmin: 0,
        default: -1
      },
      autocomplete: String,
      type: {
        type: ["text", "hidden", "search", "tel", "url", "email", "password", "datetime", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button"],
        missing: "text"
      },
      formTarget: String,
      formNoValidate: Boolean,
      formMethod: {
        type: ["get", "post"],
        invalid: "get",
        missing: ""
      },
      formEnctype: {
        type: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"],
        invalid: "application/x-www-form-urlencoded",
        missing: ""
      },
      inputMode: {
        type: ["verbatim", "latin", "latin-name", "latin-prose", "full-width-latin", "kana", "kana-name", "katakana", "numeric", "tel", "email", "url"],
        missing: ""
      },
      align: String,
      useMap: String
    }
  });
  H7({
    tag: "keygen",
    name: "HTMLKeygenElement",
    ctor: function (K, q, Y) {
      iS.call(this, K, q, Y);
    },
    props: nS,
    attributes: {
      name: String,
      disabled: Boolean,
      autofocus: Boolean,
      challenge: String,
      keytype: {
        type: ["rsa"],
        missing: ""
      }
    }
  });
  H7({
    tag: "li",
    name: "HTMLLIElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      value: {
        type: "long",
        default: 0
      },
      type: String
    }
  });
  H7({
    tag: "label",
    name: "HTMLLabelElement",
    ctor: function (K, q, Y) {
      iS.call(this, K, q, Y);
    },
    props: nS,
    attributes: {
      htmlFor: {
        name: "for",
        type: String
      }
    }
  });
  H7({
    tag: "legend",
    name: "HTMLLegendElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      align: String
    }
  });
  H7({
    tag: "link",
    name: "HTMLLinkElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      href: V0,
      rel: String,
      media: String,
      hreflang: String,
      type: String,
      crossOrigin: tV1,
      nonce: String,
      integrity: String,
      referrerPolicy: pMA,
      imageSizes: String,
      imageSrcset: String,
      charset: String,
      rev: String,
      target: String
    }
  });
  H7({
    tag: "map",
    name: "HTMLMapElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      name: String
    }
  });
  H7({
    tag: "menu",
    name: "HTMLMenuElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      type: {
        type: ["context", "popup", "toolbar"],
        missing: "toolbar"
      },
      label: String,
      compact: Boolean
    }
  });
  H7({
    tag: "meta",
    name: "HTMLMetaElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      name: String,
      content: String,
      httpEquiv: {
        name: "http-equiv",
        type: String
      },
      scheme: String
    }
  });
  H7({
    tag: "meter",
    name: "HTMLMeterElement",
    ctor: function (K, q, Y) {
      iS.call(this, K, q, Y);
    },
    props: nS
  });
  H7({
    tags: ["ins", "del"],
    name: "HTMLModElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      cite: V0,
      dateTime: String
    }
  });
  H7({
    tag: "ol",
    name: "HTMLOListElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    props: {
      _numitems: {
        get: function () {
          var A = 0;
          return this.childNodes.forEach(function (K) {
            if (K.nodeType === $b6.ELEMENT_NODE && K.tagName === "LI") A++;
          }), A;
        }
      }
    },
    attributes: {
      type: String,
      reversed: Boolean,
      start: {
        type: "long",
        default: function () {
          if (this.reversed) return this._numitems;else return 1;
        }
      },
      compact: Boolean
    }
  });
  H7({
    tag: "object",
    name: "HTMLObjectElement",
    ctor: function (K, q, Y) {
      iS.call(this, K, q, Y);
    },
    props: nS,
    attributes: {
      data: V0,
      type: String,
      name: String,
      useMap: String,
      typeMustMatch: Boolean,
      width: String,
      height: String,
      align: String,
      archive: String,
      code: String,
      declare: Boolean,
      hspace: {
        type: "unsigned long",
        default: 0
      },
      standby: String,
      vspace: {
        type: "unsigned long",
        default: 0
      },
      codeBase: V0,
      codeType: String,
      border: {
        type: String,
        treatNullAsEmptyString: !0
      }
    }
  });
  H7({
    tag: "optgroup",
    name: "HTMLOptGroupElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      disabled: Boolean,
      label: String
    }
  });
  H7({
    tag: "option",
    name: "HTMLOptionElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    props: {
      form: {
        get: function () {
          var A = this.parentNode;
          while (A && A.nodeType === $b6.ELEMENT_NODE) {
            if (A.localName === "select") return A.form;
            A = A.parentNode;
          }
        }
      },
      value: {
        get: function () {
          return this._getattr("value") || this.text;
        },
        set: function (A) {
          this._setattr("value", A);
        }
      },
      text: {
        get: function () {
          return this.textContent.replace(/[ \t\n\f\r]+/g, " ").trim();
        },
        set: function (A) {
          this.textContent = A;
        }
      }
    },
    attributes: {
      disabled: Boolean,
      defaultSelected: {
        name: "selected",
        type: Boolean
      },
      label: String
    }
  });
  H7({
    tag: "output",
    name: "HTMLOutputElement",
    ctor: function (K, q, Y) {
      iS.call(this, K, q, Y);
    },
    props: nS,
    attributes: {
      name: String
    }
  });
  H7({
    tag: "p",
    name: "HTMLParagraphElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      align: String
    }
  });
  H7({
    tag: "param",
    name: "HTMLParamElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      name: String,
      value: String,
      type: String,
      valueType: String
    }
  });
  H7({
    tags: ["pre", "listing", "xmp"],
    name: "HTMLPreElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      width: {
        type: "long",
        default: 0
      }
    }
  });
  H7({
    tag: "progress",
    name: "HTMLProgressElement",
    ctor: function (K, q, Y) {
      iS.call(this, K, q, Y);
    },
    props: nS,
    attributes: {
      max: {
        type: Number,
        float: !0,
        default: 1,
        min: 0
      }
    }
  });
  H7({
    tags: ["q", "blockquote"],
    name: "HTMLQuoteElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      cite: V0
    }
  });
  H7({
    tag: "script",
    name: "HTMLScriptElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    props: {
      text: {
        get: function () {
          var A = "";
          for (var K = 0, q = this.childNodes.length; K < q; K++) {
            var Y = this.childNodes[K];
            if (Y.nodeType === $b6.TEXT_NODE) A += Y._data;
          }
          return A;
        },
        set: function (A) {
          if (this.removeChildren(), A !== null && A !== "") this.appendChild(this.ownerDocument.createTextNode(A));
        }
      }
    },
    attributes: {
      src: V0,
      type: String,
      charset: String,
      referrerPolicy: pMA,
      defer: Boolean,
      async: Boolean,
      nomodule: Boolean,
      crossOrigin: tV1,
      nonce: String,
      integrity: String
    }
  });
  H7({
    tag: "select",
    name: "HTMLSelectElement",
    ctor: function (K, q, Y) {
      iS.call(this, K, q, Y);
    },
    props: {
      form: nS.form,
      options: {
        get: function () {
          return this.getElementsByTagName("option");
        }
      }
    },
    attributes: {
      autocomplete: String,
      name: String,
      disabled: Boolean,
      autofocus: Boolean,
      multiple: Boolean,
      required: Boolean,
      size: {
        type: "unsigned long",
        default: 0
      }
    }
  });
  H7({
    tag: "span",
    name: "HTMLSpanElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    }
  });
  H7({
    tag: "style",
    name: "HTMLStyleElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      media: String,
      type: String,
      scoped: Boolean
    }
  });
  H7({
    tag: "caption",
    name: "HTMLTableCaptionElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      align: String
    }
  });
  H7({
    name: "HTMLTableCellElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      colSpan: {
        type: "unsigned long",
        default: 1
      },
      rowSpan: {
        type: "unsigned long",
        default: 1
      },
      scope: {
        type: ["row", "col", "rowgroup", "colgroup"],
        missing: ""
      },
      abbr: String,
      align: String,
      axis: String,
      height: String,
      width: String,
      ch: {
        name: "char",
        type: String
      },
      chOff: {
        name: "charoff",
        type: String
      },
      noWrap: Boolean,
      vAlign: String,
      bgColor: {
        type: String,
        treatNullAsEmptyString: !0
      }
    }
  });
  H7({
    tags: ["col", "colgroup"],
    name: "HTMLTableColElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      span: {
        type: "limited unsigned long with fallback",
        default: 1,
        min: 1
      },
      align: String,
      ch: {
        name: "char",
        type: String
      },
      chOff: {
        name: "charoff",
        type: String
      },
      vAlign: String,
      width: String
    }
  });
  H7({
    tag: "table",
    name: "HTMLTableElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    props: {
      rows: {
        get: function () {
          return this.getElementsByTagName("tr");
        }
      }
    },
    attributes: {
      align: String,
      border: String,
      frame: String,
      rules: String,
      summary: String,
      width: String,
      bgColor: {
        type: String,
        treatNullAsEmptyString: !0
      },
      cellPadding: {
        type: String,
        treatNullAsEmptyString: !0
      },
      cellSpacing: {
        type: String,
        treatNullAsEmptyString: !0
      }
    }
  });
  H7({
    tag: "template",
    name: "HTMLTemplateElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y), this._contentFragment = K._templateDoc.createDocumentFragment();
    },
    props: {
      content: {
        get: function () {
          return this._contentFragment;
        }
      },
      serialize: {
        value: function () {
          return this.content.serialize();
        }
      }
    }
  });
  H7({
    tag: "tr",
    name: "HTMLTableRowElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    props: {
      cells: {
        get: function () {
          return this.querySelectorAll("td,th");
        }
      }
    },
    attributes: {
      align: String,
      ch: {
        name: "char",
        type: String
      },
      chOff: {
        name: "charoff",
        type: String
      },
      vAlign: String,
      bgColor: {
        type: String,
        treatNullAsEmptyString: !0
      }
    }
  });
  H7({
    tags: ["thead", "tfoot", "tbody"],
    name: "HTMLTableSectionElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    props: {
      rows: {
        get: function () {
          return this.getElementsByTagName("tr");
        }
      }
    },
    attributes: {
      align: String,
      ch: {
        name: "char",
        type: String
      },
      chOff: {
        name: "charoff",
        type: String
      },
      vAlign: String
    }
  });
  H7({
    tag: "textarea",
    name: "HTMLTextAreaElement",
    ctor: function (K, q, Y) {
      iS.call(this, K, q, Y);
    },
    props: {
      form: nS.form,
      type: {
        get: function () {
          return "textarea";
        }
      },
      defaultValue: {
        get: function () {
          return this.textContent;
        },
        set: function (A) {
          this.textContent = A;
        }
      },
      value: {
        get: function () {
          return this.defaultValue;
        },
        set: function (A) {
          this.defaultValue = A;
        }
      },
      textLength: {
        get: function () {
          return this.value.length;
        }
      }
    },
    attributes: {
      autocomplete: String,
      name: String,
      disabled: Boolean,
      autofocus: Boolean,
      placeholder: String,
      wrap: String,
      dirName: String,
      required: Boolean,
      readOnly: Boolean,
      rows: {
        type: "limited unsigned long with fallback",
        default: 2
      },
      cols: {
        type: "limited unsigned long with fallback",
        default: 20
      },
      maxLength: {
        type: "unsigned long",
        min: 0,
        setmin: 0,
        default: -1
      },
      minLength: {
        type: "unsigned long",
        min: 0,
        setmin: 0,
        default: -1
      },
      inputMode: {
        type: ["verbatim", "latin", "latin-name", "latin-prose", "full-width-latin", "kana", "kana-name", "katakana", "numeric", "tel", "email", "url"],
        missing: ""
      }
    }
  });
  H7({
    tag: "time",
    name: "HTMLTimeElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      dateTime: String,
      pubDate: Boolean
    }
  });
  H7({
    tag: "title",
    name: "HTMLTitleElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    props: {
      text: {
        get: function () {
          return this.textContent;
        }
      }
    }
  });
  H7({
    tag: "ul",
    name: "HTMLUListElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      type: String,
      compact: Boolean
    }
  });
  H7({
    name: "HTMLMediaElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      src: V0,
      crossOrigin: tV1,
      preload: {
        type: ["metadata", "none", "auto", {
          value: "",
          alias: "auto"
        }],
        missing: "auto"
      },
      loop: Boolean,
      autoplay: Boolean,
      mediaGroup: String,
      controls: Boolean,
      defaultMuted: {
        name: "muted",
        type: Boolean
      }
    }
  });
  H7({
    name: "HTMLAudioElement",
    tag: "audio",
    superclass: ud.HTMLMediaElement,
    ctor: function (K, q, Y) {
      ud.HTMLMediaElement.call(this, K, q, Y);
    }
  });
  H7({
    name: "HTMLVideoElement",
    tag: "video",
    superclass: ud.HTMLMediaElement,
    ctor: function (K, q, Y) {
      ud.HTMLMediaElement.call(this, K, q, Y);
    },
    attributes: {
      poster: V0,
      width: {
        type: "unsigned long",
        min: 0,
        default: 0
      },
      height: {
        type: "unsigned long",
        min: 0,
        default: 0
      }
    }
  });
  H7({
    tag: "td",
    name: "HTMLTableDataCellElement",
    superclass: ud.HTMLTableCellElement,
    ctor: function (K, q, Y) {
      ud.HTMLTableCellElement.call(this, K, q, Y);
    }
  });
  H7({
    tag: "th",
    name: "HTMLTableHeaderCellElement",
    superclass: ud.HTMLTableCellElement,
    ctor: function (K, q, Y) {
      ud.HTMLTableCellElement.call(this, K, q, Y);
    }
  });
  H7({
    tag: "frameset",
    name: "HTMLFrameSetElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    }
  });
  H7({
    tag: "frame",
    name: "HTMLFrameElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    }
  });
  H7({
    tag: "canvas",
    name: "HTMLCanvasElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    props: {
      getContext: {
        value: vv.nyi
      },
      probablySupportsContext: {
        value: vv.nyi
      },
      setContext: {
        value: vv.nyi
      },
      transferControlToProxy: {
        value: vv.nyi
      },
      toDataURL: {
        value: vv.nyi
      },
      toBlob: {
        value: vv.nyi
      }
    },
    attributes: {
      width: {
        type: "unsigned long",
        default: 300
      },
      height: {
        type: "unsigned long",
        default: 150
      }
    }
  });
  H7({
    tag: "dialog",
    name: "HTMLDialogElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    props: {
      show: {
        value: vv.nyi
      },
      showModal: {
        value: vv.nyi
      },
      close: {
        value: vv.nyi
      }
    },
    attributes: {
      open: Boolean,
      returnValue: String
    }
  });
  H7({
    tag: "menuitem",
    name: "HTMLMenuItemElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    props: {
      _label: {
        get: function () {
          var A = this._getattr("label");
          if (A !== null && A !== "") return A;
          return A = this.textContent, A.replace(/[ \t\n\f\r]+/g, " ").trim();
        }
      },
      label: {
        get: function () {
          var A = this._getattr("label");
          if (A !== null) return A;
          return this._label;
        },
        set: function (A) {
          this._setattr("label", A);
        }
      }
    },
    attributes: {
      type: {
        type: ["command", "checkbox", "radio"],
        missing: "command"
      },
      icon: V0,
      disabled: Boolean,
      checked: Boolean,
      radiogroup: String,
      default: Boolean
    }
  });
  H7({
    tag: "source",
    name: "HTMLSourceElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      srcset: String,
      sizes: String,
      media: String,
      src: V0,
      type: String,
      width: String,
      height: String
    }
  });
  H7({
    tag: "track",
    name: "HTMLTrackElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      src: V0,
      srclang: String,
      label: String,
      default: Boolean,
      kind: {
        type: ["subtitles", "captions", "descriptions", "chapters", "metadata"],
        missing: "subtitles",
        invalid: "metadata"
      }
    },
    props: {
      NONE: {
        get: function () {
          return 0;
        }
      },
      LOADING: {
        get: function () {
          return 1;
        }
      },
      LOADED: {
        get: function () {
          return 2;
        }
      },
      ERROR: {
        get: function () {
          return 3;
        }
      },
      readyState: {
        get: vv.nyi
      },
      track: {
        get: vv.nyi
      }
    }
  });
  H7({
    tag: "font",
    name: "HTMLFontElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      color: {
        type: String,
        treatNullAsEmptyString: !0
      },
      face: {
        type: String
      },
      size: {
        type: String
      }
    }
  });
  H7({
    tag: "dir",
    name: "HTMLDirectoryElement",
    ctor: function (K, q, Y) {
      vK.call(this, K, q, Y);
    },
    attributes: {
      compact: Boolean
    }
  });
  H7({
    tags: ["abbr", "address", "article", "aside", "b", "bdi", "bdo", "cite", "content", "code", "dd", "dfn", "dt", "em", "figcaption", "figure", "footer", "header", "hgroup", "i", "kbd", "main", "mark", "nav", "noscript", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "section", "small", "strong", "sub", "summary", "sup", "u", "var", "wbr", "acronym", "basefont", "big", "center", "nobr", "noembed", "noframes", "plaintext", "strike", "tt"]
  });
});

// Register to shared state
__$.eV1 = eV1;
