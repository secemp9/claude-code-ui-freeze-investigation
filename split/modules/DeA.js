// Module: DeA
// Dependencies: xHA, GeA, Qq, KO, _6, nC8, ZeA, WeA, Fg1, em1
//   ... and 28 more

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var DeA = k(() => {
  __$.xHA();
  __$.GeA();
  __$.Qq();
  __$.KO = __$._6("$ZodCheck", (A, K) => {
    var q;
    A._zod ?? (A._zod = {}), A._zod.def = K, (q = A._zod).onattach ?? (q.onattach = []);
  }), __$.nC8 = {
    number: "number",
    bigint: "bigint",
    object: "date"
  }, __$.ZeA = __$._6("$ZodCheckLessThan", (A, K) => {
    __$.KO.init(A, K);
    let q = __$.nC8[typeof K.value];
    A._zod.onattach.push(Y => {
      let z = Y._zod.bag,
        w = (K.inclusive ? z.maximum : z.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
      if (K.value < w) if (K.inclusive) z.maximum = K.value;else z.exclusiveMaximum = K.value;
    }), A._zod.check = Y => {
      if (K.inclusive ? Y.value <= K.value : Y.value < K.value) return;
      Y.issues.push({
        origin: q,
        code: "too_big",
        maximum: K.value,
        input: Y.value,
        inclusive: K.inclusive,
        inst: A,
        continue: !K.abort
      });
    };
  }), __$.WeA = __$._6("$ZodCheckGreaterThan", (A, K) => {
    __$.KO.init(A, K);
    let q = __$.nC8[typeof K.value];
    A._zod.onattach.push(Y => {
      let z = Y._zod.bag,
        w = (K.inclusive ? z.minimum : z.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
      if (K.value > w) if (K.inclusive) z.minimum = K.value;else z.exclusiveMinimum = K.value;
    }), A._zod.check = Y => {
      if (K.inclusive ? Y.value >= K.value : Y.value > K.value) return;
      Y.issues.push({
        origin: q,
        code: "too_small",
        minimum: K.value,
        input: Y.value,
        inclusive: K.inclusive,
        inst: A,
        continue: !K.abort
      });
    };
  }), __$.Fg1 = __$._6("$ZodCheckMultipleOf", (A, K) => {
    __$.KO.init(A, K), A._zod.onattach.push(q => {
      var Y;
      (Y = q._zod.bag).multipleOf ?? (Y.multipleOf = K.value);
    }), A._zod.check = q => {
      if (typeof q.value !== typeof K.value) throw Error("Cannot mix number and bigint in multiple_of check.");
      if (typeof q.value === "bigint" ? q.value % K.value === BigInt(0) : __$.em1(q.value, K.value) === 0) return;
      q.issues.push({
        origin: typeof q.value,
        code: "not_multiple_of",
        divisor: K.value,
        input: q.value,
        inst: A,
        continue: !K.abort
      });
    };
  }), __$.Qg1 = __$._6("$ZodCheckNumberFormat", (A, K) => {
    __$.KO.init(A, K), K.format = K.format || "float64";
    let q = K.format?.includes("int"),
      Y = q ? "int" : "number",
      [z, w] = __$.zg1[K.format];
    A._zod.onattach.push(H => {
      let J = H._zod.bag;
      if (J.format = K.format, J.minimum = z, J.maximum = w, q) J.pattern = __$.hg1;
    }), A._zod.check = H => {
      let J = H.value;
      if (q) {
        if (!Number.isInteger(J)) {
          H.issues.push({
            expected: Y,
            format: K.format,
            code: "invalid_type",
            input: J,
            inst: A
          });
          return;
        }
        if (!Number.isSafeInteger(J)) {
          if (J > 0) H.issues.push({
            input: J,
            code: "too_big",
            maximum: Number.MAX_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst: A,
            origin: Y,
            continue: !K.abort
          });else H.issues.push({
            input: J,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst: A,
            origin: Y,
            continue: !K.abort
          });
          return;
        }
      }
      if (J < z) H.issues.push({
        origin: "number",
        input: J,
        code: "too_small",
        minimum: z,
        inclusive: !0,
        inst: A,
        continue: !K.abort
      });
      if (J > w) H.issues.push({
        origin: "number",
        input: J,
        code: "too_big",
        maximum: w,
        inst: A
      });
    };
  }), __$.Ug1 = __$._6("$ZodCheckBigIntFormat", (A, K) => {
    __$.KO.init(A, K);
    let [q, Y] = __$.wg1[K.format];
    A._zod.onattach.push(z => {
      let w = z._zod.bag;
      w.format = K.format, w.minimum = q, w.maximum = Y;
    }), A._zod.check = z => {
      let w = z.value;
      if (w < q) z.issues.push({
        origin: "bigint",
        input: w,
        code: "too_small",
        minimum: q,
        inclusive: !0,
        inst: A,
        continue: !K.abort
      });
      if (w > Y) z.issues.push({
        origin: "bigint",
        input: w,
        code: "too_big",
        maximum: Y,
        inst: A
      });
    };
  }), __$.pg1 = __$._6("$ZodCheckMaxSize", (A, K) => {
    __$.KO.init(A, K), A._zod.when = q => {
      let Y = q.value;
      return !__$.Ti(Y) && Y.size !== void 0;
    }, A._zod.onattach.push(q => {
      let Y = q._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
      if (K.maximum < Y) q._zod.bag.maximum = K.maximum;
    }), A._zod.check = q => {
      let Y = q.value;
      if (Y.size <= K.maximum) return;
      q.issues.push({
        origin: __$.HEA(Y),
        code: "too_big",
        maximum: K.maximum,
        input: Y,
        inst: A,
        continue: !K.abort
      });
    };
  }), __$.dg1 = __$._6("$ZodCheckMinSize", (A, K) => {
    __$.KO.init(A, K), A._zod.when = q => {
      let Y = q.value;
      return !__$.Ti(Y) && Y.size !== void 0;
    }, A._zod.onattach.push(q => {
      let Y = q._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
      if (K.minimum > Y) q._zod.bag.minimum = K.minimum;
    }), A._zod.check = q => {
      let Y = q.value;
      if (Y.size >= K.minimum) return;
      q.issues.push({
        origin: __$.HEA(Y),
        code: "too_small",
        minimum: K.minimum,
        input: Y,
        inst: A,
        continue: !K.abort
      });
    };
  }), __$.cg1 = __$._6("$ZodCheckSizeEquals", (A, K) => {
    __$.KO.init(A, K), A._zod.when = q => {
      let Y = q.value;
      return !__$.Ti(Y) && Y.size !== void 0;
    }, A._zod.onattach.push(q => {
      let Y = q._zod.bag;
      Y.minimum = K.size, Y.maximum = K.size, Y.size = K.size;
    }), A._zod.check = q => {
      let Y = q.value,
        z = Y.size;
      if (z === K.size) return;
      let w = z > K.size;
      q.issues.push({
        origin: __$.HEA(Y),
        ...(w ? {
          code: "too_big",
          maximum: K.size
        } : {
          code: "too_small",
          minimum: K.size
        }),
        inclusive: !0,
        exact: !0,
        input: q.value,
        inst: A,
        continue: !K.abort
      });
    };
  }), __$.lg1 = __$._6("$ZodCheckMaxLength", (A, K) => {
    __$.KO.init(A, K), A._zod.when = q => {
      let Y = q.value;
      return !__$.Ti(Y) && Y.length !== void 0;
    }, A._zod.onattach.push(q => {
      let Y = q._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
      if (K.maximum < Y) q._zod.bag.maximum = K.maximum;
    }), A._zod.check = q => {
      let Y = q.value;
      if (Y.length <= K.maximum) return;
      let w = __$.JEA(Y);
      q.issues.push({
        origin: w,
        code: "too_big",
        maximum: K.maximum,
        inclusive: !0,
        input: Y,
        inst: A,
        continue: !K.abort
      });
    };
  }), __$.ig1 = __$._6("$ZodCheckMinLength", (A, K) => {
    __$.KO.init(A, K), A._zod.when = q => {
      let Y = q.value;
      return !__$.Ti(Y) && Y.length !== void 0;
    }, A._zod.onattach.push(q => {
      let Y = q._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
      if (K.minimum > Y) q._zod.bag.minimum = K.minimum;
    }), A._zod.check = q => {
      let Y = q.value;
      if (Y.length >= K.minimum) return;
      let w = __$.JEA(Y);
      q.issues.push({
        origin: w,
        code: "too_small",
        minimum: K.minimum,
        inclusive: !0,
        input: Y,
        inst: A,
        continue: !K.abort
      });
    };
  }), __$.ng1 = __$._6("$ZodCheckLengthEquals", (A, K) => {
    __$.KO.init(A, K), A._zod.when = q => {
      let Y = q.value;
      return !__$.Ti(Y) && Y.length !== void 0;
    }, A._zod.onattach.push(q => {
      let Y = q._zod.bag;
      Y.minimum = K.length, Y.maximum = K.length, Y.length = K.length;
    }), A._zod.check = q => {
      let Y = q.value,
        z = Y.length;
      if (z === K.length) return;
      let w = __$.JEA(Y),
        H = z > K.length;
      q.issues.push({
        origin: w,
        ...(H ? {
          code: "too_big",
          maximum: K.length
        } : {
          code: "too_small",
          minimum: K.length
        }),
        inclusive: !0,
        exact: !0,
        input: q.value,
        inst: A,
        continue: !K.abort
      });
    };
  }), __$.FHA = __$._6("$ZodCheckStringFormat", (A, K) => {
    var q, Y;
    if (__$.KO.init(A, K), A._zod.onattach.push(z => {
      let w = z._zod.bag;
      if (w.format = K.format, K.pattern) w.patterns ?? (w.patterns = new Set()), w.patterns.add(K.pattern);
    }), K.pattern) (q = A._zod).check ?? (q.check = z => {
      if (K.pattern.lastIndex = 0, K.pattern.test(z.value)) return;
      z.issues.push({
        origin: "string",
        code: "invalid_format",
        format: K.format,
        input: z.value,
        ...(K.pattern ? {
          pattern: K.pattern.toString()
        } : {}),
        inst: A,
        continue: !K.abort
      });
    });else (Y = A._zod).check ?? (Y.check = () => {});
  }), __$.rg1 = __$._6("$ZodCheckRegex", (A, K) => {
    __$.FHA.init(A, K), A._zod.check = q => {
      if (K.pattern.lastIndex = 0, K.pattern.test(q.value)) return;
      q.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "regex",
        input: q.value,
        pattern: K.pattern.toString(),
        inst: A,
        continue: !K.abort
      });
    };
  }), __$.og1 = __$._6("$ZodCheckLowerCase", (A, K) => {
    K.pattern ?? (K.pattern = __$.mg1), __$.FHA.init(A, K);
  }), __$.ag1 = __$._6("$ZodCheckUpperCase", (A, K) => {
    K.pattern ?? (K.pattern = __$.gg1), __$.FHA.init(A, K);
  }), __$.sg1 = __$._6("$ZodCheckIncludes", (A, K) => {
    __$.KO.init(A, K);
    let q = __$.ZF(K.includes),
      Y = new RegExp(typeof K.position === "number" ? `^.{${K.position}}${q}` : q);
    K.pattern = Y, A._zod.onattach.push(z => {
      let w = z._zod.bag;
      w.patterns ?? (w.patterns = new Set()), w.patterns.add(Y);
    }), A._zod.check = z => {
      if (z.value.includes(K.includes, K.position)) return;
      z.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "includes",
        includes: K.includes,
        input: z.value,
        inst: A,
        continue: !K.abort
      });
    };
  }), __$.tg1 = __$._6("$ZodCheckStartsWith", (A, K) => {
    __$.KO.init(A, K);
    let q = new RegExp(`^${__$.ZF(K.prefix)}.*`);
    K.pattern ?? (K.pattern = q), A._zod.onattach.push(Y => {
      let z = Y._zod.bag;
      z.patterns ?? (z.patterns = new Set()), z.patterns.add(q);
    }), A._zod.check = Y => {
      if (Y.value.startsWith(K.prefix)) return;
      Y.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "starts_with",
        prefix: K.prefix,
        input: Y.value,
        inst: A,
        continue: !K.abort
      });
    };
  }), __$.eg1 = __$._6("$ZodCheckEndsWith", (A, K) => {
    __$.KO.init(A, K);
    let q = new RegExp(`.*${__$.ZF(K.suffix)}$`);
    K.pattern ?? (K.pattern = q), A._zod.onattach.push(Y => {
      let z = Y._zod.bag;
      z.patterns ?? (z.patterns = new Set()), z.patterns.add(q);
    }), A._zod.check = Y => {
      if (Y.value.endsWith(K.suffix)) return;
      Y.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "ends_with",
        suffix: K.suffix,
        input: Y.value,
        inst: A,
        continue: !K.abort
      });
    };
  });
  __$.AF1 = __$._6("$ZodCheckProperty", (A, K) => {
    __$.KO.init(A, K), A._zod.check = q => {
      let Y = K.schema._zod.run({
        value: q.value[K.property],
        issues: []
      }, {});
      if (Y instanceof Promise) return Y.then(z => __$.iC8(z, q, K.property));
      __$.iC8(Y, q, K.property);
      return;
    };
  }), __$.KF1 = __$._6("$ZodCheckMimeType", (A, K) => {
    __$.KO.init(A, K);
    let q = new Set(K.mime);
    A._zod.onattach.push(Y => {
      Y._zod.bag.mime = K.mime;
    }), A._zod.check = Y => {
      if (q.has(Y.value.type)) return;
      Y.issues.push({
        code: "invalid_value",
        values: K.mime,
        input: Y.value.type,
        inst: A
      });
    };
  }), __$.qF1 = __$._6("$ZodCheckOverwrite", (A, K) => {
    __$.KO.init(A, K), A._zod.check = q => {
      q.value = K.tx(q.value);
    };
  });
});

// Register to shared state
__$.DeA = DeA;
