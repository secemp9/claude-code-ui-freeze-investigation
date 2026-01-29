// Module: lE6
// Dependencies: K9

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var lE6 = v(RU7 => {
  Object.defineProperty(RU7, "__esModule", {
    value: !0
  });
  RU7.validateRetryThrottling = CU7;
  RU7.validateServiceConfig = LU7;
  RU7.extractAndSelectServiceConfig = Pq2;
  var Xq2 = CA("os"),
    yD1 = __$.K9(),
    ID1 = /^\d+(\.\d{1,9})?s$/,
    $q2 = "node";
  function _q2(A) {
    if ("service" in A && A.service !== "") {
      if (typeof A.service !== "string") throw Error(`Invalid method config name: invalid service: expected type string, got ${typeof A.service}`);
      if ("method" in A && A.method !== "") {
        if (typeof A.method !== "string") throw Error(`Invalid method config name: invalid method: expected type string, got ${typeof A.service}`);
        return {
          service: A.service,
          method: A.method
        };
      } else return {
        service: A.service
      };
    } else {
      if ("method" in A && A.method !== void 0) throw Error("Invalid method config name: method set with empty or unset service");
      return {};
    }
  }
  function Gq2(A) {
    if (!("maxAttempts" in A) || !Number.isInteger(A.maxAttempts) || A.maxAttempts < 2) throw Error("Invalid method config retry policy: maxAttempts must be an integer at least 2");
    if (!("initialBackoff" in A) || typeof A.initialBackoff !== "string" || !ID1.test(A.initialBackoff)) throw Error("Invalid method config retry policy: initialBackoff must be a string consisting of a positive integer or decimal followed by s");
    if (!("maxBackoff" in A) || typeof A.maxBackoff !== "string" || !ID1.test(A.maxBackoff)) throw Error("Invalid method config retry policy: maxBackoff must be a string consisting of a positive integer or decimal followed by s");
    if (!("backoffMultiplier" in A) || typeof A.backoffMultiplier !== "number" || A.backoffMultiplier <= 0) throw Error("Invalid method config retry policy: backoffMultiplier must be a number greater than 0");
    if (!("retryableStatusCodes" in A && Array.isArray(A.retryableStatusCodes))) throw Error("Invalid method config retry policy: retryableStatusCodes is required");
    if (A.retryableStatusCodes.length === 0) throw Error("Invalid method config retry policy: retryableStatusCodes must be non-empty");
    for (let K of A.retryableStatusCodes) if (typeof K === "number") {
      if (!Object.values(yD1.Status).includes(K)) throw Error("Invalid method config retry policy: retryableStatusCodes value not in status code range");
    } else if (typeof K === "string") {
      if (!Object.values(yD1.Status).includes(K.toUpperCase())) throw Error("Invalid method config retry policy: retryableStatusCodes value not a status code name");
    } else throw Error("Invalid method config retry policy: retryableStatusCodes value must be a string or number");
    return {
      maxAttempts: A.maxAttempts,
      initialBackoff: A.initialBackoff,
      maxBackoff: A.maxBackoff,
      backoffMultiplier: A.backoffMultiplier,
      retryableStatusCodes: A.retryableStatusCodes
    };
  }
  function Zq2(A) {
    if (!("maxAttempts" in A) || !Number.isInteger(A.maxAttempts) || A.maxAttempts < 2) throw Error("Invalid method config hedging policy: maxAttempts must be an integer at least 2");
    if ("hedgingDelay" in A && (typeof A.hedgingDelay !== "string" || !ID1.test(A.hedgingDelay))) throw Error("Invalid method config hedging policy: hedgingDelay must be a string consisting of a positive integer followed by s");
    if ("nonFatalStatusCodes" in A && Array.isArray(A.nonFatalStatusCodes)) for (let q of A.nonFatalStatusCodes) if (typeof q === "number") {
      if (!Object.values(yD1.Status).includes(q)) throw Error("Invalid method config hedging policy: nonFatalStatusCodes value not in status code range");
    } else if (typeof q === "string") {
      if (!Object.values(yD1.Status).includes(q.toUpperCase())) throw Error("Invalid method config hedging policy: nonFatalStatusCodes value not a status code name");
    } else throw Error("Invalid method config hedging policy: nonFatalStatusCodes value must be a string or number");
    let K = {
      maxAttempts: A.maxAttempts
    };
    if (A.hedgingDelay) K.hedgingDelay = A.hedgingDelay;
    if (A.nonFatalStatusCodes) K.nonFatalStatusCodes = A.nonFatalStatusCodes;
    return K;
  }
  function Wq2(A) {
    var K;
    let q = {
      name: []
    };
    if (!("name" in A) || !Array.isArray(A.name)) throw Error("Invalid method config: invalid name array");
    for (let Y of A.name) q.name.push(_q2(Y));
    if ("waitForReady" in A) {
      if (typeof A.waitForReady !== "boolean") throw Error("Invalid method config: invalid waitForReady");
      q.waitForReady = A.waitForReady;
    }
    if ("timeout" in A) if (typeof A.timeout === "object") {
      if (!("seconds" in A.timeout) || typeof A.timeout.seconds !== "number") throw Error("Invalid method config: invalid timeout.seconds");
      if (!("nanos" in A.timeout) || typeof A.timeout.nanos !== "number") throw Error("Invalid method config: invalid timeout.nanos");
      q.timeout = A.timeout;
    } else if (typeof A.timeout === "string" && ID1.test(A.timeout)) {
      let Y = A.timeout.substring(0, A.timeout.length - 1).split(".");
      q.timeout = {
        seconds: Y[0] | 0,
        nanos: ((K = Y[1]) !== null && K !== void 0 ? K : 0) | 0
      };
    } else throw Error("Invalid method config: invalid timeout");
    if ("maxRequestBytes" in A) {
      if (typeof A.maxRequestBytes !== "number") throw Error("Invalid method config: invalid maxRequestBytes");
      q.maxRequestBytes = A.maxRequestBytes;
    }
    if ("maxResponseBytes" in A) {
      if (typeof A.maxResponseBytes !== "number") throw Error("Invalid method config: invalid maxRequestBytes");
      q.maxResponseBytes = A.maxResponseBytes;
    }
    if ("retryPolicy" in A) {
      if ("hedgingPolicy" in A) throw Error("Invalid method config: retryPolicy and hedgingPolicy cannot both be specified");else q.retryPolicy = Gq2(A.retryPolicy);
    } else if ("hedgingPolicy" in A) q.hedgingPolicy = Zq2(A.hedgingPolicy);
    return q;
  }
  function CU7(A) {
    if (!("maxTokens" in A) || typeof A.maxTokens !== "number" || A.maxTokens <= 0 || A.maxTokens > 1000) throw Error("Invalid retryThrottling: maxTokens must be a number in (0, 1000]");
    if (!("tokenRatio" in A) || typeof A.tokenRatio !== "number" || A.tokenRatio <= 0) throw Error("Invalid retryThrottling: tokenRatio must be a number greater than 0");
    return {
      maxTokens: +A.maxTokens.toFixed(3),
      tokenRatio: +A.tokenRatio.toFixed(3)
    };
  }
  function Dq2(A) {
    if (!(typeof A === "object" && A !== null)) throw Error(`Invalid loadBalancingConfig: unexpected type ${typeof A}`);
    let K = Object.keys(A);
    if (K.length > 1) throw Error(`Invalid loadBalancingConfig: unexpected multiple keys ${K}`);
    if (K.length === 0) throw Error("Invalid loadBalancingConfig: load balancing policy name required");
    return {
      [K[0]]: A[K[0]]
    };
  }
  function LU7(A) {
    let K = {
      loadBalancingConfig: [],
      methodConfig: []
    };
    if ("loadBalancingPolicy" in A) if (typeof A.loadBalancingPolicy === "string") K.loadBalancingPolicy = A.loadBalancingPolicy;else throw Error("Invalid service config: invalid loadBalancingPolicy");
    if ("loadBalancingConfig" in A) if (Array.isArray(A.loadBalancingConfig)) for (let Y of A.loadBalancingConfig) K.loadBalancingConfig.push(Dq2(Y));else throw Error("Invalid service config: invalid loadBalancingConfig");
    if ("methodConfig" in A) {
      if (Array.isArray(A.methodConfig)) for (let Y of A.methodConfig) K.methodConfig.push(Wq2(Y));
    }
    if ("retryThrottling" in A) K.retryThrottling = CU7(A.retryThrottling);
    let q = [];
    for (let Y of K.methodConfig) for (let z of Y.name) {
      for (let w of q) if (z.service === w.service && z.method === w.method) throw Error(`Invalid service config: duplicate name ${z.service}/${z.method}`);
      q.push(z);
    }
    return K;
  }
  function jq2(A) {
    if (!("serviceConfig" in A)) throw Error("Invalid service config choice: missing service config");
    let K = {
      serviceConfig: LU7(A.serviceConfig)
    };
    if ("clientLanguage" in A) if (Array.isArray(A.clientLanguage)) {
      K.clientLanguage = [];
      for (let Y of A.clientLanguage) if (typeof Y === "string") K.clientLanguage.push(Y);else throw Error("Invalid service config choice: invalid clientLanguage");
    } else throw Error("Invalid service config choice: invalid clientLanguage");
    if ("clientHostname" in A) if (Array.isArray(A.clientHostname)) {
      K.clientHostname = [];
      for (let Y of A.clientHostname) if (typeof Y === "string") K.clientHostname.push(Y);else throw Error("Invalid service config choice: invalid clientHostname");
    } else throw Error("Invalid service config choice: invalid clientHostname");
    if ("percentage" in A) if (typeof A.percentage === "number" && 0 <= A.percentage && A.percentage <= 100) K.percentage = A.percentage;else throw Error("Invalid service config choice: invalid percentage");
    let q = ["clientLanguage", "percentage", "clientHostname", "serviceConfig"];
    for (let Y in A) if (!q.includes(Y)) throw Error(`Invalid service config choice: unexpected field ${Y}`);
    return K;
  }
  function Mq2(A, K) {
    if (!Array.isArray(A)) throw Error("Invalid service config list");
    for (let q of A) {
      let Y = jq2(q);
      if (typeof Y.percentage === "number" && K > Y.percentage) continue;
      if (Array.isArray(Y.clientHostname)) {
        let z = !1;
        for (let w of Y.clientHostname) if (w === Xq2.hostname()) z = !0;
        if (!z) continue;
      }
      if (Array.isArray(Y.clientLanguage)) {
        let z = !1;
        for (let w of Y.clientLanguage) if (w === $q2) z = !0;
        if (!z) continue;
      }
      return Y.serviceConfig;
    }
    throw Error("No matching service config found");
  }
  function Pq2(A, K) {
    for (let q of A) if (q.length > 0 && q[0].startsWith("grpc_config=")) {
      let Y = q.join("").substring(12),
        z = JSON.parse(Y);
      return Mq2(z, K);
    }
    return null;
  }
});

// Register to shared state
__$.lE6 = lE6;
