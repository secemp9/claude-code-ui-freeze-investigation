// Module: rMA
// Dependencies: z7, ao, C2K, S2, hb6, h2K, XE2, U, $E2, aG
//   ... and 17 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var rMA = k(() => {
  __$.z7();
  __$.ao();
  __$.C2K();
  __$.S2();
  __$.hb6();
  __$.h2K();
  __$.XE2 = __$.U.strictObject({
    url: __$.U.string().url().describe("The URL to fetch content from"),
    prompt: __$.U.string().describe("The prompt to run on the fetched content")
  }), __$.$E2 = __$.U.object({
    bytes: __$.U.number().describe("Size of the fetched content in bytes"),
    code: __$.U.number().describe("HTTP response code"),
    codeText: __$.U.string().describe("HTTP response code text"),
    result: __$.U.string().describe("Processed result from applying the prompt to the content"),
    durationMs: __$.U.number().describe("Time taken to fetch and process the content"),
    url: __$.U.string().describe("The URL that was fetched")
  });
  __$.aG = {
    name: __$.wO,
    maxResultSizeChars: 1e5,
    async description(A) {
      let {
        url: K
      } = A;
      try {
        return `Claude wants to fetch content from ${new URL(K).hostname}`;
      } catch {
        return "Claude wants to fetch content from this URL";
      }
    },
    userFacingName() {
      return "Fetch";
    },
    getToolUseSummary: __$.ub6,
    getActivityDescription(A) {
      let K = __$.ub6(A);
      return K ? `Fetching ${K}` : "Fetching web page";
    },
    isEnabled() {
      return !0;
    },
    inputSchema: __$.XE2,
    outputSchema: __$.$E2,
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    async checkPermissions(A, K) {
      let Y = (await K.getAppState()).toolPermissionContext;
      try {
        let {
            url: O
          } = A,
          X = new URL(O),
          $ = X.hostname,
          _ = X.pathname;
        for (let G of __$.Df1) if (G.includes("/")) {
          let [Z, ...W] = G.split("/"),
            D = "/" + W.join("/");
          if ($ === Z && _.startsWith(D)) return {
            behavior: "allow",
            updatedInput: A,
            decisionReason: {
              type: "other",
              reason: "Preapproved host and path"
            }
          };
        } else if ($ === G) return {
          behavior: "allow",
          updatedInput: A,
          decisionReason: {
            type: "other",
            reason: "Preapproved host"
          }
        };
      } catch {}
      let z = __$._E2(A),
        w = __$.QS(Y, __$.aG, "deny").get(z);
      if (w) return {
        behavior: "deny",
        message: `${__$.aG.name} denied access to ${z}.`,
        decisionReason: {
          type: "rule",
          rule: w
        }
      };
      let H = __$.QS(Y, __$.aG, "ask").get(z);
      if (H) return {
        behavior: "ask",
        message: `Claude requested permissions to use ${__$.aG.name}, but you haven't granted it yet.`,
        decisionReason: {
          type: "rule",
          rule: H
        },
        suggestions: __$.b2K(z)
      };
      let J = __$.QS(Y, __$.aG, "allow").get(z);
      if (J) return {
        behavior: "allow",
        updatedInput: A,
        decisionReason: {
          type: "rule",
          rule: J
        }
      };
      return {
        behavior: "ask",
        message: `Claude requested permissions to use ${__$.aG.name}, but you haven't granted it yet.`,
        suggestions: __$.b2K(z)
      };
    },
    async prompt({
      tools: A
    }) {
      if (A.some(K => K.name === __$.sZ)) return `IMPORTANT: WebFetch WILL FAIL for authenticated or private URLs. Before using this tool, check if the URL points to an authenticated service (e.g. Google Docs, Confluence, Jira, GitHub). If so, you MUST use ${__$.sZ} first to find a specialized tool that provides authenticated access.
${__$.Sc1}`;
      return __$.Sc1;
    },
    async validateInput(A) {
      let {
        url: K
      } = A;
      try {
        new URL(K);
      } catch {
        return {
          result: !1,
          message: `Error: Invalid URL "${K}". The URL provided could not be parsed.`,
          meta: {
            reason: "invalid_url"
          },
          errorCode: 1
        };
      }
      return {
        result: !0
      };
    },
    renderToolUseMessage: __$.L2K,
    renderToolUseRejectedMessage: __$.R2K,
    renderToolUseErrorMessage: __$.y2K,
    renderToolUseProgressMessage: __$.I2K,
    renderToolResultMessage: __$.S2K,
    async call({
      url: A,
      prompt: K
    }, {
      abortController: q,
      options: {
        isNonInteractiveSession: Y
      }
    }) {
      let z = Date.now(),
        w = await __$.E2K(A, q);
      if ("type" in w && w.type === "redirect") {
        let W = w.statusCode === 301 ? "Moved Permanently" : w.statusCode === 308 ? "Permanent Redirect" : w.statusCode === 307 ? "Temporary Redirect" : "Found",
          D = `REDIRECT DETECTED: The URL redirects to a different host.

Original URL: ${w.originalUrl}
Redirect URL: ${w.redirectUrl}
Status: ${w.statusCode} ${W}

To complete your request, I need to fetch content from the redirected URL. Please use WebFetch again with these parameters:
- url: "${w.redirectUrl}"
- prompt: "${K}"`;
        return {
          data: {
            bytes: Buffer.byteLength(D),
            code: w.statusCode,
            codeText: W,
            result: D,
            durationMs: Date.now() - z,
            url: A
          }
        };
      }
      let {
          content: H,
          bytes: J,
          code: O,
          codeText: X,
          contentType: $
        } = w,
        _ = __$.T2K(A),
        G;
      if (_ && $.includes("text/markdown") && H.length < __$.jf1) G = H;else G = await __$.k2K(K, H, q.signal, Y, _);
      return {
        data: {
          bytes: J,
          code: O,
          codeText: X,
          result: G,
          durationMs: Date.now() - z,
          url: A
        }
      };
    },
    mapToolResultToToolResultBlockParam({
      result: A
    }, K) {
      return {
        tool_use_id: K,
        type: "tool_result",
        content: A
      };
    }
  };
});

// Register to shared state
__$.rMA = rMA;
