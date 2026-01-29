// Module: PEA
// Dependencies: DeA, xHA, $eA, GeA, Qq, zF1, O5, _6, YF1, D6A
//   ... and 134 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var PEA = k(() => {
  __$.DeA();
  __$.xHA();
  __$.$eA();
  __$.GeA();
  __$.Qq();
  __$.zF1();
  __$.Qq();
  __$.O5 = __$._6("$ZodType", (A, K) => {
    var q;
    A ?? (A = {}), A._zod.def = K, A._zod.bag = A._zod.bag || {}, A._zod.version = __$.YF1;
    let Y = [...(A._zod.def.checks ?? [])];
    if (A._zod.traits.has("$ZodCheck")) Y.unshift(A);
    for (let z of Y) for (let w of z._zod.onattach) w(A);
    if (Y.length === 0) (q = A._zod).deferred ?? (q.deferred = []), A._zod.deferred?.push(() => {
      A._zod.run = A._zod.parse;
    });else {
      let z = (w, H, J) => {
        let O = __$.D6A(w),
          X;
        for (let $ of H) {
          if ($._zod.when) {
            if (!$._zod.when(w)) continue;
          } else if (O) continue;
          let _ = w.issues.length,
            G = $._zod.check(w);
          if (G instanceof Promise && J?.async === !1) throw new __$.GF();
          if (X || G instanceof Promise) X = (X ?? Promise.resolve()).then(async () => {
            if (await G, w.issues.length === _) return;
            if (!O) O = __$.D6A(w, _);
          });else {
            if (w.issues.length === _) continue;
            if (!O) O = __$.D6A(w, _);
          }
        }
        if (X) return X.then(() => {
          return w;
        });
        return w;
      };
      A._zod.run = (w, H) => {
        let J = A._zod.parse(w, H);
        if (J instanceof Promise) {
          if (H.async === !1) throw new __$.GF();
          return J.then(O => z(O, Y, H));
        }
        return z(J, Y, H);
      };
    }
    A["~standard"] = {
      validate: z => {
        try {
          let w = __$.gHA(A, z);
          return w.success ? {
            value: w.data
          } : {
            issues: w.error?.issues
          };
        } catch (w) {
          return __$.ZEA(A, z).then(H => H.success ? {
            value: H.data
          } : {
            issues: H.error?.issues
          });
        }
      },
      vendor: "zod",
      version: 1
    };
  }), __$.P6A = __$._6("$ZodString", (A, K) => {
    __$.O5.init(A, K), A._zod.pattern = [...(A?._zod.bag?.patterns ?? [])].pop() ?? __$.Ig1(A._zod.bag), A._zod.parse = (q, Y) => {
      if (K.coerce) try {
        q.value = String(q.value);
      } catch (z) {}
      if (typeof q.value === "string") return q;
      return q.issues.push({
        expected: "string",
        code: "invalid_type",
        input: q.value,
        inst: A
      }), q;
    };
  }), __$.Gw = __$._6("$ZodStringFormat", (A, K) => {
    __$.FHA.init(A, K), __$.P6A.init(A, K);
  }), __$.HF1 = __$._6("$ZodGUID", (A, K) => {
    K.pattern ?? (K.pattern = __$.Mg1), __$.Gw.init(A, K);
  }), __$.JF1 = __$._6("$ZodUUID", (A, K) => {
    if (K.version) {
      let Y = {
        v1: 1,
        v2: 2,
        v3: 3,
        v4: 4,
        v5: 5,
        v6: 6,
        v7: 7,
        v8: 8
      }[K.version];
      if (Y === void 0) throw Error(`Invalid UUID version: "${K.version}"`);
      K.pattern ?? (K.pattern = __$.j6A(Y));
    } else K.pattern ?? (K.pattern = __$.j6A());
    __$.Gw.init(A, K);
  }), __$.OF1 = __$._6("$ZodEmail", (A, K) => {
    K.pattern ?? (K.pattern = __$.Pg1), __$.Gw.init(A, K);
  }), __$.XF1 = __$._6("$ZodURL", (A, K) => {
    __$.Gw.init(A, K), A._zod.check = q => {
      try {
        let Y = q.value,
          z = new URL(Y),
          w = z.href;
        if (K.hostname) {
          if (K.hostname.lastIndex = 0, !K.hostname.test(z.hostname)) q.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid hostname",
            pattern: __$.kg1.source,
            input: q.value,
            inst: A,
            continue: !K.abort
          });
        }
        if (K.protocol) {
          if (K.protocol.lastIndex = 0, !K.protocol.test(z.protocol.endsWith(":") ? z.protocol.slice(0, -1) : z.protocol)) q.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid protocol",
            pattern: K.protocol.source,
            input: q.value,
            inst: A,
            continue: !K.abort
          });
        }
        if (!Y.endsWith("/") && w.endsWith("/")) q.value = w.slice(0, -1);else q.value = w;
        return;
      } catch (Y) {
        q.issues.push({
          code: "invalid_format",
          format: "url",
          input: q.value,
          inst: A,
          continue: !K.abort
        });
      }
    };
  }), __$.$F1 = __$._6("$ZodEmoji", (A, K) => {
    K.pattern ?? (K.pattern = __$.Vg1()), __$.Gw.init(A, K);
  }), __$._F1 = __$._6("$ZodNanoID", (A, K) => {
    K.pattern ?? (K.pattern = __$.Dg1), __$.Gw.init(A, K);
  }), __$.GF1 = __$._6("$ZodCUID", (A, K) => {
    K.pattern ?? (K.pattern = __$.$g1), __$.Gw.init(A, K);
  }), __$.ZF1 = __$._6("$ZodCUID2", (A, K) => {
    K.pattern ?? (K.pattern = __$._g1), __$.Gw.init(A, K);
  }), __$.WF1 = __$._6("$ZodULID", (A, K) => {
    K.pattern ?? (K.pattern = __$.Gg1), __$.Gw.init(A, K);
  }), __$.DF1 = __$._6("$ZodXID", (A, K) => {
    K.pattern ?? (K.pattern = __$.Zg1), __$.Gw.init(A, K);
  }), __$.jF1 = __$._6("$ZodKSUID", (A, K) => {
    K.pattern ?? (K.pattern = __$.Wg1), __$.Gw.init(A, K);
  }), __$.MF1 = __$._6("$ZodISODateTime", (A, K) => {
    K.pattern ?? (K.pattern = __$.yg1(K)), __$.Gw.init(A, K);
  }), __$.PF1 = __$._6("$ZodISODate", (A, K) => {
    K.pattern ?? (K.pattern = __$.Lg1), __$.Gw.init(A, K);
  }), __$.VF1 = __$._6("$ZodISOTime", (A, K) => {
    K.pattern ?? (K.pattern = __$.Rg1(K)), __$.Gw.init(A, K);
  }), __$.fF1 = __$._6("$ZodISODuration", (A, K) => {
    K.pattern ?? (K.pattern = __$.jg1), __$.Gw.init(A, K);
  }), __$.NF1 = __$._6("$ZodIPv4", (A, K) => {
    K.pattern ?? (K.pattern = __$.fg1), __$.Gw.init(A, K), A._zod.onattach.push(q => {
      let Y = q._zod.bag;
      Y.format = "ipv4";
    });
  }), __$.TF1 = __$._6("$ZodIPv6", (A, K) => {
    K.pattern ?? (K.pattern = __$.Ng1), __$.Gw.init(A, K), A._zod.onattach.push(q => {
      let Y = q._zod.bag;
      Y.format = "ipv6";
    }), A._zod.check = q => {
      try {
        new URL(`http://[${q.value}]`);
      } catch {
        q.issues.push({
          code: "invalid_format",
          format: "ipv6",
          input: q.value,
          inst: A,
          continue: !K.abort
        });
      }
    };
  }), __$.vF1 = __$._6("$ZodCIDRv4", (A, K) => {
    K.pattern ?? (K.pattern = __$.Tg1), __$.Gw.init(A, K);
  }), __$.EF1 = __$._6("$ZodCIDRv6", (A, K) => {
    K.pattern ?? (K.pattern = __$.vg1), __$.Gw.init(A, K), A._zod.check = q => {
      let [Y, z] = q.value.split("/");
      try {
        if (!z) throw Error();
        let w = Number(z);
        if (`${w}` !== z) throw Error();
        if (w < 0 || w > 128) throw Error();
        new URL(`http://[${Y}]`);
      } catch {
        q.issues.push({
          code: "invalid_format",
          format: "cidrv6",
          input: q.value,
          inst: A,
          continue: !K.abort
        });
      }
    };
  });
  __$.CF1 = __$._6("$ZodBase64", (A, K) => {
    K.pattern ?? (K.pattern = __$.Eg1), __$.Gw.init(A, K), A._zod.onattach.push(q => {
      q._zod.bag.contentEncoding = "base64";
    }), A._zod.check = q => {
      if (__$.kF1(q.value)) return;
      q.issues.push({
        code: "invalid_format",
        format: "base64",
        input: q.value,
        inst: A,
        continue: !K.abort
      });
    };
  });
  __$.LF1 = __$._6("$ZodBase64URL", (A, K) => {
    K.pattern ?? (K.pattern = __$._eA), __$.Gw.init(A, K), A._zod.onattach.push(q => {
      q._zod.bag.contentEncoding = "base64url";
    }), A._zod.check = q => {
      if (__$.HL8(q.value)) return;
      q.issues.push({
        code: "invalid_format",
        format: "base64url",
        input: q.value,
        inst: A,
        continue: !K.abort
      });
    };
  }), __$.RF1 = __$._6("$ZodE164", (A, K) => {
    K.pattern ?? (K.pattern = __$.Cg1), __$.Gw.init(A, K);
  });
  __$.yF1 = __$._6("$ZodJWT", (A, K) => {
    __$.Gw.init(A, K), A._zod.check = q => {
      if (__$.JL8(q.value, K.alg)) return;
      q.issues.push({
        code: "invalid_format",
        format: "jwt",
        input: q.value,
        inst: A,
        continue: !K.abort
      });
    };
  }), __$.IF1 = __$._6("$ZodCustomStringFormat", (A, K) => {
    __$.Gw.init(A, K), A._zod.check = q => {
      if (K.fn(q.value)) return;
      q.issues.push({
        code: "invalid_format",
        format: K.format,
        input: q.value,
        inst: A,
        continue: !K.abort
      });
    };
  }), __$.VeA = __$._6("$ZodNumber", (A, K) => {
    __$.O5.init(A, K), A._zod.pattern = A._zod.bag.pattern ?? __$.bg1, A._zod.parse = (q, Y) => {
      if (K.coerce) try {
        q.value = Number(q.value);
      } catch (H) {}
      let z = q.value;
      if (typeof z === "number" && !Number.isNaN(z) && Number.isFinite(z)) return q;
      let w = typeof z === "number" ? Number.isNaN(z) ? "NaN" : !Number.isFinite(z) ? "Infinity" : void 0 : void 0;
      return q.issues.push({
        expected: "number",
        code: "invalid_type",
        input: z,
        inst: A,
        ...(w ? {
          received: w
        } : {})
      }), q;
    };
  }), __$.SF1 = __$._6("$ZodNumber", (A, K) => {
    __$.Qg1.init(A, K), __$.VeA.init(A, K);
  }), __$.WEA = __$._6("$ZodBoolean", (A, K) => {
    __$.O5.init(A, K), A._zod.pattern = __$.xg1, A._zod.parse = (q, Y) => {
      if (K.coerce) try {
        q.value = Boolean(q.value);
      } catch (w) {}
      let z = q.value;
      if (typeof z === "boolean") return q;
      return q.issues.push({
        expected: "boolean",
        code: "invalid_type",
        input: z,
        inst: A
      }), q;
    };
  }), __$.feA = __$._6("$ZodBigInt", (A, K) => {
    __$.O5.init(A, K), A._zod.pattern = __$.Sg1, A._zod.parse = (q, Y) => {
      if (K.coerce) try {
        q.value = BigInt(q.value);
      } catch (z) {}
      if (typeof q.value === "bigint") return q;
      return q.issues.push({
        expected: "bigint",
        code: "invalid_type",
        input: q.value,
        inst: A
      }), q;
    };
  }), __$.hF1 = __$._6("$ZodBigInt", (A, K) => {
    __$.Ug1.init(A, K), __$.feA.init(A, K);
  }), __$.bF1 = __$._6("$ZodSymbol", (A, K) => {
    __$.O5.init(A, K), A._zod.parse = (q, Y) => {
      let z = q.value;
      if (typeof z === "symbol") return q;
      return q.issues.push({
        expected: "symbol",
        code: "invalid_type",
        input: z,
        inst: A
      }), q;
    };
  }), __$.xF1 = __$._6("$ZodUndefined", (A, K) => {
    __$.O5.init(A, K), A._zod.pattern = __$.Bg1, A._zod.values = new Set([void 0]), A._zod.optin = "optional", A._zod.optout = "optional", A._zod.parse = (q, Y) => {
      let z = q.value;
      if (typeof z > "u") return q;
      return q.issues.push({
        expected: "undefined",
        code: "invalid_type",
        input: z,
        inst: A
      }), q;
    };
  }), __$.uF1 = __$._6("$ZodNull", (A, K) => {
    __$.O5.init(A, K), A._zod.pattern = __$.ug1, A._zod.values = new Set([null]), A._zod.parse = (q, Y) => {
      let z = q.value;
      if (z === null) return q;
      return q.issues.push({
        expected: "null",
        code: "invalid_type",
        input: z,
        inst: A
      }), q;
    };
  }), __$.BF1 = __$._6("$ZodAny", (A, K) => {
    __$.O5.init(A, K), A._zod.parse = q => q;
  }), __$.QHA = __$._6("$ZodUnknown", (A, K) => {
    __$.O5.init(A, K), A._zod.parse = q => q;
  }), __$.mF1 = __$._6("$ZodNever", (A, K) => {
    __$.O5.init(A, K), A._zod.parse = (q, Y) => {
      return q.issues.push({
        expected: "never",
        code: "invalid_type",
        input: q.value,
        inst: A
      }), q;
    };
  }), __$.gF1 = __$._6("$ZodVoid", (A, K) => {
    __$.O5.init(A, K), A._zod.parse = (q, Y) => {
      let z = q.value;
      if (typeof z > "u") return q;
      return q.issues.push({
        expected: "void",
        code: "invalid_type",
        input: z,
        inst: A
      }), q;
    };
  }), __$.FF1 = __$._6("$ZodDate", (A, K) => {
    __$.O5.init(A, K), A._zod.parse = (q, Y) => {
      if (K.coerce) try {
        q.value = new Date(q.value);
      } catch (J) {}
      let z = q.value,
        w = z instanceof Date;
      if (w && !Number.isNaN(z.getTime())) return q;
      return q.issues.push({
        expected: "date",
        code: "invalid_type",
        input: z,
        ...(w ? {
          received: "Invalid Date"
        } : {}),
        inst: A
      }), q;
    };
  });
  __$.DEA = __$._6("$ZodArray", (A, K) => {
    __$.O5.init(A, K), A._zod.parse = (q, Y) => {
      let z = q.value;
      if (!Array.isArray(z)) return q.issues.push({
        expected: "array",
        code: "invalid_type",
        input: z,
        inst: A
      }), q;
      q.value = Array(z.length);
      let w = [];
      for (let H = 0; H < z.length; H++) {
        let J = z[H],
          O = K.element._zod.run({
            value: J,
            issues: []
          }, Y);
        if (O instanceof Promise) w.push(O.then(X => __$.oC8(X, q, H)));else __$.oC8(O, q, H);
      }
      if (w.length) return Promise.all(w).then(() => q);
      return q;
    };
  });
  __$.QF1 = __$._6("$ZodObject", (A, K) => {
    __$.O5.init(A, K);
    let q = __$.YEA(() => {
      let _ = Object.keys(K.shape);
      for (let Z of _) if (!(K.shape[Z] instanceof __$.O5)) throw Error(`Invalid element at key "${Z}": expected a Zod schema`);
      let G = __$.Yg1(K.shape);
      return {
        shape: K.shape,
        keys: _,
        keySet: new Set(_),
        numKeys: _.length,
        optionalKeys: new Set(G)
      };
    });
    __$.X2(A._zod, "propValues", () => {
      let _ = K.shape,
        G = {};
      for (let Z in _) {
        let W = _[Z]._zod;
        if (W.values) {
          G[Z] ?? (G[Z] = new Set());
          for (let D of W.values) G[Z].add(D);
        }
      }
      return G;
    });
    let Y = _ => {
        let G = new __$.jeA(["shape", "payload", "ctx"]),
          Z = q.value,
          W = P => {
            let f = __$.W6A(P);
            return `shape[${f}]._zod.run({ value: input[${f}], issues: [] }, ctx)`;
          };
        G.write("const input = payload.value;");
        let D = Object.create(null),
          j = 0;
        for (let P of Z.keys) D[P] = `key_${j++}`;
        G.write("const newResult = {}");
        for (let P of Z.keys) if (Z.optionalKeys.has(P)) {
          let f = D[P];
          G.write(`const ${f} = ${W(P)};`);
          let N = __$.W6A(P);
          G.write(`
        if (${f}.issues.length) {
          if (input[${N}] === undefined) {
            if (${N} in input) {
              newResult[${N}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${f}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${N}, ...iss.path] : [${N}],
              }))
            );
          }
        } else if (${f}.value === undefined) {
          if (${N} in input) newResult[${N}] = undefined;
        } else {
          newResult[${N}] = ${f}.value;
        }
        `);
        } else {
          let f = D[P];
          G.write(`const ${f} = ${W(P)};`), G.write(`
          if (${f}.issues.length) payload.issues = payload.issues.concat(${f}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${__$.W6A(P)}, ...iss.path] : [${__$.W6A(P)}]
          })));`), G.write(`newResult[${__$.W6A(P)}] = ${f}.value`);
        }
        G.write("payload.value = newResult;"), G.write("return payload;");
        let M = G.compile();
        return (P, f) => M(_, P, f);
      },
      z,
      w = __$.uHA,
      H = !__$.evA.jitless,
      O = H && __$.Kg1.value,
      X = K.catchall,
      $;
    A._zod.parse = (_, G) => {
      $ ?? ($ = q.value);
      let Z = _.value;
      if (!w(Z)) return _.issues.push({
        expected: "object",
        code: "invalid_type",
        input: Z,
        inst: A
      }), _;
      let W = [];
      if (H && O && G?.async === !1 && G.jitless !== !0) {
        if (!z) z = Y(K.shape);
        _ = z(_, G);
      } else {
        _.value = {};
        let f = $.shape;
        for (let N of $.keys) {
          let T = f[N],
            C = T._zod.run({
              value: Z[N],
              issues: []
            }, G),
            R = T._zod.optin === "optional" && T._zod.optout === "optional";
          if (C instanceof Promise) W.push(C.then(x => R ? __$.aC8(x, _, N, Z) : __$.MeA(x, _, N)));else if (R) __$.aC8(C, _, N, Z);else __$.MeA(C, _, N);
        }
      }
      if (!X) return W.length ? Promise.all(W).then(() => _) : _;
      let D = [],
        j = $.keySet,
        M = X._zod,
        P = M.def.type;
      for (let f of Object.keys(Z)) {
        if (j.has(f)) continue;
        if (P === "never") {
          D.push(f);
          continue;
        }
        let N = M.run({
          value: Z[f],
          issues: []
        }, G);
        if (N instanceof Promise) W.push(N.then(T => __$.MeA(T, _, f)));else __$.MeA(N, _, f);
      }
      if (D.length) _.issues.push({
        code: "unrecognized_keys",
        keys: D,
        input: Z,
        inst: A
      });
      if (!W.length) return _;
      return Promise.all(W).then(() => {
        return _;
      });
    };
  });
  __$.NeA = __$._6("$ZodUnion", (A, K) => {
    __$.O5.init(A, K), __$.X2(A._zod, "optin", () => K.options.some(q => q._zod.optin === "optional") ? "optional" : void 0), __$.X2(A._zod, "optout", () => K.options.some(q => q._zod.optout === "optional") ? "optional" : void 0), __$.X2(A._zod, "values", () => {
      if (K.options.every(q => q._zod.values)) return new Set(K.options.flatMap(q => Array.from(q._zod.values)));
      return;
    }), __$.X2(A._zod, "pattern", () => {
      if (K.options.every(q => q._zod.pattern)) {
        let q = K.options.map(Y => Y._zod.pattern);
        return new RegExp(`^(${q.map(Y => __$.zEA(Y.source)).join("|")})$`);
      }
      return;
    }), A._zod.parse = (q, Y) => {
      let z = !1,
        w = [];
      for (let H of K.options) {
        let J = H._zod.run({
          value: q.value,
          issues: []
        }, Y);
        if (J instanceof Promise) w.push(J), z = !0;else {
          if (J.issues.length === 0) return J;
          w.push(J);
        }
      }
      if (!z) return __$.sC8(w, q, A, Y);
      return Promise.all(w).then(H => {
        return __$.sC8(H, q, A, Y);
      });
    };
  }), __$.UF1 = __$._6("$ZodDiscriminatedUnion", (A, K) => {
    __$.NeA.init(A, K);
    let q = A._zod.parse;
    __$.X2(A._zod, "propValues", () => {
      let z = {};
      for (let w of K.options) {
        let H = w._zod.propValues;
        if (!H || Object.keys(H).length === 0) throw Error(`Invalid discriminated union option at index "${K.options.indexOf(w)}"`);
        for (let [J, O] of Object.entries(H)) {
          if (!z[J]) z[J] = new Set();
          for (let X of O) z[J].add(X);
        }
      }
      return z;
    });
    let Y = __$.YEA(() => {
      let z = K.options,
        w = new Map();
      for (let H of z) {
        let J = H._zod.propValues[K.discriminator];
        if (!J || J.size === 0) throw Error(`Invalid discriminated union option at index "${K.options.indexOf(H)}"`);
        for (let O of J) {
          if (w.has(O)) throw Error(`Duplicate discriminator value "${String(O)}"`);
          w.set(O, H);
        }
      }
      return w;
    });
    A._zod.parse = (z, w) => {
      let H = z.value;
      if (!__$.uHA(H)) return z.issues.push({
        code: "invalid_type",
        expected: "object",
        input: H,
        inst: A
      }), z;
      let J = Y.value.get(H?.[K.discriminator]);
      if (J) return J._zod.run(z, w);
      if (K.unionFallback) return q(z, w);
      return z.issues.push({
        code: "invalid_union",
        errors: [],
        note: "No matching discriminator",
        input: H,
        path: [K.discriminator],
        inst: A
      }), z;
    };
  }), __$.pF1 = __$._6("$ZodIntersection", (A, K) => {
    __$.O5.init(A, K), A._zod.parse = (q, Y) => {
      let z = q.value,
        w = K.left._zod.run({
          value: z,
          issues: []
        }, Y),
        H = K.right._zod.run({
          value: z,
          issues: []
        }, Y);
      if (w instanceof Promise || H instanceof Promise) return Promise.all([w, H]).then(([O, X]) => {
        return __$.tC8(q, O, X);
      });
      return __$.tC8(q, w, H);
    };
  });
  __$.V6A = __$._6("$ZodTuple", (A, K) => {
    __$.O5.init(A, K);
    let q = K.items,
      Y = q.length - [...q].reverse().findIndex(z => z._zod.optin !== "optional");
    A._zod.parse = (z, w) => {
      let H = z.value;
      if (!Array.isArray(H)) return z.issues.push({
        input: H,
        inst: A,
        expected: "tuple",
        code: "invalid_type"
      }), z;
      z.value = [];
      let J = [];
      if (!K.rest) {
        let X = H.length > q.length,
          $ = H.length < Y - 1;
        if (X || $) return z.issues.push({
          input: H,
          inst: A,
          origin: "array",
          ...(X ? {
            code: "too_big",
            maximum: q.length
          } : {
            code: "too_small",
            minimum: q.length
          })
        }), z;
      }
      let O = -1;
      for (let X of q) {
        if (O++, O >= H.length) {
          if (O >= Y) continue;
        }
        let $ = X._zod.run({
          value: H[O],
          issues: []
        }, w);
        if ($ instanceof Promise) J.push($.then(_ => __$.PeA(_, z, O)));else __$.PeA($, z, O);
      }
      if (K.rest) {
        let X = H.slice(q.length);
        for (let $ of X) {
          O++;
          let _ = K.rest._zod.run({
            value: $,
            issues: []
          }, w);
          if (_ instanceof Promise) J.push(_.then(G => __$.PeA(G, z, O)));else __$.PeA(_, z, O);
        }
      }
      if (J.length) return Promise.all(J).then(() => z);
      return z;
    };
  });
  __$.dF1 = __$._6("$ZodRecord", (A, K) => {
    __$.O5.init(A, K), A._zod.parse = (q, Y) => {
      let z = q.value;
      if (!__$.BHA(z)) return q.issues.push({
        expected: "record",
        code: "invalid_type",
        input: z,
        inst: A
      }), q;
      let w = [];
      if (K.keyType._zod.values) {
        let H = K.keyType._zod.values;
        q.value = {};
        for (let O of H) if (typeof O === "string" || typeof O === "number" || typeof O === "symbol") {
          let X = K.valueType._zod.run({
            value: z[O],
            issues: []
          }, Y);
          if (X instanceof Promise) w.push(X.then($ => {
            if ($.issues.length) q.issues.push(...__$.$V(O, $.issues));
            q.value[O] = $.value;
          }));else {
            if (X.issues.length) q.issues.push(...__$.$V(O, X.issues));
            q.value[O] = X.value;
          }
        }
        let J;
        for (let O in z) if (!H.has(O)) J = J ?? [], J.push(O);
        if (J && J.length > 0) q.issues.push({
          code: "unrecognized_keys",
          input: z,
          inst: A,
          keys: J
        });
      } else {
        q.value = {};
        for (let H of Reflect.ownKeys(z)) {
          if (H === "__proto__") continue;
          let J = K.keyType._zod.run({
            value: H,
            issues: []
          }, Y);
          if (J instanceof Promise) throw Error("Async schemas not supported in object keys currently");
          if (J.issues.length) {
            q.issues.push({
              origin: "record",
              code: "invalid_key",
              issues: J.issues.map(X => __$.nN(X, Y, __$.UX())),
              input: H,
              path: [H],
              inst: A
            }), q.value[J.value] = J.value;
            continue;
          }
          let O = K.valueType._zod.run({
            value: z[H],
            issues: []
          }, Y);
          if (O instanceof Promise) w.push(O.then(X => {
            if (X.issues.length) q.issues.push(...__$.$V(H, X.issues));
            q.value[J.value] = X.value;
          }));else {
            if (O.issues.length) q.issues.push(...__$.$V(H, O.issues));
            q.value[J.value] = O.value;
          }
        }
      }
      if (w.length) return Promise.all(w).then(() => q);
      return q;
    };
  }), __$.cF1 = __$._6("$ZodMap", (A, K) => {
    __$.O5.init(A, K), A._zod.parse = (q, Y) => {
      let z = q.value;
      if (!(z instanceof Map)) return q.issues.push({
        expected: "map",
        code: "invalid_type",
        input: z,
        inst: A
      }), q;
      let w = [];
      q.value = new Map();
      for (let [H, J] of z) {
        let O = K.keyType._zod.run({
            value: H,
            issues: []
          }, Y),
          X = K.valueType._zod.run({
            value: J,
            issues: []
          }, Y);
        if (O instanceof Promise || X instanceof Promise) w.push(Promise.all([O, X]).then(([$, _]) => {
          __$.eC8($, _, q, H, z, A, Y);
        }));else __$.eC8(O, X, q, H, z, A, Y);
      }
      if (w.length) return Promise.all(w).then(() => q);
      return q;
    };
  });
  __$.lF1 = __$._6("$ZodSet", (A, K) => {
    __$.O5.init(A, K), A._zod.parse = (q, Y) => {
      let z = q.value;
      if (!(z instanceof Set)) return q.issues.push({
        input: z,
        inst: A,
        expected: "set",
        code: "invalid_type"
      }), q;
      let w = [];
      q.value = new Set();
      for (let H of z) {
        let J = K.valueType._zod.run({
          value: H,
          issues: []
        }, Y);
        if (J instanceof Promise) w.push(J.then(O => __$.AL8(O, q)));else __$.AL8(J, q);
      }
      if (w.length) return Promise.all(w).then(() => q);
      return q;
    };
  });
  __$.iF1 = __$._6("$ZodEnum", (A, K) => {
    __$.O5.init(A, K);
    let q = __$.qEA(K.entries);
    A._zod.values = new Set(q), A._zod.pattern = new RegExp(`^(${q.filter(Y => __$.wEA.has(typeof Y)).map(Y => typeof Y === "string" ? __$.ZF(Y) : Y.toString()).join("|")})$`), A._zod.parse = (Y, z) => {
      let w = Y.value;
      if (A._zod.values.has(w)) return Y;
      return Y.issues.push({
        code: "invalid_value",
        values: q,
        input: w,
        inst: A
      }), Y;
    };
  }), __$.nF1 = __$._6("$ZodLiteral", (A, K) => {
    __$.O5.init(A, K), A._zod.values = new Set(K.values), A._zod.pattern = new RegExp(`^(${K.values.map(q => typeof q === "string" ? __$.ZF(q) : q ? q.toString() : String(q)).join("|")})$`), A._zod.parse = (q, Y) => {
      let z = q.value;
      if (A._zod.values.has(z)) return q;
      return q.issues.push({
        code: "invalid_value",
        values: K.values,
        input: z,
        inst: A
      }), q;
    };
  }), __$.rF1 = __$._6("$ZodFile", (A, K) => {
    __$.O5.init(A, K), A._zod.parse = (q, Y) => {
      let z = q.value;
      if (z instanceof File) return q;
      return q.issues.push({
        expected: "file",
        code: "invalid_type",
        input: z,
        inst: A
      }), q;
    };
  }), __$.jEA = __$._6("$ZodTransform", (A, K) => {
    __$.O5.init(A, K), A._zod.parse = (q, Y) => {
      let z = K.transform(q.value, q);
      if (Y.async) return (z instanceof Promise ? z : Promise.resolve(z)).then(H => {
        return q.value = H, q;
      });
      if (z instanceof Promise) throw new __$.GF();
      return q.value = z, q;
    };
  }), __$.oF1 = __$._6("$ZodOptional", (A, K) => {
    __$.O5.init(A, K), A._zod.optin = "optional", A._zod.optout = "optional", __$.X2(A._zod, "values", () => {
      return K.innerType._zod.values ? new Set([...K.innerType._zod.values, void 0]) : void 0;
    }), __$.X2(A._zod, "pattern", () => {
      let q = K.innerType._zod.pattern;
      return q ? new RegExp(`^(${__$.zEA(q.source)})?$`) : void 0;
    }), A._zod.parse = (q, Y) => {
      if (K.innerType._zod.optin === "optional") return K.innerType._zod.run(q, Y);
      if (q.value === void 0) return q;
      return K.innerType._zod.run(q, Y);
    };
  }), __$.aF1 = __$._6("$ZodNullable", (A, K) => {
    __$.O5.init(A, K), __$.X2(A._zod, "optin", () => K.innerType._zod.optin), __$.X2(A._zod, "optout", () => K.innerType._zod.optout), __$.X2(A._zod, "pattern", () => {
      let q = K.innerType._zod.pattern;
      return q ? new RegExp(`^(${__$.zEA(q.source)}|null)$`) : void 0;
    }), __$.X2(A._zod, "values", () => {
      return K.innerType._zod.values ? new Set([...K.innerType._zod.values, null]) : void 0;
    }), A._zod.parse = (q, Y) => {
      if (q.value === null) return q;
      return K.innerType._zod.run(q, Y);
    };
  }), __$.sF1 = __$._6("$ZodDefault", (A, K) => {
    __$.O5.init(A, K), A._zod.optin = "optional", __$.X2(A._zod, "values", () => K.innerType._zod.values), A._zod.parse = (q, Y) => {
      if (q.value === void 0) return q.value = K.defaultValue, q;
      let z = K.innerType._zod.run(q, Y);
      if (z instanceof Promise) return z.then(w => __$.KL8(w, K));
      return __$.KL8(z, K);
    };
  });
  __$.tF1 = __$._6("$ZodPrefault", (A, K) => {
    __$.O5.init(A, K), A._zod.optin = "optional", __$.X2(A._zod, "values", () => K.innerType._zod.values), A._zod.parse = (q, Y) => {
      if (q.value === void 0) q.value = K.defaultValue;
      return K.innerType._zod.run(q, Y);
    };
  }), __$.eF1 = __$._6("$ZodNonOptional", (A, K) => {
    __$.O5.init(A, K), __$.X2(A._zod, "values", () => {
      let q = K.innerType._zod.values;
      return q ? new Set([...q].filter(Y => Y !== void 0)) : void 0;
    }), A._zod.parse = (q, Y) => {
      let z = K.innerType._zod.run(q, Y);
      if (z instanceof Promise) return z.then(w => __$.qL8(w, A));
      return __$.qL8(z, A);
    };
  });
  __$.AQ1 = __$._6("$ZodSuccess", (A, K) => {
    __$.O5.init(A, K), A._zod.parse = (q, Y) => {
      let z = K.innerType._zod.run(q, Y);
      if (z instanceof Promise) return z.then(w => {
        return q.value = w.issues.length === 0, q;
      });
      return q.value = z.issues.length === 0, q;
    };
  }), __$.KQ1 = __$._6("$ZodCatch", (A, K) => {
    __$.O5.init(A, K), A._zod.optin = "optional", __$.X2(A._zod, "optout", () => K.innerType._zod.optout), __$.X2(A._zod, "values", () => K.innerType._zod.values), A._zod.parse = (q, Y) => {
      let z = K.innerType._zod.run(q, Y);
      if (z instanceof Promise) return z.then(w => {
        if (q.value = w.value, w.issues.length) q.value = K.catchValue({
          ...q,
          error: {
            issues: w.issues.map(H => __$.nN(H, Y, __$.UX()))
          },
          input: q.value
        }), q.issues = [];
        return q;
      });
      if (q.value = z.value, z.issues.length) q.value = K.catchValue({
        ...q,
        error: {
          issues: z.issues.map(w => __$.nN(w, Y, __$.UX()))
        },
        input: q.value
      }), q.issues = [];
      return q;
    };
  }), __$.qQ1 = __$._6("$ZodNaN", (A, K) => {
    __$.O5.init(A, K), A._zod.parse = (q, Y) => {
      if (typeof q.value !== "number" || !Number.isNaN(q.value)) return q.issues.push({
        input: q.value,
        inst: A,
        expected: "nan",
        code: "invalid_type"
      }), q;
      return q;
    };
  }), __$.MEA = __$._6("$ZodPipe", (A, K) => {
    __$.O5.init(A, K), __$.X2(A._zod, "values", () => K.in._zod.values), __$.X2(A._zod, "optin", () => K.in._zod.optin), __$.X2(A._zod, "optout", () => K.out._zod.optout), A._zod.parse = (q, Y) => {
      let z = K.in._zod.run(q, Y);
      if (z instanceof Promise) return z.then(w => __$.YL8(w, K, Y));
      return __$.YL8(z, K, Y);
    };
  });
  __$.YQ1 = __$._6("$ZodReadonly", (A, K) => {
    __$.O5.init(A, K), __$.X2(A._zod, "propValues", () => K.innerType._zod.propValues), __$.X2(A._zod, "values", () => K.innerType._zod.values), __$.X2(A._zod, "optin", () => K.innerType._zod.optin), __$.X2(A._zod, "optout", () => K.innerType._zod.optout), A._zod.parse = (q, Y) => {
      let z = K.innerType._zod.run(q, Y);
      if (z instanceof Promise) return z.then(__$.zL8);
      return __$.zL8(z);
    };
  });
  __$.zQ1 = __$._6("$ZodTemplateLiteral", (A, K) => {
    __$.O5.init(A, K);
    let q = [];
    for (let Y of K.parts) if (Y instanceof __$.O5) {
      if (!Y._zod.pattern) throw Error(`Invalid template literal part, no pattern found: ${[...Y._zod.traits].shift()}`);
      let z = Y._zod.pattern instanceof RegExp ? Y._zod.pattern.source : Y._zod.pattern;
      if (!z) throw Error(`Invalid template literal part: ${Y._zod.traits}`);
      let w = z.startsWith("^") ? 1 : 0,
        H = z.endsWith("$") ? z.length - 1 : z.length;
      q.push(z.slice(w, H));
    } else if (Y === null || __$.qg1.has(typeof Y)) q.push(__$.ZF(`${Y}`));else throw Error(`Invalid template literal part: ${Y}`);
    A._zod.pattern = new RegExp(`^${q.join("")}$`), A._zod.parse = (Y, z) => {
      if (typeof Y.value !== "string") return Y.issues.push({
        input: Y.value,
        inst: A,
        expected: "template_literal",
        code: "invalid_type"
      }), Y;
      if (A._zod.pattern.lastIndex = 0, !A._zod.pattern.test(Y.value)) return Y.issues.push({
        input: Y.value,
        inst: A,
        code: "invalid_format",
        format: "template_literal",
        pattern: A._zod.pattern.source
      }), Y;
      return Y;
    };
  }), __$.wQ1 = __$._6("$ZodPromise", (A, K) => {
    __$.O5.init(A, K), A._zod.parse = (q, Y) => {
      return Promise.resolve(q.value).then(z => K.innerType._zod.run({
        value: z,
        issues: []
      }, Y));
    };
  }), __$.HQ1 = __$._6("$ZodLazy", (A, K) => {
    __$.O5.init(A, K), __$.X2(A._zod, "innerType", () => K.getter()), __$.X2(A._zod, "pattern", () => A._zod.innerType._zod.pattern), __$.X2(A._zod, "propValues", () => A._zod.innerType._zod.propValues), __$.X2(A._zod, "optin", () => A._zod.innerType._zod.optin), __$.X2(A._zod, "optout", () => A._zod.innerType._zod.optout), A._zod.parse = (q, Y) => {
      return A._zod.innerType._zod.run(q, Y);
    };
  }), __$.JQ1 = __$._6("$ZodCustom", (A, K) => {
    __$.KO.init(A, K), __$.O5.init(A, K), A._zod.parse = (q, Y) => {
      return q;
    }, A._zod.check = q => {
      let Y = q.value,
        z = K.fn(Y);
      if (z instanceof Promise) return z.then(w => __$.wL8(w, q, Y, A));
      __$.wL8(z, q, Y, A);
      return;
    };
  });
});

// Register to shared state
__$.PEA = PEA;
