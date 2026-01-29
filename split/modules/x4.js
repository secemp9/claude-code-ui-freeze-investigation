// Module: x4
// Dependencies: i6, I8, CK, rP, p7, Rq1, C1, Z1, u5, x$1
//   ... and 41 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var x4 = k(() => {
  __$.i6();
  __$.I8();
  __$.CK();
  __$.rP();
  __$.p7();
  __$.Rq1();
  __$.C1();
  __$.Z1();
  __$.u5();
  __$.x$1();
  __$.zEK();
  __$.LT();
  __$.YO1();
  __$.ok();
  __$.e6();
  __$.l6();
  __$.UBA();
  __$.q6();
  __$.bV6();
  __$.l1();
  __$.IH();
  __$.Mq1();
  __$.spA();
  __$.b1();
  __$.HEK = o(__$._F(), 1), __$.JEK = o(__$.Yb(), 1);
  __$.yxA = __$.r46(A => {
    let K = __$.VcA();
    if (!K) return null;
    if (__$.OEK()) {
      if (!__$.Dw(!0) && !A) {
        let Y = Error(`Security: apiKeyHelper executed before workspace trust is confirmed. If you see this message, post in ${{
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.23",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-01-29T00:18:20Z"
        }.FEEDBACK_CHANNEL}.`);
        __$.fE("apiKeyHelper invoked before trust check", Y), __$.HEK.captureException(Y), __$.n("tengu_apiKeyHelper_missing_trust11", {});
      }
    }
    try {
      let q = __$.eW(K)?.toString().trim();
      if (!q) throw Error("apiKeyHelper did not return a valid value");
      return q;
    } catch (q) {
      let Y = __$.O1.red("Error getting API key from apiKeyHelper (in settings or ~/.claude.json):");
      if (q instanceof Error && "stderr" in q) console.error(Y, String(q.stderr));else if (q instanceof Error) console.error(Y, q.message);else console.error(Y, q);
      return " ";
    }
  }, __$.na2());
  __$.t8A = __$.r46(async () => {
    let A = await __$.oa2(),
      K = await __$.aa2();
    if (A || K) await __$.rf7();
    return K;
  }, __$.ra2);
  __$.udA = __$.z6(() => {
    if (process.platform === "darwin") {
      let K = __$.Vp();
      try {
        let q = __$.eW(`security find-generic-password -a $USER -w -s "${K}"`);
        if (q) return {
          key: q,
          source: "/login managed key"
        };
      } catch (q) {
        __$.KA(q);
      }
    }
    let A = __$.M1();
    if (!A.primaryApiKey) return null;
    return {
      key: A.primaryApiKey,
      source: "/login managed key"
    };
  });
  __$.LK = __$.z6(() => {
    if (process.env.CLAUDE_CODE_OAUTH_TOKEN) return {
      accessToken: process.env.CLAUDE_CODE_OAUTH_TOKEN,
      refreshToken: null,
      expiresAt: null,
      scopes: ["user:inference"],
      subscriptionType: null,
      rateLimitTier: null
    };
    let A = __$.hE1();
    if (A) return {
      accessToken: A,
      refreshToken: null,
      expiresAt: null,
      scopes: ["user:inference"],
      subscriptionType: null,
      rateLimitTier: null
    };
    try {
      let Y = __$.ff().read()?.claudeAiOauth;
      if (!Y?.accessToken) return null;
      return Y;
    } catch (K) {
      return __$.KA(K), null;
    }
  });
});

// Register to shared state
__$.x4 = x4;
