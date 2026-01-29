// Module: rj6
// Dependencies: p7, n3, uz, l1, x4, Z1, l6, B7, SBA, z6
//   ... and 11 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rj6 = k(() => {
  __$.p7();
  __$.n3();
  __$.uz();
  __$.l1();
  __$.x4();
  __$.Z1();
  __$.l6();
  __$.B7();
  __$.SBA = __$.z6(async () => {
    try {
      __$.h("[claudeai-mcp] Checking gate (cached)...");
      let A = __$.aY(__$.EkY);
      if (__$.h(`[claudeai-mcp] Gate returned: ${A}`), !A) return __$.h("[claudeai-mcp] Disabled via gate"), __$.n("tengu_claudeai_mcp_eligibility", {
        state: "disabled_gate"
      }), {};
      if (__$.J2(void 0)) return __$.h("[claudeai-mcp] Disabled via env var"), __$.n("tengu_claudeai_mcp_eligibility", {
        state: "disabled_env_var"
      }), {};
      let K = __$.LK();
      if (!K?.accessToken) return __$.h("[claudeai-mcp] No access token"), __$.n("tengu_claudeai_mcp_eligibility", {
        state: "no_oauth_token"
      }), {};
      if (!K.scopes?.includes("user:mcp_servers")) return __$.h(`[claudeai-mcp] Missing user:mcp_servers scope (scopes=${K.scopes?.join(",") || "none"})`), __$.n("tengu_claudeai_mcp_eligibility", {
        state: "missing_scope"
      }), {};
      let Y = `${__$.E7().BASE_API_URL}/v1/mcp_servers?limit=1000`;
      __$.h(`[claudeai-mcp] Fetching from ${Y}`);
      let z = await __$.A8.get(Y, {
          headers: {
            Authorization: `Bearer ${K.accessToken}`,
            "Content-Type": "application/json",
            "anthropic-beta": __$.CkY,
            "anthropic-version": "2023-06-01"
          },
          timeout: __$.kkY
        }),
        w = {},
        H = new Set();
      for (let J of z.data.data) {
        let O = `claude.ai ${J.display_name}`,
          X = O,
          $ = __$.w3(X),
          _ = 1;
        while (H.has($)) _++, X = `${O} (${_})`, $ = __$.w3(X);
        H.add($), w[X] = {
          type: "claudeai-proxy",
          url: J.url,
          id: J.id,
          scope: "claudeai"
        };
      }
      return __$.h(`[claudeai-mcp] Fetched ${Object.keys(w).length} servers`), __$.n("tengu_claudeai_mcp_eligibility", {
        state: "eligible"
      }), w;
    } catch {
      return __$.h("[claudeai-mcp] Fetch failed"), {};
    }
  });
});

// Register to shared state
__$.rj6 = rj6;
