// Module: w24
// Dependencies: hK1, _2

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var w24 = v((s6w, z24) => {
  var {
      isIP: ed3
    } = CA("node:net"),
    {
      lookup: Ac3
    } = CA("node:dns"),
    Kc3 = __$.hK1(),
    {
      InvalidArgumentError: h0A,
      InformationalError: qc3
    } = __$._2(),
    K24 = Math.pow(2, 31) - 1;
  class q24 {
    #A = 0;
    #K = 0;
    #q = new Map();
    dualStack = !0;
    affinity = null;
    lookup = null;
    pick = null;
    constructor(A) {
      this.#A = A.maxTTL, this.#K = A.maxItems, this.dualStack = A.dualStack, this.affinity = A.affinity, this.lookup = A.lookup ?? this.#z, this.pick = A.pick ?? this.#Y;
    }
    get full() {
      return this.#q.size === this.#K;
    }
    runLookup(A, K, q) {
      let Y = this.#q.get(A.hostname);
      if (Y == null && this.full) {
        q(null, A.origin);
        return;
      }
      let z = {
        affinity: this.affinity,
        dualStack: this.dualStack,
        lookup: this.lookup,
        pick: this.pick,
        ...K.dns,
        maxTTL: this.#A,
        maxItems: this.#K
      };
      if (Y == null) this.lookup(A, z, (w, H) => {
        if (w || H == null || H.length === 0) {
          q(w ?? new qc3("No DNS entries found"));
          return;
        }
        this.setRecords(A, H);
        let J = this.#q.get(A.hostname),
          O = this.pick(A, J, z.affinity),
          X;
        if (typeof O.port === "number") X = `:${O.port}`;else if (A.port !== "") X = `:${A.port}`;else X = "";
        q(null, `${A.protocol}//${O.family === 6 ? `[${O.address}]` : O.address}${X}`);
      });else {
        let w = this.pick(A, Y, z.affinity);
        if (w == null) {
          this.#q.delete(A.hostname), this.runLookup(A, K, q);
          return;
        }
        let H;
        if (typeof w.port === "number") H = `:${w.port}`;else if (A.port !== "") H = `:${A.port}`;else H = "";
        q(null, `${A.protocol}//${w.family === 6 ? `[${w.address}]` : w.address}${H}`);
      }
    }
    #z(A, K, q) {
      Ac3(A.hostname, {
        all: !0,
        family: this.dualStack === !1 ? this.affinity : 0,
        order: "ipv4first"
      }, (Y, z) => {
        if (Y) return q(Y);
        let w = new Map();
        for (let H of z) w.set(`${H.address}:${H.family}`, H);
        q(null, w.values());
      });
    }
    #Y(A, K, q) {
      let Y = null,
        {
          records: z,
          offset: w
        } = K,
        H;
      if (this.dualStack) {
        if (q == null) if (w == null || w === K24) K.offset = 0, q = 4;else K.offset++, q = (K.offset & 1) === 1 ? 6 : 4;
        if (z[q] != null && z[q].ips.length > 0) H = z[q];else H = z[q === 4 ? 6 : 4];
      } else H = z[q];
      if (H == null || H.ips.length === 0) return Y;
      if (H.offset == null || H.offset === K24) H.offset = 0;else H.offset++;
      let J = H.offset % H.ips.length;
      if (Y = H.ips[J] ?? null, Y == null) return Y;
      if (Date.now() - Y.timestamp > Y.ttl) return H.ips.splice(J, 1), this.pick(A, K, q);
      return Y;
    }
    setRecords(A, K) {
      let q = Date.now(),
        Y = {
          records: {
            4: null,
            6: null
          }
        };
      for (let z of K) {
        if (z.timestamp = q, typeof z.ttl === "number") z.ttl = Math.min(z.ttl, this.#A);else z.ttl = this.#A;
        let w = Y.records[z.family] ?? {
          ips: []
        };
        w.ips.push(z), Y.records[z.family] = w;
      }
      this.#q.set(A.hostname, Y);
    }
    getHandler(A, K) {
      return new Y24(this, A, K);
    }
  }
  class Y24 extends Kc3 {
    #A = null;
    #K = null;
    #q = null;
    #z = null;
    #Y = null;
    constructor(A, {
      origin: K,
      handler: q,
      dispatch: Y
    }, z) {
      super(q);
      this.#Y = K, this.#z = q, this.#K = {
        ...z
      }, this.#A = A, this.#q = Y;
    }
    onError(A) {
      switch (A.code) {
        case "ETIMEDOUT":
        case "ECONNREFUSED":
          {
            if (this.#A.dualStack) {
              this.#A.runLookup(this.#Y, this.#K, (K, q) => {
                if (K) return this.#z.onError(K);
                let Y = {
                  ...this.#K,
                  origin: q
                };
                this.#q(Y, this);
              });
              return;
            }
            this.#z.onError(A);
            return;
          }
        case "ENOTFOUND":
          this.#A.deleteRecord(this.#Y);
        default:
          this.#z.onError(A);
          break;
      }
    }
  }
  z24.exports = A => {
    if (A?.maxTTL != null && (typeof A?.maxTTL !== "number" || A?.maxTTL < 0)) throw new h0A("Invalid maxTTL. Must be a positive number");
    if (A?.maxItems != null && (typeof A?.maxItems !== "number" || A?.maxItems < 1)) throw new h0A("Invalid maxItems. Must be a positive number and greater than zero");
    if (A?.affinity != null && A?.affinity !== 4 && A?.affinity !== 6) throw new h0A("Invalid affinity. Must be either 4 or 6");
    if (A?.dualStack != null && typeof A?.dualStack !== "boolean") throw new h0A("Invalid dualStack. Must be a boolean");
    if (A?.lookup != null && typeof A?.lookup !== "function") throw new h0A("Invalid lookup. Must be a function");
    if (A?.pick != null && typeof A?.pick !== "function") throw new h0A("Invalid pick. Must be a function");
    let K = A?.dualStack ?? !0,
      q;
    if (K) q = A?.affinity ?? null;else q = A?.affinity ?? 4;
    let Y = {
        maxTTL: A?.maxTTL ?? 1e4,
        lookup: A?.lookup ?? null,
        pick: A?.pick ?? null,
        dualStack: K,
        affinity: q,
        maxItems: A?.maxItems ?? 1 / 0
      },
      z = new q24(Y);
    return w => {
      return function (J, O) {
        let X = J.origin.constructor === URL ? J.origin : new URL(J.origin);
        if (ed3(X.hostname) !== 0) return w(J, O);
        return z.runLookup(X, J, ($, _) => {
          if ($) return O.onError($);
          let G = null;
          G = {
            ...J,
            servername: X.hostname,
            origin: _,
            headers: {
              host: X.hostname,
              ...J.headers
            }
          }, w(G, z.getHandler({
            origin: X,
            dispatch: w,
            handler: O
          }, J));
        }), !0;
      };
    };
  };
});

// Register to shared state
__$.w24 = w24;
