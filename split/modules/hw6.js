// Module: hw6
// Dependencies: wl4, fz1, Ol4, LF, CkA, vz1, pR, Tz1, O7, cc9
//   ... and 2 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var hw6 = k(() => {
  __$.wl4();
  __$.fz1();
  __$.Ol4();
  __$.LF();
  __$.LF();
  __$.CkA();
  __$.vz1 = class vz1 extends __$.pR {
    constructor({
      baseURL: A = __$.Tz1("ANTHROPIC_FOUNDRY_BASE_URL"),
      apiKey: K = __$.Tz1("ANTHROPIC_FOUNDRY_API_KEY"),
      resource: q = __$.Tz1("ANTHROPIC_FOUNDRY_RESOURCE"),
      azureADTokenProvider: Y,
      dangerouslyAllowBrowser: z,
      ...w
    } = {}) {
      if (typeof Y === "function") z = !0;
      if (!Y && !K) throw new __$.O7("Missing credentials. Please pass one of `apiKey` and `azureTokenProvider`, or set the `ANTHROPIC_FOUNDRY_API_KEY` environment variable.");
      if (Y && K) throw new __$.O7("The `apiKey` and `azureADTokenProvider` arguments are mutually exclusive; only one can be passed at a time.");
      if (!A) {
        if (!q) throw new __$.O7("Must provide one of the `baseURL` or `resource` arguments, or the `ANTHROPIC_FOUNDRY_RESOURCE` environment variable");
        A = `https://${q}.services.ai.azure.com/anthropic/`;
      } else if (q) throw new __$.O7("baseURL and resource are mutually exclusive");
      super({
        apiKey: Y ?? K,
        baseURL: A,
        ...w,
        ...(z !== void 0 ? {
          dangerouslyAllowBrowser: z
        } : {})
      });
      this.resource = null, this.messages = __$.cc9(this), this.beta = __$.lc9(this), this.models = void 0;
    }
    async authHeaders() {
      if (typeof this._options.apiKey === "function") {
        let A;
        try {
          A = await this._options.apiKey();
        } catch (K) {
          if (K instanceof __$.O7) throw K;
          throw new __$.O7(`Failed to get token from azureADTokenProvider: ${K.message}`, {
            cause: K
          });
        }
        if (typeof A !== "string" || !A) throw new __$.O7(`Expected azureADTokenProvider function argument to return a string but it returned ${A}`);
        return __$.Sw6([{
          Authorization: `Bearer ${A}`
        }]);
      }
      if (typeof this._options.apiKey === "string") return __$.Sw6([{
        "x-api-key": this.apiKey
      }]);
      return;
    }
    validateHeaders() {
      return;
    }
  };
});

// Register to shared state
__$.hw6 = hw6;
