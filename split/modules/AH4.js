// Module: AH4
// Dependencies: pRA, u0A, SZ, iw4, IV, U0A, QRA, T46, j9, ZT

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var AH4 = v((R8w, ew4) => {
  var {
      pipeline: Or3
    } = CA("node:stream"),
    {
      fetching: Xr3
    } = __$.pRA(),
    {
      makeRequest: $r3
    } = __$.u0A(),
    {
      webidl: NQ
    } = __$.SZ(),
    {
      EventSourceStream: _r3
    } = __$.iw4(),
    {
      parseMIMEType: Gr3
    } = __$.IV(),
    {
      createFastMessageEvent: Zr3
    } = __$.U0A(),
    {
      isNetworkError: nw4
    } = __$.QRA(),
    {
      delay: Wr3
    } = __$.T46(),
    {
      kEnumerableProperty: o8A
    } = __$.j9(),
    {
      environmentSettingsObject: rw4
    } = __$.ZT(),
    ow4 = !1,
    aw4 = 3000,
    KyA = 0,
    sw4 = 1,
    qyA = 2,
    Dr3 = "anonymous",
    jr3 = "use-credentials";
  class i0A extends EventTarget {
    #A = {
      open: null,
      error: null,
      message: null
    };
    #K = null;
    #q = !1;
    #z = KyA;
    #Y = null;
    #J = null;
    #w;
    #X;
    constructor(A, K = {}) {
      super();
      NQ.util.markAsUncloneable(this);
      let q = "EventSource constructor";
      if (NQ.argumentLengthCheck(arguments, 1, q), !ow4) ow4 = !0, process.emitWarning("EventSource is experimental, expect them to change at any time.", {
        code: "UNDICI-ES"
      });
      A = NQ.converters.USVString(A, q, "url"), K = NQ.converters.EventSourceInitDict(K, q, "eventSourceInitDict"), this.#w = K.dispatcher, this.#X = {
        lastEventId: "",
        reconnectionTime: aw4
      };
      let Y = rw4,
        z;
      try {
        z = new URL(A, Y.settingsObject.baseUrl), this.#X.origin = z.origin;
      } catch (J) {
        throw new DOMException(J, "SyntaxError");
      }
      this.#K = z.href;
      let w = Dr3;
      if (K.withCredentials) w = jr3, this.#q = !0;
      let H = {
        redirect: "follow",
        keepalive: !0,
        mode: "cors",
        credentials: w === "anonymous" ? "same-origin" : "omit",
        referrer: "no-referrer"
      };
      H.client = rw4.settingsObject, H.headersList = [["accept", {
        name: "accept",
        value: "text/event-stream"
      }]], H.cache = "no-store", H.initiator = "other", H.urlList = [new URL(this.#K)], this.#Y = $r3(H), this.#$();
    }
    get readyState() {
      return this.#z;
    }
    get url() {
      return this.#K;
    }
    get withCredentials() {
      return this.#q;
    }
    #$() {
      if (this.#z === qyA) return;
      this.#z = KyA;
      let A = {
          request: this.#Y,
          dispatcher: this.#w
        },
        K = q => {
          if (nw4(q)) this.dispatchEvent(new Event("error")), this.close();
          this.#O();
        };
      A.processResponseEndOfBody = K, A.processResponse = q => {
        if (nw4(q)) if (q.aborted) {
          this.close(), this.dispatchEvent(new Event("error"));
          return;
        } else {
          this.#O();
          return;
        }
        let Y = q.headersList.get("content-type", !0),
          z = Y !== null ? Gr3(Y) : "failure",
          w = z !== "failure" && z.essence === "text/event-stream";
        if (q.status !== 200 || w === !1) {
          this.close(), this.dispatchEvent(new Event("error"));
          return;
        }
        this.#z = sw4, this.dispatchEvent(new Event("open")), this.#X.origin = q.urlList[q.urlList.length - 1].origin;
        let H = new _r3({
          eventSourceSettings: this.#X,
          push: J => {
            this.dispatchEvent(Zr3(J.type, J.options));
          }
        });
        Or3(q.body.stream, H, J => {
          if (J?.aborted === !1) this.close(), this.dispatchEvent(new Event("error"));
        });
      }, this.#J = Xr3(A);
    }
    async #O() {
      if (this.#z === qyA) return;
      if (this.#z = KyA, this.dispatchEvent(new Event("error")), await Wr3(this.#X.reconnectionTime), this.#z !== KyA) return;
      if (this.#X.lastEventId.length) this.#Y.headersList.set("last-event-id", this.#X.lastEventId, !0);
      this.#$();
    }
    close() {
      if (NQ.brandCheck(this, i0A), this.#z === qyA) return;
      this.#z = qyA, this.#J.abort(), this.#Y = null;
    }
    get onopen() {
      return this.#A.open;
    }
    set onopen(A) {
      if (this.#A.open) this.removeEventListener("open", this.#A.open);
      if (typeof A === "function") this.#A.open = A, this.addEventListener("open", A);else this.#A.open = null;
    }
    get onmessage() {
      return this.#A.message;
    }
    set onmessage(A) {
      if (this.#A.message) this.removeEventListener("message", this.#A.message);
      if (typeof A === "function") this.#A.message = A, this.addEventListener("message", A);else this.#A.message = null;
    }
    get onerror() {
      return this.#A.error;
    }
    set onerror(A) {
      if (this.#A.error) this.removeEventListener("error", this.#A.error);
      if (typeof A === "function") this.#A.error = A, this.addEventListener("error", A);else this.#A.error = null;
    }
  }
  var tw4 = {
    CONNECTING: {
      __proto__: null,
      configurable: !1,
      enumerable: !0,
      value: KyA,
      writable: !1
    },
    OPEN: {
      __proto__: null,
      configurable: !1,
      enumerable: !0,
      value: sw4,
      writable: !1
    },
    CLOSED: {
      __proto__: null,
      configurable: !1,
      enumerable: !0,
      value: qyA,
      writable: !1
    }
  };
  Object.defineProperties(i0A, tw4);
  Object.defineProperties(i0A.prototype, tw4);
  Object.defineProperties(i0A.prototype, {
    close: o8A,
    onerror: o8A,
    onmessage: o8A,
    onopen: o8A,
    readyState: o8A,
    url: o8A,
    withCredentials: o8A
  });
  NQ.converters.EventSourceInitDict = NQ.dictionaryConverter([{
    key: "withCredentials",
    converter: NQ.converters.boolean,
    defaultValue: () => !1
  }, {
    key: "dispatcher",
    converter: NQ.converters.any
  }]);
  ew4.exports = {
    EventSource: i0A,
    defaultReconnectionTime: aw4
  };
});

// Register to shared state
__$.AH4 = AH4;
