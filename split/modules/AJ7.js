// Module: AJ7
// Dependencies: DW6, jW6, sH7, HZA, Z_, kI, Gf, ZqA, KZA, U01
//   ... and 25 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var AJ7 = k(() => {
  __$.DW6();
  __$.jW6 = class jW6 extends Event {
    constructor(A, K) {
      var q, Y;
      super(A), this.code = (q = K == null ? void 0 : K.code) != null ? q : void 0, this.message = (Y = K == null ? void 0 : K.message) != null ? Y : void 0;
    }
    [Symbol.for("nodejs.util.inspect.custom")](A, K, q) {
      return q(__$.sH7(this), K);
    }
    [Symbol.for("Deno.customInspect")](A, K) {
      return A(__$.sH7(this), K);
    }
  };
  __$.HZA = class HZA extends EventTarget {
    constructor(A, K) {
      var q, Y;
      super(), __$.Z_(this, __$.kI), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, __$.Z_(this, __$.Gf), __$.Z_(this, __$.ZqA), __$.Z_(this, __$.KZA), __$.Z_(this, __$.U01), __$.Z_(this, __$.p01), __$.Z_(this, __$.guA), __$.Z_(this, __$.zZA), __$.Z_(this, __$.FuA, null), __$.Z_(this, __$.Da), __$.Z_(this, __$.qZA), __$.Z_(this, __$.wZA, null), __$.Z_(this, __$.YZA, null), __$.Z_(this, __$.BuA, null), __$.Z_(this, __$.VW6, async z => {
        var w;
        __$.B9(this, __$.qZA).reset();
        let {
          body: H,
          redirected: J,
          status: O,
          headers: X
        } = z;
        if (O === 204) {
          __$.$p(this, __$.kI, __$.muA).call(this, "Server sent HTTP 204, not reconnecting", 204), this.close();
          return;
        }
        if (J ? __$.RJ(this, __$.KZA, new URL(z.url)) : __$.RJ(this, __$.KZA, void 0), O !== 200) {
          __$.$p(this, __$.kI, __$.muA).call(this, `Non-200 status code (${O})`, O);
          return;
        }
        if (!(X.get("content-type") || "").startsWith("text/event-stream")) {
          __$.$p(this, __$.kI, __$.muA).call(this, 'Invalid content type, expected "text/event-stream"', O);
          return;
        }
        if (__$.B9(this, __$.Gf) === this.CLOSED) return;
        __$.RJ(this, __$.Gf, this.OPEN);
        let $ = new Event("open");
        if ((w = __$.B9(this, __$.BuA)) == null || w.call(this, $), this.dispatchEvent($), typeof H != "object" || !H || !("getReader" in H)) {
          __$.$p(this, __$.kI, __$.muA).call(this, "Invalid response body, expected a web ReadableStream", O), this.close();
          return;
        }
        let _ = new TextDecoder(),
          G = H.getReader(),
          Z = !0;
        do {
          let {
            done: W,
            value: D
          } = await G.read();
          D && __$.B9(this, __$.qZA).feed(_.decode(D, {
            stream: !W
          })), W && (Z = !1, __$.B9(this, __$.qZA).reset(), __$.$p(this, __$.kI, __$.vW6).call(this));
        } while (Z);
      }), __$.Z_(this, __$.fW6, z => {
        __$.RJ(this, __$.Da, void 0), !(z.name === "AbortError" || z.type === "aborted") && __$.$p(this, __$.kI, __$.vW6).call(this, __$.MW6(z));
      }), __$.Z_(this, __$.NW6, z => {
        typeof z.id == "string" && __$.RJ(this, __$.FuA, z.id);
        let w = new MessageEvent(z.event || "message", {
          data: z.data,
          origin: __$.B9(this, __$.KZA) ? __$.B9(this, __$.KZA).origin : __$.B9(this, __$.ZqA).origin,
          lastEventId: z.id || ""
        });
        __$.B9(this, __$.YZA) && (!z.event || z.event === "message") && __$.B9(this, __$.YZA).call(this, w), this.dispatchEvent(w);
      }), __$.Z_(this, __$.TW6, z => {
        __$.RJ(this, __$.guA, z);
      }), __$.Z_(this, __$.EW6, () => {
        __$.RJ(this, __$.zZA, void 0), __$.B9(this, __$.Gf) === this.CONNECTING && __$.$p(this, __$.kI, __$.PW6).call(this);
      });
      try {
        if (A instanceof URL) __$.RJ(this, __$.ZqA, A);else if (typeof A == "string") __$.RJ(this, __$.ZqA, new URL(A, __$.jDY()));else throw Error("Invalid URL");
      } catch {
        throw __$.DDY("An invalid or illegal string was specified");
      }
      __$.RJ(this, __$.qZA, __$.Q01({
        onEvent: __$.B9(this, __$.NW6),
        onRetry: __$.B9(this, __$.TW6)
      })), __$.RJ(this, __$.Gf, this.CONNECTING), __$.RJ(this, __$.guA, 3000), __$.RJ(this, __$.p01, (q = K == null ? void 0 : K.fetch) != null ? q : globalThis.fetch), __$.RJ(this, __$.U01, (Y = K == null ? void 0 : K.withCredentials) != null ? Y : !1), __$.$p(this, __$.kI, __$.PW6).call(this);
    }
    get readyState() {
      return __$.B9(this, __$.Gf);
    }
    get url() {
      return __$.B9(this, __$.ZqA).href;
    }
    get withCredentials() {
      return __$.B9(this, __$.U01);
    }
    get onerror() {
      return __$.B9(this, __$.wZA);
    }
    set onerror(A) {
      __$.RJ(this, __$.wZA, A);
    }
    get onmessage() {
      return __$.B9(this, __$.YZA);
    }
    set onmessage(A) {
      __$.RJ(this, __$.YZA, A);
    }
    get onopen() {
      return __$.B9(this, __$.BuA);
    }
    set onopen(A) {
      __$.RJ(this, __$.BuA, A);
    }
    addEventListener(A, K, q) {
      let Y = K;
      super.addEventListener(A, Y, q);
    }
    removeEventListener(A, K, q) {
      let Y = K;
      super.removeEventListener(A, Y, q);
    }
    close() {
      __$.B9(this, __$.zZA) && clearTimeout(__$.B9(this, __$.zZA)), __$.B9(this, __$.Gf) !== this.CLOSED && (__$.B9(this, __$.Da) && __$.B9(this, __$.Da).abort(), __$.RJ(this, __$.Gf, this.CLOSED), __$.RJ(this, __$.Da, void 0));
    }
  };
  __$.Gf = new WeakMap(), __$.ZqA = new WeakMap(), __$.KZA = new WeakMap(), __$.U01 = new WeakMap(), __$.p01 = new WeakMap(), __$.guA = new WeakMap(), __$.zZA = new WeakMap(), __$.FuA = new WeakMap(), __$.Da = new WeakMap(), __$.qZA = new WeakMap(), __$.wZA = new WeakMap(), __$.YZA = new WeakMap(), __$.BuA = new WeakMap(), __$.kI = new WeakSet(), __$.PW6 = function () {
    __$.RJ(this, __$.Gf, this.CONNECTING), __$.RJ(this, __$.Da, new AbortController()), __$.B9(this, __$.p01)(__$.B9(this, __$.ZqA), __$.$p(this, __$.kI, __$.tH7).call(this)).then(__$.B9(this, __$.VW6)).catch(__$.B9(this, __$.fW6));
  }, __$.VW6 = new WeakMap(), __$.fW6 = new WeakMap(), __$.tH7 = function () {
    var A;
    let K = {
      mode: "cors",
      redirect: "follow",
      headers: {
        Accept: "text/event-stream",
        ...(__$.B9(this, __$.FuA) ? {
          "Last-Event-ID": __$.B9(this, __$.FuA)
        } : void 0)
      },
      cache: "no-store",
      signal: (A = __$.B9(this, __$.Da)) == null ? void 0 : A.signal
    };
    return "window" in globalThis && (K.credentials = this.withCredentials ? "include" : "same-origin"), K;
  }, __$.NW6 = new WeakMap(), __$.TW6 = new WeakMap(), __$.muA = function (A, K) {
    var q;
    __$.B9(this, __$.Gf) !== this.CLOSED && __$.RJ(this, __$.Gf, this.CLOSED);
    let Y = new __$.jW6("error", {
      code: K,
      message: A
    });
    (q = __$.B9(this, __$.wZA)) == null || q.call(this, Y), this.dispatchEvent(Y);
  }, __$.vW6 = function (A, K) {
    var q;
    if (__$.B9(this, __$.Gf) === this.CLOSED) return;
    __$.RJ(this, __$.Gf, this.CONNECTING);
    let Y = new __$.jW6("error", {
      code: K,
      message: A
    });
    (q = __$.B9(this, __$.wZA)) == null || q.call(this, Y), this.dispatchEvent(Y), __$.RJ(this, __$.zZA, setTimeout(__$.B9(this, __$.EW6), __$.B9(this, __$.guA)));
  }, __$.EW6 = new WeakMap(), __$.HZA.CONNECTING = 0, __$.HZA.OPEN = 1, __$.HZA.CLOSED = 2;
});

// Register to shared state
__$.AJ7 = AJ7;
