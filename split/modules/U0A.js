// Module: U0A
// Dependencies: SZ, j9, MJ

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var U0A = v((j8w, cz4) => {
  var {
      webidl: xK
    } = __$.SZ(),
    {
      kEnumerableProperty: xV
    } = __$.j9(),
    {
      kConstruct: dz4
    } = __$.MJ(),
    {
      MessagePort: hi3
    } = CA("node:worker_threads");
  class fT extends Event {
    #A;
    constructor(A, K = {}) {
      if (A === dz4) {
        super(arguments[1], arguments[2]);
        xK.util.markAsUncloneable(this);
        return;
      }
      let q = "MessageEvent constructor";
      xK.argumentLengthCheck(arguments, 1, q), A = xK.converters.DOMString(A, q, "type"), K = xK.converters.MessageEventInit(K, q, "eventInitDict");
      super(A, K);
      this.#A = K, xK.util.markAsUncloneable(this);
    }
    get data() {
      return xK.brandCheck(this, fT), this.#A.data;
    }
    get origin() {
      return xK.brandCheck(this, fT), this.#A.origin;
    }
    get lastEventId() {
      return xK.brandCheck(this, fT), this.#A.lastEventId;
    }
    get source() {
      return xK.brandCheck(this, fT), this.#A.source;
    }
    get ports() {
      if (xK.brandCheck(this, fT), !Object.isFrozen(this.#A.ports)) Object.freeze(this.#A.ports);
      return this.#A.ports;
    }
    initMessageEvent(A, K = !1, q = !1, Y = null, z = "", w = "", H = null, J = []) {
      return xK.brandCheck(this, fT), xK.argumentLengthCheck(arguments, 1, "MessageEvent.initMessageEvent"), new fT(A, {
        bubbles: K,
        cancelable: q,
        data: Y,
        origin: z,
        lastEventId: w,
        source: H,
        ports: J
      });
    }
    static createFastMessageEvent(A, K) {
      let q = new fT(dz4, A, K);
      return q.#A = K, q.#A.data ??= null, q.#A.origin ??= "", q.#A.lastEventId ??= "", q.#A.source ??= null, q.#A.ports ??= [], q;
    }
  }
  var {
    createFastMessageEvent: bi3
  } = fT;
  delete fT.createFastMessageEvent;
  class Q0A extends Event {
    #A;
    constructor(A, K = {}) {
      xK.argumentLengthCheck(arguments, 1, "CloseEvent constructor"), A = xK.converters.DOMString(A, "CloseEvent constructor", "type"), K = xK.converters.CloseEventInit(K);
      super(A, K);
      this.#A = K, xK.util.markAsUncloneable(this);
    }
    get wasClean() {
      return xK.brandCheck(this, Q0A), this.#A.wasClean;
    }
    get code() {
      return xK.brandCheck(this, Q0A), this.#A.code;
    }
    get reason() {
      return xK.brandCheck(this, Q0A), this.#A.reason;
    }
  }
  class Fn extends Event {
    #A;
    constructor(A, K) {
      xK.argumentLengthCheck(arguments, 1, "ErrorEvent constructor");
      super(A, K);
      xK.util.markAsUncloneable(this), A = xK.converters.DOMString(A, "ErrorEvent constructor", "type"), K = xK.converters.ErrorEventInit(K ?? {}), this.#A = K;
    }
    get message() {
      return xK.brandCheck(this, Fn), this.#A.message;
    }
    get filename() {
      return xK.brandCheck(this, Fn), this.#A.filename;
    }
    get lineno() {
      return xK.brandCheck(this, Fn), this.#A.lineno;
    }
    get colno() {
      return xK.brandCheck(this, Fn), this.#A.colno;
    }
    get error() {
      return xK.brandCheck(this, Fn), this.#A.error;
    }
  }
  Object.defineProperties(fT.prototype, {
    [Symbol.toStringTag]: {
      value: "MessageEvent",
      configurable: !0
    },
    data: xV,
    origin: xV,
    lastEventId: xV,
    source: xV,
    ports: xV,
    initMessageEvent: xV
  });
  Object.defineProperties(Q0A.prototype, {
    [Symbol.toStringTag]: {
      value: "CloseEvent",
      configurable: !0
    },
    reason: xV,
    code: xV,
    wasClean: xV
  });
  Object.defineProperties(Fn.prototype, {
    [Symbol.toStringTag]: {
      value: "ErrorEvent",
      configurable: !0
    },
    message: xV,
    filename: xV,
    lineno: xV,
    colno: xV,
    error: xV
  });
  xK.converters.MessagePort = xK.interfaceConverter(hi3);
  xK.converters["sequence<MessagePort>"] = xK.sequenceConverter(xK.converters.MessagePort);
  var D46 = [{
    key: "bubbles",
    converter: xK.converters.boolean,
    defaultValue: () => !1
  }, {
    key: "cancelable",
    converter: xK.converters.boolean,
    defaultValue: () => !1
  }, {
    key: "composed",
    converter: xK.converters.boolean,
    defaultValue: () => !1
  }];
  xK.converters.MessageEventInit = xK.dictionaryConverter([...D46, {
    key: "data",
    converter: xK.converters.any,
    defaultValue: () => null
  }, {
    key: "origin",
    converter: xK.converters.USVString,
    defaultValue: () => ""
  }, {
    key: "lastEventId",
    converter: xK.converters.DOMString,
    defaultValue: () => ""
  }, {
    key: "source",
    converter: xK.nullableConverter(xK.converters.MessagePort),
    defaultValue: () => null
  }, {
    key: "ports",
    converter: xK.converters["sequence<MessagePort>"],
    defaultValue: () => []
  }]);
  xK.converters.CloseEventInit = xK.dictionaryConverter([...D46, {
    key: "wasClean",
    converter: xK.converters.boolean,
    defaultValue: () => !1
  }, {
    key: "code",
    converter: xK.converters["unsigned short"],
    defaultValue: () => 0
  }, {
    key: "reason",
    converter: xK.converters.USVString,
    defaultValue: () => ""
  }]);
  xK.converters.ErrorEventInit = xK.dictionaryConverter([...D46, {
    key: "message",
    converter: xK.converters.DOMString,
    defaultValue: () => ""
  }, {
    key: "filename",
    converter: xK.converters.USVString,
    defaultValue: () => ""
  }, {
    key: "lineno",
    converter: xK.converters["unsigned long"],
    defaultValue: () => 0
  }, {
    key: "colno",
    converter: xK.converters["unsigned long"],
    defaultValue: () => 0
  }, {
    key: "error",
    converter: xK.converters.any
  }]);
  cz4.exports = {
    MessageEvent: fT,
    CloseEvent: Q0A,
    ErrorEvent: Fn,
    createFastMessageEvent: bi3
  };
});

// Register to shared state
__$.U0A = U0A;
