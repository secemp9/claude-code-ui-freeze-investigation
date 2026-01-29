// Module: Lr4
// Dependencies: NH6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Lr4 = v((PTw, Cr4) => {
  var lz1 = null,
    va9 = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,
    Ea9 = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/,
    ka9 = function (A) {
      var K = {
        strict: !1,
        storeAsString: !1,
        alwaysParseAsBig: !1,
        useNativeBigInt: !1,
        protoAction: "error",
        constructorAction: "error"
      };
      if (A !== void 0 && A !== null) {
        if (A.strict === !0) K.strict = !0;
        if (A.storeAsString === !0) K.storeAsString = !0;
        if (K.alwaysParseAsBig = A.alwaysParseAsBig === !0 ? A.alwaysParseAsBig : !1, K.useNativeBigInt = A.useNativeBigInt === !0 ? A.useNativeBigInt : !1, typeof A.constructorAction < "u") if (A.constructorAction === "error" || A.constructorAction === "ignore" || A.constructorAction === "preserve") K.constructorAction = A.constructorAction;else throw Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${A.constructorAction}`);
        if (typeof A.protoAction < "u") if (A.protoAction === "error" || A.protoAction === "ignore" || A.protoAction === "preserve") K.protoAction = A.protoAction;else throw Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${A.protoAction}`);
      }
      var q,
        Y,
        z = {
          '"': '"',
          "\\": "\\",
          "/": "/",
          b: "\b",
          f: "\f",
          n: `
`,
          r: "\r",
          t: "\t"
        },
        w,
        H = function (D) {
          throw {
            name: "SyntaxError",
            message: D,
            at: q,
            text: w
          };
        },
        J = function (D) {
          if (D && D !== Y) H("Expected '" + D + "' instead of '" + Y + "'");
          return Y = w.charAt(q), q += 1, Y;
        },
        O = function () {
          var D,
            j = "";
          if (Y === "-") j = "-", J("-");
          while (Y >= "0" && Y <= "9") j += Y, J();
          if (Y === ".") {
            j += ".";
            while (J() && Y >= "0" && Y <= "9") j += Y;
          }
          if (Y === "e" || Y === "E") {
            if (j += Y, J(), Y === "-" || Y === "+") j += Y, J();
            while (Y >= "0" && Y <= "9") j += Y, J();
          }
          if (D = +j, !isFinite(D)) H("Bad number");else {
            if (lz1 == null) lz1 = __$.NH6();
            if (j.length > 15) return K.storeAsString ? j : K.useNativeBigInt ? BigInt(j) : new lz1(j);else return !K.alwaysParseAsBig ? D : K.useNativeBigInt ? BigInt(D) : new lz1(D);
          }
        },
        X = function () {
          var D,
            j,
            M = "",
            P;
          if (Y === '"') {
            var f = q;
            while (J()) {
              if (Y === '"') {
                if (q - 1 > f) M += w.substring(f, q - 1);
                return J(), M;
              }
              if (Y === "\\") {
                if (q - 1 > f) M += w.substring(f, q - 1);
                if (J(), Y === "u") {
                  P = 0;
                  for (j = 0; j < 4; j += 1) {
                    if (D = parseInt(J(), 16), !isFinite(D)) break;
                    P = P * 16 + D;
                  }
                  M += String.fromCharCode(P);
                } else if (typeof z[Y] === "string") M += z[Y];else break;
                f = q;
              }
            }
          }
          H("Bad string");
        },
        $ = function () {
          while (Y && Y <= " ") J();
        },
        _ = function () {
          switch (Y) {
            case "t":
              return J("t"), J("r"), J("u"), J("e"), !0;
            case "f":
              return J("f"), J("a"), J("l"), J("s"), J("e"), !1;
            case "n":
              return J("n"), J("u"), J("l"), J("l"), null;
          }
          H("Unexpected '" + Y + "'");
        },
        G,
        Z = function () {
          var D = [];
          if (Y === "[") {
            if (J("["), $(), Y === "]") return J("]"), D;
            while (Y) {
              if (D.push(G()), $(), Y === "]") return J("]"), D;
              J(","), $();
            }
          }
          H("Bad array");
        },
        W = function () {
          var D,
            j = Object.create(null);
          if (Y === "{") {
            if (J("{"), $(), Y === "}") return J("}"), j;
            while (Y) {
              if (D = X(), $(), J(":"), K.strict === !0 && Object.hasOwnProperty.call(j, D)) H('Duplicate key "' + D + '"');
              if (va9.test(D) === !0) {
                if (K.protoAction === "error") H("Object contains forbidden prototype property");else if (K.protoAction === "ignore") G();else j[D] = G();
              } else if (Ea9.test(D) === !0) {
                if (K.constructorAction === "error") H("Object contains forbidden constructor property");else if (K.constructorAction === "ignore") G();else j[D] = G();
              } else j[D] = G();
              if ($(), Y === "}") return J("}"), j;
              J(","), $();
            }
          }
          H("Bad object");
        };
      return G = function () {
        switch ($(), Y) {
          case "{":
            return W();
          case "[":
            return Z();
          case '"':
            return X();
          case "-":
            return O();
          default:
            return Y >= "0" && Y <= "9" ? O() : _();
        }
      }, function (D, j) {
        var M;
        if (w = D + "", q = 0, Y = " ", M = G(), $(), Y) H("Syntax error");
        return typeof j === "function" ? function P(f, N) {
          var T,
            C,
            R = f[N];
          if (R && typeof R === "object") Object.keys(R).forEach(function (x) {
            if (C = P(R, x), C !== void 0) R[x] = C;else delete R[x];
          });
          return j.call(f, N, R);
        }({
          "": M
        }, "") : M;
      };
    };
  Cr4.exports = ka9;
});

// Register to shared state
__$.Lr4 = Lr4;
