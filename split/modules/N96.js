// Module: N96
// Dependencies: _$A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var N96 = v(uM9 => {
  var hM9 = __$._$A();
  function f96(A, K) {
    let q = A[0],
      Y = q === "-" || q === "+" ? A.substring(1) : A,
      z = H => K ? BigInt(H) : Number(H),
      w = Y.replace(/_/g, "").split(":").reduce((H, J) => H * z(60) + z(J), z(0));
    return q === "-" ? z(-1) * w : w;
  }
  function rI4(A) {
    let {
        value: K
      } = A,
      q = H => H;
    if (typeof K === "bigint") q = H => BigInt(H);else if (isNaN(K) || !isFinite(K)) return hM9.stringifyNumber(A);
    let Y = "";
    if (K < 0) Y = "-", K *= q(-1);
    let z = q(60),
      w = [K % z];
    if (K < 60) w.unshift(0);else if (K = (K - w[0]) / z, w.unshift(K % z), K >= 60) K = (K - w[0]) / z, w.unshift(K);
    return Y + w.map(H => String(H).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
  }
  var bM9 = {
      identify: A => typeof A === "bigint" || Number.isInteger(A),
      default: !0,
      tag: "tag:yaml.org,2002:int",
      format: "TIME",
      test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
      resolve: (A, K, {
        intAsBigInt: q
      }) => f96(A, q),
      stringify: rI4
    },
    xM9 = {
      identify: A => typeof A === "number",
      default: !0,
      tag: "tag:yaml.org,2002:float",
      format: "TIME",
      test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
      resolve: A => f96(A, !1),
      stringify: rI4
    },
    oI4 = {
      identify: A => A instanceof Date,
      default: !0,
      tag: "tag:yaml.org,2002:timestamp",
      test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
      resolve(A) {
        let K = A.match(oI4.test);
        if (!K) throw Error("!!timestamp expects a date, starting with yyyy-mm-dd");
        let [, q, Y, z, w, H, J] = K.map(Number),
          O = K[7] ? Number((K[7] + "00").substr(1, 3)) : 0,
          X = Date.UTC(q, Y - 1, z, w || 0, H || 0, J || 0, O),
          $ = K[8];
        if ($ && $ !== "Z") {
          let _ = f96($, !1);
          if (Math.abs(_) < 30) _ *= 60;
          X -= 60000 * _;
        }
        return new Date(X);
      },
      stringify: ({
        value: A
      }) => A?.toISOString().replace(/(T00:00:00)?\.000Z$/, "") ?? ""
    };
  uM9.floatTime = xM9;
  uM9.intTime = bM9;
  uM9.timestamp = oI4;
});

// Register to shared state
__$.N96 = N96;
