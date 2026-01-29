// Module: MQ6
// Dependencies: JZ6, G_, XW6, sxA, HcA, $uA, JuA, xuA, MG6, uO1
//   ... and 20 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var MQ6 = k(() => {
  __$.JZ6();
  __$.G_();
  __$.XW6();
  __$.sxA();
  __$.HcA = class HcA extends __$.$uA {
    constructor(A, K) {
      var q, Y;
      super(K);
      if (this._serverInfo = A, this._loggingLevels = new Map(), this.LOG_LEVEL_SEVERITY = new Map(__$.JuA.options.map((z, w) => [z, w])), this.isMessageIgnored = (z, w) => {
        let H = this._loggingLevels.get(w);
        return H ? this.LOG_LEVEL_SEVERITY.get(z) < this.LOG_LEVEL_SEVERITY.get(H) : !1;
      }, this._capabilities = (q = K === null || K === void 0 ? void 0 : K.capabilities) !== null && q !== void 0 ? q : {}, this._instructions = K === null || K === void 0 ? void 0 : K.instructions, this._jsonSchemaValidator = (Y = K === null || K === void 0 ? void 0 : K.jsonSchemaValidator) !== null && Y !== void 0 ? Y : new __$.xuA(), this.setRequestHandler(__$.MG6, z => this._oninitialize(z)), this.setNotificationHandler(__$.uO1, () => {
        var z;
        return (z = this.oninitialized) === null || z === void 0 ? void 0 : z.call(this);
      }), this._capabilities.logging) this.setRequestHandler(__$.IG6, async (z, w) => {
        var H;
        let J = w.sessionId || ((H = w.requestInfo) === null || H === void 0 ? void 0 : H.headers["mcp-session-id"]) || void 0,
          {
            level: O
          } = z.params,
          X = __$.JuA.safeParse(O);
        if (X.success) this._loggingLevels.set(J, X.data);
        return {};
      });
    }
    get experimental() {
      if (!this._experimental) this._experimental = {
        tasks: new __$.jQ6(this)
      };
      return this._experimental;
    }
    registerCapabilities(A) {
      if (this.transport) throw Error("Cannot register capabilities after connecting to transport");
      this._capabilities = __$.oO1(this._capabilities, A);
    }
    setRequestHandler(A, K) {
      var q, Y, z;
      let w = __$.QGA(A),
        H = w === null || w === void 0 ? void 0 : w.method;
      if (!H) throw Error("Schema is missing a method literal");
      let J;
      if (__$.wa(H)) {
        let X = H,
          $ = (q = X._zod) === null || q === void 0 ? void 0 : q.def;
        J = (Y = $ === null || $ === void 0 ? void 0 : $.value) !== null && Y !== void 0 ? Y : X.value;
      } else {
        let X = H,
          $ = X._def;
        J = (z = $ === null || $ === void 0 ? void 0 : $.value) !== null && z !== void 0 ? z : X.value;
      }
      if (typeof J !== "string") throw Error("Schema method literal must be a string");
      if (J === "tools/call") {
        let X = async ($, _) => {
          let G = __$.BM(__$.HqA, $);
          if (!G.success) {
            let j = G.error instanceof Error ? G.error.message : String(G.error);
            throw new __$.MK(__$.Hq.InvalidParams, `Invalid tools/call request: ${j}`);
          }
          let {
              params: Z
            } = G.data,
            W = await Promise.resolve(K($, _));
          if (Z.task) {
            let j = __$.BM(__$.Yp, W);
            if (!j.success) {
              let M = j.error instanceof Error ? j.error.message : String(j.error);
              throw new __$.MK(__$.Hq.InvalidParams, `Invalid task creation result: ${M}`);
            }
            return j.data;
          }
          let D = __$.BM(__$.mM, W);
          if (!D.success) {
            let j = D.error instanceof Error ? D.error.message : String(D.error);
            throw new __$.MK(__$.Hq.InvalidParams, `Invalid tools/call result: ${j}`);
          }
          return D.data;
        };
        return super.setRequestHandler(A, X);
      }
      return super.setRequestHandler(A, K);
    }
    assertCapabilityForMethod(A) {
      var K, q, Y;
      switch (A) {
        case "sampling/createMessage":
          if (!((K = this._clientCapabilities) === null || K === void 0 ? void 0 : K.sampling)) throw Error(`Client does not support sampling (required for ${A})`);
          break;
        case "elicitation/create":
          if (!((q = this._clientCapabilities) === null || q === void 0 ? void 0 : q.elicitation)) throw Error(`Client does not support elicitation (required for ${A})`);
          break;
        case "roots/list":
          if (!((Y = this._clientCapabilities) === null || Y === void 0 ? void 0 : Y.roots)) throw Error(`Client does not support listing roots (required for ${A})`);
          break;
        case "ping":
          break;
      }
    }
    assertNotificationCapability(A) {
      var K, q;
      switch (A) {
        case "notifications/message":
          if (!this._capabilities.logging) throw Error(`Server does not support logging (required for ${A})`);
          break;
        case "notifications/resources/updated":
        case "notifications/resources/list_changed":
          if (!this._capabilities.resources) throw Error(`Server does not support notifying about resources (required for ${A})`);
          break;
        case "notifications/tools/list_changed":
          if (!this._capabilities.tools) throw Error(`Server does not support notifying of tool list changes (required for ${A})`);
          break;
        case "notifications/prompts/list_changed":
          if (!this._capabilities.prompts) throw Error(`Server does not support notifying of prompt list changes (required for ${A})`);
          break;
        case "notifications/elicitation/complete":
          if (!((q = (K = this._clientCapabilities) === null || K === void 0 ? void 0 : K.elicitation) === null || q === void 0 ? void 0 : q.url)) throw Error(`Client does not support URL elicitation (required for ${A})`);
          break;
        case "notifications/cancelled":
          break;
        case "notifications/progress":
          break;
      }
    }
    assertRequestHandlerCapability(A) {
      if (!this._capabilities) return;
      switch (A) {
        case "completion/complete":
          if (!this._capabilities.completions) throw Error(`Server does not support completions (required for ${A})`);
          break;
        case "logging/setLevel":
          if (!this._capabilities.logging) throw Error(`Server does not support logging (required for ${A})`);
          break;
        case "prompts/get":
        case "prompts/list":
          if (!this._capabilities.prompts) throw Error(`Server does not support prompts (required for ${A})`);
          break;
        case "resources/list":
        case "resources/templates/list":
        case "resources/read":
          if (!this._capabilities.resources) throw Error(`Server does not support resources (required for ${A})`);
          break;
        case "tools/call":
        case "tools/list":
          if (!this._capabilities.tools) throw Error(`Server does not support tools (required for ${A})`);
          break;
        case "tasks/get":
        case "tasks/list":
        case "tasks/result":
        case "tasks/cancel":
          if (!this._capabilities.tasks) throw Error(`Server does not support tasks capability (required for ${A})`);
          break;
        case "ping":
        case "initialize":
          break;
      }
    }
    assertTaskCapability(A) {
      var K, q;
      __$.u01((q = (K = this._clientCapabilities) === null || K === void 0 ? void 0 : K.tasks) === null || q === void 0 ? void 0 : q.requests, A, "Client");
    }
    assertTaskHandlerCapability(A) {
      var K;
      if (!this._capabilities) return;
      __$.x01((K = this._capabilities.tasks) === null || K === void 0 ? void 0 : K.requests, A, "Server");
    }
    async _oninitialize(A) {
      let K = A.params.protocolVersion;
      return this._clientCapabilities = A.params.capabilities, this._clientVersion = A.params.clientInfo, {
        protocolVersion: __$.SO1.includes(K) ? K : __$.Ha,
        capabilities: this.getCapabilities(),
        serverInfo: this._serverInfo,
        ...(this._instructions && {
          instructions: this._instructions
        })
      };
    }
    getClientCapabilities() {
      return this._clientCapabilities;
    }
    getClientVersion() {
      return this._clientVersion;
    }
    getCapabilities() {
      return this._capabilities;
    }
    async ping() {
      return this.request({
        method: "ping"
      }, __$.qp);
    }
    async createMessage(A, K) {
      var q, Y;
      if (A.tools || A.toolChoice) {
        if (!((Y = (q = this._clientCapabilities) === null || q === void 0 ? void 0 : q.sampling) === null || Y === void 0 ? void 0 : Y.tools)) throw Error("Client does not support sampling tools capability.");
      }
      if (A.messages.length > 0) {
        let z = A.messages[A.messages.length - 1],
          w = Array.isArray(z.content) ? z.content : [z.content],
          H = w.some($ => $.type === "tool_result"),
          J = A.messages.length > 1 ? A.messages[A.messages.length - 2] : void 0,
          O = J ? Array.isArray(J.content) ? J.content : [J.content] : [],
          X = O.some($ => $.type === "tool_use");
        if (H) {
          if (w.some($ => $.type !== "tool_result")) throw Error("The last message must contain only tool_result content if any is present");
          if (!X) throw Error("tool_result blocks are not matching any tool_use from the previous message");
        }
        if (X) {
          let $ = new Set(O.filter(G => G.type === "tool_use").map(G => G.id)),
            _ = new Set(w.filter(G => G.type === "tool_result").map(G => G.toolUseId));
          if ($.size !== _.size || ![...$].every(G => _.has(G))) throw Error("ids of tool_result blocks and tool_use blocks from previous message do not match");
        }
      }
      if (A.tools) return this.request({
        method: "sampling/createMessage",
        params: A
      }, __$.hG6, K);
      return this.request({
        method: "sampling/createMessage",
        params: A
      }, __$.OuA, K);
    }
    async elicitInput(A, K) {
      var q, Y, z, w, H;
      switch ((q = A.mode) !== null && q !== void 0 ? q : "form") {
        case "url":
          {
            if (!((z = (Y = this._clientCapabilities) === null || Y === void 0 ? void 0 : Y.elicitation) === null || z === void 0 ? void 0 : z.url)) throw Error("Client does not support url elicitation.");
            let O = A;
            return this.request({
              method: "elicitation/create",
              params: O
            }, __$.dGA, K);
          }
        case "form":
          {
            if (!((H = (w = this._clientCapabilities) === null || w === void 0 ? void 0 : w.elicitation) === null || H === void 0 ? void 0 : H.form)) throw Error("Client does not support form elicitation.");
            let O = A.mode === "form" ? A : {
                ...A,
                mode: "form"
              },
              X = await this.request({
                method: "elicitation/create",
                params: O
              }, __$.dGA, K);
            if (X.action === "accept" && X.content && O.requestedSchema) try {
              let _ = this._jsonSchemaValidator.getValidator(O.requestedSchema)(X.content);
              if (!_.valid) throw new __$.MK(__$.Hq.InvalidParams, `Elicitation response content does not match requested schema: ${_.errorMessage}`);
            } catch ($) {
              if ($ instanceof __$.MK) throw $;
              throw new __$.MK(__$.Hq.InternalError, `Error validating elicitation response: ${$ instanceof Error ? $.message : String($)}`);
            }
            return X;
          }
      }
    }
    createElicitationCompletionNotifier(A, K) {
      var q, Y;
      if (!((Y = (q = this._clientCapabilities) === null || q === void 0 ? void 0 : q.elicitation) === null || Y === void 0 ? void 0 : Y.url)) throw Error("Client does not support URL elicitation (required for notifications/elicitation/complete)");
      return () => this.notification({
        method: "notifications/elicitation/complete",
        params: {
          elicitationId: A
        }
      }, K);
    }
    async listRoots(A, K) {
      return this.request({
        method: "roots/list",
        params: A
      }, __$.uG6, K);
    }
    async sendLoggingMessage(A, K) {
      if (this._capabilities.logging) {
        if (!this.isMessageIgnored(A.level, K)) return this.notification({
          method: "notifications/message",
          params: A
        });
      }
    }
    async sendResourceUpdated(A) {
      return this.notification({
        method: "notifications/resources/updated",
        params: A
      });
    }
    async sendResourceListChanged() {
      return this.notification({
        method: "notifications/resources/list_changed"
      });
    }
    async sendToolListChanged() {
      return this.notification({
        method: "notifications/tools/list_changed"
      });
    }
    async sendPromptListChanged() {
      return this.notification({
        method: "notifications/prompts/list_changed"
      });
    }
  };
});

// Register to shared state
__$.MQ6 = MQ6;
