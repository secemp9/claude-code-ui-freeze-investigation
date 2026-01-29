// Module: Ky
// Dependencies: Ug8

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Ky = v(EM5 => {
  var Si1 = __$.Ug8();
  class pg8 {
    capacity;
    data = new Map();
    parameters = [];
    constructor({
      size: A,
      params: K
    }) {
      if (this.capacity = A ?? 50, K) this.parameters = K;
    }
    get(A, K) {
      let q = this.hash(A);
      if (q === !1) return K();
      if (!this.data.has(q)) {
        if (this.data.size > this.capacity + 10) {
          let Y = this.data.keys(),
            z = 0;
          while (!0) {
            let {
              value: w,
              done: H
            } = Y.next();
            if (this.data.delete(w), H || ++z > 10) break;
          }
        }
        this.data.set(q, K());
      }
      return this.data.get(q);
    }
    size() {
      return this.data.size;
    }
    hash(A) {
      let K = "",
        {
          parameters: q
        } = this;
      if (q.length === 0) return !1;
      for (let Y of q) {
        let z = String(A[Y] ?? "");
        if (z.includes("|;")) return !1;
        K += z + "|;";
      }
      return K;
    }
  }
  var wM5 = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"),
    dg8 = A => wM5.test(A) || A.startsWith("[") && A.endsWith("]"),
    HM5 = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"),
    bi1 = (A, K = !1) => {
      if (!K) return HM5.test(A);
      let q = A.split(".");
      for (let Y of q) if (!bi1(Y)) return !1;
      return !0;
    },
    hi1 = {},
    hCA = "endpoints";
  function ni(A) {
    if (typeof A !== "object" || A == null) return A;
    if ("ref" in A) return `$${ni(A.ref)}`;
    if ("fn" in A) return `${A.fn}(${(A.argv || []).map(ni).join(", ")})`;
    return JSON.stringify(A, null, 2);
  }
  class tj extends Error {
    constructor(A) {
      super(A);
      this.name = "EndpointError";
    }
  }
  var JM5 = (A, K) => A === K,
    OM5 = A => {
      let K = A.split("."),
        q = [];
      for (let Y of K) {
        let z = Y.indexOf("[");
        if (z !== -1) {
          if (Y.indexOf("]") !== Y.length - 1) throw new tj(`Path: '${A}' does not end with ']'`);
          let w = Y.slice(z + 1, -1);
          if (Number.isNaN(parseInt(w))) throw new tj(`Invalid array index: '${w}' in path: '${A}'`);
          if (z !== 0) q.push(Y.slice(0, z));
          q.push(w);
        } else q.push(Y);
      }
      return q;
    },
    cg8 = (A, K) => OM5(K).reduce((q, Y) => {
      if (typeof q !== "object") throw new tj(`Index '${Y}' in '${K}' not found in '${JSON.stringify(A)}'`);else if (Array.isArray(q)) return q[parseInt(Y)];
      return q[Y];
    }, A),
    XM5 = A => A != null,
    $M5 = A => !A,
    Ii1 = {
      [Si1.EndpointURLScheme.HTTP]: 80,
      [Si1.EndpointURLScheme.HTTPS]: 443
    },
    _M5 = A => {
      let K = (() => {
        try {
          if (A instanceof URL) return A;
          if (typeof A === "object" && "hostname" in A) {
            let {
                hostname: G,
                port: Z,
                protocol: W = "",
                path: D = "",
                query: j = {}
              } = A,
              M = new URL(`${W}//${G}${Z ? `:${Z}` : ""}${D}`);
            return M.search = Object.entries(j).map(([P, f]) => `${P}=${f}`).join("&"), M;
          }
          return new URL(A);
        } catch (G) {
          return null;
        }
      })();
      if (!K) return console.error(`Unable to parse ${JSON.stringify(A)} as a whatwg URL.`), null;
      let q = K.href,
        {
          host: Y,
          hostname: z,
          pathname: w,
          protocol: H,
          search: J
        } = K;
      if (J) return null;
      let O = H.slice(0, -1);
      if (!Object.values(Si1.EndpointURLScheme).includes(O)) return null;
      let X = dg8(z),
        $ = q.includes(`${Y}:${Ii1[O]}`) || typeof A === "string" && A.includes(`${Y}:${Ii1[O]}`),
        _ = `${Y}${$ ? `:${Ii1[O]}` : ""}`;
      return {
        scheme: O,
        authority: _,
        path: w,
        normalizedPath: w.endsWith("/") ? w : `${w}/`,
        isIp: X
      };
    },
    GM5 = (A, K) => A === K,
    ZM5 = (A, K, q, Y) => {
      if (K >= q || A.length < q) return null;
      if (!Y) return A.substring(K, q);
      return A.substring(A.length - q, A.length - K);
    },
    WM5 = A => encodeURIComponent(A).replace(/[!*'()]/g, K => `%${K.charCodeAt(0).toString(16).toUpperCase()}`),
    DM5 = {
      booleanEquals: JM5,
      getAttr: cg8,
      isSet: XM5,
      isValidHostLabel: bi1,
      not: $M5,
      parseURL: _M5,
      stringEquals: GM5,
      substring: ZM5,
      uriEncode: WM5
    },
    lg8 = (A, K) => {
      let q = [],
        Y = {
          ...K.endpointParams,
          ...K.referenceRecord
        },
        z = 0;
      while (z < A.length) {
        let w = A.indexOf("{", z);
        if (w === -1) {
          q.push(A.slice(z));
          break;
        }
        q.push(A.slice(z, w));
        let H = A.indexOf("}", w);
        if (H === -1) {
          q.push(A.slice(w));
          break;
        }
        if (A[w + 1] === "{" && A[H + 1] === "}") q.push(A.slice(w + 1, H)), z = H + 2;
        let J = A.substring(w + 1, H);
        if (J.includes("#")) {
          let [O, X] = J.split("#");
          q.push(cg8(Y[O], X));
        } else q.push(Y[J]);
        z = H + 1;
      }
      return q.join("");
    },
    jM5 = ({
      ref: A
    }, K) => {
      return {
        ...K.endpointParams,
        ...K.referenceRecord
      }[A];
    },
    R61 = (A, K, q) => {
      if (typeof A === "string") return lg8(A, q);else if (A.fn) return ng8.callFunction(A, q);else if (A.ref) return jM5(A, q);
      throw new tj(`'${K}': ${String(A)} is not a string, function or reference.`);
    },
    ig8 = ({
      fn: A,
      argv: K
    }, q) => {
      let Y = K.map(w => ["boolean", "number"].includes(typeof w) ? w : ng8.evaluateExpression(w, "arg", q)),
        z = A.split(".");
      if (z[0] in hi1 && z[1] != null) return hi1[z[0]][z[1]](...Y);
      return DM5[A](...Y);
    },
    ng8 = {
      evaluateExpression: R61,
      callFunction: ig8
    },
    MM5 = ({
      assign: A,
      ...K
    }, q) => {
      if (A && A in q.referenceRecord) throw new tj(`'${A}' is already defined in Reference Record.`);
      let Y = ig8(K, q);
      return q.logger?.debug?.(`${hCA} evaluateCondition: ${ni(K)} = ${ni(Y)}`), {
        result: Y === "" ? !0 : !!Y,
        ...(A != null && {
          toAssign: {
            name: A,
            value: Y
          }
        })
      };
    },
    xi1 = (A = [], K) => {
      let q = {};
      for (let Y of A) {
        let {
          result: z,
          toAssign: w
        } = MM5(Y, {
          ...K,
          referenceRecord: {
            ...K.referenceRecord,
            ...q
          }
        });
        if (!z) return {
          result: z
        };
        if (w) q[w.name] = w.value, K.logger?.debug?.(`${hCA} assign: ${w.name} := ${ni(w.value)}`);
      }
      return {
        result: !0,
        referenceRecord: q
      };
    },
    PM5 = (A, K) => Object.entries(A).reduce((q, [Y, z]) => ({
      ...q,
      [Y]: z.map(w => {
        let H = R61(w, "Header value entry", K);
        if (typeof H !== "string") throw new tj(`Header '${Y}' value '${H}' is not a string`);
        return H;
      })
    }), {}),
    rg8 = (A, K) => Object.entries(A).reduce((q, [Y, z]) => ({
      ...q,
      [Y]: ag8.getEndpointProperty(z, K)
    }), {}),
    og8 = (A, K) => {
      if (Array.isArray(A)) return A.map(q => og8(q, K));
      switch (typeof A) {
        case "string":
          return lg8(A, K);
        case "object":
          if (A === null) throw new tj(`Unexpected endpoint property: ${A}`);
          return ag8.getEndpointProperties(A, K);
        case "boolean":
          return A;
        default:
          throw new tj(`Unexpected endpoint property type: ${typeof A}`);
      }
    },
    ag8 = {
      getEndpointProperty: og8,
      getEndpointProperties: rg8
    },
    VM5 = (A, K) => {
      let q = R61(A, "Endpoint URL", K);
      if (typeof q === "string") try {
        return new URL(q);
      } catch (Y) {
        throw console.error(`Failed to construct URL with ${q}`, Y), Y;
      }
      throw new tj(`Endpoint URL must be a string, got ${typeof q}`);
    },
    fM5 = (A, K) => {
      let {
          conditions: q,
          endpoint: Y
        } = A,
        {
          result: z,
          referenceRecord: w
        } = xi1(q, K);
      if (!z) return;
      let H = {
          ...K,
          referenceRecord: {
            ...K.referenceRecord,
            ...w
          }
        },
        {
          url: J,
          properties: O,
          headers: X
        } = Y;
      return K.logger?.debug?.(`${hCA} Resolving endpoint from template: ${ni(Y)}`), {
        ...(X != null && {
          headers: PM5(X, H)
        }),
        ...(O != null && {
          properties: rg8(O, H)
        }),
        url: VM5(J, H)
      };
    },
    NM5 = (A, K) => {
      let {
          conditions: q,
          error: Y
        } = A,
        {
          result: z,
          referenceRecord: w
        } = xi1(q, K);
      if (!z) return;
      throw new tj(R61(Y, "Error", {
        ...K,
        referenceRecord: {
          ...K.referenceRecord,
          ...w
        }
      }));
    },
    sg8 = (A, K) => {
      for (let q of A) if (q.type === "endpoint") {
        let Y = fM5(q, K);
        if (Y) return Y;
      } else if (q.type === "error") NM5(q, K);else if (q.type === "tree") {
        let Y = tg8.evaluateTreeRule(q, K);
        if (Y) return Y;
      } else throw new tj(`Unknown endpoint rule: ${q}`);
      throw new tj("Rules evaluation failed");
    },
    TM5 = (A, K) => {
      let {
          conditions: q,
          rules: Y
        } = A,
        {
          result: z,
          referenceRecord: w
        } = xi1(q, K);
      if (!z) return;
      return tg8.evaluateRules(Y, {
        ...K,
        referenceRecord: {
          ...K.referenceRecord,
          ...w
        }
      });
    },
    tg8 = {
      evaluateRules: sg8,
      evaluateTreeRule: TM5
    },
    vM5 = (A, K) => {
      let {
          endpointParams: q,
          logger: Y
        } = K,
        {
          parameters: z,
          rules: w
        } = A;
      K.logger?.debug?.(`${hCA} Initial EndpointParams: ${ni(q)}`);
      let H = Object.entries(z).filter(([, X]) => X.default != null).map(([X, $]) => [X, $.default]);
      if (H.length > 0) for (let [X, $] of H) q[X] = q[X] ?? $;
      let J = Object.entries(z).filter(([, X]) => X.required).map(([X]) => X);
      for (let X of J) if (q[X] == null) throw new tj(`Missing required parameter: '${X}'`);
      let O = sg8(w, {
        endpointParams: q,
        logger: Y,
        referenceRecord: {}
      });
      return K.logger?.debug?.(`${hCA} Resolved endpoint: ${ni(O)}`), O;
    };
  EM5.EndpointCache = pg8;
  EM5.EndpointError = tj;
  EM5.customEndpointFunctions = hi1;
  EM5.isIpAddress = dg8;
  EM5.isValidHostLabel = bi1;
  EM5.resolveEndpoint = vM5;
});

// Register to shared state
__$.Ky = Ky;
