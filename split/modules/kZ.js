// Module: kZ
// Dependencies: db, Ep8, Pr1, qi1, WD, mp8, Qp8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var kZ = v(bR5 => {
  var HO = __$.db(),
    WOA = __$.Ep8(),
    Kn = __$.Pr1(),
    pp8 = __$.qi1(),
    Up8 = __$.WD(),
    NR5 = __$.mp8(),
    TR5 = __$.Qp8(),
    vR5 = (A, K) => {
      let q = A,
        Y = HO.NO_RETRY_INCREMENT,
        z = HO.RETRY_COST,
        w = HO.TIMEOUT_RETRY_COST,
        H = A,
        J = _ => _.name === "TimeoutError" ? w : z,
        O = _ => J(_) <= H;
      return Object.freeze({
        hasRetryTokens: O,
        retrieveRetryTokens: _ => {
          if (!O(_)) throw Error("No retry token available");
          let G = J(_);
          return H -= G, G;
        },
        releaseRetryTokens: _ => {
          H += _ ?? Y, H = Math.min(H, q);
        }
      });
    },
    dp8 = (A, K) => Math.floor(Math.min(HO.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** K * A)),
    cp8 = A => {
      if (!A) return !1;
      return Kn.isRetryableByTrait(A) || Kn.isClockSkewError(A) || Kn.isThrottlingError(A) || Kn.isTransientError(A);
    },
    lp8 = A => {
      if (A instanceof Error) return A;
      if (A instanceof Object) return Object.assign(Error(), A);
      if (typeof A === "string") return Error(A);
      return Error(`AWS SDK error wrapper for ${A}`);
    };
  class mr1 {
    maxAttemptsProvider;
    retryDecider;
    delayDecider;
    retryQuota;
    mode = HO.RETRY_MODES.STANDARD;
    constructor(A, K) {
      this.maxAttemptsProvider = A, this.retryDecider = K?.retryDecider ?? cp8, this.delayDecider = K?.delayDecider ?? dp8, this.retryQuota = K?.retryQuota ?? vR5(HO.INITIAL_RETRY_TOKENS);
    }
    shouldRetry(A, K, q) {
      return K < q && this.retryDecider(A) && this.retryQuota.hasRetryTokens(A);
    }
    async getMaxAttempts() {
      let A;
      try {
        A = await this.maxAttemptsProvider();
      } catch (K) {
        A = HO.DEFAULT_MAX_ATTEMPTS;
      }
      return A;
    }
    async retry(A, K, q) {
      let Y,
        z = 0,
        w = 0,
        H = await this.getMaxAttempts(),
        {
          request: J
        } = K;
      if (WOA.HttpRequest.isInstance(J)) J.headers[HO.INVOCATION_ID_HEADER] = pp8.v4();
      while (!0) try {
        if (WOA.HttpRequest.isInstance(J)) J.headers[HO.REQUEST_HEADER] = `attempt=${z + 1}; max=${H}`;
        if (q?.beforeRequest) await q.beforeRequest();
        let {
          response: O,
          output: X
        } = await A(K);
        if (q?.afterRequest) q.afterRequest(O);
        return this.retryQuota.releaseRetryTokens(Y), X.$metadata.attempts = z + 1, X.$metadata.totalRetryDelay = w, {
          response: O,
          output: X
        };
      } catch (O) {
        let X = lp8(O);
        if (z++, this.shouldRetry(X, z, H)) {
          Y = this.retryQuota.retrieveRetryTokens(X);
          let $ = this.delayDecider(Kn.isThrottlingError(X) ? HO.THROTTLING_RETRY_DELAY_BASE : HO.DEFAULT_RETRY_DELAY_BASE, z),
            _ = ER5(X.$response),
            G = Math.max(_ || 0, $);
          w += G, await new Promise(Z => setTimeout(Z, G));
          continue;
        }
        if (!X.$metadata) X.$metadata = {};
        throw X.$metadata.attempts = z, X.$metadata.totalRetryDelay = w, X;
      }
    }
  }
  var ER5 = A => {
    if (!WOA.HttpResponse.isInstance(A)) return;
    let K = Object.keys(A.headers).find(w => w.toLowerCase() === "retry-after");
    if (!K) return;
    let q = A.headers[K],
      Y = Number(q);
    if (!Number.isNaN(Y)) return Y * 1000;
    return new Date(q).getTime() - Date.now();
  };
  class ip8 extends mr1 {
    rateLimiter;
    constructor(A, K) {
      let {
        rateLimiter: q,
        ...Y
      } = K ?? {};
      super(A, Y);
      this.rateLimiter = q ?? new HO.DefaultRateLimiter(), this.mode = HO.RETRY_MODES.ADAPTIVE;
    }
    async retry(A, K) {
      return super.retry(A, K, {
        beforeRequest: async () => {
          return this.rateLimiter.getSendToken();
        },
        afterRequest: q => {
          this.rateLimiter.updateClientSendingRate(q);
        }
      });
    }
  }
  var ur1 = "AWS_MAX_ATTEMPTS",
    Br1 = "max_attempts",
    kR5 = {
      environmentVariableSelector: A => {
        let K = A[ur1];
        if (!K) return;
        let q = parseInt(K);
        if (Number.isNaN(q)) throw Error(`Environment variable ${ur1} mast be a number, got "${K}"`);
        return q;
      },
      configFileSelector: A => {
        let K = A[Br1];
        if (!K) return;
        let q = parseInt(K);
        if (Number.isNaN(q)) throw Error(`Shared config file entry ${Br1} mast be a number, got "${K}"`);
        return q;
      },
      default: HO.DEFAULT_MAX_ATTEMPTS
    },
    CR5 = A => {
      let {
          retryStrategy: K,
          retryMode: q,
          maxAttempts: Y
        } = A,
        z = Up8.normalizeProvider(Y ?? HO.DEFAULT_MAX_ATTEMPTS);
      return Object.assign(A, {
        maxAttempts: z,
        retryStrategy: async () => {
          if (K) return K;
          if ((await Up8.normalizeProvider(q)()) === HO.RETRY_MODES.ADAPTIVE) return new HO.AdaptiveRetryStrategy(z);
          return new HO.StandardRetryStrategy(z);
        }
      });
    },
    np8 = "AWS_RETRY_MODE",
    rp8 = "retry_mode",
    LR5 = {
      environmentVariableSelector: A => A[np8],
      configFileSelector: A => A[rp8],
      default: HO.DEFAULT_RETRY_MODE
    },
    op8 = () => A => async K => {
      let {
        request: q
      } = K;
      if (WOA.HttpRequest.isInstance(q)) delete q.headers[HO.INVOCATION_ID_HEADER], delete q.headers[HO.REQUEST_HEADER];
      return A(K);
    },
    ap8 = {
      name: "omitRetryHeadersMiddleware",
      tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
      relation: "before",
      toMiddleware: "awsAuthMiddleware",
      override: !0
    },
    RR5 = A => ({
      applyToStack: K => {
        K.addRelativeTo(op8(), ap8);
      }
    }),
    sp8 = A => (K, q) => async Y => {
      let z = await A.retryStrategy(),
        w = await A.maxAttempts();
      if (yR5(z)) {
        z = z;
        let H = await z.acquireInitialRetryToken(q.partition_id),
          J = Error(),
          O = 0,
          X = 0,
          {
            request: $
          } = Y,
          _ = WOA.HttpRequest.isInstance($);
        if (_) $.headers[HO.INVOCATION_ID_HEADER] = pp8.v4();
        while (!0) try {
          if (_) $.headers[HO.REQUEST_HEADER] = `attempt=${O + 1}; max=${w}`;
          let {
            response: G,
            output: Z
          } = await K(Y);
          return z.recordSuccess(H), Z.$metadata.attempts = O + 1, Z.$metadata.totalRetryDelay = X, {
            response: G,
            output: Z
          };
        } catch (G) {
          let Z = IR5(G);
          if (J = lp8(G), _ && TR5.isStreamingPayload($)) throw (q.logger instanceof NR5.NoOpLogger ? console : q.logger)?.warn("An error was encountered in a non-retryable streaming request."), J;
          try {
            H = await z.refreshRetryTokenForRetry(H, Z);
          } catch (D) {
            if (!J.$metadata) J.$metadata = {};
            throw J.$metadata.attempts = O + 1, J.$metadata.totalRetryDelay = X, J;
          }
          O = H.getRetryCount();
          let W = H.getRetryDelay();
          X += W, await new Promise(D => setTimeout(D, W));
        }
      } else {
        if (z = z, z?.mode) q.userAgent = [...(q.userAgent || []), ["cfg/retry-mode", z.mode]];
        return z.retry(K, Y);
      }
    },
    yR5 = A => typeof A.acquireInitialRetryToken < "u" && typeof A.refreshRetryTokenForRetry < "u" && typeof A.recordSuccess < "u",
    IR5 = A => {
      let K = {
          error: A,
          errorType: SR5(A)
        },
        q = ep8(A.$response);
      if (q) K.retryAfterHint = q;
      return K;
    },
    SR5 = A => {
      if (Kn.isThrottlingError(A)) return "THROTTLING";
      if (Kn.isTransientError(A)) return "TRANSIENT";
      if (Kn.isServerError(A)) return "SERVER_ERROR";
      return "CLIENT_ERROR";
    },
    tp8 = {
      name: "retryMiddleware",
      tags: ["RETRY"],
      step: "finalizeRequest",
      priority: "high",
      override: !0
    },
    hR5 = A => ({
      applyToStack: K => {
        K.add(sp8(A), tp8);
      }
    }),
    ep8 = A => {
      if (!WOA.HttpResponse.isInstance(A)) return;
      let K = Object.keys(A.headers).find(w => w.toLowerCase() === "retry-after");
      if (!K) return;
      let q = A.headers[K],
        Y = Number(q);
      if (!Number.isNaN(Y)) return new Date(Y * 1000);
      return new Date(q);
    };
  bR5.AdaptiveRetryStrategy = ip8;
  bR5.CONFIG_MAX_ATTEMPTS = Br1;
  bR5.CONFIG_RETRY_MODE = rp8;
  bR5.ENV_MAX_ATTEMPTS = ur1;
  bR5.ENV_RETRY_MODE = np8;
  bR5.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = kR5;
  bR5.NODE_RETRY_MODE_CONFIG_OPTIONS = LR5;
  bR5.StandardRetryStrategy = mr1;
  bR5.defaultDelayDecider = dp8;
  bR5.defaultRetryDecider = cp8;
  bR5.getOmitRetryHeadersPlugin = RR5;
  bR5.getRetryAfterHint = ep8;
  bR5.getRetryPlugin = hR5;
  bR5.omitRetryHeadersMiddleware = op8;
  bR5.omitRetryHeadersMiddlewareOptions = ap8;
  bR5.resolveRetryConfig = CR5;
  bR5.retryMiddleware = sp8;
  bR5.retryMiddlewareOptions = tp8;
});

// Register to shared state
__$.kZ = kZ;
