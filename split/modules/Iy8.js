// Module: Iy8
// Dependencies: NF, y6A, EA1, tp1, EkA, dE, Si, VkA, bA1, fkA
//   ... and 28 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Iy8 = k(() => {
  __$.NF();
  __$.y6A();
  __$.EA1();
  __$.tp1();
  __$.EkA = class EkA {
    constructor() {
      __$.dE.add(this), this.messages = [], this.receivedMessages = [], __$.Si.set(this, void 0), this.controller = new AbortController(), __$.VkA.set(this, void 0), __$.bA1.set(this, () => {}), __$.fkA.set(this, () => {}), __$.NkA.set(this, void 0), __$.xA1.set(this, () => {}), __$.TkA.set(this, () => {}), __$.CF.set(this, {}), __$.vkA.set(this, !1), __$.uA1.set(this, !1), __$.BA1.set(this, !1), __$.zJA.set(this, !1), __$.mA1.set(this, void 0), __$.gA1.set(this, void 0), __$.Zd1.set(this, A => {
        if (__$._7(this, __$.uA1, !0, "f"), __$.TF(A)) A = new __$.h2();
        if (A instanceof __$.h2) return __$._7(this, __$.BA1, !0, "f"), this._emit("abort", A);
        if (A instanceof __$.O7) return this._emit("error", A);
        if (A instanceof Error) {
          let K = new __$.O7(A.message);
          return K.cause = A, this._emit("error", K);
        }
        return this._emit("error", new __$.O7(String(A)));
      }), __$._7(this, __$.VkA, new Promise((A, K) => {
        __$._7(this, __$.bA1, A, "f"), __$._7(this, __$.fkA, K, "f");
      }), "f"), __$._7(this, __$.NkA, new Promise((A, K) => {
        __$._7(this, __$.xA1, A, "f"), __$._7(this, __$.TkA, K, "f");
      }), "f"), __$.x6(this, __$.VkA, "f").catch(() => {}), __$.x6(this, __$.NkA, "f").catch(() => {});
    }
    get response() {
      return __$.x6(this, __$.mA1, "f");
    }
    get request_id() {
      return __$.x6(this, __$.gA1, "f");
    }
    async withResponse() {
      let A = await __$.x6(this, __$.VkA, "f");
      if (!A) throw Error("Could not resolve a `Response` object");
      return {
        data: this,
        response: A,
        request_id: A.headers.get("request-id")
      };
    }
    static fromReadableStream(A) {
      let K = new __$.EkA();
      return K._run(() => K._fromReadableStream(A)), K;
    }
    static createMessage(A, K, q) {
      let Y = new __$.EkA();
      for (let z of K.messages) Y._addMessageParam(z);
      return Y._run(() => Y._createMessage(A, {
        ...K,
        stream: !0
      }, {
        ...q,
        headers: {
          ...q?.headers,
          "X-Stainless-Helper-Method": "stream"
        }
      })), Y;
    }
    _run(A) {
      A().then(() => {
        this._emitFinal(), this._emit("end");
      }, __$.x6(this, __$.Zd1, "f"));
    }
    _addMessageParam(A) {
      this.messages.push(A);
    }
    _addMessage(A, K = !0) {
      if (this.receivedMessages.push(A), K) this._emit("message", A);
    }
    async _createMessage(A, K, q) {
      let Y = q?.signal,
        z;
      if (Y) {
        if (Y.aborted) this.controller.abort();
        z = this.controller.abort.bind(this.controller), Y.addEventListener("abort", z);
      }
      try {
        __$.x6(this, __$.dE, "m", __$.Wd1).call(this);
        let {
          response: w,
          data: H
        } = await A.create({
          ...K,
          stream: !0
        }, {
          ...q,
          signal: this.controller.signal
        }).withResponse();
        this._connected(w);
        for await (let J of H) __$.x6(this, __$.dE, "m", __$.Dd1).call(this, J);
        if (H.controller.signal?.aborted) throw new __$.h2();
        __$.x6(this, __$.dE, "m", __$.jd1).call(this);
      } finally {
        if (Y && z) Y.removeEventListener("abort", z);
      }
    }
    _connected(A) {
      if (this.ended) return;
      __$._7(this, __$.mA1, A, "f"), __$._7(this, __$.gA1, A?.headers.get("request-id"), "f"), __$.x6(this, __$.bA1, "f").call(this, A), this._emit("connect");
    }
    get ended() {
      return __$.x6(this, __$.vkA, "f");
    }
    get errored() {
      return __$.x6(this, __$.uA1, "f");
    }
    get aborted() {
      return __$.x6(this, __$.BA1, "f");
    }
    abort() {
      this.controller.abort();
    }
    on(A, K) {
      return (__$.x6(this, __$.CF, "f")[A] || (__$.x6(this, __$.CF, "f")[A] = [])).push({
        listener: K
      }), this;
    }
    off(A, K) {
      let q = __$.x6(this, __$.CF, "f")[A];
      if (!q) return this;
      let Y = q.findIndex(z => z.listener === K);
      if (Y >= 0) q.splice(Y, 1);
      return this;
    }
    once(A, K) {
      return (__$.x6(this, __$.CF, "f")[A] || (__$.x6(this, __$.CF, "f")[A] = [])).push({
        listener: K,
        once: !0
      }), this;
    }
    emitted(A) {
      return new Promise((K, q) => {
        if (__$._7(this, __$.zJA, !0, "f"), A !== "error") this.once("error", q);
        this.once(A, K);
      });
    }
    async done() {
      __$._7(this, __$.zJA, !0, "f"), await __$.x6(this, __$.NkA, "f");
    }
    get currentMessage() {
      return __$.x6(this, __$.Si, "f");
    }
    async finalMessage() {
      return await this.done(), __$.x6(this, __$.dE, "m", __$.Gd1).call(this);
    }
    async finalText() {
      return await this.done(), __$.x6(this, __$.dE, "m", __$.ky8).call(this);
    }
    _emit(A, ...K) {
      if (__$.x6(this, __$.vkA, "f")) return;
      if (A === "end") __$._7(this, __$.vkA, !0, "f"), __$.x6(this, __$.xA1, "f").call(this);
      let q = __$.x6(this, __$.CF, "f")[A];
      if (q) __$.x6(this, __$.CF, "f")[A] = q.filter(Y => !Y.once), q.forEach(({
        listener: Y
      }) => Y(...K));
      if (A === "abort") {
        let Y = K[0];
        if (!__$.x6(this, __$.zJA, "f") && !q?.length) Promise.reject(Y);
        __$.x6(this, __$.fkA, "f").call(this, Y), __$.x6(this, __$.TkA, "f").call(this, Y), this._emit("end");
        return;
      }
      if (A === "error") {
        let Y = K[0];
        if (!__$.x6(this, __$.zJA, "f") && !q?.length) Promise.reject(Y);
        __$.x6(this, __$.fkA, "f").call(this, Y), __$.x6(this, __$.TkA, "f").call(this, Y), this._emit("end");
      }
    }
    _emitFinal() {
      if (this.receivedMessages.at(-1)) this._emit("finalMessage", __$.x6(this, __$.dE, "m", __$.Gd1).call(this));
    }
    async _fromReadableStream(A, K) {
      let q = K?.signal,
        Y;
      if (q) {
        if (q.aborted) this.controller.abort();
        Y = this.controller.abort.bind(this.controller), q.addEventListener("abort", Y);
      }
      try {
        __$.x6(this, __$.dE, "m", __$.Wd1).call(this), this._connected(null);
        let z = __$.oj.fromReadableStream(A, this.controller);
        for await (let w of z) __$.x6(this, __$.dE, "m", __$.Dd1).call(this, w);
        if (z.controller.signal?.aborted) throw new __$.h2();
        __$.x6(this, __$.dE, "m", __$.jd1).call(this);
      } finally {
        if (q && Y) q.removeEventListener("abort", Y);
      }
    }
    [(__$.Si = new WeakMap(), __$.VkA = new WeakMap(), __$.bA1 = new WeakMap(), __$.fkA = new WeakMap(), __$.NkA = new WeakMap(), __$.xA1 = new WeakMap(), __$.TkA = new WeakMap(), __$.CF = new WeakMap(), __$.vkA = new WeakMap(), __$.uA1 = new WeakMap(), __$.BA1 = new WeakMap(), __$.zJA = new WeakMap(), __$.mA1 = new WeakMap(), __$.gA1 = new WeakMap(), __$.Zd1 = new WeakMap(), __$.dE = new WeakSet(), __$.Gd1 = function () {
      if (this.receivedMessages.length === 0) throw new __$.O7("stream ended without producing a Message with role=assistant");
      return this.receivedMessages.at(-1);
    }, __$.ky8 = function () {
      if (this.receivedMessages.length === 0) throw new __$.O7("stream ended without producing a Message with role=assistant");
      let K = this.receivedMessages.at(-1).content.filter(q => q.type === "text").map(q => q.text);
      if (K.length === 0) throw new __$.O7("stream ended without producing a content block with type=text");
      return K.join(" ");
    }, __$.Wd1 = function () {
      if (this.ended) return;
      __$._7(this, __$.Si, void 0, "f");
    }, __$.Dd1 = function (K) {
      if (this.ended) return;
      let q = __$.x6(this, __$.dE, "m", __$.Cy8).call(this, K);
      switch (this._emit("streamEvent", K, q), K.type) {
        case "content_block_delta":
          {
            let Y = q.content.at(-1);
            switch (K.delta.type) {
              case "text_delta":
                {
                  if (Y.type === "text") this._emit("text", K.delta.text, Y.text || "");
                  break;
                }
              case "citations_delta":
                {
                  if (Y.type === "text") this._emit("citation", K.delta.citation, Y.citations ?? []);
                  break;
                }
              case "input_json_delta":
                {
                  if (__$.Ry8(Y) && Y.input) this._emit("inputJson", K.delta.partial_json, Y.input);
                  break;
                }
              case "thinking_delta":
                {
                  if (Y.type === "thinking") this._emit("thinking", K.delta.thinking, Y.thinking);
                  break;
                }
              case "signature_delta":
                {
                  if (Y.type === "thinking") this._emit("signature", Y.signature);
                  break;
                }
              default:
                __$.yy8(K.delta);
            }
            break;
          }
        case "message_stop":
          {
            this._addMessageParam(q), this._addMessage(q, !0);
            break;
          }
        case "content_block_stop":
          {
            this._emit("contentBlock", q.content.at(-1));
            break;
          }
        case "message_start":
          {
            __$._7(this, __$.Si, q, "f");
            break;
          }
        case "content_block_start":
        case "message_delta":
          break;
      }
    }, __$.jd1 = function () {
      if (this.ended) throw new __$.O7("stream has ended, this shouldn't happen");
      let K = __$.x6(this, __$.Si, "f");
      if (!K) throw new __$.O7("request ended without sending any chunks");
      return __$._7(this, __$.Si, void 0, "f"), K;
    }, __$.Cy8 = function (K) {
      let q = __$.x6(this, __$.Si, "f");
      if (K.type === "message_start") {
        if (q) throw new __$.O7(`Unexpected event order, got ${K.type} before receiving "message_stop"`);
        return K.message;
      }
      if (!q) throw new __$.O7(`Unexpected event order, got ${K.type} before "message_start"`);
      switch (K.type) {
        case "message_stop":
          return q;
        case "message_delta":
          if (q.stop_reason = K.delta.stop_reason, q.stop_sequence = K.delta.stop_sequence, q.usage.output_tokens = K.usage.output_tokens, K.usage.input_tokens != null) q.usage.input_tokens = K.usage.input_tokens;
          if (K.usage.cache_creation_input_tokens != null) q.usage.cache_creation_input_tokens = K.usage.cache_creation_input_tokens;
          if (K.usage.cache_read_input_tokens != null) q.usage.cache_read_input_tokens = K.usage.cache_read_input_tokens;
          if (K.usage.server_tool_use != null) q.usage.server_tool_use = K.usage.server_tool_use;
          return q;
        case "content_block_start":
          return q.content.push({
            ...K.content_block
          }), q;
        case "content_block_delta":
          {
            let Y = q.content.at(K.index);
            switch (K.delta.type) {
              case "text_delta":
                {
                  if (Y?.type === "text") q.content[K.index] = {
                    ...Y,
                    text: (Y.text || "") + K.delta.text
                  };
                  break;
                }
              case "citations_delta":
                {
                  if (Y?.type === "text") q.content[K.index] = {
                    ...Y,
                    citations: [...(Y.citations ?? []), K.delta.citation]
                  };
                  break;
                }
              case "input_json_delta":
                {
                  if (Y && __$.Ry8(Y)) {
                    let z = Y[__$.Ly8] || "";
                    z += K.delta.partial_json;
                    let w = {
                      ...Y
                    };
                    if (Object.defineProperty(w, __$.Ly8, {
                      value: z,
                      enumerable: !1,
                      writable: !0
                    }), z) w.input = __$.vA1(z);
                    q.content[K.index] = w;
                  }
                  break;
                }
              case "thinking_delta":
                {
                  if (Y?.type === "thinking") q.content[K.index] = {
                    ...Y,
                    thinking: Y.thinking + K.delta.thinking
                  };
                  break;
                }
              case "signature_delta":
                {
                  if (Y?.type === "thinking") q.content[K.index] = {
                    ...Y,
                    signature: K.delta.signature
                  };
                  break;
                }
              default:
                __$.yy8(K.delta);
            }
            return q;
          }
        case "content_block_stop":
          return q;
      }
    }, Symbol.asyncIterator)]() {
      let A = [],
        K = [],
        q = !1;
      return this.on("streamEvent", Y => {
        let z = K.shift();
        if (z) z.resolve(Y);else A.push(Y);
      }), this.on("end", () => {
        q = !0;
        for (let Y of K) Y.resolve(void 0);
        K.length = 0;
      }), this.on("abort", Y => {
        q = !0;
        for (let z of K) z.reject(Y);
        K.length = 0;
      }), this.on("error", Y => {
        q = !0;
        for (let z of K) z.reject(Y);
        K.length = 0;
      }), {
        next: async () => {
          if (!A.length) {
            if (q) return {
              value: void 0,
              done: !0
            };
            return new Promise((z, w) => K.push({
              resolve: z,
              reject: w
            })).then(z => z ? {
              value: z,
              done: !1
            } : {
              value: void 0,
              done: !0
            });
          }
          return {
            value: A.shift(),
            done: !1
          };
        },
        return: async () => {
          return this.abort(), {
            value: void 0,
            done: !0
          };
        }
      };
    }
    toReadableStream() {
      return new __$.oj(this[Symbol.asyncIterator].bind(this), this.controller).toReadableStream();
    }
  };
});

// Register to shared state
__$.Iy8 = Iy8;
