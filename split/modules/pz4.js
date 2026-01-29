// Module: pz4
// Dependencies: Fz4, W46, SZ, d8A

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var pz4 = v((D8w, Uz4) => {
  var {
      parseSetCookie: Li3
    } = __$.Fz4(),
    {
      stringify: Ri3
    } = __$.W46(),
    {
      webidl: o9
    } = __$.SZ(),
    {
      Headers: Yq1
    } = __$.d8A();
  function yi3(A) {
    o9.argumentLengthCheck(arguments, 1, "getCookies"), o9.brandCheck(A, Yq1, {
      strict: !1
    });
    let K = A.get("cookie"),
      q = {};
    if (!K) return q;
    for (let Y of K.split(";")) {
      let [z, ...w] = Y.split("=");
      q[z.trim()] = w.join("=");
    }
    return q;
  }
  function Ii3(A, K, q) {
    o9.brandCheck(A, Yq1, {
      strict: !1
    });
    let Y = "deleteCookie";
    o9.argumentLengthCheck(arguments, 2, Y), K = o9.converters.DOMString(K, Y, "name"), q = o9.converters.DeleteCookieAttributes(q), Qz4(A, {
      name: K,
      value: "",
      expires: new Date(0),
      ...q
    });
  }
  function Si3(A) {
    o9.argumentLengthCheck(arguments, 1, "getSetCookies"), o9.brandCheck(A, Yq1, {
      strict: !1
    });
    let K = A.getSetCookie();
    if (!K) return [];
    return K.map(q => Li3(q));
  }
  function Qz4(A, K) {
    o9.argumentLengthCheck(arguments, 2, "setCookie"), o9.brandCheck(A, Yq1, {
      strict: !1
    }), K = o9.converters.Cookie(K);
    let q = Ri3(K);
    if (q) A.append("Set-Cookie", q);
  }
  o9.converters.DeleteCookieAttributes = o9.dictionaryConverter([{
    converter: o9.nullableConverter(o9.converters.DOMString),
    key: "path",
    defaultValue: () => null
  }, {
    converter: o9.nullableConverter(o9.converters.DOMString),
    key: "domain",
    defaultValue: () => null
  }]);
  o9.converters.Cookie = o9.dictionaryConverter([{
    converter: o9.converters.DOMString,
    key: "name"
  }, {
    converter: o9.converters.DOMString,
    key: "value"
  }, {
    converter: o9.nullableConverter(A => {
      if (typeof A === "number") return o9.converters["unsigned long long"](A);
      return new Date(A);
    }),
    key: "expires",
    defaultValue: () => null
  }, {
    converter: o9.nullableConverter(o9.converters["long long"]),
    key: "maxAge",
    defaultValue: () => null
  }, {
    converter: o9.nullableConverter(o9.converters.DOMString),
    key: "domain",
    defaultValue: () => null
  }, {
    converter: o9.nullableConverter(o9.converters.DOMString),
    key: "path",
    defaultValue: () => null
  }, {
    converter: o9.nullableConverter(o9.converters.boolean),
    key: "secure",
    defaultValue: () => null
  }, {
    converter: o9.nullableConverter(o9.converters.boolean),
    key: "httpOnly",
    defaultValue: () => null
  }, {
    converter: o9.converters.USVString,
    key: "sameSite",
    allowedValues: ["Strict", "Lax", "None"]
  }, {
    converter: o9.sequenceConverter(o9.converters.DOMString),
    key: "unparsed",
    defaultValue: () => []
  }]);
  Uz4.exports = {
    getCookies: yi3,
    deleteCookie: Ii3,
    getSetCookies: Si3,
    setCookie: Qz4
  };
});

// Register to shared state
__$.pz4 = pz4;
