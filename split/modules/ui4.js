// Module: ui4
// Dependencies: rw6, ow6, tw6

import { __$ } from "../state.js";
const { IcK, LcK, sc6, o, oc6, Rg, v, _q, k, CA, ScK, BiA } = __$;

var ui4 = v(pn9 => {
  var nz = __$.rw6(),
    xi4 = __$.ow6(),
    Un9 = __$.tw6();
  pn9.implementation = class A {
    constructor(K, [q, Y]) {
      let z = null;
      if (Y !== void 0) {
        if (z = nz.basicURLParse(Y), z === null) throw TypeError(`Invalid base URL: ${Y}`);
      }
      let w = nz.basicURLParse(q, {
        baseURL: z
      });
      if (w === null) throw TypeError(`Invalid URL: ${q}`);
      let H = w.query !== null ? w.query : "";
      this._url = w, this._query = Un9.createImpl(K, [H], {
        doNotStripQMark: !0
      }), this._query._url = this;
    }
    static parse(K, q, Y) {
      try {
        return new A(K, [q, Y]);
      } catch {
        return null;
      }
    }
    static canParse(K, q) {
      let Y = null;
      if (q !== void 0) {
        if (Y = nz.basicURLParse(q), Y === null) return !1;
      }
      if (nz.basicURLParse(K, {
        baseURL: Y
      }) === null) return !1;
      return !0;
    }
    get href() {
      return nz.serializeURL(this._url);
    }
    set href(K) {
      let q = nz.basicURLParse(K);
      if (q === null) throw TypeError(`Invalid URL: ${K}`);
      this._url = q, this._query._list.splice(0);
      let {
        query: Y
      } = q;
      if (Y !== null) this._query._list = xi4.parseUrlencodedString(Y);
    }
    get origin() {
      return nz.serializeURLOrigin(this._url);
    }
    get protocol() {
      return `${this._url.scheme}:`;
    }
    set protocol(K) {
      nz.basicURLParse(`${K}:`, {
        url: this._url,
        stateOverride: "scheme start"
      });
    }
    get username() {
      return this._url.username;
    }
    set username(K) {
      if (nz.cannotHaveAUsernamePasswordPort(this._url)) return;
      nz.setTheUsername(this._url, K);
    }
    get password() {
      return this._url.password;
    }
    set password(K) {
      if (nz.cannotHaveAUsernamePasswordPort(this._url)) return;
      nz.setThePassword(this._url, K);
    }
    get host() {
      let K = this._url;
      if (K.host === null) return "";
      if (K.port === null) return nz.serializeHost(K.host);
      return `${nz.serializeHost(K.host)}:${nz.serializeInteger(K.port)}`;
    }
    set host(K) {
      if (nz.hasAnOpaquePath(this._url)) return;
      nz.basicURLParse(K, {
        url: this._url,
        stateOverride: "host"
      });
    }
    get hostname() {
      if (this._url.host === null) return "";
      return nz.serializeHost(this._url.host);
    }
    set hostname(K) {
      if (nz.hasAnOpaquePath(this._url)) return;
      nz.basicURLParse(K, {
        url: this._url,
        stateOverride: "hostname"
      });
    }
    get port() {
      if (this._url.port === null) return "";
      return nz.serializeInteger(this._url.port);
    }
    set port(K) {
      if (nz.cannotHaveAUsernamePasswordPort(this._url)) return;
      if (K === "") this._url.port = null;else nz.basicURLParse(K, {
        url: this._url,
        stateOverride: "port"
      });
    }
    get pathname() {
      return nz.serializePath(this._url);
    }
    set pathname(K) {
      if (nz.hasAnOpaquePath(this._url)) return;
      this._url.path = [], nz.basicURLParse(K, {
        url: this._url,
        stateOverride: "path start"
      });
    }
    get search() {
      if (this._url.query === null || this._url.query === "") return "";
      return `?${this._url.query}`;
    }
    set search(K) {
      let q = this._url;
      if (K === "") {
        q.query = null, this._query._list = [];
        return;
      }
      let Y = K[0] === "?" ? K.substring(1) : K;
      q.query = "", nz.basicURLParse(Y, {
        url: q,
        stateOverride: "query"
      }), this._query._list = xi4.parseUrlencodedString(Y);
    }
    get searchParams() {
      return this._query;
    }
    get hash() {
      if (this._url.fragment === null || this._url.fragment === "") return "";
      return `#${this._url.fragment}`;
    }
    set hash(K) {
      if (K === "") {
        this._url.fragment = null;
        return;
      }
      let q = K[0] === "#" ? K.substring(1) : K;
      this._url.fragment = "", nz.basicURLParse(q, {
        url: this._url,
        stateOverride: "fragment"
      });
    }
    toJSON() {
      return this.href;
    }
  };
});

// Register to shared state
__$.ui4 = ui4;
