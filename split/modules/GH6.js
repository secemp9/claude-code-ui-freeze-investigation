// Module: GH6
// Dependencies: wn4, bw6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var GH6 = v(XC => {
  var gr9 = XC && XC.__importDefault || function (A) {
      return A && A.__esModule ? A : {
        default: A
      };
    },
    Hn4;
  Object.defineProperty(XC, "__esModule", {
    value: !0
  });
  XC.GaxiosError = XC.GAXIOS_ERROR_SYMBOL = void 0;
  XC.defaultErrorRedactor = On4;
  var Fr9 = CA("url"),
    $H6 = __$.wn4(),
    Jn4 = gr9(__$.bw6());
  XC.GAXIOS_ERROR_SYMBOL = Symbol.for(`${$H6.pkg.name}-gaxios-error`);
  class _H6 extends Error {
    static [(Hn4 = XC.GAXIOS_ERROR_SYMBOL, Symbol.hasInstance)](A) {
      if (A && typeof A === "object" && XC.GAXIOS_ERROR_SYMBOL in A && A[XC.GAXIOS_ERROR_SYMBOL] === $H6.pkg.version) return !0;
      return Function.prototype[Symbol.hasInstance].call(_H6, A);
    }
    constructor(A, K, q, Y) {
      var z;
      super(A);
      if (this.config = K, this.response = q, this.error = Y, this[Hn4] = $H6.pkg.version, this.config = (0, Jn4.default)(!0, {}, K), this.response) this.response.config = (0, Jn4.default)(!0, {}, this.response.config);
      if (this.response) {
        try {
          this.response.data = Qr9(this.config.responseType, (z = this.response) === null || z === void 0 ? void 0 : z.data);
        } catch (w) {}
        this.status = this.response.status;
      }
      if (Y && "code" in Y && Y.code) this.code = Y.code;
      if (K.errorRedactor) K.errorRedactor({
        config: this.config,
        response: this.response
      });
    }
  }
  XC.GaxiosError = _H6;
  function Qr9(A, K) {
    switch (A) {
      case "stream":
        return K;
      case "json":
        return JSON.parse(JSON.stringify(K));
      case "arraybuffer":
        return JSON.parse(Buffer.from(K).toString("utf8"));
      case "blob":
        return JSON.parse(K.text());
      default:
        return K;
    }
  }
  function On4(A) {
    function q(w) {
      if (!w) return;
      for (let H of Object.keys(w)) {
        if (/^authentication$/i.test(H)) w[H] = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
        if (/^authorization$/i.test(H)) w[H] = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
        if (/secret/i.test(H)) w[H] = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
      }
    }
    function Y(w, H) {
      if (typeof w === "object" && w !== null && typeof w[H] === "string") {
        let J = w[H];
        if (/grant_type=/i.test(J) || /assertion=/i.test(J) || /secret/i.test(J)) w[H] = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
      }
    }
    function z(w) {
      if (typeof w === "object" && w !== null) {
        if ("grant_type" in w) w.grant_type = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
        if ("assertion" in w) w.assertion = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
        if ("client_secret" in w) w.client_secret = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
      }
    }
    if (A.config) {
      q(A.config.headers), Y(A.config, "data"), z(A.config.data), Y(A.config, "body"), z(A.config.body);
      try {
        let w = new Fr9.URL("", A.config.url);
        if (w.searchParams.has("token")) w.searchParams.set("token", "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.");
        if (w.searchParams.has("client_secret")) w.searchParams.set("client_secret", "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.");
        A.config.url = w.toString();
      } catch (w) {}
    }
    if (A.response) On4({
      config: A.response.config
    }), q(A.response.headers), Y(A.response, "data"), z(A.response.data);
    return A;
  }
});

// Register to shared state
__$.GH6 = GH6;
