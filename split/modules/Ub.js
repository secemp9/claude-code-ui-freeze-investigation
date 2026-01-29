// Module: Ub
// Dependencies: Gz, gb, WF8, aw

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ub = v(Bv5 => {
  var Ev5 = __$.Gz(),
    kv5 = __$.gb(),
    Cv5 = __$.WF8(),
    Qb = __$.aw(),
    $U8 = void 0;
  function Lv5(A) {
    if (A === void 0) return !0;
    return typeof A === "string" && A.length <= 50;
  }
  function Rv5(A) {
    let K = Ev5.normalizeProvider(A.userAgentAppId ?? $U8),
      {
        customUserAgent: q
      } = A;
    return Object.assign(A, {
      customUserAgent: typeof q === "string" ? [[q]] : q,
      userAgentAppId: async () => {
        let Y = await K();
        if (!Lv5(Y)) {
          let z = A.logger?.constructor?.name === "NoOpLogger" || !A.logger ? console : A.logger;
          if (typeof Y !== "string") z?.warn("userAgentAppId must be a string or undefined.");else if (Y.length > 50) z?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
        }
        return Y;
      }
    });
  }
  var yv5 = /\d{12}\.ddb/;
  async function Iv5(A, K, q) {
    if (q.request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") Qb.setFeature(A, "PROTOCOL_RPC_V2_CBOR", "M");
    if (typeof K.retryStrategy === "function") {
      let w = await K.retryStrategy();
      if (typeof w.acquireInitialRetryToken === "function") {
        if (w.constructor?.name?.includes("Adaptive")) Qb.setFeature(A, "RETRY_MODE_ADAPTIVE", "F");else Qb.setFeature(A, "RETRY_MODE_STANDARD", "E");
      } else Qb.setFeature(A, "RETRY_MODE_LEGACY", "D");
    }
    if (typeof K.accountIdEndpointMode === "function") {
      let w = A.endpointV2;
      if (String(w?.url?.hostname).match(yv5)) Qb.setFeature(A, "ACCOUNT_ID_ENDPOINT", "O");
      switch (await K.accountIdEndpointMode?.()) {
        case "disabled":
          Qb.setFeature(A, "ACCOUNT_ID_MODE_DISABLED", "Q");
          break;
        case "preferred":
          Qb.setFeature(A, "ACCOUNT_ID_MODE_PREFERRED", "P");
          break;
        case "required":
          Qb.setFeature(A, "ACCOUNT_ID_MODE_REQUIRED", "R");
          break;
      }
    }
    let z = A.__smithy_context?.selectedHttpAuthScheme?.identity;
    if (z?.$source) {
      let w = z;
      if (w.accountId) Qb.setFeature(A, "RESOLVED_ACCOUNT_ID", "T");
      for (let [H, J] of Object.entries(w.$source ?? {})) Qb.setFeature(A, H, J);
    }
  }
  var JU8 = "user-agent",
    rn1 = "x-amz-user-agent",
    OU8 = " ",
    on1 = "/",
    Sv5 = /[^!$%&'*+\-.^_`|~\w]/g,
    hv5 = /[^!$%&'*+\-.^_`|~\w#]/g,
    XU8 = "-",
    bv5 = 1024;
  function xv5(A) {
    let K = "";
    for (let q in A) {
      let Y = A[q];
      if (K.length + Y.length + 1 <= bv5) {
        if (K.length) K += "," + Y;else K += Y;
        continue;
      }
      break;
    }
    return K;
  }
  var _U8 = A => (K, q) => async Y => {
      let {
        request: z
      } = Y;
      if (!Cv5.HttpRequest.isInstance(z)) return K(Y);
      let {
          headers: w
        } = z,
        H = q?.userAgent?.map(o61) || [],
        J = (await A.defaultUserAgentProvider()).map(o61);
      await Iv5(q, A, Y);
      let O = q;
      J.push(`m/${xv5(Object.assign({}, q.__smithy_context?.features, O.__aws_sdk_context?.features))}`);
      let X = A?.customUserAgent?.map(o61) || [],
        $ = await A.userAgentAppId();
      if ($) J.push(o61(["app", `${$}`]));
      let _ = kv5.getUserAgentPrefix(),
        G = (_ ? [_] : []).concat([...J, ...H, ...X]).join(OU8),
        Z = [...J.filter(W => W.startsWith("aws-sdk-")), ...X].join(OU8);
      if (A.runtime !== "browser") {
        if (Z) w[rn1] = w[rn1] ? `${w[JU8]} ${Z}` : Z;
        w[JU8] = G;
      } else w[rn1] = G;
      return K({
        ...Y,
        request: z
      });
    },
    o61 = A => {
      let K = A[0].split(on1).map(H => H.replace(Sv5, XU8)).join(on1),
        q = A[1]?.replace(hv5, XU8),
        Y = K.indexOf(on1),
        z = K.substring(0, Y),
        w = K.substring(Y + 1);
      if (z === "api") w = w.toLowerCase();
      return [z, w, q].filter(H => H && H.length > 0).reduce((H, J, O) => {
        switch (O) {
          case 0:
            return J;
          case 1:
            return `${H}/${J}`;
          default:
            return `${H}#${J}`;
        }
      }, "");
    },
    GU8 = {
      name: "getUserAgentMiddleware",
      step: "build",
      priority: "low",
      tags: ["SET_USER_AGENT", "USER_AGENT"],
      override: !0
    },
    uv5 = A => ({
      applyToStack: K => {
        K.add(_U8(A), GU8);
      }
    });
  Bv5.DEFAULT_UA_APP_ID = $U8;
  Bv5.getUserAgentMiddlewareOptions = GU8;
  Bv5.getUserAgentPlugin = uv5;
  Bv5.resolveUserAgentConfig = Rv5;
  Bv5.userAgentMiddleware = _U8;
});

// Register to shared state
__$.Ub = Ub;
