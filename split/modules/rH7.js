// Module: rH7
// Dependencies: JZ6, G_, XW6, sxA, nH7, m01, $uA, xuA, $W6, oO1
//   ... and 26 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rH7 = k(() => {
  __$.JZ6();
  __$.G_();
  __$.XW6();
  __$.sxA();
  __$.nH7();
  __$.m01 = class m01 extends __$.$uA {
    constructor(A, K) {
      var q, Y;
      super(K);
      this._clientInfo = A, this._cachedToolOutputValidators = new Map(), this._cachedKnownTaskTools = new Set(), this._cachedRequiredTaskTools = new Set(), this._capabilities = (q = K === null || K === void 0 ? void 0 : K.capabilities) !== null && q !== void 0 ? q : {}, this._jsonSchemaValidator = (Y = K === null || K === void 0 ? void 0 : K.jsonSchemaValidator) !== null && Y !== void 0 ? Y : new __$.xuA();
    }
    get experimental() {
      if (!this._experimental) this._experimental = {
        tasks: new __$.$W6(this)
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
      let O = J;
      if (O === "elicitation/create") {
        let X = async ($, _) => {
          var G, Z, W;
          let D = __$.BM(__$.dO1, $);
          if (!D.success) {
            let x = D.error instanceof Error ? D.error.message : String(D.error);
            throw new __$.MK(__$.Hq.InvalidParams, `Invalid elicitation request: ${x}`);
          }
          let {
              params: j
            } = D.data,
            M = (G = j.mode) !== null && G !== void 0 ? G : "form",
            {
              supportsFormMode: P,
              supportsUrlMode: f
            } = __$.ODY(this._capabilities.elicitation);
          if (M === "form" && !P) throw new __$.MK(__$.Hq.InvalidParams, "Client does not support form-mode elicitation requests");
          if (M === "url" && !f) throw new __$.MK(__$.Hq.InvalidParams, "Client does not support URL-mode elicitation requests");
          let N = await Promise.resolve(K($, _));
          if (j.task) {
            let x = __$.BM(__$.Yp, N);
            if (!x.success) {
              let y = x.error instanceof Error ? x.error.message : String(x.error);
              throw new __$.MK(__$.Hq.InvalidParams, `Invalid task creation result: ${y}`);
            }
            return x.data;
          }
          let T = __$.BM(__$.dGA, N);
          if (!T.success) {
            let x = T.error instanceof Error ? T.error.message : String(T.error);
            throw new __$.MK(__$.Hq.InvalidParams, `Invalid elicitation result: ${x}`);
          }
          let C = T.data,
            R = M === "form" ? j.requestedSchema : void 0;
          if (M === "form" && C.action === "accept" && C.content && R) {
            if ((W = (Z = this._capabilities.elicitation) === null || Z === void 0 ? void 0 : Z.form) === null || W === void 0 ? void 0 : W.applyDefaults) try {
              __$.B01(R, C.content);
            } catch (x) {}
          }
          return C;
        };
        return super.setRequestHandler(A, X);
      }
      if (O === "sampling/createMessage") {
        let X = async ($, _) => {
          let G = __$.BM(__$.SG6, $);
          if (!G.success) {
            let j = G.error instanceof Error ? G.error.message : String(G.error);
            throw new __$.MK(__$.Hq.InvalidParams, `Invalid sampling request: ${j}`);
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
          let D = __$.BM(__$.OuA, W);
          if (!D.success) {
            let j = D.error instanceof Error ? D.error.message : String(D.error);
            throw new __$.MK(__$.Hq.InvalidParams, `Invalid sampling result: ${j}`);
          }
          return D.data;
        };
        return super.setRequestHandler(A, X);
      }
      return super.setRequestHandler(A, K);
    }
    assertCapability(A, K) {
      var q;
      if (!((q = this._serverCapabilities) === null || q === void 0 ? void 0 : q[A])) throw Error(`Server does not support ${A} (required for ${K})`);
    }
    async connect(A, K) {
      if (await super.connect(A), A.sessionId !== void 0) return;
      try {
        let q = await this.request({
          method: "initialize",
          params: {
            protocolVersion: __$.Ha,
            capabilities: this._capabilities,
            clientInfo: this._clientInfo
          }
        }, __$.PG6, K);
        if (q === void 0) throw Error(`Server sent invalid initialize result: ${q}`);
        if (!__$.SO1.includes(q.protocolVersion)) throw Error(`Server's protocol version is not supported: ${q.protocolVersion}`);
        if (this._serverCapabilities = q.capabilities, this._serverVersion = q.serverInfo, A.setProtocolVersion) A.setProtocolVersion(q.protocolVersion);
        this._instructions = q.instructions, await this.notification({
          method: "notifications/initialized"
        });
      } catch (q) {
        throw this.close(), q;
      }
    }
    getServerCapabilities() {
      return this._serverCapabilities;
    }
    getServerVersion() {
      return this._serverVersion;
    }
    getInstructions() {
      return this._instructions;
    }
    assertCapabilityForMethod(A) {
      var K, q, Y, z, w;
      switch (A) {
        case "logging/setLevel":
          if (!((K = this._serverCapabilities) === null || K === void 0 ? void 0 : K.logging)) throw Error(`Server does not support logging (required for ${A})`);
          break;
        case "prompts/get":
        case "prompts/list":
          if (!((q = this._serverCapabilities) === null || q === void 0 ? void 0 : q.prompts)) throw Error(`Server does not support prompts (required for ${A})`);
          break;
        case "resources/list":
        case "resources/templates/list":
        case "resources/read":
        case "resources/subscribe":
        case "resources/unsubscribe":
          if (!((Y = this._serverCapabilities) === null || Y === void 0 ? void 0 : Y.resources)) throw Error(`Server does not support resources (required for ${A})`);
          if (A === "resources/subscribe" && !this._serverCapabilities.resources.subscribe) throw Error(`Server does not support resource subscriptions (required for ${A})`);
          break;
        case "tools/call":
        case "tools/list":
          if (!((z = this._serverCapabilities) === null || z === void 0 ? void 0 : z.tools)) throw Error(`Server does not support tools (required for ${A})`);
          break;
        case "completion/complete":
          if (!((w = this._serverCapabilities) === null || w === void 0 ? void 0 : w.completions)) throw Error(`Server does not support completions (required for ${A})`);
          break;
        case "initialize":
          break;
        case "ping":
          break;
      }
    }
    assertNotificationCapability(A) {
      var K;
      switch (A) {
        case "notifications/roots/list_changed":
          if (!((K = this._capabilities.roots) === null || K === void 0 ? void 0 : K.listChanged)) throw Error(`Client does not support roots list changed notifications (required for ${A})`);
          break;
        case "notifications/initialized":
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
        case "sampling/createMessage":
          if (!this._capabilities.sampling) throw Error(`Client does not support sampling capability (required for ${A})`);
          break;
        case "elicitation/create":
          if (!this._capabilities.elicitation) throw Error(`Client does not support elicitation capability (required for ${A})`);
          break;
        case "roots/list":
          if (!this._capabilities.roots) throw Error(`Client does not support roots capability (required for ${A})`);
          break;
        case "tasks/get":
        case "tasks/list":
        case "tasks/result":
        case "tasks/cancel":
          if (!this._capabilities.tasks) throw Error(`Client does not support tasks capability (required for ${A})`);
          break;
        case "ping":
          break;
      }
    }
    assertTaskCapability(A) {
      var K, q;
      __$.x01((q = (K = this._serverCapabilities) === null || K === void 0 ? void 0 : K.tasks) === null || q === void 0 ? void 0 : q.requests, A, "Server");
    }
    assertTaskHandlerCapability(A) {
      var K;
      if (!this._capabilities) return;
      __$.u01((K = this._capabilities.tasks) === null || K === void 0 ? void 0 : K.requests, A, "Client");
    }
    async ping(A) {
      return this.request({
        method: "ping"
      }, __$.qp, A);
    }
    async complete(A, K) {
      return this.request({
        method: "completion/complete",
        params: A
      }, __$.bG6, K);
    }
    async setLoggingLevel(A, K) {
      return this.request({
        method: "logging/setLevel",
        params: {
          level: A
        }
      }, __$.qp, K);
    }
    async getPrompt(A, K) {
      return this.request({
        method: "prompts/get",
        params: A
      }, __$.LG6, K);
    }
    async listPrompts(A, K) {
      return this.request({
        method: "prompts/list",
        params: A
      }, __$.zuA, K);
    }
    async listResources(A, K) {
      return this.request({
        method: "resources/list",
        params: A
      }, __$.zqA, K);
    }
    async listResourceTemplates(A, K) {
      return this.request({
        method: "resources/templates/list",
        params: A
      }, __$.fG6, K);
    }
    async readResource(A, K) {
      return this.request({
        method: "resources/read",
        params: A
      }, __$.wqA, K);
    }
    async subscribeResource(A, K) {
      return this.request({
        method: "resources/subscribe",
        params: A
      }, __$.qp, K);
    }
    async unsubscribeResource(A, K) {
      return this.request({
        method: "resources/unsubscribe",
        params: A
      }, __$.qp, K);
    }
    async callTool(A, K = __$.mM, q) {
      if (this.isToolTaskRequired(A.name)) throw new __$.MK(__$.Hq.InvalidRequest, `Tool "${A.name}" requires task-based execution. Use client.experimental.tasks.callToolStream() instead.`);
      let Y = await this.request({
          method: "tools/call",
          params: A
        }, K, q),
        z = this.getToolOutputValidator(A.name);
      if (z) {
        if (!Y.structuredContent && !Y.isError) throw new __$.MK(__$.Hq.InvalidRequest, `Tool ${A.name} has an output schema but did not return structured content`);
        if (Y.structuredContent) try {
          let w = z(Y.structuredContent);
          if (!w.valid) throw new __$.MK(__$.Hq.InvalidParams, `Structured content does not match the tool's output schema: ${w.errorMessage}`);
        } catch (w) {
          if (w instanceof __$.MK) throw w;
          throw new __$.MK(__$.Hq.InvalidParams, `Failed to validate structured content: ${w instanceof Error ? w.message : String(w)}`);
        }
      }
      return Y;
    }
    isToolTask(A) {
      var K, q, Y, z;
      if (!((z = (Y = (q = (K = this._serverCapabilities) === null || K === void 0 ? void 0 : K.tasks) === null || q === void 0 ? void 0 : q.requests) === null || Y === void 0 ? void 0 : Y.tools) === null || z === void 0 ? void 0 : z.call)) return !1;
      return this._cachedKnownTaskTools.has(A);
    }
    isToolTaskRequired(A) {
      return this._cachedRequiredTaskTools.has(A);
    }
    cacheToolMetadata(A) {
      var K;
      this._cachedToolOutputValidators.clear(), this._cachedKnownTaskTools.clear(), this._cachedRequiredTaskTools.clear();
      for (let q of A) {
        if (q.outputSchema) {
          let z = this._jsonSchemaValidator.getValidator(q.outputSchema);
          this._cachedToolOutputValidators.set(q.name, z);
        }
        let Y = (K = q.execution) === null || K === void 0 ? void 0 : K.taskSupport;
        if (Y === "required" || Y === "optional") this._cachedKnownTaskTools.add(q.name);
        if (Y === "required") this._cachedRequiredTaskTools.add(q.name);
      }
    }
    getToolOutputValidator(A) {
      return this._cachedToolOutputValidators.get(A);
    }
    async listTools(A, K) {
      let q = await this.request({
        method: "tools/list",
        params: A
      }, __$.HuA, K);
      return this.cacheToolMetadata(q.tools), q;
    }
    async sendRootsListChanged() {
      return this.notification({
        method: "notifications/roots/list_changed"
      });
    }
  };
});

// Register to shared state
__$.rH7 = rH7;
