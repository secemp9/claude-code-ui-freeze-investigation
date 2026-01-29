// Module: Fi4
// Dependencies: Cz1, Rz1, ui4

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var Fi4 = v(in9 => {
  var uD = __$.Cz1(),
    lV = __$.Rz1(),
    IY = lV.implSymbol,
    cn9 = lV.ctorRegistrySymbol;
  in9.is = A => {
    return lV.isObject(A) && lV.hasOwn(A, IY) && A[IY] instanceof $u.implementation;
  };
  in9.isImpl = A => {
    return lV.isObject(A) && A instanceof $u.implementation;
  };
  in9.convert = (A, K, {
    context: q = "The provided value"
  } = {}) => {
    if (in9.is(K)) return lV.implForWrapper(K);
    throw new A.TypeError(`${q} is not of type 'URL'.`);
  };
  function Bi4(A, K) {
    let q;
    if (K !== void 0) q = K.prototype;
    if (!lV.isObject(q)) q = A[cn9].URL.prototype;
    return Object.create(q);
  }
  in9.create = (A, K, q) => {
    let Y = Bi4(A);
    return in9.setup(Y, A, K, q);
  };
  in9.createImpl = (A, K, q) => {
    let Y = in9.create(A, K, q);
    return lV.implForWrapper(Y);
  };
  in9._internalSetup = (A, K) => {};
  in9.setup = (A, K, q = [], Y = {}) => {
    if (Y.wrapper = A, in9._internalSetup(A, K), Object.defineProperty(A, IY, {
      value: new $u.implementation(K, q, Y),
      configurable: !0
    }), A[IY][lV.wrapperSymbol] = A, $u.init) $u.init(A[IY]);
    return A;
  };
  in9.new = (A, K) => {
    let q = Bi4(A, K);
    if (in9._internalSetup(q, A), Object.defineProperty(q, IY, {
      value: Object.create($u.implementation.prototype),
      configurable: !0
    }), q[IY][lV.wrapperSymbol] = q, $u.init) $u.init(q[IY]);
    return q[IY];
  };
  var ln9 = new Set(["Window", "Worker"]);
  in9.install = (A, K) => {
    if (!K.some(z => ln9.has(z))) return;
    let q = lV.initCtorRegistry(A);
    class Y {
      constructor(z) {
        if (arguments.length < 1) throw new A.TypeError(`Failed to construct 'URL': 1 argument required, but only ${arguments.length} present.`);
        let w = [];
        {
          let H = arguments[0];
          H = uD.USVString(H, {
            context: "Failed to construct 'URL': parameter 1",
            globals: A
          }), w.push(H);
        }
        {
          let H = arguments[1];
          if (H !== void 0) H = uD.USVString(H, {
            context: "Failed to construct 'URL': parameter 2",
            globals: A
          });
          w.push(H);
        }
        return in9.setup(Object.create(new.target.prototype), A, w);
      }
      toJSON() {
        let z = this !== null && this !== void 0 ? this : A;
        if (!in9.is(z)) throw new A.TypeError("'toJSON' called on an object that is not a valid instance of URL.");
        return z[IY].toJSON();
      }
      get href() {
        let z = this !== null && this !== void 0 ? this : A;
        if (!in9.is(z)) throw new A.TypeError("'get href' called on an object that is not a valid instance of URL.");
        return z[IY].href;
      }
      set href(z) {
        let w = this !== null && this !== void 0 ? this : A;
        if (!in9.is(w)) throw new A.TypeError("'set href' called on an object that is not a valid instance of URL.");
        z = uD.USVString(z, {
          context: "Failed to set the 'href' property on 'URL': The provided value",
          globals: A
        }), w[IY].href = z;
      }
      toString() {
        let z = this;
        if (!in9.is(z)) throw new A.TypeError("'toString' called on an object that is not a valid instance of URL.");
        return z[IY].href;
      }
      get origin() {
        let z = this !== null && this !== void 0 ? this : A;
        if (!in9.is(z)) throw new A.TypeError("'get origin' called on an object that is not a valid instance of URL.");
        return z[IY].origin;
      }
      get protocol() {
        let z = this !== null && this !== void 0 ? this : A;
        if (!in9.is(z)) throw new A.TypeError("'get protocol' called on an object that is not a valid instance of URL.");
        return z[IY].protocol;
      }
      set protocol(z) {
        let w = this !== null && this !== void 0 ? this : A;
        if (!in9.is(w)) throw new A.TypeError("'set protocol' called on an object that is not a valid instance of URL.");
        z = uD.USVString(z, {
          context: "Failed to set the 'protocol' property on 'URL': The provided value",
          globals: A
        }), w[IY].protocol = z;
      }
      get username() {
        let z = this !== null && this !== void 0 ? this : A;
        if (!in9.is(z)) throw new A.TypeError("'get username' called on an object that is not a valid instance of URL.");
        return z[IY].username;
      }
      set username(z) {
        let w = this !== null && this !== void 0 ? this : A;
        if (!in9.is(w)) throw new A.TypeError("'set username' called on an object that is not a valid instance of URL.");
        z = uD.USVString(z, {
          context: "Failed to set the 'username' property on 'URL': The provided value",
          globals: A
        }), w[IY].username = z;
      }
      get password() {
        let z = this !== null && this !== void 0 ? this : A;
        if (!in9.is(z)) throw new A.TypeError("'get password' called on an object that is not a valid instance of URL.");
        return z[IY].password;
      }
      set password(z) {
        let w = this !== null && this !== void 0 ? this : A;
        if (!in9.is(w)) throw new A.TypeError("'set password' called on an object that is not a valid instance of URL.");
        z = uD.USVString(z, {
          context: "Failed to set the 'password' property on 'URL': The provided value",
          globals: A
        }), w[IY].password = z;
      }
      get host() {
        let z = this !== null && this !== void 0 ? this : A;
        if (!in9.is(z)) throw new A.TypeError("'get host' called on an object that is not a valid instance of URL.");
        return z[IY].host;
      }
      set host(z) {
        let w = this !== null && this !== void 0 ? this : A;
        if (!in9.is(w)) throw new A.TypeError("'set host' called on an object that is not a valid instance of URL.");
        z = uD.USVString(z, {
          context: "Failed to set the 'host' property on 'URL': The provided value",
          globals: A
        }), w[IY].host = z;
      }
      get hostname() {
        let z = this !== null && this !== void 0 ? this : A;
        if (!in9.is(z)) throw new A.TypeError("'get hostname' called on an object that is not a valid instance of URL.");
        return z[IY].hostname;
      }
      set hostname(z) {
        let w = this !== null && this !== void 0 ? this : A;
        if (!in9.is(w)) throw new A.TypeError("'set hostname' called on an object that is not a valid instance of URL.");
        z = uD.USVString(z, {
          context: "Failed to set the 'hostname' property on 'URL': The provided value",
          globals: A
        }), w[IY].hostname = z;
      }
      get port() {
        let z = this !== null && this !== void 0 ? this : A;
        if (!in9.is(z)) throw new A.TypeError("'get port' called on an object that is not a valid instance of URL.");
        return z[IY].port;
      }
      set port(z) {
        let w = this !== null && this !== void 0 ? this : A;
        if (!in9.is(w)) throw new A.TypeError("'set port' called on an object that is not a valid instance of URL.");
        z = uD.USVString(z, {
          context: "Failed to set the 'port' property on 'URL': The provided value",
          globals: A
        }), w[IY].port = z;
      }
      get pathname() {
        let z = this !== null && this !== void 0 ? this : A;
        if (!in9.is(z)) throw new A.TypeError("'get pathname' called on an object that is not a valid instance of URL.");
        return z[IY].pathname;
      }
      set pathname(z) {
        let w = this !== null && this !== void 0 ? this : A;
        if (!in9.is(w)) throw new A.TypeError("'set pathname' called on an object that is not a valid instance of URL.");
        z = uD.USVString(z, {
          context: "Failed to set the 'pathname' property on 'URL': The provided value",
          globals: A
        }), w[IY].pathname = z;
      }
      get search() {
        let z = this !== null && this !== void 0 ? this : A;
        if (!in9.is(z)) throw new A.TypeError("'get search' called on an object that is not a valid instance of URL.");
        return z[IY].search;
      }
      set search(z) {
        let w = this !== null && this !== void 0 ? this : A;
        if (!in9.is(w)) throw new A.TypeError("'set search' called on an object that is not a valid instance of URL.");
        z = uD.USVString(z, {
          context: "Failed to set the 'search' property on 'URL': The provided value",
          globals: A
        }), w[IY].search = z;
      }
      get searchParams() {
        let z = this !== null && this !== void 0 ? this : A;
        if (!in9.is(z)) throw new A.TypeError("'get searchParams' called on an object that is not a valid instance of URL.");
        return lV.getSameObject(this, "searchParams", () => {
          return lV.tryWrapperForImpl(z[IY].searchParams);
        });
      }
      get hash() {
        let z = this !== null && this !== void 0 ? this : A;
        if (!in9.is(z)) throw new A.TypeError("'get hash' called on an object that is not a valid instance of URL.");
        return z[IY].hash;
      }
      set hash(z) {
        let w = this !== null && this !== void 0 ? this : A;
        if (!in9.is(w)) throw new A.TypeError("'set hash' called on an object that is not a valid instance of URL.");
        z = uD.USVString(z, {
          context: "Failed to set the 'hash' property on 'URL': The provided value",
          globals: A
        }), w[IY].hash = z;
      }
      static parse(z) {
        if (arguments.length < 1) throw new A.TypeError(`Failed to execute 'parse' on 'URL': 1 argument required, but only ${arguments.length} present.`);
        let w = [];
        {
          let H = arguments[0];
          H = uD.USVString(H, {
            context: "Failed to execute 'parse' on 'URL': parameter 1",
            globals: A
          }), w.push(H);
        }
        {
          let H = arguments[1];
          if (H !== void 0) H = uD.USVString(H, {
            context: "Failed to execute 'parse' on 'URL': parameter 2",
            globals: A
          });
          w.push(H);
        }
        return lV.tryWrapperForImpl($u.implementation.parse(A, ...w));
      }
      static canParse(z) {
        if (arguments.length < 1) throw new A.TypeError(`Failed to execute 'canParse' on 'URL': 1 argument required, but only ${arguments.length} present.`);
        let w = [];
        {
          let H = arguments[0];
          H = uD.USVString(H, {
            context: "Failed to execute 'canParse' on 'URL': parameter 1",
            globals: A
          }), w.push(H);
        }
        {
          let H = arguments[1];
          if (H !== void 0) H = uD.USVString(H, {
            context: "Failed to execute 'canParse' on 'URL': parameter 2",
            globals: A
          });
          w.push(H);
        }
        return $u.implementation.canParse(...w);
      }
    }
    if (Object.defineProperties(Y.prototype, {
      toJSON: {
        enumerable: !0
      },
      href: {
        enumerable: !0
      },
      toString: {
        enumerable: !0
      },
      origin: {
        enumerable: !0
      },
      protocol: {
        enumerable: !0
      },
      username: {
        enumerable: !0
      },
      password: {
        enumerable: !0
      },
      host: {
        enumerable: !0
      },
      hostname: {
        enumerable: !0
      },
      port: {
        enumerable: !0
      },
      pathname: {
        enumerable: !0
      },
      search: {
        enumerable: !0
      },
      searchParams: {
        enumerable: !0
      },
      hash: {
        enumerable: !0
      },
      [Symbol.toStringTag]: {
        value: "URL",
        configurable: !0
      }
    }), Object.defineProperties(Y, {
      parse: {
        enumerable: !0
      },
      canParse: {
        enumerable: !0
      }
    }), q.URL = Y, Object.defineProperty(A, "URL", {
      configurable: !0,
      writable: !0,
      value: Y
    }), K.includes("Window")) Object.defineProperty(A, "webkitURL", {
      configurable: !0,
      writable: !0,
      value: Y
    });
  };
  var $u = __$.ui4();
});

// Register to shared state
__$.Fi4 = Fi4;
